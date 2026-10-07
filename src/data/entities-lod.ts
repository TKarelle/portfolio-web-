/**
 * Graphe d'entités LOD (Sem.9) — Linked Open Data / Schema.org.
 * sameAs Person/Org : remplir les URLs réelles quand disponibles (LinkedIn, GMB…).
 * knowsAbout : concepts Wikidata (stables, citables par Knowledge Graph / RAG).
 */

/** Profils externes de Karelle. */
export const FOUNDER_SAME_AS: readonly string[] = [
  "https://www.linkedin.com/in/karelle-table/",
  "https://share.google/n6U3hqCZBrkWmJtln",
];

/** Profils externes marque Kopio (fiche Google Business). */
export const BRAND_SAME_AS: readonly string[] = [
  "https://share.google/n6U3hqCZBrkWmJtln",
  "https://www.linkedin.com/company/kopio-eu/",
];

/** Concepts d'autorité (Wikidata) — knowsAbout. */
export const KNOWS_ABOUT = [
  {
    "@type": "Thing" as const,
    name: "Création de site web",
    sameAs: "https://www.wikidata.org/wiki/Q674812",
  },
  {
    "@type": "Thing" as const,
    name: "Optimisation pour les moteurs de recherche",
    sameAs: "https://www.wikidata.org/wiki/Q180711",
  },
  {
    "@type": "Thing" as const,
    name: "Coaching",
    sameAs: "https://www.wikidata.org/wiki/Q1103203",
  },
  {
    "@type": "Thing" as const,
    name: "Thérapie",
    sameAs: "https://www.wikidata.org/wiki/Q1778208",
  },
  {
    "@type": "Thing" as const,
    name: "Sophrologie",
    sameAs: "https://www.wikidata.org/wiki/Q1340644",
  },
  {
    "@type": "Thing" as const,
    name: "Travailleur indépendant",
    sameAs: "https://www.wikidata.org/wiki/Q7389504",
  },
] as const;

export const FOUNDER_CREDENTIAL = {
  "@type": "EducationalOccupationalCredential" as const,
  credentialCategory: "degree",
  name: "Diplôme en développement web",
  competencyRequired: "Développement web, sites vitrine, maintenance",
};
