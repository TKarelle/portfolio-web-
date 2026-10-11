import { HERO_MOCKUPS } from "@/data/hero-mockups";
import { FOUNDER_PHOTO, FOUNDER_PHOTO_ALT } from "@/data/site";

/** Étapes du process homepage / ContactSection. */
export const process = [
  {
    step: "01",
    title: "On fait connaissance",
    paragraphs: [
      "15 minutes pour parler de vous, de votre activité et de ce que vous voulez faire évoluer.",
      "Je vous présente ensuite l’accompagnement le plus adapté et son tarif. Sans engagement.",
    ],
  },
  {
    step: "02",
    title: "On pose les bases",
    paragraphs: [
      "Vous choisissez votre accompagnement. Je transforme nos échanges en un cahier des charges clair.",
      "Pages, contenus, fonctionnalités, planning : tout est défini avant de commencer.",
    ],
  },
  {
    step: "03",
    title: "Votre site prend forme",
    paragraphs: [
      "Je conçois votre site et vous suivez son évolution.",
      "Vous découvrez les différentes étapes, donnez votre avis et validez avant la mise en ligne.",
    ],
  },
  {
    step: "04",
    title: "Vous êtes prête à être trouvée",
    paragraphs: [
      "Votre site est en ligne, optimisé et prêt à accueillir vos visiteurs.",
      "Et après ? Vous ne restez pas seule avec votre site : selon votre accompagnement, je continue à travailler sur sa visibilité et son évolution.",
    ],
  },
] as const;

/**
 * Pages service hub (création, SEO, GEO, SAGEO, refonte).
 * Charte : Karelle = je / signature ; Kopio = marque SERP.
 * Lexique lectrice ; pas de « conversion » / « convertir ».
 * SAGEO : réponse courte en tête (tldr), Mot de Karelle, maillage article.
 */

export type ServiceSection = {
  h2: string;
  body: string;
  /** `photoScroll` = photo gauche + texte scroll-bold (accueil HowIWork) */
  layout?: "prose" | "photoScroll";
  image?: string;
  imageAlt?: string;
};

export type ServicePillar = {
  title: string;
  body: string;
  /** Surligne / label (carrousel texte-first) */
  label?: string;
  /** Visuel secondaire (sous le texte) */
  image?: string;
  imageAlt?: string;
  /** CTA sous le pilier (ex. discuter / audit / quiz) */
  cta?: { href: string; label: string };
};

export type ServiceStage = {
  step: string;
  title: string;
  body?: string;
  /** Visuel secondaire (carrousel stages) */
  image?: string;
  imageAlt?: string;
};

export type ServiceRelatedLink = {
  href: string;
  label: string;
  description?: string;
};

/** Icônes FeaturePoints (même set que l’accueil / Constat). */
export type ServiceFeatureIcon =
  | "search"
  | "badge"
  | "spark"
  | "path"
  | "check"
  | "sliders"
  | "home"
  | "tag";

