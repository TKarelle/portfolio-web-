export interface BesoinSection {
  h2: string;
  body: string;
}

export interface BesoinPageData {
  slug: string;
  /** Libellé navigation / footer / maillage (pas le fragment H1) */
  label: string;
  title: string;
  metaDescription: string;
  keyword: string;
  /** lastmod QDF - bump à chaque réinjection */
  updatedAt?: string;
  h1: string;
  h1Highlight: string;
  /** Label éditorial au-dessus du H1 (sinon date updatedAt) */
  eyebrow?: string;
  /** Résumé extractible 2-3 phrases */
  tldr: string;
  intro: string;
  sections: BesoinSection[];
  problems: string[];
  solutions: string[];
  recommendedPlanId: "launch" | "pro" | "sur-mesure";
  closing: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  /** Chips hero éditoriales (sans prix si fourni) */
  factChips?: string[];
}

export const BESOIN_BASE = "/besoin";

export function besoinPath(slug: string): string {
  return `${BESOIN_BASE}/${slug}`;
}

const CHIPS = ["Création de site", "Positionnement", "Visibilité"] as const;
const UPDATED = "2026-10-09";

export const besoins: BesoinPageData[] = [
  {
    slug: "creer-son-site-sans-competences-techniques",
    label: "Créer son site sans tech",
    title: "Créer son site sans compétences techniques : présence claire",
    metaDescription:
      "Créer son site sans compétences techniques : vous validez le fond, je livre design, hébergement et mises à jour. Présence claire sans second métier.",
    keyword: "créer son site sans compétences techniques",
    updatedAt: UPDATED,
    h1: "Un site pro sans apprendre la technique",
    h1Highlight: "sans apprendre la technique",
    tldr:
      "Vous pouvez avoir un site professionnel sans ouvrir d'éditeur. Vous racontez votre activité ; je livre le design, l'hébergement et les mises à jour. Votre énergie reste sur vos clientes.",
    intro:
      "Vous voulez une présence claire en ligne, pas un second métier. Concrètement, vous validez des étapes ; je construis et je maintiens le site pour que votre attention reste sur votre pratique.",
    sections: [
      {
        h2: "Pourquoi les outils « faites-le vous-même » finissent souvent en abandon ?",
        body: "Wix, Squarespace ou un thème WordPress demandent du temps que vous n'avez pas entre clientes et admin. Vous ouvrez l'éditeur le soir, vous bloquez sur une police ou un menu mobile, vous fermez.\n\nBeaucoup d'indépendantes abandonnent après deux ou trois sessions : le site reste un brouillon ou un compte payant inutilisé. Ce n'est pas un manque de motivation ; c'est un décalage entre l'outil et votre métier. Avec Kopio, vous n'apprenez pas l'éditeur : vous répondez à un brief, vous validez la maquette, vous m'envoyez les corrections par email.",
      },
      {
        h2: "Comment ça se passe si vous ne touchez à rien de technique ?",
        body: "Un appel de lancement fixe votre offre, votre cible et le ton. Je propose une structure et un design personnalisé ; vous validez avant la mise en ligne. Hébergement, domaine, SSL et bases SEO sont inclus dans l'abonnement.\n\nLes ajustements (tarif, bio, ajout d'un service) passent ensuite par un message. Pour vous, ça veut dire un site joignable sans veille technique ni courbe d'apprentissage cachée derrière le « gratuit » d'un outil en autonomie.",
      },
      {
        h2: "Que gérez-vous encore vous-même ?",
        body: "Vous restez responsable du contenu métier : photos, preuves, formulations d'offre. Je vous aide à les structurer si les mots bloquent. Les changements courants partent par email ; je mets à jour sous 24 à 72 h.\n\nVous ne gérez pas les extensions, les sauvegardes ni les mises à jour de sécurité. Votre énergie reste sur votre métier ; le site suit. À la fin de votre engagement (6, 12 ou 24 mois), ou en rachat anticipé en soldant les mois restants, vous êtes propriétaire du site ; le domaine est à votre nom dès le premier jour.",
      },
      {
        h2: "Quelle formule si vous démarrez sans compétences techniques ?",
        body: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Le SEO et le suivi analytics s'adaptent à la durée.\n\nVous choisissez selon votre trésorerie et votre horizon. Le détail et la propriété du site sont sur la page tarifs. Si vous hésitez, je vous propose de partir sur 24 mois et d'ajuster après les premiers mois, une fois le site en usage réel.",
      },
    ],
    problems: [
      "Éditeur abandonné après quelques soirs",
      "Peur de casser le site ou le référencement",
      "Résultat pro sans tout gérer seule",
    ],
    solutions: [
      "Brief + appel : je pars de votre activité",
      "Design personnalisé, mobile, RGPD inclus",
      "Mises à jour par email sous 24-72 h",
    ],
    recommendedPlanId: "launch",
    closing:
      "Si vous voulez un site sans apprendre un outil d'édition, écrivez-moi votre activité ; je vous dirai si le cadre Kopio colle.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/independant.jpg",
    imageAlt: "Femme entrepreneuse créant son site sans compétences techniques",
    factChips: [...CHIPS],
  },
  {
    slug: "site-vitrine-independante",
    label: "Site vitrine indépendante",
    title: "Site vitrine pour indépendante : offre claire et joignable",
    metaDescription:
      "Site vitrine pour indépendante : offre lisible, preuves, contact. Une URL stable hors Instagram et LinkedIn, tenue par Kopio.",
    keyword: "site vitrine indépendante",
    updatedAt: UPDATED,
    h1: "Une vitrine claire pour votre activité",
    h1Highlight: "vitrine claire",
    tldr:
      "Un site vitrine d'indépendante centralise votre offre, vos preuves et le prochain pas. Instagram attire ; la vitrine donne une adresse stable à envoyer après un premier contact.",
    intro:
      "Une vitrine sert à présenter votre offre et à être joignable. Instagram attire ; le site porte le détail et le contact quand quelqu'un cherche à vous prendre au sérieux après un premier échange.",
    sections: [
      {
        h2: "À quoi sert vraiment un site vitrine quand vous êtes indépendante ?",
        body: "Le site centralise ce qu'Instagram et LinkedIn dispersent : pour qui vous travaillez, comment vous procédez, comment vous contacter. Une prospecte qui hésite après un networking veut un lien unique, pas un fil de stories ni une bio de 150 caractères.\n\nEn pratique, envoyer votre site après un café de réseautage réduit les allers-retours « vous faites quoi exactement ? ». La vitrine fixe le cadre avant l'appel. Elle devient la page de référence que vous citez partout : signature email, carte de visite, message LinkedIn.",
      },
      {
        h2: "Pourquoi pas seulement une page de liens ou un profil LinkedIn ?",
        body: "Une page de liens liste des URL ; LinkedIn raconte un parcours souvent trop corporate pour une offre de service. Ni l'un ni l'autre ne structure positionnement, preuves et prochain pas sur une même page.\n\nUne vitrine Kopio mène à une action claire, formulaire ou email. Vous gardez les réseaux pour la découverte ; le site porte l'offre stable. Ce n'est pas l'un ou l'autre : c'est la complémentarité.",
      },
      {
        h2: "Que contient une vitrine utile pour une indépendante ?",
        body: "Positionnement, services, quelques preuves (avis, cas, parcours), contact. Design personnalisé, mobile, bases SEO, mentions légales et hébergement inclus. Je construis autour de votre activité et de votre manière de parler.\n\nDélai typique : 21 jours après validation si les contenus arrivent à temps. Vous préparez textes et photos ; je livre une vitrine prête à envoyer. Les mises à jour courantes passent ensuite par email sous 24 à 72 h. Vous investissez du temps sur le fond métier, pas sur l'apprentissage d'un éditeur.",
      },
      {
        h2: "Quand activer la réservation plutôt qu'une vitrine simple ?",
        body: "La réservation avancée peut être incluse selon la formule. Vous activez le parcours quand votre volume de demandes le justifie ; vous n'êtes pas obligée de brancher un agenda le premier jour.\n\nSurdimensionner le site au lancement crée de la complexité inutile. Vous pouvez aussi regarder les pages métier Kopio (coach, consultante, etc.) pour voir comment une vitrine se décline selon l'activité. Le critère reste votre flux réel de demandes.",
      },
    ],
    problems: [
      "Pas de page claire à envoyer après un échange",
      "Réseaux qui attirent sans cadrer assez",
      "Pas de temps pour bricoler un éditeur",
    ],
    solutions: [
      "Une ou plusieurs pages selon votre besoin",
      "Offre, preuves, contact structurés",
      "Livraison en 21 jours",
    ],
    recommendedPlanId: "launch",
    closing:
      "Une vitrine claire vous rend joignable sans usine à gaz. Si vous voulez lancer la vôtre, dites-moi ce que vous vendez et pour qui.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/independant.jpg",
    imageAlt: "Site vitrine pour femme indépendante",
    factChips: [...CHIPS],
  },
  {
    slug: "site-avec-reservation-en-ligne",
    label: "Réservation en ligne",
    title: "Site avec réservation en ligne : agenda sur votre marque",
    metaDescription:
      "Site avec réservation en ligne pour coachs, thérapeutes, esthéticiennes. Créneaux, confirmation, moins d'échanges en messages.",
    keyword: "site avec réservation en ligne",
    updatedAt: UPDATED,
    h1: "Vos clientes réservent sans vous relancer",
    h1Highlight: "sans vous relancer",
    tldr:
      "La réservation en ligne sur votre site lie l'offre et le créneau au même endroit. Moins d'échanges en messages, confirmation claire, parcours aligné à votre marque.",
    intro:
      "Les « vous avez un créneau ? » en messages coûtent du temps et de la clarté. Un parcours de réservation sur votre site réduit les allers-retours et pose votre offre avant le clic.",
    sections: [
      {
        h2: "Pourquoi un lien Calendly seul ne suffit pas toujours ?",
        body: "Calendly (ou équivalent) fonctionne pour poser un créneau. Le lien arrive souvent sans contexte : la prospecte n'a pas relu votre offre, vos tarifs ni votre méthode. Elle réserve parfois par réflexe, puis annule.\n\nLe site + réservation lie le récit et l'action au même endroit. Calendly peut rester l'outil derrière ; le site porte la confiance et le filtre. Vous ne remplacez pas l'outil : vous lui donnez un cadre.",
      },
      {
        h2: "Comment se déroule une réservation sur votre site ?",
        body: "La visiteuse lit l'offre, choisit un format, voit les créneaux disponibles et reçoit une confirmation. Vous définissez les règles (durée, préavis, types de séance) ; je branche le parcours sur votre agenda.\n\nLe design reste aligné à votre activité : pas un widget posé au hasard sur une page générique. Les ajustements de créneaux ou de textes passent par email sous 24 à 72 h. Vous standardisez un peu l'entrée pour gagner en prévisibilité.",
      },
      {
        h2: "Pour qui la réservation en ligne a le plus de sens ?",
        body: "Coachs en 1:1, praticiennes bien-être, esthéticiennes, consultantes au forfait horaire : dès que le volume de demandes crée des doubles messages ou des oublis.\n\nSi vous avez trois appels découverte par mois, un formulaire Contact peut suffire. Dès que vous jonglez avec Instagram, WhatsApp et l'email, un parcours sur site structure le flux. Vous acceptez de standardiser un peu pour arrêter de jouer les secrétaires à chaque demande.",
      },
      {
        h2: "Que se passe-t-il après la mise en ligne du parcours ?",
        body: "Vous m'écrivez pour ajuster créneaux, textes ou offres ; je mets à jour sous 24 à 72 h. Hébergement, SSL et bases SEO restent inclus. Le délai de livraison est de 21 jours après validation, contenus fournis.\n\nVous n'entretenez pas seule un outil de réservation ni un thème qui casse après une mise à jour. Si vous voulez comparer avec une vitrine seule, regardez aussi la page besoin site vitrine indépendante : le critère reste votre volume réel de demandes.",
      },
    ],
    problems: [
      "RDV gérés surtout en messages Instagram",
      "Doubles réservations et oublis",
      "Temps admin qui mange les séances",
    ],
    solutions: [
      "Parcours de réservation lisible sur mobile",
      "Agenda + confirmation sur votre marque",
      "Design aligné à votre activité",
    ],
    recommendedPlanId: "pro",
    closing:
      "Si vos clientes réservent déjà (ou devraient), décrivez-moi votre flux actuel ; je vous dirai si le parcours a du sens.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/pulse.jpg",
    imageAlt: "Site web avec réservation en ligne pour entrepreneuse",
    factChips: [...CHIPS],
  },
  {
    slug: "boutique-en-ligne-petite-entreprise",
    label: "Boutique en ligne",
    title: "Boutique en ligne petite entreprise : catalogue et paiement",
    metaDescription:
      "Boutique en ligne pour petite entreprise et créatrices : catalogue, panier, paiement. Formule Besoin précis Kopio sur devis.",
    keyword: "boutique en ligne petite entreprise",
    updatedAt: UPDATED,
    h1: "Une boutique à l'échelle de votre marque",
    h1Highlight: "à l'échelle",
    tldr:
      "Kopio conçoit des boutiques pour petites entreprises et créatrices : catalogue, panier, paiement, sur devis clair. Vous gardez votre marque et votre fichier clientes, sans porter toute la configuration seule.",
    intro:
      "Quand la vitrine ne suffit plus, vous vendez des produits ou des précommandes. La question : qui construit et tient la boutique, vous ou quelqu'un d'autre ?",
    sections: [
      {
        h2: "Shopify seule ou boutique accompagnée : quelle différence ?",
        body: "Shopify est un outil solide pour vendre en ligne. Le coût réel pour une petite structure, c'est la configuration : thème, parcours d'achat, emails transactionnels, TVA, photos, référencement produit. Beaucoup de créatrices ouvrent un compte, bloquent sur le paiement ou les frais de port, et reviennent aux messages.\n\nAvec Kopio en Besoin précis, je construis la boutique autour de votre marque et je reste l'interlocutrice pour les évolutions. Shopify (ou équivalent) peut rester le moteur technique ; vous n'êtes pas seule face au tableau de bord.",
      },
      {
        h2: "Que couvre une boutique Besoin précis chez Kopio ?",
        body: "Catalogue adapté à votre volume, panier, paiement en ligne, confirmations, design aligné à votre identité. Le périmètre se fixe au devis : nombre de produits, variantes, click-and-collect, ou simple précommande.\n\nPour vous, ça veut dire un canal de vente qui vit sans que chaque message soit une négociation. Les évolutions (nouvelle collection, page produit) se discutent ensuite dans le cadre du devis ou d'un avenant clair.",
      },
      {
        h2: "Pour qui une boutique sur devis a du sens ?",
        body: "Petites entreprises, créatrices, marques qui démarrent un catalogue limité et veulent rester maîtresses de leur image. Si vous vendez trois produits et que vous voulez tester, une page + lien de paiement peut suffire en attendant, voire une vitrine.\n\nDès que vous gérez stocks, variantes ou un volume régulier, la boutique dédiée évite les erreurs de commande. Vous acceptez un devis (pas un forfait fixe) parce que le périmètre varie trop d'un projet à l'autre. Le prix s'affiche après brief, pas en surprise en fin de chantier.",
      },
      {
        h2: "Comment se déroule un projet boutique ?",
        body: "Brief catalogue, parcours d'achat, maquette, intégration paiement, tests, mise en ligne. Vous fournissez photos et fiches produit ; je structure et je connecte. Après livraison, les évolutions passent par échange direct, selon les termes du devis.\n\nLe résultat : une boutique à votre échelle, pas une marketplace générique où votre marque disparaît. Si vous hésitez encore entre vitrine et boutique, écrivez-moi votre volume de ventes actuel : je vous dirai si Besoin précis est justifié.",
      },
    ],
    problems: [
      "Ventes encore surtout en messages ou sur les marchés",
      "Plateforme ouverte puis abandonnée faute de temps",
      "Envie de garder marque et fichier clientes",
    ],
    solutions: [
      "Boutique sur devis (catalogue, panier, commandes)",
      "Paiement en ligne et confirmations",
      "Identité visuelle alignée à votre marque",
    ],
    recommendedPlanId: "sur-mesure",
    closing:
      "Si vous voulez vendre en ligne sans porter toute la technique seule, Besoin précis part d'un devis clair. Envoyez-moi votre catalogue ou votre idée de gamme.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/madeleine.jpg",
    imageAlt: "Boutique en ligne pour créatrice et petite entreprise",
    factChips: [...CHIPS],
  },
  {
    slug: "refonte-site-internet-entrepreneure",
    label: "Refonte de site",
    title: "Refonte site internet entrepreneuse : aligner offre et parcours",
    metaDescription:
      "Refonte site internet pour entrepreneuse : offre clarifiée, parcours à jour, bases SEO. Votre activité a évolué ; le site peut la montrer avec précision.",
    keyword: "refonte site internet femme entrepreneuse",
    updatedAt: UPDATED,
    h1: "Un site à la hauteur de votre expertise",
    h1Highlight: "de votre expertise",
    tldr:
      "Une refonte clarifie votre offre, met à jour le design et le parcours, et renforce les bases SEO. Votre activité a évolué ; le site peut la montrer avec plus de précision.",
    intro:
      "Vous avez déjà un site. L'offre a changé, les photos vieillissent, le parcours mobile freine. Une refonte aligne l'outil sur ce que vous vendez aujourd'hui, sans jeter ce qui fonctionne encore.",
    sections: [
      {
        h2: "Quand une entrepreneuse a besoin d'une refonte de site ?",
        body: "Une refonte devient pertinente quand votre activité a changé plus vite que votre présence en ligne. Nouvelle offre, nouveau public, nouvelles preuves : le site d'origine ne porte plus la décision.\n\nLe signal est simple : vous n'envoyez plus votre URL après un networking, ou vous expliquez encore votre métier à l'oral parce que la page ne le fait pas. La refonte réécrit structure, textes et parcours pour coller à ce que vous vendez aujourd'hui.",
      },
      {
        h2: "Quand une refonte vaut mieux qu'un coup de peinture ?",
        body: "Changer une couleur ou une bannière ne règle pas une offre confuse ou un bouton contact invisible sur téléphone. La refonte reprend structure, textes et parcours.\n\nCe n'est pas un jugement sur le travail passé ; c'est un écart mesurable entre votre niveau actuel et ce que la page montre. Une refonte utile touche le fond autant que la forme.",
      },
      {
        h2: "Pourquoi ne pas tout reconstruire seule sur un nouvel outil ?",
        body: "Migrer vers Wix ou Webflow pour moderniser vous replace dans une courbe d'apprentissage et un risque d'abandon. Vous avez déjà investi du temps sur l'existant.\n\nAvec Kopio, je repars de votre positionnement actuel, je récupère ce qui reste utile (preuves, textes, domaine), et je livre un site tenu ensuite par email. Vous changez d'outil sans devenir cheffe de projet web.",
      },
      {
        h2: "Que change concrètement une refonte chez Kopio ?",
        body: "Design à jour, hiérarchie de l'offre, parcours contact ou réservation, bases SEO, mobile fluide, conformité. Les formules 6, 12 ou 24 mois s'adaptent selon que vous voulez surtout une vitrine rafraîchie ou un parcours plus travaillé.\n\nVous acceptez de retravailler les contenus avec moi, pas seulement de coller un habillage neuf sur d'anciens textes. Les mises à jour après livraison restent par email sous 24 à 72 h. Le détail est sur la page tarifs.",
      },
      {
        h2: "Que devient votre site actuel pendant la transition ?",
        body: "Je planifie la bascule : le site actuel reste en ligne jusqu'à la mise en service du nouveau. Domaine à votre nom, redirections si les URLs changent, pour limiter la perte de pages déjà indexées.\n\nVous validez la maquette avant la mise en ligne. La refonte n'est pas un saut dans le vide : c'est un remplacement contrôlé.",
      },
    ],
    problems: [
      "Activité évoluée, site qui ne la montre plus",
      "Offre à clarifier pour les visiteuses",
      "Parcours mobile et SEO à renforcer",
    ],
    solutions: [
      "Refonte visuelle et éditoriale sur-mesure",
      "Parcours contact ou réservation repensé",
      "Bases SEO, vitesse, RGPD",
    ],
    recommendedPlanId: "pro",
    closing:
      "Si votre site ne reflète plus votre expertise, envoyez-moi l'URL ; je vous réponds sur le périmètre adapté.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/sophie.jpg",
    imageAlt: "Refonte de site internet pour femme entrepreneuse",
    factChips: [...CHIPS],
  },
  {
    slug: "site-web-femme-qui-se-lance",
    label: "Femme qui se lance",
    title: "Création site web pour femmes qui se lancent",
    metaDescription:
      "Création de site web pour femmes qui se lancent : vitrine claire, sans compétences techniques. Vous posez l'activité ; je porte la technique.",
    keyword: "création site web femmes qui se lancent",
    updatedAt: UPDATED,
    h1: "Votre premier site, quand vous vous lancez",
    h1Highlight: "quand vous vous lancez",
    tldr:
      "Quand vous vous lancez, un site clair dit qui vous aidez et comment vous contacter. Design personnalisé, hébergement inclus, mises à jour par email. Vous posez l'activité ; je porte la technique.",
    intro:
      "Vous quittez le salariat, vous ouvrez une activité, vous avez une offre à rendre visible. Un site clair dit qui vous aidez et comment vous contacter, sans que vous appreniez un outil d'édition en parallèle du lancement.",
    sections: [
      {
        h2: "Pourquoi un site compte dès le lancement ?",
        body: "Au démarrage, vous n'avez pas encore dix ans de bouche-à-oreille. Les premières clientes vous jugent sur ce qu'elles trouvent en ligne : clarté de l'offre, sérieux du positionnement, facilité à écrire.\n\nInstagram montre que vous existez ; une URL stable explique le cadre. Concrètement, vous remplacez le PDF long ou le long message vocal par un lien. Le site devient la preuve minimale de sérieux pendant que vous construisez le reste.",
      },
      {
        h2: "Que change le fait de se lancer sans compétences techniques ?",
        body: "Le temps du lancement part déjà dans l'offre, la compta, le réseau et parfois la famille. Ajouter Wix ou WordPress en soirée produit souvent un chantier abandonné à mi-parcours.\n\nChez Kopio, vous validez un brief et une maquette ; je livre et je maintiens. La distinction avec « créer son site seule » : vous ne portez pas la courbe d'apprentissage en plus du lancement. Vous restez sur votre métier. Le site suit.",
      },
      {
        h2: "Quelle formule pour une femme qui se lance ?",
        body: "Trois durées, un même socle (jusqu'à 5 pages, réservation, atelier rédaction) : 89 €/mois sur 24 mois, 139 €/mois sur 12 mois, 179 €/mois sur 6 mois. Ce qui change selon la durée : le SEO et le suivi analytics.\n\nDans les faits, la majorité des femmes qui se lancent commencent sur 24 mois puis évoluent. Vous lissez la trésorerie pendant les premiers mois. Le détail des inclusions est sur la page tarifs.",
      },
      {
        h2: "En quoi est-ce différent d'une page de liens ou de LinkedIn ?",
        body: "Une page de liens concentre des URL ; LinkedIn dépend d'un fil d'actualité. Ni l'un ni l'autre ne pose une offre structurée, des preuves et un parcours mobile que vous contrôlez.\n\nUne page Kopio centralise le discours et vous donne une adresse à coller partout. Vous gardez les réseaux pour la découverte. Le site porte l'offre stable.",
      },
    ],
    problems: [
      "Offre prête, aucune URL claire à envoyer",
      "Temps déjà pris par le lancement, pas par un éditeur",
      "Apparaître crédible sans budget agence",
    ],
    solutions: [
      "Site en 21 jours",
      "Vous validez ; je livre et je maintiens par email",
      "Hébergement, domaine, bases SEO et RGPD inclus",
    ],
    recommendedPlanId: "launch",
    closing:
      "Si vous vous lancez et que vous voulez une vitrine tenue sans apprendre la technique, écrivez-moi où vous en êtes ; je vous réponds sur le périmètre.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/independant.jpg",
    imageAlt: "Femme qui se lance : création de site web professionnel",
    factChips: [...CHIPS],
  },
  {
    slug: "site-web-maman-freelance",
    label: "Maman freelance",
    title: "Webdesigner pour maman freelance : site tenu pour vous",
    metaDescription:
      "Webdesigner pour maman freelance : site clair, mises à jour par email, sans soirées sur un éditeur. Une interlocutrice, un abonnement Kopio.",
    keyword: "webdesigner pour maman freelance",
    updatedAt: UPDATED,
    h1: "Un site tenu entre clients et famille",
    h1Highlight: "entre clients et famille",
    tldr:
      "Pour une maman freelance, un site utile travaille sans demander des soirées d'éditeur. Design personnalisé, hébergement inclus, modifications par email sous 24 à 72 h. Vous facturez votre métier ; je gère le site.",
    intro:
      "Vous cumulez prestations, admin et charge familiale. Un site utile doit travailler sans vous demander des soirées d'éditeur. Je livre et je maintiens ; vous validez.",
    sections: [
      {
        h2: "Pourquoi une maman freelance a besoin d'une webdesigner dédiée ?",
        body: "Le freelancing exige déjà de produire, facturer et trouver des clients. La charge parentale réduit les plages pour apprendre un outil d'édition. Une webdesigner en abonnement retire le chantier technique du soir.\n\nEn pratique, vous envoyez un email pour une mise à jour de tarif ou de bio ; c'est en ligne sous 24 à 72 h. Vous ne cherchez pas une relation affective. Vous cherchez une exécution fiable dans un temps contraint.",
      },
      {
        h2: "En quoi est-ce différent d'un freelance « à la mission » ?",
        body: "Un freelance ponctuel livre puis disparaît souvent derrière un devis de correctifs. Vous vous retrouvez seule pour les petits changements. Chez Kopio, l'abonnement inclut les mises à jour par email et une interlocutrice unique : moi.\n\nVous payez la continuité, pas seulement le fichier initial. La distinction est le mécanisme de maintenance, pas un slogan.",
      },
      {
        h2: "Quelle formule si votre temps est déjà saturé ?",
        body: "89 €/mois (24 mois) convient si vous avez besoin d'une vitrine claire et d'un contact. 139 €/mois (12 mois) couvre plusieurs pages, SEO local et réservation avancée si vous vendez des créneaux.\n\nLe lancement reste court : un appel, puis des validations asynchrones. Vous n'enchaînez pas six ateliers. Vous recevez des propositions, vous validez, je produis. Préparer textes et photos en amont accélère la livraison sans monopoliser vos semaines.",
      },
      {
        h2: "Comment concilier site pro et emploi du temps parental ?",
        body: "Le site ne doit pas dépendre de vos créneaux libres le soir. Les modifications passent par email ; vous n'ouvrez pas d'éditeur. Les bases SEO et le mobile sont posés dès la livraison pour que votre URL travaille aussi quand vous êtes offline.\n\nConcrètement, vous investissez dans un outil qui tourne sans vous. Les réseaux restent optionnels pour la découverte ; le site porte l'offre stable.",
      },
    ],
    problems: [
      "Pas de plage pour apprendre un éditeur",
      "Site livré autrefois, plus personne pour les mises à jour",
      "URL pro malgré un agenda saturé",
    ],
    solutions: [
      "Abonnement avec mises à jour par email 24-72 h",
      "Une seule interlocutrice, pas de tickets d'agence",
      "Formule selon votre stade (détail sur tarifs)",
    ],
    recommendedPlanId: "launch",
    closing:
      "Si vous êtes maman freelance et que vous voulez un site tenu sans absorber la technique, écrivez-moi. Je vous dirai quelle durée colle à votre rythme.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/independant.jpg",
    imageAlt: "Maman freelance : site web professionnel tenu en abonnement",
    factChips: [...CHIPS],
  },
];

export function getBesoin(slug: string): BesoinPageData | undefined {
  return besoins.find((b) => b.slug === slug);
}
