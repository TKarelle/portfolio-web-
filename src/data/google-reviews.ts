/** Fiche Google Business — avis vérifiés (affichés + AggregateRating Schema). */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?hl=fr&q=Kopio&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zUMWGPt_NhmDKzdAKEezYPwyTKPwWKWi_xOswT2SKUgh3sLFo6gzY1h1JuhiM0EswYdkhQ%3D";

export type GoogleReview = {
  id: string;
  name: string;
  fullName: string;
  /** Libellé affiché (ex. Octobre 2025) */
  date: string;
  /** Date ISO optionnelle pour Schema (YYYY-MM ou YYYY-MM-DD) */
  datePublished?: string;
  rating: number;
  text: string;
  textOriginal?: string;
  source: "google";
};

export const googleReviews: readonly GoogleReview[] = [
  {
    id: "google-2",
    name: "Giovanna Chiara Piantoni",
    fullName: "Giovanna Chiara Piantoni",
    date: "Octobre 2026",
    datePublished: "2026-10-14",
    rating: 5,
    text: "L'expertise de Karelle est de qualité, je la remercie vivement pour son sens de l'observation et sa perspicacité.",
    source: "google",
  },
  {
    id: "google-1",
    name: "Tom Doonan",
    fullName: "Tom Doonan",
    date: "Octobre 2025",
    datePublished: "2025-10",
    rating: 5,
    text: "J'ai vécu une expérience exceptionnelle avec Kopio. Non seulement le site créé fonctionne exactement comme je l'avais imaginé : il a vraiment dépassé mes attentes. Le SEO et les fonctionnalités sont bien plus solides que si j'avais laissé l'IA s'en charger. Bien plus compétitif en prix que les devis d'agences. Très professionnel, livré dans les temps. 10/10.",
    textOriginal:
      "I had an exceptional experience working with Kopio. Not only does the website they built function exactly as I had imagined - it has really exceeded my expectations. The SEO and functionalities are so much stronger than if I had left it to AI. Also much more competitive on price than quotes I got from agencies. Very professional, completed on time 10/10.",
    source: "google",
  },
];

function averageRating(reviews: readonly GoogleReview[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/** Note agrégée alignée sur les avis Google affichés sur le site. */
export const GOOGLE_RATING = {
  score: averageRating(googleReviews),
  count: googleReviews.length,
  bestRating: 5,
  worstRating: 1,
} as const;
