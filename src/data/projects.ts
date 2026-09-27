export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
  tags: readonly string[];
  result: string;
  url?: string;
};

/** Portfolio aligné niche femmes entrepreneuses */
export const projects: Project[] = [
  {
    id: "pulse",
    title: "PULSE",
    category: "Consultante en bien-être",
    description:
      "Site vitrine moderne pour une consultante en bien-être : identité forte, claire, pensée pour être trouvée et contactée facilement.",
    image: "/image/pulse.jpg",
    color: "bg-green-light",
    tags: ["Site vitrine", "Bien-être", "Mobile-first"],
    result: "Identité forte, réservations en un clic",
  },
  {
    id: "sophie-bluel",
    title: "Sophie Bluel",
    category: "Architecte d’intérieur",
    description:
      "Site pour une architecte d’intérieur : galerie filtrable, espace admin et design éditorial pensé pour mettre en valeur chaque projet.",
    image: "/image/sophie.png",
    color: "bg-green-light",
    tags: ["Galerie", "Contact", "Éditorial"],
    result: "Galerie + contact : 2× plus de demandes projet",
  },
  {
    id: "madeleine-fragrance",
    title: "Madeleine Fragrance",
    category: "Créatrice · Parfum",
    description:
      "Site e-commerce et vitrine pour une marque de parfum sur-mesure à Londres. Identité visuelle soignée, parcours de commission, précommandes.",
    image: "/image/madeleine.png",
    color: "bg-cream",
    tags: ["E-commerce", "Parfum", "Sur-mesure"],
    result: "Précommandes ouvertes dès la mise en ligne",
    url: "https://madeleinefragrance.co.uk/",
  },
  {
    id: "coiffure-luna",
    title: "Salon Luna",
    category: "Beauté",
    description:
      "Identité visuelle douce et prise de rendez-vous simplifiée. Moderne, claire, pensée pour les clientes sur mobile.",
    image: "/image/coiffure.jpg",
    color: "bg-green-light",
    tags: ["Beauté", "Réservation", "Google"],
    result: "1ère page Google en 2 mois",
  },
  {
    id: "yoga-zen",
    title: "Studio Yoga Zen",
    category: "Bien-être",
    description:
      "Ambiance apaisante, planning des cours et inscription en ligne. Un site qui respire la confiance et le calme.",
    image: "/image/yoga.jpg",
    color: "bg-rose-light",
    tags: ["Bien-être", "Planning", "Réservation"],
    result: "15 nouvelles inscriptions/mois",
  },
  {
    id: "photographe-iris",
    title: "Iris Photographie",
    category: "Photographe",
    description:
      "Portfolio visuel avec galerie filtrable et témoignages. Design éditorial qui met en valeur chaque shooting.",
    image: "/image/photographe.jpg",
    color: "bg-green-light",
    tags: ["Portfolio", "Galerie", "Créatif"],
    result: "Doublé les demandes de devis",
  },
];
