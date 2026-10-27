export interface MetierFaq {
 question: string;
 answer: string;
}

export interface MetierSection {
 h2: string;
 body: string;
}

export interface MetierBeforeAfter {
 heading: string;
 intro: string;
 before: { image: string; alt: string; caption: string; body: string };
 after: { image: string; alt: string; caption: string; body: string };
 improvementsTitle: string;
 improvements: { t: string; d: string }[];
 closing: string;
 /** Lien optionnel vers /projets ou le site public */
 projectHref?: string;
 projectLabel?: string;
}

export interface MetierProcessStep {
 title: string;
 body: string;
}

export interface MetierServiceSchema {
 name: string;
 serviceType: string;
 description: string;
 /** Si true, n’émet pas d’Offer (le tarif vit sur /tarifs) */
 omitPrice?: boolean;
}

export interface MetierPage {
 slug: string;
 label: string;
 keyword: string;
 metier: string;
 metierPlural: string;
 title: string;
 metaDescription: string;
 /** lastmod QDF (Sem.8) — bump à chaque réinjection de données */
 updatedAt?: string;
 h1: string;
 /** Mot ou expression accentuée dans le H1 (TitleEm) */
 h1Highlight?: string;
 /** Label éditorial au-dessus du H1 (sinon date updatedAt) */
 eyebrow?: string;
 /** Mot accentué dans whyTitle (TitleEm, DA home) */
 whyHighlight?: string;
 tldr: string;
 intro: string;
 douleur: string;
 whyTitle: string;
 whyPoints: { t: string; d: string }[];
 sections: MetierSection[];
 includedTitle: string;
 priceTitle: string;
 caseStudyId?: string;
 caseStudyHeading?: string;
 /** Avant / après documenté (ex. Ample) — remplace le bloc case study mono-image */
 beforeAfter?: MetierBeforeAfter;
 /** Parcours de création en étapes éditoriales */
 processTitle?: string;
 processSteps?: MetierProcessStep[];
 /** Schema.org Service spécifique à la page */
 serviceSchema?: MetierServiceSchema;
 recommendedPlanId: "launch" | "pro" | "sur-mesure";
 relatedBesoinSlug: string;
 relatedBesoinLabel: string;
 closing: string;
 ctaLabel: string;
 faqs: MetierFaq[];
 image: string;
 imageAlt: string;
 /** Chips hero éditoriales (sans prix si fourni) */
 factChips?: string[];
}

export const METIER_BASE = "/site-web-pour";

export function metierPath(slug: string): string {
 return `${METIER_BASE}/${slug}`;
}

