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

export type EngineVerdict = {
  engine: "Google" | "ChatGPT";
  /** 0 = mauvais, 1 = mitigé, 2 = bon */
  level: QuizAnswerLevel;
  status: string;
  summary: string;
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
  /** Réponse à « Que disent Google et ChatGPT de toi ? » */
  google: EngineVerdict;
  chatgpt: EngineVerdict;
  combinedHeadline: string;
};

export const QUIZ_META = {
  /** Accroche principale = H1 / SEO / barre promo desktop */
  headline: "Que disent Google et ChatGPT de toi ?",
  /** Libellé court (mobile promo, eyebrow produit). Charte : Test des 10 Secondes. */
  title: "Le Test des 10 Secondes",
  eyebrow: "Test gratuit · 2 min",
  subtitle:
    "Quand on tape ton nom sur Google, ou qu'on demande à ChatGPT qui tu es : que voit-on ? 10 points pour vérifier ce que ton site dit vraiment de toi.",
  duration: "2 minutes",
  bullets: [
    "Google + ChatGPT + ton site",
    "Rien à installer",
    "Aucun accès demandé",
  ],
  introTitle: "Ce que Google et ChatGPT montrent de toi",
  introBody:
    "Une future cliente tape ton nom sur Google, ou demande à ChatGPT une recommandation dans ton métier. Si ton site n'apparaît pas, ou s'il ne dit pas clairement qui tu es en 10 secondes, elle choisit quelqu'un d'autre. Tu ne le sauras jamais.",
  introClose:
    "Ce test regarde 10 signaux visibles : trouvabilité, clarté, preuves, contact. Tu obtiens un score, puis une estimation de ce que ça peut coûter si ton site ne te représente plus.",
  disclaimer:
    "Les pourcentages par point sont des hypothèses de calcul Kopio, présentées en fourchette. Le résultat est un ordre de grandeur issu de tes chiffres, pas une statistique du secteur. Le coût en heures vient de ta propre réponse et n'entre pas dans l'estimation en euros.",
  path: "/grille-etancheite",
  promoLabel: "Test gratuit · 2 min",
  promoCta: "Faire le test",
  ctaLabel: "Lancer mon test",
  trustLine: "Gratuit · Rien à installer · Aucun accès demandé",
} as const;

export const QUIZ_STEPS = [
  {
    n: "01",
    title: "Tu laisses ton prénom et ton email",
    body: "Directement dans le hero. Rien à installer, aucun accès à donner.",
  },
  {
    n: "02",
    title: "Tu vérifies ce que Google, ChatGPT et ton site disent",
    body: "Trouvabilité sous ton nom, clarté en 10 secondes, preuves, contact : des faits, pas des impressions.",
  },
  {
    n: "03",
    title: "Tu vois si ça te représente encore",
    body: "Score, puis estimation de ce que ça peut coûter si ton site ne te représente plus.",
  },
] as const;

export const QUIZ_SIGNALS = [
  {
    title: "Google ne montre pas ton site",
    body: "On tape ton nom : des profils tiers apparaissent avant toi. La recommandation s'arrête là.",
  },
  {
    title: "ChatGPT ne te cite pas",
    body: "On demande une coach ou thérapeute dans ta ville : ton nom n'existe pas dans la réponse.",
  },
  {
    title: "Ton site parle mal de toi en 10 secondes",
    body: "On ne comprend pas ce que tu fais, ni pour qui. La visiteuse repart.",
  },
  {
    title: "Preuves et prix absents",
    body: "Sans diplômes visibles ni offre claire, Google et les IA n'ont rien de solide à répéter.",
  },
] as const;

export const QUIZ_FAQS = [
  {
    question: "Ce test est-il vraiment gratuit ?",
    answer:
      "Oui. Tu lances le test sans carte bancaire. Je te demande seulement ton prénom et ton email pour débloquer les 10 points et te recontacter si tu le souhaites.",
  },
  {
    question: "Faut-il un accès à mon site ?",
    answer:
      "Non. Tu fais les tests toi-même, comme une visiteuse. Rien à installer, aucun mot de passe.",
  },
  {
    question: "C'est une note donnée par Google ?",
    answer:
      "Non. C'est un score Kopio fondé sur 10 points de contrôle factuels et tes propres chiffres. Personne, à part Google, ne connaît sa note interne.",
  },
  {
    question: "À qui s'adresse ce test ?",
    answer:
      "Aux professionnelles de l'accompagnement : coachs, thérapeutes, sophrologues, consultantes, assistantes virtuelles. Celles qui veulent savoir ce que Google et ChatGPT montrent d'elles quand on cherche leur nom.",
  },
  {
    question: "Combien de temps ça prend ?",
    answer:
      "Environ 2 minutes pour répondre, plus le temps de vérifier chaque point sur ton site (souvent 30 secondes par test).",
  },
  {
    question: "Que faire après le résultat ?",
    answer:
      "Tu gardes le diagnostic. Si tu veux que je corrige ce qui freine encore, les formules Kopio démarrent à 89 €/mois : hébergement et évolutions inclus.",
  },
] as const;

export const DEFAULT_FIGURES: QuizFigures = {
  contactsPerMonth: 8,
  clientsOutOf10: 4,
  avgClientValueYear: 360,
};

