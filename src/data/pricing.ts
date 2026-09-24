export const pricingPlans = [
  {
    id: "launch",
    name: "Pour démarrer",
    price: "500",
    period: "€",
    highlight: false,
    description: "Pour se lancer vite, sans prise de tête.",
    delivery: "7 à 10 jours",
    features: [
      "1 page d'accueil claire",
      "Design pensé pour toi",
      "Lisible sur téléphone",
      "Formulaire de contact",
      "Être trouvé sur Google près de chez toi",
      "Mise en ligne incluse",
    ],
    /** Persona hero (filtre type Labo) — orienté besoin client */
    persona: {
      label: "Ceux qui démarrent",
      teaser: "Pas encore de site. Envie d’exister en ligne sans te perdre dans la technique.",
      headline: "Ton premier site, sans compétences techniques.",
      highlight: "sans compétences",
      body: "Artisans et indépendants — un site clair pour ton activité. On s’occupe du reste.",
      cta: "Voir ce forfait",
    },
  },
  {
    id: "pro",
    name: "Complet",
    price: "800",
    period: "€",
    highlight: true,
    description: "Plus de pages, plus fort sur Google, plus pro.",
    delivery: "10 à 14 jours",
    features: [
      "Tout le forfait Pour démarrer",
      "5 pages dédiées (accueil, services, à propos…)",
      "SEO local renforcé (métier + zone)",
      "Site rapide, propre, prêt à être indexé",
      "Animations soignées",
    ],
    persona: {
      label: "Ceux qui modernisent",
      teaser: "Ce que les gens voient en ligne ne montre plus ce que tu vaux — il est temps de moderniser.",
      headline: "Un site à la hauteur de ton activité.",
      highlight: "à la hauteur",
      body: "Tu as évolué. Une refonte claire et actuelle pour que ton image en ligne inspire enfin confiance.",
      cta: "Voir ce forfait",
    },
  },
  {
    id: "sur-mesure",
    name: "Besoin précis",
    price: "Devis",
    period: "",
    highlight: false,
    description: "Boutique, réservation, outil sur mesure — on construit ce qu’il te faut.",
    delivery: "Selon le projet",
    features: [
      "Boutique en ligne",
      "Paiement en ligne",
      "Système de connexion / comptes",
      "Réservation / prise de rendez-vous",
      "Parcours et fonctions sur mesure",
      "Espace admin / tableau de bord",
    ],
    persona: {
      label: "Ceux qui veulent du précis",
      teaser: "Une vitrine ne suffit plus : boutique, réservation, outil qui travaille pour toi.",
      headline: "Un site pensé pour ton besoin précis.",
      highlight: "besoin précis",
      body: "Boutique, réservation, plateforme… quand tu as besoin que ton site fasse plus que présenter ton activité.",
      cta: "En parler",
    },
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];


/** Comparatif Karelle vs Wix/WordPress vs agence — textes courts pour mobile */
export const offerComparison = [
  {
    label: "Prix",
    karelle: "Dès 500 €",
    diy: "Abonnement",
    agency: "2 000 €+",
  },
  {
    label: "Délai",
    karelle: "7–14 jours",
    diy: "Toi-même",
    agency: "1–3 mois",
  },
  {
    label: "Technique",
    karelle: "Aucune",
    diy: "À apprendre",
    agency: "Aucune",
  },
  {
    label: "Design & mobile",
    karelle: "Inclus",
    diy: "Templates",
    agency: "Inclus",
  },
  {
    label: "Google",
    karelle: "Inclus*",
    diy: "À faire",
    agency: "En option",
  },
  {
    label: "Contact",
    karelle: "1 personne",
    diy: "Chat / forum",
    agency: "Équipe",
  },
  {
    label: "Propriété",
    karelle: "À toi",
    diy: "Plateforme",
    agency: "À toi",
  },
  {
    label: "Engagement",
    karelle: "Aucun",
    diy: "Mensuel",
    agency: "Contrat",
  },
] as const;
