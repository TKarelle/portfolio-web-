/** Prix d’entrée affiché partout (badges, SEO, footer) */
export const PRICE_FROM = "dès 89 €/mois";
export const PRICE_FROM_SHORT = "89€/mois";

/** Coût annuel de référence (12 × 89 €) pour les preuves ROI */
export const YEARLY_COST_AT_89 = "1 068 €";

/**
 * Mention légale unique pour les estimations de rentabilité.
 * Placer une * sur chaque affirmation concernée ; afficher ce texte une seule fois par page.
 */
export const ROI_DISCLAIMER =
  "* Estimation illustrative. Trafic, conversion et revenus sont des hypothèses. Le seuil de rentabilité dépend de votre tarif de séance, de votre taux de conversion et du volume réel de demandes. Exemple : à 90 € la séance, une cliente suivie sur l’année couvre souvent le modèle à 89 €/mois. Ce n’est pas une promesse de chiffre d’affaires.";

/** Preuve ROI */
export const roiProof = {
  headline:
    "Un seul contrat peut couvrir plus d’un an de site. Au-delà, c’est du bénéfice.*",
  columns: [
    {
      value: "12*",
      label: "visites qualifiées supplémentaires par an",
      note: "1/mois, scénario minimal",
    },
    {
      value: "3*",
      label: "nouvelles clientes",
      note: "si 25 % prennent rendez-vous",
    },
    {
      value: "1 080 €*",
      label: "revenus générés",
      note: "3 clientes × 4 séances × 90 €",
    },
  ],
  costLabel: "coût Kopio sur 12 mois (à 89 €/mois)",
  costValue: YEARLY_COST_AT_89,
} as const;
export const SHARED_PLAN_FEATURES = [
  "Jusqu’à 5 pages (accueil, à propos, offres, avis ou FAQ, contact)",
  "Réservation avancée (agenda, créneaux, confirmation auto)",
  "Atelier rédaction 1h + réécriture pro",
] as const;

export const SHARED_PLAN_DESCRIPTION = "";

export const SHARED_PLAN_DELIVERY = "21 jours";

/** Inclus dans toutes les formules : à afficher très fort */
export const includedInAll = [
  {
    title: "Design 100 % personnalisé",
    text: "Pas de template générique : votre site est pensé pour votre activité.",
  },
  {
    title: "Parfait sur mobile, tablette et ordinateur",
    text: "Lisible et fluide partout, surtout sur téléphone.",
  },
  {
    title: "Référencement Google de base",
    text: "Structure, balises, vitesse et indexation : les bases pour être trouvé.",
  },
  {
    title: "Aide à la rédaction",
    text: "Je travaille vos textes avec vous, même si vous ne savez pas quoi écrire.",
  },
  {
    title: "Conformité RGPD",
    text: "Mentions légales, cookies et politique de confidentialité inclus.",
  },
  {
    title: "Hébergement, domaine et sécurité",
    text: "Nom de domaine, certificat SSL, hébergement et sauvegardes inclus.",
  },
  {
    title: "Modifications par email",
    text: "Vous m’écrivez, je mets à jour sous 24 à 72 h. Sans bricolage technique.",
  },
  {
    title: "Un interlocuteur unique",
    text: "Joignable, qui répond : vous parlez toujours à la même personne.",
  },
] as const;

/** Garanties alignées sur les modèles 6 / 12 / 24 mois (sans frais de mise en service) */
export const guarantees = [
  {
    title: "Vous validez avant la mise en ligne",
    text: "Rien n’est publié sans votre accord. Vous validez la maquette, puis on met en ligne.",
  },
  {
    title: "Satisfaite ou retravaillé",
    text: "2 cycles de modifications inclus après livraison.",
  },
  {
    title: "Le site devient le vôtre",
    text: "À la fin de votre engagement (6, 12 ou 24 mois), le site vous appartient à 100 %. Ou rachat anticipé à tout moment : vous soldez les mois restants. Le nom de domaine est à votre nom dès le premier jour.",
  },
  {
    title: "Transparence totale",
    text: "Les prix sont sur la page : 179 €, 139 € ou 89 €/mois selon la durée. Pas de devis surprise, pas d’option cachée.",
  },
] as const;

export const pricingPlans = [
  {
    id: "sur-mesure",
    name: "6 mois",
    price: "179",
    period: "€/mois",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: false,
    badge: null as string | null,
    description: SHARED_PLAN_DESCRIPTION,
    delivery: SHARED_PLAN_DELIVERY,
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
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clientes vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec ce modèle",
    },
  },
  {
    id: "pro",
    name: "12 mois",
    price: "139",
    period: "€/mois",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: true,
    badge: "Engagement recommandé",
    description: SHARED_PLAN_DESCRIPTION,
    delivery: SHARED_PLAN_DELIVERY,
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
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clientes vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec ce modèle",
    },
  },
  {
    id: "launch",
    name: "24 mois",
    price: "89",
    period: "€/mois",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: false,
    badge: null as string | null,
    description: SHARED_PLAN_DESCRIPTION,
    delivery: SHARED_PLAN_DELIVERY,
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
      body: "Kopio conçoit, maintient et fait évoluer votre présence en ligne, pour que vos clientes vous trouvent, vous comprennent et réservent.",
      cta: "Commencer avec ce modèle",
    },
  },
] as const;

export type PricingPlan = (typeof pricingPlans)[number];

/** Bloc anti-peur (section 2) */
export const antiFear = {
  eyebrow: "Sortir le sujet de votre tête",
  headline: "Ce que vous n’aurez jamais à faire avec Kopio",
  items: [
    "Choisir un hébergeur ou comprendre un CMS",
    "Rédiger vos textes seule face à une page blanche",
    "Mettre à jour, sauvegarder, sécuriser quoi que ce soit",
    "Re-payer un devis pour chaque modification",
    "Supplier un prestataire devenu injoignable",
  ],
  punchline: "Ce sujet sort de votre tête. Définitivement.",
  anchor:
    "15 à 40 heures de charge mentale éparse la première année. C’est ce que Kopio retire de votre semaine.",
} as const;

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
