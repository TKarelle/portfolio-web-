#!/usr/bin/env node
/**
 * Ping IndexNow (Bing) — 0 €.
 *
 * Usage:
 *   node scripts/ping-indexnow.mjs
 *   node scripts/ping-indexnow.mjs https://www.kopio.eu/blog/mon-article
 *   INDEXNOW_KEY=... SITE_URL=https://www.kopio.eu node scripts/ping-indexnow.mjs
 *
 * Après déploiement : lance ce script avec les URLs modifiées.
 */

const KEY =
  process.env.INDEXNOW_KEY?.trim() || "ef4ae294-b4cb-4cc0-a37d-a7d2241cfc18";
const SITE = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.kopio.eu"
).replace(/\/$/, "");
const HOST = new URL(SITE).host;
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

const DEFAULT_URLS = [
  `${SITE}/`,
  `${SITE}/tarifs`,
  `${SITE}/blog`,
  `${SITE}/site-web-pour/coach`,
  `${SITE}/site-web-pour/therapeute`,
  `${SITE}/site-web-pour/sophrologue`,
  `${SITE}/comparatif/kopio-vs-wix`,
  `${SITE}/besoin/creer-son-site-sans-competences-techniques`,
];

const cliUrls = process.argv.slice(2).filter((a) => a.startsWith("http"));
const urlList = cliUrls.length > 0 ? cliUrls : DEFAULT_URLS;

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const endpoints = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

console.log(`IndexNow → ${urlList.length} URL(s) · host=${HOST}`);

let failed = 0;
for (const endpoint of endpoints) {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    const ok = res.status === 200 || res.status === 202;
    console.log(`  ${ok ? "OK" : "FAIL"} ${res.status} ${endpoint}`);
    if (!ok) failed += 1;
  } catch (err) {
    console.error(`  ERR  ${endpoint}`, err.message);
    failed += 1;
  }
}

process.exit(failed > 0 ? 1 : 0);
