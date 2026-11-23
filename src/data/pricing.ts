/** Prix d’entrée affiché partout (badges, SEO, footer) */
export const PRICE_FROM = "dès 29 € HT/mois";
export const PRICE_FROM_SHORT = "29€ HT/mois";

/**
 * Mention légale unique pour les estimations de rentabilité.
 * Placer une * sur chaque affirmation concernée ; afficher ce texte une seule fois par page.
 */
export const ROI_DISCLAIMER =
  "* Estimation illustrative. Trafic, conversion et revenus sont des hypothèses. Le seuil de rentabilité dépend de votre tarif de séance, de votre taux de conversion et du volume réel de demandes. Exemple : à 90 € la séance, une cliente suivie sur l’année couvre souvent le modèle à 29 € HT/mois. Ce n’est pas une promesse de chiffre d’affaires.";

export const SHARED_PLAN_FEATURES = [
  "Site jusqu’à 5 pages",
  "Design personnalisé",
  "Réservation en ligne",
  "Hébergement et certificat SSL",
] as const;

export const SHARED_PLAN_DESCRIPTION =
  "Site web professionnel pour l’accompagnement : pages claires, réservation, hébergement et maintenance inclus.";

export const SHARED_PLAN_DELIVERY = "à partir de 48h";

/** Inclus dans toutes les formules payantes : carrousel homepage */
export const includedInAll = [
  {
    title: "Une identité qui vous ressemble",
    text: "Votre site ne part pas d’un modèle. Il est construit autour de votre univers, votre personnalité et votre expertise.",
    image: "/image/videopulse-poster.jpg",
    video: "/image/videopulse.mp4",
    imageAlt: "Aperçu d’un site livré : identité PULSE",
  },
  {
    title: "Une expérience qui donne confiance",
    text: "Chaque page est pensée pour que vos visiteurs comprennent rapidement qui vous êtes, ce que vous proposez et pourquoi vous choisir.",
    image: "/image/sitewebvideo-poster.jpg",
    video: "/image/sitewebvideo.mp4",
    imageAlt: "Parcours de site pensé pour rassurer les visiteurs",
  },
  {
    title: "Une visibilité pensée dès le départ",
    text: "Structure, contenus et performances sont optimisés pour Google et préparés pour être compris par les IA.",
    image: "/image/performance.png",
    imageAlt: "Visibilité Google et IA dès la conception",
  },
  {
    title: "Des contenus qui parlent de vous",
    text: "Je vous aide à transformer votre expertise en mots clairs, utiles et convaincants, sans vous demander de devenir rédactrice.",
    image: "/image/sophie-delmas.png",
    imageAlt: "Sophie Delmas — contenus qui parlent de vous",
  },
  {
    title: "Tout fonctionne, partout",
    text: "Mobile, tablette, ordinateur, formulaires, réservation, sécurité : votre site est conçu pour fonctionner sans vous demander de bricoler.",
    image: "/image/mockup.png",
    imageAlt: "Site fluide sur mobile, tablette et ordinateur",
  },
  {
    title: "Et après la mise en ligne ?",
    text: "Votre activité évolue. Votre site aussi. Sur les formules Essentiel et Visibilité, maintenance technique et évolutions restent possibles.",
    image: "/image/apres-support.jpg",
    imageAlt: "Évolutions et modifications après mise en ligne",
  },
] as const;

/** Garanties alignées sur Découverte / Essentiel / Visibilité */
export const guarantees = [
  {
    title: "Vous gardez le dernier mot.",
    text: "Rien ne part en ligne sans votre validation. Vous découvrez la maquette, échangez avec moi, demandez vos ajustements et validez avant la mise en ligne.",
  },
  {
    title: "On ajuste jusqu’à ce que ce soit juste.",
    text: "Pendant la création, on peaufine ensemble. L’objectif : un site dans lequel vous vous reconnaissez vraiment, pas simplement un site « livré ».",
  },
  {
    title: "Un cadre clair selon la formule.",
    text: "Découverte : site vitrine d’une page, sans modification après livraison. Essentiel et Visibilité : nom de domaine personnalisé, hébergement, maintenance technique et support inclus.",
  },
  {
    title: "Vous savez où vous allez.",
    text: "Le prix est annoncé dès le départ. Gratuit, 29 € HT/mois ou 59 € HT/mois selon la formule. Pas d’option cachée ni de mauvaise surprise en cours de route.",
  },
] as const;