export const metiers: MetierPage[] = [
 {
  slug: "coach",
  label: "Coach",
  keyword: "site internet pour coach",
  metier: "coach",
  metierPlural: "coachs",
  title: "Site internet pour coach : valorisez votre expertise",
  metaDescription:
   "Création de site internet pour coach professionnel : valorisez votre expertise, présentez vos offres et prolongez votre visibilité LinkedIn avec Kopio.",
  updatedAt: "2026-10-26",
  h1: "Création de site internet pour coach : valorisez votre expertise",
  h1Highlight: "valorisez votre expertise",
  factChips: ["Création de site", "Positionnement", "Visibilité"],
  tldr:
   "Kopio crée des sites internet sur mesure pour les coachs professionnels qui veulent affirmer leur positionnement, présenter leurs accompagnements et faciliter la prise de rendez-vous. Chaque site reflète l’expertise, offre une expérience claire et intègre les fondamentaux du référencement naturel.",
  intro:
   "Votre expertise est visible sur LinkedIn. Votre site internet doit être à la hauteur. Vous partagez vos idées, développez votre réseau et construisez votre crédibilité. Mais lorsqu’une personne découvre votre profil et souhaite travailler avec vous, comprend-elle votre méthode, vos offres et le prochain pas ?",
  douleur:
   "Le décalage entre une expertise déjà reconnue sur LinkedIn et un site qui ne prolonge pas encore cette crédibilité.",
  whyTitle: "Pourquoi créer un site internet pour coach professionnel ?",
  whyHighlight: "coach professionnel",
  whyPoints: [
   {
    t: "Donner une vitrine à votre expertise",
    d: "Sur LinkedIn, votre expertise se découvre publication après publication. Sur votre site, elle devient immédiatement compréhensible : parcours, méthode et accompagnements réunis autour de votre positionnement.",
   },
   {
    t: "Renforcer votre crédibilité",
    d: "Avant de réserver, vos prospects cherchent à comprendre qui vous êtes et comment vous travaillez. Un site soigné présente expérience, approche, références pertinentes et témoignages authentiques lorsque vous en disposez.",
   },
   {
    t: "Présenter clairement vos offres",
    d: "Une publication ne suffit pas toujours à expliquer un programme ou un accompagnement. Le site détaille prestations, public, objectifs, déroulement et modalités. Vous recevez des demandes déjà mieux informées.",
   },
   {
    t: "Faciliter les prises de rendez-vous",
    d: "Un bouton visible, un formulaire clair ou une réservation : le passage de la découverte à un premier échange devient plus simple, avec moins d’étapes inutiles.",
   },
   {
    t: "Une visibilité complémentaire à LinkedIn",
    d: "LinkedIn touche votre réseau. Un site structuré pour Google peut aussi être découvert par des personnes qui cherchent un accompagnement. Vous ne dépendez plus uniquement d’une plateforme. Voir aussi [LinkedIn ou site internet : que choisir ?](/comparatif/linkedin-ou-site-web).",
   },
  ],
  sections: [
   {
    h2: "Que comprend la création d’un site web pour coach avec Kopio ?",
    body: `Un site professionnel pour coach doit faire comprendre rapidement votre activité, votre spécialité, vos accompagnements et la manière de vous contacter.

Chez Kopio, les formules peuvent comprendre la création d’un site jusqu’à cinq pages, un atelier de rédaction, un système de réservation et la prise en charge des modifications courantes, selon les prestations de votre offre. [Découvrir les formules Kopio](/tarifs).

### Une page d’accueil qui affirme votre positionnement

La page d’accueil présente immédiatement votre spécialité, votre public et la valeur de votre accompagnement. Elle répond aux questions essentielles : qui accompagnez-vous, dans quelles situations, et comment pouvez-vous aider ?

### Une page « À propos » qui inspire confiance

Votre parcours ne se résume pas à une succession de diplômes. Cette page explique votre cheminement, vos convictions, votre approche et ce qui donne du sens à votre travail.

### Des pages pour présenter vos accompagnements

Coaching de dirigeants, coaching professionnel, reconversion ou coaching de vie : chaque prestation s’explique avec précision. Vos visiteurs découvrent à qui s’adresse l’accompagnement, comment il se déroule, et quelle démarche entreprendre pour vous contacter.

### Un système de contact ou de réservation

Les personnes intéressées passent à l’action sans chercher vos coordonnées dans plusieurs publications ou profils.

### Un site adapté aux mobiles

Une grande partie des échanges professionnels commence sur smartphone. Textes lisibles, navigation claire, boutons faciles à utiliser.

### Une structure pensée pour le référencement naturel

Titres descriptifs, contenus organisés, navigation cohérente et adaptation mobile : une base utile pour la visibilité sur Google. Le référencement demande du temps et dépend aussi de la concurrence et de la pertinence des contenus.`,
   },
   {
    h2: "Votre site internet et LinkedIn : une présence professionnelle cohérente",
    body: `LinkedIn et votre site remplissent des rôles complémentaires. LinkedIn vous permet de partager votre expertise et de créer des relations. Votre site structure cette expertise et présente vos accompagnements dans leur ensemble.

Imaginez le parcours. Une personne lit l’une de vos publications. Votre réflexion l’intéresse. Elle consulte votre profil et souhaite en savoir davantage. Sur votre site, elle trouve une présentation claire de votre méthode, découvre l’accompagnement qui correspond à sa situation, et peut réserver un échange.

Ce parcours fonctionne d’autant mieux que votre communication reste cohérente entre les deux supports. Le tandem est détaillé dans [LinkedIn ou site internet : que choisir ?](/comparatif/linkedin-ou-site-web).

### Un positionnement reconnaissable

Votre site reprend les éléments essentiels de votre identité : votre spécialité, votre manière de communiquer et votre univers visuel.

### Des contenus organisés selon les besoins de vos prospects

Vos publications LinkedIn peuvent nourrir la réflexion sur vos pages, sans être simplement copiées. Le site organise ces informations pour répondre aux questions de celles qui envisagent un accompagnement.

### Des pages à partager dans votre communication

Vous orientez vos contacts vers une page précise : méthode, détail d’une offre, ou réservation d’un premier rendez-vous. Votre site prolonge la crédibilité déjà construite.`,
   },
   {
    h2: "Un site sur mesure pour coach de vie, coach professionnel et coach en entreprise",
    body: `Chaque activité de coaching a ses spécificités. Un site efficace reflète votre domaine d’intervention, votre public et les situations dans lesquelles vous accompagnez.

### Site internet pour coach professionnel

Le site présente vos accompagnements en évolution professionnelle, prise de poste, leadership ou développement des compétences. Il met en valeur votre parcours, votre méthode et le cadre de vos interventions.

### Site internet pour coach de dirigeants

Les décideurs recherchent une présentation précise de l’expertise, du contexte d’intervention et des modalités. Le site met en avant votre expérience et les problématiques professionnelles sur lesquelles vous intervenez.

### Site internet pour coach en reconversion professionnelle

Le site explique les étapes de votre accompagnement, les situations concernées et votre approche pour aider à clarifier un projet.

### Site internet pour coach de vie

Votre site présente vos thématiques, votre méthode, votre parcours et les modalités des séances.

### Site internet pour coach d’équipe

Le site distingue les accompagnements collectifs et individuels, présente les objectifs des interventions et précise les organisations concernées.

Dans chaque cas, l’objectif est le même : une présentation fidèle à votre expertise, plutôt qu’un site générique qui pourrait convenir à n’importe quel professionnel. [Découvrir mes réalisations](/projets).`,
   },
   {
    h2: "Comment améliorer le référencement naturel d’un site de coach ?",
    body: `Pour améliorer sa visibilité sur Google, un site de coach présente des prestations précises, répond aux questions de ses futurs clients et dispose d’une structure accessible aux moteurs de recherche.

### Des pages adaptées aux recherches de votre public

Une personne qui cherche un coach de dirigeants ne formule pas les mêmes demandes qu’une personne en reconversion. Les pages présentent clairement les prestations réellement proposées et les besoins auxquels elles répondent.

### Des titres et des contenus structurés

Titres descriptifs, sous-titres pertinents et organisation logique : les visiteurs trouvent plus facilement les informations, et les moteurs comprennent mieux les sujets abordés.

### Une navigation claire et adaptée au mobile

Un site rapide, lisible et facile à parcourir améliore l’expérience. Les pages importantes restent accessibles depuis la navigation et reliées entre elles lorsque c’est pertinent.

### Des réponses directes aux questions fréquentes

Prestations, tarifs, réservation, déroulement : des réponses claires rendent votre site plus utile, y compris pour les systèmes de recherche qui utilisent l’intelligence artificielle.

### Une visibilité qui se construit dans la durée

Le référencement naturel n’offre pas de position garantie. Il dépend de la concurrence, de la qualité des contenus, de la crédibilité du site et de son évolution. Kopio intègre les fondamentaux SEO dès la conception, pour partir sur une base structurée.`,
   },
   {
    h2: "Pourquoi choisir Kopio pour créer votre site de coaching ?",
    body: `### Parce que votre expertise passe avant le design

Je commence par comprendre votre activité et votre positionnement. Le site met en valeur ce que vous faites réellement, sans vous faire entrer dans une présentation impersonnelle.

### Parce que vous n’avez pas à tout rédiger seule

L’atelier de rédaction aide à structurer les informations importantes et à transformer vos idées en contenus adaptés à votre site.

### Parce que votre communication existante a de la valeur

Votre présence LinkedIn, votre parcours et vos contenus professionnels servent de point de départ pour un site cohérent avec votre image.

### Parce que votre site doit rester simple à faire évoluer

Les modifications courantes prévues par votre formule sont prises en charge, pour que votre présence suive l’évolution de votre activité. [Découvrir les formules Kopio](/tarifs).

### Parce que vous échangez directement avec la personne qui crée votre site

Chez Kopio, j’accompagne de façon personnalisée, avec une communication claire et une compréhension réelle de votre activité. Vous restez concentrée sur votre métier. Je m’occupe de donner à votre expertise une présence web professionnelle.`,
   },
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour coach",
  priceTitle: "Les formules pour une coach",
  beforeAfter: {
   heading:
    "Exemple de refonte d’un site internet pour coach : le projet Ample",
   intro:
    "Un site peut être agréable à regarder sans expliquer clairement la spécialité de la professionnelle qui l’utilise. L’exemple du site Ample montre comment une refonte rend un positionnement plus lisible et oriente mieux les visiteurs.",
   before: {
    image: "/image/ample-avant.jpg",
    alt: "Ancienne page d’accueil Ample : message généraliste et bouton En savoir plus",
    caption: "Avant la refonte",
    body: "L’ancienne page d’accueil affichait un univers visuel centré sur la mer, avec l’accroche « Naviguer les vagues de l’infini avec intention ». Cette formulation évoquait le développement personnel, sans identifier immédiatement la spécialité. Le visiteur ne savait pas précisément à qui s’adressaient les services. Le bouton principal, « En savoir plus », restait lui aussi général.",
   },
   after: {
    image: "/image/ample.png",
    alt: "Nouvelle page d’accueil Ample : coach spécialisée en épuisement professionnel à Lyon",
    caption: "Après la refonte",
    body: "La nouvelle page met en avant un positionnement précis : coach spécialisée en épuisement professionnel à Lyon. Le titre aborde une situation vécue : « Arrêt maladie pour burn-out ? ». Le texte présente l’accompagnement du retour au travail. Les boutons proposent des actions explicites : faire le point sur ma situation, découvrir l’accompagnement burn-out. L’identité visuelle a été repensée pour soutenir ce positionnement.",
   },
   improvementsTitle: "Les cinq améliorations visibles",
   improvements: [
    {
     t: "Une spécialité clairement annoncée",
     d: "Le visiteur identifie immédiatement le domaine d’expertise de la coach.",
    },
    {
     t: "Une problématique concrète",
     d: "La page s’adresse à une situation précise plutôt qu’à une aspiration générale.",
    },
    {
     t: "Un public mieux identifié",
     d: "Les textes aident les personnes concernées à reconnaître l’accompagnement proposé.",
    },
    {
     t: "Des actions compréhensibles",
     d: "Les boutons indiquent clairement ce que le visiteur peut faire ensuite.",
    },
    {
     t: "Une identité visuelle cohérente",
     d: "Couleurs, illustrations, typographie et organisation des contenus soutiennent une présentation structurée.",
    },
   ],
   closing:
    "La refonte d’un site internet ne consiste pas uniquement à moderniser son apparence. Il faut d’abord comprendre ce que le professionnel propose, à qui il s’adresse, et ce que ses visiteurs doivent retenir. Chez Kopio, le design sert le positionnement. Pas l’inverse. Cet avant/après illustre une amélioration de la clarté du message et du parcours. Il ne constitue pas, à lui seul, une preuve d’augmentation de visibilité ou de demandes. Ensuite : [les formules](/tarifs), puis [un échange de 30 minutes](/contact).",
   projectHref: "/projets",
   projectLabel: "Découvrir mes réalisations",
  },
  processTitle: "Comment se déroule la création de votre site internet ?",
  processSteps: [
   {
    title: "Comprendre votre activité et vos objectifs",
    body: "Nous échangeons sur votre parcours, vos offres, votre clientèle et votre communication actuelle. Nous identifions ce qui rend votre accompagnement singulier et les informations que vos futurs clients doivent comprendre.",
   },
   {
    title: "Clarifier votre message avec l’atelier de rédaction",
    body: "Publications LinkedIn, présentations, supports commerciaux : ces contenus constituent une base. L’atelier organise vos idées, clarifie votre positionnement et prépare les textes essentiels du site.",
   },
   {
    title: "Concevoir un site cohérent avec votre image",
    body: "Je travaille la structure des pages, l’identité visuelle, la lisibilité et le parcours de navigation. L’objectif : un site professionnel qui présente votre expertise sans complexité inutile.",
   },
   {
    title: "Mettre en ligne et faire évoluer votre site",
    body: "Après validation, votre site est publié et peut être partagé dans votre communication. Lorsque vos offres évoluent, les modifications prévues dans votre formule sont prises en charge.",
   },
  ],
  serviceSchema: {
   name: "Création de site internet pour coach professionnel",
   serviceType: "Création de site internet sur mesure",
   description:
    "Création de sites internet pour coachs professionnels, avec accompagnement à la structuration des contenus, présentation des offres et prise de rendez-vous.",
   omitPrice: true,
  },
  recommendedPlanId: "launch",
  relatedBesoinSlug: "site-vitrine-independante",
  relatedBesoinLabel: "site vitrine d’indépendante",
  closing:
   "Vous avez pris le temps de construire votre expérience, de développer votre réseau et de partager votre vision sur LinkedIn. Votre site internet doit prolonger ce travail : une présentation professionnelle où vos futurs clients comprennent votre valeur, découvrent vos accompagnements et vous contactent facilement.",
  ctaLabel: "Parlons de votre future vitrine",
  faqs: [
   {
    question: "Pourquoi un coach a-t-il besoin d’un site internet ?",
    answer:
     "Un site internet présente votre expertise, vos accompagnements et vos coordonnées dans un espace professionnel structuré. Il complète les réseaux sociaux, facilite les demandes de contact et peut contribuer à votre visibilité sur Google.",
   },
   {
    question: "Quelles pages faut-il prévoir pour un site de coaching ?",
    answer:
     "Les pages essentielles sont généralement l’accueil, la présentation du coach, les accompagnements et le contact. Selon les besoins, le site peut aussi proposer des témoignages, une FAQ ou un système de réservation.",
   },
   {
    question: "Comment créer un site internet pour coach qui inspire confiance ?",
    answer:
     "Il faut présenter clairement sa spécialité, son parcours, sa méthode et ses offres. Une identité visuelle cohérente, des informations précises et des témoignages authentiques renforcent aussi la crédibilité.",
   },
   {
    question: "Un site internet est-il utile quand on communique déjà sur LinkedIn ?",
    answer:
     "Oui. LinkedIn développe le réseau et partage l’expertise ; le site organise durablement les informations essentielles sur l’activité. Les deux supports fonctionnent ensemble. Voir [LinkedIn ou site internet : que choisir ?](/comparatif/linkedin-ou-site-web).",
   },
   {
    question: "Peut-on intégrer Calendly à un site de coach ?",
    answer:
     "Oui. Calendly peut être relié grâce à un lien de réservation ou à une intégration compatible. Les visiteurs choisissent un créneau disponible pour un échange.",
   },
   {
    question: "Un site internet peut-il apporter des clients à un coach ?",
    answer:
     "Un site peut aider à être trouvé sur Google, présenter les offres et faciliter les prises de contact. Les résultats dépendent de la visibilité du site, de la pertinence de l’offre et de la qualité du parcours proposé.",
   },
   {
    question: "Combien coûte la création d’un site internet pour coach ?",
    answer:
     "Le prix dépend du nombre de pages, des fonctionnalités, de la personnalisation et du niveau d’accompagnement. Kopio propose plusieurs formules dont les prestations et les conditions sont détaillées sur [les tarifs](/tarifs).",
   },
   {
    question: "Combien de temps faut-il pour référencer un site de coach sur Google ?",
    answer:
     "Il n’existe pas de délai garanti. Google doit d’abord découvrir et indexer les pages. Leur positionnement dépend ensuite de la concurrence, de la pertinence des contenus et de nombreux autres facteurs.",
   },
   {
    question: "Faut-il un blog pour améliorer le SEO d’un site de coach ?",
    answer:
     "Non, un blog n’est pas indispensable. Des pages de services détaillées et pertinentes peuvent déjà répondre à des recherches ciblées. Un blog devient utile lorsqu’il traite des questions complémentaires réellement recherchées par les futurs clients.",
   },
   {
    question: "Peut-on faire évoluer son site après sa création ?",
    answer:
     "Oui. Un site évolue avec de nouvelles offres, des contenus actualisés ou des modifications visuelles. Chez Kopio, les mises à jour courantes sont prises en charge selon les conditions de la formule choisie.",
   },
  ],
  image: "/image/mockupample.png",
  imageAlt:
   "Création de site internet pour coach : exemple de vitrine professionnelle Kopio",
 },
 {
  slug: "praticienne-bien-etre",
  label: "Praticienne bien-être",
  keyword: "site web pour praticienne bien-être",
  metier: "praticienne bien-être",
  metierPlural: "praticiennes bien-être",
  title: "Site web pour praticienne bien-être | Présence claire et crédible",
  metaDescription: "Site web pour praticienne bien-être : identité, offre et réservation claires. Une présence qui vous distingue des vitrines wellness génériques.",
  updatedAt: "2026-10-09",
  h1: "Le site qui clarifie votre pratique bien-être",
  h1Highlight: "clarifie votre pratique",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour praticienne bien-être ne se limite pas à une esthétique agréable. Il pose votre identité, votre offre et un parcours de réservation compréhensible.",
  intro: "Vous avez construit une pratique de bien-être au fil des séances et des personnes que vous accueillez. Mais lorsqu'une cliente découvre votre nom après une recommandation, que voit-elle : votre façon d'accompagner, ou une vitrine interchangeable ?",
  douleur: "Trop de vitrines qui se ressemblent : votre expertise ne ressort pas, les clientes hésitent à réserver un premier créneau.",
  whyTitle: "Pourquoi une praticienne bien-être a besoin d'un site qui lui ressemble",
  whyHighlight: "lui ressemble",
  whyPoints: [
   {
    t: "L'ambiance compte autant que l'offre",
    d: "Typographie, couleurs et photos collent à votre pratique, pas à un modèle wellness générique."
   },
   {
    t: "Réservation sans détour",
    d: "Créneaux, confirmation et contact : le parcours vaut autant que le design."
   },
   {
    t: "Positionnement lisible",
    d: "Pour qui vous travaillez, votre méthode, ce que vous ne proposez pas."
   },
   {
    t: "Déléguer plutôt que bricoler",
    d: "Entre les séances, une alliée gère le site pour vous."
   }
  ],
  sections: [
   {
    h2: "Pourquoi tant de sites bien-être se ressemblent-ils ?",
    body: "Le secteur recycle souvent les mêmes codes et les mêmes formules vagues. Une cliente qui compare trois praticiennes ne retient rien si tout paraît interchangeable.\n\nLe levier est éditorial autant que visuel : vous nommez pour qui vous travaillez, ce que vous faites concrètement en séance, et ce qui vous différencie. Votre site doit donner une impression de cabinet, pas de catalogue générique."
   },
   {
    h2: "Comment intégrer la réservation sans alourdir votre quotidien ?",
    body: "Les messages Instagram créent des allers-retours et des créneaux mal notés. Un parcours de réservation sur le site centralise la demande : la cliente choisit, vous confirmez, le fil de messages se calme.\n\nEn pratique, vous passez moins de temps à répondre « avez-vous un créneau jeudi ? ». Instagram reste le canal de découverte ; le site devient l'entrée principale."
   },
   {
    h2: "Faut-il attendre d'avoir un local parfait avant de lancer son site ?",
    body: "Beaucoup de praticiennes reportent le site jusqu'à la déco idéale ou la photo parfaite. Or les clientes cherchent d'abord le cadre de la pratique et un moyen de réserver.\n\nJe travaille avec les visuels disponibles et une direction claire ; la galerie s'enrichit ensuite. Attendre l'esthétique parfaite laisse d'autres répondre aux recherches locales avant vous."
   },
   {
    h2: "Comment votre site et Instagram se complètent-ils ?",
    body: "Instagram montre l'ambiance du cabinet ; le site porte l'offre, les tarifs et la réservation. Chaque bio et chaque publication « comment réserver » renvoient vers la même URL.\n\nUne cliente qui découvre votre compte le soir peut lire le cadre le lendemain sans faire défiler dix stories. Instagram attire ; le site porte la décision et vous appartient."
   },
   {
    h2: "Que change un site clairement positionné pour vos réservations ?",
    body: "Un positionnement flou attire des demandes hors cible : mauvais format, mauvaises attentes. Un site qui dit pour qui vous travaillez filtre avant le premier message.\n\nEn pratique, vous recevez moins de « c'est quoi exactement ? » et plus de créneaux déjà cadrés. Le design n'est pas décoratif : il porte le message."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour praticienne bien-être",
  priceTitle: "Les formules pour une praticienne bien-être",
  caseStudyId: "pulse",
  caseStudyHeading: "Exemple concret : PULSE",
  recommendedPlanId: "launch",
  relatedBesoinSlug: "site-avec-reservation-en-ligne",
  relatedBesoinLabel: "site avec réservation en ligne",
  closing: "Si vous voulez un site à la hauteur de votre pratique, loin du modèle wellness générique, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Instagram suffit-il pour une praticienne bien-être ?",
    answer: "Il montre le quotidien. Le site centralise offre, méthode et réservation, et vous appartient. C'est l'adresse stable hors du fil."
   },
   {
    question: "Gérez-vous la prise de rendez-vous ?",
    answer: "Oui. Le parcours de contact est clair ; agenda et confirmation peuvent être inclus selon le besoin. Vous restez concentrée sur votre métier."
   },
   {
    question: "Combien coûte un site web pour praticienne bien-être ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/pulse.jpg",
  imageAlt: "PULSE : présence en ligne pour praticienne bien-être"
 },
 {
  slug: "consultante",
  label: "Consultante",
  keyword: "site web pour consultante",
  metier: "consultante",
  metierPlural: "consultantes",
  title: "Site web pour consultante | Présence claire et crédible",
  metaDescription: "Site web pour consultante indépendante : offre claire, preuves, contact professionnel. Une page à transmettre après un premier échange.",
  updatedAt: "2026-10-09",
  h1: "Une page d'offre digne de vos missions",
  h1Highlight: "page d'offre",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour consultante porte votre offre, vos preuves et un contact professionnel. Une référence stable hors du fil LinkedIn.",
  intro: "Vous avez construit une expertise de conseil au fil des missions. Mais lorsqu'une décideuse découvre votre nom après un échange LinkedIn, que peut-elle transmettre en interne : une page d'offre claire, ou un profil difficile à partager ?",
  douleur: "LinkedIn actif, mais aucune page d'offre détaillée à envoyer après un premier échange sérieux.",
  whyTitle: "Pourquoi une consultante a besoin d'une page d'offre dédiée",
  whyHighlight: "page d'offre",
  whyPoints: [
   {
    t: "Expertise scannable",
    d: "Pour qui, problème résolu, méthode, livrables : structure nette."
   },
   {
    t: "Preuves avant slogans",
    d: "Cas, résultats ou retours placés là où la décision se joue."
   },
   {
    t: "Contact professionnel",
    d: "Formulaire, calendrier ou email selon votre process."
   },
   {
    t: "Votre temps se facture",
    d: "Je gère le site ; vous gardez votre énergie pour les missions."
   }
  ],
  sections: [
   {
    h2: "Pourquoi LinkedIn ne remplace pas un site pour consultante ?",
    body: "LinkedIn génère de la visibilité et des conversations. Il ne vous donne pas une page d'offre contrôlée, hors fil d'actualité, que vous envoyez après un premier appel.\n\nLa décideuse veut un lien à transmettre en interne, pas une capture d'écran. LinkedIn reste le filet ; le site porte la référence de votre expertise."
   },
   {
    h2: "Comment structurer l'offre d'une consultante sur un site ?",
    body: "Une consultante vend un problème résolu, pas une liste de compétences. Je structure la page autour du public, du diagnostic, de la méthode et des preuves.\n\nLe lecteur doit comprendre en moins d'une minute s'il est au bon endroit. Cela veut dire une offre lisible, des résultats visibles, et un seul prochain pas. Vous évitez le site « à propos de moi » qui ne dit pas ce que vous livrez."
   },
   {
    h2: "Et si votre positionnement évolue encore ?",
    body: "Les consultantes affinent souvent leur niche après six à douze mois. Ce n'est pas une raison de rester sans site.\n\nJe construis une structure souple : blocs d'offre que je reformule par email sans tout reconstruire. Vous n'attendez pas la version définitive de votre expertise pour être joignable."
   },
   {
    h2: "Comment relier votre site à LinkedIn et à votre emailing ?",
    body: "Signature mail, mise en avant LinkedIn, newsletter et proposition PDF pointent vers la même URL. Une prospecte qui vous découvre sur une publication retrouve les preuves sur le site le soir même.\n\nChaque canal amène ; le site porte le détail et le formulaire. Quand LinkedIn change son algorithme, votre adresse reste la référence que vous contrôlez."
   },
   {
    h2: "Que change concrètement une page d'offre claire ?",
    body: "Une page claire réduit les appels de qualification floue. La cliente arrive déjà alignée sur le problème que vous traitez et sur le format de mission.\n\nVous préparez mieux le premier entretien. Le site ne remplace pas votre expertise commerciale ; il filtre et accélère. Vous facturez votre temps de conseil, pas celui passé à réexpliquer les bases."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour consultante",
  priceTitle: "Les formules pour une consultante",
  recommendedPlanId: "launch",
  relatedBesoinSlug: "site-vitrine-independante",
  relatedBesoinLabel: "site vitrine d'indépendante",
  closing: "Si vous voulez une page d'offre digne de vos missions, écrivez-moi : je clarifie avec vous votre positionnement et le parcours de contact.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Un site est-il utile si j'ai déjà LinkedIn ?",
    answer: "LinkedIn génère de la visibilité. Le site convertit : offre détaillée, preuves et contact hors algorithme. Vous l'envoyez après un premier échange comme référence stable."
   },
   {
    question: "Puis-je présenter plusieurs offres ?",
    answer: "Oui. Mieux vaut deux offres nettes que six floues. On priorise la clarté selon votre catalogue réel."
   },
   {
    question: "Combien coûte un site web pour consultante ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/pulse.jpg",
  imageAlt: "Présence en ligne professionnelle pour consultante"
 },
 {
  slug: "assistante-virtuelle",
  label: "Assistante virtuelle",
  keyword: "site internet assistante virtuelle",
  metier: "assistante virtuelle",
  metierPlural: "assistantes virtuelles",
  title: "Site internet assistante virtuelle | Présence claire et crédible",
  metaDescription: "Site internet pour assistante virtuelle : packages clairs, preuves, contact pro. Une page à envoyer hors LinkedIn et Facebook.",
  updatedAt: "2026-10-09",
  h1: "Des packages lisibles, hors du fil LinkedIn",
  h1Highlight: "packages lisibles",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour assistante virtuelle clarifie vos forfaits, votre cadre de collaboration et le prochain pas, hors algorithme.",
  intro: "Vous avez construit une activité d'assistance au fil des missions. Mais lorsqu'une TPE découvre votre nom après LinkedIn ou Facebook, que comprend-elle de vos packages et de la façon de travailler avec vous ?",
  douleur: "Packages flous, crédibilité fragile face aux clientes B2B ou TPE, acquisition trop dépendante des réseaux.",
  whyTitle: "Pourquoi une assistante virtuelle a besoin d'une page packages claire",
  whyHighlight: "packages claire",
  whyPoints: [
   {
    t: "Packages scannables",
    d: "Forfaits, livrables, modalités : structure nette."
   },
   {
    t: "Crédibilité B2B / TPE",
    d: "Preuves et cadre de collaboration au bon endroit."
   },
   {
    t: "Contact professionnel",
    d: "Formulaire, calendrier ou email selon votre process."
   },
   {
    t: "Votre temps se facture",
    d: "Je gère le site ; vous gardez l'énergie pour les missions."
   }
  ],
  sections: [
   {
    h2: "Mes clientes me trouvent déjà sur LinkedIn ou Facebook : à quoi sert un site ?",
    body: "LinkedIn et Facebook génèrent des conversations. Ils ne vous donnent pas une page d'offre contrôlée, hors fil, que vous envoyez après un premier appel.\n\nLa décideuse veut un lien à transmettre, pas une capture de publication. Les réseaux restent le filet ; le site porte la conversion et le référentiel de vos packages."
   },
   {
    h2: "Comment présenter vos packages d'assistante sans noyer la lectrice ?",
    body: "Une assistante virtuelle vend un cadre de collaboration, pas une liste de tâches. Je structure la page autour du public, des packages, de l'onboarding et des preuves.\n\nMieux vaut trois forfaits nommés avec livrables visibles que dix intitulés flous. Un seul prochain pas. Vous évitez le site « à propos de moi » qui ne dit pas ce que vous livrez."
   },
   {
    h2: "Et si vos forfaits évoluent encore dans six mois ?",
    body: "Les packages s'affinent souvent après quelques mois. Ce n'est pas une raison de rester sans site.\n\nJe construis une structure souple : blocs d'offre que je reformule par email. Vous n'attendez pas le catalogue définitif pour être joignable."
   },
   {
    h2: "Comment relier votre site à LinkedIn, Facebook et votre signature mail ?",
    body: "Signature mail, mise en avant LinkedIn, bio Facebook et proposition PDF pointent vers la même URL. Une prospecte retrouve les preuves sur le site le soir même.\n\nCréer un site pour assistante indépendante, c'est aussi donner une maison commune à tous vos points de contact."
   },
   {
    h2: "Que change concrètement une page packages lisible ?",
    body: "Une page claire réduit les appels de qualification floue. La cliente arrive déjà alignée sur le forfait et le format de collaboration.\n\nVous préparez mieux le premier entretien. Vous facturez votre temps d'assistance, pas celui passé à réexpliquer les bases de vos packages."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour assistante virtuelle",
  priceTitle: "Les formules pour une assistante virtuelle",
  recommendedPlanId: "launch",
  relatedBesoinSlug: "site-vitrine-independante",
  relatedBesoinLabel: "site vitrine d'indépendante",
  closing: "Si vous voulez une page digne de vos missions d'assistante, écrivez-moi : je clarifie avec vous vos packages et le parcours de contact.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Un site est-il utile si mes clientes me trouvent déjà sur LinkedIn ?",
    answer: "Les réseaux génèrent de la visibilité. Le site porte packages, preuves et contact hors algorithme. C'est la référence stable après un premier échange."
   },
   {
    question: "Puis-je présenter plusieurs packages ?",
    answer: "Oui. Je priorise la clarté : mieux vaut trois forfaits nets que dix flous."
   },
   {
    question: "Combien coûte un site web pour assistante virtuelle ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/independant.jpg",
  imageAlt: "Présence en ligne pour assistante virtuelle indépendante"
 },
 {
  slug: "therapeute",
  label: "Thérapeute",
  keyword: "site web pour thérapeute",
  metier: "thérapeute",
  metierPlural: "thérapeutes",
  title: "Site web pour thérapeute | Cadre clair et crédible",
  metaDescription: "Site web pour thérapeute : cadre clinique, éthique, prise de contact. Distinct d'une page sophrologie. Présence sobre et rassurante.",
  updatedAt: "2026-10-09",
  h1: "Une présence sobre pour votre cabinet",
  h1Highlight: "présence sobre",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour thérapeute pose votre cadre (public, approches, limites), sans promesse de résultat ni ton commercial.",
  intro: "Vous avez construit une pratique d'accompagnement au fil des séances et d'un cadre éthique précis. Mais lorsqu'une personne découvre votre nom après une recommandation ou sur un annuaire, que comprend-elle réellement de votre travail ?",
  douleur: "Présence limitée à Doctolib, ou pages trop commerciales qui ne collent pas à votre éthique.",
  whyTitle: "Pourquoi une thérapeute a besoin d'un site aligné avec son éthique",
  whyHighlight: "éthique",
  whyPoints: [
   {
    t: "Le ton compte autant que le design",
    d: "Rassurer sans promettre de miracle : un site de cabinet, pas une page de vente."
   },
   {
    t: "Cadre explicite",
    d: "Public, modalités, approches, limites : la clarté crée la confiance."
   },
   {
    t: "Discrétion et sobriété",
    d: "Formulaire simple, infos utiles, pas de gadgets."
   },
   {
    t: "Vous êtes déjà saturée",
    d: "Pas de bricolage technique : vous validez, je livre et je maintiens."
   }
  ],
  sections: [
   {
    h2: "Doctolib remplace-t-il vraiment un site pour thérapeute ?",
    body: "Doctolib aide à la prise de rendez-vous et à la visibilité locale. Il ne raconte pas votre pratique, vos limites ni le déroulé d'une première séance.\n\nUne personne hésitante lit souvent plusieurs profils avant d'écrire ; un site pose le cadre avec votre ton. Doctolib reste un canal. Le site est votre vitrine éthique, hors logique d'annuaire."
   },
   {
    h2: "Comment parler de votre pratique sans promettre de résultats ?",
    body: "Le marketing agressif casse la confiance dans les métiers d'accompagnement. J'écris autour du cadre : pour qui vous recevez, comment se déroule une séance, quelles approches vous utilisez, sans garantie de guérison.\n\nPour une thérapeute, je reste sur votre langage professionnel. La page sophrologue traite un autre intent ; la page naturopathe un troisième. Une URL = un métier."
   },
   {
    h2: "Un site peut-il rester discret et conforme à votre éthique ?",
    body: "Oui, et c'est souvent la condition pour que vous vous sentiez à l'aise de le partager. Je pars de votre brief : ton, limites, mentions, absence de promesses.\n\nPas de formulations vendeuses. Vous validez chaque phrase sensible avant mise en ligne. Le site reflète votre cabinet."
   },
   {
    h2: "Comment articuler site, Doctolib et Instagram ?",
    body: "Instagram humanise ; Doctolib facilite le créneau ; le site explique la pratique en profondeur. Bio, fiche et signature renvoient vers la même URL de cadre.\n\nUne personne qui vous découvre sur Instagram lit le déroulé de séance sur le site avant de réserver. Vous réduisez les questions répétitives en message."
   },
   {
    h2: "Que se passe-t-il quand vous modifiez tarifs ou modalités ?",
    body: "Les cabinets ajustent horaires, tarifs et formats plusieurs fois par an. Vous m'envoyez la modification ; je mets à jour sous 24 à 72 h.\n\nVous n'ouvrez pas un outil entre deux séances. Les formules Kopio sont sur la page tarifs ; ici, l'essentiel est une présence qui suit le rythme réel du cabinet."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour thérapeute",
  priceTitle: "Les formules pour une thérapeute",
  recommendedPlanId: "launch",
  relatedBesoinSlug: "site-avec-reservation-en-ligne",
  relatedBesoinLabel: "site avec réservation en ligne",
  closing: "Si vous voulez un site aligné avec votre cadre thérapeutique, écrivez-moi : je pars de votre pratique et de votre parcours de contact.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Doctolib remplace-t-il un site ?",
    answer: "Doctolib aide à la prise de rendez-vous. Un site explique votre pratique et vous différencie. Les deux se complètent lorsque le lien du site apparaît sur votre fiche."
   },
   {
    question: "Le site peut-il rester discret et éthique ?",
    answer: "Oui. J'évite le marketing agressif. Le brief part de votre cadre professionnel et du ton que vous assumerez devant vos patientes."
   },
   {
    question: "Combien coûte un site web pour thérapeute ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/yoga.jpg",
  imageAlt: "Présence en ligne sobre pour thérapeute"
 },
 {
  slug: "sophrologue",
  label: "Sophrologue",
  keyword: "site web pour sophrologue",
  metier: "sophrologue",
  metierPlural: "sophrologues",
  title: "Site web pour sophrologue | Cadre clair et crédible",
  metaDescription: "Création de site pour sophrologue : déroulé de séance, distinction avec le coaching, réservation sobre. Intent distinct d'une page thérapeute.",
  updatedAt: "2026-10-09",
  h1: "Une page dédiée à votre accompagnement",
  h1Highlight: "page dédiée",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour sophrologue explique le déroulé de séance, distingue la pratique du coaching, et rend le prochain pas clair.",
  intro: "Vous avez construit une pratique de sophrologie au fil des séances. Mais lorsqu'une personne cherche du soutien pour le stress ou le sommeil, que comprend-elle de votre cadre, distinct d'une thérapie ou d'un coaching ?",
  douleur: "Cadre de séance peu clair en ligne, confusion fréquente avec le coaching, besoin de sérieux sans marketing agressif.",
  whyTitle: "Pourquoi une sophrologue a besoin d'une page dédiée",
  whyHighlight: "page dédiée",
  whyPoints: [
   {
    t: "Votre pratique devient lisible",
    d: "Déroulé, exercices, public : un cadre clair."
   },
   {
    t: "La distinction compte",
    d: "Sophrologie ≠ coaching : les limites sont posées."
   },
   {
    t: "Réservation sobre",
    d: "Un prochain pas simple, sans discours vendeur."
   },
   {
    t: "Présence qui évolue",
    d: "Ateliers et formats collectifs ajoutés au fil de l'eau."
   }
  ],
  sections: [
   {
    h2: "Pourquoi une sophrologue a besoin d'une page dédiée, pas d'une page thérapeute générique ?",
    body: "L'intention de recherche n'est pas la même. Ici, on parle stress, sommeil, respiration, déroulé de séance — pas cadre clinique thérapeutique.\n\nColler le même discours sur deux métiers proches crée de la confusion pour la lectrice et pour Google. Une URL dédiée protège votre positionnement."
   },
   {
    h2: "Comment expliquer la sophrologie sans la confondre avec le coaching ?",
    body: "La confusion est fréquente. Je structure le site autour de ce que vous faites concrètement en séance, pour qui, et ce que vous n'accompagnez pas.\n\nDes exemples d'exercices ou de formats aident sans transformer le site en cours en ligne. La clarté rassure davantage que les promesses."
   },
   {
    h2: "Comment montrer exercices et formats sans transformer le site en cours en ligne ?",
    body: "L'objectif n'est pas de tout enseigner gratuitement. C'est de faire comprendre le type de travail, le rythme des séances et le prochain pas.\n\nQuelques illustrations précises suffisent. Le reste se vit en séance. Le site ouvre la porte ; il ne remplace pas votre accompagnement."
   },
   {
    h2: "Comment articuler Instagram, agenda et site pour une sophrologue ?",
    body: "Instagram humanise. L'agenda facilite le créneau. Le site porte le cadre de la sophrologie.\n\nBio et publications renvoient vers la même URL. Une personne qui vous découvre le soir peut lire le déroulé avant de réserver."
   },
   {
    h2: "Que faire quand vous lancez un atelier collectif ou un format entreprise ?",
    body: "Les formats évoluent. Vous m'envoyez les éléments ; je mets à jour sous 24 à 72 h.\n\nVous n'avez pas à reconstruire le site à chaque nouveauté. Les formules Kopio sont sur la page tarifs ; ici, l'essentiel est une présence qui suit votre pratique."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour sophrologue",
  priceTitle: "Les formules pour une sophrologue",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "site-avec-reservation-en-ligne",
  relatedBesoinLabel: "site avec réservation en ligne",
  closing: "Si vous voulez un site qui pose clairement votre pratique de sophrologie, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "En quoi un site sophrologue diffère-t-il d'une page coach ou thérapeute ?",
    answer: "L'intention de recherche n'est pas la même. Ici : stress, sommeil, respiration, déroulé. Une URL dédiée évite un discours générique."
   },
   {
    question: "Faut-il tout expliquer en ligne ?",
    answer: "Non. Assez pour comprendre le cadre et oser le premier contact. Le travail se poursuit en séance."
   },
   {
    question: "Combien coûte un site web pour sophrologue ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/pulse.jpg",
  imageAlt: "Présence en ligne pour sophrologue"
 },
 {
  slug: "naturopathe",
  label: "Naturopathe",
  keyword: "site web pour naturopathe",
  metier: "naturopathe",
  metierPlural: "naturopathes",
  title: "Site web pour naturopathe | Présence claire et responsable",
  metaDescription: "Site web pour naturopathe : bilans, suivi, cadre responsable. Distinction nette avec d'autres approches. Présence claire et crédible.",
  updatedAt: "2026-10-09",
  h1: "Un site qui porte vos bilans et votre cadre",
  h1Highlight: "vos bilans",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour naturopathe clarifie bilans, suivi et limites, avec un ton responsable et un prochain pas lisible.",
  intro: "Vous avez construit une pratique de naturopathie au fil des bilans et des accompagnements. Mais lorsqu'une personne cherche une approche d'hygiène de vie, que comprend-elle de votre cadre et de vos limites ?",
  douleur: "Message flou entre bien-être générique et pratique structurée, difficile à distinguer en ligne.",
  whyTitle: "Pourquoi une naturopathe a besoin d'un cadre clairement posé en ligne",
  whyHighlight: "clairement posé",
  whyPoints: [
   {
    t: "Votre approche devient lisible",
    d: "Bilans, suivi, public : un cadre clair."
   },
   {
    t: "Les limites rassurent",
    d: "Ce que vous accompagnez, et ce que vous orientez ailleurs."
   },
   {
    t: "Ton responsable",
    d: "Pas de promesses excessives ; de la précision."
   },
   {
    t: "Présence qui évolue",
    d: "Ateliers et formats ajoutés au fil de l'eau."
   }
  ],
  sections: [
   {
    h2: "Puis-je communiquer en ligne sans me mettre en risque ?",
    body: "Oui, à condition de rester précise et responsable. Le site explique votre cadre, vos modalités et vos limites, sans promesses excessives.\n\nJe m'appuie sur votre brief professionnel. Vous validez les formulations sensibles. La clarté protège autant qu'elle rassure."
   },
   {
    h2: "Comment expliquer bilans et suivi sans promettre de guérison ?",
    body: "Je structure autour du déroulé : premier échange, bilan, suivi, ce qui est attendu de part et d'autre.\n\nLa personne comprend le type d'accompagnement avant d'écrire. Vous filtrez les attentes irréalistes. Le site ouvre un dialogue honnête."
   },
   {
    h2: "Comment distinguer naturopathie et médecines conventionnelles sur le site ?",
    body: "La distinction évite la confusion et les malentendus. Vous expliquez votre place dans le parcours de la personne, sans opposition caricaturale.\n\nUne URL dédiée (distincte d'une page thérapeute ou sophrologue) protège aussi l'intent de recherche."
   },
   {
    h2: "Comment articuler site, annuaires et réseaux pour une naturopathe ?",
    body: "Les annuaires et Instagram ouvrent des portes. Le site porte le cadre complet et le contact.\n\nChaque fiche et chaque bio renvoient vers la même URL. Quand un annuaire change, votre référence reste stable."
   },
   {
    h2: "Que se passe-t-il quand vous modifiez tarifs, formats ou zone d'exercice ?",
    body: "Vous m'envoyez la modification ; je mets à jour sous 24 à 72 h. Vous restez concentrée sur vos consultations.\n\nLes formules Kopio sont sur la page tarifs. Ici, l'essentiel est une présence alignée dans la durée."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour naturopathe",
  priceTitle: "Les formules pour une naturopathe",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "site-avec-reservation-en-ligne",
  relatedBesoinLabel: "site avec réservation en ligne",
  closing: "Si vous voulez un site qui pose clairement votre pratique de naturopathie, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "En quoi un site naturopathe diffère-t-il d'autres pages bien-être ?",
    answer: "L'intent porte sur bilans, hygiène de vie et cadre de suivi. Une URL dédiée évite un discours générique collé à d'autres métiers."
   },
   {
    question: "Comment rester responsable dans les textes ?",
    answer: "On part de votre cadre professionnel, on évite les promesses excessives, vous validez chaque formulation sensible."
   },
   {
    question: "Combien coûte un site web pour naturopathe ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/pulse.jpg",
  imageAlt: "Présence en ligne pour naturopathe"
 },
 {
  slug: "formatrice",
  label: "Formatrice",
  keyword: "site web pour formatrice",
  metier: "formatrice",
  metierPlural: "formatrices",
  title: "Site web pour formatrice | Programmes clairs et crédibles",
  metaDescription: "Site web pour formatrice : présenter programmes, formats et contact. Une vitrine stable hors LinkedIn et PDF.",
  updatedAt: "2026-10-09",
  h1: "Rendre vos formations compréhensibles en ligne",
  h1Highlight: "compréhensibles en ligne",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour formatrice rend vos programmes lisibles, partageables et joignables — hors fil LinkedIn et pièces jointes fragiles.",
  intro: "Vous avez construit une activité de formation au fil des programmes. Mais lorsqu'une structure découvre votre nom, que peut-elle transmettre : un catalogue clair, ou un PDF difficile à lire sur mobile ?",
  douleur: "Programmes difficiles à lire en ligne, demandes floues, dépendance aux réseaux ou au bouche-à-oreille seul.",
  whyTitle: "Pourquoi une formatrice a besoin d'une vitrine de programmes",
  whyHighlight: "vitrine de programmes",
  whyPoints: [
   {
    t: "Programmes lisibles",
    d: "Public, objectifs, formats : une structure nette."
   },
   {
    t: "Preuve avant slogan",
    d: "Parcours et retours visibles."
   },
   {
    t: "URL stable",
    d: "Pour LinkedIn, email et catalogues."
   },
   {
    t: "Catalogue vivant",
    d: "Sessions et tarifs mis à jour sans tout reconstruire."
   }
  ],
  sections: [
   {
    h2: "Pourquoi un PDF et Instagram ne suffisent pas pour vendre une formation ?",
    body: "Un PDF se perd et se lit mal sur téléphone. Instagram inspire mais ne détaille pas objectifs, formats et modalités.\n\nLe site porte le catalogue que l'on peut transmettre en interne. Vous contrôlez le récit hors algorithme et hors pièce jointe fragile."
   },
   {
    h2: "Comment présenter plusieurs programmes sans noyer la lectrice ?",
    body: "Trop d'intitulés flous créent des demandes hors cible. Je structure chaque programme : pour qui, objectifs, format, prochain pas.\n\nMieux vaut trois offres nettes que dix pages confuses. La lectrice se situe avant de vous écrire."
   },
   {
    h2: "Faut-il une plateforme de formation avant d'avoir un site vitrine ?",
    body: "Pas toujours. Beaucoup de formatrices ont d'abord besoin d'une vitrine claire pour générer des demandes, avant d'industrialiser le parcours pédagogique en ligne.\n\nOn pose la présence et le contact ; les outils plus lourds viennent quand le volume le justifie."
   },
   {
    h2: "Comment votre site relie LinkedIn, email et catalogues OPCO ?",
    body: "Signature mail, LinkedIn et documents de proposition pointent vers la même URL. Une décideuse retrouve le détail des programmes sans version contradictoire.\n\nLes canaux apportent la découverte ; le site porte la référence."
   },
   {
    h2: "Que se passe-t-il quand vous ajoutez une session ou changez un tarif ?",
    body: "Vous m'envoyez les éléments ; je mets à jour sous 24 à 72 h. Vous ne vous formez pas à un outil entre deux sessions.\n\nLes formules Kopio sont sur la page tarifs. Ici, l'essentiel est une vitrine qui suit votre catalogue."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour formatrice",
  priceTitle: "Les formules pour une formatrice",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "creer-son-site-sans-competences-techniques",
  relatedBesoinLabel: "créer son site sans compétences techniques",
  closing: "Si vous voulez une vitrine claire pour vos programmes, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "LinkedIn suffit-il pour une formatrice ?",
    answer: "Il génère de la visibilité. Le site porte programmes, preuves et contact hors fil. C'est la référence à transmettre."
   },
   {
    question: "Faut-il une plateforme e-learning dès le départ ?",
    answer: "Pas forcément. Une vitrine claire peut suffire pour démarrer ; on industrialise ensuite si besoin."
   },
   {
    question: "Combien coûte un site web pour formatrice ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/independant.jpg",
  imageAlt: "Présence en ligne pour formatrice indépendante"
 },
 {
  slug: "creatrice",
  label: "Créatrice",
  keyword: "site web pour créatrice",
  metier: "créatrice",
  metierPlural: "créatrices",
  title: "Site web pour créatrice | Univers de marque clair",
  metaDescription: "Site web pour créatrice et marque artisanale : univers, process, précommande. Exemple Madeleine Fragrance.",
  updatedAt: "2026-10-09",
  h1: "Un site à la hauteur de votre univers",
  h1Highlight: "votre univers",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour créatrice pose l'univers de votre marque, le process et l'acte de commande — hors algorithme Instagram.",
  intro: "Vous avez construit une marque au fil des pièces et d'un univers bien à vous. Mais lorsqu'une personne découvre votre nom après Instagram, que comprend-elle de votre process, de vos délais et de la façon de commander ?",
  douleur: "Feed Instagram fort, mais aucune vitrine stable pour précommandes, presse ou collabs.",
  whyTitle: "Pourquoi une créatrice a besoin d'une maison de marque",
  whyHighlight: "maison de marque",
  whyPoints: [
   {
    t: "L'univers est le produit",
    d: "Typographie et photos prolongent la marque hors du fil."
   },
   {
    t: "Le process rassure",
    d: "Sur-mesure, délais et matières expliqués clairement."
   },
   {
    t: "Une URL stable",
    d: "Pour presse, collabs et Google."
   },
   {
    t: "Vous êtes déjà en production",
    d: "Je gère le digital pendant que vous créez."
   }
  ],
  sections: [
   {
    h2: "Pourquoi Instagram ne suffit pas pour une marque créative ?",
    body: "Instagram montre le travail en cours ; il ne remplace pas une vitrine que vous contrôlez. L'algorithme cache les publications ; la presse demande une URL stable.\n\nLe site porte l'univers, le process et la précommande. Instagram reste l'attraction ; le site devient la maison de la marque."
   },
   {
    h2: "Comment raconter le sur-mesure sans noyer la cliente ?",
    body: "Le sur-mesure intimide si les étapes restent floues. Je structure le process : brief, création, délais, livraison, ce qui est inclus.\n\nLa cliente comprend où elle met les pieds avant d'écrire. Vous recevez des demandes plus précises et passez moins de temps à réexpliquer les bases en messages."
   },
   {
    h2: "Faut-il une boutique complète avant d'avoir un site de marque ?",
    body: "Pas toujours. Beaucoup de créatrices n'ont pas encore le volume pour absorber une boutique lourde. Une vitrine avec précommande ou demande de devis valide la demande et pose l'univers.\n\nQuand le volume est là, on peut enrichir le parcours sans perdre l'identité construite."
   },
   {
    h2: "Comment votre site travaille avec Instagram, la presse et les marketplaces ?",
    body: "Bio Instagram, dossier de presse et fiches marketplace renvoient vers la même URL de marque. Une journaliste trouve l'histoire sans fouiller vos stories.\n\nLes plateformes restent des canaux ; le site est la source officielle."
   },
   {
    h2: "Que se passe-t-il quand vous lancez une nouvelle collection ?",
    body: "Vous m'envoyez textes et visuels ; je mets à jour sous 24 à 72 h. Vous ne reconstruisez pas une boutique entière à chaque lancement.\n\nLes formules sont sur la page tarifs. Ici, l'essentiel est une maison de marque qui suit vos drops."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour créatrice",
  priceTitle: "Les formules pour une créatrice",
  caseStudyId: "madeleine-fragrance",
  caseStudyHeading: "Exemple concret : Madeleine Fragrance",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "boutique-en-ligne-petite-entreprise",
  relatedBesoinLabel: "boutique en ligne",
  closing: "Si vous voulez une vitrine à la hauteur de votre univers, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Puis-je ouvrir une boutique en ligne ?",
    answer: "Vitrine et précommandes d'abord. Boutique complète (panier, paiement) sur devis quand le volume le justifie."
   },
   {
    question: "Avez-vous un exemple de site pour créatrice ?",
    answer: "Oui : Madeleine Fragrance, une vitrine de marque pensée pour raconter l'univers et convertir en précommande."
   },
   {
    question: "Combien coûte un site web pour créatrice ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/madeleine.jpg",
  imageAlt: "Madeleine Fragrance : vitrine de marque créatrice"
 },
 {
  slug: "estheticienne",
  label: "Esthéticienne",
  keyword: "site web pour esthéticienne",
  metier: "esthéticienne",
  metierPlural: "esthéticiennes",
  title: "Site web pour esthéticienne | Carte de soins claire",
  metaDescription: "Site web pour esthéticienne / institut : soins, tarifs, réservation. Une présence locale claire hors Instagram.",
  updatedAt: "2026-10-09",
  h1: "Votre institut, lisible avant le premier rendez-vous",
  h1Highlight: "lisible",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour esthéticienne rend votre carte de soins lisible et la réservation simple — hors fil Instagram.",
  intro: "Vous avez construit un institut ou une pratique esthétique au fil des soins. Mais lorsqu'une cliente cherche un soin près de chez elle, que comprend-elle de votre carte et de la façon de réserver ?",
  douleur: "Carte de soins difficile à lire en ligne, réservation confuse, dépendance aux réseaux.",
  whyTitle: "Pourquoi une esthéticienne a besoin d'une carte de soins claire en ligne",
  whyHighlight: "carte de soins",
  whyPoints: [
   {
    t: "Carte lisible",
    d: "Soins, durées, pour qui : une structure nette."
   },
   {
    t: "Réservation claire",
    d: "Prochain pas visible sans allers-retours."
   },
   {
    t: "Présence locale",
    d: "Google et Instagram aboutissent sur une URL stable."
   },
   {
    t: "Carte vivante",
    d: "Nouveaux soins ajoutés sans tout recommencer."
   }
  ],
  sections: [
   {
    h2: "Pourquoi Instagram ne remplace pas un site pour votre institut ?",
    body: "Instagram montre l'ambiance ; il ne remplace pas une carte de soins stable ni un parcours de réservation clair.\n\nLes publications disparaissent. Une URL reste trouvable et partageable. Instagram attire ; le site porte l'offre et le rendez-vous."
   },
   {
    h2: "Comment présenter soins et tarifs sans perdre la cliente ?",
    body: "Une carte trop longue ou trop vague crée de l'hésitation. Je structure par familles de soins, durées et prochain pas.\n\nLa cliente se situe avant d'écrire. Vous réduisez les messages « vous faites aussi… ? »."
   },
   {
    h2: "Et si vous n'avez pas encore assez de photos avant / après ?",
    body: "Ce n'est pas un frein pour démarrer. On part de vos meilleurs visuels et d'une carte claire ; la galerie s'enrichit ensuite.\n\nAttendre le portfolio parfait retarde la réservation utile dès maintenant."
   },
   {
    h2: "Comment relier site, Instagram et Google Business ?",
    body: "Bio Instagram et fiche Google pointent vers la même URL. Une cliente qui vous cherche localement retrouve soins et réservation sans friction.\n\nChaque canal a un rôle ; le site est la référence de l'institut."
   },
   {
    h2: "Que change une réservation en ligne pour votre planning ?",
    body: "Moins d'allers-retours, moins d'oublis, des demandes déjà cadrées. Vous gardez la main sur vos disponibilités.\n\nLes formules Kopio sont sur la page tarifs. Ici, l'essentiel est un parcours pensé pour votre quotidien d'institut."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour esthéticienne",
  priceTitle: "Les formules pour une esthéticienne",
  caseStudyId: "coiffure-luna",
  caseStudyHeading: "Exemple concret : Luna",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "site-avec-reservation-en-ligne",
  relatedBesoinLabel: "site avec réservation en ligne",
  closing: "Si vous voulez une carte de soins claire et une réservation simple, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Instagram suffit-il pour une esthéticienne ?",
    answer: "Il montre le quotidien. Le site porte la carte de soins et la réservation hors fil."
   },
   {
    question: "Faut-il beaucoup de photos avant / après ?",
    answer: "Non pour démarrer. On priorise une carte claire ; la galerie s'enrichit ensuite."
   },
   {
    question: "Combien coûte un site web pour esthéticienne ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/coiffure.jpg",
  imageAlt: "Présence en ligne pour esthéticienne / institut"
 },
 {
  slug: "photographe",
  label: "Photographe",
  keyword: "site web pour photographe",
  metier: "photographe",
  metierPlural: "photographes",
  title: "Site web pour photographe | Portfolio clair et crédible",
  metaDescription: "Site web pour photographe : portfolio stable, formules, devis. Hors Instagram et Behance.",
  updatedAt: "2026-10-09",
  h1: "Un portfolio qui laisse parler vos images",
  h1Highlight: "vos images",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour photographe porte votre portfolio, vos formules et un devis clair — hors algorithme Instagram.",
  intro: "Vous avez construit une pratique photographique au fil des séries. Mais lorsqu'une personne découvre votre nom après Instagram, que comprend-elle de vos formules et de la façon de demander un devis ?",
  douleur: "Travail fort sur Instagram, mais portfolio instable et formules difficiles à lire hors du fil.",
  whyTitle: "Pourquoi une photographe a besoin d'un portfolio qui lui appartient",
  whyHighlight: "lui appartient",
  whyPoints: [
   {
    t: "Portfolio maison",
    d: "Séries lisibles, hors algorithme."
   },
   {
    t: "Formules claires",
    d: "Ce qui est inclus, pour quel type de projet."
   },
   {
    t: "URL stable",
    d: "Pour devis, presse et recommandations."
   },
   {
    t: "Séries vivantes",
    d: "Nouveaux travaux ajoutés sans tout reconstruire."
   }
  ],
  sections: [
   {
    h2: "Pourquoi Instagram ou Behance ne remplacent pas un portfolio ?",
    body: "L'algorithme cache votre travail. Behance et Instagram restent des canaux de découverte ; ils ne remplacent pas une maison que vous contrôlez.\n\nLe site porte formules et devis. Vous partagez une URL stable, pas un fil qui disparaît."
   },
   {
    h2: "Comment éviter qu'une galerie trop lourde fasse fuir la cliente ?",
    body: "Trop d'images, trop lentes, trop peu de contexte. Je priorise des séries fortes, un rythme de lecture et un prochain pas clair.\n\nMieux vaut moins de photos bien présentées qu'une galerie qui fatigue."
   },
   {
    h2: "Est-ce trop tôt si vous n'avez que deux ou trois séries fortes ?",
    body: "Non. On part de vos meilleures séries et de formules lisibles ; le portfolio s'enrichit ensuite.\n\nAttendre l'archive complète retarde les devis utiles dès maintenant."
   },
   {
    h2: "Comment votre site relie Instagram, Pinterest et votre emailing ?",
    body: "Bio, épingles et signature mail pointent vers la même URL. Une prospecte retrouve le portfolio officiel sans version contradictoire.\n\nLes plateformes apportent la découverte ; le site porte la preuve et le devis."
   },
   {
    h2: "Que change un formulaire de devis qualifiant ?",
    body: "Vous recevez des demandes déjà cadrées : type de projet, date, budget approximatif. Vous préparez mieux le premier échange.\n\nLes formules Kopio sont sur la page tarifs. Ici, l'essentiel est un portfolio pensé pour convertir sans vous épuiser."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour photographe",
  priceTitle: "Les formules pour une photographe",
  caseStudyId: "photographe-iris",
  caseStudyHeading: "Exemple concret : Iris",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "site-vitrine-independante",
  relatedBesoinLabel: "site vitrine d'indépendante",
  closing: "Si vous voulez un portfolio clair qui génère des devis plus nets, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Instagram remplace-t-il un portfolio ?",
    answer: "Non. L'algorithme cache votre travail. Un site est stable et partageable. Instagram reste un canal de découverte."
   },
   {
    question: "Puis-je ajouter des séries plus tard ?",
    answer: "Oui. Vous m'envoyez la nouvelle série ; je mets à jour sous 24 à 72 h."
   },
   {
    question: "Combien coûte un site web pour photographe ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/photographe.jpg",
  imageAlt: "Portfolio web pour photographe indépendante"
 },
 {
  slug: "architecte-interieur",
  label: "Architecte d'intérieur",
  keyword: "site web pour architecte d'intérieur",
  metier: "architecte d'intérieur",
  metierPlural: "architectes d'intérieur",
  title: "Site web pour architecte d'intérieur | Portfolio éditorial",
  metaDescription: "Site web pour architecte d'intérieur : galerie projets, process, devis. Une vitrine éditoriale pour des demandes plus nettes.",
  updatedAt: "2026-10-09",
  h1: "Présenter vos projets sans noyer le client",
  h1Highlight: "vos projets",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour architecte d'intérieur met vos projets en valeur et prépare des demandes de devis déjà cadrées.",
  intro: "Vous avez construit une pratique d'architecture d'intérieur au fil des projets. Mais lorsqu'un maître d'ouvrage découvre votre nom, que comprend-il de votre style, de votre process et de la façon de demander un devis ?",
  douleur: "Portfolio trop générique ou PDF fragile : les projets ne ressortent pas, les demandes restent vagues.",
  whyTitle: "Pourquoi une architecte d'intérieur a besoin d'un portfolio éditorial",
  whyHighlight: "portfolio éditorial",
  whyPoints: [
   {
    t: "Chaque projet peut respirer",
    d: "Galerie claire, légendes, lecture éditoriale."
   },
   {
    t: "Le process rassure",
    d: "Étapes et collaboration explicites avant l'appel."
   },
   {
    t: "Le devis commence en ligne",
    d: "Formulaire qualifiant : surface, type, ville."
   },
   {
    t: "Vous êtes sur les chantiers",
    d: "Je maintiens le site pendant vos rendez-vous."
   }
  ],
  sections: [
   {
    h2: "Pourquoi un PDF de projets ne suffit plus ?",
    body: "Un PDF se perd, se compresse mal sur mobile et se met à jour difficilement. Un site éditorial montre chaque projet avec le rythme qu'il mérite.\n\nLe client potentiel comprend votre style avant d'écrire. Vous partagez une URL, pas une pièce jointe fragile."
   },
   {
    h2: "Comment rassurer un client sur un budget d'aménagement ?",
    body: "Les budgets demandent un cadre avant le premier appel. Je rends visibles les étapes de collaboration et ce que le formulaire doit collecter.\n\nLe client arrive déjà informé. Vous qualifiez mieux. Le site prépare un échange sérieux."
   },
   {
    h2: "Faut-il attendre d'avoir dix projets photographiés ?",
    body: "Attendre le portfolio parfait retarde des demandes déjà possibles. Je mets en avant vos projets les mieux documentés et je clarifie votre process.\n\nLa structure accueille de nouvelles études de cas ensuite. Le site grandit avec votre agence."
   },
   {
    h2: "Comment votre site relie Instagram, Houzz et votre réseau pro ?",
    body: "Bio Instagram, profils spécialisés et signature mail pointent vers la même URL. Un maître d'ouvrage retrouve le détail des projets sur le site.\n\nLes plateformes apportent la découverte ; le site porte la preuve et le devis."
   },
   {
    h2: "Que se passe-t-il quand vous livrez un nouveau projet ?",
    body: "Vous m'envoyez photos et légendes ; je mets à jour la galerie sous 24 à 72 h. Vous ne reconstruisez pas le site à chaque livraison.\n\nLes formules sont sur la page tarifs. Ici, l'essentiel est un portfolio qui suit vos chantiers."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour architecte d'intérieur",
  priceTitle: "Les formules pour une architecte d'intérieur",
  caseStudyId: "pulse",
  caseStudyHeading: "Exemple concret : PULSE",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "refonte-site-internet-entrepreneure",
  relatedBesoinLabel: "refonte de site",
  closing: "Si vous voulez un portfolio éditorial qui génère des demandes plus nettes, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Un PDF de projets suffit-il ?",
    answer: "Un PDF se perd et se lit mal sur mobile. Un site montre vos projets avec le rythme qu'ils méritent, en une URL partageable."
   },
   {
    question: "Puis-je ajouter des projets au fil de l'eau ?",
    answer: "Oui. Par email : mise à jour sous 24 à 72 h, sans refonte à chaque chantier."
   },
   {
    question: "Combien coûte un site web pour architecte d'intérieur ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/independant.jpg",
  imageAlt: "Présence en ligne pour architecte d'intérieur"
 },
 {
  slug: "wedding-planner",
  label: "Wedding planner",
  keyword: "site web pour wedding planner",
  metier: "wedding planner",
  metierPlural: "wedding planners",
  title: "Site web pour wedding planner | Univers et formules clairs",
  metaDescription: "Site web pour wedding planner : univers, formules day-of / partiel / full, devis. Pour des couples qui comparent.",
  updatedAt: "2026-10-09",
  h1: "Des formules mariage claires pour les couples",
  h1Highlight: "formules mariage",
  factChips: [
   "Création de site",
   "Positionnement",
   "Visibilité"
  ],
  tldr: "Un site pour wedding planner fait sentir votre univers, clarifie vos formules et rend la prise de contact évidente.",
  intro: "Vous avez construit une activité d'organisation de mariages au fil des couples. Mais lorsqu'un couple découvre votre nom après Instagram ou un annuaire, que comprend-il de vos formules et de la façon de vous écrire ?",
  douleur: "Beau feed Instagram, mais formules et process peu clairs pour des couples qui comparent.",
  whyTitle: "Pourquoi une wedding planner a besoin d'un site qui clarifie les formules",
  whyHighlight: "clarifie les formules",
  whyPoints: [
   {
    t: "L'émotion se design",
    d: "Le site prolonge l'expérience que vous vendez."
   },
   {
    t: "Les formules clarifient",
    d: "Day-of, partiel, full planning : le couple se situe."
   },
   {
    t: "Le calendrier se remplit tôt",
    d: "Devis avec date et lieu : vous qualifiez avant l'appel."
   },
   {
    t: "En saison, zéro temps web",
    d: "Je gère le site pendant que vous êtes sur les mariages."
   }
  ],
  sections: [
   {
    h2: "Pourquoi Instagram ne suffit pas pour signer un couple ?",
    body: "Instagram inspire ; il ne détaille pas formules, process et disponibilités. Les couples comparent plusieurs organisatrices et veulent une page à relire à deux.\n\nLe site porte votre univers, vos niveaux d'accompagnement et le formulaire de devis. Instagram reste l'émotion ; le site porte la décision."
   },
   {
    h2: "Comment présenter day-of, partiel et full planning sans confondre ?",
    body: "Des intitulés flous créent des appels hors budget. Je structure chaque formule : inclus, limites, pour quel type de mariage, prochain pas.\n\nLe couple se situe avant l'appel découverte. Vous préparez mieux le premier rendez-vous."
   },
   {
    h2: "Est-ce utile si votre agenda est déjà plein pour cette année ?",
    body: "Oui, parce que les couples réservent souvent 12 à 18 mois à l'avance. Un site à jour capture les demandes pour la suite pendant que vous êtes en pleine saison.\n\nOn peut indiquer clairement disponibilités ou liste d'attente. Le site travaille quand vous êtes sur un lieu de réception."
   },
   {
    h2: "Comment votre site relie Instagram, Pinterest et les annuaires mariage ?",
    body: "Bio Instagram, épingles Pinterest et fiches annuaires pointent vers la même URL. Un couple qui vous découvre sur un annuaire lit votre process sur le site.\n\nLes plateformes apportent la découverte ; le site porte la décision."
   },
   {
    h2: "Que se passe-t-il après la saison des mariages ?",
    body: "Vous ajoutez les plus beaux reportages, vous ajustez les formules, vous ouvrez les dates suivantes. Vous m'envoyez les éléments ; je mets à jour sous 24 à 72 h.\n\nVous ne vous formez pas à un outil après six mois intensifs. Les formules Kopio sont sur la page tarifs ; ici, l'essentiel est un site qui suit le rythme du métier."
   }
  ],
  includedTitle: "Ce qui est inclus dans un site Kopio pour wedding planner",
  priceTitle: "Les formules pour une wedding planner",
  recommendedPlanId: "pro",
  relatedBesoinSlug: "site-vitrine-independante",
  relatedBesoinLabel: "site vitrine d'indépendante",
  closing: "Si vous voulez un site qui fait sentir votre univers et clarifie vos formules, écrivez-moi.",
  ctaLabel: "En discuter avec Karelle",
  faqs: [
   {
    question: "Instagram suffit-il pour une wedding planner ?",
    answer: "Il inspire. Le site convertit : formules, process, contact, et reste trouvable sur Google."
   },
   {
    question: "Puis-je ajouter des mariages récents ?",
    answer: "Oui. Mises à jour par email sous 24 à 72 h, typiquement en intersaison."
   },
   {
    question: "Combien coûte un site web pour wedding planner ?",
    answer: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le détail et la propriété du site sont sur la page tarifs."
   },
   {
    question: "Pourrez-vous faire évoluer le site ensuite ?",
    answer: "Oui. Vous m'envoyez la modification par email ; je mets à jour sous 24 à 72 h. Aucun outil à apprendre. Les évolutions plus larges se discutent avant de toucher à la structure."
   }
  ],
  image: "/image/independant.jpg",
  imageAlt: "Présence en ligne pour wedding planner"
 }
];

export function getMetier(slug: string): MetierPage | undefined {
 return metiers.find((m) => m.slug === slug);
}
