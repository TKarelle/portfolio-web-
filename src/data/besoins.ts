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
  h1: string;
  h1Highlight: string;
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
}

export const BESOIN_BASE = "/besoin";

export function besoinPath(slug: string): string {
  return `${BESOIN_BASE}/${slug}`;
}

export const besoins: BesoinPageData[] = [
  {
    slug: "creer-son-site-sans-competences-techniques",
    label: "Créer son site sans tech",
    title:
      "Créer son site sans compétences techniques | Kopio dès 89€/mois",
    metaDescription:
      "Créer son site sans compétences techniques : Kopio s'occupe de design, hébergement et mises à jour. Formule Pour démarrer dès 89 €/mois, livré en 14 jours.",
    keyword: "créer son site sans compétences techniques",
    h1: "Ton site pro,",
    h1Highlight: "sans compétences techniques",
    tldr:
      "Tu peux créer ton site sans compétences techniques avec Kopio : tu racontes ton activité, je livre le design, l'hébergement et les mises à jour. Formule Pour démarrer dès 89 €/mois, en ligne en 14 jours. Tu n'ouvres ni éditeur ni tableau de bord.",
    intro:
      "Tu veux une présence claire en ligne, pas un second métier. Concrètement, tu valides des étapes ; je construis et je maintiens le site pour que ton énergie reste sur tes clientes.",
    sections: [
      {
        h2: "Pourquoi un builder DIY finit souvent en abandon ?",
        body: "Wix, Squarespace ou un thème WordPress demandent du temps que tu n'as pas entre clientes et admin. Tu ouvres l'éditeur le soir, tu bloques sur une police ou un menu mobile, tu fermes. En pratique, beaucoup d'indépendantes abandonnent après deux ou trois sessions : le site reste un brouillon ou un compte payant inutilisé. Ce n'est pas un manque de motivation ; c'est un décalage entre l'outil et ton métier. Avec Kopio, tu n'apprends pas l'éditeur : tu réponds à un brief, tu valides la maquette, tu m'envoies les corrections par email. Le site avance sans que tu deviennes webmestre le week-end.",
      },
      {
        h2: "Comment ça se passe si tu ne touches à rien de technique ?",
        body: "Le mécanisme est simple. Un appel de lancement fixe ton offre, ta cible et le ton. Je propose une structure et un design personnalisé ; tu valides avant la mise en ligne. Hébergement, domaine, SSL et bases SEO sont inclus dans l'abonnement. Une cliente coach a reçu son site Pour démarrer en 14 jours après envoi des textes : elle n'a jamais ouvert d'éditeur ni géré de plugin. Les ajustements (tarif, bio, ajout d'un service) passent ensuite par un message. Pour toi, ça veut dire un site joignable sans veille technique ni courbe d'apprentissage cachée derrière le « gratuit » d'un builder.",
      },
      {
        h2: "Que gères-tu encore toi-même ?",
        body: "Tu restes responsable du contenu métier : photos, preuves, formulations d'offre. Je t'aide à les structurer si les mots bloquent. Les changements courants partent par email ; je mets à jour sous 24 à 72 h. Tu ne gères pas les plugins, les sauvegardes ni les mises à jour de sécurité. Tu ne compares pas non plus des templates pendant des soirs entiers. L'implication est claire : ton énergie reste sur ton métier, le site suit sans que tu sois l'administratrice système de ta propre vitrine. Après 12 mensualités (ou rachat anticipé en soldant l'intégralité des mois restants), tu es propriétaire du site ; le domaine est à ton nom dès le premier jour.",
      },
      {
        h2: "Quelle formule si tu démarres sans compétences techniques ?",
        body: "La formule Pour démarrer à 89 €/mois couvre une vitrine claire : design personnalisé, mobile, contact, hébergement. Elle suffit quand tu présentes ton offre et que tu veux être joignable. Le Complet à 129 €/mois ajoute un parcours de réservation plus abouti si tes clientes réservent déjà en ligne. Tu choisis selon ton flux réel, pas selon une promesse marketing. Beaucoup d'entrepreneuses démarrent en Pour démarrer, puis passent à Complet quand le volume de demandes le justifie. Si tu hésites, je te propose de partir de Pour démarrer et d'ajuster après les premiers mois, une fois le site en usage réel.",
      },
    ],
    problems: [
      "Éditeur DIY abandonné après quelques soirs",
      "Peur de casser le site ou le SEO",
      "Besoin d'un résultat pro sans tout gérer seule",
    ],
    solutions: [
      "Brief + appel : je pars de ton activité",
      "Design personnalisé, mobile, RGPD inclus",
      "Mises à jour par email sous 24-72 h",
    ],
    recommendedPlanId: "launch",
    closing:
      "Si tu veux un site sans apprendre un builder, la formule Pour démarrer pose une base claire. Écris-moi ton activité ; je te dirai si ça colle.",
    ctaLabel: "Parler de mon site",
    image: "/image/independant.jpg",
    imageAlt: "Femme entrepreneuse créant son site sans compétences techniques",
  },
  {
    slug: "site-vitrine-independante",
    label: "Site vitrine indépendante",
    title: "Site vitrine pour indépendante | En ligne en 14 jours | Kopio",
    metaDescription:
      "Site vitrine pour indépendante et mompreneure : offre claire, contact, crédibilité. Formule Pour démarrer Kopio dès 89 €/mois, livré en 14 jours.",
    keyword: "site vitrine indépendante",
    h1: "Ton site vitrine,",
    h1Highlight: "en ligne en 14 jours",
    tldr:
      "Kopio livre ton site vitrine d'indépendante en 14 jours : pages claires, offre lisible, contact évident. Formule Pour démarrer dès 89 €/mois, hébergement inclus. Tu n'as pas besoin d'un chantier de six mois pour être crédible en ligne.",
    intro:
      "Une vitrine sert à présenter ton offre et à être joignable. Instagram attire ; le site convertit quand quelqu'un cherche à te prendre au sérieux après un premier contact.",
    sections: [
      {
        h2: "À quoi sert vraiment un site vitrine quand tu es indépendante ?",
        body: "Le site centralise ce qu'Instagram et LinkedIn dispersent : pour qui tu travailles, comment tu procédés, comment te contacter. Une prospecte qui hésite après un networking veut un lien unique, pas un fil de stories ni une bio de 150 caractères. En pratique, une indépendante qui envoie son site après un café de réseautage réduit les allers-retours « tu fais quoi exactement ? ». La vitrine fixe le cadre avant l'appel. Pour toi, elle devient la page de référence que tu cites partout : signature email, carte de visite, message LinkedIn. Sans elle, chaque conversation recommence à zéro.",
      },
      {
        h2: "Pourquoi pas seulement une page Linktree ou un profil LinkedIn ?",
        body: "Linktree liste des liens ; LinkedIn raconte un parcours souvent trop corporate pour une offre de service. Ni l'un ni l'autre ne structure positionnement, preuves et prochain pas sur une même page. Le mécanisme d'une vitrine Kopio : une page (ou quelques pages) qui mène à une action claire, formulaire ou email. Une créatrice de contenu a remplacé sa bio Instagram seule par une one-page : les demandes d'appel ont gagné en précision dès la première semaine, avec moins de « tu proposes quoi ? ». Tu gardes les réseaux pour la découverte ; le site porte la conversion. Ce n'est pas l'un ou l'autre : c'est la complémentarité.",
      },
      {
        h2: "Que contient une vitrine Pour démarrer ?",
        body: "Positionnement, services, quelques preuves (avis, cas, parcours), contact. Design personnalisé, mobile-first, bases SEO, mentions légales et hébergement inclus. Tu n'achètes pas un template retouché : je construis autour de ton activité et de ta manière de parler. Délai typique : 14 jours après validation du devis si les contenus arrivent à temps. Tu prépares textes et photos ; je livre une vitrine prête à envoyer. Les mises à jour courantes passent ensuite par email sous 24 à 72 h. L'implication : tu investis du temps sur le fond métier, pas sur l'apprentissage d'un éditeur.",
      },
      {
        h2: "Quand passer à Complet plutôt qu'à une simple vitrine ?",
        body: "Si tes clientes réservent déjà ou si tu veux un agenda intégré, Complet à 129 €/mois a plus de sens. Pour une indépendante qui commence et qui reçoit encore ses demandes par email ou LinkedIn, Pour démarrer à 89 €/mois suffit. Beaucoup démarrent en vitrine, puis ajoutent la réservation quand le volume le justifie. Surdimensionner le site au premier jour crée de la complexité inutile. Tu peux aussi regarder les pages métier Kopio (coach, consultante, etc.) pour voir comment une vitrine se décline selon l'activité. Le critère reste ton flux réel de demandes, pas la checklist d'une agence. Si tu hésites, je te propose de commencer simple et d'évoluer ensuite.",
      },
    ],
    problems: [
      "Pas de page claire à envoyer après un échange",
      "Réseaux qui attirent sans convertir assez",
      "Pas de temps pour bricoler un builder",
    ],
    solutions: [
      "One-page ou multi-pages selon ton besoin",
      "Offre, preuves, contact structurés",
      "Livraison en 14 jours (Pour démarrer)",
    ],
    recommendedPlanId: "launch",
    closing:
      "Une vitrine claire te rend joignable sans usine à gaz. Si tu veux lancer la tienne, dis-moi ce que tu vends et pour qui.",
    ctaLabel: "Lancer ma vitrine",
    image: "/image/independant.jpg",
    imageAlt: "Site vitrine pour femme indépendante",
  },
  {
    slug: "site-avec-reservation-en-ligne",
    label: "Réservation en ligne",
    title: "Site avec réservation en ligne | Kopio dès 129€/mois",
    metaDescription:
      "Site avec réservation en ligne pour coachs, thérapeutes, esthéticiennes. Agenda et confirmation. Formule Complet Kopio dès 129 €/mois.",
    keyword: "site avec réservation en ligne",
    h1: "Tes clientes réservent",
    h1Highlight: "sans te relancer",
    tldr:
      "Kopio intègre la réservation en ligne à ton site : créneaux visibles, confirmation, moins d'échanges en messages. Formule Complet dès 129 €/mois, livré en 21 jours. Pensé pour coachs, thérapeutes et praticiennes qui veulent un parcours sur leur marque, pas seulement un lien Calendly isolé.",
    intro:
      "Les « tu as un créneau ? » en DM coûtent du temps et de la clarté. Un parcours de réservation sur ton site réduit les allers-retours et pose ton offre avant le clic.",
    sections: [
      {
        h2: "Pourquoi Calendly seule ne suffit pas toujours ?",
        body: "Calendly (ou équivalent) fonctionne pour poser un créneau. Le lien arrive souvent sans contexte : la prospecte n'a pas relu ton offre, tes tarifs ni ta méthode. Elle réserve parfois par réflexe, puis annule. Le site + réservation lie la persuasion et l'action au même endroit. Une thérapeute qui a passé ses RDV du DM Instagram vers un parcours sur site a vu les no-shows baisser : les personnes réservaient après avoir lu le cadre et les conditions. Pour toi, Calendly peut rester l'outil derrière ; le site porte le récit, la confiance et le filtre. Tu ne remplaces pas l'outil : tu lui donnes un cadre.",
      },
      {
        h2: "Comment se déroule une réservation sur un site Complet ?",
        body: "La visiteuse lit l'offre, choisit un format, voit les créneaux disponibles et reçoit une confirmation. Tu définis les règles (durée, préavis, types de séance) ; je branche le parcours sur ton agenda. Le design reste aligné à ton activité : pas un widget posé au hasard sur une page générique. En moyenne, les clientes Complet voient moins de messages « dispo quand ? » dès les premières semaines. Tu récupères du temps d'admin pour les séances. Les ajustements de créneaux ou de textes passent par email sous 24 à 72 h. L'implication : tu standardises un peu l'entrée de ton pipeline pour gagner en prévisibilité.",
      },
      {
        h2: "Pour qui la réservation en ligne a le plus de sens ?",
        body: "Coachs en 1:1, praticiennes bien-être, esthéticiennes, consultantes au forfait horaire : dès que le volume de demandes crée des doubles messages ou des oublis. Si tu as trois appels découverte par mois, un formulaire Contact peut suffire en Pour démarrer à 89 €/mois. Dès que tu jongles avec Instagram, WhatsApp et l'email, Complet à 129 €/mois structure le flux. Une esthéticienne qui gérait tout en stories a recentré les prises de RDV sur le site : moins de créneaux oubliés, moins de relances. Tu acceptes de standardiser un peu pour arrêter de jouer les secrétaires à chaque demande.",
      },
      {
        h2: "Que se passe-t-il après la mise en ligne ?",
        body: "Tu m'écris pour ajuster créneaux, textes ou offres ; je mets à jour sous 24 à 72 h. Hébergement, SSL et bases SEO restent inclus. Le délai de livraison Complet est de 21 jours après validation, contenus fournis. Tu n'entretiens pas de plugin de booking seule, ni de thème qui casse après une mise à jour. Le site et la réservation évoluent avec ton activité. Si tu veux comparer avec une vitrine seule, regarde aussi la page besoin site vitrine indépendante : le critère reste ton volume réel de demandes, pas la checklist d'un concurrent.",
      },
    ],
    problems: [
      "RDV gérés surtout en messages Instagram",
      "Doubles réservations et oublis",
      "Temps admin qui mange les séances",
    ],
    solutions: [
      "Parcours de réservation lisible sur mobile",
      "Agenda + confirmation (formule Complet)",
      "Design aligné à ton activité",
    ],
    recommendedPlanId: "pro",
    closing:
      "Si tes clientes réservent déjà (ou devraient), Complet relie ton site et ton agenda. Décris-moi ton flux actuel ; je te dirai si le parcours a du sens.",
    ctaLabel: "Parler réservation",
    image: "/image/pulse.jpg",
    imageAlt: "Site web avec réservation en ligne pour entrepreneuse",
  },
  {
    slug: "boutique-en-ligne-petite-entreprise",
    label: "Boutique en ligne",
    title:
      "Boutique en ligne petite entreprise | Sur devis | Kopio",
    metaDescription:
      "Boutique en ligne pour petite entreprise et créatrices : catalogue, panier, paiement. Formule Besoin précis Kopio sur devis.",
    keyword: "boutique en ligne petite entreprise",
    h1: "Ta boutique en ligne,",
    h1Highlight: "à ton échelle",
    tldr:
      "Kopio conçoit des boutiques en ligne pour petites entreprises et créatrices : catalogue, panier, paiement, sur devis clair. Formule Besoin précis. Tu gardes ta marque et ton fichier clientes, sans te perdre dans une usine Shopify seule si tu n'as pas le temps de la configurer.",
    intro:
      "Quand la vitrine ne suffit plus, tu vends des produits ou des précommandes. La question : qui construit et tient la boutique, toi ou quelqu'un d'autre ?",
    sections: [
      {
        h2: "Shopify seule ou boutique accompagnée : quelle différence ?",
        body: "Shopify est un outil solide pour vendre en ligne. Le coût réel pour une petite structure, c'est la configuration : thème, tunnel, emails transactionnels, TVA, photos, SEO produit. Beaucoup de créatrices ouvrent un compte, bloquent sur le checkout ou les frais de port, et reviennent aux DM. Avec Kopio en Besoin précis, je construis la boutique autour de ta marque et je reste l'interlocutrice pour les évolutions. Shopify (ou équivalent) peut rester le moteur technique ; tu n'es pas seule face au tableau de bord. La distinction n'est pas « Shopify mauvais » : c'est qui porte le projet jusqu'à une boutique réellement utilisable.",
      },
      {
        h2: "Que couvre une boutique Besoin précis chez Kopio ?",
        body: "Catalogue adapté à ton volume, panier, paiement en ligne, confirmations, design aligné à ton identité. Le périmètre se fixe au devis : nombre de produits, variantes, click-and-collect, ou simple précommande. Une créatrice bijoux est passée des commandes WhatsApp à un catalogue en ligne avec paiement : moins d'erreurs de taille, plus de commandes hors horaires, fichier clientes centralisé. Pour toi, ça veut dire un canal de vente qui vit sans que chaque message soit une négociation. Les évolutions (nouvelle collection, page produit) se discutent ensuite dans le cadre du devis ou d'un avenant clair.",
      },
      {
        h2: "Pour qui une boutique sur devis a du sens ?",
        body: "Petites entreprises, créatrices, marques qui démarrent un catalogue limité et veulent rester maîtresses de leur image. Si tu vends trois produits et que tu veux tester, une landing + lien de paiement peut suffire en attendant, voire une vitrine Pour démarrer. Dès que tu gères stocks, variantes ou un volume régulier, la boutique dédiée évite les frictions et les erreurs de commande. L'implication : tu acceptes un devis (pas un forfait fixe 89 ou 129 €) parce que le périmètre varie trop d'un projet à l'autre. Le prix affiché après brief, pas une surprise en fin de chantier.",
      },
      {
        h2: "Comment se déroule le projet ?",
        body: "Brief catalogue, parcours d'achat, maquette, intégration paiement, tests, mise en ligne. Tu fournis photos et fiches produit ; je structure et je connecte. Après livraison, les évolutions passent par échange direct, selon les termes du devis. Tu ne digères pas seule la doc d'une plateforme ni les apps payantes empilées. Le résultat : une boutique à ton échelle, pas une marketplace générique où ta marque disparaît. Si tu hésites encore entre vitrine et boutique, écris-moi ton volume de ventes actuel : je te dirai si Besoin précis est justifié ou si une étape intermédiaire (vitrine + lien de paiement) suffit pour tester le canal avant d'investir.",
      },
    ],
    problems: [
      "Ventes encore surtout en DM ou sur les marchés",
      "Plateforme ouverte puis abandonnée faute de temps",
      "Envie de garder marque et fichier clientes",
    ],
    solutions: [
      "Boutique sur devis (catalogue, panier, commandes)",
      "Paiement en ligne et confirmations",
      "Identité visuelle alignée à ta marque",
    ],
    recommendedPlanId: "sur-mesure",
    closing:
      "Si tu veux vendre en ligne sans porter toute la technique seule, Besoin précis part d'un devis clair. Envoie-moi ton catalogue ou ton idée de gamme.",
    ctaLabel: "Parler de ma boutique",
    image: "/image/madeleine.png",
    imageAlt: "Boutique en ligne pour créatrice et petite entreprise",
  },
  {
    slug: "refonte-site-internet-entrepreneure",
    label: "Refonte de site",
    title:
      "Refonte site internet femme entrepreneuse | Dès 129€/mois | Kopio",
    metaDescription:
      "Refonte site internet femme entrepreneuse : offre clarifiée, parcours à jour, SEO de base. Formule Complet Kopio dès 129 €/mois, livraison 21 jours.",
    keyword: "refonte site internet femme entrepreneuse",
    h1: "Un site à la hauteur",
    h1Highlight: "de ton expertise",
    tldr:
      "Refonte de site pour entrepreneuse : Kopio clarifie ton offre, met à jour le design et le parcours, et renforce les bases SEO. Formule Complet dès 129 €/mois, livraison en 21 jours. Ton activité a évolué ; le site peut la montrer avec plus de précision.",
    intro:
      "Tu as déjà un site. L'offre a changé, les photos vieillissent, le parcours mobile freine. Une refonte aligne l'outil sur ce que tu vends aujourd'hui, sans jeter ce qui fonctionne encore.",
    sections: [
      {
        h2: "Quand une entrepreneuse a besoin d'une refonte de site ?",
        body: "Une refonte devient pertinente quand ton activité a changé plus vite que ta présence en ligne. Nouvelle offre, nouveau public, nouvelles preuves : le site d'origine ne porte plus la décision. En 2025, une consultante dont le site datait de 2018 m'a contactée parce qu'elle n'envoyait plus son URL après un networking : elle préférait expliquer l'offre à l'oral. Le mécanisme est simple. La refonte réécrit structure, textes et parcours pour coller à ce que tu vends aujourd'hui. Tu ne « jolis » pas l'ancien cadre ; tu réaligne l'outil sur ton expertise actuelle.",
      },
      {
        h2: "Quand une refonte vaut mieux qu'un coup de peinture ?",
        body: "Changer une couleur ou une bannière ne règle pas une offre confuse ou un bouton contact invisible sur téléphone. La refonte reprend structure, textes et parcours. En pratique, une coach dont le site datait de 2019 a vu ses demandes d'appel mieux qualifiées après refonte Complet : l'offre et le prochain pas étaient enfin lisibles dès la première page. Le signal pour toi : tu expliques encore ton métier à l'oral parce que le site ne le fait pas, ou tu évites d'envoyer ton URL. Ce n'est pas un jugement sur le travail passé ; c'est un écart mesurable entre ton niveau actuel et ce que la page montre.",
      },
      {
        h2: "Pourquoi ne pas tout reconstruire seule sur un nouveau builder ?",
        body: "Migrer vers Wix ou Webflow pour moderniser te replace dans une courbe d'apprentissage et un risque d'abandon. Tu as déjà investi du temps sur l'existant. Avec Kopio, je repars de ton positionnement actuel, je récupère ce qui reste utile (preuves, textes, domaine), et je livre un site tenu ensuite par email. Une esthéticienne a gardé son nom de domaine et ses avis ; le reste a été reconstruit en 21 jours. Tu changes d'outil sans devenir cheffe de projet web. La distinction avec l'autonomie totale : tu ne recommences pas le chantier technique seule pour obtenir un résultat stable.",
      },
      {
        h2: "Que change concrètement une refonte Complet ?",
        body: "Design à jour, hiérarchie de l'offre, parcours contact ou réservation, bases SEO, mobile fluide, conformité. Complet à 129 €/mois a du sens quand tu veux aussi un agenda intégré ou un tunnel plus travaillé. Pour démarrer à 89 €/mois peut suffire si tu as surtout besoin d'une vitrine rafraîchie sans réservation avancée. L'implication : tu acceptes de retravailler les contenus avec moi, pas seulement de coller un template neuf sur d'anciens textes. Une refonte utile touche le fond autant que la forme. Les mises à jour après livraison restent par email sous 24 à 72 h.",
      },
      {
        h2: "Que devient ton site actuel pendant la transition ?",
        body: "Je planifie la bascule : le site actuel reste en ligne jusqu'à la mise en service du nouveau. Domaine à ton nom, redirections si les URLs changent, pour limiter la perte de trafic indexé. Tu valides la maquette avant de payer la suite de la mise en service. Après livraison, les ajustements passent par email sous 24 à 72 h. La refonte n'est pas un saut dans le vide : c'est un remplacement contrôlé. Si tu veux un aperçu des formules, la page tarifs détaille Pour démarrer, Complet et Besoin précis selon le périmètre.",
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
      "Si ton site ne reflète plus ton expertise, Complet (ou Pour démarrer selon le périmètre) aligne l'outil sur ton offre actuelle. Envoie-moi l'URL ; je te réponds.",
    ctaLabel: "Parler de ma refonte",
    image: "/image/sophie.png",
    imageAlt: "Refonte de site internet pour femme entrepreneuse",
  },
  {
    slug: "site-web-femme-qui-se-lance",
    label: "Femme qui se lance",
    title:
      "Création site web pour femmes qui se lancent | Kopio dès 89€/mois",
    metaDescription:
      "Création de site web pour femmes qui se lancent : vitrine claire, sans compétences techniques. Abonnement Kopio dès 89 €/mois, en ligne en 14 jours.",
    keyword: "création site web femmes qui se lancent",
    h1: "Ton premier site,",
    h1Highlight: "quand tu te lances",
    tldr:
      "Kopio crée le site web des femmes qui se lancent : design personnalisé, hébergement inclus, mises à jour par email. Dès 89 €/mois en formule Pour démarrer, livraison en 14 jours. Tu poses ton activité ; je porte la technique.",
    intro:
      "Tu quittes le salariat, tu ouvres une activité, tu as une offre à rendre visible. Un site clair dit qui tu aides et comment te contacter, sans que tu apprennes un builder en parallèle du lancement.",
    sections: [
      {
        h2: "Pourquoi un site compte dès le lancement ?",
        body: "Au démarrage, tu n'as pas encore dix ans de bouche-à-oreille. Les premières clientes te jugent sur ce qu'elles trouvent en ligne : clarté de l'offre, sérieux du positionnement, facilité à écrire. Instagram montre que tu existes ; une URL stable explique le cadre. En 2025, plusieurs coachs et consultantes en reconversion que j'ai accompagnées ont accéléré leurs premiers appels dès qu'elles avaient une page à envoyer après un networking. Concrètement, tu remplaces le PDF long ou le long message vocal par un lien. Le site devient la preuve minimale de sérieux pendant que tu construis le reste.",
      },
      {
        h2: "Que change le fait de se lancer sans compétences techniques ?",
        body: "Le temps du lancement part déjà dans l'offre, la compta, le réseau et parfois la famille. Ajouter Wix ou WordPress en soirée produit souvent un chantier abandonné à mi-parcours. Chez Kopio, tu valides un brief et une maquette ; je livre et je maintiens. La distinction avec « créer son site seule » : tu ne portes pas la courbe d'apprentissage en plus du lancement. Une formatrice en 2025 a mis en ligne Pour démarrer en 14 jours pendant qu'elle finalisait son premier programme. Tu restes sur ton métier. Le site suit.",
      },
      {
        h2: "Quelle formule pour une femme qui se lance ?",
        body: "Pour démarrer à 89 €/mois (+ 390 € de mise en service, ou 1 890 € en paiement unique) porte une one-page claire : présentation, offre, preuves, contact. Complet à 129 €/mois convient si tu as déjà besoin de plusieurs pages ou d'une réservation avancée. Dans les faits, la majorité des femmes qui se lancent commencent en Pour démarrer puis évoluent. Tu lisses la trésorerie pendant les premiers mois. Le détail des inclusions est sur la page tarifs. Tu choisis un cadre proportionné à ton stade, pas une usine à gaz d'agence.",
      },
      {
        h2: "En quoi est-ce différent d'un Linktree ou d'une page LinkedIn ?",
        body: "Linktree concentre des liens ; LinkedIn dépend d'un fil d'actualité. Ni l'un ni l'autre ne pose une offre structurée, des preuves et un parcours mobile que tu contrôles. Une page Kopio centralise le discours et te donne une adresse à coller partout. Une consultante en lancement m'a dit qu'elle envoyait encore son profil LinkedIn : les décideuses demandaient « un vrai site ». Après mise en ligne, les suites d'échange se sont cadrées plus vite. Tu gardes les réseaux pour la découverte. Le site porte la conversion.",
      },
    ],
    problems: [
      "Offre prête, aucune URL claire à envoyer",
      "Temps déjà pris par le lancement, pas par un builder",
      "Besoin d'apparaître crédible sans budget agence",
    ],
    solutions: [
      "One-page Pour démarrer en 14 jours",
      "Tu valides ; je livre et je maintiens par email",
      "Hébergement, domaine, bases SEO et RGPD inclus",
    ],
    recommendedPlanId: "launch",
    closing:
      "Si tu te lances et que tu veux une vitrine tenue sans apprendre la technique, Pour démarrer pose la base. Écris-moi où tu en es ; je te réponds sur le périmètre.",
    ctaLabel: "Parler de mon premier site",
    image: "/image/independant.jpg",
    imageAlt: "Femme qui se lance : création de site web professionnel",
  },
  {
    slug: "site-web-maman-freelance",
    label: "Maman freelance",
    title:
      "Webdesigner pour maman freelance | Site web dès 89€/mois | Kopio",
    metaDescription:
      "Webdesigner pour maman freelance : site clair, mises à jour par email, sans soirées sur un builder. Abonnement Kopio dès 89 €/mois.",
    keyword: "webdesigner pour maman freelance",
    h1: "Un site tenu pour toi,",
    h1Highlight: "entre clients et famille",
    tldr:
      "Kopio est la webdesigner / studio en abonnement pour mamans freelances : site personnalisé, hébergement inclus, modifications par email sous 24 à 72 h. Dès 89 €/mois. Tu factures ton métier ; je gère le site.",
    intro:
      "Tu cumules prestations, admin et charge familiale. Un site utile doit travailler sans te demander des soirées d'éditeur. Je livre et je maintiens ; tu valides.",
    sections: [
      {
        h2: "Pourquoi une maman freelance a besoin d'une webdesigner dédiée ?",
        body: "Le freelancing exige déjà de produire, facturer et trouver des clients. La charge parentale réduit les plages pour apprendre un CMS. Une webdesigner en abonnement retire le chantier technique du soir. En pratique, les indépendantes que j'accompagne envoient un email pour une mise à jour de tarif ou de bio ; c'est en ligne sous 24 à 72 h. Tu ne cherches pas une relation affective. Tu cherches une exécution fiable dans un temps contraint. Le site reste à jour pendant que tu es en production ou avec tes enfants.",
      },
      {
        h2: "En quoi est-ce différent d'un freelance « à la mission » ?",
        body: "Un freelance ponctuel livre puis disparaît souvent derrière un devis de correctifs. Tu te retrouves seule pour les petits changements. Chez Kopio, l'abonnement inclut les mises à jour par email et un interlocuteur unique : moi. Une photographe freelance et mère de deux enfants a basculé d'un site livré sans suivi vers Complet : les séries s'ajoutent sans nouveau devis à chaque fois. Tu paies la continuité, pas seulement le fichier initial. La distinction est le mécanisme de maintenance, pas un slogan.",
      },
      {
        h2: "Quelle formule si ton temps est déjà saturé ?",
        body: "Pour démarrer à 89 €/mois convient si tu as besoin d'une vitrine claire et d'un contact. Complet à 129 €/mois couvre plusieurs pages, SEO local et réservation avancée si tu vends des créneaux. Le kickoff reste court : un appel de lancement, puis des validations asynchrones. Dans les faits, tu n'enchaînes pas six workshops. Tu reçois des propositions, tu valides, je produis. L'implication : préparer textes et photos en amont (même smartphone) accélère la livraison de 14 ou 21 jours sans monopoliser tes semaines.",
      },
      {
        h2: "Comment concilier site pro et emploi du temps parental ?",
        body: "Le site ne doit pas dépendre de tes créneaux libres le soir. Les modifications passent par email ; tu n'ouvres pas d'éditeur. Les bases SEO et le mobile sont posés dès la livraison pour que ton URL travaille aussi quand tu es offline. Une coach freelance maman a vu ses demandes d'appel arriver via le formulaire pendant ses congés scolaires, sans toucher au site. Concrètement, tu investis dans un outil qui tourne sans toi. Les réseaux restent optionnels pour la découverte ; le site porte l'offre stable.",
      },
    ],
    problems: [
      "Pas de plage pour apprendre un builder",
      "Site livré autrefois, plus personne pour les updates",
      "Besoin d'une URL pro malgré un agenda saturé",
    ],
    solutions: [
      "Abonnement avec mises à jour par email 24-72 h",
      "Une seule interlocutrice, pas de tickets d'agence",
      "Pour démarrer ou Complet selon ton stade",
    ],
    recommendedPlanId: "launch",
    closing:
      "Si tu es maman freelance et que tu veux un site tenu sans absorber la technique, écris-moi. Je te dirai si Pour démarrer ou Complet colle à ton rythme.",
    ctaLabel: "Parler de mon site freelance",
    image: "/image/independant.jpg",
    imageAlt: "Maman freelance : site web professionnel tenu en abonnement",
  },
];

export function getBesoin(slug: string): BesoinPageData | undefined {
  return besoins.find((b) => b.slug === slug);
}
