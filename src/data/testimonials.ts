/**
 * Témoignages : structure contexte → friction résolue → résultat sobre → permission.
 * Pas de superlatifs. Métier précis. Sophie Bluel retirée.
 */
export const testimonials = [
  {
    id: 1,
    name: "Marion",
    fullName: "Marion D.",
    role: "Sophrologue",
    city: "Lyon",
    date: "2025",
    project: "Site vitrine + contact",
    image: "/image/yoga.jpg",
    text: "J’avais un site Wix que je n’osais plus envoyer : les tarifs n’étaient pas à jour et je ne savais pas le modifier moi-même. Karelle a repris mes textes avec moi en une heure, et le site est en ligne depuis. J’ai mis le lien sur ma carte, dans ma signature. Deux clientes m’ont dit « votre site m’a rassurée ». Je n’avais jamais entendu ça avant.",
    rating: 5,
  },
  {
    id: 2,
    name: "Camille",
    fullName: "Camille R.",
    role: "Consultante en bien-être",
    city: "France",
    date: "2025",
    project: "Site PULSE",
    image: "/image/pulse.jpg",
    text: "Mon ancien site était trop générique : je hésitais à l’envoyer après un appel. On a clarifié mon offre en une session, puis le site a suivi. Mes clientes comprennent ce que je propose dès l’arrivée, et la prise de rendez-vous se fait sans allers-retours.",
    rating: 5,
  },
  {
    id: 3,
    name: "Madeleine",
    fullName: "Madeleine",
    role: "Créatrice de parfum sur-mesure",
    city: "Londres",
    date: "2024",
    project: "Site Madeleine Fragrance",
    image: "/image/madeleine.png",
    text: "Il me fallait une vitrine à la hauteur de la marque. Le site raconte l’univers et explique le process. Les précommandes ont pu ouvrir dès la mise en ligne, sans bricolage de dernière minute.",
    rating: 5,
  },
] as const;