export const CONTROL_POINTS: QuizControlPoint[] = [
  {
    id: 1,
    title:
      "Quand on cherche ton nom sur Google, ton site apparaît-il parmi les premiers ?",
    tag: "Google",
    test: "Cherche « prénom nom métier ville » sur Google. Regarde la première page.",
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
    title:
      "Si on demande à ChatGPT qui tu es (ou une pro comme toi), te cite-t-il ?",
    tag: "ChatGPT",
    test: "Demande à ChatGPT : « Qui est [ton prénom nom], [métier] à [ville] ? » ou « Une bonne [métier] à [ville] ? ». Lis la réponse.",
    leakWeight: 0.18,
    affectsEuroEstimate: true,
    options: [
      "Mon nom n'apparaît pas, ou la réponse est vague / fausse",
      "On me cite sans mon site, ou avec des infos incomplètes",
      "On me cite correctement, avec mon site ou mon activité",
    ],
  },
  {
    id: 3,
    title: "Sur téléphone, le bouton de contact est-il visible sans défiler ?",
    tag: "Mobile",
    test: "Ouvre ton site sur ton téléphone, sans zoomer ni faire défiler.",
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
    title: "Tes qualifications sont-elles visibles en un clic ?",
    tag: "Légitimité",
    test: "Depuis l'accueil, compte les clics pour voir tes diplômes ou certifications.",
    leakWeight: 0.1,
    affectsEuroEstimate: true,
    options: [
      "Introuvables ou absentes",
      "Présentes mais sans contexte, ou à plus de 2 clics",
      "Visibles, brèves, reliées à ta méthode",
    ],
  },
  {
    id: 5,
    title: "Ton offre principale et son prix sont-ils visibles ?",
    tag: "Offre et prix",
    test: "Cherche le prix de ta séance ou de ton offre principale sur le site.",
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
    test: "Chronomètre le chemin depuis l'accueil jusqu'à l'envoi d'une demande.",
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
    title: "Annonces-tu un délai de réponse, et le tiens-tu ?",
    tag: "Délai de réponse",
    test: "Vérifie la page de contact : un délai est-il écrit ? Regarde tes 5 dernières réponses.",
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
    test: "Quand as-tu modifié ton site pour la dernière fois ? Relis l'accueil et la page tarifs.",
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
      "Ta fiche Google est-elle reliée à ton site, avec des avis récents ?",
    tag: "Google Maps et référencement local",
    test: "Cherche ton nom dans Google Maps. Vérifie le lien vers ton site, la date du dernier avis et tes horaires.",
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
    title: "Combien d'heures et d'anxiété ce site te coûte-t-il chaque mois ?",
    tag: "Charge mentale et coût caché",
    test: "Additionne le temps passé le mois dernier (modifications, mises à jour, bugs, hésitations) et note combien de fois tu y as repensé avec un pincement.",
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

const GOOGLE_VERDICTS: Record<
  QuizAnswerLevel,
  Pick<EngineVerdict, "status" | "summary">
> = {
  0: {
    status: "Absent",
    summary:
      "Quand on tape ton nom, Google ne montre pas ton site. Les profils tiers (ou rien) parlent à ta place.",
  },
  1: {
    status: "Peu visible",
    summary:
      "Ton site apparaît, mais trop bas ou derrière d'autres pages. Une prospecte pressée ne te trouve pas clairement.",
  },
  2: {
    status: "Visible",
    summary:
      "Ton site apparaît parmi les premiers résultats sous ton nom. Google te montre correctement.",
  },
};

const CHATGPT_VERDICTS: Record<
  QuizAnswerLevel,
  Pick<EngineVerdict, "status" | "summary">
> = {
  0: {
    status: "Absent",
    summary:
      "ChatGPT ne te cite pas, ou répond de façon vague / fausse. Pour une IA, tu n'existes presque pas encore.",
  },
  1: {
    status: "Incomplet",
    summary:
      "ChatGPT peut te mentionner, mais sans ton site ou avec des infos partielles. La recommandation reste fragile.",
  },
  2: {
    status: "Cité",
    summary:
      "ChatGPT te cite correctement, avec ton activité ou ton site. L'IA a quelque chose de solide à répéter.",
  },
};

function combinedHeadlineFrom(
  googleLevel: QuizAnswerLevel,
  chatgptLevel: QuizAnswerLevel,
): string {
  const sum = googleLevel + chatgptLevel;
  if (sum >= 4) {
    return "Google et ChatGPT te montrent clairement.";
  }
  if (googleLevel === 2 && chatgptLevel < 2) {
    return "Google te trouve. ChatGPT, pas encore assez.";
  }
  if (chatgptLevel === 2 && googleLevel < 2) {
    return "ChatGPT te cite. Google, pas encore assez.";
  }
  if (sum >= 2) {
    return "Google et ChatGPT te montrent encore mal.";
  }
  return "Ni Google ni ChatGPT ne te représentent aujourd'hui.";
}

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
    q10 === null || q10 === undefined ? "…" : HOURS_LABELS[q10];

  const googleLevel = (answers[0] ?? 0) as QuizAnswerLevel;
  const chatgptLevel = (answers[1] ?? 0) as QuizAnswerLevel;
  const googleV = GOOGLE_VERDICTS[googleLevel];
  const chatgptV = CHATGPT_VERDICTS[chatgptLevel];

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
    google: {
      engine: "Google",
      level: googleLevel,
      status: googleV.status,
      summary: googleV.summary,
    },
    chatgpt: {
      engine: "ChatGPT",
      level: chatgptLevel,
      status: chatgptV.status,
      summary: chatgptV.summary,
    },
    combinedHeadline: combinedHeadlineFrom(googleLevel, chatgptLevel),
  };
}

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
