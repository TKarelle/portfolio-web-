export type QuizAnswerLevel = 0 | 1 | 2;

export type QuizControlPoint = {
  id: number;
  title: string;
  tag: string;
  test: string;
  /** Poids de fuite (hypothèse Kopio). Le point 10 n'entre pas dans l'estim. €. */
  leakWeight: number;
  affectsEuroEstimate: boolean;
  options: [string, string, string];
};

export type QuizFigures = {
  contactsPerMonth: number;
  clientsOutOf10: number;
  avgClientValueYear: number;
};

export type QuizResult = {
  points: number;
  maxPoints: number;
  sealingRate: number;
  leakRate: number;
  lostContactsPerMonth: number;
  lostClientsPerMonth: number;
  lostEurosPerYear: number;
  hoursLabel: string;
  remainingAnswers: number;
};

export const QUIZ_META = {
  /** Accroche principale (home, SEO, barre promo) */
  headline:
    "Que disent Google et ChatGPT quand vos prospects tapent votre nom ?",
  /** Nom du produit */
  title: "La Grille d'Audit d'Étanchéité Web",
  eyebrow: "Audit gratuit · 2 min",
  subtitle:
    "10 points de contrôle factuels pour mesurer combien de personnes prêtes à vous contacter s'échappent de votre site actuel, et ce que cela représente en clientes.",
  duration: "2 minutes",
  bullets: [
    "Votre propre site, vos propres chiffres",
    "Rien à installer",
  ],
  introTitle: "Un site peut être beau et fuir",
  introBody:
    "Une cliente ravie parle de vous. Son amie tape votre nom, arrive sur votre site, hésite quelques secondes, puis repart sans vous écrire. Vous ne le saurez jamais : aucune alerte ne signale une personne qui n'a pas osé.",
  introClose:
    "Chaque point de cette grille correspond à un endroit où ces personnes s'échappent. Vous les testez en 30 secondes, puis vous obtenez un taux d'étanchéité et une estimation de la perte, calculée à partir de vos chiffres.",
  disclaimer:
    "Les pourcentages de fuite par point sont des hypothèses de calcul de Kopio, présentées en fourchette. Le résultat est un ordre de grandeur issu de vos chiffres, pas une statistique du secteur. Le coût en heures vient de votre propre réponse et n'entre pas dans l'estimation en euros.",
  path: "/grille-etancheite",
  promoLabel: "Quiz gratuit · 2 min",
  promoCta: "Faire le quiz",
} as const;

export const DEFAULT_FIGURES: QuizFigures = {
  contactsPerMonth: 8,
  clientsOutOf10: 4,
  avgClientValueYear: 360,
};

export const CONTROL_POINTS: QuizControlPoint[] = [
  {
    id: 1,
    title: "Quand on cherche votre nom, votre site apparaît-il ?",
    tag: "Trouvabilité",
    test: "Cherchez « prénom nom métier ville » sur Google. Regardez la première page.",
    leakWeight: 0.22,
    affectsEuroEstimate: true,
    options: [
      "Mon site n'apparaît pas",
      "Il apparaît en bas de page, ou après des profils tiers",
      "Il apparaît parmi les premiers résultats",
    ],
  },
  {
    id: 2,
    title: "Une visiteuse comprend-elle ce que vous faites, et pour qui ?",
    tag: "Clarté en 5 secondes",
    test: "Montrez votre accueil 5 secondes à quelqu'un, puis demandez-lui ce que vous proposez et à qui.",
    leakWeight: 0.18,
    affectsEuroEstimate: true,
    options: [
      "Il ne sait pas ou se trompe",
      "Il comprend ce que je fais, mais pas pour qui",
      "Il répond juste sur les deux",
    ],
  },
  {
    id: 3,
    title: "Sur téléphone, le bouton de contact est-il visible sans défiler ?",
    tag: "Mobile",
    test: "Ouvrez votre site sur votre téléphone, sans zoomer ni faire défiler.",
    leakWeight: 0.14,
    affectsEuroEstimate: true,
    options: [
      "Je dois défiler ou zoomer pour le trouver",
      "Visible mais petit, ou texte difficile à lire",
      "Visible, lisible, facile à toucher",
    ],
  },
  {
    id: 4,
    title: "Vos qualifications sont-elles visibles en un clic ?",
    tag: "Légitimité",
    test: "Depuis l'accueil, comptez les clics pour voir vos diplômes ou certifications.",
    leakWeight: 0.1,
    affectsEuroEstimate: true,
    options: [
      "Introuvables ou absentes",
      "Présentes mais sans contexte, ou à plus de 2 clics",
      "Visibles, brèves, reliées à votre méthode",
    ],
  },
  {
    id: 5,
    title: "Votre offre principale et son prix sont-ils visibles ?",
    tag: "Offre et prix",
    test: "Cherchez le prix de votre séance ou de votre offre principale sur le site.",
    leakWeight: 0.16,
    affectsEuroEstimate: true,
    options: [
      "Ni prix ni offre clairement présentée",
      "Une liste de prestations, sans prix ou sans offre mise en avant",
      "Une offre principale détaillée, avec son prix",
    ],
  },
  {
    id: 6,
    title: "Combien de clics pour prendre rendez-vous ou écrire ?",
    tag: "Chemin de rendez-vous",
    test: "Chronométrez le chemin depuis l'accueil jusqu'à l'envoi d'une demande.",
    leakWeight: 0.14,
    affectsEuroEstimate: true,
    options: [
      "Plus de 3 clics, ou plusieurs options en concurrence",
      "2 à 3 clics, ou un formulaire long",
      "Une seule action, évidente, présente sur chaque page",
    ],
  },
  {
    id: 7,
    title: "Annoncez-vous un délai de réponse, et le tenez-vous ?",
    tag: "Délai de réponse",
    test: "Vérifiez la page de contact : un délai est-il écrit ? Regardez vos 5 dernières réponses.",
    leakWeight: 0.08,
    affectsEuroEstimate: true,
    options: [
      "Aucun délai annoncé, réponses parfois tardives",
      "Un délai annoncé, pas toujours tenu",
      "Délai annoncé et tenu systématiquement",
    ],
  },
  {
    id: 8,
    title: "Les textes, tarifs et offres sont-ils à jour ?",
    tag: "Mise à jour",
    test: "Quand avez-vous modifié votre site pour la dernière fois ? Relisez l'accueil et la page tarifs.",
    leakWeight: 0.06,
    affectsEuroEstimate: true,
    options: [
      "Il y a plus d'un an, ou je ne sais plus",
      "Entre 3 mois et un an",
      "Il y a moins de 3 mois, tout est exact",
    ],
  },
  {
    id: 9,
    title:
      "Votre fiche Google est-elle reliée à votre site, avec des avis récents ?",
    tag: "Google Maps et référencement local",
    test: "Cherchez votre nom dans Google Maps. Vérifiez le lien vers votre site, la date du dernier avis et vos horaires.",
    leakWeight: 0.12,
    affectsEuroEstimate: true,
    options: [
      "Pas de fiche, fiche non revendiquée, ou sans lien vers mon site",
      "Fiche existante, mais sans avis de moins de 3 mois ou avec un lien erroné",
      "Fiche complète, lien vers mon site, avis de moins de 3 mois",
    ],
  },
  {
    id: 10,
    title: "Combien d'heures et d'anxiété ce site vous coûte-t-il chaque mois ?",
    tag: "Charge mentale et coût caché",
    test: "Additionnez le temps passé le mois dernier (modifications, mises à jour, bugs, hésitations) et notez combien de fois vous y avez repensé avec un pincement.",
    leakWeight: 0,
    affectsEuroEstimate: false,
    options: [
      "Plus de 3 h par mois, ou ce sujet me revient chaque semaine",
      "1 à 3 h par mois, ou de façon irrégulière",
      "Moins d'1 h par mois, aucun tracas",
    ],
  },
];

