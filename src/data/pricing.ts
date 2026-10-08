/** Prix d’entrée affiché partout (badges, SEO, footer) */
export const PRICE_FROM = "dès 89 €/mois";
export const PRICE_FROM_SHORT = "89€/mois";

/**
 * Mention légale unique pour les estimations de rentabilité.
 * Placer une * sur chaque affirmation concernée ; afficher ce texte une seule fois par page.
 */
export const ROI_DISCLAIMER =
  "* Estimation illustrative. Trafic, conversion et revenus sont des hypothèses. Le seuil de rentabilité dépend de votre tarif de séance, de votre taux de conversion et du volume réel de demandes. Exemple : à 90 € la séance, une cliente suivie sur l’année couvre souvent le modèle à 89 €/mois. Ce n’est pas une promesse de chiffre d’affaires.";

export const SHARED_PLAN_FEATURES = [
  "Jusqu’à 5 pages (accueil, à propos, offres, avis ou FAQ, contact)",
  "Réservation avancée (agenda, créneaux, confirmation auto)",
  "Atelier rédaction 1h + réécriture pro",
] as const;

export const SHARED_PLAN_DESCRIPTION =
  "Site web professionnel pour l'accompagnement : jusqu'à 5 pages, réservation, atelier rédaction, hébergement et mises à jour inclus.";

export const SHARED_PLAN_DELIVERY = "21 jours";

/** Inclus dans toutes les formules : carrousel homepage */
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
    image: "/image/writing-desk.jpg",
    imageAlt: "Aide à la rédaction de contenus experts",
  },
  {
    title: "Tout fonctionne, partout",
    text: "Mobile, tablette, ordinateur, formulaires, réservation, sécurité : votre site est conçu pour fonctionner sans vous demander de bricoler.",
    image: "/image/mockup.png",
    imageAlt: "Site fluide sur mobile, tablette et ordinateur",
  },
  {
    title: "Et après la mise en ligne ?",
    text: "Votre activité évolue. Votre site aussi. Vous pouvez me demander des modifications et continuer à le faire évoluer avec vous.",
    image: "/image/apres-support.jpg",
    imageAlt: "Évolutions et modifications après mise en ligne",
  },
] as const;

/** Garanties alignées sur les modèles 6 / 12 / 24 mois */
export const guarantees = [
  {
    title: "Vous gardez le dernier mot.",
    text: "Rien ne part en ligne sans votre validation. Vous découvrez la maquette, échangez avec moi, demandez vos ajustements et validez avant la mise en ligne.",
  },
  {
    title: "On ajuste jusqu’à ce que ce soit juste.",
    text: "2 cycles de modifications sont inclus. L’objectif : un site dans lequel vous vous reconnaissez vraiment, pas simplement un site « livré ».",
  },
  {
    title: "Votre site reste votre site.",
    text: "Le nom de domaine est à votre nom dès le premier jour. À la fin de votre engagement, le site vous appartient à 100 %. Vous pouvez également choisir de solder les mensualités restantes à tout moment pour en devenir propriétaire plus tôt.",
  },
  {
    title: "Vous savez où vous allez.",
    text: "Le prix est annoncé dès le départ. 179 €, 139 € ou 89 €/mois selon l’accompagnement choisi. Pas d’option cachée ni de mauvaise surprise en cours de route.",
  },
] as const;

const SITE_GROUP = {
  label: "Votre site",
  items: [
    "Jusqu’à 5 pages",
    "Design personnalisé",
    "Réservation en ligne",
    "Atelier rédaction 1h + réécriture professionnelle",
  ],
} as const;

