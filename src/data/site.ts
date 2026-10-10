export const FOUNDER_NAME = "Karelle";
export const FOUNDER_PHOTO = "/image/pp.jpg";
/** Rôle court (byline) — source de vérité partout */
export const FOUNDER_ROLE = "Visibilité digitale";
/** Phrase signature Karelle — blog, à propos, home, schema */
export const FOUNDER_TAGLINE =
  "Je crée des sites web qui parlent le langage de Google, des IA et de vos futurs clients.";
/** Affichage « Karelle | Visibilité digitale » */
export const FOUNDER_BYLINE = `${FOUNDER_NAME} | ${FOUNDER_ROLE}`;
/** Alt accessible / SEO : nom + signature (E-E-A-T) */
export const FOUNDER_PHOTO_ALT = `${FOUNDER_NAME}, ${FOUNDER_ROLE}. ${FOUNDER_TAGLINE}`;
export const FOUNDER_DIPLOMA = "Diplômée en développement web";
export const FOUNDER_EXPERIENCE = "2 ans d’expérience";
export const BRAND_NAME = "Kopio";
export const BRAND_LOGO = "kopio";
/** Logo carré PNG pour JSON-LD / rich results (min. 112×112). */
export const BRAND_LOGO_IMAGE = "/image/logo-kopio.png";
export const BRAND_SIGNATURE = "Votre présence en ligne, déléguée.";
export const CONTACT_EMAIL = "karelle.dev@gmail.com";

/** SEO défaut — niche professionnelles de l'accompagnement */
export const SITE_META_TITLE =
  "Site web pour professionnelles de l'accompagnement dès 89€/mois";
export const SITE_META_DESCRIPTION =
  "Votre site professionnel, sans la charge mentale. Dès 89 €/mois : conception, maintenance et évolution pour coachs, thérapeutes et consultantes. Vous validez, on gère tout.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kopio.eu";

/**
 * Fallback lastmod (sitemap). Préférer CLUSTER_LASTMOD dans content-dates.ts.
 * Bump lors d’une refonte éditoriale globale.
 */
export const SITE_CONTENT_UPDATED = "2026-10-07";

/** Lien Calendly (couleurs natives Calendly) */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
  "https://calendly.com/karelle-dev/30min";

export const HAS_CALENDLY = CALENDLY_URL.length > 10;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
