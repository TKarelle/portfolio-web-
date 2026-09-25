export const FOUNDER_NAME = "Karelle";
export const FOUNDER_PHOTO = "/image/pp.jpg";
export const FOUNDER_DIPLOMA = "Diplômée en développement web";
export const FOUNDER_EXPERIENCE = "2 ans d’expérience";
export const BRAND_NAME = "Kopio";
export const BRAND_LOGO = "kopio";
export const BRAND_SIGNATURE = "Ton alliée pour ton site web.";
export const CONTACT_EMAIL = "karelle.dev@gmail.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kopio.eu";

/** Lien Calendly (couleurs natives Calendly) */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
  "https://calendly.com/karelle-dev/30min";

export const HAS_CALENDLY = CALENDLY_URL.length > 10;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
