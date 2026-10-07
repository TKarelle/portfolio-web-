#!/usr/bin/env node
/**
 * Cosine similarity TF-IDF entre pages SEO (Sem.5) — 0 €, local.
 *
 * Usage:
 *   node scripts/cosine-clusters.mjs
 *   node scripts/cosine-clusters.mjs --threshold 0.82
 *
 * Seuil cannibalisation : cosine > 0.82 (même intent).
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const THRESHOLD = Number(
  process.argv.includes("--threshold")
    ? process.argv[process.argv.indexOf("--threshold") + 1]
    : 0.82,
);

const STOP = new Set(
  `le la les un une des de du au aux et ou mais donc car que qui quoi dont
  je tu il elle on nous vous ils elles mon ton son ma ta sa mes tes ses
  ce cet cette ces ne pas plus moins très trop pour par avec sans sur sous
  dans est sont être avoir fait faire votre vos notre nos leur leurs
  a à d l n s y en qui que qu comme si quand tout tous toute toutes
  site web internet page pages offre tarifs mois dès france`.split(/\s+/),
);

function tokenize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/gi, " ")
    .split(/[\s/-]+/)
    .filter((t) => t.length > 2 && !STOP.has(t));
}

function extractObjects(filePath, type) {
  const src = readFileSync(filePath, "utf8");
  const chunks = src.split(/\n\s*\{\s*\n\s*slug:\s*/);
  const pages = [];

  for (const chunk of chunks.slice(1)) {
    const slug = chunk.match(/^"([^"]+)"/)?.[1];
    if (!slug) continue;

    const pick = (key) => {
      const m = chunk.match(new RegExp(`${key}:\\s*"((?:\\\\.|[^"\\\\])*)"`));
      return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, " ") : "";
    };

    const keyword = pick("keyword");
    const title = pick("title") || pick("metaTitle");
    const h1 = pick("h1");
    const tldr = pick("tldr") || pick("excerpt") || pick("verdict");
    const meta = pick("metaDescription");
    const intro = pick("intro");

    // Corps : bodies de sections + content[] blog (signale soft-duplicate)
    const bodies = [...chunk.matchAll(/body:\s*`([^`]*)`/g)].map((m) => m[1]);
    const bodiesQ = [...chunk.matchAll(/body:\s*"((?:\\.|[^"\\])*)"/g)].map(
      (m) => m[1],
    );
    const contentItems = [
      ...chunk.matchAll(/^\s*"((?:\\.|[^"\\])*)",?\s*$/gm),
    ]
      .map((m) => m[1])
      .filter((s) => s.length > 40)
      .slice(0, 8);

    let url = "";
    if (type === "metier") url = `/site-web-pour/${slug}`;
    else if (type === "besoin") url = `/besoin/${slug}`;
    else if (type === "comparatif") url = `/comparatif/${slug}`;
    else if (type === "blog") url = `/blog/${slug}`;

    const text = [
      keyword,
      title,
      h1,
      tldr,
      meta,
      intro,
      ...bodies,
      ...bodiesQ,
      ...contentItems,
    ]
      .filter(Boolean)
      .join(" ");
    pages.push({ type, slug, url, text });
  }
  return pages;
}

function tfidfVectors(pages) {
  const docs = pages.map((p) => tokenize(p.text));
  const df = new Map();
  for (const tokens of docs) {
    for (const t of new Set(tokens)) {
      df.set(t, (df.get(t) ?? 0) + 1);
    }
  }
  const N = docs.length;
  const vectors = docs.map((tokens) => {
    const tf = new Map();
    for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
    const vec = new Map();
    for (const [t, c] of tf) {
      const idf = Math.log((N + 1) / ((df.get(t) ?? 0) + 1)) + 1;
      vec.set(t, (c / tokens.length) * idf);
    }
    return vec;
  });
  return vectors;
}

function cosine(a, b) {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (const [, v] of a) na += v * v;
  for (const [, v] of b) nb += v * v;
  if (na === 0 || nb === 0) return 0;
  const smaller = a.size < b.size ? a : b;
  const larger = a.size < b.size ? b : a;
  for (const [t, v] of smaller) {
    if (larger.has(t)) dot += v * larger.get(t);
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

const pages = [
  ...extractObjects(path.join(root, "src/data/metiers.ts"), "metier"),
  ...extractObjects(path.join(root, "src/data/besoins.ts"), "besoin"),
  ...extractObjects(path.join(root, "src/data/comparatifs.ts"), "comparatif"),
  ...extractObjects(path.join(root, "src/data/blog.ts"), "blog"),
];

const vectors = tfidfVectors(pages);
const pairs = [];

for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    const score = cosine(vectors[i], vectors[j]);
    if (score >= 0.55) {
      pairs.push({
        a: pages[i].url,
        b: pages[j].url,
        typeA: pages[i].type,
        typeB: pages[j].type,
        score: Number(score.toFixed(3)),
        sameCluster: pages[i].type === pages[j].type,
      });
    }
  }
}

pairs.sort((x, y) => y.score - x.score);

const cannibals = pairs.filter((p) => p.score >= THRESHOLD);
const crossIntent = pairs.filter(
  (p) => p.score >= 0.7 && p.typeA !== p.typeB,
);

console.log(`=== Cosine clusters Kopio (seuil cannibalisation ≥ ${THRESHOLD}) ===`);
console.log(`Pages : ${pages.length}`);
console.log(`Paires ≥ ${THRESHOLD} : ${cannibals.length}`);
console.log("");

if (cannibals.length === 0) {
  console.log("Aucune paire au-dessus du seuil.");
} else {
  console.log("--- Cannibalisation potentielle ---");
  for (const p of cannibals.slice(0, 30)) {
    const flag = p.sameCluster ? "SAME" : "CROSS";
    console.log(`  ${p.score.toFixed(3)}  [${flag}]  ${p.a}  ↔  ${p.b}`);
  }
}

console.log("");
console.log("--- Cross-intent élevés (≥ 0.70) ---");
for (const p of crossIntent.slice(0, 20)) {
  console.log(`  ${p.score.toFixed(3)}  ${p.a}  ↔  ${p.b}`);
}

// Voisins intra-type pour maillage (top 5 cosine)
const neighbors = {};
for (let i = 0; i < pages.length; i++) {
  const scored = [];
  for (let j = 0; j < pages.length; j++) {
    if (i === j) continue;
    if (pages[i].type !== pages[j].type) continue;
    scored.push({ slug: pages[j].slug, score: cosine(vectors[i], vectors[j]) });
  }
  scored.sort((a, b) => b.score - a.score);
  neighbors[pages[i].url] = scored.slice(0, 5).map((s) => ({
    slug: s.slug,
    score: Number(s.score.toFixed(3)),
  }));
}

const outDir = path.join(root, "src/data/generated");
mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "cluster-neighbors.json");
writeFileSync(
  outFile,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      threshold: THRESHOLD,
      cannibalPairs: cannibals,
      neighbors,
    },
    null,
    2,
  ),
);
console.log("");
console.log(`Écrit : ${path.relative(root, outFile)}`);
