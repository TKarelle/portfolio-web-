import { projects } from "./projects";

export type CaseStudy = {
  id: string;
  /** Prénom affiché */
  firstName: string;
  /** Métier précis */
  metier: string;
  city: string;
  /** Photo portrait cliente */
  photo: string;
  /** Capture / livrable */
  capture: string;
  /** (a) Situation avant */
  before: string;
  /** (c) Résultat sobre et vérifiable */
  result: string;
  /** (d) Citation */
  quote: string;
};

/**
 * 3 études de cas homepage / /projets.
 * Priorité PDF : psycho / naturo / sophro en premier.
 * Sophie Bluel retirée.
 */
export const featuredCaseStudies: CaseStudy[] = [
  {
    id: "marion-sophrologie",
    firstName: "Marion",
    metier: "Sophrologue",
    city: "Lyon",
    photo: "/image/yoga.jpg",
    capture: "/image/yoga.jpg",
    before:
      "Site Wix daté, tarifs obsolètes, réservations uniquement par téléphone et messages Instagram.",
    result:
      "Formulaire de réservation en ligne : 4 rendez-vous la première semaine.",
    quote:
      "J’avais un site que je n’osais plus envoyer. Depuis, j’ai remis le lien sur ma carte. Deux clientes m’ont dit que le site les avait rassurées.",
  },
  {
    id: "pulse",
    firstName: "Camille",
    metier: "Consultante en bien-être",
    city: "France",
    photo: "/image/pulse.jpg",
    capture: "/image/pulse.jpg",
    before:
      "Présence en ligne trop générique, difficile d’expliquer l’offre, prise de contact confuse.",
    result:
      "Parcours de réservation clair : les demandes arrivent déjà cadrées, sans allers-retours inutiles.",
    quote:
      "Mes clientes comprennent ce que je propose dès l’arrivée sur le site. Je n’hésite plus à envoyer le lien après un appel.",
  },
  {
    id: "madeleine-fragrance",
    firstName: "Madeleine",
    metier: "Créatrice de parfum sur-mesure",
    city: "Londres",
    photo: "/image/madeleine.png",
    capture: "/image/madeleine.png",
    before:
      "Marque sans vitrine digitale à la hauteur de l’univers ; précommandes difficiles à ouvrir proprement.",
    result: "Précommandes ouvertes dès la mise en ligne.",
    quote:
      "Le site raconte l’univers et explique le process. Les précommandes ont pu démarrer sans improvisation.",
  },
];

/** Compat landings métiers (hors Sophie Bluel) */
export const caseStudies = projects
  .filter((p) => p.id !== "sophie-bluel")
  .map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    image: p.image,
    context: p.description.split(".")[0] + ".",
    problem: getProblem(p.id),
    solution: getSolution(p.id),
    result: p.result,
    tags: p.tags,
    url: p.url,
  }));

function getProblem(id: string): string {
  const problems: Record<string, string> = {
    pulse:
      "Son activité manquait d’une présence en ligne à sa hauteur : trop générique, pas assez claire pour ses clientes.",
    "madeleine-fragrance":
      "Une marque de parfum sur-mesure sans vitrine digitale à la hauteur de son univers.",
    "coiffure-luna":
      "Un site difficile à trouver. Les rendez-vous passaient uniquement par téléphone.",
    "yoga-zen":
      "Planning peu clair en ligne : les inscrites hésitaient et passaient par Instagram.",
    "photographe-iris":
      "Portfolio éparpillé : les demandes de devis manquaient de cadre.",
  };
  return (
    problems[id] ??
    "Difficile à trouver en ligne, des clientes qui passent ailleurs."
  );
}

function getSolution(id: string): string {
  const solutions: Record<string, string> = {
    pulse:
      "Un one-page moderne : typo claire, parcours de réservation simple, loin du template bien-être générique.",
    "madeleine-fragrance":
      "Un site élégant pour raconter la marque, présenter le process et convertir en précommande.",
    "coiffure-luna":
      "Un site moderne, prise de rendez-vous, et plus facile à trouver près de chez elle.",
    "yoga-zen":
      "Planning lisible, ambiance apaisante, inscription en ligne simplifiée.",
    "photographe-iris":
      "Galerie filtrable, témoignages et formulaire de devis qualifiant.",
  };
  return (
    solutions[id] ??
    "Un site clair, livré vite, pensé pour être trouvé et joignable."
  );
}
