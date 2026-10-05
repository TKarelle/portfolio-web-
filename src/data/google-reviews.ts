/** Fiche Google Business — avis vérifiés */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?hl=fr&q=Kopio&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zUMWGPt_NhmDKzdAKEezYPwyTKPwWKWi_xOswT2SKUgh3sLFo6gzY1h1JuhiM0EswYdkhQ%3D";

export const GOOGLE_RATING = {
  score: 5,
  count: 1,
} as const;

export const googleReviews = [
  {
    id: "google-1",
    name: "Tom Doonan",
    fullName: "Tom Doonan",
    date: "Octobre 2025",
    rating: 5,
    text: "J'ai vécu une expérience exceptionnelle avec Kopio. Non seulement le site créé fonctionne exactement comme je l'avais imaginé — il a vraiment dépassé mes attentes. Le SEO et les fonctionnalités sont bien plus solides que si j'avais laissé l'IA s'en charger. Bien plus compétitif en prix que les devis d'agences. Très professionnel, livré dans les temps. 10/10.",
    textOriginal:
      "I had an exceptional experience working with Kopio. Not only does the website they built function exactly as I had imagined - it has really exceeded my expectations. The SEO and functionalities are so much stronger than if I had left it to AI. Also much more competitive on price than quotes I got from agencies. Very professional, completed on time 10/10.",
    source: "google" as const,
  },
] as const;