export const pricingPlans = [
  {
    id: "sur-mesure",
    tier: "Lancement",
    name: "6 mois",
    price: "179",
    period: "€/mois",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: false,
    badge: null as string | null,
    tagline: "Poser votre présence et partir sur de bonnes bases.",
    description: SHARED_PLAN_DESCRIPTION,
    delivery: SHARED_PLAN_DELIVERY,
    groups: [
      SITE_GROUP,
      {
        label: "Votre visibilité",
        items: [
          "Structure SEO optimisée",
          "Indexation Google",
          "Configuration Search Console",
        ],
      },
      {
        label: "Votre suivi",
        items: ["1 bilan analytics après mise en ligne"],
      },
    ],
    features: [
      ...SHARED_PLAN_FEATURES,
      "SEO : lancement et indexation (sans suivi long terme)",
      "Bilan analytics unique après mise en ligne",
    ],
    persona: {
      label: "Engagement court",
      labelShort: "6 mois",
      teaser:
        "Pour tester rapidement. La mensualité plus élevée dissuade l’engagement court.",
      headline: "Votre site professionnel,\nsans la charge mentale.",
      highlight: "sans la charge mentale",
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clients vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec ce modèle",
    },
  },
  {
    id: "pro",
    tier: "Développement",
    name: "12 mois",
    price: "139",
    period: "€/mois",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: true,
    badge: "Engagement recommandé",
    tagline: "Faire grandir votre visibilité et vous installer sur Google.",
    description: SHARED_PLAN_DESCRIPTION,
    delivery: SHARED_PLAN_DELIVERY,
    groups: [
      SITE_GROUP,
      {
        label: "Votre visibilité",
        items: [
          "Structure SEO optimisée",
          "Optimisation Google Business Profile",
          "Travail des mots-clés locaux",
          "Ajustements SEO pendant 12 mois",
        ],
      },
      {
        label: "Votre suivi",
        items: [
          "4 bilans analytics",
          "Suivi de l’évolution de votre visibilité",
        ],
      },
    ],
    features: [
      ...SHARED_PLAN_FEATURES,
      "SEO local : fiche Google Business + mots-clés de zone, suivi sur l’année",
      "Suivi analytics trimestriel (4 bilans)",
    ],
    persona: {
      label: "Offre cœur",
      labelShort: "12 mois",
      teaser:
        "Le compromis durée / mensualité pour la majorité des professionnelles de l’accompagnement.",
      headline: "Votre site professionnel,\nsans la charge mentale.",
      highlight: "sans la charge mentale",
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clients vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec ce modèle",
    },
  },
  {
    id: "launch",
    tier: "Rayonnement",
    name: "24 mois",
    price: "89",
    period: "€/mois",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: false,
    badge: null as string | null,
    tagline: "Construire une visibilité durable sur Google et les IA.",
    description: SHARED_PLAN_DESCRIPTION,
    delivery: SHARED_PLAN_DELIVERY,
    groups: [
      SITE_GROUP,
      {
        label: "Votre visibilité",
        items: [
          "Optimisation SEO continue",
          "Consolidation du référencement local",
          "Optimisation régulière des contenus",
          "Travail de visibilité sur Google et les IA",
        ],
      },
      {
        label: "Votre suivi",
        items: [
          "Analyse tous les 2 mois",
          "Ajustements selon les évolutions",
          "Bilans d’évolution",
        ],
      },
    ],
    features: [
      ...SHARED_PLAN_FEATURES,
      "SEO long terme : consolidation locale + ajustements contenus sur 2 ans",
      "Suivi analytics bimestriel + bilans d’évolution",
    ],
    persona: {
      label: "Meilleur mensuel",
      labelShort: "24 mois",
      teaser:
        "La mensualité la plus basse. Idéal si vous vous engagez sereinement sur la durée.",
      headline: "Votre site professionnel,\nsans la charge mentale.",
      highlight: "sans la charge mentale",
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clients vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec ce modèle",
    },
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];

/** Comparatif Kopio vs Wix/WordPress vs agence : textes courts pour mobile */
export const offerComparison = [
  {
    label: "Prix",
    brand: "Dès 89 €/mois",
    diy: "Abonnement",
    agency: "2 000 €+",
  },
  {
    label: "Délai",
    brand: "21 jours",
    diy: "Vous-même",
    agency: "1–3 mois",
  },
  {
    label: "Mises à jour",
    brand: "24–72 h par mail",
    diy: "Vous-même",
    agency: "Tickets / délais",
  },
  {
    label: "Refresh design",
    brand: "Tous les 12 mois",
    diy: "À refaire",
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
    brand: "6 / 12 / 24 mois",
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
