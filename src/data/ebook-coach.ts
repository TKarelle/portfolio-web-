/**
 * Lead magnet ebook coachs — preuves sans exposer les clients.
 * Objectif page : inscription (prénom + email). Citation IA en second plan.
 */

export const EBOOK_GATE_ID = "ebook-coach-avis";
export const EBOOK_STORAGE_KEY = `kopio-article-gate:${EBOOK_GATE_ID}`;

export const EBOOK_META = {
  /** Accroche H1 / promo desktop */
  headline: "Valoriser votre travail sans exposer vos clients",
  /** Libellé court (mobile promo, breadcrumbs) */
  title: "Ebook gratuit pour coachs",
  /** Title SERP */
  seoTitle: "Ebook coach : preuves sans exposer vos clients | Gratuit",
  eyebrow: "Cadeau gratuit · 50 premières places",
  subtitle:
    "Formulations éthiques, page « Preuves et éthique » et checklist d’anonymisation : tout ce qu’il faut pour rassurer vos prospects sans demander à vos clients de s’exposer.",
  seoDescription:
    "Ebook gratuit pour coachs : modèles de textes, page Preuves et éthique, checklist consentement. Gratuit pour les 50 premières préinscriptions. Prénom + email, rien d’autre.",
  duration: "20 secondes",
  bullets: [
    "Formulations prêtes à adapter",
    "Page Preuves et éthique",
    "Checklist anonymisation",
  ] as const,
  contents: [
    {
      title: "Formulations prêtes à adapter",
      body: "Deux modèles de messages : quand un client propose un témoignage, et quand vous proposez une version pour votre site. Sans pression, sans avis Google forcé.",
    },
    {
      title: "Structure d’une page « Preuves et éthique »",
      body: "L’ordre des blocs, les titres, ce qu’il faut écrire pour qu’un prospect comprenne comment vous travaillez sans lire une histoire individuelle.",
    },
    {
      title: "Checklist consentement et anonymisation",
      body: "Ce qu’il faut convenir par écrit, quels détails retirer, et comment tester la réidentification avant de publier.",
    },
    {
      title: "Sept preuves qui n’exposent personne",
      body: "Chiffres agrégés, thèmes, cas composites signalés, avis de pairs, mentions externes, cadre éthique, retours facultatifs.",
    },
  ] as const,
  introTitle: "Pourquoi cet ebook existe",
  introBody:
    "Demander un avis Google heurte souvent la relation d’accompagnement. Pourtant, sans preuve visible, un prospect hésite. Cet ebook pose une méthode pour montrer votre travail sans exposer vos clients.",
  path: "/ebook-preuves-coach",
  promoLabel: "Ebook gratuit · Coachs",
  promoCta: "Réserver ma place",
  ctaLabel: "Réserver ma place gratuite",
  trustLine:
    "Gratuit · Pas de carte bancaire · Pas de spam · 50 places en avant-première",
  relatedArticlePath: "/blog/obtenir-avis-clients-coach",
  relatedArticleLabel: "Lire l’article complet",
  relatedArticleTitle: "La méthode en détail, avant ou après l’ebook",
  relatedArticleBody:
    "L’ebook vous donne les modèles à coller. L’article explique le pourquoi : pourquoi un avis Google n’est jamais anonyme, comment distinguer avis, témoignage et preuve, le protocole en quatre étapes, et les sept preuves qui n’exposent personne. Utile si vous voulez comprendre le cadre (ICF, CNIL, consentement) avant d’adapter les formulations.",
} as const;

export const EBOOK_STEPS = [
  {
    n: "01",
    title: "Vous laissez votre prénom et votre email",
    body: "20 secondes. Aucune carte bancaire. Vous réservez l’une des 50 places gratuites.",
  },
  {
    n: "02",
    title: "Vous êtes prévenue dès la sortie",
    body: "L’ebook arrive dans votre boîte. Pas de série d’emails agressifs.",
  },
  {
    n: "03",
    title: "Vous adaptez sur votre site",
    body: "Formulations, page Preuves, checklist : vous publiez ce qui respecte votre cadre.",
  },
] as const;

export const EBOOK_PAINS = [
  {
    title: "Vous refusez d’exposer vos clients",
    body: "La confidentialité n’est pas un frein marketing. C’est le cœur de votre métier. Il manque juste un autre registre de preuves.",
  },
  {
    title: "Les conseils « avis Google » ne collent pas",
    body: "Un avis Google n’est jamais anonyme. Un prénom ne suffit pas toujours à protéger quelqu’un. Il faut une autre méthode.",
  },
  {
    title: "Vos prospects cherchent des repères",
    body: "Sans chiffre, sans cadre, sans page claire, ils ne concluent pas que vous êtes moins bonne. Ils concluent qu’ils ne savent pas.",
  },
  {
    title: "Vous n’avez pas le temps de tout inventer",
    body: "L’ebook rassemble formulations, structure de page et checklist. Vous adaptez, vous ne repartez pas de zéro.",
  },
] as const;

export const EBOOK_FAQS = [
  {
    question: "L’ebook est-il vraiment gratuit ?",
    answer:
      "Oui. Les 50 premières préinscriptions y accèdent gratuitement. Vous laissez uniquement votre prénom et votre email. Pas de carte bancaire.",
  },
  {
    question: "Quand vais-je le recevoir ?",
    answer:
      "Dès sa publication. Vous êtes prévenue à l’adresse indiquée. En vous préinscrivant maintenant, vous réservez l’une des 50 places d’avant-première.",
  },
  {
    question: "Pour qui est-il écrit ?",
    answer:
      "Pour les coachs (et proches métiers d’accompagnement) qui veulent rassurer leurs prospects sans demander à leurs clients de s’exposer publiquement.",
  },
  {
    question: "Est-ce un conseil juridique ?",
    answer:
      "Non. L’ebook propose une méthode éditoriale et des formulations à adapter. Chaque organisme (ICF, EMCC, etc.) a ses règles : vérifiez le vôtre avant de publier.",
  },
  {
    question: "Que se passe-t-il après les 50 places ?",
    answer:
      "Les places gratuites d’avant-première sont limitées à 50. Au-delà, les conditions pourront évoluer. La préinscription fixe votre place maintenant.",
  },
] as const;
