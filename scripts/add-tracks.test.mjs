#!/usr/bin/env node
/**
 * Tests for scripts/add-tracks.mjs — CLI errors, URL parsing, and isolated writes.
 * Does not call YouTube or yt-dlp (--offline).
 */
import { mkdtempSync, rmSync, readFileSync, cpSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { parseYouTubeUrl } from "./add-tracks.mjs";

const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");
const CLI = join(REPO, "scripts/add-tracks.mjs");
const WRAPPER = join(REPO, "scripts/add-tracks.sh");
const FAKE_ID = "TesTvid0001";
const FAKE_ID_2 = "TesTvid0002";

let failed = 0;

function ok(cond, msg) {
  if (cond) {
    console.log(`  ok  ${msg}`);
    return;
  }
  failed++;
  console.error(`  FAIL  ${msg}`);
}

function run(args, extra = {}) {
  return spawnSync(process.execPath, [CLI, ...args], {
    encoding: "utf8",
    cwd: REPO,
    env: { ...process.env, ...extra.env },
  });
}

function fixtureRoot() {
  const dir = mkdtempSync(join(tmpdir(), "radio-add-tracks-"));
  cpSync(join(REPO, "script.js"), join(dir, "script.js"));
  cpSync(join(REPO, "index.html"), join(dir, "index.html"));
  return dir;
}

console.log("add-tracks tests\n");

// ---------- URL parsing ----------
{
  const watch = parseYouTubeUrl("https://www.youtube.com/watch?v=Q2aPJT1Ex0k");
  ok(watch.kind === "video" && watch.videoId === "Q2aPJT1Ex0k", "parse watch?v=");

  const short = parseYouTubeUrl("https://youtu.be/Q2aPJT1Ex0k");
  ok(short.kind === "video" && short.videoId === "Q2aPJT1Ex0k", "parse youtu.be");

  const shorts = parseYouTubeUrl("https://www.youtube.com/shorts/Q2aPJT1Ex0k");
  ok(shorts.kind === "video" && shorts.videoId === "Q2aPJT1Ex0k", "parse /shorts/");

  const playlist = parseYouTubeUrl("https://www.youtube.com/playlist?list=PLabcdefghij");
  ok(playlist.kind === "playlist" && playlist.playlistId === "PLabcdefghij", "parse playlist URL");

  const raw = parseYouTubeUrl("Q2aPJT1Ex0k");
  ok(raw.kind === "video" && raw.videoId === "Q2aPJT1Ex0k", "parse bare 11-char id");
}

// ---------- CLI: help / list / wrapper ----------
{
  const help = run(["--help"]);
  ok(help.status === 0, "--help exits 0");
  ok(/--new/.test(help.stdout) && /--dry-run/.test(help.stdout), "--help mentions --new and --dry-run");

  const list = run(["--list"]);
  ok(list.status === 0, "--list exits 0");
  ok(/\bbengali\b/.test(list.stdout) && /\bgita\b/.test(list.stdout), "--list prints station keys");

  const sh = spawnSync("bash", [WRAPPER, "--list"], { encoding: "utf8", cwd: REPO });
  ok(sh.status === 0 && /\bbengali\b/.test(sh.stdout), "add-tracks.sh --list works");
}

// ---------- CLI: errors (no network, no writes) ----------
{
  const none = run([]);
  ok(none.status !== 0 && /pass a YouTube/i.test(none.stderr), "no args fails");

  const badStation = run(["nope", "https://youtu.be/Q2aPJT1Ex0k"]);
  ok(badStation.status !== 0 && /unknown station/i.test(badStation.stderr), "unknown station fails");

  const noLabel = run(["--new", "lofi", "https://youtu.be/Q2aPJT1Ex0k"]);
  ok(noLabel.status !== 0 && /--label/.test(noLabel.stderr), "--new without --label fails");

  const badKey = run(["--new", "Lofi!", "--label", "X", "https://youtu.be/Q2aPJT1Ex0k"]);
  ok(badKey.status !== 0 && /invalid station key/i.test(badKey.stderr), "invalid --new key fails");

  const notYt = run(["ganesha", "https://example.com/watch?v=Q2aPJT1Ex0k"]);
  ok(notYt.status !== 0 && /not a YouTube URL/i.test(notYt.stderr), "non-YouTube URL fails");

  const playlistOffline = run(["ganesha", "--offline", "https://www.youtube.com/playlist?list=PLabcdefghij"]);
  ok(
    playlistOffline.status !== 0 && /--offline cannot expand playlists/i.test(playlistOffline.stderr),
    "--offline rejects playlists"
  );
}

// ---------- Isolated writes (RADIO_ROOT) ----------
{
  const dir = fixtureRoot();
  const env = { RADIO_ROOT: dir };
  const beforeJs = readFileSync(join(REPO, "script.js"), "utf8");
  const beforeHtml = readFileSync(join(REPO, "index.html"), "utf8");
  const fixtureBefore = readFileSync(join(dir, "script.js"), "utf8");

  const dry = run(
    ["ganesha", "--offline", "--dry-run", "--title", "Hook Song", "--artist", "Test", FAKE_ID],
    { env }
  );
  ok(dry.status === 0 && /Dry run/.test(dry.stdout), "--dry-run --offline exits 0");
  ok(readFileSync(join(dir, "script.js"), "utf8") === fixtureBefore, "--dry-run does not write script.js");

  const add = run(
    ["ganesha", "--offline", "--skip-check", "--title", "Hook Song", "--artist", "Test", FAKE_ID],
    { env }
  );
  ok(add.status === 0 && add.stdout.includes(FAKE_ID), "adds a video id to an existing station");
  const afterAdd = readFileSync(join(dir, "script.js"), "utf8");
  ok(afterAdd.includes(FAKE_ID) && afterAdd.includes("Hook Song"), "fixture script.js contains the new song");
  ok(!readFileSync(join(REPO, "script.js"), "utf8").includes(FAKE_ID), "does not write the real script.js");

  const dup = run(["ganesha", "--offline", "--skip-check", FAKE_ID], { env });
  ok(dup.status === 0 && /Nothing to add/.test(dup.stdout), "duplicate id is skipped");

  const created = run(
    [
      "--new",
      "hooktest",
      "--label",
      "Hook Test",
      "--emoji",
      "🧪",
      "--group",
      "music",
      "--offline",
      "--skip-check",
      "--title",
      "New Station Track",
      FAKE_ID_2,
    ],
    { env }
  );
  ok(created.status === 0 && /New station "hooktest"/.test(created.stdout), "creates a station with --new");
  const js = readFileSync(join(dir, "script.js"), "utf8");
  const html = readFileSync(join(dir, "index.html"), "utf8");
  ok(/hooktest:\s*\{/.test(js) && js.includes(FAKE_ID_2), "new station lands in script.js");
  ok(html.includes('value="hooktest"') && html.includes('data-value="hooktest"'), "new station option and pill in index.html");

  ok(readFileSync(join(REPO, "script.js"), "utf8") === beforeJs, "repo script.js unchanged after tests");
  ok(readFileSync(join(REPO, "index.html"), "utf8") === beforeHtml, "repo index.html unchanged after tests");

  rmSync(dir, { recursive: true, force: true });
}

if (failed) {
  console.error(`\n${failed} add-tracks test(s) failed.`);
  process.exit(1);
}

console.log("\nAll add-tracks tests passed.");
