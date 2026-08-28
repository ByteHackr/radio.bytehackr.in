#!/usr/bin/env node
/**
 * Add a YouTube video or playlist to ByteHackr's Radio.
 * Prefer yt-dlp when installed — it handles long playlists best.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join, resolve as pathResolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { createInterface } from "node:readline/promises";
import { stdin as stdinStream, stdout as stdoutStream } from "node:process";

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = process.env.RADIO_ROOT ? pathResolve(process.env.RADIO_ROOT) : REPO_ROOT;
const SCRIPT_JS = join(ROOT, "script.js");
const INDEX_HTML = join(ROOT, "index.html");
const KEY_RE = /^[a-z][a-z0-9]{0,23}$/;
const YT_ID_RE = /^[A-Za-z0-9_-]{11}$/;
const UA =
  "Mozilla/5.0 (compatible; ByteHackrRadio/1.0; +https://relax.bytehackr.in)";

const HELP = `Add a YouTube song or playlist to ByteHackr's Radio.

Usage:
  ./scripts/add-tracks.sh --list
  ./scripts/add-tracks.sh <station> <youtube-url>
  ./scripts/add-tracks.sh <youtube-url> --station <key>
  ./scripts/add-tracks.sh --new <key> --label "Name" [--emoji 🎵] [--group music|devotional] <youtube-url>

Examples:
  ./scripts/add-tracks.sh bengali 'https://youtu.be/Q2aPJT1Ex0k'
  ./scripts/add-tracks.sh relax 'https://www.youtube.com/playlist?list=PLxxxx'
  ./scripts/add-tracks.sh --new lofi --label "Lofi Beats" --emoji 🌙 \\
      'https://www.youtube.com/playlist?list=PLxxxx'

A watch URL adds one song. A playlist URL adds every video (install yt-dlp
for long playlists). Duplicates already on that station are skipped.

Flags:
  --station KEY       Existing station (bengali, hindi, relax, ...)
  --new KEY           Create this station key (lowercase letters/digits)
  --label TEXT        Display name for a new station (required with --new)
  --emoji 🎵          Prefix for the new station chip (optional)
  --group music|devotional   Which dropdown group (default: music)
  --playlist          Treat a watch URL's list= as the whole playlist
  --video             Add only the video, even if the URL has list=
  --title --artist --year    Override metadata (single song)
  --limit N           Cap how many playlist items to import
  --force             Add even if the id is already on the station
  --dry-run           Print what would change, do not write files
  --offline           Use the video id only; skip yt-dlp / YouTube fetch
  --skip-check        After writing, skip scripts/ci-check.mjs
  --list              Show current stations
  --help              This help
`;

function die(msg, code = 1) {
  console.error(`add-tracks: ${msg}`);
  process.exit(code);
}

function read(path) {
  return readFileSync(path, "utf8");
}

function stationKeys(js) {
  const start = js.indexOf("const STATIONS = {");
  const marker = "\n};\n\n// ============================================================\n// BACKGROUNDS";
  const end = js.indexOf(marker);
  const block = start >= 0 && end > start ? js.slice(start, end + 3) : js;
  return [...block.matchAll(/(?:^|\s)([a-z][a-z0-9]*):\s*\{\s*\n\s*label:/g)].map((m) => m[1]);
}

function stationLabel(js, key) {
  const re = new RegExp(`(?:^|\\s)${key}:\\s*\\{\\s*\\n\\s*label:\\s*"((?:\\\\.|[^"\\\\])*)"`, "m");
  const m = js.match(re);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\") : key;
}

function songIdsInStation(js, key) {
  const range = songsArrayRange(js, key);
  if (!range) return [];
  return [...js.slice(range.open + 1, range.close).matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function findMatching(str, openIdx, openCh, closeCh) {
  let depth = 0;
  let inStr = false;
  let quote = "";
  let escape = false;
  for (let i = openIdx; i < str.length; i++) {
    const c = str[i];
    if (inStr) {
      if (escape) {
        escape = false;
        continue;
      }
      if (c === "\\") {
        escape = true;
        continue;
      }
      if (c === quote) inStr = false;
      continue;
    }
    if (c === "'" || c === '"' || c === "`") {
      inStr = true;
      quote = c;
      continue;
    }
    if (c === openCh) depth++;
    else if (c === closeCh) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function stationObjectRange(js, key) {
  const re = new RegExp(`(?:^|[\\s,{])(${key}):\\s*\\{`, "m");
  const m = re.exec(js);
  if (!m) return null;
  const brace = js.indexOf("{", m.index + m[0].length - 1);
  const close = findMatching(js, brace, "{", "}");
  if (close < 0) return null;
  return { open: brace, close };
}

function songsArrayRange(js, key) {
  const obj = stationObjectRange(js, key);
  if (!obj) return null;
  const slice = js.slice(obj.open, obj.close);
  const songsAt = slice.search(/songs:\s*\[/);
  if (songsAt < 0) return null;
  const abs = obj.open + slice.indexOf("[", songsAt);
  const close = findMatching(js, abs, "[", "]");
  if (close < 0) return null;
  return { open: abs, close };
}

export function parseYouTubeUrl(raw) {
  let url;
  try {
    url = new URL(raw);
  } catch {
    if (YT_ID_RE.test(raw)) return { kind: "video", videoId: raw, playlistId: null, href: `https://www.youtube.com/watch?v=${raw}` };
    die(`not a URL: ${raw}`);
  }
  const host = url.hostname.replace(/^www\./, "");
  if (!/(^|\.)youtube\.com$/.test(host) && host !== "youtu.be" && host !== "music.youtube.com") {
    die(`not a YouTube URL: ${raw}`);
  }
  const videoId =
    url.searchParams.get("v") ||
    (host === "youtu.be" ? url.pathname.split("/").filter(Boolean)[0] : null) ||
    (url.pathname.match(/\/(?:embed|shorts|live)\/([A-Za-z0-9_-]{11})/) || [])[1] ||
    null;
  const playlistId = url.searchParams.get("list");
  const isPlaylistPage = /\/playlist\/?$/.test(url.pathname) || url.pathname.includes("/playlist");
  return {
    kind: isPlaylistPage && playlistId ? "playlist" : videoId ? "video" : playlistId ? "playlist" : "unknown",
    videoId: videoId && YT_ID_RE.test(videoId) ? videoId : null,
    playlistId,
    href: url.href,
  };
}

function textOf(node) {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (node.simpleText) return node.simpleText;
  if (Array.isArray(node.runs)) return node.runs.map((r) => r.text || "").join("");
  return "";
}

function clip(s, n = 120) {
  const t = String(s || "").replace(/\s+/g, " ").trim();
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
}

function songLine(song) {
  return `      { id: ${JSON.stringify(song.id)}, title: ${JSON.stringify(clip(song.title))}, artist: ${JSON.stringify(clip(song.artist))}, year: ${JSON.stringify(clip(song.year, 80))} },`;
}

function hasYtDlp() {
  const r = spawnSync("yt-dlp", ["--version"], { encoding: "utf8" });
  return r.status === 0;
}

function ytDlpJson(url, { playlist }) {
  const args = ["--skip-download", "--no-warnings", "-J", "--no-call-home", "--socket-timeout", "20"];
  if (playlist) args.push("--yes-playlist", "--flat-playlist");
  else args.push("--no-playlist");
  args.push(url);
  const r = spawnSync("yt-dlp", args, { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  if (r.status !== 0) {
    const err = (r.stderr || r.stdout || "").trim().split("\n").slice(-2).join(" ");
    console.error(`add-tracks: yt-dlp failed (${err || `exit ${r.status}`}); falling back.`);
    return null;
  }
  try {
    return JSON.parse(r.stdout);
  } catch {
    console.error("add-tracks: yt-dlp returned invalid JSON; falling back.");
    return null;
  }
}

function fromYtDlpEntry(e) {
  if (!e) return null;
  const id = e.id || (typeof e.url === "string" && (e.url.match(/([A-Za-z0-9_-]{11})$/) || [])[1]);
  if (!id || !YT_ID_RE.test(id) || e._type === "playlist") return null;
  if (e.ie_key && /Playlist/i.test(e.ie_key) && !e.title) return null;
  return {
    id,
    title: e.track || e.title || "",
    artist: e.artist || e.creator || e.uploader || e.channel || "",
    year: e.release_year ? String(e.release_year) : "",
  };
}

async function oembed(videoId) {
  const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}&format=json`;
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (!res.ok) return { id: videoId, title: "", artist: "", year: "" };
  const data = await res.json();
  return {
    id: videoId,
    title: data.title || "",
    artist: data.author_name || "",
    year: "",
  };
}

function collectPlaylistVideos(node, out, tokens) {
  if (!node || typeof node !== "object") return;
  if (node.playlistVideoRenderer?.videoId) {
    const r = node.playlistVideoRenderer;
    out.push({
      id: r.videoId,
      title: textOf(r.title),
      artist: textOf(r.shortBylineText),
      year: "",
    });
    return;
  }
  if (node.continuationCommand?.token) tokens.push(node.continuationCommand.token);
  const values = Array.isArray(node) ? node : Object.values(node);
  for (const v of values) collectPlaylistVideos(v, out, tokens);
}

async function innertubeBrowse(payload) {
  const res = await fetch("https://www.youtube.com/youtubei/v1/browse?prettyPrint=false", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "user-agent": UA,
      "x-youtube-client-name": "1",
      "x-youtube-client-version": "2.20240828.00.00",
    },
    body: JSON.stringify({
      context: {
        client: {
          clientName: "WEB",
          clientVersion: "2.20240828.00.00",
          hl: "en",
          gl: "IN",
        },
      },
      ...payload,
    }),
  });
  if (!res.ok) die(`YouTube playlist request failed (${res.status})`);
  return res.json();
}

async function fetchPlaylistInnertube(playlistId, limit) {
  const songs = [];
  const seen = new Set();
  const seenTokens = new Set();
  let payload = { browseId: `VL${playlistId}` };
  for (let page = 0; page < 40; page++) {
    const data = await innertubeBrowse(payload);
    const batch = [];
    const tokens = [];
    collectPlaylistVideos(data, batch, tokens);
    for (const song of batch) {
      if (!YT_ID_RE.test(song.id) || seen.has(song.id)) continue;
      seen.add(song.id);
      songs.push(song);
      if (limit && songs.length >= limit) return songs;
    }
    const next = tokens.find((t) => t && !seenTokens.has(t));
    if (!next) break;
    seenTokens.add(next);
    payload = { continuation: next };
  }
  return songs;
}

async function resolveTracks(parsed, opts) {
  const wantPlaylist = opts.forcePlaylist || (parsed.kind === "playlist" && !opts.forceVideo);
  if (wantPlaylist && !parsed.playlistId) die("that URL is not a playlist");
  if (!wantPlaylist && !parsed.videoId) die("could not find a video id in that URL");

  if (hasYtDlp()) {
    const data = ytDlpJson(parsed.href, { playlist: wantPlaylist });
    if (data) {
      const entries = wantPlaylist ? data.entries || data.requested_entries || [] : [data];
      const songs = [];
      for (const e of entries) {
        const song = fromYtDlpEntry(e);
        if (song) songs.push(song);
        if (opts.limit && songs.length >= opts.limit) break;
      }
      if (songs.length) return songs;
    }
  } else if (wantPlaylist) {
    console.error("add-tracks: yt-dlp not found; using YouTube's public playlist API (may miss later pages).");
    console.error("            Install yt-dlp for complete playlists:  sudo dnf install yt-dlp");
  }

  if (wantPlaylist) return fetchPlaylistInnertube(parsed.playlistId, opts.limit);

  const song = await oembed(parsed.videoId);
  if (opts.title) song.title = opts.title;
  if (opts.artist) song.artist = opts.artist;
  if (opts.year) song.year = opts.year;
  return [song];
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function insertSongs(js, key, songs) {
  const range = songsArrayRange(js, key);
  if (!range) die(`could not find songs[] for station "${key}"`);
  const inner = js.slice(range.open + 1, range.close).replace(/\s+$/, "");
  const trimmed = inner.replace(/,?\s*$/, "");
  const prefix = trimmed.endsWith(",") || trimmed.trim() === "" ? trimmed : `${trimmed},`;
  const block = songs.map(songLine).join("\n");
  const nextInner = prefix.trim() === "" ? `\n${block}\n    ` : `${prefix}\n${block}\n    `;
  return js.slice(0, range.open + 1) + nextInner + js.slice(range.close);
}

function insertNewStation(js, key, label, songs) {
  const marker = "\n};\n\n// ============================================================\n// BACKGROUNDS";
  const at = js.indexOf(marker);
  if (at < 0) die("could not find the end of STATIONS in script.js");
  const block = `  ${key}: {
    label: ${JSON.stringify(label)},
    songs: [
${songs.map(songLine).join("\n")}
    ]
  },
`;
  return js.slice(0, at) + "\n" + block + js.slice(at);
}

function insertHtmlStation(html, { key, label, pillText, group }) {
  const groupLabel = group === "devotional" ? "Devotionals" : "Music";
  const option = `              <option value="${escapeHtml(key)}">${escapeHtml(label)}</option>\n`;
  const groupRe = new RegExp(`(<optgroup label="${groupLabel}">)([\\s\\S]*?)(</optgroup>)`);
  if (!groupRe.test(html)) die(`could not find optgroup "${groupLabel}" in index.html`);
  html = html.replace(groupRe, (_, a, inner, c) => a + inner.replace(/\s*$/, "\n") + option + "            " + c);

  const pill = `              <button type="button" class="station-pill" data-value="${escapeHtml(key)}">${escapeHtml(pillText)}</button>`;
  const groupAttr = group === "devotional" ? "devotional" : "music";
  const pillRe = new RegExp(
    `(<div class="pill-row"[^>]*data-group="${groupAttr}"[^>]*>)([\\s\\S]*?)(</div>)`
  );
  if (!pillRe.test(html)) die(`could not find station pill row for ${groupAttr}`);
  html = html.replace(pillRe, (_, a, inner, c) => a + inner.replace(/\s*$/, "\n") + pill + "\n            " + c);

  const keys = [...html.matchAll(/<option value="([^"]+)"/g)].map((m) => m[1]);
  html = html.replace(/\d+ stations · /, `${keys.length} stations · `);
  return html;
}

function printList(js) {
  const keys = stationKeys(js);
  console.log("Stations:\n");
  for (const key of keys) {
    const n = songIdsInStation(js, key).length;
    console.log(`  ${key.padEnd(12)} ${String(n).padStart(4)}  ${stationLabel(js, key)}`);
  }
  console.log(`\n${keys.length} stations`);
}

async function maybePromptStation(keys) {
  if (!stdinStream.isTTY) return null;
  const rl = createInterface({ input: stdinStream, output: stdoutStream });
  try {
    const answer = (await rl.question(`Station key (${keys.slice(0, 4).join(", ")}, …): `)).trim();
    return answer || null;
  } finally {
    rl.close();
  }
}

async function main() {
  let parsedArgs;
  try {
    parsedArgs = parseArgs({
      allowPositionals: true,
      options: {
        help: { type: "boolean", short: "h" },
        list: { type: "boolean" },
        station: { type: "string", short: "s" },
        new: { type: "string", short: "n" },
        label: { type: "string", short: "l" },
        emoji: { type: "string" },
        group: { type: "string", default: "music" },
        playlist: { type: "boolean" },
        video: { type: "boolean" },
        title: { type: "string" },
        artist: { type: "string" },
        year: { type: "string" },
        limit: { type: "string" },
        force: { type: "boolean" },
        "dry-run": { type: "boolean" },
        offline: { type: "boolean" },
        "skip-check": { type: "boolean" },
      },
    });
  } catch (err) {
    die(err.message);
  }

  const { values, positionals } = parsedArgs;
  if (values.help) {
    process.stdout.write(HELP);
    return;
  }

  if (!existsSync(SCRIPT_JS) || !existsSync(INDEX_HTML)) die("run this from the radio repo (script.js / index.html missing)");
  const js = read(SCRIPT_JS);
  const html = read(INDEX_HTML);
  const keys = stationKeys(js);

  if (values.list) {
    printList(js);
    return;
  }

  const positionalUrl =
    positionals.find((p) => /youtu|\.be\//i.test(p) || /^https?:/i.test(p)) ||
    positionals.find((p) => YT_ID_RE.test(p));
  const positionalKey = positionals.find((p) => p !== positionalUrl && KEY_RE.test(p));

  let url = positionalUrl;
  let station = values.station || positionalKey || null;
  const creating = Boolean(values.new);

  if (!url) die("pass a YouTube video or playlist URL\n\n" + HELP);

  if (creating) {
    station = values.new;
    if (!KEY_RE.test(station)) die(`invalid station key "${station}" — use lowercase letters, optional digits, starting with a letter`);
    if (keys.includes(station)) die(`station "${station}" already exists — drop --new and use --station ${station}`);
    if (!values.label) die("--new requires --label \"Station name\"");
  } else if (!station) {
    printList(js);
    station = await maybePromptStation(keys);
    if (!station) die("pass an existing station, or --new <key> --label \"Name\"");
    if (!keys.includes(station)) {
      die(`unknown station "${station}". Use --new ${station} --label "Name" to create it, or pick: ${keys.join(", ")}`);
    }
  } else if (!keys.includes(station)) {
    die(`unknown station "${station}". Known: ${keys.join(", ")}\nOr create one: --new ${station} --label "Name"`);
  }

  if (!creating && !KEY_RE.test(station)) die(`invalid station key "${station}"`);

  const group = (values.group || "music").toLowerCase();
  if (group !== "music" && group !== "devotional") die("--group must be music or devotional");

  const parsed = parseYouTubeUrl(url);
  if (parsed.kind === "unknown") die("could not tell if that is a video or a playlist");

  const wantPlaylist = values.playlist || (parsed.kind === "playlist" && !values.video);
  let tracks;
  if (values.offline) {
    if (wantPlaylist) die("--offline cannot expand playlists; pass a video URL or 11-character id");
    if (!parsed.videoId) die("--offline needs a video id");
    tracks = [
      {
        id: parsed.videoId,
        title: values.title || "",
        artist: values.artist || "",
        year: values.year || "",
      },
    ];
  } else {
    tracks = await resolveTracks(parsed, {
      forcePlaylist: values.playlist,
      forceVideo: values.video,
      limit: values.limit ? Number(values.limit) : 0,
      title: values.title,
      artist: values.artist,
      year: values.year,
    });
  }

  if (tracks.length === 1) {
    if (values.title) tracks[0].title = values.title;
    if (values.artist) tracks[0].artist = values.artist;
    if (values.year) tracks[0].year = values.year;
  }

  if (!tracks.length) die("no videos found");

  const existing = creating ? [] : songIdsInStation(js, station);
  const existingSet = new Set(existing);
  const added = [];
  const skipped = [];
  for (const song of tracks) {
    if (!YT_ID_RE.test(song.id)) continue;
    if (!values.force && existingSet.has(song.id)) {
      skipped.push(song.id);
      continue;
    }
    existingSet.add(song.id);
    added.push(song);
  }

  if (!added.length) {
    console.log(`Nothing to add — ${skipped.length} already on "${station}".`);
    return;
  }

  console.log(creating ? `New station "${station}"` : `Station "${station}" (${stationLabel(js, station)})`);
  for (const song of added) {
    console.log(`  + ${song.id}  ${song.title || "(no title)"}`);
  }
  if (skipped.length) console.log(`  skipped ${skipped.length} duplicate${skipped.length === 1 ? "" : "s"}`);

  if (values["dry-run"]) {
    console.log("\nDry run — no files written.");
    return;
  }

  let nextJs = js;
  let nextHtml = html;
  if (creating) {
    const pillText =
      values.emoji && !values.label.includes(values.emoji)
        ? `${values.emoji} ${values.label}`
        : values.label;
    nextJs = insertNewStation(js, station, pillText, added);
    nextHtml = insertHtmlStation(html, {
      key: station,
      label: values.label,
      pillText,
      group,
    });
  } else {
    nextJs = insertSongs(js, station, added);
  }

  writeFileSync(SCRIPT_JS, nextJs);
  if (creating) writeFileSync(INDEX_HTML, nextHtml);

  const check = spawnSync(process.execPath, ["--check", SCRIPT_JS], { encoding: "utf8" });
  if (check.status !== 0) die(`wrote script.js but it is not valid JS:\n${check.stderr || check.stdout}`);

  if (!values["skip-check"]) {
    const ci = spawnSync(process.execPath, [join(REPO_ROOT, "scripts/ci-check.mjs")], {
      encoding: "utf8",
      env: { ...process.env, RADIO_ROOT: ROOT },
    });
    if (ci.status !== 0) {
      console.error(ci.stdout || ci.stderr);
      die("files were written but integrity checks failed — fix script.js / index.html");
    }
  }

  console.log(`\nAdded ${added.length} track${added.length === 1 ? "" : "s"} to ${station}.`);
  if (creating) console.log("Updated script.js and index.html. Refresh the site to hear it.");
  else console.log("Updated script.js. Refresh the site to hear it.");
}

function isMainModule() {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return fileURLToPath(import.meta.url) === pathResolve(entry);
  } catch {
    return false;
  }
}

if (isMainModule()) {
  main().catch((err) => die(err.stack || err.message));
}
