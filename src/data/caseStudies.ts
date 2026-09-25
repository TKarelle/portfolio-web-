import { projects } from "./projects";

const featuredIds = [
  "pulse",
  "sophie-bluel",
  "madeleine-fragrance",
] as const;

export const caseStudies = projects.map((p) => ({
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

export const featuredCaseStudies = featuredIds
  .map((id) => caseStudies.find((c) => c.id === id))
  .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

function getProblem(id: string): string {
  const problems: Record<string, string> = {
    pulse:
      "Son activité manquait d’une présence en ligne à sa hauteur : trop générique, trop « spa classique », pas assez claire pour ses clientes.",
    "sophie-bluel":
      "Un portfolio trop générique : les projets ne ressortaient pas, et les clients hésitaient à écrire.",
    "madeleine-fragrance":
      "Une marque de parfum sur-mesure sans vitrine digitale à la hauteur de son univers.",
    "boulangerie-martin":
      "Pas de site. Les clients ne trouvaient ni les horaires ni le menu.",
    "coiffure-luna":
      "Un vieux site, difficile à trouver. Les rendez-vous passaient uniquement par téléphone.",
    "plomberie-durand":
      "Uniquement le bouche-à-oreille. Rien de clair à montrer en cas d'urgence.",
  };
  return (
    problems[id] ??
    "Difficile à trouver en ligne, des clients qui passent ailleurs."
  );
}

function getSolution(id: string): string {
  const solutions: Record<string, string> = {
    pulse:
      "Un one-page moderne et audacieux : typo bold, accents vifs, parcours de réservation clair : loin du pastel bien-être classique.",
    "sophie-bluel":
      "Un site éditorial clair : galerie filtrable, projets mis en avant, formulaire simple pour demander un devis.",
    "madeleine-fragrance":
      "Un site élégant pour raconter la marque, présenter le process et convertir en précommande.",
    "boulangerie-martin":
      "Un site simple avec les produits, les horaires et un formulaire. En ligne en 10 jours.",
    "coiffure-luna":
      "Un site moderne, prise de rendez-vous, et plus facile à trouver près de chez elle.",
    "plomberie-durand":
      "Un site clair sur téléphone, zone d'intervention, avis, et un bouton pour appeler tout de suite.",
  };
  return (
    solutions[id] ??
    "Un site clair, livré vite, pensé pour être trouvé et joignable."
  );
}
