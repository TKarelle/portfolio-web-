/**
 * Covers blog : une image dédiée par slug dans /public/image/blog-covers/.
 * Ajouter un fichier + une entrée ici pour un nouvel article.
 * Alt : descriptif, naturel, ancré sur le sujet de l’article (SEO + accessibilité).
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
  "search-console-apercus-ia-citations-2026": `${BASE}/blog-search.png`,
  "sageo-seo-geo-visibilite-2026": `${BASE}/blog-seo-geo-sageo.jpeg`,
};

/** Alt contextuels par slug (description visuelle + sujet de l’article). */
export const BLOG_COVER_ALT_BY_SLUG: Record<string, string> = {
  "page-non-indexee-google-guide-debutant":
    "Écran Search Console : page de site web non indexée sur Google",
  "indexation-google-bloquee-rejets-crawl":
    "Alerte d’indexation bloquée : rejet de crawl Google sur un site vitrine",
  "creer-son-site-maman-entrepreneuse":
    "Maman entrepreneuse au bureau : création de site web à côté du quotidien familial",
  "reconversion-professionnelle-site-web-2026":
    "Femme en reconversion professionnelle devant son ordinateur et son futur site web",
  "combien-coute-site-web-coach-france-2026":
    "Coach indépendante consultant le prix d’un site web professionnel en France",
  "erreurs-a-eviter-site-independante":
    "Indépendante corrigeant les erreurs courantes sur son site vitrine",
  "abonnement-ou-paiement-unique-site-web":
    "Comparaison abonnement mensuel et paiement unique pour un site web",
  "photos-de-marque-sans-budget-shooting":
    "Photos de marque prises sans shooting pro pour un site d’entrepreneuse",
  "combien-coute-site-vitrine-2026":
    "Devis et fourchettes de prix d’un site vitrine professionnel en 2026",
  "5-raisons-avoir-site-web-maintenant":
    "Entrepreneuse lançant son site web professionnel sans attendre",
  "ia-creation-site-web-pieges":
    "Création de site web assistée par IA : pièges à éviter pour une indépendante",
  "optimiser-seo-google-ia-debutant":
    "Référencement Google et moteurs d’IA : guide SEO pour coachs et thérapeutes",
  "search-console-apercus-ia-citations-2026":
    "Search Console et suivi des citations dans les Aperçus IA Google (2026)",
  "sageo-seo-geo-visibilite-2026":
    "Illustration SAGEO : SEO et GEO pour être trouvée puis citée par les moteurs génératifs",
};

const FALLBACK = `${BASE}/blog-seo.jpg`;
const FALLBACK_ALT =
  "Illustration article Kopio : conseils site web pour professionnelles de l’accompagnement";

/** Résout la cover d’un article ; fallback générique si slug inconnu. */
export function getBlogCover(slug: string, fallback = FALLBACK): string {
  return BLOG_COVER_BY_SLUG[slug] ?? fallback;
}

/** Alt descriptif pour la cover ; fallback ancré sur le titre si slug inconnu. */
export function getBlogCoverAlt(slug: string, title?: string): string {
  return (
    BLOG_COVER_ALT_BY_SLUG[slug] ??
    (title
      ? `Illustration de l’article : ${title}`
      : FALLBACK_ALT)
  );
}
