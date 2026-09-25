export interface MetierFaq {
  question: string;
  answer: string;
}

export interface MetierPage {
  slug: string;
  label: string;
  metier: string;
  metierPlural: string;
  title: string;
  metaDescription: string;
  h1Before: string;
  h1Highlight: string;
  intro: string;
  whyTitle: string;
  whyPoints: { t: string; d: string }[];
  caseStudyId?: string;
  faqs: MetierFaq[];
  image: string;
  imageAlt: string;
}

export const metiers: MetierPage[] = [
  {
    slug: "site-internet-plombier",
    label: "Plombiers",
    metier: "plombier",
    metierPlural: "plombiers",
    title: "Site internet pour plombier dès 500€",
    metaDescription:
      "Vous êtes plombier et n'avez pas de site ? Kopio crée votre site vitrine clair et professionnel en 7 à 14 jours, dès 500€, sans prise de tête.",
    h1Before: "Site internet pour plombier dès",
    h1Highlight: "500€",
    intro:
      "Quand quelqu'un a une fuite, il cherche un plombier près de chez lui : sur Google, pas sur Facebook. Sans site clair (zone, horaires, téléphone), tu perds des appels. Je crée un site simple : tes infos essentielles et un bouton pour t'appeler.",
    whyTitle: "Pourquoi un plombier a besoin d'un site internet",
    whyPoints: [
      {
        t: "Tes clients te trouvent enfin",
        d: "Métier, ville, zone d'intervention : tout est clair dès la première seconde.",
      },
      {
        t: "Ils comprennent ce que tu proposes",
        d: "Dépannage, rénovation, installation… listés simplement.",
      },
      {
        t: "Ils te font confiance avant d'appeler",
        d: "Quelques photos de chantiers suffisent à rassurer.",
      },
      {
        t: "Te joindre devient évident",
        d: "Téléphone cliquable, zone, horaires : accessibles en un coup d'œil.",
      },
    ],
    caseStudyId: "plomberie-durand",
    faqs: [
      {
        question: "Pourquoi un plombier a-t-il besoin d'un site s'il a déjà Facebook ?",
        answer:
          "Facebook reste utile. Mais un site avec ton nom, ta zone et un contact clair t'appartient, rassure plus, et apparaît mieux quand quelqu'un cherche « plombier + ta ville ».",
      },
      {
        question: "Combien coûte un site internet pour un plombier ?",
        answer:
          "Chez Kopio, dès 500 € pour une page claire avec formulaire et mise en ligne. Le forfait Complet à 800 € inclut jusqu'à 5 pages et un accompagnement pour être visible sur Google près de chez toi.",
      },
      {
        question: "Combien de temps pour être en ligne ?",
        answer:
          "Entre 7 et 14 jours selon le forfait, à partir de la validation du devis : si les contenus arrivent à temps.",
      },
      {
        question: "Est-ce que je pourrai modifier mon site ensuite ?",
        answer:
          "Oui. À la mise en ligne, on fait un petit tour pour que tu puisses changer l'essentiel (horaires, textes, photos).",
      },
    ],
    image: "/image/artisan.jpg",
    imageAlt: "Plombier indépendant : exemple de site vitrine pour artisan",
  },
  {
    slug: "site-internet-boulanger",
    label: "Boulangers",
    metier: "boulanger",
    metierPlural: "boulangers",
    title: "Site internet pour boulangerie dès 500€",
    metaDescription:
      "Un site simple pour présenter vos produits, horaires et coordonnées. Livré en 7 à 14 jours. Voir l'exemple de la Boulangerie Martin.",
    h1Before: "Site internet pour boulangerie dès",
    h1Highlight: "500€",
    intro:
      "Tes clients veulent savoir si tu es ouvert, ce que tu proposes aujourd'hui, et où te trouver. Un site clair montre tes produits, horaires et contact : sans que tu passes des heures derrière un écran.",
    whyTitle: "Pourquoi une boulangerie a besoin d'un site internet",
    whyPoints: [
      {
        t: "Tes horaires sont trouvables",
        d: "Plus de « c'est ouvert demain ? » : l'info est claire en ligne.",
      },
      {
        t: "Tes produits donnent envie",
        d: "Quelques photos de qualité valent mieux qu'une page Facebook figée.",
      },
      {
        t: "Tu restes joignable",
        d: "Contact, adresse, plan : tout au même endroit.",
      },
      {
        t: "Tu gagnes en sérieux",
        d: "Un site propre rassure autant que la vitrine physique.",
      },
    ],
    caseStudyId: "boulangerie-martin",
    faqs: [
      {
        question: "Pourquoi un site si j'ai déjà Instagram ?",
        answer:
          "Instagram montre l'ambiance. Le site centralise horaires, adresse et contact : et reste facile à trouver sur Google quand on cherche ta boulangerie.",
      },
      {
        question: "Combien coûte un site pour une boulangerie ?",
        answer:
          "Dès 500 € pour démarrer (page claire + contact + mise en ligne). 800 € pour un site plus complet jusqu'à 5 pages, avec galerie.",
      },
      {
        question: "Combien de temps pour la livraison ?",
        answer: "En général 7 à 14 jours après validation du devis.",
      },
      {
        question: "Puis-je changer les horaires moi-même ?",
        answer:
          "Oui. Je te montre comment modifier l'essentiel : horaires, textes, photos.",
      },
    ],
    image: "/image/boulangerie.jpg",
    imageAlt: "Pain artisanal : étude de cas Boulangerie Martin",
  },
  {
    slug: "site-internet-coiffeur",
    label: "Coiffeurs",
    metier: "coiffeur",
    metierPlural: "coiffeurs",
    title: "Site internet pour salon de coiffure dès 500€",
    metaDescription:
      "Site vitrine avec galerie photo et prise de contact facile, pensé pour les salons de coiffure indépendants.",
    h1Before: "Site internet pour salon de coiffure dès",
    h1Highlight: "500€",
    intro:
      "Un salon se choisit aussi en ligne : photos, prestations, contact. Je crée un site vitrine clair pour ton salon : galerie, infos essentielles, prise de contact facile.",
    whyTitle: "Pourquoi un salon de coiffure a besoin d'un site",
    whyPoints: [
      {
        t: "Ta galerie rassure",
        d: "Montrer ton travail avant le premier rendez-vous.",
      },
      {
        t: "Tes prestations sont claires",
        d: "Coupe, couleur, soins… listés simplement.",
      },
      {
        t: "On te trouve près de chez soi",
        d: "Ville, adresse, horaires : visibles tout de suite.",
      },
      {
        t: "On te contacte facilement",
        d: "Téléphone et formulaire accessibles sur mobile.",
      },
    ],
    caseStudyId: "coiffure-luna",
    faqs: [
      {
        question: "Pourquoi un site si j'ai Instagram ?",
        answer:
          "Instagram est parfait pour le quotidien. Le site regroupe prestations, horaires et contact : et aide à être trouvé sur Google dans ta ville.",
      },
      {
        question: "Combien coûte un site pour un salon ?",
        answer:
          "Dès 500 € (démarrage) ou 800 € (jusqu'à 5 pages + galerie + aide pour Google).",
      },
      {
        question: "Vous gérez la prise de rendez-vous en ligne ?",
        answer:
          "Le forfait de base inclut un contact clair. Une réservation en ligne peut s'ajouter en sur-mesure, selon ton outil.",
      },
      {
        question: "Délai de livraison ?",
        answer: "7 à 14 jours selon le forfait, après validation du devis.",
      },
    ],
    image: "/image/coiffure.jpg",
    imageAlt: "Salon de coiffure : exemple de site vitrine pour coiffeur indépendant",
  },
  {
    slug: "site-internet-artisan-batiment",
    label: "Artisans du bâtiment",
    metier: "artisan du bâtiment",
    metierPlural: "artisans du bâtiment",
    title: "Site internet pour artisan du bâtiment dès 500€",
    metaDescription:
      "Site vitrine pour artisans du bâtiment : électricien, peintre, maçon… Dès 500 €, clair sur mobile, livré en 7 à 14 jours.",
    h1Before: "Site internet pour artisan du bâtiment dès",
    h1Highlight: "500€",
    intro:
      "Électricien, peintre, maçon : tes clients cherchent un pro fiable près de chez eux. Un site clair montre ta zone, tes services et tes réalisations : sans que tu gères la technique.",
    whyTitle: "Pourquoi un artisan du bâtiment a besoin d'un site",
    whyPoints: [
      {
        t: "Ta zone est claire",
        d: "Les clients savent si tu interviens chez eux.",
      },
      {
        t: "Tes services sont listés",
        d: "Ce que tu fais, point : sans blabla technique.",
      },
      {
        t: "Tes chantiers parlent pour toi",
        d: "Quelques photos valent mieux qu'un long discours.",
      },
      {
        t: "On t'appelle facilement",
        d: "Bouton téléphone et formulaire sur mobile.",
      },
    ],
    caseStudyId: "plomberie-durand",
    faqs: [
      {
        question: "Facebook ne suffit-il pas ?",
        answer:
          "Facebook aide. Un site reste ta vitrine à toi : plus claire pour Google, plus rassurante pour un devis.",
      },
      {
        question: "Combien ça coûte ?",
        answer:
          "500 € pour démarrer, 800 € pour un site plus complet. Devis pour un besoin précis (beaucoup de pages, outils spécifiques).",
      },
      {
        question: "Combien de temps ?",
        answer: "7 à 14 jours selon le forfait après validation du devis.",
      },
      {
        question: "Je n'ai pas le temps de m'occuper du site",
        answer:
          "Normal. Tu me donnes les infos et les photos ; je m'occupe du reste. Tu valides à chaque étape importante.",
      },
    ],
    image: "/image/artisan.jpg",
    imageAlt: "Artisan du bâtiment sur chantier : site vitrine professionnel",
  },
  {
    slug: "site-internet-independant",
    label: "Indépendants",
    metier: "indépendant",
    metierPlural: "indépendants",
    title: "Site internet pour indépendant dès 500€",
    metaDescription:
      "Site web clair pour freelances et indépendants. Dès 500 €, livré en 7 à 14 jours, sans prise de tête. Discutons ensemble.",
    h1Before: "Site internet pour indépendant dès",
    h1Highlight: "500€",
    intro:
      "Coach, consultant, thérapeute, créatif : tu as besoin d'un site qui explique clairement ce que tu fais et donne envie de te contacter. Je le crée pour toi.",
    whyTitle: "Pourquoi un indépendant a besoin d'un site",
    whyPoints: [
      {
        t: "Tu parais plus crédible",
        d: "Un site propre rassure plus qu'une bio Instagram seule.",
      },
      {
        t: "On comprend ton offre",
        d: "Services, pour qui, comment te joindre : sans flou.",
      },
      {
        t: "Tu restes joignable",
        d: "Formulaire et contact visibles sur mobile.",
      },
      {
        t: "Tu ne gères pas la technique",
        d: "Tu te concentres sur ton métier ; je m'occupe du site.",
      },
    ],
    faqs: [
      {
        question: "LinkedIn ou Instagram ne suffisent-ils pas ?",
        answer:
          "Ils aident à te faire connaître. Le site centralise ton offre et ton contact : et reste facile à envoyer à un prospect.",
      },
      {
        question: "Combien ça coûte ?",
        answer:
          "Dès 500 € pour démarrer, 800 € pour un site plus complet. Sur devis si besoin précis.",
      },
      {
        question: "Délai ?",
        answer: "7 à 14 jours selon le forfait après validation du devis.",
      },
      {
        question: "Puis-je modifier le site ensuite ?",
        answer:
          "Oui. Je te montre comment changer textes, photos et infos essentielles.",
      },
    ],
    image: "/image/independant.jpg",
    imageAlt: "Indépendant au travail : site vitrine professionnel",
  },
  {
    slug: "site-internet-coach-consultant",
    label: "Coach / Consultant",
    metier: "coach / consultant",
    metierPlural: "coachs et consultants",
    title: "Site internet pour coach et consultant dès 500€",
    metaDescription:
      "Tu es coach ou consultant ? Un site clair pour présenter ton offre, rassurer et convertir. Dès 500 €, livré en 7 à 14 jours.",
    h1Before: "Site internet pour coach et consultant dès",
    h1Highlight: "500€",
    intro:
      "Tes prospects te cherchent avant de réserver un appel. Un site clair explique ton accompagnement, montre ta méthode, et rend le contact évident. Je le crée pour toi, sans que tu gères la technique.",
    whyTitle: "Pourquoi un coach ou un consultant a besoin d’un site",
    whyPoints: [
      {
        t: "Tu inspires confiance dès le premier regard",
        d: "Positionnement, méthode, preuves : tout est limpide en quelques secondes.",
      },
      {
        t: "Ton offre est comprise",
        d: "Pour qui tu travailles, ce que tu proposes, et ce qui se passe ensuite.",
      },
      {
        t: "Ils te contactent plus facilement",
        d: "Formulaire, prise de rendez-vous ou mail : l’étape suivante est claire.",
      },
      {
        t: "Tu restes concentré sur ton métier",
        d: "Je m’occupe du site. Tu gardes ton énergie pour tes clients.",
      },
    ],
    caseStudyId: "pulse",
    faqs: [
      {
        question: "LinkedIn ou Instagram ne suffisent-ils pas pour un coach ?",
        answer:
          "Ils aident à te faire connaître. Un site centralise ton offre, tes preuves et ton contact, et reste facile à envoyer à un prospect sérieux.",
      },
      {
        question: "Combien coûte un site pour coach ou consultant ?",
        answer:
          "Dès 500 € pour démarrer (page claire + contact). 800 € pour un site plus complet. Sur devis si tu as besoin d’une réservation ou d’un parcours précis.",
      },
      {
        question: "Combien de temps pour être en ligne ?",
        answer:
          "Entre 7 et 14 jours selon le forfait, après validation du devis, si les contenus arrivent à temps.",
      },
      {
        question: "Est-ce que je pourrai modifier mon site ensuite ?",
        answer:
          "Oui. À la mise en ligne, je te montre comment changer textes, photos et infos essentielles.",
      },
    ],
    image: "/image/pulse.jpg",
    imageAlt: "Consultante en bien-être : exemple de site vitrine pour coach",
  },
];

export function getMetier(slug: string): MetierPage | undefined {
  return metiers.find((m) => m.slug === slug);
}
