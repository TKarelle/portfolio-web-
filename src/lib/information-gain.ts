/**
 * Information Gain Score — checklist opérationnelle Kopio (Sem.6).
 *
 * Proxy : une URL « gagne » si elle apporte un axiome / preuve / matrice
 * absents des autres URLs du même intent (anti soft-duplicate).
 */

export const IG_CHECKLIST = [
  "Réponse directe 0–120 mots visible (tldr / HeroFacts, sans label TL;DR)",
  "Au moins un axiome propriétaire (prix 89/139/179, propriété, 21 jours, Karelle)",
  "Une matrice ou tableau de décision quand l’intent est comparatif / différenciation",
  "Une preuve non générique (cas, ville, année) par page money",
  "Zéro collage de section entre métiers proches (1 intent = 1 mécanisme)",
  "Maillage vers l’URL sœur différenciée (pas cannibalisation silencieuse)",
] as const;

/** Pages money prioritaires pour l’audit IG manuel. */
export const IG_MONEY_URLS = [
  "/",
  "/tarifs",
  "/site-web-pour/coach",
  "/site-web-pour/therapeute",
  "/site-web-pour/sophrologue",
  "/comparatif/combien-coute-site-internet-entrepreneure-2026",
  "/blog/combien-coute-site-vitrine-2026",
  "/comparatif/kopio-vs-wix",
] as const;