/** Niveau de réponse → sévérité de fuite (0 = fuite max, 2 = étanche). */
function severityFromAnswer(level: QuizAnswerLevel | null): number {
  if (level === null) return 0;
  if (level === 0) return 1;
  if (level === 1) return 0.5;
  return 0;
}

/** Points : 0 / 0.5 / 1 par question → total sur 10. */
function pointsFromAnswer(level: QuizAnswerLevel | null): number {
  if (level === null) return 0;
  if (level === 0) return 0;
  if (level === 1) return 0.5;
  return 1;
}

const HOURS_LABELS = [
  "Plus de 3 h / mois (ou charge mentale hebdo)",
  "1 à 3 h / mois",
  "Moins d'1 h / mois",
] as const;

export function computeQuizResult(
  answers: Array<QuizAnswerLevel | null>,
  figures: QuizFigures,
): QuizResult {
  const maxPoints = CONTROL_POINTS.length;
  let points = 0;
  let survival = 1;
  let answered = 0;

  CONTROL_POINTS.forEach((point, i) => {
    const level = answers[i] ?? null;
    if (level !== null) answered += 1;
    points += pointsFromAnswer(level);

    if (!point.affectsEuroEstimate) return;
    const severity = severityFromAnswer(level);
    survival *= 1 - point.leakWeight * severity;
  });

  const leakRate = Math.min(0.92, Math.max(0, 1 - survival));
  const sealingRate = Math.round((1 - leakRate) * 1000) / 10;

  const contacts = Math.max(0, figures.contactsPerMonth);
  const conversion = Math.min(10, Math.max(0, figures.clientsOutOf10)) / 10;
  const value = Math.max(0, figures.avgClientValueYear);

  // Personnes « prêtes » qui s'échappent, recalées sur celles qui passent encore.
  const lostContactsPerMonth =
    leakRate >= 0.99
      ? contacts * 8
      : contacts * (leakRate / Math.max(1 - leakRate, 0.08));

  const lostClientsPerMonth = lostContactsPerMonth * conversion;
  const lostEurosPerYear = lostClientsPerMonth * 12 * value;

  const q10 = answers[9];
  const hoursLabel =
    q10 === null || q10 === undefined ? "—" : HOURS_LABELS[q10];

  return {
    points: Math.round(points * 10) / 10,
    maxPoints,
    sealingRate,
    leakRate: Math.round(leakRate * 1000) / 10,
    lostContactsPerMonth: Math.round(lostContactsPerMonth * 10) / 10,
    lostClientsPerMonth: Math.round(lostClientsPerMonth * 10) / 10,
    lostEurosPerYear: Math.round(lostEurosPerYear),
    hoursLabel,
    remainingAnswers: maxPoints - answered,
  };
}

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
