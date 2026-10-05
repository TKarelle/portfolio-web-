/**
 * Covers blog : une image dédiée par slug dans /public/image/blog-covers/.
 * Ajouter un fichier + une entrée ici pour un nouvel article.
 */
const BASE = "/image/blog-covers";

export const BLOG_COVER_BY_SLUG: Record<string, string> = {
  "page-non-indexee-google-guide-debutant": `${BASE}/blog-probleme-indexation-google.jpg`,
  "indexation-google-bloquee-rejets-crawl": `${BASE}/blog-indexation-bloquee.jpg`,
  "creer-son-site-maman-entrepreneuse": `${BASE}/blog-maman-entrepreneuse.jpg`,
  "reconversion-professionnelle-site-web-2026": `${BASE}/blog-reconversion.jpg`,
  "combien-coute-site-web-coach-france-2026": `${BASE}/blog-prix-coach.jpg`,
  "erreurs-a-eviter-site-independante": `${BASE}/blog-erreurs-site.jpg`,
  "abonnement-ou-paiement-unique-site-web": `${BASE}/blog-abonnement.jpg`,
  "photos-de-marque-sans-budget-shooting": `${BASE}/blog-photos-marque.jpg`,
  "combien-coute-site-vitrine-2026": `${BASE}/blog-prix-vitrine.jpg`,
  "5-raisons-avoir-site-web-maintenant": `${BASE}/blog-site-maintenant.jpg`,
  "ia-creation-site-web-pieges": `${BASE}/blog-ia-pieges.jpg`,
  "optimiser-seo-google-ia-debutant": `${BASE}/blog-seo.jpg`,
};

const FALLBACK = `${BASE}/blog-seo.jpg`;

/** Résout la cover d’un article ; fallback générique si slug inconnu. */
export function getBlogCover(slug: string, fallback = FALLBACK): string {
  return BLOG_COVER_BY_SLUG[slug] ?? fallback;
}
