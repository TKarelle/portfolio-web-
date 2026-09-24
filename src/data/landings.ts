export interface LandingPageData {
  slug: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroHighlight: string;
  intro: string;
  problems: string[];
  solutions: string[];
  benefits: { title: string; text: string }[];
  image: string;
  imageAlt: string;
}

export const landings: LandingPageData[] = [
  {
    slug: "site-vitrine-artisan",
    title: "Site vitrine pour artisan",
    metaDescription:
      "Site web professionnel pour artisans : boulanger, plombier, coiffeur… Dès 500 €, livré en 14 jours*. Devis gratuit sous 24h.",
    heroTitle: "Site vitrine pour",
    heroHighlight: "artisan",
    intro:
      "Tu es artisan et tes clients te cherchent sur Google avant de t'appeler. Un site vitrine pro, c'est ta carte de visite 24h/24 — sans passer par une agence.",
    problems: [
      "Invisible sur Google pendant que tes concurrents sont en ligne",
      "Dépendance au bouche-à-oreille seul",
      "Pas le temps ni l'envie de gérer le technique",
    ],
    solutions: [
      "Une page claire : tes services, ta zone, tes coordonnées",
      "Formulaire de contact et bouton d'appel sur mobile",
      "Design moderne qui inspire confiance",
    ],
    benefits: [
      { title: "Dès 500 €", text: "Forfait Pour démarrer : page claire + contact" },
      { title: "Livré vite", text: "Objectif 14 jours* — pas 3 mois d'attente" },
      { title: "1 interlocutrice", text: "Karelle, directement. Pas de chef de projet." },
    ],
    image: "/image/artisan.jpg",
    imageAlt: "Artisan plombier devant son camion — exemple client site vitrine",
  },
  {
    slug: "site-vitrine-commercant",
    title: "Site vitrine pour commerçant",
    metaDescription:
      "Création de site internet pour commerçants et boutiques. Visible sur Google, lisible sur téléphone, dès 500 €. Devis clair.",
    heroTitle: "Site vitrine pour",
    heroHighlight: "commerçant",
    intro:
      "Boutique, restaurant, salon de coiffure — tes clients veulent voir tes horaires, ton menu ou tes prestations avant de passer. Un bon site, ça attire des clients.",
    problems: [
      "Page Facebook pas assez pro pour rassurer",
      "Horaires et infos introuvables en ligne",
      "Concurrents mieux référencés sur Google",
    ],
    solutions: [
      "Site lisible sur téléphone avec photos de ton établissement",
      "Horaires, carte, galerie — tout au même endroit",
      "Être trouvé sur Google dans ta ville",
    ],
    benefits: [
      { title: "800 € Complet", text: "Jusqu'à 5 pages + Google + galerie" },
      { title: "Qui attire des clients", text: "Chaque élément pensé pour ça" },
      { title: "Sans stress", text: "Je m'occupe de tout le technique" },
    ],
    image: "/image/commerce.jpg",
    imageAlt: "Commerçant dans sa boutique — site vitrine professionnel",
  },
  {
    slug: "site-vitrine-independant",
    title: "Site vitrine pour indépendant",
    metaDescription:
      "Site web pour freelances et indépendants. Simple, rapide, professionnel. Dès 500 €, livré en 14 jours*. Devis sous 24h.",
    heroTitle: "Site vitrine pour",
    heroHighlight: "indépendant",
    intro:
      "Coach, photographe, consultant, thérapeute — tu as besoin d'un site qui présente ton activité clairement et donne envie de te contacter.",
    problems: [
      "Pas de site = moins crédible face aux concurrents",
      "LinkedIn ou Instagram ne suffisent pas pour convertir",
      "Tu veux te concentrer sur ton métier, pas sur le web",
    ],
    solutions: [
      "Site sur-mesure qui reflète ton identité",
      "Portfolio, témoignages, formulaire de contact",
      "Livraison rapide avec validation à chaque étape",
    ],
    benefits: [
      { title: "Fait pour toi", text: "Pas un site tout fait : on part de ton activité" },
      { title: "Rapide", text: "En ligne en quelques jours, pas en mois" },
      { title: "Devis clair", text: "Tu sais ce que tu paies avant de commencer" },
    ],
    image: "/image/independant.jpg",
    imageAlt: "Indépendante au travail sur ordinateur portable",
  },
];

export function getLanding(slug: string): LandingPageData | undefined {
  return landings.find((l) => l.slug === slug);
}
