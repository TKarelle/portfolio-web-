export const FOUNDER_NAME = "Karelle";
export const FOUNDER_PHOTO = "/image/pp.jpg";
export const FOUNDER_DIPLOMA = "Diplômée en développement web";
export const BRAND_NAME = "Karelle";
export const BRAND_LOGO = "karelle";
export const BRAND_SIGNATURE =
  "Ton alliée pour ton premier site web.";
export const CONTACT_EMAIL = "karelle.tble@gmail.com";

export const CONTACT_PHONE = "+33675289599";
export const CONTACT_PHONE_DISPLAY = "06 75 28 95 99";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://karelle.dev";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP ?? "33675289599";
export const WHATSAPP_MESSAGE =
  "Bonjour Karelle, je souhaite un devis pour mon site vitrine.";

export const HAS_PHONE = CONTACT_PHONE.trim().length > 8;
export const HAS_WHATSAPP = WHATSAPP_NUMBER.trim().length > 8;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
