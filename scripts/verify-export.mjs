#!/usr/bin/env node
/**
 * Pre-flight check for the static export, run BEFORE anything is uploaded.
 *
 * A static deploy fails silently in ways a build never catches: a page missing
 * from out/ becomes a 404 the moment the clean-URL rewrite runs, and a redirect
 * pointing at a page that was never built sends traffic from one 404 into
 * another. Both are invisible until real visitors (and Googlebot) hit them.
 *
 * Exit code 1 if anything is wrong, so CI refuses to deploy.
 *
 *   node scripts/verify-export.mjs
 */
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "out");

if (!fs.existsSync(out)) {
  console.error("out/ missing — run `next build` first.");
  process.exit(1);
}

const problems = [];
const warn = [];

// Every .html the export actually produced, expressed as a URL path.
const pages = new Set();
(function walk(dir, prefix = "") {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith("_next") || e.name.startsWith(".")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, `${prefix}/${e.name}`);
    else if (e.name.endsWith(".html")) {
      const clean = e.name === "index.html" ? prefix || "/" : `${prefix}/${e.name.slice(0, -5)}`;
      pages.add(clean || "/");
    }
  }
})(out);

// ── 1. required files ───────────────────────────────────────────────────────
for (const f of ["404.html", "sitemap.xml", "robots.txt", ".htaccess"]) {
  if (!fs.existsSync(path.join(out, f))) problems.push(`out/${f} is missing`);
}

// ── 2. does every <loc> in the sitemap have a page? ─────────────────────────
const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>\s*([^<\s]+?)\s*<\/loc>/g)].map((m) => m[1]);
const sitemapPaths = new Set();
for (const loc of locs) {
  const u = new URL(loc);
  const p = u.pathname.replace(/\/$/, "") || "/";
  sitemapPaths.add(p);
  if (!pages.has(p)) problems.push(`sitemap lists ${p} but out/ has no matching page`);
}

// ── 3. pages that exist but are not submitted ───────────────────────────────
const orphan = [...pages].filter(
  (p) => !sitemapPaths.has(p) && p !== "/404" && p !== "/"
).sort();
if (orphan.length) {
  warn.push(`${orphan.length} pages are built but NOT in the sitemap:`);
  orphan.slice(0, 14).forEach((p) => warn.push(`     ${p}`));
  if (orphan.length > 14) warn.push(`     … and ${orphan.length - 14} more`);
}

// ── 4. every redirect destination must be a real page ───────────────────────
const cfg = require(path.join(root, "next.config.js"));
const config = typeof cfg === "function" ? await cfg() : await cfg;
const redirects = await (config.redirects?.() ?? []);
for (const r of redirects) {
  const d = r.destination.split("#")[0].split("?")[0];
  if (d !== "/" && !pages.has(d)) {
    problems.push(`redirect ${r.source} -> ${d}, but ${d} was never built`);
  }
}

// ── 5. no references to the parked domain ───────────────────────────────────
const indexHtml = fs.readFileSync(path.join(out, "index.html"), "utf8");
for (const bad of ["wildrank.com", "wildrank.in"]) {
  if (indexHtml.includes(bad)) problems.push(`homepage still references the parked domain ${bad}`);
}

// ── report ──────────────────────────────────────────────────────────────────
console.log(`  pages built        : ${pages.size}`);
console.log(`  sitemap entries    : ${locs.length}`);
console.log(`  redirects checked  : ${redirects.length}`);
console.log();
if (warn.length) {
  console.log("  WARNINGS");
  warn.forEach((w) => console.log(`    ${w}`));
  console.log();
}
if (problems.length) {
  console.log(`  FAILED — ${problems.length} problem(s):`);
  problems.forEach((p) => console.log(`    ${p}`));
  process.exit(1);
}
console.log("  PASS — export is internally consistent and safe to upload");
