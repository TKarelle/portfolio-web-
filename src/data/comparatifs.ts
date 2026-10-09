export interface ComparatifRow {
  label: string;
  kopio: string;
  other: string;
}

export interface ComparatifPageData {
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  /** lastmod QDF - bump à chaque réinjection */
  updatedAt?: string;
  h1: string;
  h1Highlight?: string;
  eyebrow?: string;
  tldr: string;
  /** Verdict tranché en une phrase (extrait IA) */
  verdict: string;
  intro: string;
  otherName: string;
  otherFairPoints: string[];
  kopioStrengths: string[];
  rows: ComparatifRow[];
  sections: { h2: string; highlight: string; body: string }[];
  faqs: { question: string; answer: string }[];
  closing: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  factChips?: string[];
}

export const COMPARATIF_BASE = "/comparatif";

export function comparatifPath(slug: string): string {
  return `${COMPARATIF_BASE}/${slug}`;
}

const CHIPS = ["Création de site", "Positionnement", "Visibilité"] as const;
const UPDATED = "2026-10-09";

export const comparatifs: ComparatifPageData[] = [
  {
    slug: "kopio-vs-wix",
    title: "Kopio vs Wix (2026) : que choisir pour une entrepreneuse ?",
    metaDescription:
      "Kopio vs Wix : comparatif honnête pour femmes entrepreneuses. Quand Wix gagne, quand Kopio gagne. Verdict clair en 2026.",
    keyword: "Kopio vs Wix",
    updatedAt: UPDATED,
    h1: "Wix ou Kopio : qui construit pour vous ?",
    h1Highlight: "qui construit pour vous",
    tldr:
      "Wix gagne si vous voulez construire et modifier votre site vous-même, avec un éditeur mature et un marché d'apps large. Kopio gagne si vous voulez un site pro tenu pour vous : design personnalisé, hébergement, mises à jour par email. Verdict : contrôle total = Wix ; déléguer sans second métier = Kopio.",
    verdict:
      "Choisissez Wix pour le contrôle total en autonomie ; choisissez Kopio pour un site tenu pour vous en abonnement.",
    intro:
      "Les deux peuvent aboutir à un beau site. La vraie question : qui fait le travail au quotidien, vous, ou quelqu'un d'autre ?",
    otherName: "Wix",
    otherFairPoints: [
      "Éditeur visuel mature et modèles nombreux",
      "Vous modifiez tout vous-même, quand vous voulez",
      "Marché d'apps riche (réservation, boutique, formulaires)",
      "Abonnement souvent moins cher si vous ne comptez pas votre temps",
    ],
    kopioStrengths: [
      "Design 100 % personnalisé, pas un modèle retouché",
      "Mises à jour par email sous 24 à 72 h, zéro outil à apprendre",
      "Une interlocutrice humaine, pas un centre d'aide",
      "Pensé pour entrepreneuses : offre, preuves, prise de RDV",
    ],
    rows: [
      { label: "Qui construit le site ?", kopio: "Kopio pour vous", other: "Vous-même" },
      { label: "Prix indicatif", kopio: "Dès 89 €/mois", other: "Abo + votre temps" },
      { label: "Délai de mise en ligne", kopio: "21 jours", other: "Variable (souvent plus long)" },
      { label: "Modifications", kopio: "Par email 24 à 72 h", other: "Vous-même dans l'éditeur" },
      { label: "Design", kopio: "Sur-mesure", other: "Modèle + personnalisation" },
      { label: "Hébergement", kopio: "Inclus", other: "Inclus dans l'abo Wix" },
      { label: "Support", kopio: "1 personne dédiée", other: "Centre d'aide / chat" },
      { label: "Idéal si", kopio: "Vous déléguez", other: "Vous aimez tout faire vous-même" },
    ],
    sections: [
      {
        h2: "Quand Wix est objectivement le bon choix ?",
        highlight: "bon choix",
        body: `Wix est le bon outil quand vous voulez garder la main sur chaque pixel et chaque app. Le mécanisme est simple : vous ouvrez l'éditeur, vous testez, vous publiez. Vous n'attendez personne. Beaucoup d'entrepreneuses s'y retrouvent parce qu'elles aiment itérer le soir, brancher une app de réservation ou une boutique, et tout ajuster sans devis.

En pratique, Wix gagne dès que le plaisir (ou la nécessité) de construire en autonomie dépasse le coût de votre temps. Si vous avez déjà un bon œil design, si vous lisez la doc sans vous bloquer, et si vous acceptez de gérer hébergement, apps et SEO vous-même, l'abonnement Wix reste souvent moins cher en argent que de déléguer. Kopio n'essaie pas de concurrencer ça : ce n'est pas le même métier.`,
      },
      {
        h2: "Quand Kopio est le bon choix face à Wix ?",
        highlight: "face à Wix",
        body: `Kopio devient le bon choix quand votre métier vous prend déjà assez d'énergie pour que le site ne doive pas devenir un second job. Le mécanisme : vous briefez, vous validez ; je conçois, je mets en ligne, je maintiens. Les modifications passent par email sous 24 à 72 h. Vous ne vous formez pas à un éditeur.

Concrètement, c'est le cas dès qu'un projet Wix a été abandonné après quelques soirs, ou qu'un site correct reste figé faute de temps. Les formules 89 €/mois (24 mois), 139 €/mois (12 mois) ou 179 €/mois (6 mois) posent un site tenu, pas un chantier permanent. Si vous voulez déléguer design, technique et suivi, Kopio répond mieux que Wix.`,
      },
      {
        h2: "Comment fonctionne vraiment Wix au quotidien ?",
        highlight: "Wix",
        body: `Wix vous donne un éditeur puissant et un marché d'apps large. Vous choisissez un modèle, vous le personnalisez, vous branchez des apps (réservation, paiement, formulaires). L'hébergement est dans l'abonnement. Le support passe surtout par un centre d'aide et un chat. C'est mature, documenté, et adapté à qui aime construire en autonomie.

Le coût réel n'est pas seulement le forfait mensuel. C'est aussi le temps passé à chercher le bon réglage, à comprendre pourquoi une page charge mal sur mobile, ou à refaire un rendu qui ressemble encore à dix autres sites du même modèle. Si vous comptez ce temps en euros (même à 30 €/h), la facture monte vite. Wix reste excellent pour l'autonomie. Il est moins adapté dès que vous voulez qu'une personne tienne le site à votre place.`,
      },
      {
        h2: "Comment fonctionne Kopio au quotidien face à un éditeur ?",
        highlight: "Kopio au quotidien",
        body: `Chez Kopio, le parcours est différent par construction. Vous démarrez par un brief et un appel de lancement. Je livre un design personnalisé (pas un modèle retouché), une structure pensée pour votre offre, et les bases SEO (balises, vitesse, indexation). Hébergement, domaine, SSL et sauvegardes sont inclus. Vous n'ouvrez pas d'éditeur.

Ensuite, le site vit avec vous : un refresh design tous les 12 mois, des mises à jour par email, une seule interlocutrice. Tarifs : 89 €/mois (24 mois), 139 €/mois (12 mois) ou 179 €/mois (6 mois), livraison sous 21 jours. Propriétaire à la fin de l'engagement ou en rachat anticipé. Vous payez pour un résultat tenu, pas pour un outil à apprendre.`,
      },
      {
        h2: "Et le référencement Google dans les deux cas ?",
        highlight: "référencement",
        body: `Wix a progressé sur le SEO technique. Vous pouvez atteindre un bon niveau si vous structurez vos pages, rédigez des contenus utiles et suivez les recommandations de l'outil. Le mécanisme reste à votre charge : titres, maillage, vitesse, images, SEO local. Beaucoup de sites Wix restent invisibles faute de temps sur ces détails, pas faute de plateforme.

Chez Kopio, les bases SEO sont incluses dans chaque formule. L'engagement 12 ou 24 mois renforce le SEO local (utile si vous recevez en cabinet ou sur une zone précise). Je ne promets pas la première place Google en quinze jours : personne d'honnête ne le peut. Je livre une structure indexable, des balises propres et une base sur laquelle vos contenus peuvent travailler. Si vous voulez piloter le SEO vous-même semaine après semaine, Wix vous laisse ce contrôle. Si vous voulez que les fondations soient posées pour vous, Kopio le fait dans l'abonnement.`,
      },
      {
        h2: "Quel budget comparer vraiment entre Wix et Kopio ?",
        highlight: "budget",
        body: `Comparer le prix affiché de Wix au prix Kopio sans le temps, c'est comparer deux choses différentes. Wix : abonnement plateforme + apps éventuelles + votre temps de construction et de maintenance. Kopio : dès 89 €/mois, avec design, hébergement et mises à jour inclus selon le modèle.

Une entrepreneuse qui compte 20 à 40 heures pour monter un site correct en autonomie « économise » sur l'abonnement et « dépense » en soirées. Kopio lisse ça : 89, 139 ou 179 €/mois selon la durée, délais 21 jours, refresh annuel inclus. Ni Wix ni Kopio ne sont « meilleurs » en absolu. Ils répondent à des priorités opposées : autonomie maximale d'un côté, délégation complète de l'autre.`,
      },
      {
        h2: "Pouvez-vous passer de Wix à Kopio (ou l'inverse) sans tout perdre ?",
        highlight: "passer",
        body: `Oui, dans les deux sens, avec des nuances. Si vous avez un site Wix et que vous voulez déléguer, on ne casse pas votre ancien site pour le plaisir. On repart souvent d'un brief propre : votre offre, vos preuves, ce qui fonctionne déjà. Les textes et les photos utiles se réutilisent. Le domaine peut être pointé vers le nouveau site. Vous gardez la continuité pour vos visiteuses.

À la fin de votre engagement (6, 12 ou 24 mois), ou en rachat anticipé en soldant les mois restants, vous êtes propriétaire du site. Le domaine est à votre nom dès le premier jour. L'implication pratique : choisissez d'abord le mode de travail (vous-même ou délégué), pas une marque par défaut. Wix et Kopio sont des outils de trajectoires différentes ; changer reste possible quand votre priorité change.`,
      },
    ],
    faqs: [
      {
        question: "Kopio utilise-t-il Wix ?",
        answer:
          "Non. Je livre des sites sur-mesure, hébergés dans le cadre de l'abonnement, sans que vous ayez à gérer un éditeur.",
      },
      {
        question: "Puis-je devenir propriétaire de mon site Kopio ?",
        answer:
          "Oui : à la fin de votre engagement (6, 12 ou 24 mois), vous êtes propriétaire à 100 %. Un rachat anticipé est possible en soldant les mois restants. Le domaine est à votre nom dès le premier jour.",
      },
      {
        question: "Wix est-il moins cher que Kopio ?",
        answer:
          "Souvent en abonnement plateforme seul, oui. Dès que vous comptez votre temps de construction et de maintenance, l'écart se réduit ou s'inverse pour beaucoup d'entrepreneuses.",
      },
      {
        question: "Puis-je modifier mon site Kopio moi-même ?",
        answer:
          "Vous m'envoyez un email : je mets à jour sous 24 à 72 h. Pas d'éditeur à apprendre. Si vous voulez tout éditer vous-même au quotidien, Wix reste plus adapté.",
      },
    ],
    closing:
      "Si vous aimez construire en autonomie, restez sur Wix. Si vous voulez un site pro tenu pour vous, dites-moi où vous en êtes : je vous dirai clairement si Kopio est le bon cadre.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/independant.jpg",
    imageAlt: "Comparatif Kopio vs Wix pour femmes entrepreneuses",
    factChips: [...CHIPS],
  },
  {
    slug: "kopio-vs-agence-web",
    title: "Kopio vs agence web : comparatif pour entrepreneuses (2026)",
    metaDescription:
      "Kopio vs agence web : prix, délais, relation. Comparatif honnête pour entrepreneuses entre abonnement mensuel et agence.",
    keyword: "Kopio vs agence web",
    updatedAt: UPDATED,
    h1: "Agence web ou Kopio : quelle échelle ?",
    h1Highlight: "quelle échelle",
    tldr:
      "Une agence web est justifiée sur les projets complexes, multi-équipes ou à budget marketing large (souvent 2 000 à 8 000 € et plus). Kopio est adapté aux entrepreneuses qui veulent une vitrine ou un site de service clair, livré en 21 jours, avec une seule interlocutrice. Verdict : agence pour périmètre large ; Kopio pour un site efficace sans usine à gaz.",
    verdict:
      "Agence pour projets complexes et budgets 2 000 €+ ; Kopio pour un site d'entrepreneuse rapide, clair et en abonnement.",
    intro:
      "Les agences ne sont pas « mauvaises ». Elles sont souvent surdimensionnées pour une indépendante qui a besoin d'une vitrine claire et joignable.",
    otherName: "Agence web",
    otherFairPoints: [
      "Équipes spécialisées (UX, SEO, dev, chef de projet)",
      "Capacité à gérer apps, refontes groupées, gouvernance",
      "Process et livrables formalisés",
      "Pertinent si budget marketing large et plusieurs validateurs",
    ],
    kopioStrengths: [
      "Prix accessible dès 89 €/mois selon engagement",
      "Délais courts : 21 jours",
      "Une seule interlocutrice, pas de téléphone arabe",
      "Mises à jour continues incluses, pas un devis par virgule",
    ],
    rows: [
      { label: "Budget typique", kopio: "89 à 179 €/mois", other: "2 000 à 8 000 €+" },
      { label: "Délai", kopio: "21 jours", other: "1 à 3 mois" },
      { label: "Interlocuteurs", kopio: "1 personne", other: "Équipe / chef de projet" },
      { label: "Modifications après livraison", kopio: "Incluses (email)", other: "Souvent en tickets payants" },
      { label: "Refresh design", kopio: "Tous les 12 mois", other: "Nouveau devis fréquent" },
      { label: "Idéal pour", kopio: "Indépendante / TPE", other: "PME / projets complexes" },
    ],
    sections: [
      {
        h2: "Quand une agence web est vraiment justifiée ?",
        highlight: "justifiée",
        body: `Une agence web a du sens quand le projet dépasse une vitrine d'indépendante. Le mécanisme : plusieurs métiers (UX, design, développement, SEO, chef de projet) se coordonnent autour d'un cahier des charges, de sprints et de validateurs. Vous payez l'organisation autant que les pixels.

Concrètement, c'est pertinent si vous avez une équipe marketing, un parcours multi-pages avec suivi avancé, une app métier, une refonte de plusieurs sites, ou une gouvernance (associés, COMEX, juridique) qui exige des livrables formalisés. Budgets typiques en 2026 pour une vitrine « agence » : souvent 2 000 à 8 000 €, parfois plus. Si votre besoin est une présence claire pour recevoir des demandes, ce dispositif est souvent trop lourd. Si votre besoin est un produit digital complexe, l'agence (ou un studio spécialisé) reste le bon outil.`,
      },
      {
        h2: "Quand Kopio est le bon choix face à une agence ?",
        highlight: "face à une agence",
        body: `Kopio est le bon choix quand votre besoin réel est simple à énoncer : être crédible, claire, joignable, avec un site qui travaille sans chantier de trois mois. Le mécanisme : une seule interlocutrice (moi), un brief, une livraison en 21 jours, un abonnement qui inclut hébergement et mises à jour.

Beaucoup d'entrepreneuses reçoivent des devis agence à 4 000 ou 6 000 € pour une vitrine, puis découvrent que chaque modification après livraison passe en tickets. Chez Kopio, 89 €/mois (24 mois), 139 €/mois (12 mois) ou 179 €/mois (6 mois) couvrent le cas standard d'une indépendante. Le « Besoin précis » (boutique, outil métier) part sur devis, sans prétendre remplacer une agence sur un SI complexe. Vous choisissez Kopio pour la proximité et le périmètre adapté, pas pour battre une agence sur tous les terrains.`,
      },
      {
        h2: "Comment se compare le prix agence et abonnement ?",
        highlight: "prix",
        body: `Le prix agence se lit souvent en devis unique : design + intégration + parfois SEO de lancement. L'hébergement, la maintenance et les évolutions sont fréquemment à part. Le prix Kopio se lit en abonnement (89, 139 ou 179 €/mois selon engagement), avec hébergement, domaine, SSL, sauvegardes et mises à jour par email inclus selon l'offre.

Sur 24 mois à 89 €/mois, Kopio revient à un ordre de grandeur clairement inférieur à un devis agence vitrine classique, tout en incluant le suivi. Une agence peut rester moins « chère » si vous comparez uniquement un forfait ponctuel très bas et que vous ignorez la maintenance. En pratique, pour une entrepreneuse solo, l'abonnement aligne le paiement sur l'usage. Pour une PME avec budget marketing structuré, le devis agence peut être le bon cadre contractuel.`,
      },
      {
        h2: "Quels délais et quel mode de relation attendre face à une agence ?",
        highlight: "délais",
        body: `Une agence sérieuse annonce souvent 1 à 3 mois : lancement, wireframes, maquettes, intégration, recette, allers-retours entre plusieurs personnes. C'est cohérent avec un process multi-métiers. Vous gagnez en formalisme ; vous perdez en vitesse et parfois en proximité.

Chez Kopio, le délai annoncé est 21 jours, si les contenus arrivent à temps. Vous parlez toujours à la même personne. Pas de téléphone arabe entre commercial, chef de projet et freelance. L'implication pratique : si vous avez besoin de gouvernance et de comptes-rendus pour un comité, l'agence structure mieux ça. Si vous voulez avancer vite avec une décisionnaire claire (vous) et une exécutante claire (moi), Kopio retire de la lourdeur inutile.`,
      },
      {
        h2: "Que se passe-t-il après la mise en ligne avec une agence ou Kopio ?",
        highlight: "après la mise en ligne",
        body: `C'est souvent là que les modèles divergent le plus. En agence, la livraison clôture fréquemment le forfait initial. Ensuite : tickets, devis d'évolution, parfois un contrat de maintenance facturé à part. Un refresh design un an plus tard = nouveau projet.

Chez Kopio, les modifications courantes passent par email sous 24 à 72 h, dans le cadre de l'abonnement. Un refresh design est inclus tous les 12 mois. Vous n'êtes pas obligée de rouvrir un devis pour ajuster une offre ou un témoignage. Sur un gros produit digital, l'agence (avec une maintenance claire) reste pertinente. Sur une vitrine d'entrepreneuse, l'abonnement évite le site figé six mois après le lancement faute de budget pour chaque virgule.`,
      },
      {
        h2: "Kopio remplace-t-il une agence sur tous les projets ?",
        highlight: "remplace",
        body: `Non. Je suis claire là-dessus. Kopio ne remplace pas une agence sur une application métier lourde, une refonte multi-marques, un e-commerce complexe avec ERP, ou un dispositif avec cinq validateurs et une revue juridique à chaque sprint. Ces projets demandent des équipes et une gouvernance que le modèle solo n'offre pas.

Kopio remplace une agence quand le brief réel est : « j'ai besoin d'un site pro pour mon activité d'indépendante, rapidement, avec quelqu'un qui suit derrière ». Modèles 6, 12 ou 24 mois ; Besoin précis sur devis pour les cas hors grille. L'honnêteté du comparatif : choisir Kopio pour économiser sur un projet qui mérite une agence, c'est se tromper d'outil. Choisir une agence pour une page simple de coach, c'est souvent se tromper d'échelle.`,
      },
    ],
    faqs: [
      {
        question: "Kopio est-il une agence ?",
        answer:
          "Non : modèle en solo (Karelle), spécialisé femmes entrepreneuses. Moins de couches, plus de proximité.",
      },
      {
        question: "Puis-je avoir un site sur-mesure chez Kopio ?",
        answer:
          "Oui : design personnalisé dès 89 €/mois. Le « Besoin précis » couvre boutique ou outil métier sur devis.",
      },
      {
        question: "Une agence est-elle toujours plus qualitative ?",
        answer:
          "Pas automatiquement. Une bonne agence excelle sur la complexité et la gouvernance. Sur une vitrine claire, la qualité dépend surtout du brief, du design et du suivi, pas du nombre de logos sur le site de l'agence.",
      },
      {
        question: "Que se passe-t-il si mon projet grandit ?",
        answer:
          "On peut évoluer vers 12 mois ou Besoin précis. Si vous dépassez clairement mon périmètre (app lourde, multi-équipes), je vous le dirai et vous pourrez basculer vers une agence adaptée.",
      },
    ],
    closing:
      "Si votre projet est large et multi-équipes, parlez à une agence. Si vous voulez un site d'entrepreneuse clair, tenu, sans usine à gaz, écrivez-moi : je vous dirai si Kopio est le bon cadre.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/independant.jpg",
    imageAlt: "Comparatif Kopio vs agence web",
    factChips: [...CHIPS],
  },
  {
    slug: "combien-coute-site-internet-entrepreneure-2026",
    title: "Combien coûte un site internet pour entrepreneuse en 2026 ?",
    metaDescription:
      "Prix d'un site internet pour entrepreneuse en 2026 : autonomie, freelance, abonnement, agence. Fourchettes réelles et ce qui est inclus.",
    keyword: "combien coûte site internet entrepreneuse 2026",
    updatedAt: UPDATED,
    h1: "Combien coûte un site d'entrepreneuse en 2026 ?",
    h1Highlight: "en 2026",
    tldr:
      "Panorama 2026 des budgets site pour entrepreneuse : autonomie, freelance, agence, abonnement. Fourchettes, inclus, pièges. Cette page compare les modèles de coût ; l'article « site vitrine » sur le blog détaille le format vitrine seul.",
    verdict:
      "Budget réaliste 2026 pour une entrepreneuse : dès 89 €/mois en abonnement tenu pour vous, ou 2 000 €+ en agence ; en autonomie, le « gratuit » ignore votre temps.",
    intro:
      "Ici vous comparez les modèles de prix (qui paie quoi, qui maintient). Pour le format vitrine en tant que tel, lisez l'article dédié sur le blog. La question n'est pas seulement « combien » : c'est « quoi inclus, en combien de temps, et qui s'occupe des mises à jour ».",
    otherName: "Autres options",
    otherFairPoints: [
      "Outils en autonomie : entrée de gamme si vous avez le temps",
      "Freelance généraliste : variable selon expérience",
      "Agence : pertinent sur gros périmètre",
      "IA seule : rapide, souvent générique et fragile sur la durée",
    ],
    kopioStrengths: [
      "89 € (24 mois) / 139 € (12 mois) / 179 € (6 mois)",
      "Hébergement, domaine, SSL, sauvegardes inclus",
      "Mises à jour par email incluses",
      "Prix affichés, pas de devis opaque pour une vitrine",
    ],
    rows: [
      { label: "Prix d'entrée", kopio: "Dès 89 €/mois", other: "Variable selon l'option" },
      { label: "Modèle 12 mois", kopio: "139 €/mois", other: "Souvent plus cher" },
      { label: "Rachat anticipé", kopio: "Solde des mois restants", other: "Selon prestataire" },
      { label: "Agence vitrine", kopio: "Pas nécessaire", other: "2 000 à 8 000 €+" },
      { label: "Délai typique", kopio: "21 jours", other: "Variable / 1 à 3 mois" },
    ],
    sections: [
      {
        h2: "Quelles sont les fourchettes de prix réelles en 2026 ?",
        highlight: "fourchettes",
        body: `En 2026, le marché se découpe en quatre grands ordres de grandeur. En autonomie (Wix, WordPress.com, Framer, etc.) : souvent 10 à 40 €/mois de plateforme, parfois plus avec apps. Freelance : typiquement 800 à 3 000 € pour une vitrine, selon expérience et périmètre. Agence : souvent 2 000 à 8 000 € et plus pour une vitrine « processée ». Abonnement type Kopio : 89 à 179 €/mois avec maintenance incluse.

Ces fourchettes ne disent pas la même chose. Un site à 15 €/mois en autonomie n'inclut pas le design sur-mesure ni le suivi humain. Un devis à 5 000 € peut inclure UX, rédaction et SEO de lancement, ou seulement de l'intégration. Pour vous situer : si vous êtes entrepreneuse solo avec une offre de service claire, vous comparez surtout autonomie + votre temps, freelance ponctuel, ou abonnement tenu. Les extrêmes bas et haut existent ; le milieu du marché pour une vitrine utile se joue entre « votre temps » et « quelques milliers d'euros / un abonnement mensuel ».`,
      },
      {
        h2: "Que doit vraiment inclure le prix d'un site ?",
        highlight: "inclure",
        body: `Un prix de site digne de ce nom couvre plus que « une jolie page ». Design adapté à votre activité, aide à la rédaction ou contenus structurés, mobile, bases SEO (structure, balises, vitesse, indexation), conformité RGPD, hébergement, nom de domaine, certificat SSL, sauvegardes, et un plan pour les mises à jour. Sans ça, vous payez une mise en ligne, pas un outil durable.

Beaucoup de devis « site à 500 € » oublient l'hébergement, le suivi ou le mobile. Le coût revient ensuite en extras. Chez Kopio, ces briques sont dans tous les modèles : design personnalisé, aide à la rédaction, SEO de base, RGPD, hébergement, domaine, sécurité, modifications par email. L'implication pratique : quand vous comparez deux prix, alignez d'abord la liste de ce qui est inclus. Sinon vous comparez une coque vide à un site tenu.`,
      },
      {
        h2: "Combien coûte vraiment de faire son site en autonomie ?",
        highlight: "autonomie",
        body: `Faire votre site vous-même n'est pas gratuit. Vous payez l'abonnement plateforme, parfois des apps (réservation, formulaires, boutique), et surtout votre temps. Le mécanisme : 20 à 40 heures ne sont pas rares pour une première version correcte, plus la maintenance quand une app casse ou qu'il faut mettre à jour une offre.

Si vous valorisez votre heure à 40 €, 30 heures valent 1 200 €, avant même l'abonnement annuel. Pour certaines entrepreneuses, c'est un investissement qu'elles assument avec plaisir : elles aiment construire. Pour d'autres, c'est du temps volé aux clientes. Wix et les éditeurs en autonomie restent excellents dans le premier cas. Ils ne sont « pas chers » que si vous ignorez le second. En autonomie, vous gagnez en contrôle ; vous payez en soirées.`,
      },
      {
        h2: "Abonnement : quelle durée choisir pour votre site ?",
        highlight: "durée",
        body: `L'abonnement lisse la trésorerie et lie le prestataire au suivi. Vous payez chaque mois ; les mises à jour et l'hébergement restent dans le cadre. Le rachat anticipé convient si vous préférez solder les mois restants. L'abonnement reste le modèle Kopio.

Chez Kopio : 89 €/mois (24 mois), 139 €/mois (12 mois) ou 179 €/mois (6 mois). Engagement 6, 12 ou 24 mois, propriétaire à la fin de l'engagement ; rachat anticipé possible. Agence et freelance facturent surtout en forfait ponctuel, puis maintenance ou tickets. L'implication : choisissez selon votre trésorerie et selon qui gère la suite. Un forfait sans maintenance vous laisse seule après la livraison.`,
      },
      {
        h2: "Quel budget pour une coach, thérapeute ou créatrice ?",
        highlight: "budget",
        body: `Pour démarrer une activité de service (coach, thérapeute, consultante, créatrice avec vitrine), dès 89 €/mois selon engagement (6, 12 ou 24 mois) : jusqu'à 5 pages, offre, preuves, contact, réservation avancée, livraison sous 21 jours. Vous choisissez la durée surtout pour le mensuel et le niveau de suivi SEO / analytics.

Boutique ou outil métier : hors grille standard, sur devis (Besoin précis). Une agence à 4 000 € peut être justifiée si vous avez un parcours marketing large ou plusieurs parties prenantes. Pour une indépendante qui veut exister en ligne sans usine à gaz, le budget réaliste 2026 se situe plutôt sur l'abonnement tenu ou un freelance clair sur le périmètre. Adaptez le budget à la complexité de l'offre, pas à la peur de « paraître pas assez pro ».`,
      },
      {
        h2: "Comment Kopio se situe face à Wix, freelance et agence ?",
        highlight: "situe",
        body: `Face à Wix / éditeurs en autonomie : Kopio est plus cher en abonnement affiché, moins cher si vous comptez votre temps, et différent en modèle (délégation vs autonomie). Face au freelance : Kopio affiche des prix fixes pour les cas standards, inclut la maintenance dans l'abonnement, et livre en 21 jours ; un bon freelance peut être excellent au forfait ponctuel, avec un suivi variable selon le contrat.

Face à l'agence : Kopio est en dessous sur le ticket d'entrée et plus serré sur le périmètre. L'agence gagne sur la complexité et la gouvernance. Le tableau de comparaison du site résume ça sans caricature : prix dès 89 €/mois vs abo éditeur vs 2 000 €+ ; délais 21 jours vs vous-même vs 1 à 3 mois ; mises à jour 24 à 72 h par mail vs vous-même vs tickets. Vous ne cherchez pas « le moins cher absolu ». Vous cherchez le coût aligné sur qui fait le travail après le jour J.`,
      },
      {
        h2: "Quels pièges de prix éviter en 2026 ?",
        highlight: "pièges",
        body: `Premier piège : le prix d'appel sans hébergement ni suivi. Deuxième : le site « livré » sans plan de mises à jour. Troisième : comparer uniquement le mensuel d'un éditeur au mensuel d'un abonnement tenu, sans le temps. Quatrième : croire qu'un site généré uniquement à l'IA à bas coût restera solide six mois plus tard sans reprise humaine.

Je ne dénigre pas un site existant : beaucoup d'entrepreneuses ont une base utile à faire évoluer, pas à jeter. Le piège, c'est de payer deux fois (outil + corrections tardives + refonte urgente) faute d'avoir aligné périmètre et modèle. Lisez les inclus, demandez qui intervient après la mise en ligne, et fixez un budget en fonction de votre temps disponible. En 2026, la transparence des prix (comme sur la page tarifs Kopio) reste le filtre le plus fiable contre les devis flous.`,
      },
    ],
    faqs: [
      {
        question: "Pourquoi voit-on des sites à 15 €/mois ?",
        answer:
          "Souvent un éditeur nu, sans accompagnement, avec un modèle générique. Le coût réel inclut votre temps, et parfois un résultat peu structuré faute de cadrage de l'offre.",
      },
      {
        question: "Les prix Kopio sont-ils TTC ?",
        answer:
          "Les prix affichés sont TTC indicatifs. Le détail est confirmé avant démarrage.",
      },
      {
        question: "Y a-t-il des frais de mise en service ?",
        answer:
          "Non. Pas de frais de mise en service. Vous validez la maquette avant la mise en ligne, puis l'abonnement démarre.",
      },
      {
        question: "Puis-je payer en une fois ?",
        answer:
          "Non : le modèle est l'abonnement (6, 12 ou 24 mois). Un rachat anticipé est possible en soldant les mois restants.",
      },
    ],
    closing:
      "Vous avez une fourchette en tête et une idée de qui doit gérer la suite. Si vous voulez un site tenu, dites-moi votre activité : je vous confirme la formule adaptée.",
    ctaLabel: "Faire le point ensemble",
    image: "/image/blog-prix.jpg",
    imageAlt: "Prix d'un site internet pour entrepreneuse en 2026",
    factChips: [...CHIPS],
  },
];

export function getComparatif(slug: string): ComparatifPageData | undefined {
  return comparatifs.find((c) => c.slug === slug);
}