export const pricingPlans = [
  {
    id: "decouverte",
    tier: "Découverte",
    name: "Sans engagement",
    price: "0",
    period: "€",
    priceNote: "Gratuit",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: false,
    badge: "Nouveau",
    tagline: "Poser une première présence en ligne, simplement.",
    description:
      "Site vitrine d’une page avec design prédéfini, présentation de l’activité, coordonnées et réseaux sociaux.",
    delivery: SHARED_PLAN_DELIVERY,
    groups: [
      {
        label: "Votre site",
        items: [
          "Site vitrine d’une page",
          "Design prédéfini",
          "Présentation de l’activité",
          "Coordonnées et réseaux sociaux",
        ],
      },
      {
        label: "Hébergement",
        items: ["Hébergement inclus", "Sous-domaine .vercel.app"],
      },
      {
        label: "Limites",
        items: ["Aucune modification après livraison"],
      },
    ],
    features: [
      "Site vitrine d’une page",
      "Design prédéfini",
      "Présentation de l’activité",
      "Coordonnées et réseaux sociaux",
      "Hébergement",
      "Sous-domaine .vercel.app",
      "Aucune modification après livraison",
    ],
    persona: {
      label: "Gratuit",
      labelShort: "0 €",
      teaser: "Pour tester une présence minimale, sans engagement.",
      headline: "Votre site professionnel,\nsans la charge mentale.",
      highlight: "sans la charge mentale",
      body: "Kopio pose une vitrine d’une page pour présenter votre activité. Idéal pour démarrer ; les évolutions passent ensuite par Essentiel ou Visibilité.",
      cta: "Demander Découverte",
    },
  },
  {
    id: "essentiel",
    tier: "Essentiel",
    name: "Engagement : 12 mois",
    price: "29",
    period: "€ HT / mois",
    priceNote: null as string | null,
    setup: "",
    altPayment: "",
    terms: "",
    highlight: true,
    badge: "Offre principale",
    tagline: "Votre site professionnel, prêt à convertir.",
    description: SHARED_PLAN_DESCRIPTION,
    delivery: SHARED_PLAN_DELIVERY,
    groups: [
      {
        label: "Votre site",
        items: [
          "Site jusqu’à 5 pages",
          "Design personnalisé",
          "Nom de domaine personnalisé inclus",
          "Présentation des accompagnements",
          "Formulaire de contact",
          "Réservation en ligne",
        ],
      },
      {
        label: "Votre visibilité",
        items: ["SEO de base", "SAGEO essentiel"],
      },
      {
        label: "Votre suivi",
        items: [
          "Hébergement et certificat SSL",
          "Maintenance technique",
          "Support par e-mail",
        ],
      },
    ],
    features: [
      "Site jusqu’à 5 pages",
      "Design personnalisé",
      "Nom de domaine personnalisé inclus",
      "Présentation des accompagnements",
      "Formulaire de contact",
      "Réservation en ligne",
      "SEO de base",
      "SAGEO essentiel",
      "Hébergement et certificat SSL",
      "Maintenance technique",
      "Support par e-mail",
    ],
    persona: {
      label: "Offre principale",
      labelShort: "29 € HT",
      teaser:
        "Le socle recommandé pour la majorité des professionnelles de l’accompagnement.",
      headline: "Votre site professionnel,\nsans la charge mentale.",
      highlight: "sans la charge mentale",
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clients vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec Essentiel",
    },
  },
  {
    id: "visibilite",
    tier: "Visibilité",
    name: "Engagement : 12 mois",
    price: "59",
    period: "€ HT / mois",
    priceNote: null as string | null,
    setup: "",
    altPayment: "",
    terms: "",
    highlight: false,
    badge: "Offre avancée",
    tagline: "Être trouvée sur Google, les IA et votre blog.",
    description:
      "Site jusqu’à 5 pages avec design approfondi, pages de vente, blog autonome et SAGEO approfondie.",
    delivery: SHARED_PLAN_DELIVERY,
    groups: [
      {
        label: "Votre site",
        items: [
          "Jusqu’à 5 pages de site",
          "Design personnalisé approfondi",
          "Pages dédiées aux accompagnements",
          "Pages de vente",
          "Réservation en ligne",
          "Blog intégré",
          "Publication autonome des articles",
        ],
      },
      {
        label: "Votre visibilité",
        items: [
          "SAGEO approfondie",
          "SEO avancé et GEO",
          "Données structurées",
        ],
      },
      {
        label: "Votre suivi",
        items: [
          "Hébergement et maintenance technique",
          "Support prioritaire",
        ],
      },
    ],
    features: [
      "Jusqu’à 5 pages de site",
      "Design personnalisé approfondi",
      "Pages dédiées aux accompagnements",
      "Pages de vente",
      "Réservation en ligne",
      "Blog intégré",
      "Possibilité de publier, modifier et supprimer ses articles en autonomie",
      "SAGEO approfondie",
      "SEO avancé et GEO",
      "Données structurées",
      "Hébergement et maintenance technique",
      "Support prioritaire",
    ],
    persona: {
      label: "Offre avancée",
      labelShort: "59 € HT",
      teaser:
        "Pour développer votre contenu et votre présence sur Google et les IA.",
      headline: "Votre site professionnel,\nsans la charge mentale.",
      highlight: "sans la charge mentale",
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clients vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec Visibilité",
    },
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];

/** Comparatif Kopio vs Wix/WordPress vs agence : textes courts pour mobile */
export const offerComparison = [
  {
    label: "Prix",
    brand: "Gratuit ou dès 29 € HT/mois",
    diy: "Abonnement",
    agency: "2 000 €+",
  },
  {
    label: "Délai",
    brand: "À partir de 48h",
    diy: "Vous-même",
    agency: "1–3 mois",
  },
  {
    label: "Mises à jour",
    brand: "Incluses (Essentiel / Visibilité)",
    diy: "Vous-même",
    agency: "Tickets / délais",
  },
  {
    label: "Blog",
    brand: "Visibilité (autonomie)",
    diy: "Selon l’outil",
    agency: "Souvent payant",
  },
  {
    label: "Hébergement",
    brand: "Inclus",
    diy: "À payer",
    agency: "Souvent à part",
  },
  {
    label: "Engagement",
    brand: "Sans / 12 mois",
    diy: "Mensuel",
    agency: "Contrat",
  },
  {
    label: "Contact",
    brand: "1 personne",
    diy: "Chat / forum",
    agency: "Équipe",
  },
] as const;
