/**
 * Cocons sémantiques Kopio (Sem.5) — Topical PageRank.
 * Footer = hubs + sélection courte (anti-dilution).
 * Siblings landings = voisins de sous-cluster, pas un dump alphabétique.
 */

export type TopicClusterId =
  | "hub"
  | "metier"
  | "besoin"
  | "comparatif"
  | "autorite";

/** Sous-clusters métier (proximité vectorielle éditoriale). */
export const METIER_SUBCLUSTERS: readonly (readonly string[])[] = [
  ["coach", "consultante", "formatrice", "assistante-virtuelle"],
  ["therapeute", "sophrologue", "naturopathe", "praticienne-bien-etre"],
  ["estheticienne", "photographe", "wedding-planner", "architecte-interieur"],
  ["creatrice"],
] as const;

/** Sous-clusters besoin. */
export const BESOIN_SUBCLUSTERS: readonly (readonly string[])[] = [
  [
    "creer-son-site-sans-competences-techniques",
    "site-vitrine-independante",
    "site-web-femme-qui-se-lance",
    "site-web-maman-freelance",
  ],
  ["site-avec-reservation-en-ligne", "boutique-en-ligne-petite-entreprise"],
  ["refonte-site-internet-entrepreneure"],
] as const;

/** Footer : max 6 métiers à fort intent commercial (pas les 13). */
export const FOOTER_METIER_SLUGS = [
  "coach",
  "therapeute",
  "sophrologue",
  "consultante",
  "assistante-virtuelle",
  "praticienne-bien-etre",
] as const;

/** Footer : besoins représentatifs (pas toute la liste). */
export const FOOTER_BESOIN_SLUGS = [
  "creer-son-site-sans-competences-techniques",
  "site-vitrine-independante",
  "site-avec-reservation-en-ligne",
  "refonte-site-internet-entrepreneure",
] as const;

/** Hubs footer (colonne « Le site ») — pas de mentions-legales en nav principale. */
export const FOOTER_HUB_LINKS = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/projets", label: "Projets" },
  { href: "/faq", label: "Questions" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

const THRESHOLD_WARN = 0.82;

export const COSINE_CANNIBAL_THRESHOLD = THRESHOLD_WARN;

function siblingsFromSubclusters(
  slug: string,
  clusters: readonly (readonly string[])[],
  limit: number,
): string[] {
  const cluster = clusters.find((c) => c.includes(slug));
  if (!cluster) return [];
  return cluster.filter((s) => s !== slug).slice(0, limit);
}

/** Voisins métier pour maillage intra-cocon (fallback si pas de JSON cosine). */
export function metierSiblingSlugs(slug: string, limit = 5): string[] {
  const fromSub = siblingsFromSubclusters(slug, METIER_SUBCLUSTERS, limit);
  if (fromSub.length >= limit) return fromSub;
  // Compléter avec le premier sous-cluster non saturé
  const extra: string[] = [];
  for (const c of METIER_SUBCLUSTERS) {
    for (const s of c) {
      if (s !== slug && !fromSub.includes(s) && !extra.includes(s)) {
        extra.push(s);
      }
      if (fromSub.length + extra.length >= limit) {
        return [...fromSub, ...extra].slice(0, limit);
      }
    }
  }
  return [...fromSub, ...extra].slice(0, limit);
}

export function besoinSiblingSlugs(slug: string, limit = 4): string[] {
  return siblingsFromSubclusters(slug, BESOIN_SUBCLUSTERS, limit);
}
