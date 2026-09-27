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
  h1: string;
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
}

export const COMPARATIF_BASE = "/comparatif";

export function comparatifPath(slug: string): string {
  return `${COMPARATIF_BASE}/${slug}`;
}

export const comparatifs: ComparatifPageData[] = [
  {
    slug: "kopio-vs-wix",
    title: "Kopio vs Wix (2026) : que choisir pour une entrepreneuse ?",
    metaDescription:
      "Kopio vs Wix : comparatif honnête pour femmes entrepreneuses. Quand Wix gagne, quand Kopio gagne. Verdict clair en 2026.",
    keyword: "Kopio vs Wix",
    h1: "Kopio vs Wix : que choisir quand tu es entrepreneuse ?",
    tldr:
      "Wix gagne si tu veux construire et modifier ton site toi-même, avec un éditeur mature et un App Market large. Kopio gagne si tu veux un site pro tenu pour toi : design personnalisé, hébergement, mises à jour par email, dès 89 €/mois. Verdict : contrôle total = Wix ; déléguer sans second job = Kopio.",
    verdict:
      "Choisis Wix pour le contrôle total en autonomie ; choisis Kopio pour un site tenu pour toi en abonnement.",
    intro:
      "Les deux peuvent aboutir à un beau site. La vraie question : qui fait le travail au quotidien, toi, ou quelqu'un d'autre ?",
    otherName: "Wix",
    otherFairPoints: [
      "Éditeur visuel mature et templates nombreux",
      "Tu modifies tout toi-même, quand tu veux",
      "App Market riche (réservation, boutique, formulaires)",
      "Abonnement souvent moins cher si tu ne comptes pas ton temps",
    ],
    kopioStrengths: [
      "Design 100 % personnalisé, pas un template retouché",
      "Mises à jour par email sous 24 à 72 h, zéro outil à apprendre",
      "Une interlocutrice humaine, pas un centre d'aide",
      "Pensé pour entrepreneuses : offre, preuves, prise de RDV",
    ],
    rows: [
      { label: "Qui construit le site ?", kopio: "Kopio pour toi", other: "Toi-même" },
      { label: "Prix indicatif", kopio: "Dès 89 €/mois", other: "Abo + ton temps" },
      { label: "Délai de mise en ligne", kopio: "14 à 21 jours", other: "Variable (souvent plus long)" },
      { label: "Modifications", kopio: "Par email 24 à 72 h", other: "Toi-même dans l'éditeur" },
      { label: "Design", kopio: "Sur-mesure", other: "Template + personnalisation" },
      { label: "Hébergement", kopio: "Inclus", other: "Inclus dans l'abo Wix" },
      { label: "Support", kopio: "1 personne dédiée", other: "Centre d'aide / chat" },
      { label: "Idéal si", kopio: "Tu délègues", other: "Tu aimes tout faire toi-même" },
    ],
    sections: [
      {
        h2: "Quand Wix est objectivement le bon choix ?",
        highlight: "bon choix",
        body: `Wix est le bon outil quand tu veux garder la main sur chaque pixel et chaque app. Le mécanisme est simple : tu ouvres l'éditeur, tu testes, tu publies. Tu n'attends personne. Beaucoup d'entrepreneuses s'y retrouvent parce qu'elles aiment itérer le soir, brancher une app de réservation ou une boutique, et tout ajuster sans devis.

En pratique, Wix gagne dès que le plaisir (ou la nécessité) de construire en autonomie dépasse le coût de ton temps. Si tu as déjà un bon œil design, si tu lis la doc sans te bloquer, et si tu acceptes de gérer hébergement, apps et SEO toi-même, l'abonnement Wix reste souvent moins cher en cash que de déléguer. Kopio n'essaie pas de concurrencer ça : ce n'est pas le même métier.`,
      },
      {
        h2: "Quand Kopio est le bon choix ?",
        highlight: "Kopio",
        body: `Kopio devient le bon choix quand ton métier te prend déjà assez d'énergie pour que le site ne doive pas devenir un second job. Le mécanisme : tu briefes, tu valides ; je conçois, je mets en ligne, je maintiens. Les modifications passent par email sous 24 à 72 h. Tu ne te formes pas à un builder.

Concrètement, c'est le cas de nombreuses coachs, thérapeutes et créatrices que j'accompagne : elles ont abandonné un projet Wix après trois soirs, ou elles ont un site correct mais figé faute de temps. Dès 89 €/mois (Pour démarrer) ou 129 €/mois (Complet), le site reste un outil de conversion, pas un chantier permanent. Si tu veux déléguer design, technique et suivi, Kopio répond mieux que Wix.`,
      },
      {
        h2: "Comment fonctionne vraiment Wix au quotidien ?",
        highlight: "Wix",
        body: `Wix te donne un éditeur puissant et un App Market large. Tu choisis un template, tu le personnalises, tu branches des apps (réservation, paiement, formulaires). L'hébergement est dans l'abonnement. Le support passe surtout par un centre d'aide et un chat. C'est mature, documenté, et adapté à qui aime construire en autonomie.

Le coût réel n'est pas seulement le forfait mensuel. C'est aussi le temps passé à chercher le bon réglage, à comprendre pourquoi une page charge mal sur mobile, ou à refaire un rendu qui ressemble encore à dix autres sites du même template. Si tu comptes ce temps en euros (même à 30 €/h), la facture monte vite. Wix reste excellent pour l'autonomie. Il est moins adapté dès que tu veux qu'une personne tienne le site à ta place.`,
      },
      {
        h2: "Comment fonctionne Kopio au quotidien ?",
        highlight: "fonctionne",
        body: `Chez Kopio, le parcours est différent par construction. Tu démarres par un brief et un appel de lancement. Je livre un design personnalisé (pas un template retouché), une structure pensée pour ton offre, et les bases SEO (balises, vitesse, indexation). Hébergement, domaine, SSL et sauvegardes sont inclus. Tu n'ouvres pas d'éditeur.

Ensuite, le site vit avec toi : un refresh design tous les 12 mois, des mises à jour par email, une seule interlocutrice. Formules : Pour démarrer à 89 €/mois (one-page, livraison sous 14 jours) et Complet à 129 €/mois (multi-pages, réservation avancée, SEO local renforcé, sous 21 jours). Engagement 12 mois, propriétaire après 12 mensualités ou rachat anticipé en soldant l'intégralité des mois restants. Tu paies pour un résultat tenu, pas pour un outil à apprendre.`,
      },
      {
        h2: "Et le référencement Google dans les deux cas ?",
        highlight: "référencement",
        body: `Wix a progressé sur le SEO technique. Tu peux atteindre un bon niveau si tu structures tes pages, rédiges des contenus utiles et suis les recommandations de l'outil. Le mécanisme reste à ta charge : titres, maillage, vitesse, images, SEO local. Beaucoup de sites Wix restent invisibles faute de temps sur ces détails, pas faute de plateforme.

Chez Kopio, les bases SEO sont incluses dans chaque formule. Le Complet renforce le SEO local (utile si tu reçois en cabinet ou sur une zone précise). Je ne promets pas la première place Google en quinze jours : personne d'honnête ne le peut. Je livre une structure indexable, des balises propres et une base sur laquelle tes contenus peuvent travailler. Si tu veux piloter le SEO toi-même semaine après semaine, Wix te laisse ce contrôle. Si tu veux que les fondations soient posées pour toi, Kopio le fait dans l'abonnement.`,
      },
      {
        h2: "Quel budget comparer vraiment entre Wix et Kopio ?",
        highlight: "budget",
        body: `Comparer le prix affiché de Wix au prix Kopio sans le temps, c'est comparer deux choses différentes. Wix : abonnement plateforme + apps éventuelles + ton temps de construction et de maintenance. Kopio : dès 89 €/mois (ou 1 890 € en paiement unique sur Pour démarrer), avec mise en service, design, hébergement et mises à jour inclus selon la formule.

En 2026, une entrepreneuse qui compte 20 à 40 heures pour monter un site correct en autonomie « économise » sur l'abonnement et « dépense » en soirées. Kopio lisse ça : 89 ou 129 €/mois pendant 12 mois, délais 14 à 21 jours, refresh annuel inclus. Ni Wix ni Kopio ne sont « meilleurs » en absolu. Ils répondent à des priorités opposées : autonomie maximale d'un côté, délégation complète de l'autre.`,
      },
      {
        h2: "Peux-tu passer de Wix à Kopio (ou l'inverse) sans tout perdre ?",
        highlight: "passer",
        body: `Oui, dans les deux sens, avec des nuances. Si tu as un site Wix et que tu veux déléguer, on ne « casse » pas ton ancien site pour le plaisir. On repart souvent d'un brief propre : ton offre, tes preuves, ce qui convertit déjà. Les textes et les photos utiles se réutilisent. Le domaine peut être pointé vers le nouveau site. Tu gardes la continuité pour tes visiteuses.

Après 12 mensualités (ou via rachat anticipé en soldant l'intégralité des mois restants), tu es propriétaire du site. Le domaine est à ton nom dès le premier jour. L'implication pratique : choisis d'abord le mode de travail (toi-même ou délégué), pas une marque par défaut. Wix et Kopio sont des outils de trajectoires différentes ; changer reste possible quand ta priorité change.`,
      },
    ],
    faqs: [
      {
        question: "Kopio utilise-t-il Wix ?",
        answer:
          "Non. Je livre des sites sur-mesure, hébergés dans le cadre de l'abonnement, sans que tu aies à gérer un builder.",
      },
      {
        question: "Puis-je devenir propriétaire de mon site Kopio ?",
        answer:
          "Oui : après 12 mensualités tu es propriétaire à 100 %. Un rachat anticipé est possible en soldant l'intégralité des mois restants. Le domaine est à ton nom dès le premier jour.",
      },
      {
        question: "Wix est-il moins cher que Kopio ?",
        answer:
          "Souvent en abonnement plateforme seul, oui. Dès que tu comptes ton temps de construction et de maintenance, l'écart se réduit ou s'inverse pour beaucoup d'entrepreneuses.",
      },
      {
        question: "Puis-je modifier mon site Kopio moi-même ?",
        answer:
          "Tu m'envoies un email : je mets à jour sous 24 à 72 h. Pas d'éditeur à apprendre. Si tu veux tout éditer toi-même au quotidien, Wix reste plus adapté.",
      },
    ],
    closing:
      "Si tu aimes construire en autonomie, reste sur Wix. Si tu veux un site pro tenu pour toi, dis-moi où tu en es : je te dirai clairement si Kopio est le bon fit.",
    ctaLabel: "Parler de mon projet",
    image: "/image/independant.jpg",
    imageAlt: "Comparatif Kopio vs Wix pour femmes entrepreneuses",
  },
  {
    slug: "kopio-vs-agence-web",
    title: "Kopio vs agence web : comparatif pour entrepreneuses (2026)",
    metaDescription:
      "Kopio vs agence web : prix, délais, relation. Comparatif honnête pour entrepreneuses entre abonnement mensuel et agence.",
    keyword: "Kopio vs agence web",
    h1: "Kopio vs agence web : qui choisir ?",
    tldr:
      "Une agence web est justifiée sur les projets complexes, multi-équipes ou à budget marketing large (souvent 2 000 à 8 000 € et plus). Kopio est adapté aux entrepreneuses qui veulent une vitrine ou un site de service clair dès 89 €/mois, livré en 14 à 21 jours, avec une seule interlocutrice. Verdict : agence pour périmètre large ; Kopio pour un site efficace sans usine à gaz.",
    verdict:
      "Agence pour projets complexes et budgets 2 000 €+ ; Kopio pour un site d'entrepreneuse rapide, clair et en abonnement.",
    intro:
      "Les agences ne sont pas « mauvaises ». Elles sont souvent surdimensionnées pour une indépendante qui a besoin d'une vitrine qui convertit.",
    otherName: "Agence web",
    otherFairPoints: [
      "Équipes spécialisées (UX, SEO, dev, chef de projet)",
      "Capacité à gérer apps, refontes groupées, gouvernance",
      "Process et livrables formalisés",
      "Pertinent si budget marketing large et plusieurs validateurs",
    ],
    kopioStrengths: [
      "Prix accessible dès 89 €/mois (ou paiement unique)",
      "Délais courts : 14 à 21 jours",
      "Une seule interlocutrice, pas de téléphone arabe",
      "Mises à jour continues incluses, pas un devis par virgule",
    ],
    rows: [
      { label: "Budget typique", kopio: "89 à 129 €/mois", other: "2 000 à 8 000 €+" },
      { label: "Délai", kopio: "14 à 21 jours", other: "1 à 3 mois" },
      { label: "Interlocuteurs", kopio: "1 personne", other: "Équipe / chef de projet" },
      { label: "Modifications après livraison", kopio: "Incluses (email)", other: "Souvent en tickets payants" },
      { label: "Refresh design", kopio: "Tous les 12 mois", other: "Nouveau devis fréquent" },
      { label: "Idéal pour", kopio: "Indépendante / TPE", other: "PME / projets complexes" },
    ],
    sections: [
      {
        h2: "Quand une agence web est vraiment justifiée ?",
        highlight: "justifiée",
        body: `Une agence web a du sens quand le projet dépasse une vitrine d'indépendante. Le mécanisme : plusieurs métiers (UX, design, développement, SEO, chef de projet) se coordonnent autour d'un cahier des charges, de sprints et de validateurs. Tu paies l'organisation autant que les pixels.

Concrètement, c'est pertinent si tu as une équipe marketing, un tunnel multi-pages avec tracking avancé, une app métier, une refonte de plusieurs sites, ou une gouvernance (associés, COMEX, juridique) qui exige des livrables formalisés. Budgets typiques en 2026 pour une vitrine « agence » : souvent 2 000 à 8 000 €, parfois plus. Si ton besoin est une présence claire pour convertir des demandes, ce dispositif est souvent trop lourd. Si ton besoin est un produit digital complexe, l'agence (ou un studio spécialisé) reste le bon outil.`,
      },
      {
        h2: "Quand Kopio est le bon choix face à une agence ?",
        highlight: "bon choix",
        body: `Kopio est le bon choix quand ton besoin réel est simple à énoncer : être crédible, claire, joignable, avec un site qui convertit sans chantier de trois mois. Le mécanisme : une seule interlocutrice (moi), un brief, une livraison en 14 à 21 jours, un abonnement qui inclut hébergement et mises à jour.

Beaucoup d'entrepreneuses que je croise ont reçu des devis agence à 4 000 ou 6 000 € pour une vitrine, puis découvrent que chaque modification après livraison passe en tickets. Chez Kopio, Pour démarrer (89 €/mois) et Complet (129 €/mois) couvrent le cas standard d'une indépendante. Le « Besoin précis » (boutique, outil métier) part sur devis, sans prétendre remplacer une agence sur un SI complexe. Tu choisis Kopio pour la proximité et le périmètre adapté, pas pour « battre » une agence sur tous les terrains.`,
      },
      {
        h2: "Comment se compare le prix réellement ?",
        highlight: "prix",
        body: `Le prix agence se lit souvent en devis unique : design + intégration + parfois SEO de lancement. L'hébergement, la maintenance et les évolutions sont fréquemment à part. Le prix Kopio se lit en abonnement (89 ou 129 €/mois pendant 12 mois minimum) ou en paiement unique (1 890 à 2 390 € selon la formule), avec hébergement, domaine, SSL, sauvegardes et mises à jour par email inclus selon l'offre.

Sur 12 mois, Pour démarrer revient à un ordre de grandeur clairement inférieur à un devis agence vitrine classique, tout en incluant le suivi. Une agence peut rester moins « chère » si tu compares uniquement un one-shot très bas et que tu ignores la maintenance. En pratique, pour une entrepreneuse solo, l'abonnement aligne le paiement sur l'usage. Pour une PME avec budget marketing structuré, le devis agence peut être le bon cadre contractuel.`,
      },
      {
        h2: "Quels délais et quel mode de relation attendre ?",
        highlight: "délais",
        body: `Une agence sérieuse annonce souvent 1 à 3 mois : kick-off, wireframes, maquettes, intégration, recette, allers-retours entre plusieurs personnes. C'est cohérent avec un process multi-métiers. Tu gagnes en formalisme ; tu perds en vitesse et parfois en proximité.

Chez Kopio, le délai annoncé est 14 jours (Pour démarrer) ou 21 jours (Complet), si les contenus arrivent à temps. Tu parles toujours à la même personne. Pas de téléphone arabe entre commercial, chef de projet et freelance. L'implication pratique : si tu as besoin de gouvernance et de comptes-rendus pour un comité, l'agence structure mieux ça. Si tu veux avancer vite avec une décisionnaire claire (toi) et une exécutante claire (moi), Kopio retire de la friction.`,
      },
      {
        h2: "Que se passe-t-il après la mise en ligne ?",
        highlight: "mise en ligne",
        body: `C'est souvent là que les modèles divergent le plus. En agence, la livraison clôture fréquemment le forfait initial. Ensuite : tickets, devis d'évolution, parfois un contrat de TMA (tierce maintenance applicative) facturé à part. Un refresh design un an plus tard = nouveau projet.

Chez Kopio, les modifications courantes passent par email sous 24 à 72 h, dans le cadre de l'abonnement. Un refresh design est inclus tous les 12 mois. Tu n'es pas obligée de rouvrir un devis pour ajuster une offre ou un témoignage. Sur un gros produit digital, l'agence (avec une TMA claire) reste pertinente. Sur une vitrine d'entrepreneuse, l'abonnement évite le site figé six mois après le lancement faute de budget pour chaque virgule.`,
      },
      {
        h2: "Kopio remplace-t-il une agence sur tous les projets ?",
        highlight: "remplace",
        body: `Non. Je suis claire là-dessus. Kopio ne remplace pas une agence sur une application métier lourde, une refonte multi-marques, un e-commerce complexe avec ERP, ou un dispositif avec cinq validateurs et un legal review à chaque sprint. Ces projets demandent des équipes et une gouvernance que le modèle solo n'offre pas.

Kopio remplace une agence quand le brief réel est : « j'ai besoin d'un site pro pour mon activité d'indépendante, rapidement, avec quelqu'un qui suit derrière ». Formules Pour démarrer et Complet ; Besoin précis sur devis pour les cas hors grille. L'honnêteté du comparatif : choisir Kopio pour économiser sur un projet qui mérite une agence, c'est se tromper d'outil. Choisir une agence pour une one-page de coach, c'est souvent se tromper d'échelle.`,
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
          "Oui : design personnalisé dès Pour démarrer. Le « Besoin précis » couvre boutique ou outil métier sur devis.",
      },
      {
        question: "Une agence est-elle toujours plus qualitative ?",
        answer:
          "Pas automatiquement. Une bonne agence excelle sur la complexité et la gouvernance. Sur une vitrine claire, la qualité dépend surtout du brief, du design et du suivi, pas du nombre de logos sur le site de l'agence.",
      },
      {
        question: "Que se passe-t-il si mon projet grandit ?",
        answer:
          "On peut évoluer vers Complet ou Besoin précis. Si tu dépasses clairement mon périmètre (app lourde, multi-équipes), je te le dirai et tu pourras basculer vers une agence adaptée.",
      },
    ],
    closing:
      "Si ton projet est large et multi-équipes, parle à une agence. Si tu veux un site d'entrepreneuse clair, tenu, sans usine à gaz, écris-moi : je te dirai si Kopio est le bon cadre.",
    ctaLabel: "Discuter de mon besoin",
    image: "/image/independant.jpg",
    imageAlt: "Comparatif Kopio vs agence web",
  },
  {
    slug: "combien-coute-site-internet-entrepreneure-2026",
    title: "Combien coûte un site internet pour entrepreneuse en 2026 ?",
    metaDescription:
      "Prix d'un site internet pour entrepreneuse en 2026 : autonomie, freelance, abonnement, agence. Fourchettes réelles et ce qui est inclus.",
    keyword: "combien coûte site internet entrepreneuse 2026",
    h1: "Combien coûte un site internet pour une entrepreneuse en 2026 ?",
    tldr:
      "En 2026, un site pour entrepreneuse va de quelques euros par mois en autonomie (plus ton temps) à 2 000 à 8 000 €+ en agence. Un freelance se situe souvent entre 800 et 3 000 € selon le périmètre. Kopio : 89 €/mois (Pour démarrer) ou 129 €/mois (Complet), tout inclus côté hébergement et mises à jour. Verdict : pour une vitrine pro sans tout gérer seule, compte environ 89 €/mois + mise en service, livré en 14 jours.",
    verdict:
      "Budget réaliste 2026 pour une entrepreneuse : dès 89 €/mois en abonnement tenu pour toi, ou 2 000 €+ en agence ; en autonomie, le « gratuit » ignore ton temps.",
    intro:
      "La question n'est pas seulement « combien ». C'est « quoi inclus, en combien de temps, et qui s'occupe des mises à jour ».",
    otherName: "Autres options",
    otherFairPoints: [
      "Outils en autonomie : entrée de gamme si tu as le temps",
      "Freelance généraliste : variable selon expérience",
      "Agence : pertinent sur gros périmètre",
      "IA seule : rapide, souvent générique et fragile sur la durée",
    ],
    kopioStrengths: [
      "89 €/mois Pour démarrer / 129 € Complet",
      "Hébergement, domaine, SSL, sauvegardes inclus",
      "Mises à jour par email incluses",
      "Prix affichés, pas de devis opaque pour une vitrine",
    ],
    rows: [
      { label: "Prix d'entrée", kopio: "Dès 89 €/mois", other: "Variable selon l'option" },
      { label: "Formule Complet", kopio: "129 €/mois", other: "Souvent plus cher" },
      { label: "Paiement unique", kopio: "1 890 à 2 390 €", other: "Selon prestataire" },
      { label: "Agence vitrine", kopio: "Pas nécessaire", other: "2 000 à 8 000 €+" },
      { label: "Délai typique", kopio: "14 à 21 jours", other: "Variable / 1 à 3 mois" },
    ],
    sections: [
      {
        h2: "Quelles sont les fourchettes de prix réelles en 2026 ?",
        highlight: "fourchettes",
        body: `En 2026, le marché se découpe en quatre grands ordres de grandeur. En autonomie (Wix, WordPress.com, Framer, etc.) : souvent 10 à 40 €/mois de plateforme, parfois plus avec apps. Freelance : typiquement 800 à 3 000 € pour une vitrine, selon expérience et périmètre. Agence : souvent 2 000 à 8 000 € et plus pour une vitrine « processée ». Abonnement type Kopio : 89 à 129 €/mois avec maintenance incluse.

Ces fourchettes ne disent pas la même chose. Un site à 15 €/mois en autonomie n'inclut pas le design sur-mesure ni le suivi humain. Un devis à 5 000 € peut inclure UX, rédaction et SEO de lancement, ou seulement de l'intégration. Pour te situer : si tu es entrepreneuse solo avec une offre de service claire, tu compares surtout autonomie + ton temps, freelance one-shot, ou abonnement tenu. Les extrêmes bas et haut existent ; le milieu du marché pour une vitrine utile se joue entre « ton temps » et « quelques milliers d'euros / un abonnement mensuel ».`,
      },
      {
        h2: "Que doit vraiment inclure le prix d'un site ?",
        highlight: "inclure",
        body: `Un prix de site digne de ce nom couvre plus que « une jolie page ». Design adapté à ton activité, aide à la rédaction ou contenus structurés, mobile, bases SEO (structure, balises, vitesse, indexation), conformité RGPD, hébergement, nom de domaine, certificat SSL, sauvegardes, et un plan pour les mises à jour. Sans ça, tu paies une mise en ligne, pas un outil durable.

Beaucoup de devis « site à 500 € » oublient l'hébergement, le suivi ou le mobile. Le coût revient ensuite en extras. Chez Kopio, ces briques sont dans Pour démarrer et Complet : design personnalisé, aide à la rédaction, SEO de base, RGPD, hébergement, domaine, sécurité, modifications par email. L'implication pratique : quand tu compares deux prix, aligne d'abord la liste de ce qui est inclus. Sinon tu compares une coque vide à un site tenu.`,
      },
      {
        h2: "Combien coûte vraiment de faire son site en autonomie ?",
        highlight: "autonomie",
        body: `Faire ton site toi-même n'est pas gratuit. Tu paies l'abonnement plateforme, parfois des apps (réservation, formulaires, boutique), et surtout ton temps. Le mécanisme : 20 à 40 heures ne sont pas rares pour une première version correcte, plus la maintenance quand une app casse ou qu'il faut mettre à jour une offre.

Si tu valorises ton heure à 40 €, 30 heures valent 1 200 €, avant même l'abonnement annuel. Pour certaines entrepreneuses, c'est un investissement qu'elles assument avec plaisir : elles aiment construire. Pour d'autres, c'est du temps volé aux clientes. Wix et les builders restent excellents dans le premier cas. Ils ne sont « pas chers » que si tu ignores le second. Soft truth : en autonomie, tu gagnes en contrôle ; tu paies en soirées.`,
      },
      {
        h2: "Abonnement ou paiement unique : comment trancher ?",
        highlight: "abonnement",
        body: `L'abonnement lisse la trésorerie et lie le prestataire au suivi. Tu paies chaque mois ; les mises à jour et l'hébergement restent dans le cadre. Le paiement unique convient si tu préfères solder et budgéter une fois. Les deux modèles coexistent en 2026 ; ni l'un ni l'autre n'est moralement supérieur.

Chez Kopio, Pour démarrer : 89 €/mois (+ 390 € de mise en service) ou 1 890 € en paiement unique. Complet : 129 €/mois ou 2 390 € en unique. Engagement 12 mois sur l'abonnement, propriétaire après 12 mensualités, rachat anticipé possible en soldant l'intégralité des mois restants. Agence et freelance facturent surtout en one-shot, puis TMA ou tickets. L'implication : choisis selon ta trésorerie et selon qui gère la suite. Un one-shot sans maintenance te laisse seule après la livraison.`,
      },
      {
        h2: "Quel budget pour une coach, thérapeute ou créatrice ?",
        highlight: "budget",
        body: `Pour démarrer une activité de service (coach, thérapeute, consultante, créatrice avec vitrine), 89 €/mois (Pour démarrer) suffit souvent : one-page claire, offre, preuves, contact, livraison sous 14 jours. Dès que tu as besoin de plusieurs pages, de réservation avancée et d'un SEO local renforcé, 129 €/mois (Complet, sous 21 jours) est le palier logique.

Boutique ou outil métier : hors grille standard, sur devis (Besoin précis). Une agence à 4 000 € peut être justifiée si tu as un tunnel marketing large ou plusieurs parties prenantes. Pour une indépendante qui veut exister en ligne sans usine à gaz, le budget réaliste 2026 se situe plutôt sur l'abonnement tenu ou un freelance clair sur le périmètre. Adapte le budget à la complexité de l'offre, pas à la peur de « paraître pas assez pro ».`,
      },
      {
        h2: "Comment Kopio se situe face à Wix, freelance et agence ?",
        highlight: "situe",
        body: `Face à Wix / builders : Kopio est plus cher en abonnement cash, moins cher si tu comptes ton temps, et différent en modèle (délégation vs autonomie). Face au freelance : Kopio affiche des prix fixes pour les cas standards, inclut la maintenance dans l'abonnement, et livre en 14 à 21 jours ; un bon freelance peut être excellent au one-shot, avec un suivi variable selon le contrat.

Face à l'agence : Kopio est en dessous sur le ticket d'entrée et plus serré sur le périmètre. L'agence gagne sur la complexité et la gouvernance. Le tableau de comparaison du site résume ça sans caricature : prix dès 89 €/mois vs abo builder vs 2 000 €+ ; délais 14 à 21 jours vs toi-même vs 1 à 3 mois ; mises à jour 24 à 72 h par mail vs toi-même vs tickets. Tu ne cherches pas « le moins cher absolu ». Tu cherches le coût aligné sur qui fait le travail après le jour J.`,
      },
      {
        h2: "Quels pièges de prix éviter en 2026 ?",
        highlight: "pièges",
        body: `Premier piège : le prix d'appel sans hébergement ni suivi. Deuxième : le site « livré » sans plan de mises à jour. Troisième : comparer uniquement le monthly d'un builder au monthly d'un abonnement tenu, sans le temps. Quatrième : croire qu'un site généré uniquement à l'IA à bas coût restera solide six mois plus tard sans reprise humaine.

Je ne dénigre pas un site existant : beaucoup d'entrepreneuses ont une base utile à faire évoluer, pas à jeter. Le piège, c'est de payer deux fois (outil + corrections tardives + refonte urgente) faute d'avoir aligné périmètre et modèle. Lis les inclus, demande qui intervient après la mise en ligne, et fixe un budget en fonction de ton temps disponible. En 2026, la transparence des prix (comme sur la page tarifs Kopio) reste le filtre le plus fiable contre les devis flous.`,
      },
    ],
    faqs: [
      {
        question: "Pourquoi voit-on des sites à 15 €/mois ?",
        answer:
          "Souvent un builder nu, sans accompagnement, avec un template. Le coût réel inclut ton temps, et parfois un résultat qui convertit peu faute de structure.",
      },
      {
        question: "Les prix Kopio sont-ils TTC ?",
        answer:
          "Les prix affichés sont TTC indicatifs. Le détail est confirmé avant démarrage.",
      },
      {
        question: "Que comprend la mise en service ?",
        answer:
          "Sur Pour démarrer, 390 € de mise en service s'ajoutent à l'abonnement. La mise en service n'est facturée qu'à la validation de la maquette.",
      },
      {
        question: "Puis-je payer en une fois ?",
        answer:
          "Oui : 1 890 € (Pour démarrer) ou 2 390 € (Complet) en paiement unique, en alternative à l'abonnement 12 mois.",
      },
    ],
    closing:
      "Tu as une fourchette en tête et une idée de qui doit gérer la suite. Si tu veux un site tenu dès 89 €/mois, dis-moi ton activité : je te confirme la formule adaptée.",
    ctaLabel: "Obtenir une estimation claire",
    image: "/image/blog-prix.jpg",
    imageAlt: "Prix d'un site internet pour entrepreneuse en 2026",
  },
];

export function getComparatif(slug: string): ComparatifPageData | undefined {
  return comparatifs.find((c) => c.slug === slug);
}
