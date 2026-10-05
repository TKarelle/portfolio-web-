export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  /** Alt descriptif : livrable + métier / marque */
  imageAlt: string;
  color: string;
  tags: readonly string[];
  result: string;
  url?: string;
};

/** Portfolio (Sophie Bluel retirée des mises en avant) */
export const projects: Project[] = [
  {
    id: "pulse",
    title: "PULSE",
    category: "Consultante en bien-être",
    description:
      "Site vitrine moderne pour une consultante en bien-être : identité forte, claire, pensée pour être trouvée et contactée facilement.",
    image: "/image/pulse.jpg",
    imageAlt:
      "Site web PULSE livré pour une consultante en bien-être : vitrine claire et réservation",
    color: "bg-green-light",
    tags: ["Site vitrine", "Bien-être", "Mobile-first"],
    result: "Identité forte, réservations en un clic",
  },
  {
    id: "madeleine-fragrance",
    title: "Madeleine Fragrance",
    category: "Créatrice · Parfum",
    description:
      "Site e-commerce et vitrine pour une marque de parfum sur-mesure à Londres. Identité visuelle soignée, parcours de commission, précommandes.",
    image: "/image/madeleine.jpg",
    imageAlt:
      "Site Madeleine Fragrance : vitrine e-commerce pour créatrice de parfum sur-mesure à Londres",
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
    imageAlt:
      "Site du Salon Luna : vitrine beauté avec prise de rendez-vous en ligne",
    color: "bg-green-light",
    tags: ["Beauté", "Réservation", "Google"],
    result: "Réservation en ligne à la place du téléphone",
  },
  {
    id: "yoga-zen",
    title: "Studio Yoga Zen",
    category: "Bien-être",
    description:
      "Ambiance apaisante, planning des cours et inscription en ligne. Un site qui respire la confiance et le calme.",
    image: "/image/yoga.jpg",
    imageAlt:
      "Site Studio Yoga Zen : planning des cours et inscription en ligne",
    color: "bg-rose-light",
    tags: ["Bien-être", "Planning", "Réservation"],
    result: "Inscriptions en ligne simplifiées",
  },
  {
    id: "photographe-iris",
    title: "Iris Photographie",
    category: "Photographe",
    description:
      "Portfolio visuel avec galerie filtrable et témoignages. Design éditorial qui met en valeur chaque shooting.",
    image: "/image/photographe.jpg",
    imageAlt:
      "Portfolio web Iris Photographie : galerie et demandes de devis cadrées",
    color: "bg-green-light",
    tags: ["Portfolio", "Galerie", "Créatif"],
    result: "Demandes de devis mieux cadrées",
  },
];
