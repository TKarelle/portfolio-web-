import { blogPosts } from "@/data/blog";
import { SITE_CONTENT_UPDATED } from "@/data/site";

/**
 * lastmod par cluster éditorial (Sem.3 / QDF).
 * Bump la date du cluster quand ce corpus change — évite un lastmod figé global.
 */
export const CLUSTER_LASTMOD = {
  /** Accueil, tarifs, contact, FAQ, process — Sem.8 QDF */
  core: "2026-10-07",
  /** /site-web-pour/*, /besoin/*, /comparatif/* — Sem.8 QDF */
  landings: "2026-10-07",
  /** Mentions légales */
  legal: "2026-09-30",
  /** Lead magnet grille */
  grille: "2026-09-30",
} as const;

/**
 * URLs money pour ping IndexNow / réévaluation index (Sem.8 QDF).
 * Chemins relatifs (préfixer par SITE_URL dans les scripts).
 */
export const QDF_MONEY_PATHS = [
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
] as const;

/** Retourne la date ISO la plus récente parmi les candidats valides. */
export function toLastmod(...isoDates: (string | undefined | null)[]): Date {
  let max = 0;
  for (const iso of isoDates) {
    if (!iso) continue;
    const t = new Date(iso).getTime();
    if (!Number.isNaN(t) && t > max) max = t;
  }
  if (max === 0) return new Date(SITE_CONTENT_UPDATED);
  return new Date(max);
}

export function blogPostLastmod(post: {
  date: string;
  updatedAt?: string;
}): Date {
  return toLastmod(post.updatedAt, post.date);
}

/** Hub /blog = article le plus récent. */
export function latestBlogLastmod(): Date {
  return toLastmod(
    ...blogPosts.map((p) => p.updatedAt ?? p.date),
    CLUSTER_LASTMOD.core,
  );
}
