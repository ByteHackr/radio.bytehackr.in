#!/usr/bin/env node
/**
 * Integrity checks for ByteHackr's Radio.
 * No npm dependencies — Node 18+ is enough.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];

const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

const read = (name) => readFileSync(join(ROOT, name), "utf8");

function assert(cond, msg) {
  if (!cond) fail(msg);
}

console.log("ByteHackr's Radio — CI checks\n");

// ---------- required files ----------
const requiredFiles = [
  "index.html",
  "style.css",
  "script.js",
  "CNAME",
  ".nojekyll",
  "README.md",
  "LICENSE",
  "scripts/add-tracks.sh",
  "scripts/add-tracks.mjs",
  "scripts/add-tracks.test.mjs",
  "vendor/hls.min.js",
];
for (const file of requiredFiles) {
  assert(existsSync(join(ROOT, file)), `missing required file: ${file}`);
}

const html = existsSync(join(ROOT, "index.html")) ? read("index.html") : "";
const css = existsSync(join(ROOT, "style.css")) ? read("style.css") : "";
const js = existsSync(join(ROOT, "script.js")) ? read("script.js") : "";

// ---------- CNAME / branding ----------
if (html) {
  const cname = read("CNAME").trim();
  assert(cname === "radio.bytehackr.in", `CNAME should be radio.bytehackr.in, got "${cname}"`);
  assert(html.includes("https://radio.bytehackr.in/"), "canonical / Open Graph URL should be radio.bytehackr.in");
  assert(/ByteHackr/i.test(html), "index.html should mention ByteHackr");
  assert(/<title>[^<]*ByteHackr/i.test(html), "document title should include ByteHackr");
  assert(/name="description"/.test(html), "missing meta description");
  assert(/property="og:title"/.test(html), "missing Open Graph title");
  assert(/property="og:description"/.test(html), "missing Open Graph description");
  assert(/rel="canonical"/.test(html), "missing canonical URL");
  assert(html.includes('lang="en"'), "html lang should be en");
}

assert(css.length > 1000, "style.css looks empty");
assert(js.includes("const STATIONS"), "script.js is missing STATIONS");

function objectKeysFromConst(src, name) {
  const needle = `const ${name} = {`;
  const start = src.indexOf(needle);
  if (start < 0) return [];
  const open = src.indexOf("{", start);
  let depth = 0;
  let inStr = false;
  let quote = "";
  let escape = false;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
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
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        return [...src.slice(open + 1, i).matchAll(/(?:^|\s)([a-z][a-z0-9]*):\s*\{\s*\n\s*label:/g)].map((m) => m[1]);
      }
    }
  }
  return [];
}

function constBody(src, name) {
  const needle = `const ${name} = {`;
  const start = src.indexOf(needle);
  if (start < 0) return "";
  const open = src.indexOf("{", start);
  let depth = 0;
  let inStr = false;
  let quote = "";
  let escape = false;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
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
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return src.slice(open + 1, i);
    }
  }
  return "";
}

// ---------- stations: JS keys vs HTML options vs pills ----------
const youtubeKeys = objectKeysFromConst(js, "STATIONS");
const liveKeys = objectKeysFromConst(js, "LIVE_RADIOS");
const stationKeys = [...youtubeKeys, ...liveKeys];
assert(youtubeKeys.length >= 8, `expected at least 8 YouTube stations, found ${youtubeKeys.length}`);
assert(liveKeys.length >= 3, `expected at least 3 live radio stations, found ${liveKeys.length}`);
assert(new Set(stationKeys).size === stationKeys.length, `duplicate station keys: ${stationKeys.join(", ")}`);

const htmlOptions = [...html.matchAll(/<option value="([^"]+)"/g)].map((m) => m[1]);
const pillValues = [...html.matchAll(/class="station-pill[^"]*" data-value="([^"]+)"/g)].map((m) => m[1]);

const sameSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x)) && b.every((x) => a.includes(x));
assert(sameSet(stationKeys, htmlOptions), `station keys [${stationKeys.join(", ")}] must match <option> values [${htmlOptions.join(", ")}]`);
assert(sameSet(stationKeys, pillValues), `station keys [${stationKeys.join(", ")}] must match station-pill data-value [${pillValues.join(", ")}]`);

// ---------- YouTube IDs + non-empty playlists ----------
const YT_ID = /^[A-Za-z0-9_-]{11}$/;
const idCounts = new Map();
for (const key of youtubeKeys) {
  const block = js.match(new RegExp(`${key}:\\s*\\{[\\s\\S]*?songs:\\s*\\[([\\s\\S]*?)\\]\\s*\\}`, "m"));
  const ids = block ? [...block[1].matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]) : [];
  assert(ids.length > 0, `station "${key}" has no songs`);
  for (const id of ids) {
    assert(YT_ID.test(id), `invalid YouTube id in ${key}: "${id}"`);
    idCounts.set(id, (idCounts.get(id) || 0) + 1);
  }
  console.log(`  station ${key.padEnd(12)} ${String(ids.length).padStart(4)} tracks`);
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const liveBody = constBody(js, "LIVE_RADIOS");
assert(liveBody.length > 0, "LIVE_RADIOS catalog is missing");
for (const key of liveKeys) {
  const blockMatch = liveBody.match(new RegExp(`${key}:\\s*\\{[\\s\\S]*?streams:\\s*\\[([\\s\\S]*?)\\]\\s*\\}`, "m"));
  const streamBlock = blockMatch ? blockMatch[1] : "";
  const ids = [...streamBlock.matchAll(/uuid:\s*"([^"]+)"/g)].map((m) => m[1]);
  assert(ids.length > 0, `live station "${key}" has no streams`);
  for (const id of ids) {
    assert(UUID.test(id), `invalid Radio Browser uuid in ${key}: "${id}"`);
  }
  console.log(`  live    ${key.padEnd(12)} ${String(ids.length).padStart(4)} streams`);
}

const dupes = [...idCounts.entries()].filter(([, n]) => n > 1);
if (dupes.length) {
  warn(`${dupes.length} YouTube ids appear in more than one station (ok if intentional)`);
}

// ---------- backgrounds in sync with assets/ ----------
const bgMatch = js.match(/const BACKGROUNDS = \[([\s\S]*?)\]/);
assert(!!bgMatch, "BACKGROUNDS array not found");
const backgrounds = bgMatch ? [...bgMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]) : [];
assert(backgrounds.length > 0, "BACKGROUNDS is empty");

const assetDir = join(ROOT, "assets");
const assetFiles = existsSync(assetDir)
  ? readdirSync(assetDir).filter((name) => {
      const p = join(assetDir, name);
      return statSync(p).isFile() && !name.startsWith(".");
    })
  : [];

for (const src of backgrounds) {
  assert(existsSync(join(ROOT, src)), `BACKGROUNDS entry missing on disk: ${src}`);
}

const listedBasenames = new Set(backgrounds.map((src) => src.split("/").pop()));
for (const file of assetFiles) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
  if (!listedBasenames.has(file)) {
    fail(`assets/${file} is not listed in BACKGROUNDS`);
  }
}

const heroBg = html.match(/--hero-bg", "url\('([^']+)'\)/);
if (heroBg) {
  assert(existsSync(join(ROOT, heroBg[1])), `default hero background missing: ${heroBg[1]}`);
  assert(backgrounds.includes(heroBg[1]), `default hero background ${heroBg[1]} is not in BACKGROUNDS`);
}

// ---------- shlokas ----------
const shlokaCount = [...js.matchAll(/ref:\s*"/g)].length;
assert(shlokaCount >= 5, `expected several shlokas, found ${shlokaCount}`);

// ---------- DOM ids used by script.js must exist in HTML ----------
const jsDomIds = [...new Set([...js.matchAll(/getElementById\("([^"]+)"\)/g)].map((m) => m[1]))];
for (const id of jsDomIds) {
  assert(html.includes(`id="${id}"`), `script.js uses #${id} but index.html has no matching id`);
}

// ---------- GitHub links ----------
assert(
  html.includes("https://github.com/bytehackr/radio.bytehackr.in") ||
    html.includes("https://github.com/ByteHackr/radio.bytehackr.in"),
  "GitHub source links are missing or point at the wrong repo"
);

const selectBlock = html.match(/<select id="stationSelect"[\s\S]*?<\/select>/);
assert(!!selectBlock, "station select is missing");
if (selectBlock) {
  const liveAt = selectBlock[0].indexOf('optgroup label="Live radio"');
  const musicAt = selectBlock[0].indexOf('optgroup label="Music"');
  assert(liveAt >= 0 && musicAt >= 0 && liveAt < musicAt, "Live radio should be the first Explore stations group");
}
const firstPillGroup = html.match(/id="stationPills"[\s\S]*?data-group="([^"]+)"/);
assert(firstPillGroup && firstPillGroup[1] === "live", "first station pill row should be live radio");

const readme = existsSync(join(ROOT, "README.md")) ? read("README.md") : "";
assert(readme.includes("scripts/add-tracks.sh"), "README.md should document scripts/add-tracks.sh");
assert(readme.includes("--dry-run"), "README.md should mention --dry-run for add-tracks");
assert(readme.includes("--new"), "README.md should mention creating a station with --new");
assert(readme.includes("radio-browser"), "README.md should document live radio via radio-browser");
assert(readme.includes("radio.bytehackr.in"), "README.md should use the radio.bytehackr.in domain");
assert(readme.includes("github.com/ByteHackr/radio.bytehackr.in"), "README.md should link to the radio.bytehackr.in GitHub repo");
assert(!js.includes("LISTENERS_FALLBACK"), "listener count must not use a simulated fallback");
assert(js.includes("abacus.jasoncameron.dev"), "listener count should use the Abacus API");

console.log(`\n  stations     ${stationKeys.length}`);
console.log(`  tracks       ${[...idCounts.values()].reduce((a, b) => a + b, 0)}`);
console.log(`  backgrounds  ${backgrounds.length}`);
console.log(`  shlokas      ${shlokaCount}`);
console.log(`  assets       ${assetFiles.length} file(s)`);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of warnings) console.log(`  ! ${w}`);
}

if (errors.length) {
  console.log("\nFailures:");
  for (const e of errors) console.log(`  ✖ ${e}`);
  process.exit(1);
}

console.log("\nAll checks passed.");