export type ServiceFeatureBand = {
  /** Titre de bande (accent italic via titleHighlight) */
  title: string;
  titleHighlight?: string | readonly string[];
  /** Coupure de ligne après ce fragment (ex. « apporter. ») */
  titleBreakAfter?: string;
  eyebrow?: string;
  /** Texte sous le titre (porte d’entrée, etc.) */
  lede?: string;
  /** Masque titre/eyebrow/lede (LandingHero les porte déjà) */
  omitHeading?: boolean;
  items: readonly {
    id: string;
    title: string;
    text: string;
    icon: ServiceFeatureIcon;
  }[];
  cta?: {
    href: string;
    label: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
};

export type ServicePageData = {
  slug: string;
  /** Libellé court (breadcrumb, footer) */
  navLabel: string;
  /** Title SERP absolu (souvent « … | Kopio ») */
  title: string;
  metaDescription: string;
  h1: string;
  h1Highlight?: string;
  /** Eyebrow LandingHero */
  eyebrow?: string;
  /** Accroche hero */
  intro: string;
  /**
   * Réponse directe extractible (HeroFacts) — 0–150 mots, sans label TL;DR.
   * Affirmation claire dès le haut de page (approche adaptée à chaque étape).
   */
  tldr: string;
  image: string;
  imageAlt: string;
  /** Prose d’ouverture sous le hero */
  lead?: string;
  /** H2 optionnel au-dessus du lead */
  leadTitle?: string;
  leadTitleHighlight?: string | readonly string[];
  /** Coupure après ce fragment dans leadTitle */
  leadTitleBreakAfter?: string;
  /** Sous-points éditoriaux (titre gras + corps) — grille ou carrousel texte-first */
  pillars?: {
    h2?: string;
    h2Highlight?: string | readonly string[];
    /** Défaut : grille. `carousel` = cards texte-first (accueil). */
    layout?: "grid" | "carousel";
    items: ServicePillar[];
  };
  /**
   * Bande « Soyez… » — même composant que l’accueil (FeaturePoints).
   */
  featureBand?: ServiceFeatureBand;
  sections: ServiceSection[];
  /** Pipeline SAGEO 01 / 02 / 03 — steps (grille) ou carrousel texte-first */
  stages?: {
    h2: string;
    h2Highlight?: string | readonly string[];
    intro?: string;
    layout?: "steps" | "carousel";
    items: ServiceStage[];
    outro?: string;
  };
  /** Citation éditoriale réutilisable (composant MotDeKarelle) */
  motDeKarelle?: string;
  relatedLinks?: ServiceRelatedLink[];
  faqs?: { question: string; answer: string }[];
  factChips?: string[];
  /** Affiche QuizLeadMagnet (défaut : oui si emotionalHero) */
  quizSection?: boolean;
  /** CTA final (sinon défaut FutureVitrineCta) */
  cta?: {
    title: string;
    titleHighlight?: string;
    lead?: string;
    closing?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  /** Ordre des blocs (défaut : pillars → sections → stages) */
  contentOrder?: (
    | "pillars"
    | "sections"
    | "stages"
    | "featureBand"
    | "compareTable"
  )[];
  /** Tableau comparatif extractible (ex. SEO vs GEO vs SAGEO) */
  compareTable?: {
    h2: string;
    h2Highlight?: string | readonly string[];
    columns: readonly string[];
    rows: readonly { criterion: string; cells: readonly string[] }[];
  };
  /** Schema DefinedTerm + TechArticle (concept propriétaire) */
  definedTerm?: {
    name: string;
    description: string;
  };
  /**
   * Hero émotionnel type accueil (création) : phrase percutante + marquee maquettes.
   * Remplace LandingHero quand présent.
   */
  emotionalHero?: {
    /** H2 sous le H1 */
    lede: string;
    stack?: readonly string[];
    primaryCta: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
    /** Maquettes défilantes (création uniquement). Absentes = SEO/GEO/SAGEO. */
    mockups?: readonly { src: string; alt: string }[];
  };
};

export function servicePath(slug: string): string {
  return `/${slug}`;
}

export const servicePages: ServicePageData[] = [
  {
    slug: "creation-de-site-web",
    navLabel: "Création de site web",
    title: "Création de site web professionnel | Kopio",
    metaDescription:
      "Création de sites web sur mesure pour entrepreneuses, indépendantes et entreprises : design, SEO, rapidité et visibilité sur Google et les IA.",
    h1: "Votre expertise mérite d’être remarquée",
    h1Highlight: "remarquée",
    intro:
      "Un site qui attire le regard. Révèle votre singularité. Et donne envie de vous choisir.",
    tldr:
      "Je conçois un site autour de votre activité : design personnalisé, jusqu’à cinq pages, bases SEO, mobile, hébergement et suivi selon la formule. Vous gardez le message. Je porte la technique.",
    image: "/image/mockupsophie.png",
    imageAlt: "Exemple de site web professionnel créé pour une coach",
    emotionalHero: {
      lede: "Un site qui attire le regard. Révèle votre singularité. Et donne envie de vous choisir.",
      primaryCta: { href: "/contact", label: "Créer mon site" },
      secondaryCta: { href: "/projets", label: "Découvrir mes réalisations" },
      mockups: HERO_MOCKUPS,
    },
    featureBand: {
      title: "Vous avez quelque chose à apporter. Faites-le voir",
      titleHighlight: ["apporter", "voir"],
      titleBreakAfter: "apporter.",
      items: [
        {
          id: "trouvee",
          title: "Soyez trouvée.",
          text: "La bonne personne, au bon endroit, au bon moment. Votre site pose les bases de votre visibilité sur Google.",
          icon: "search",
        },
        {
          id: "reconnue",
          title: "Soyez reconnue.",
          text: "Votre valeur mérite mieux qu’une simple présentation. Approche, services et expérience pour comprendre ce qui vous distingue.",
          icon: "badge",
        },
        {
          id: "unique",
          title: "Soyez unique.",
          text: "Un site qui ne pourrait appartenir qu’à vous. Design, mots et ambiance traduisent votre univers.",
          icon: "spark",
        },
        {
          id: "choisie",
          title: "Soyez choisie.",
          text: "La confiance commence avant le premier échange. Un message clair et une prochaine étape évidente.",
          icon: "path",
        },
      ],
      cta: {
        href: "/contact",
        label: "Créer mon site",
      },
    },
    contentOrder: ["featureBand", "pillars", "sections"],
    pillars: {
      h2: "Beau à regarder. Simple à utiliser. Prêt à évoluer",
      h2Highlight: ["Beau", "Simple", "Prêt"],
      layout: "carousel",
      items: [
        {
          label: "Design",
          title: "Design personnalisé",
          body: "Un univers visuel qui vous ressemble, jusque dans les détails.",
          image: "/image/card-cover/personalize-design.jpeg",
          imageAlt:
            "Charte visuelle étalée : maquettes de pages Accueil, Article et Contact, nuancier beige, anthracite et bordeaux, cartes typographiques et monogramme de marque",
        },
        {
          label: "Pages",
          title: "Jusqu’à cinq pages",
          body: "L’essentiel pour présenter votre activité sans vous disperser.",
          image: "/image/card-cover/five-pages.jpeg",
          imageAlt:
            "Plusieurs maquettes de pages web flottantes en perspective, avec titres, blocs de texte et zones image pour illustrer une structure claire",
        },
        {
          label: "SEO",
          title: "Bases SEO intégrées",
          body: "Une structure pensée pour Google dès la mise en ligne.",
          image: "/image/card-cover/seo.jpeg",
          imageAlt:
            "Résultats Google pour la recherche « coach professionnelle Toulouse », avec un site de coach en première position et son extrait de page",
        },
        {
          label: "Mobile",
          title: "Adapté au mobile",
          body: "Une expérience fluide sur tous les écrans.",
          image: "/image/card-cover/every-screen.jpeg",
          imageAlt:
            "Le même site affiché sur ordinateur, tablette et smartphone, pour montrer un design adaptatif sur tous les écrans",
        },
        {
          label: "Suivi",
          title: "Hébergement et suivi",
          body: "Selon la formule choisie, votre site reste accompagné après la mise en ligne.",
          image: "/image/card-cover/follow.jpeg",
          imageAlt:
            "Calendrier avec cases cochées, pile de cartes et ruban bordeaux, évoquant un suivi régulier après la mise en ligne",
        },
      ],
    },
    sections: [
      {
        h2: "Création, SEO et IA : la même base",
        layout: "photoScroll",
        image: FOUNDER_PHOTO,
        imageAlt: FOUNDER_PHOTO_ALT,
        body: "Un beau site qui ne se trouve pas ne travaille pas pour vous. Dès la création, je pose les entités clés dans les titres et la structure, une réponse claire en tête de page, et un corps assez précis pour être cité.\n\nLe SEO vous fait trouver. Une page claire aide aussi les moteurs génératifs à vous retenir. La méthode détaillée est sur la page SAGEO.",
      },
    ],
    cta: {
      title: "Votre prochain chapitre commence en ligne",
      titleHighlight: "en ligne",
      lead: "Vous avez construit votre expertise. Donnez-lui un site à sa mesure.",
      closing: "",
      primaryLabel: "Créer mon site",
      primaryHref: "/contact",
      secondaryLabel: "Voir les formules",
      secondaryHref: "/tarifs",
    },
    faqs: [
      {
        question: "Combien de temps pour créer mon site ?",
        answer:
          "En pratique, une mise en ligne typique tient en 21 jours si les textes et photos arrivent à temps. Nous validons les étapes avant publication.",
      },
      {
        question: "Est-ce que je dois tout gérer seule après ?",
        answer:
          "Non. Les mises à jour passent par email. Vous restez concentrée sur votre activité ; je fais évoluer le site.",
      },
    ],
  },
  {
    slug: "seo",
    navLabel: "SEO",
    title: "SEO pour site web : être visible sur Google | Kopio",
    metaDescription:
      "Optimisez la visibilité de votre site sur Google : audit SEO, structure, contenu, balises, données structurées et stratégie de mots-clés.",
    h1: "Soyez là où vos clients vous cherchent",
    h1Highlight: "clients",
    intro:
      "Faites de Google une nouvelle porte d’entrée vers votre activité.",
    tldr:
      "Le référencement naturel rend votre site présent sur Google lorsque des personnes cherchent votre expertise. Je travaille les recherches pertinentes, la structure, les contenus, les titres et la technique pour que les bonnes personnes découvrent votre approche et puissent vous écrire.",
    image: "/image/blog-covers/blog-seo.jpg",
    imageAlt: "Référencement Google pour un site d’indépendante",
    emotionalHero: {
      lede: "Faites de Google une nouvelle porte d’entrée vers votre activité.",
      primaryCta: { href: "/contact", label: "Développer ma visibilité" },
    },
    featureBand: {
      eyebrow: "SEO",
      title: "Le référencement naturel",
      titleHighlight: "naturel",
      items: [
        {
          id: "trouvee",
          title: "Soyez trouvée.",
          text: "Apparaissez sur les recherches qui comptent pour votre activité.",
          icon: "search",
        },
        {
          id: "pertinente",
          title: "Soyez pertinente.",
          text: "Répondez aux besoins de vos futurs clients avec des pages claires et utiles.",
          icon: "badge",
        },
        {
          id: "contactee",
          title: "Soyez contactée.",
          text: "Facilitez le passage de la recherche au premier échange.",
          icon: "path",
        },
      ],
      cta: {
        href: "/contact",
        label: "Développer ma visibilité",
      },
    },
    contentOrder: ["featureBand", "pillars", "sections", "stages"],
    lead:
      "Vos clients cherchent des réponses, explorent des solutions et découvrent des professionnels. Votre site peut faire partie de ce chemin.\n\nLe référencement naturel place votre activité là où ces recherches ont lieu. Des personnes qui ne vous connaissent pas encore peuvent découvrir votre approche, comprendre ce que vous proposez et, si cela leur correspond, vous contacter.",
    pillars: {
      h2: "Une visibilité qui sert votre activité",
      h2Highlight: "sert",
      layout: "carousel",
      items: [
        {
          label: "Découverte",
          title: "Être découverte au-delà de votre réseau",
          body: "Votre visibilité ne dépend plus uniquement des personnes qui vous connaissent déjà ou des publications que vous partagez. Votre site peut aussi vous faire découvrir à travers les recherches liées à votre expertise.",
          image: "/image/card-cover/decouvert.jpeg",
          imageAlt:
            "Schéma : recherche « coach professionnelle » reliée à une page « Accompagnement professionnel », puis flèches qui rayonnent vers plusieurs points de visibilité",
        },
        {
          label: "Clarté",
          title: "Faire comprendre la valeur de votre accompagnement",
          body: "Une visite ne suffit pas. Votre site doit aider vos futurs clients à comprendre à qui vous vous adressez, ce que vous proposez et ce qui distingue votre approche.",
          image: "/image/card-cover/clarte.jpeg",
          imageAlt:
            "Parcours de page web détaillé : accroche, expertise, offres, témoignage et formulaire de contact, avec flèches indiquant le chemin de lecture",
        },
        {
          label: "Contact",
          title: "Créer des occasions de contact",
          body: "Lorsqu’une personne trouve une réponse à ses questions et reconnaît son besoin dans votre accompagnement, elle peut avancer vers une prise de contact. Votre site devient alors un point d’appui pour développer votre activité.",
          image: "/image/card-cover/contact.jpeg",
          imageAlt:
            "Section « Un échange » avec formulaire nom, email et projet, et bouton « Prendre contact » mis en avant",
        },
      ],
    },
    sections: [
      {
        h2: "Des fondations pour être trouvée",
        layout: "photoScroll",
        image: FOUNDER_PHOTO,
        imageAlt: FOUNDER_PHOTO_ALT,
        body: "Je travaille les recherches, la structure, les contenus et la technique qui aident Google à comprendre votre site.\n\nL’objectif : que les bonnes personnes découvrent votre expertise et puissent vous écrire.",
      },
    ],
    stages: {
      h2: "Le SEO est la première étape",
      intro: "La visibilité suit trois étapes :",
      items: [
        {
          step: "01",
          title: "Être trouvée",
          body: "sur Google.",
        },
        {
          step: "02",
          title: "Être retenue",
          body: "par les systèmes qui sélectionnent les contenus pertinents.",
        },
        {
          step: "03",
          title: "Être citée",
          body: "dans les réponses générées par les intelligences artificielles.",
        },
      ],
      outro:
        "Le SEO pose les fondations. Le [GEO](/geo) et la [méthode SAGEO](/sageo) prolongent ce travail pour le référencement IA.",
    },
    motDeKarelle:
      "Pour être citée par une IA, il faut d’abord être trouvée. Le SEO pose cette première étape : parler le langage de celles et ceux qui vous cherchent, avec une page claire dès les premières lignes.",
    cta: {
      title: "Votre expertise mérite d’être découverte",
      titleHighlight: "découverte",
      lead:
        "Faisons le point sur votre site et sur les possibilités de visibilité adaptées à votre activité.",
      closing: "",
      primaryLabel: "Développer ma visibilité",
      primaryHref: "/contact",
    },
    faqs: [
      {
        question: "Est-ce que le SEO peut vraiment m’aider à trouver des clients ?",
        answer:
          "Le SEO aide votre site à être découvert par des personnes qui recherchent les services ou les réponses que vous proposez. Son efficacité dépend notamment de la demande, de la concurrence, de votre positionnement et de la capacité de votre site à transformer les visites en prises de contact.\n\nL’objectif : développer un canal de visibilité complémentaire au bouche-à-oreille et aux réseaux sociaux.",
      },
      {
        question: "Combien de temps faut-il pour voir les premiers résultats ?",
        answer:
          "Le référencement naturel se construit progressivement. Les premiers changements de visibilité peuvent apparaître en quelques semaines, tandis qu’une progression significative demande souvent plusieurs mois. Le délai dépend de votre secteur, de votre site et de la concurrence. Aucune position sur Google ne peut être garantie.",
      },
      {
        question: "Mon activité est-elle trop petite pour investir dans le SEO ?",
        answer:
          "Pas nécessairement. Une activité indépendante peut bénéficier du référencement naturel dès lors que ses clients potentiels effectuent des recherches pertinentes. L’enjeu n’est pas de rivaliser avec les grandes entreprises sur tous les mots-clés, mais d’identifier les recherches adaptées à votre spécialité, à vos offres et à votre zone géographique si elle est pertinente.",
      },
      {
        question: "Quelle différence entre le SEO et la publicité Google ?",
        answer:
          "La publicité Google achète une visibilité immédiate dans les emplacements publicitaires. Le SEO vise à développer votre présence dans les résultats naturels. La publicité dépend du budget investi, tandis que le référencement naturel demande du temps et un travail continu pour construire une visibilité susceptible de durer. Ces deux leviers peuvent être complémentaires.",
      },
      {
        question:
          "Dois-je publier des articles de blog pour être bien référencée ?",
        answer:
          "Pas nécessairement. Un blog peut renforcer votre visibilité en répondant aux questions de vos futurs clients, à condition que les sujets choisis soient réellement pertinents. Avant de multiplier les publications, je privilégie des pages de services claires, structurées et alignées sur les recherches liées à votre activité.",
      },
      {
        question:
          "Le SEO aide-t-il aussi à être visible dans ChatGPT et les autres IA ?",
        answer:
          "Le SEO constitue une base importante : votre site doit être accessible et son contenu compréhensible. Une bonne position sur Google ne garantit pas une citation dans les réponses d’une intelligence artificielle.\n\nChez Kopio, le GEO et la méthode SAGEO (SEO + GEO + AEO) prolongent ce travail pour le référencement IA. Voir la page SAGEO et l’article dédié.",
      },
      {
        question: "Comment mesurer les résultats du SEO ?",
        answer:
          "La visibilité se mesure notamment à travers les impressions dans les résultats de recherche, les clics vers votre site, les requêtes grâce auxquelles vous êtes découverte et les demandes de contact générées. Je privilégie des indicateurs qui éclairent votre développement, au-delà du simple volume de visites.",
      },
    ],
  },
  {
    slug: "geo",
    navLabel: "GEO / IA",
    title: "GEO : être cité par les IA | Kopio",
    metaDescription:
      "GEO : optimisez votre site pour être trouvé, retenu et cité par ChatGPT, Perplexity, Copilot et les Aperçus IA Google.",
    h1: "Votre expertise mérite d’être citée",
    h1Highlight: "citée",
    intro:
      "Donnez aux intelligences artificielles des contenus qu’elles peuvent comprendre, utiliser et citer.",
    tldr:
      "La GEO (Generative Engine Optimization) améliore les chances que vos contenus soient compris, sélectionnés et cités par les assistants et moteurs qui génèrent des réponses avec l’IA. Elle prolonge le SEO : d’abord être trouvée, puis retenue, puis citée.",
    image: "/image/blog-covers/blog-seo-geo-sageo.jpeg",
    imageAlt: "Visibilité d’un site dans les réponses d’IA génératives",
    emotionalHero: {
      lede:
        "Donnez aux intelligences artificielles des contenus qu’elles peuvent comprendre, utiliser et citer.",
      primaryCta: {
        href: "/contact",
        label: "Développer ma visibilité dans les IA",
      },
    },
    featureBand: {
      eyebrow: "GEO",
      title: "La visibilité dans les réponses des IA",
      titleHighlight: "IA",
      items: [
        {
          id: "comprise",
          title: "Soyez comprise.",
          text: "Présentez votre expertise avec des réponses précises et accessibles.",
          icon: "spark",
        },
        {
          id: "pertinente",
          title: "Soyez pertinente.",
          text: "Apportez des informations utiles aux questions de vos futurs clients.",
          icon: "badge",
        },
        {
          id: "citee",
          title: "Soyez citée.",
          text: "Renforcez les chances que vos contenus soient retenus comme sources dans les réponses générées par les IA.",
          icon: "check",
        },
      ],
      cta: {
        href: "/contact",
        label: "Développer ma visibilité dans les IA",
      },
    },
    contentOrder: ["featureBand", "pillars", "sections", "stages"],
    lead:
      "Les habitudes changent. Aujourd’hui, un client peut demander à ChatGPT d’expliquer une difficulté, comparer différentes approches ou trouver des pistes pour avancer. Il peut découvrir des idées, des professionnels et des sources au fil de sa conversation.\n\nPour votre activité, une nouvelle question se pose : lorsque l’IA aborde un sujet sur lequel vous êtes experte, votre contenu peut-il contribuer à sa réponse ?",
    pillars: {
      h2: "Ne pas seulement être trouvée. Devenir une source pertinente",
      h2Highlight: "source pertinente",
      layout: "carousel",
      items: [
        {
          label: "Clarté",
          title: "Des réponses claires",
          body: "Vos pages répondent directement aux questions auxquelles votre expertise peut apporter un éclairage.",
          image: "/image/card-cover/clarte-geo.jpeg",
          imageAlt:
            "Dessin au trait d’une personne pensive, un point d’interrogation au-dessus de la tête, illustrant une question claire à laquelle le contenu répond",
        },
        {
          label: "Valeur",
          title: "Des idées qui ont de la valeur",
          body: "Votre contenu apporte une explication, une analyse ou un point de vue utile, plutôt que de reformuler ce qui existe déjà.",
          image: "/image/card-cover/valeur.jpeg",
          imageAlt:
            "Trois cartes côte à côte : au centre, une page structurée avec grille et texte ; de chaque côté, des cartes vides, pour contraster un contenu riche et utile",
        },
        {
          label: "Expertise",
          title: "Une expertise identifiable",
          body: "Votre spécialité, vos concepts et vos propos sont présentés de façon cohérente, afin que le sujet de votre contenu soit facile à comprendre.",
          image: "/image/card-cover/expertise.jpeg",
          imageAlt:
            "Trois smartphones affichant graphiques, étapes numérotées et indicateur clé, pour représenter une expertise présentée de façon claire et mesurable",
        },
        {
          label: "Preuves",
          title: "Des informations vérifiables",
          body: "Les faits, les sources et les exemples sont présentés avec précision, sans affirmations vagues ni promesses invérifiables.",
          image: "/image/card-cover/preuve.jpeg",
          imageAlt:
            "Écran d’ordinateur montrant un article avec citations numérotées, reliées à quatre cartes sources : article, étude, source officielle et exemple documenté",
        },
      ],
    },
    sections: [
      {
        h2: "Comment préparer votre site à la recherche par IA ?",
        layout: "photoScroll",
        image: FOUNDER_PHOTO,
        imageAlt: FOUNDER_PHOTO_ALT,
        body: "Je travaille la structure des pages, la clarté des réponses, la cohérence des informations et les éléments techniques qui facilitent leur exploration.\n\nL’objectif : rendre votre expertise plus facile à comprendre pour les systèmes qui citent des sources, tout en restant utile à vos lecteurs. Une bonne position sur Google ne garantit pas une citation dans ChatGPT ou une autre IA.",
      },
    ],
    stages: {
      h2: "Le GEO prolonge le SEO",
      intro: "Chez Kopio, cette complémentarité se traduit en trois étapes :",
      items: [
        {
          step: "01",
          title: "Être trouvée",
          body: "Le SEO développe votre présence dans les résultats de recherche.",
        },
        {
          step: "02",
          title: "Être retenue",
          body: "Le contenu est structuré pour rendre votre expertise compréhensible et pertinente.",
        },
        {
          step: "03",
          title: "Être citée",
          body: "Le GEO vise à renforcer les possibilités que vos contenus soient sélectionnés comme sources dans les réponses générées par les IA.",
        },
      ],
      outro:
        "La [méthode SAGEO](/sageo) organise ce travail : SEO, GEO et AEO pour le référencement IA, du Google classique à la citation.",
    },
    motDeKarelle:
      "Votre expertise ne se résume pas à une liste de mots-clés. Elle repose sur vos connaissances, votre expérience et votre capacité à apporter un éclairage utile. La GEO rend cette clarté lisible pour les systèmes qui citent des sources.",
    cta: {
      title: "Votre expertise mérite d’être citée",
      titleHighlight: "citée",
      lead:
        "Faisons le point sur votre site et sur les possibilités de développer sa visibilité dans les réponses générées par les IA.",
      closing: "",
      primaryLabel: "Développer ma visibilité dans les IA",
      primaryHref: "/contact",
    },
    faqs: [
      {
        question:
          "Comment faire pour que ChatGPT recommande mon activité ?",
        answer:
          "ChatGPT ne dispose pas d’un annuaire exhaustif des professionnels et ne recommande pas systématiquement les sites les mieux référencés sur Google. Je travaille les fondations qui peuvent favoriser la découverte et la compréhension de votre expertise : des contenus utiles, des informations cohérentes, un site accessible et des sources clairement identifiées. Cela augmente les possibilités d’être découverte, sans garantir une recommandation.",
      },
      {
        question: "Quelle est la différence entre le SEO et le GEO ?",
        answer:
          "Le SEO vise à améliorer la visibilité de votre site dans les résultats naturels des moteurs de recherche. Le GEO s’intéresse à la façon dont vos contenus peuvent être compris, sélectionnés et cités dans des réponses générées par l’intelligence artificielle. Les deux approches sont complémentaires et reposent en partie sur la qualité et l’accessibilité de vos contenus.",
      },
      {
        question:
          "Si mon site est bien référencé sur Google, serai-je visible dans les IA ?",
        answer:
          "Pas automatiquement. Une bonne visibilité sur Google ne garantit pas que ChatGPT, Perplexity ou une autre IA sélectionnera votre site. Chaque système utilise ses propres mécanismes et sources. Le SEO constitue une base utile, que le travail GEO vient compléter.",
      },
      {
        question:
          "Quels contenus peuvent être repris par les intelligences artificielles ?",
        answer:
          "Les contenus qui répondent clairement à une question, apportent des informations utiles et présentent une expertise identifiable peuvent avoir davantage de valeur comme sources. Les explications précises, les analyses originales, les exemples concrets et les informations vérifiables sont de bonnes pistes. Aucun format ne garantit toutefois une citation.",
      },
      {
        question:
          "Faut-il créer un blog pour améliorer sa visibilité dans les IA ?",
        answer:
          "Non, pas nécessairement. Les pages présentant vos accompagnements peuvent déjà apporter des réponses utiles. Un blog devient intéressant pour approfondir des questions précises, partager votre expertise ou traiter des sujets que vos pages de services ne couvrent pas. La pertinence prime sur le volume de publications.",
      },
      {
        question:
          "Combien de temps faut-il pour apparaître dans les réponses des IA ?",
        answer:
          "Il n’existe pas de délai fiable. Cela dépend notamment de l’accessibilité de votre site, de son contenu, de sa découverte par les systèmes concernés et de leurs mécanismes de sélection. Je privilégie un travail progressif et des vérifications régulières plutôt qu’une promesse de visibilité à une date précise.",
      },
      {
        question: "Comment savoir si mon site est cité par les IA ?",
        answer:
          "Vous pouvez tester des questions pertinentes pour votre activité dans différents assistants et vérifier les réponses, les sources citées et les éventuels liens vers votre site. Ces observations restent variables selon les questions et les moments. Elles peuvent être complétées par les données disponibles dans les outils de mesure, notamment ceux de Google pour ses fonctionnalités de recherche intégrant l’IA.",
      },
      {
        question: "Qu’est-ce que la méthode SAGEO chez Kopio ?",
        answer:
          "Chez Kopio, SAGEO désigne une approche qui articule SEO, GEO et AEO pour le référencement IA des entreprises et indépendantes en France. Elle vise une présence cohérente : site accessible, expertise claire, contenus utiles aux personnes et aux systèmes qui explorent le web. Elle ne garantit ni classement ni citation. Le détail est sur la page SAGEO.",
      },
    ],
  },
  {
    slug: "sageo",
    navLabel: "SAGEO",
    title: "Méthode SAGEO Kopio : SEO, GEO et AEO pour entreprises en France | Kopio",
    metaDescription:
      "Méthode SAGEO Kopio, par Karelle : SEO, GEO et AEO pour le référencement IA en France. Être trouvée, comprise, citée. Alternative à l’agence multi-interlocuteurs.",
    h1: "Méthode SAGEO : SEO, GEO et référencement IA",
    h1Highlight: "référencement IA",
    intro:
      "Kopio accompagne les entreprises et indépendantes en France sur le SAGEO : SEO, GEO et AEO pour le référencement IA.",
    tldr:
      "La méthode SAGEO est la méthode Kopio, par Karelle, pour le référencement IA en France. Elle relie SEO, GEO et AEO pour qu’une page soit trouvée, retenue puis citée par Google et les moteurs IA (ChatGPT, Gemini, Perplexity).",
    image: "/image/blog-covers/blog-seo-geo-sageo.jpeg",
    imageAlt:
      "Méthode SAGEO Kopio : SEO, GEO et AEO pour le référencement IA en France",
    definedTerm: {
      name: "Méthode SAGEO",
      description:
        "La méthode SAGEO (Search-Augmented Generative Engine Optimization) est la méthode Kopio, par Karelle, pour le référencement IA en France. Elle articule SEO, GEO et AEO pour qu’une page soit trouvée, retenue puis citée.",
    },
    emotionalHero: {
      lede:
        "SEO, GEO et AEO réunis. Pour que votre expertise soit trouvée sur Google, puis citée dans les réponses IA.",
      primaryCta: {
        href: "/contact",
        label: "Faire le point ensemble",
      },
    },
    featureBand: {
      eyebrow: "SAGEO",
      title: "Une approche globale de la visibilité",
      titleHighlight: "visibilité",
      items: [
        {
          id: "trouvee",
          title: "Soyez trouvée.",
          text: "Structure et SEO : les bases pour être découverte sur Google.",
          icon: "search",
        },
        {
          id: "retenue",
          title: "Soyez retenue.",
          text: "Une réponse claire dès les premières lignes.",
          icon: "badge",
        },
        {
          id: "citee",
          title: "Soyez citée.",
          text: "Un contenu précis que les IA peuvent reprendre comme source.",
          icon: "spark",
        },
      ],
      cta: {
        href: "/contact",
        label: "Faire le point ensemble",
      },
    },
    contentOrder: [
      "featureBand",
      "compareTable",
      "sections",
      "stages",
      "pillars",
    ],
    compareTable: {
      h2: "SEO, GEO et méthode SAGEO : ce qui change",
      h2Highlight: "méthode SAGEO",
      columns: ["SEO classique", "GEO (IA)", "SAGEO (Kopio)"],
      rows: [
        {
          criterion: "Cible",
          cells: [
            "Algorithme Google",
            "Moteurs IA (ChatGPT, Gemini)",
            "Clients + Google + IA",
          ],
        },
        {
          criterion: "Format",
          cells: [
            "Mots-clés et popularité des liens",
            "Citations et clarté",
            "Structure citable et notoriété",
          ],
        },
      ],
    },
    stages: {
      h2: "Une stratégie pensée pour chaque étape",
      h2Highlight: "chaque étape",
      layout: "carousel",
      items: [
        {
          step: "01",
          title: "Être trouvée",
          body: "Avant d’être citée, votre page doit pouvoir être découverte.\n\nJe travaille les titres, la méta, la structure et les mots que vos clients utilisent vraiment.\n\nRésultat : des fondations solides pour Google et pour les recherches menées par les IA.",
          image: "/image/card-cover/seo.jpeg",
          imageAlt:
            "Résultats Google pour « coach professionnelle Toulouse » : site de coach en première position avec URL, extrait et aperçu de page",
        },
        {
          step: "02",
          title: "Être comprise et retenue",
          body: "Une fois découverte, la page doit répondre clairement à la question posée.\n\nJe clarifie l’intention de chaque page et place la réponse utile en tête, pour que votre expertise ne soit pas noyée.\n\nRésultat : un contenu ciblé, difficile à écarter quand une IA sélectionne ses sources.",
          image: "/image/card-cover/site-compris.jpeg",
          imageAlt:
            "Visualisation d’un réseau de pages reliées à un hub central, illustrant un contenu structuré et compréhensible pour les systèmes qui explorent le web",
        },
        {
          step: "03",
          title: "Être citée",
          body: "La plupart des citations viennent du corps du texte.\n\nJe privilégie des affirmations qui tiennent seules, des exemples concrets et des preuves vérifiables.\n\nRésultat : un contenu qui peut contribuer à une réponse IA, pas seulement à une position dans Google.",
          image: "/image/card-cover/site-cite.jpeg",
          imageAlt:
            "Échange type assistant IA : une question sur une coach, une réponse qui cite Sophie Durant avec lien et aperçu de son site",
        },
      ],
      outro:
        "Pour aller plus loin : [article SEO + GEO = SAGEO](/blog/sageo-seo-geo-visibilite-2026). Étapes séparées : [SEO](/seo) · [GEO](/geo).",
    },
    sections: [
      {
        h2: "Comment préparer une page à être citée",
        body: "Trois leviers suffisent. Ils regroupent ce qui compte vraiment pour Google et pour les IA.\n\n- **Structure lisible** : title, méta, intertitres et Schema portent votre expertise, votre public et les mots réellement cherchés.\n\n- **Réponse en tête** : l’affirmation centrale apparaît dès les premières lignes, compréhensible seule.\n\n- **Corps précis** : faits, exemples et preuves utiles. Chaque idée tient sans le paragraphe d’avant. J’adapte la densité au type de page (guide, métier, comparaison).\n\nLe détail illustré est dans [l’article SAGEO](/blog/sageo-seo-geo-visibilite-2026).",
      },
      {
        h2: "SEO, AEO, GEO : ce que le SAGEO relie",
        body: "**SEO** : être découverte dans les résultats naturels.\n\n**AEO** : fournir une réponse claire dès le haut de page.\n\n**GEO** : améliorer les chances d’être retenue et citée dans une réponse générée.\n\n**SAGEO** : relier ces trois leviers dans le même parcours, étape par étape, sans empiler des techniques au hasard.\n\n[Lire l’article SEO + GEO = SAGEO](/blog/sageo-seo-geo-visibilite-2026).",
      },
      {
        h2: "Ce que je change sur vos pages",
        layout: "photoScroll",
        image: FOUNDER_PHOTO,
        imageAlt: FOUNDER_PHOTO_ALT,
        body: "Je n’applique pas la même grille à toutes vos pages. Une page de présentation doit inspirer confiance. Un guide doit répondre à une question. Une page comparative doit clarifier un choix.\n\nJ’adapte le travail à l’étape visée, à l’intention de recherche et au rôle de chaque page, en m’appuyant sur SAGEO Arena et sur votre lexique métier.",
      },
    ],
    pillars: {
      h2: "Votre site peut préparer la suite",
      items: [
        {
          title: "Vous créez votre site ?",
          body: "Je construis sa structure en tenant compte de votre expertise et de votre visibilité dès le départ.",
          cta: { href: "/creation-de-site-web", label: "Création de site" },
        },
        {
          title: "Vous avez déjà un site ?",
          body: "Un diagnostic identifie ce qui bloque la découverte ou la clarté, avant une refonte ou un renforcement ciblé.",
          cta: { href: "/contact", label: "Demander un audit" },
        },
        {
          title: "Un premier regard en deux minutes",
          body: "Le Test des 10 Secondes vous donne un premier regard sur votre présence pour Google et les IA.",
          cta: { href: "/grille-etancheite", label: "Faire le quiz" },
        },
      ],
    },
    motDeKarelle:
      "Ma signature : traduire le SAGEO en décisions concrètes pour chaque page. Une méthode pour le référencement IA, en France, avec une seule interlocutrice.",
    cta: {
      title: "Votre expertise mérite d’être découverte et comprise",
      titleHighlight: "découverte",
      lead:
        "Je vous accompagne sur le SAGEO (SEO, GEO et AEO) pour une présence utile sur Google et dans les réponses IA, adaptée aux entreprises et indépendantes en France.",
      closing: "",
      primaryLabel: "Faire le point ensemble",
      primaryHref: "/contact",
      secondaryLabel: "Lire l’article SAGEO",
      secondaryHref: "/blog/sageo-seo-geo-visibilite-2026",
    },
    faqs: [
      {
        question: "Qu’est-ce que la méthode SAGEO ?",
        answer:
          "La méthode SAGEO (Search-Augmented Generative Engine Optimization) est la méthode Kopio, par Karelle, pour le référencement IA. Elle relie SEO, GEO et AEO derrière un parcours réel : récupération, re-classement, puis citation. L’enjeu : qu’une page soit trouvée par Google, comprise par vos clients, et utile aux moteurs IA (ChatGPT, Gemini, Perplexity, Aperçus IA) lorsqu’ils construisent une réponse. C’est une façon d’écrire et de structurer vos pages pour qu’elles puissent être découvertes, retenues, puis citées.",
      },
      {
        question: "Pour qui est faite la méthode SAGEO Kopio ?",
        answer:
          "Pour les entreprises, TPE et indépendantes en France qui veulent une présence claire sur Google et dans les réponses IA, sans piloter une agence multi-interlocuteurs. Si vous cherchez un accompagnement SEO, GEO et AEO page par page, avec une seule interlocutrice, c’est le rôle de cette offre. Le comparatif Kopio vs agence web précise quand une agence reste plus adaptée.",
      },
      {
        question: "SAGEO, SEO, GEO et AEO : quelle différence ?",
        answer:
          "Le SEO travaille la visibilité dans les résultats naturels. L’AEO vise une réponse claire dès le haut de page. Le GEO s’intéresse à la sélection et à la citation dans les réponses générées par l’IA. Le SAGEO relie l’ensemble du parcours : de la découverte d’une page jusqu’à son éventuelle citation.",
      },
      {
        question: "Kopio est-il une agence SAGEO en France ?",
        answer:
          "Kopio n’est pas une agence multi-équipes : c’est un accompagnement mené par Karelle pour entreprises et indépendantes en France. La méthode SAGEO y est appliquée page par page. Pour un projet multi-équipes ou très large, une agence reste parfois plus adaptée.",
      },
      {
        question: "Le SAGEO garantit-il d’être citée par une IA ?",
        answer:
          "Non. Aucune méthode ne peut garantir une citation. Chez Kopio, le SAGEO sert à travailler avec méthode, étape par étape.",
      },
      {
        question: "Quelle est la différence entre SAGEO Arena et la méthode Kopio ?",
        answer:
          "SAGEO Arena est une recherche publiée sur le parcours récupération, reclassement et génération. Elle fonde l’idée d’adapter les optimisations à chaque étape. Ma méthode Kopio transpose ces enseignements en choix concrets pour vos pages. L’étude ne valide pas automatiquement toute ma pratique.",
      },
      {
        question: "Où lire l’étude et l’article SAGEO ?",
        answer:
          "L’article « SEO + GEO = SAGEO » résume SAGEO Arena et la grille pratique. Les pages SEO et GEO détaillent chacune une étape du parcours.",
      },
    ],
  },
  {
    slug: "refonte-de-site-web",
    navLabel: "Refonte de site",
    title: "Refonte de site web : une nouvelle dimension pour votre site | Kopio",
    metaDescription:
      "Refonte de site web : design, structure, SEO et visibilité. Un site plus clair, plus actuel, pensé pour vos clients, Google et les IA.",
    h1: "Votre site mérite une nouvelle dimension",
    h1Highlight: "nouvelle dimension",
    intro:
      "Un site qui reflète votre évolution. Clarifie votre message. Et révèle tout votre potentiel.",
    tldr:
      "Je repense la structure, les contenus et le design de votre site pour qu’il reflète votre activité actuelle, clarifie votre message et développe votre visibilité sur Google et auprès de vos futurs clients.",
    image: "/image/mockuppulse2.png",
    imageAlt: "Refonte de site web pour une professionnelle de l’accompagnement",
    emotionalHero: {
      lede:
        "Un site qui reflète votre évolution. Clarifie votre message. Et révèle tout votre potentiel.",
      primaryCta: { href: "/contact", label: "Refondre mon site" },
      secondaryCta: { href: "/projets", label: "Découvrir mes réalisations" },
    },
    featureBand: {
      eyebrow: "Refonte",
      title: "Repartez sur de bonnes bases",
      titleHighlight: "bonnes bases",
      items: [
        {
          id: "trouvee",
          title: "Soyez trouvée.",
          text: "Votre visibilité peut aller plus loin. Repensez la structure de votre site pour mieux répondre aux recherches de vos futurs clients sur Google.",
          icon: "search",
        },
        {
          id: "reconnue",
          title: "Soyez reconnue.",
          text: "Votre expérience mérite d’être mieux présentée. Actualisez vos contenus pour refléter votre expertise, vos services et la valeur de votre accompagnement.",
          icon: "badge",
        },
        {
          id: "unique",
          title: "Soyez unique.",
          text: "Votre site doit vous ressembler aujourd’hui. Faites évoluer le design, les mots et l’ambiance pour retrouver ce qui rend votre approche singulière.",
          icon: "spark",
        },
        {
          id: "choisie",
          title: "Soyez choisie.",
          text: "Facilitez la décision de vos visiteurs. Un parcours plus fluide, un message plus précis et une prochaine étape évidente pour passer de la découverte au contact.",
          icon: "path",
        },
      ],
      cta: {
        href: "/contact",
        label: "Refondre mon site",
      },
    },
    contentOrder: ["featureBand", "pillars", "sections"],
    pillars: {
      h2: "Plus clair. Plus actuel. Plus pertinent",
      h2Highlight: ["clair", "actuel", "pertinent"],
      layout: "carousel",
      items: [
        {
          label: "Design",
          title: "Design repensé",
          body: "Un univers visuel en accord avec votre activité actuelle.",
          image: "/image/card-cover/refont.jpeg",
          imageAlt:
            "Deux maquettes de pages web minimalistes liées par un ruban bordeaux, illustrant un design de site repensé",
        },
        {
          label: "Structure",
          title: "Pages réorganisées",
          body: "Une structure qui met l’essentiel en avant et facilite la navigation.",
          image: "/image/card-cover/reorganize.jpeg",
          imageAlt:
            "Anciennes maquettes à gauche transformées en pages réorganisées à droite, avec flèches bordeaux indiquant la refonte de structure",
        },
        {
          label: "Visibilité",
          title: "SEO et GEO renforcés",
          body: "Des contenus et une architecture retravaillés pour accompagner votre visibilité sur Google et les IA.",
          image: "/image/card-cover/seo.jpeg",
          imageAlt:
            "Résultats Google pour une coach à Toulouse, illustrant une visibilité renforcée après refonte SEO et GEO",
        },
        {
          label: "Mobile",
          title: "Adapté au mobile",
          body: "Une expérience fluide, quel que soit l’écran.",
          image: "/image/card-cover/every-screen.jpeg",
          imageAlt:
            "Site responsive présenté sur ordinateur, tablette et téléphone après refonte",
        },
        {
          label: "Suivi",
          title: "Hébergement et suivi",
          body: "Selon la formule choisie, votre site reste accompagné après sa refonte.",
          image: "/image/card-cover/follow.jpeg",
          imageAlt:
            "Calendrier avec rendez-vous cochés et ruban bordeaux, symbolisant l’accompagnement après la refonte",
        },
      ],
    },
    sections: [
      {
        h2: "Refonte, SEO et IA : une nouvelle base pour votre visibilité",
        layout: "photoScroll",
        image: FOUNDER_PHOTO,
        imageAlt: FOUNDER_PHOTO_ALT,
        body: "Votre site a déjà une histoire.\n\nJe repense la structure, les titres et les contenus pour rendre votre expertise plus facile à comprendre, à trouver et à exploiter par les moteurs de recherche.\n\nLe SEO vous aide à être trouvée. Des contenus clairs et précis favorisent aussi leur compréhension par les moteurs génératifs.\n\nDécouvrez l’approche complète sur la page SAGEO.",
      },
    ],
    cta: {
      title: "Votre site mérite une nouvelle dimension",
      titleHighlight: "nouvelle dimension",
      lead: "Votre activité a évolué. Donnez à votre site la clarté et la pertinence qu’il mérite.",
      closing: "",
      primaryLabel: "Refondre mon site",
      primaryHref: "/contact",
      secondaryLabel: "Voir les formules",
      secondaryHref: "/tarifs",
    },
    faqs: [
      {
        question: "Dois-je changer d’adresse web ?",
        answer:
          "Pas forcément. Le domaine est souvent conservé, avec des redirections propres des anciennes pages. La décision dépend de l’état technique et du référencement déjà en place.",
      },
      {
        question: "Combien de temps dure une refonte ?",
        answer:
          "Le délai dépend de l’ampleur du site et de la disponibilité des textes et des photos. En pratique, une refonte typique se déroule sur quelques semaines, avec des validations à chaque étape avant la mise en ligne.",
      },
      {
        question: "Est-ce que je perds mon référencement avec une refonte ?",
        answer:
          "Une refonte bien menée protège et peut renforcer votre visibilité. Je travaille les redirections, la structure et les contenus pour conserver ce qui fonctionne et améliorer ce qui freine encore votre découverte.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((p) => p.slug === slug);
}
