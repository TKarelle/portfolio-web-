#!/usr/bin/env node
/**
 * Sem.8 — QDF : ping IndexNow sur les URLs money (réévaluation index).
 * 0 €. À lancer APRÈS déploiement prod.
 *
 *   npm run qdf
 */

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.kopio.eu"
).replace(/\/$/, "");

/** Aligné sur QDF_MONEY_PATHS (content-dates.ts) */
const PATHS = [
  "/",
  "/tarifs",
  "/contact",
  "/faq",
  "/blog",
  "/site-web-pour/coach",
  "/site-web-pour/therapeute",
  "/site-web-pour/sophrologue",
  "/site-web-pour/consultante",
  "/site-web-pour/assistante-virtuelle",
  "/comparatif/kopio-vs-wix",
  "/comparatif/combien-coute-site-internet-entrepreneure-2026",
  "/besoin/creer-son-site-sans-competences-techniques",
  "/blog/optimiser-seo-google-ia-debutant",
  "/blog/combien-coute-site-web-coach-france-2026",
  "/blog/combien-coute-site-vitrine-2026",
  "/llms.txt",
  "/entities.json",
];

const urls = PATHS.map((p) => (p === "/" ? `${SITE}/` : `${SITE}${p}`));

console.log(`QDF ping — ${urls.length} URLs money`);
const r = spawnSync(
  process.execPath,
  [path.join(__dirname, "ping-indexnow.mjs"), ...urls],
  { stdio: "inherit", env: process.env },
);
process.exit(r.status ?? 1);
