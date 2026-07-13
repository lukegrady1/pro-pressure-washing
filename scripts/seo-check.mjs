#!/usr/bin/env node
/**
 * Automated on-page SEO check (SITE-SPEC §5.1 + §9.3).
 *
 * Flags any page whose title, meta description, H1, slug, word count or primary
 * keyword frequency falls outside the target ranges. Reads the service/town
 * content directly from src/data (source of truth) and, if a production build
 * exists in ./out, also char-checks the core static pages' rendered <title>,
 * <meta description> and <h1>.
 *
 * Zero dependencies. Run:  npm run seo-check   (or: node scripts/seo-check.mjs)
 * Exit code 1 if any hard FAIL is found (title/meta over limit, bad H1).
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const RESET = "\x1b[0m", RED = "\x1b[31m", YEL = "\x1b[33m", GRN = "\x1b[32m", DIM = "\x1b[2m";

// ---- targets (SITE-SPEC §5.1) ---------------------------------------------
const TITLE = { min: 50, max: 60 };
const META = { min: 140, max: 155 };
const H1 = { min: 20, max: 70 };
const SLUG_WORDS = { min: 3, max: 6 };
const RANGES = {
  service: { words: [600, 1000], keyword: [5, 8] },
  town: { words: [500, 800], keyword: [3, 5], name: [8, 12] },
  home: { words: [600, 900], keyword: [4, 6] },
  page: { words: [300, 500], keyword: [1, 2] }, // about / contact
};

let fails = 0, warns = 0;
const FAIL = (m) => { fails++; console.log(`  ${RED}✗ FAIL${RESET} ${m}`); };
const WARN = (m) => { warns++; console.log(`  ${YEL}▲ WARN${RESET} ${m}`); };
const OK = (m) => console.log(`  ${GRN}✓${RESET} ${DIM}${m}${RESET}`);

// ---- tiny parsers for the (import-free) data files ------------------------
// Split a data file into its top-level object literals (indented "  { ... },").
function topLevelObjects(src) {
  const out = [];
  const re = /\n {2}\{\n([\s\S]*?)\n {2}\},/g;
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}
function field(obj, name) {
  const m = obj.match(new RegExp(`${name}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1].replace(/\\"/g, '"').replace(/\\'/g, "'") : "";
}
// All string literals inside the `name: [ ... ]` array (bracket-matched, nested-safe).
function arrayStrings(obj, name) {
  const start = obj.indexOf(`${name}: [`);
  if (start === -1) return [];
  let i = obj.indexOf("[", start), depth = 0, end = i;
  for (; i < obj.length; i++) {
    if (obj[i] === "[") depth++;
    else if (obj[i] === "]") { depth--; if (depth === 0) { end = i; break; } }
  }
  const block = obj.slice(start, end + 1);
  return [...block.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((s) =>
    s[1].replace(/\\"/g, '"').replace(/\\'/g, "'")
  );
}
const wordCount = (t) => (t.trim().match(/\b[\w'’-]+\b/g) || []).length;
function countPhrase(text, phrase) {
  if (!phrase.trim()) return 0;
  const esc = phrase.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (text.match(new RegExp(esc, "gi")) || []).length;
}
// The "core" keyword is what natural copy actually repeats — the service term
// minus the location qualifier (real pages rarely use the exact "…Worcester MA"
// phrase contiguously, and the audit warns against that kind of stuffing).
function coreKeyword(keyword, townName) {
  let k = keyword;
  const strip = ["Worcester County", "Worcester", "Massachusetts", "Central MA", "MA"];
  if (townName) strip.unshift(townName);
  for (const s of strip) k = k.replace(new RegExp(`\\b${s}\\b`, "gi"), " ");
  return k.replace(/\s{2,}/g, " ").replace(/^[\s/]+|[\s/]+$/g, "").trim();
}

// ---- collect pages from data ----------------------------------------------
const pages = [];
const servicesSrc = readFileSync(join(ROOT, "src/data/services.ts"), "utf8");
for (const obj of topLevelObjects(servicesSrc)) {
  const slug = field(obj, "slug");
  if (!slug) continue;
  const bodyParts = [
    field(obj, "kicker"), field(obj, "excerpt"), field(obj, "h1"),
    ...arrayStrings(obj, "intro"), ...arrayStrings(obj, "sections"),
    ...arrayStrings(obj, "benefits"), ...arrayStrings(obj, "faqs"),
    field(obj, "pricingNote"),
  ];
  pages.push({
    type: "service", slug,
    title: field(obj, "title"), meta: field(obj, "metaDescription"),
    h1: field(obj, "h1"), keyword: field(obj, "keyword"),
    body: bodyParts.join(" "),
  });
}
const townsSrc = readFileSync(join(ROOT, "src/data/towns.ts"), "utf8");
for (const obj of topLevelObjects(townsSrc)) {
  const slug = field(obj, "slug");
  if (!slug) continue;
  const bodyParts = [
    field(obj, "h1"), field(obj, "distanceFromHolden"),
    ...arrayStrings(obj, "intro"), ...arrayStrings(obj, "local"),
    ...arrayStrings(obj, "faqs"),
  ];
  pages.push({
    type: "town", slug, name: field(obj, "name"),
    title: field(obj, "title"), meta: field(obj, "metaDescription"),
    h1: field(obj, "h1"), keyword: field(obj, "keyword"),
    body: bodyParts.join(" "),
  });
}

// ---- validate each data-driven page ---------------------------------------
console.log(`\n${DIM}SEO check — SITE-SPEC §5.1${RESET}\n`);
for (const p of pages) {
  console.log(`/${p.slug}/  ${DIM}(${p.type})${RESET}`);

  const tl = p.title.length;
  if (tl > TITLE.max) FAIL(`title ${tl} chars > ${TITLE.max}: "${p.title}"`);
  else if (tl < TITLE.min) WARN(`title ${tl} chars < ${TITLE.min} (room to add keyword/location)`);
  else OK(`title ${tl} chars`);

  const ml = p.meta.length;
  if (ml > META.max) FAIL(`meta ${ml} chars > ${META.max}`);
  else if (ml < META.min) WARN(`meta ${ml} chars < ${META.min}`);
  else OK(`meta ${ml} chars`);

  const hl = p.h1.length;
  if (hl > H1.max || hl < H1.min) WARN(`H1 ${hl} chars (target ${H1.min}–${H1.max})`);
  if (!p.h1.toLowerCase().includes(p.keyword.toLowerCase().split(" ")[0]))
    WARN(`H1 may not contain the primary keyword`);

  const sw = p.slug.split("-").length;
  if (sw < SLUG_WORDS.min || sw > SLUG_WORDS.max) WARN(`slug ${sw} words (target ${SLUG_WORDS.min}–${SLUG_WORDS.max})`);

  const words = wordCount(p.body);
  const core = coreKeyword(p.keyword, p.name);
  const kw = countPhrase(p.body, core);
  const r = RANGES[p.type];
  if (words < r.words[0]) WARN(`word count ${words} < ${r.words[0]} (thin — expand copy or add job stories)`);
  else if (words > r.words[1]) WARN(`word count ${words} > ${r.words[1]}`);
  else OK(`word count ${words}`);

  if (kw < r.keyword[0]) WARN(`keyword "${core}" appears ${kw}× (target ${r.keyword[0]}–${r.keyword[1]}×)`);
  else if (kw > r.keyword[1]) WARN(`keyword "${core}" appears ${kw}× > ${r.keyword[1]}× (risks over-stuffing)`);
  else OK(`keyword "${core}" ${kw}×`);

  if (p.type === "town") {
    const nameCount = countPhrase(p.body, p.name);
    if (nameCount < r.name[0]) WARN(`town name "${p.name}" ${nameCount}× (target ${r.name[0]}–${r.name[1]}×)`);
    else if (nameCount > r.name[1]) WARN(`town name "${p.name}" ${nameCount}× > ${r.name[1]}×`);
    else OK(`town name ${nameCount}×`);
  }

  const density = words ? ((kw * core.split(" ").length) / words) * 100 : 0;
  if (density > 1.5) WARN(`keyword density ${density.toFixed(1)}% > 1.5% (stuffing risk)`);
}

// ---- core static pages: char-check rendered HTML in ./out (if built) ------
const OUT = join(ROOT, "out");
if (existsSync(OUT)) {
  console.log(`\n${DIM}Core pages (rendered ./out)${RESET}\n`);
  const cores = ["", "about", "services", "service-areas", "reviews", "gallery", "faq", "contact-us"];
  for (const c of cores) {
    const file = join(OUT, c, "index.html");
    if (!existsSync(file)) continue;
    const html = readFileSync(file, "utf8");
    // Decode HTML entities so we measure the length Google sees, not the encoded markup.
    const decode = (s) =>
      s
        .replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&#x27;/g, "'")
        .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        .replace(/&rsquo;/g, "’").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–");
    const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
    const meta = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
    const h1s = html.match(/<h1[\s>]/g) || [];
    console.log(`/${c || ""}/`);
    if (title.length > TITLE.max) FAIL(`title ${title.length} > ${TITLE.max}`);
    else if (title.length < TITLE.min) WARN(`title ${title.length} < ${TITLE.min}`);
    else OK(`title ${title.length}`);
    if (meta.length > META.max) FAIL(`meta ${meta.length} > ${META.max}`);
    else if (meta.length && meta.length < META.min) WARN(`meta ${meta.length} < ${META.min}`);
    else if (meta.length) OK(`meta ${meta.length}`);
    if (h1s.length !== 1) FAIL(`${h1s.length} <h1> tags (must be exactly 1)`);
    else OK(`1 H1`);
  }
} else {
  console.log(`\n${DIM}(run "next build" first to also check core pages' rendered HTML)${RESET}`);
}

// ---- summary --------------------------------------------------------------
console.log(`\n${DIM}────────────────────────────${RESET}`);
console.log(`${fails ? RED : GRN}${fails} fail${RESET} · ${warns ? YEL : GRN}${warns} warn${RESET} across ${pages.length} data-driven pages`);
if (fails) { console.log(`${RED}SEO check failed.${RESET}\n`); process.exit(1); }
console.log(`${GRN}No hard failures.${RESET} Warnings are opportunities, not blockers.\n`);
