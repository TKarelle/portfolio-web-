/** Prix d’entrée affiché partout (badges, SEO, footer) */
export const PRICE_FROM = "dès 89 €/mois";
export const PRICE_FROM_SHORT = "89€/mois";

/** Conditions communes des forfaits mensuels */
export const PLAN_TERMS = "pendant 12 mois, sans frais";

/** Inclus dans toutes les formules : à afficher très fort */
export const includedInAll = [
  {
    title: "Design 100 % personnalisé",
    text: "Pas de template générique : ton site est pensé pour ton activité.",
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
    text: "Je travaille tes textes avec toi, même si tu ne sais pas quoi écrire.",
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
    text: "Tu m’écris, je mets à jour sous 24 à 72 h. Sans bricolage technique.",
  },
  {
    title: "Un interlocuteur unique",
    text: "Joignable, qui répond : tu parles toujours à la même personne.",
  },
  {
    title: "Réservation de rendez-vous",
    text: "Un parcours clair pour que tes clients te réservent facilement.",
  },
] as const;

/** Garanties qui rassurent et font signer */
export const guarantees = [
  {
    title: "Tu valides avant de payer la suite",
    text: "La mise en service n’est facturée qu’à la validation de la maquette.",
  },
  {
    title: "Satisfaite ou retravaillé",
    text: "2 cycles de modifications inclus après livraison.",
  },
  {
    title: "Le site devient le tien",
    text: "Après 12 mensualités, tu en es propriétaire à 100 %. Ou rachat anticipé à tout moment : tu soldes l’intégralité des mois restants. Le nom de domaine est à ton nom dès le premier jour.",
  },
  {
    title: "Transparence totale",
    text: "Les prix sont sur la page. Pas de devis surprise, pas d’option cachée.",
  },
] as const;

export const pricingPlans = [
  {
    id: "launch",
    name: "Pour démarrer",
    price: "89",
    period: "€/mois",
    setup: "+ 390 € de mise en service",
    altPayment: "ou 1 890 € en paiement unique",
    terms: PLAN_TERMS,
    highlight: false,
    description: "Une page claire pour te présenter et être joignable.",
    delivery: "Sous 14 jours",
    features: [
      "Site one-page élégant et complet (tout sur une page)",
      "Présentation, offre, témoignages et contact",
      "Refresh design inclus tous les 12 mois",
      "30 min d’appel de lancement",
    ],
    persona: {
      label: "Celles qui démarrent",
      labelShort: "Démarrer",
      teaser:
        "Pas encore de site. Envie d’exister en ligne sans te perdre dans la technique.",
      headline: "Ton premier site, sans compétences techniques.",
      highlight: "sans compétences",
      body: "Un site clair, pensé pour les femmes entrepreneuses, pour poser tes bases et inspirer confiance dès le premier jour.",
      cta: "Voir ce forfait",
    },
  },
  {
    id: "pro",
    name: "Complet",
    price: "129",
    period: "€/mois",
    setup: "+ 490 € de mise en service",
    altPayment: "ou 2 390 € en paiement unique",
    terms: PLAN_TERMS,
    highlight: true,
    description: "Plus de pages, réservation avancée et SEO local renforcé.",
    delivery: "21 jours",
    features: [
      "Tout le forfait Pour démarrer",
      "Jusqu’à 5 pages (accueil, à propos, offres, avis ou FAQ, contact)",
      "Réservation avancée (agenda, créneaux, confirmation auto)",
      "Atelier rédaction 1h + réécriture pro",
      "SEO local : fiche Google Business + mots-clés de zone",
      "2 pages en plus offertes la 1ʳᵉ année",
    ],
    persona: {
      label: "Celles qui modernisent",
      labelShort: "Moderniser",
      teaser:
        "Ce que les gens voient en ligne ne montre plus ce que tu vaux. Il est temps de moderniser.",
      headline: "Un site à la hauteur de ton expertise",
      highlight: "à la hauteur",
      body: "Ton activité a évolué, ton image doit suivre. Je transforme ton site actuel en un outil élégant qui attire et convertit tes clientes idéales.",
      cta: "Voir ce forfait",
    },
  },
  {
    id: "sur-mesure",
    name: "Besoin précis",
    price: "Devis",
    period: "",
    setup: "",
    altPayment: "",
    terms: "",
    highlight: false,
    description:
      "Quand le Complet ne suffit plus : boutique, espace client ou outil métier.",
    delivery: "Selon le projet",
    features: [
      "Boutique en ligne (catalogue, panier, commandes)",
      "Paiement en ligne et confirmations automatiques",
      "Espace client avec connexion / comptes",
      "Outil ou parcours métier conçu pour toi",
      "Intégration de tes outils (CRM, email, agenda…)",
      "Suivi dédié du brief à la mise en ligne",
    ],
    persona: {
      label: "Celles qui veulent du précis",
      labelShort: "Sur mesure",
      teaser:
        "Une vitrine ne suffit plus : boutique, outil ou parcours qui travaille pour toi.",
      headline: "Un site pensé pour ton besoin précis.",
      highlight: "besoin précis",
      body: "Boutique, espace client ou outil métier : je construis ce qui dépasse une vitrine classique, avec un devis clair avant de démarrer.",
      cta: "En parler",
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
    brand: "14–21 jours",
    diy: "Toi-même",
    agency: "1–3 mois",
  },
  {
    label: "Mises à jour",
    brand: "24–72 h par mail",
    diy: "Toi-même",
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
    label: "Paiement",
    brand: "Fractionné 0 frais",
    diy: "Carte / abo",
    agency: "Selon contrat",
  },
  {
    label: "Engagement",
    brand: "12 mois min.",
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
