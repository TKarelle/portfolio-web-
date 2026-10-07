#!/usr/bin/env node
/**
 * Agrège des lignes JSON `bot_hit` (copiées depuis Vercel Logs) → Crawl Ratio.
 * Usage (0 €, local) :
 *   node scripts/analyze-bot-logs.mjs data/bot-hits.jsonl
 *   pbpaste | node scripts/analyze-bot-logs.mjs
 */

import { readFileSync } from "node:fs";

const inputPath = process.argv[2];
const raw = inputPath
  ? readFileSync(inputPath, "utf8")
  : readFileSync(0, "utf8");

const hits = [];
for (const line of raw.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  // Tolère une ligne Vercel qui encapsule le JSON
  const start = trimmed.indexOf('{"type":"bot_hit"');
  const jsonStr = start >= 0 ? trimmed.slice(start) : trimmed;
  try {
    const row = JSON.parse(jsonStr);
    if (row?.type === "bot_hit") hits.push(row);
  } catch {
    // ignore non-JSON
  }
}

if (hits.length === 0) {
  console.error(
    "Aucune ligne bot_hit trouvée. Colle des logs Vercel filtrés sur « bot_hit ».",
  );
  process.exit(1);
}

const byBot = new Map();
const byClass = { primary: 0, waste: 0, other: 0 };
const byPath = new Map();

for (const h of hits) {
  byBot.set(h.bot, (byBot.get(h.bot) ?? 0) + 1);
  const cls = h.class ?? "other";
  if (cls in byClass) byClass[cls] += 1;
  else byClass.other += 1;
  byPath.set(h.path, (byPath.get(h.path) ?? 0) + 1);
}

const total = hits.length;
const primary = byClass.primary;
const ratio = total ? primary / total : 0;

console.log("=== Crawl bots Kopio (Sem.1) ===");
console.log(`Hits totaux     : ${total}`);
console.log(`Primary         : ${byClass.primary}`);
console.log(`Waste           : ${byClass.waste}`);
console.log(`Other           : ${byClass.other}`);
console.log(`Crawl Ratio     : ${ratio.toFixed(3)}  (cible ≥ 0.75)`);
console.log("");
console.log("--- Par bot ---");
for (const [bot, n] of [...byBot.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${bot.padEnd(18)} ${n}`);
}
console.log("");
console.log("--- Top 20 paths ---");
const top = [...byPath.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20);
for (const [path, n] of top) {
  console.log(`  ${String(n).padStart(4)}  ${path}`);
}
