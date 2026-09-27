export interface MetierFaq {
  question: string;
  answer: string;
}

export interface MetierSection {
  h2: string;
  body: string;
}

export interface MetierPage {
  slug: string;
  label: string;
  keyword: string;
  metier: string;
  metierPlural: string;
  title: string;
  metaDescription: string;
  h1: string;
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
  recommendedPlanId: "launch" | "pro" | "sur-mesure";
  relatedBesoinSlug: string;
  relatedBesoinLabel: string;
  closing: string;
  ctaLabel: string;
  faqs: MetierFaq[];
  image: string;
  imageAlt: string;
}

export const METIER_BASE = "/site-web-pour";

export function metierPath(slug: string): string {
  return `${METIER_BASE}/${slug}`;
}

export const metiers: MetierPage[] = [
  {
    slug: "coach",
    label: "Coach",
    keyword: "site web pour coach",
    metier: "coach",
    metierPlural: "coachs",
    title: "Site web pour coach | Abonnement mensuel dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour coach en France : offre claire, preuves, prise de contact. Abonnement Kopio dès 89 €/mois, livré en 14 jours, sans compétences techniques.",
    h1: "Le site qui donne à ton activité de coach la crédibilité qu'elle mérite",
    tldr:
      "Je crée ton site web pour coach en abonnement mensuel : design personnalisé, hébergement inclus, mises à jour par email. Dès 89 €/mois avec Pour démarrer, en ligne en 14 jours. Pensé pour les coachs femmes en France qui veulent une page d'offre claire à envoyer après un appel ou un networking.",
    intro:
      "Tes prospectes te googlaient avant de réserver un appel. Un site clair explique ton accompagnement, montre ta méthode et rend le prochain pas évident, sans que tu gères la technique.",
    douleur:
      "Bio Instagram trop courte, LinkedIn trop corporate, et aucune page d'offre à envoyer après un networking.",
    whyTitle:
      "Pourquoi une coach a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "Tu vends de la confiance",
        d: "Une landing générique ne raconte ni ta méthode ni pour qui tu travailles.",
      },
      {
        t: "L'offre se lit en 10 secondes",
        d: "Positionnement, format et parcours doivent être limpides dès l'arrivée.",
      },
      {
        t: "Un seul prochain pas",
        d: "Appel découverte, formulaire ou réservation : une action claire sur mobile.",
      },
      {
        t: "Zéro outil à apprendre",
        d: "Tu te concentres sur tes clientes ; je gère design, technique et mises à jour.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi Instagram ne suffit pas pour convertir tes prospectes ?",
        body: "Instagram montre ton quotidien ; il ne remplace pas une page d'offre stable. L'algorithme décide qui voit tes posts, alors qu'une URL reste partageable après un networking, un podcast ou un message LinkedIn. En 2025, une coach à Lyon m'a confié qu'elle envoyait encore un PDF de 8 pages : les prospectes abandonnaient avant la fin. Sur ton site, méthode, formats et preuves tiennent en une lecture scannable. Tu gardes Instagram pour nourrir la relation ; le site porte la décision.",
      },
      {
        h2: "Que doit contenir un site web pour coach pour être crédible ?",
        body: "Un site crédible pour coach pose trois blocs : pour qui tu travailles, comment tu accompagnes, et ce qui se passe après le premier contact. Le mécanisme est simple : la lectrice cherche un cadre, pas un slogan. J'organise ton one-page ou tes pages autour du positionnement, d'une preuve concrète (témoignage, résultat chiffré, parcours) et d'un appel à l'action unique. Concrètement, tu peux envoyer le lien après un DM et la prospecte comprend l'offre sans te relancer trois fois. Le reste (blog, ressources) vient ensuite si tu en as besoin.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site web pour coach chez Kopio ?",
        body: "Pour une coach qui démarre ou clarifie une offre unique, Pour démarrer à 89 €/mois couvre un one-page soigné, l'hébergement et les mises à jour par email, livré en 14 jours. Complet à 129 €/mois ajoute jusqu'à cinq pages, un parcours de réservation plus poussé et un renforcement SEO : utile si tu proposes plusieurs formats (1:1, groupe, programme) ou si tu veux un agenda intégré. Besoin précis reste sur devis quand tu as une plateforme membre ou un parcours atypique. Tu choisis selon la complexité de ton offre, pas selon une grille marketing.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Est-ce que je peux attendre d'avoir « assez » de contenus avant de lancer mon site ?",
        body: "Attendre le texte parfait freine souvent plus que le manque de contenu. Une coach a rarement un livre blanc prêt ; elle a une méthode, des clientes et des preuves orales. Je pars de ce que tu as déjà : notes d'appel découverte, posts qui marchent, témoignages reçus en message. En pratique, tu valides un brief court ; je structure les blocs, et tu complètes les manques en cours de route. Le site sort en 14 jours sur Pour démarrer si les contenus essentiels arrivent à temps. Tu itères ensuite par email, sans apprendre un CMS.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment ton site travaille avec LinkedIn et Instagram ?",
        body: "Le site n'entre pas en concurrence avec tes réseaux : il les ancre. LinkedIn et Instagram génèrent de la visibilité ; ton URL convertit cette attention en lecture d'offre et en prise de contact. Le maillage est concret : bio Instagram, signature mail, post carrousel et fiche LinkedIn pointent vers la même page. Une coach qui postait trois fois par semaine sans lien clair voyait des likes, peu d'appels. Dès que le lien du site apparaît partout, les demandes se concentrent. Tu mesures ce qui arrive via le formulaire, pas via un vague sentiment d'engagement.",
      },
      {
        h2: "Que se passe-t-il après la mise en ligne ?",
        body: "La livraison n'est pas un point final. Tu m'écris pour une correction de tarif, un nouveau témoignage ou un changement de photo : je mets à jour sous 24 à 72 h. Le mécanisme évite les soirs passés dans un builder. En 2024-2025, la plupart des coachs que j'accompagne ajustent leur offre deux à trois fois dans l'année ; le site suit sans refonte complète. Tu restes concentrée sur tes sessions. Si ton activité évolue vers plusieurs programmes, je te propose le passage à Complet sans tout recommencer.\n\nCe rythme de maintenance colle au quotidien d'une indépendante : peu de temps, besoin de réactivité, zéro formation outil. Tu restes dans ton métier pendant que le site reste à jour. Si un chantier plus large apparaît (nouvelle offre, refonte de parcours), je le traite dans un échange dédié avant de toucher à la structure.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour coach",
    priceTitle: "Combien coûte un site pour une coach ?",
    recommendedPlanId: "launch",
    relatedBesoinSlug: "site-vitrine-independante",
    relatedBesoinLabel: "site vitrine d'indépendante",
    closing:
      "Si tu veux une page d'offre claire à envoyer dès demain, écris-moi : je regarde avec toi ton positionnement de coach. Réponse sous 48 h ouvrées.",
    ctaLabel: "Parler de mon site coach",
    faqs: [
      {
        question: "LinkedIn ou Instagram ne suffisent-ils pas pour une coach ?",
        answer:
          "Ils aident à te faire connaître. Ton site centralise l'offre, les preuves et le contact hors algorithme. Tu l'envoies à une prospecte sérieuse sans dépendre d'un post qui disparaît en 48 h. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Combien coûte un site web pour coach ?",
        answer:
          "Pour démarrer commence à 89 €/mois ; Complet à 129 €/mois si tu as besoin de plusieurs pages ou d'une réservation avancée. Mise en service ou paiement unique restent possibles selon le devis. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Combien de temps pour être en ligne ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet, après validation du devis et réception des contenus essentiels. Les retards viennent surtout des textes manquants, pas de la technique. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Est-ce que je pourrai modifier mon site ensuite ?",
        answer:
          "Oui. Tu m'envoies un email avec la modification : je mets à jour sous 24 à 72 h. Tu n'as aucun outil à apprendre ni accès admin à gérer. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
    ],
    image: "/image/independant.jpg",
    imageAlt: "Coach indépendante : exemple de site web professionnel",
  },
  {
    slug: "praticienne-bien-etre",
    label: "Praticienne bien-être",
    keyword: "site web pour praticienne bien-être",
    metier: "praticienne bien-être",
    metierPlural: "praticiennes bien-être",
    title: "Site web pour praticienne bien-être | dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour praticienne bien-être : identité forte, offre claire, réservation. Exemple client PULSE. Abonnement Kopio dès 89 €/mois.",
    h1: "Le site qui donne à ton activité de praticienne bien-être la crédibilité qu'elle mérite",
    tldr:
      "Je conçois des sites web pour praticiennes bien-être en abonnement mensuel : identité visuelle affirmée, parcours de réservation clair, loin du template wellness générique. Exemple : PULSE (Camille R.). Dès 89 €/mois avec Pour démarrer ; hébergement et mises à jour inclus.",
    intro:
      "Le bien-être en ligne regorge de sites qui se ressemblent. Tu as besoin d'une présence qui te ressemble vraiment, et qui conduit à une réservation sans friction.",
    douleur:
      "Trop de vitrines « spa pastel » : ton expertise ne ressort pas, les clientes hésitent à réserver un premier créneau.",
    whyTitle:
      "Pourquoi une praticienne bien-être a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "L'ambiance compte autant que l'offre",
        d: "Typo, couleurs et photos doivent coller à ta pratique, pas à un template wellness.",
      },
      {
        t: "Réservation sans friction",
        d: "Créneaux, confirmation et contact : le parcours vaut autant que le design.",
      },
      {
        t: "Positionnement lisible",
        d: "Pour qui tu travailles, ta méthode, ce que tu refuses : tout doit être dit.",
      },
      {
        t: "Déléguer plutôt que bricoler",
        d: "Entre les séances, tu as besoin d'une alliée qui gère le site pour toi.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi tant de sites bien-être se ressemblent-ils ?",
        body: "Le secteur recycle les mêmes codes pastel et les mêmes formules vagues. Une cliente qui compare trois praticiennes ne retient rien si tout paraît interchangeable. Le mécanisme est éditorial autant que visuel : tu nommes pour qui tu travailles, ce que tu fais concrètement en séance, et ce qui te différencie. Pour PULSE, j'ai écarté le look « spa classique » au profit d'une typo bold et d'un parcours de réservation net. Résultat : l'identité porte autant que la liste de soins. Ton site doit donner une impression de cabinet, pas de catalogue générique.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Comment intégrer la réservation sans alourdir ton quotidien ?",
        body: "Les DM Instagram créent des allers-retours, des oublis et des créneaux mal notés. Un parcours de réservation sur le site centralise la demande : la cliente choisit, tu confirmes, le fil de messages se calme. Dès Pour démarrer, le chemin vers le contact est clair ; Complet ajoute agenda et confirmation automatique. En pratique, une praticienne qui gérait tout en stories passe moins de temps à répondre « tu as un créneau jeudi ? ». Tu gardes la main sur tes disponibilités. Le site devient l'entrée principale, Instagram reste le canal de découverte.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site pour une praticienne bien-être ?",
        body: "Pour démarrer à 89 €/mois convient si tu as une offre principale et un one-page suffit à présenter méthodes, tarifs et prise de contact. Complet à 129 €/mois est souvent le bon niveau dès que tu veux plusieurs pages (soins, à propos, FAQ), un SEO local plus poussé et une réservation avancée. Besoin précis couvre un parcours très spécifique sur devis. Pour PULSE, la logique Complet a servi l'identité et la conversion ; pour une installation récente, Pour démarrer pose déjà une base solide. Tu paies un abonnement avec maintenance, pas un site abandonné après livraison.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Faut-il attendre d'avoir un local parfait avant de lancer son site ?",
        body: "Beaucoup de praticiennes reportent le site jusqu'à la déco du cabinet ou la photo « idéale ». Or les clientes cherchent d'abord le cadre de la pratique et un moyen de réserver. Je travaille avec les visuels disponibles et une direction artistique claire ; j'enrichis la galerie ensuite. En 2025, une praticienne en installation progressive a mis en ligne son offre en 14 jours, puis a ajouté photos et nouveaux soins au fil des mois. Le site suit l'activité. Attendre l'esthétique parfaite laisse tes concurrentes répondre aux recherches locales avant toi.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment ton site et Instagram se complètent-ils ?",
        body: "Instagram montre l'ambiance du cabinet et le quotidien des séances ; le site porte l'offre, les tarifs et la réservation. Le maillage est simple : chaque bio, chaque highlight et chaque post « comment réserver » renvoie vers la même URL. Une cliente qui découvre ton compte le soir peut lire le cadre le lendemain sans scroller dix stories. Tu évites de répéter les mêmes infos en DM. Concrètement, Instagram attire ; le site convertit et t'appartient. Quand l'algorithme change, ton adresse reste stable pour Google et pour le bouche-à-oreille.",
      },
      {
        h2: "Que change un site clairement positionné pour tes réservations ?",
        body: "Un positionnement flou attire des demandes hors cible : mauvais format, mauvaises attentes, annulations. Un site qui dit pour qui tu travailles filtre avant le premier message. Sur PULSE, le parcours de réservation et le ton du site ont clarifié l'expérience attendue. En pratique, tu reçois moins de « c'est quoi exactement ? » et plus de créneaux confirmés. Tu gagnes du temps entre deux clientes. Le design n'est pas décoratif : il porte le message et la conversion.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
    ],
    includedTitle:
      "Ce qui est inclus dans un site Kopio pour praticienne bien-être",
    priceTitle: "Combien coûte un site pour une praticienne bien-être ?",
    caseStudyId: "pulse",
    caseStudyHeading: "Exemple concret : PULSE",
    recommendedPlanId: "launch",
    relatedBesoinSlug: "site-avec-reservation-en-ligne",
    relatedBesoinLabel: "site avec réservation en ligne",
    closing:
      "Si tu veux un site à la hauteur de ta pratique, loin du template wellness, écris-moi : je regarde avec toi ton offre et ton parcours de réservation.",
    ctaLabel: "Parler de mon site bien-être",
    faqs: [
      {
        question: "Instagram ne suffit-il pas pour une praticienne bien-être ?",
        answer:
          "Instagram montre le quotidien. Le site centralise offre, méthode et réservation, et t'appartient vraiment. Tu restes trouvable quand le feed change ou que ta cliente cherche ton nom sur Google. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Combien coûte un site pour praticienne bien-être ?",
        answer:
          "Pour démarrer commence à 89 €/mois. Complet à 129 €/mois convient souvent dès que tu veux réservation avancée, plusieurs pages et un SEO local plus solide. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Est-ce que tu gères la prise de rendez-vous ?",
        answer:
          "Oui. Le parcours de contact est clair dès Pour démarrer ; agenda et confirmation automatique arrivent avec Complet. On choisit le niveau selon ton volume de demandes. Tu restes concentrée sur ton métier pendant que je gère la technique et les mises à jour. Si ton besoin dépasse le forfait, je te le dis clairement avant le devis.",
      },
      {
        question: "Quel est le délai de livraison ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet, après validation du devis. Les contenus (textes, photos) déterminent surtout le rythme réel. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
    ],
    image: "/image/pulse.jpg",
    imageAlt: "PULSE : site web pour consultante en bien-être",
  },
  {
    slug: "consultante",
    label: "Consultante",
    keyword: "site web pour consultante",
    metier: "consultante",
    metierPlural: "consultantes",
    title: "Site web pour consultante | Abonnement mensuel dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour consultante indépendante : offre claire, preuves, contact. Abonnement mensuel Kopio dès 89 €/mois, livré en 14-21 jours.",
    h1: "Le site qui donne à ton activité de consultante la crédibilité qu'elle mérite",
    tldr:
      "Je crée ton site web pour consultante en abonnement mensuel : positionnement net, preuves, prise de contact professionnelle. Dès 89 €/mois avec Pour démarrer. Pour consultantes en France qui veulent convertir sans gérer le technique ni dépendre uniquement de LinkedIn.",
    intro:
      "Tes clientes B2B ou B2C te jugent en quelques secondes. Un site propre montre ton expertise, tes résultats et comment travailler avec toi.",
    douleur:
      "LinkedIn actif, mais aucune page d'offre détaillée à envoyer après un premier échange sérieux.",
    whyTitle:
      "Pourquoi une consultante a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "Expertise scannable",
        d: "Pour qui, problème résolu, méthode, livrables : structure nette, pas brochure floue.",
      },
      {
        t: "Preuves avant slogans",
        d: "Cas clients, résultats et témoignages placés là où la décision se joue.",
      },
      {
        t: "Contact professionnel",
        d: "Formulaire, calendrier ou email selon ton process commercial.",
      },
      {
        t: "Ton temps se facture",
        d: "Je gère le site ; tu gardes ton énergie pour les missions.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi LinkedIn ne remplace pas un site pour consultante ?",
        body: "LinkedIn génère de la visibilité et des conversations. Il ne te donne pas une page d'offre contrôlée, hors fil d'actualité, que tu envoies après un premier call. Le mécanisme est simple : la décideuse veut un lien à transmettre en interne, pas un screenshot de post. En 2025, une consultante RH à Nantes m'a dit qu'elle perdait des suites faute de page « comment travailler ensemble ». Son site a centralisé méthode, livrables et contact. LinkedIn reste le filet ; le site porte la conversion et le référentiel de ton expertise.",
      },
      {
        h2: "Comment structurer l'offre d'une consultante sur un site ?",
        body: "Une consultante vend un problème résolu, pas une liste de compétences. Je structure la page autour du public, du diagnostic, de la méthode et des preuves. Le lecteur scanne ; il doit comprendre en moins d'une minute s'il est au bon endroit. Sur le projet PULSE, le positionnement net et le parcours clair ont remplacé une présence trop générique. Pour toi, cela veut dire une offre lisible, des cas ou résultats visibles, et un seul appel à l'action. Tu évites le site « à propos de moi » qui ne dit pas ce que tu livres.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site web pour consultante ?",
        body: "Pour démarrer à 89 €/mois couvre une vitrine one-page efficace : positionnement, preuves, contact. Complet à 129 €/mois convient si tu présentes plusieurs offres, des pages cas clients ou un calendrier de prise de rendez-vous. Besoin précis traite les parcours atypiques (espace client, tunnel long) sur devis. La plupart des consultantes démarrent sur Pour démarrer puis passent à Complet quand le catalogue d'offres s'étoffe. Tu investis dans une présence stable, pas dans un outil que tu dois administrer chaque semaine.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Et si mon positionnement évolue encore ?",
        body: "Les consultantes affinent souvent leur niche après six à douze mois. Ce n'est pas une raison de rester sans site. Je construis une structure éditoriale souple : blocs d'offre que je reformule par email sans tout reconstruire. En pratique, tu changes un titre, un public cible ou un livrable ; je mets à jour sous 24 à 72 h. Une consultante marketing a ainsi recentré son message deux fois en un an sans refonte. Le site suit ton positionnement. Tu n'attends pas la « version définitive » de ton expertise pour être joignable.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment relier ton site à LinkedIn et à ton emailing ?",
        body: "Le maillage rend ton expertise cohérente partout. Signature mail, featured LinkedIn, newsletter et PDF de proposition pointent vers la même URL. Une prospecte qui te découvre sur un post retrouve les preuves sur le site le soir même. Tu évites les versions contradictoires de ton offre. Concrètement, chaque canal amène du trafic ; le site porte le détail et le formulaire. Quand LinkedIn change son algorithme, ton adresse reste la référence que tu contrôles.",
      },
      {
        h2: "Que gagnes-tu concrètement avec une page d'offre claire ?",
        body: "Une page claire réduit les appels de qualification floue. La cliente arrive déjà alignée sur le problème que tu traites et sur le format de mission. J'observe plus de demandes écrites structurées (contexte, délai, budget approximatif) quand le formulaire et l'offre sont explicites. Tu prépares mieux le premier entretien. Le site ne remplace pas ton expertise commerciale ; il filtre et accélère. Tu factures ton temps de conseil, pas celui passé à réexpliquer les bases.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour consultante",
    priceTitle: "Combien coûte un site pour une consultante ?",
        recommendedPlanId: "launch",
    relatedBesoinSlug: "site-vitrine-independante",
    relatedBesoinLabel: "site vitrine d'indépendante",
    closing:
      "Si tu veux une page d'offre digne de tes missions, écris-moi : je clarifie avec toi ton positionnement et le parcours de contact.",
    ctaLabel: "Parler de mon site consultante",
    faqs: [
      {
        question: "Un site est-il utile si j'ai déjà LinkedIn ?",
        answer:
          "LinkedIn génère de la visibilité. Le site convertit : offre détaillée, preuves et contact hors algorithme. Tu l'envoies après un premier échange comme référence stable. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Combien coûte un site web pour consultante ?",
        answer:
          "Pour démarrer commence à 89 €/mois. Complet à 129 €/mois convient si tu as plusieurs pages, des cas clients ou un parcours de prise de rendez-vous. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Puis-je présenter plusieurs offres ?",
        answer:
          "Oui. One-page structurée en Pour démarrer, ou jusqu'à cinq pages en Complet. On priorise la clarté : mieux vaut deux offres nettes que six floues. Tu restes concentrée sur ton métier pendant que je gère la technique et les mises à jour. Si ton besoin dépasse le forfait, je te le dis clairement avant le devis.",
      },
      {
        question: "Quel est le délai ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet après validation du devis. Les textes et preuves clients restent le facteur le plus déterminant. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
    ],
    image: "/image/pulse.jpg",
    imageAlt: "Consultante indépendante : site web professionnel Kopio",
  },
  {
    slug: "therapeute",
    label: "Thérapeute",
    keyword: "site web pour thérapeute",
    metier: "thérapeute",
    metierPlural: "thérapeutes",
    title: "Site web pour thérapeute | dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour thérapeute, sophrologue, naturopathe, hypnothérapeute. Abonnement mensuel Kopio dès 89 €/mois, cadre clair et éthique.",
    h1: "Le site qui donne à ton activité de thérapeute la crédibilité qu'elle mérite",
    tldr:
      "Je propose un site web pour thérapeute en abonnement : ton cadre, tes approches, la prise de rendez-vous, sans marketing agressif. Dès 89 €/mois avec Pour démarrer. Pour sophrologues, naturopathes, hypnothérapeutes et praticiennes en France qui veulent rassurer avant le premier contact.",
    intro:
      "Tes patientes cherchent quelqu'un de sérieux et rassurant. Ton site doit poser le cadre, expliquer ta pratique et faciliter le premier contact.",
    douleur:
      "Présence limitée à Doctolib ou pages trop « venteuses » qui ne collent pas à ton éthique professionnelle.",
    whyTitle:
      "Pourquoi une thérapeute a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "Le ton compte autant que le design",
        d: "Rassurer sans promettre de miracle : un site thérapeutique n'est pas une landing e-commerce.",
      },
      {
        t: "Cadre explicite",
        d: "Public, modalités, durée, tarifs ou fourchettes : la clarté crée la confiance.",
      },
      {
        t: "Discrétion et sobriété",
        d: "Formulaire simple, infos légales, pas de gadgets inutiles.",
      },
      {
        t: "Tu es déjà saturée",
        d: "Pas de bricolage technique : tu valides, je livre et je maintiens.",
      },
    ],
    sections: [
      {
        h2: "Doctolib remplace-t-il vraiment un site pour thérapeute ?",
        body: "Doctolib aide à la prise de rendez-vous et à la visibilité locale. Il ne raconte pas ta pratique, tes limites ni le déroulé d'une première séance. Une patiente hésitante lit souvent plusieurs profils avant d'écrire ; un site pose le cadre avec ton ton. En 2025, une sophrologue à Bordeaux m'a dit que les demandes via son site arrivaient déjà « cadrées » : public, motif, disponibilité. Doctolib reste un canal. Le site est ta vitrine éthique, que tu contrôles hors de la logique d'annuaire.",
      },
      {
        h2: "Comment parler de ta pratique sans promettre de résultats ?",
        body: "Le marketing agressif casse la confiance dans les métiers d'accompagnement. J'écris et je structure autour du cadre : pour qui tu reçois, comment se déroule une séance, quelles approches tu utilises, sans garantie de guérison. Le mécanisme rassure parce qu'il est précis. Une hypnothérapeute a ainsi clarifié ce qu'elle traitait et ce qu'elle orientait ailleurs ; les premiers messages sont devenus plus adaptés. Tu restes alignée avec ton éthique. Le site filtre autant qu'il attire.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site pour une thérapeute ?",
        body: "Pour démarrer à 89 €/mois pose un one-page clair : pratique, cadre, contact ou orientation vers la réservation. Complet à 129 €/mois ajoute des pages (approches, FAQ, à propos), un SEO local plus poussé et une réservation avancée. Besoin précis intervient sur devis pour des besoins très spécifiques. Beaucoup de thérapeutes commencent en Pour démarrer puis passent à Complet quand le volume de demandes augmente. Tu paies un abonnement avec mises à jour, adapté à un rythme de cabinet, pas à une logique de croissance agressive.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Un site peut-il rester discret et conforme à mon éthique ?",
        body: "Oui, et c'est souvent la condition pour que tu te sentes à l'aise de le partager. Je pars de ton brief professionnel : ton, limites, mentions légales, absence de promesses. Pas de pop-ups agressifs ni de formulations vendeuses. En pratique, le design reste sobre, le formulaire est simple, les informations utiles sont accessibles. Une naturopathe a validé chaque phrase sensible avant mise en ligne. Tu gardes la main sur le message. Le site reflète ton cabinet, pas une landing de conversion forcée.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment articuler site, Doctolib et Instagram ?",
        body: "Chaque canal a un rôle. Instagram humanise ; Doctolib facilite le créneau ; le site explique la pratique en profondeur. Le maillage consiste à renvoyer bio, fiche et signature vers la même URL de cadre. Une patiente qui te découvre sur Instagram lit le déroulé de séance sur le site avant de réserver. Tu réduis les questions répétitives en message. Concrètement, tu n'abandonnes aucun outil : tu leur donnes une maison commune. Quand une plateforme change ses règles, ton site reste ta référence.",
      },
      {
        h2: "Que se passe-t-il quand tu modifies tes tarifs ou tes modalités ?",
        body: "Les cabinets ajustent horaires, tarifs et formats (présentiel, visio) plusieurs fois par an. Tu m'envoies la modification par email ; je mets à jour sous 24 à 72 h. Tu n'ouvres pas un back-office entre deux patientes. En 2024, plusieurs thérapeutes ont basculé une partie de leur activité en visio : le site a suivi en quelques échanges. Tu restes concentrée sur les séances. La maintenance fait partie de l'abonnement, ce n'est pas une option oubliée après la livraison.\n\nCe rythme de maintenance colle au quotidien d'une indépendante : peu de temps, besoin de réactivité, zéro formation outil. Tu restes dans ton métier pendant que le site reste à jour. Si un chantier plus large apparaît (nouvelle offre, refonte de parcours), je le traite dans un échange dédié avant de toucher à la structure.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour thérapeute",
    priceTitle: "Combien coûte un site pour une thérapeute ?",
    recommendedPlanId: "launch",
    relatedBesoinSlug: "site-avec-reservation-en-ligne",
    relatedBesoinLabel: "site avec réservation en ligne",
    closing:
      "Si tu veux un site aligné avec ton cadre thérapeutique, écris-moi : je pars de ta pratique et de ton parcours de contact.",
    ctaLabel: "Parler de mon site thérapeute",
    faqs: [
      {
        question: "Doctolib remplace-t-il un site ?",
        answer:
          "Doctolib aide à la prise de rendez-vous. Un site explique ta pratique et te différencie : c'est ta vitrine, pas un annuaire. Les deux se complètent quand le lien du site apparaît sur ta fiche. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Combien coûte un site pour thérapeute ?",
        answer:
          "Pour démarrer commence à 89 €/mois. Complet à 129 €/mois convient si tu veux réservation avancée, plusieurs pages et un SEO local plus développé. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Le site peut-il rester discret et éthique ?",
        answer:
          "Oui. J'évite le marketing agressif. Le brief part de ton cadre professionnel, de tes limites et du ton que tu assumeras devant tes patientes. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Quel est le délai de livraison ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet après validation du devis. Les textes sensibles se valident ensemble avant la mise en ligne. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
    ],
    image: "/image/yoga.jpg",
    imageAlt: "Thérapeute indépendante : site web rassurant et professionnel",
  },
  {
    slug: "formatrice",
    label: "Formatrice",
    keyword: "site web pour formatrice",
    metier: "formatrice",
    metierPlural: "formatrices",
    title: "Site web pour formatrice | Abonnement mensuel dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour formatrice et professeure indépendante : programmes, inscriptions, crédibilité. Kopio dès 89 €/mois.",
    h1: "Le site qui donne à ton activité de formatrice la crédibilité qu'elle mérite",
    tldr:
      "Je crée ton site web pour formatrice en abonnement : programmes clairs, preuves pédagogiques, inscription simplifiée. Dès 89 €/mois avec Pour démarrer ; Complet à 129 €/mois pour plusieurs programmes et un parcours plus riche. Sans compétences techniques de ton côté.",
    intro:
      "Que tu formes en présentiel ou en ligne, ton site doit clarifier pour qui c'est, ce que les participantes repartent avec, et comment s'inscrire.",
    douleur:
      "Programmes éparpillés entre PDF, Instagram et un formulaire peu rassurant pour s'inscrire.",
    whyTitle:
      "Pourquoi une formatrice a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "Les programmes ont besoin d'espace",
        d: "Objectifs, format, prérequis, tarifs : une structure claire vaut mieux qu'un long post.",
      },
      {
        t: "Crédibilité pédagogique visible",
        d: "Parcours, certifications et retours d'apprenantes dès l'arrivée.",
      },
      {
        t: "Inscription simple",
        d: "Formulaire ou réservation : une friction en moins pour la participante.",
      },
      {
        t: "Tu prépares déjà tes sessions",
        d: "Pas le temps d'apprendre un outil web : je m'en charge.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi un PDF et Instagram ne suffisent pas pour vendre une formation ?",
        body: "Un PDF se perd dans les boîtes mail ; Instagram ne garde pas une fiche programme stable. La participante veut un lieu unique pour lire objectifs, prérequis, dates et modalités d'inscription. Le site centralise ces infos et te donne une URL à coller dans une proposition entreprise ou un email. En 2025, une formatrice soft skills à Lille passait encore par un Google Form : les inscriptions hésitaient sur le sérieux du parcours. Après mise en ligne d'une page programme claire, les questions de cadrage ont diminué. Tu vends un cadre pédagogique, pas un post éphémère.",
      },
      {
        h2: "Comment présenter plusieurs programmes sans noyer la lectrice ?",
        body: "Trop de formations listées sans hiérarchie créent la confusion. Je structure par intention : pour qui, quel résultat, quel format, quel prochain pas. Complet à 129 €/mois donne de l'air avec plusieurs pages ; Pour démarrer peut déjà porter une offre phare très claire. Une formatrice digital a priorisé un programme signature puis a ajouté deux modules en second niveau. La lectrice sait où cliquer. Tu évites le catalogue fourre-tout. Le site guide ; il ne dump pas tout ton catalogue d'un coup.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site pour une formatrice ?",
        body: "Pour démarrer à 89 €/mois convient pour une offre principale et une inscription simple. Complet à 129 €/mois est souvent le bon choix dès que tu as plusieurs programmes, des pages dédiées et un SEO utile pour tes thématiques. Besoin précis couvre boutique de formations, paiement en ligne ou espace membre sur devis. Tu paies selon la complexité réelle de ton catalogue. La maintenance par email suit les changements de dates et de tarifs sans que tu touches au code.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Faut-il un LMS avant d'avoir un site vitrine ?",
        body: "Beaucoup de formatrices croient devoir construire une plateforme complète avant d'être visibles. Or la première priorité est souvent la crédibilité et l'inscription, pas le player de cours. Je commence par la vitrine et le parcours d'inscription ; l'espace membre arrive en Besoin précis si le besoin est réel. En pratique, une formatrice a lancé ses sessions présentiel via Complet, puis a ajouté un parcours en ligne six mois plus tard. Tu évites un outil lourd trop tôt. Le site vitrine finance et valide la demande avant l'usine technique.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Comment ton site relie LinkedIn, email et catalogues OPCO ?",
        body: "Le maillage rend ton offre cohérente auprès des participantes et des financeurs. LinkedIn, signature mail, fiche programme et supports PDF pointent vers la même URL à jour. Une responsable formation qui te découvre sur LinkedIn retrouve dates et objectifs sur le site sans te relancer. Tu réduis les versions obsolètes de ton catalogue. Concrètement, tu mets à jour une fois ; je répercute sur le site. Les canaux d'acquisition restent les tiens ; le site est la source de vérité.",
      },
      {
        h2: "Que se passe-t-il quand tu ajoutes une session ou changes un tarif ?",
        body: "Les catalogues bougent : nouvelles dates, report, tarif early bird. Tu m'écris ; je mets à jour sous 24 à 72 h. Tu ne bloques pas une soirée sur un CMS après une journée de facilitation. En 2024, une formatrice a modifié trois sessions en deux mois via de simples emails. Le site reste aligné avec la réalité du planning. Tu te concentres sur le contenu pédagogique. La réactivité fait partie de l'abonnement Kopio.\n\nCe rythme de maintenance colle au quotidien d'une indépendante : peu de temps, besoin de réactivité, zéro formation outil. Tu restes dans ton métier pendant que le site reste à jour. Si un chantier plus large apparaît (nouvelle offre, refonte de parcours), je le traite dans un échange dédié avant de toucher à la structure.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour formatrice",
    priceTitle: "Combien coûte un site pour une formatrice ?",
    recommendedPlanId: "pro",
    relatedBesoinSlug: "creer-son-site-sans-competences-techniques",
    relatedBesoinLabel: "créer son site sans compétences techniques",
    closing:
      "Si tu veux un site qui présente clairement tes programmes et simplifie l'inscription, écris-moi : je regarde avec toi ton catalogue et le parcours adapté.",
    ctaLabel: "Parler de mon site formatrice",
    faqs: [
      {
        question: "Puis-je vendre des formations en ligne ?",
        answer:
          "Oui. Parcours d'inscription via Complet, ou boutique / espace membre en formule Besoin précis sur devis. On part de ton volume réel, pas d'une plateforme surdimensionnée. Tu restes concentrée sur ton métier pendant que je gère la technique et les mises à jour. Si ton besoin dépasse le forfait, je te le dis clairement avant le devis.",
      },
      {
        question: "Combien coûte un site pour formatrice ?",
        answer:
          "Pour démarrer commence à 89 €/mois ; Complet à 129 €/mois pour plusieurs pages et un SEO plus poussé. Les parcours e-learning complets passent en Besoin précis. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Quel est le délai ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet après validation du devis. Les descriptifs de programmes déterminent surtout le rythme. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
      {
        question: "Puis-je mettre à jour mon catalogue ?",
        answer:
          "Oui. Tu m'écris avec les nouvelles dates ou tarifs ; je mets à jour sous 24 à 72 h. Pas besoin d'apprendre un back-office. Tu décris le changement en quelques lignes ou avec un fichier joint. Je m'occupe du reste, sans te demander d'apprendre un back-office.",
      },
    ],
    image: "/image/independant.jpg",
    imageAlt: "Formatrice indépendante : site web pour présenter ses programmes",
  },
  {
    slug: "creatrice",
    label: "Créatrice",
    keyword: "site web pour créatrice",
    metier: "créatrice",
    metierPlural: "créatrices",
    title: "Site web pour créatrice | dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour créatrice et marque artisanale. Exemple : Madeleine Fragrance. Abonnement mensuel Kopio dès 89 €/mois.",
    h1: "Le site qui donne à ton activité de créatrice la crédibilité qu'elle mérite",
    tldr:
      "Je crée le site web pour créatrice qui raconte ton univers et convertit (vitrine ou précommande). Exemple live : Madeleine Fragrance. Dès 89 €/mois en Pour démarrer ; Complet à 129 €/mois pour une vitrine plus riche. Boutique complète en Besoin précis sur devis.",
    intro:
      "Ton Instagram est soigné, mais une marque a besoin d'une maison. Un site pose l'univers, le process et l'acte d'achat ou de précommande.",
    douleur:
      "Feed Instagram fort, mais aucune vitrine stable pour les précommandes, la presse ou les collabs.",
    whyTitle:
      "Pourquoi une créatrice a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "L'univers est le produit",
        d: "Typo, rythme et photos prolongent la marque, pas un template shop générique.",
      },
      {
        t: "Le process rassure",
        d: "Sur-mesure, délais et matériaux expliqués clairement pour convertir.",
      },
      {
        t: "Une URL stable",
        d: "Pour la presse, les collabs, Google et l'email : hors algorithme Instagram.",
      },
      {
        t: "Tu es déjà en production",
        d: "Je gère le digital pendant que tu crées.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi Instagram ne suffit pas pour une marque créative ?",
        body: "Instagram montre le travail en cours ; il ne remplace pas une vitrine que tu contrôles. L'algorithme cache les posts, les liens en bio sont limités, et la presse demande une URL stable. Le site porte l'univers, le process et la précommande sans dépendre d'un feed. Pour Madeleine Fragrance, j'ai conçu un site élégant qui raconte la marque et convertit en précommande. Tu gardes Instagram pour l'attraction. Le site devient la maison de la marque, partageable avec une journaliste ou une partenaire.",
      },
      {
        h2: "Comment raconter le sur-mesure sans noyer la cliente ?",
        body: "Le sur-mesure intimide si les étapes restent floues. Je structure le process : brief, création, délais, livraison, ce qui est inclus. La cliente comprend où elle met les pieds avant d'écrire. Sur Madeleine Fragrance, le déroulé du parfum sur-mesure clarifie l'expérience autant que les visuels. En pratique, tu reçois des demandes plus précises (occasion, préférences, délai). Tu passes moins de temps à réexpliquer les bases en DM. Le site vend la méthode autant que le produit.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site pour une créatrice ?",
        body: "Pour démarrer à 89 €/mois pose une vitrine one-page à ton image avec contact ou précommande simple. Complet à 129 €/mois ajoute des pages (collections, process, histoire) et un SEO plus solide. La boutique complète (panier, paiement, stocks) passe en Besoin précis sur devis. Madeleine Fragrance illustre une vitrine de marque qui convertit sans usine e-commerce lourde dès le jour un. Tu choisis selon ton stade : raconter et précommander d'abord, industrialiser la vente ensuite.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Faut-il une boutique Shopify avant d'avoir un site de marque ?",
        body: "Pas toujours. Beaucoup de créatrices n'ont pas encore le volume pour absorber commissions, gestion de stock et logistique d'une boutique complète. Une vitrine avec précommande ou demande de devis valide la demande et pose l'univers. En 2025, plusieurs marques artisanales que j'accompagne vendent encore sur rendez-vous ou en drops via Complet. Tu évites un outil trop lourd trop tôt. Quand le volume est là, Besoin précis ajoute panier et paiement sans perdre l'identité construite.\n\nConcrètement, tu valides d'abord que ton univers et ton process convertissent. Ensuite seulement tu industrialises le panier. Je t'aide à choisir le moment : trop tôt coûte cher en outils ; trop tard laisse des ventes en DM.",
      },
      {
        h2: "Comment ton site travaille avec Instagram, la presse et les marketplaces ?",
        body: "Le maillage place ton site au centre. Bio Instagram, dossier de presse, emails collab et fiches marketplace renvoient vers la même URL de marque. Une journaliste trouve l'histoire et les visuels sans fouiller tes stories. Tu contrôles le récit. Concrètement, Instagram et les plateformes restent des canaux ; le site est la source officielle. Quand une marketplace change ses règles, ta marque garde une adresse à toi.",
      },
      {
        h2: "Que se passe-t-il quand tu lances une nouvelle collection ?",
        body: "Les créatrices vivent au rythme des drops et des séries limitées. Tu m'envoies textes et visuels ; je mets à jour la vitrine sous 24 à 72 h. Tu ne reconstruis pas une boutique entière à chaque lancement. En pratique, Madeleine Fragrance et d'autres marques font évoluer pages et précommandes au fil des saisons. Tu restes en atelier. Le site suit la collection, l'abonnement absorbe ces itérations.\n\nCe rythme de maintenance colle au quotidien d'une indépendante : peu de temps, besoin de réactivité, zéro formation outil. Tu restes dans ton métier pendant que le site reste à jour. Si un chantier plus large apparaît (nouvelle offre, refonte de parcours), je le traite dans un échange dédié avant de toucher à la structure.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour créatrice",
    priceTitle: "Combien coûte un site pour une créatrice ?",
    caseStudyId: "madeleine-fragrance",
    caseStudyHeading: "Exemple concret : Madeleine Fragrance",
    recommendedPlanId: "pro",
    relatedBesoinSlug: "boutique-en-ligne-petite-entreprise",
    relatedBesoinLabel: "boutique en ligne",
    closing:
      "Si tu veux une vitrine à la hauteur de ton univers, écris-moi : je regarde avec toi le stade de ta marque et le bon niveau entre vitrine et boutique.",
    ctaLabel: "Parler de mon site créatrice",
    faqs: [
      {
        question: "Puis-je ouvrir une boutique en ligne ?",
        answer:
          "Vitrine et précommandes en Complet ou sur un premier niveau d'abonnement. Boutique complète (panier, paiement) en formule Besoin précis sur devis, quand le volume le justifie. Tu restes concentrée sur ton métier pendant que je gère la technique et les mises à jour. Si ton besoin dépasse le forfait, je te le dis clairement avant le devis.",
      },
      {
        question: "Combien coûte un site pour créatrice ?",
        answer:
          "Pour démarrer commence à 89 €/mois ; Complet à 129 €/mois pour une vitrine multi-pages. L'e-commerce complet se chiffre sur devis en Besoin précis. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "As-tu un exemple de site pour créatrice ?",
        answer:
          "Oui : Madeleine Fragrance, marque de parfum sur-mesure, site live avec précommandes. Il illustre une vitrine de marque forte sans template shop générique. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Quel est le délai ?",
        answer:
          "14 jours pour une vitrine Pour démarrer, 21 jours pour Complet. Une boutique complète demande un planning plus long, défini dans le devis Besoin précis. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
    ],
    image: "/image/madeleine.png",
    imageAlt: "Madeleine Fragrance : site web pour créatrice de parfum",
  },
  {
    slug: "estheticienne",
    label: "Esthéticienne",
    keyword: "site web pour esthéticienne",
    metier: "esthéticienne",
    metierPlural: "esthéticiennes",
    title:
      "Site web pour esthéticienne | Abonnement mensuel dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour esthéticienne et prothésiste ongulaire : soins, galerie, réservation. Exemple Coiffure Luna. Kopio dès 89 €/mois.",
    h1: "Le site qui donne à ton activité d'esthéticienne la crédibilité qu'elle mérite",
    tldr:
      "Je crée ton site web pour esthéticienne ou prothésiste ongulaire : prestations lisibles, galerie, réservation. Abonnement dès 89 €/mois ; Complet à 129 €/mois souvent recommandé pour l'agenda. Pensé mobile-first, avec l'exemple Coiffure Luna pour la prise de rendez-vous locale.",
    intro:
      "Tes clientes comparent les instituts en ligne avant de réserver. Photos, soins et créneaux : tout doit être clair sur téléphone.",
    douleur:
      "Instagram actif, mais horaires, tarifs et prise de rendez-vous introuvables hors de l'application.",
    whyTitle:
      "Pourquoi une esthéticienne a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "La galerie convainc",
        d: "Avant/après et ambiance : preuves visuelles avant le premier message.",
      },
      {
        t: "Catalogue de soins lisible",
        d: "Durées, prix, pour qui : scannables en trente secondes.",
      },
      {
        t: "Réservation mobile critique",
        d: "La majorité de tes clientes cherchent depuis leur téléphone.",
      },
      {
        t: "Entre deux clientes",
        d: "Mises à jour par email : tu restes concentrée sur les soins.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi Instagram ne remplace pas un site pour ton institut ?",
        body: "Instagram montre ton savoir-faire ; il ne te rend pas facile à trouver sur Google ni à réserver hors DM. Les clientes cherchent horaires, tarifs et créneaux depuis leur téléphone, souvent le soir. Un site centralise le catalogue et la réservation. Pour Coiffure Luna, le site a rendu les rendez-vous accessibles autrement que par téléphone seul, avec une présence locale plus claire. Tu gardes Instagram pour l'inspiration. Le site porte la conversion et le référencement de proximité.",
      },
      {
        h2: "Comment présenter soins et tarifs sans perdre la cliente ?",
        body: "Un catalogue flou multiplie les messages « tu fais aussi… ? » et « c'est combien ? ». Je structure prestations, durées et prix de façon scannable sur mobile. La cliente choisit avant d'écrire. En pratique, une esthéticienne qui listait tout en story a réduit les allers-retours dès que la grille de soins est devenue lisible sur le site. Tu prépares mieux la cabine. Le design sert la lecture, pas la décoration seule.\n\nCe rythme de maintenance colle au quotidien d'une indépendante : peu de temps, besoin de réactivité, zéro formation outil. Tu restes dans ton métier pendant que le site reste à jour. Si un chantier plus large apparaît (nouvelle offre, refonte de parcours), je le traite dans un échange dédié avant de toucher à la structure.",
      },
      {
        h2: "Combien coûte un site pour une esthéticienne ?",
        body: "Pour démarrer à 89 €/mois pose une vitrine claire avec contact. Complet à 129 €/mois est souvent le bon niveau : plusieurs pages, SEO local, réservation avancée avec agenda et confirmation. Besoin précis couvre des besoins très spécifiques sur devis. Coiffure Luna illustre l'enjeu local et la prise de rendez-vous. Tu investis dans un parcours qui travaille pendant que tu es en soin. L'abonnement inclut les mises à jour de grille tarifaire par email.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Et si je n'ai pas encore assez de photos avant/après ?",
        body: "Beaucoup d'esthéticiennes reportent le site faute de shoot parfait. Or tu peux démarrer avec les meilleures photos disponibles et une direction claire, puis enrichir la galerie. Je priorise la lisibilité des soins et la réservation ; la galerie grandit ensuite. En 2025, une prothésiste ongulaire a mis en ligne sa grille et son parcours RDV en 21 jours, puis a ajouté des séries chaque mois. Tu n'attends pas le portfolio idéal. Le site commence à travailler dès qu'une cliente peut comprendre et réserver.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment relier site, Instagram et Google Business ?",
        body: "Le maillage local décide souvent qui obtient le rendez-vous. Bio Instagram, fiche Google et stories « réservation » pointent vers la même URL. Une cliente qui te trouve sur Maps lit tes soins sur le site sans te téléphoner aux heures de rush. Tu réduis les appels de simple information. Concrètement, Instagram inspire, Google te trouve, le site convertit. Quand tu changes un tarif, une seule mise à jour sur le site suffit si les liens sont bons.",
      },
      {
        h2: "Que change une réservation en ligne pour ton planning ?",
        body: "Les DM et le téléphone saturent vite entre deux clientes. Un parcours de réservation sur le site déplace une partie des demandes en asynchrone. Complet ajoute confirmation automatique pour limiter les oublis. Sur des activités proches de Coiffure Luna, le gain se voit dans la réduction des allers-retours. Tu gardes la main sur les créneaux. Le site ne remplace pas ton accueil ; il absorbe la charge administrative répétitive.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour esthéticienne",
    priceTitle: "Combien coûte un site pour une esthéticienne ?",
    caseStudyId: "coiffure-luna",
    caseStudyHeading: "Exemple concret : Coiffure Luna",
    recommendedPlanId: "pro",
    relatedBesoinSlug: "site-avec-reservation-en-ligne",
    relatedBesoinLabel: "site avec réservation en ligne",
    closing:
      "Si tu veux un site mobile clair avec soins et réservation, écris-moi : je regarde avec toi ta grille et le niveau d'agenda adapté à ton institut.",
    ctaLabel: "Parler de mon site esthéticienne",
    faqs: [
      {
        question: "Instagram suffit-il pour un institut ?",
        answer:
          "Non pour être trouvée sur Google et centraliser tarifs plus réservation. Instagram complète le site ; il ne le remplace pas. Les deux se renforcent quand la bio pointe vers ton URL. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Combien coûte un site pour esthéticienne ?",
        answer:
          "Pour démarrer commence à 89 €/mois ; Complet à 129 €/mois avec réservation avancée, souvent le bon choix pour un institut ou une prothésiste ongulaire. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Est-ce adapté aussi aux prothésistes ongulaires ?",
        answer:
          "Oui. Même logique : galerie, prestations lisibles, prise de rendez-vous. On adapte le ton et les visuels à ton positionnement. Tu restes concentrée sur ton métier pendant que je gère la technique et les mises à jour. Si ton besoin dépasse le forfait, je te le dis clairement avant le devis.",
      },
      {
        question: "Quel est le délai ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet après validation du devis. La grille de soins et les photos déterminent surtout le rythme. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
    ],
    image: "/image/coiffure.jpg",
    imageAlt: "Esthéticienne indépendante : site vitrine avec réservation",
  },
  {
    slug: "photographe",
    label: "Photographe",
    keyword: "site web pour photographe",
    metier: "photographe",
    metierPlural: "photographes",
    title: "Site web pour photographe | dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour photographe : portfolio, formules, contact. Exemple Photographe Iris. Abonnement mensuel Kopio dès 89 €/mois.",
    h1: "Le site qui donne à ton activité de photographe la crédibilité qu'elle mérite",
    tldr:
      "Je crée ton site web pour photographe en abonnement : portfolio qui met en valeur ton œil, formules claires, demande de devis. Dès 89 €/mois ; Complet à 129 €/mois pour une galerie multi-pages. Exemple : Photographe Iris, avec formulaire qualifiant.",
    intro:
      "Ton travail est visuel, ton site doit l'être aussi, sans ralentir et sans noyer la demande de contact.",
    douleur:
      "Behance ou Instagram seuls : pas de formules claires, peu de SEO local, pas de parcours devis structuré.",
    whyTitle:
      "Pourquoi une photographe a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "Le portfolio est le produit",
        d: "Galerie filtrable, chargement rapide, mises en avant : pas une grille lourde.",
      },
      {
        t: "Formules lisibles",
        d: "Mariage, brand, famille : la cliente sait ce qu'elle réserve.",
      },
      {
        t: "Demandes qualifiées",
        d: "Formulaire qui filtre budget, date et type de shooting.",
      },
      {
        t: "Tu es sur le terrain",
        d: "Je livre et je maintiens pendant que tu shoots.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi Instagram ou Behance ne remplacent pas un portfolio ?",
        body: "Instagram expose ton œil au gré de l'algorithme ; Behance parle surtout aux pairs. Une cliente mariage ou brand veut une URL stable, des formules et un moyen de demander un devis. Le site concentre séries, offres et contact. Pour Photographe Iris, j'ai posé une galerie filtrable, des témoignages et un formulaire qualifiant. Tu présentes ton travail dans le cadre que tu choisis. Les réseaux restent des vitrines d'acquisition ; le portfolio convertit.",
      },
      {
        h2: "Comment éviter qu'une galerie trop lourde fasse fuir la cliente ?",
        body: "Une grille massive ralentit le mobile et noie le prochain pas. Je hiérarchise : séries fortes en premier, filtres utiles, compression soignée, appel à l'action visible. La cliente comprend ton style en quelques écrans, puis demande un devis. En pratique, Iris et d'autres portfolios que je livre privilégient la lecture éditoriale plutôt que le dump de 200 photos. Tu montres ton niveau sans saturer. Le contact reste accessible dès le premier passage.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site pour une photographe ?",
        body: "Pour démarrer à 89 €/mois peut porter une vitrine ciblée si ton offre est simple. Complet à 129 €/mois est souvent le bon niveau pour une galerie multi-pages, des formules détaillées et un SEO local. Besoin précis intervient pour des besoins atypiques (espace client, livraison de galeries privées) sur devis. Photographe Iris illustre la logique Complet : portfolio clair et demandes mieux cadrées. Tu paies pour une vitrine qui charge vite et que je mets à jour quand tu ajoutes une série.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Est-ce trop tôt si je n'ai que deux ou trois séries fortes ?",
        body: "Attendre d'avoir « assez » d'images retarde souvent des demandes déjà possibles. Un site peut mettre en avant tes meilleures séries et clarifier tes formules actuelles. Je construis une structure qui accueille de nouvelles galeries ensuite. En 2025, une photographe brand à Lyon a lancé avec trois séries et un formulaire ; elle a ajouté des projets chaque trimestre par email. Tu n'attends pas le portfolio exhaustif. Le site évolue avec tes shootings.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment ton site relie Instagram, Pinterest et ton emailing ?",
        body: "Le maillage ramène chaque découverte vers ton portfolio. Bio Instagram, épingles Pinterest, signature mail et devis PDF pointent vers la même URL. Une cliente qui te découvre sur un reel retrouve le style et les formules sur le site le soir même. Tu évites les liens morts ou les Drive désordonnés. Concrètement, les plateformes apportent le trafic ; le site porte la décision. Quand un réseau baisse ta portée, ton adresse reste la référence.",
      },
      {
        h2: "Que change un formulaire de devis qualifiant ?",
        body: "Les messages « c'est combien ? » sans date ni style gaspillent ton temps de réponse. Un formulaire qui demande type de shooting, date, lieu et budget approximatif filtre dès l'entrée. Sur Photographe Iris, ce cadrage clarifie les demandes avant le premier appel. Tu prépares un devis plus juste. Le site ne vend pas à ta place ; il qualifie. Tu réserves ton énergie aux projets alignés.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour photographe",
    priceTitle: "Combien coûte un site pour une photographe ?",
    caseStudyId: "photographe-iris",
    caseStudyHeading: "Exemple concret : Photographe Iris",
    recommendedPlanId: "pro",
    relatedBesoinSlug: "site-vitrine-independante",
    relatedBesoinLabel: "site vitrine d'indépendante",
    closing:
      "Si tu veux un portfolio clair qui génère des devis mieux cadrés, écris-moi : je regarde avec toi tes séries et tes formules.",
    ctaLabel: "Parler de mon site photographe",
    faqs: [
      {
        question: "Instagram remplace-t-il un portfolio ?",
        answer:
          "Non. L'algorithme cache ton travail. Un site est stable, partageable et mieux indexé. Instagram reste un canal de découverte ; le portfolio porte formules et devis. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Combien coûte un site pour photographe ?",
        answer:
          "Pour démarrer commence à 89 €/mois ; Complet à 129 €/mois est recommandé pour une galerie multi-pages et un parcours devis plus riche. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Quel est le délai ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet après validation du devis. La sélection et l'export des photos influencent le rythme réel. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
      {
        question: "Puis-je ajouter des séries plus tard ?",
        answer:
          "Oui. Tu m'envoies la nouvelle série ; je mets à jour sous 24 à 72 h. La structure du site est prévue pour grandir avec ton travail. Tu décris le changement en quelques lignes ou avec un fichier joint. Je m'occupe du reste, sans te demander d'apprendre un back-office.",
      },
    ],
    image: "/image/photographe.jpg",
    imageAlt: "Photographe indépendante : portfolio web professionnel",
  },
  {
    slug: "architecte-interieur",
    label: "Architecte d'intérieur",
    keyword: "site web pour architecte d'intérieur",
    metier: "architecte d'intérieur",
    metierPlural: "architectes d'intérieur",
    title:
      "Site web pour architecte d'intérieur | dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour architecte d'intérieur : galerie projets, devis. Exemple Sophie Bluel. Abonnement Kopio dès 89 €/mois.",
    h1: "Le site qui donne à ton activité d'architecte d'intérieur la crédibilité qu'elle mérite",
    tldr:
      "Je crée le site web pour architecte d'intérieur qui met en avant tes projets et génère des demandes de devis. Exemple : Sophie Bluel, avec hausse des demandes projet. Dès 89 €/mois ; Complet à 129 €/mois pour une galerie multi-pages filtrable.",
    intro:
      "Tes projets méritent mieux qu'un PDF envoyé à la hâte. Une galerie éditoriale et un contact simple changent le volume et la qualité des demandes.",
    douleur:
      "Portfolio trop générique : les projets ne ressortent pas, les clients hésitent à écrire pour un devis.",
    whyTitle:
      "Pourquoi une architecte d'intérieur a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "Chaque projet doit respirer",
        d: "Galerie filtrable, légendes, avant/après : lecture éditoriale, pas catalogue plat.",
      },
      {
        t: "Le process rassure",
        d: "Étapes, délais et collaboration explicites avant le premier appel.",
      },
      {
        t: "Le devis commence en ligne",
        d: "Formulaire qualifiant (surface, type, ville) pour de meilleures demandes.",
      },
      {
        t: "Tu es sur les chantiers",
        d: "Je maintiens le site pendant que tu es en rendez-vous.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi un PDF de projets ne suffit plus ?",
        body: "Un PDF se perd, se compresse mal sur mobile et ne se met pas à jour facilement. Un site éditorial montre chaque projet avec le rythme et les légendes qu'il mérite. Le client potentiel comprend ton style avant d'écrire. Pour Sophie Bluel, une galerie filtrable et un contact simple ont clairement augmenté les demandes projet. Tu partages une URL, pas une pièce jointe fragile. Le portfolio devient un outil commercial permanent.",
      },
      {
        h2: "Comment rassurer un client sur un budget d'aménagement ?",
        body: "Les gros budgets demandent un cadre avant le premier appel. Je rends visibles les étapes de collaboration, le type de missions et ce que le formulaire doit collecter (surface, type de bien, ville). Le client arrive déjà informé. Sur Sophie Bluel, le parcours de contact a réduit les messages trop vagues. Tu qualifies mieux. Le site ne remplace pas l'entretien ; il prépare un échange sérieux.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site pour une architecte d'intérieur ?",
        body: "Pour démarrer à 89 €/mois peut lancer une vitrine ciblée. Complet à 129 €/mois est en général le bon niveau : galerie multi-pages, filtres, SEO et formulaire de devis. Besoin précis couvre des besoins très spécifiques sur devis. Sophie Bluel illustre ce niveau Complet avec une nette hausse des demandes. Tu investis dans une vitrine qui travaille pendant les chantiers. Les nouveaux projets s'ajoutent par email sans refonte.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Faut-il attendre d'avoir dix projets photographiés ?",
        body: "Attendre le portfolio « parfait » retarde des demandes déjà possibles. Je mets en avant tes projets les mieux documentés et je clarifie ton process. La structure accueille de nouvelles études de cas ensuite. En 2025, une architecte d'intérieur à Lyon a lancé avec quatre projets forts, puis a enrichi la galerie après chaque livraison. Tu n'attends pas une rétrospective complète. Le site grandit avec ton agence.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment ton site relie Instagram, Houzz et ton réseau pro ?",
        body: "Le maillage place ton portfolio au centre. Bio Instagram, profils spécialisés, signature mail et présentations PDF pointent vers la même URL. Un maître d'ouvrage qui te découvre sur Instagram retrouve le détail des projets sur le site. Tu contrôles la narration. Concrètement, les plateformes apportent la découverte ; le site porte la preuve et le devis. Quand un annuaire change ses règles, ton adresse reste stable.",
      },
      {
        h2: "Que se passe-t-il quand tu livres un nouveau projet ?",
        body: "Chaque chantier terminé enrichit ta preuve sociale. Tu m'envoies photos, légendes et éventuellement avant/après ; je mets à jour la galerie sous 24 à 72 h. Tu ne reconstruis pas le site à chaque livraison. Sophie Bluel et d'autres portfolios évoluent ainsi au fil des années. Tu restes sur le terrain. L'abonnement absorbe ces ajouts comme une maintenance normale.\n\nCe rythme de maintenance colle au quotidien d'une indépendante : peu de temps, besoin de réactivité, zéro formation outil. Tu restes dans ton métier pendant que le site reste à jour. Si un chantier plus large apparaît (nouvelle offre, refonte de parcours), je le traite dans un échange dédié avant de toucher à la structure.",
      },
    ],
    includedTitle:
      "Ce qui est inclus dans un site Kopio pour architecte d'intérieur",
    priceTitle: "Combien coûte un site pour une architecte d'intérieur ?",
    caseStudyId: "sophie-bluel",
    caseStudyHeading: "Exemple concret : Sophie Bluel",
    recommendedPlanId: "pro",
    relatedBesoinSlug: "refonte-site-internet-entrepreneure",
    relatedBesoinLabel: "refonte de site",
    closing:
      "Si tu veux un portfolio éditorial qui génère des demandes projet plus nettes, écris-moi : je regarde avec toi ta sélection de projets et ton process.",
    ctaLabel: "Parler de mon site architecte d'intérieur",
    faqs: [
      {
        question: "Combien coûte un site pour architecte d'intérieur ?",
        answer:
          "Pour démarrer commence à 89 €/mois ; Complet à 129 €/mois pour une galerie multi-pages, souvent le bon niveau. Les besoins très spécifiques passent en Besoin précis sur devis. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "As-tu un exemple ?",
        answer:
          "Oui : Sophie Bluel, galerie filtrable et contact, avec une nette hausse des demandes projet. Le site montre comment une lecture éditoriale change la conversion. Tu restes concentrée sur ton métier pendant que je gère la technique et les mises à jour. Si ton besoin dépasse le forfait, je te le dis clairement avant le devis.",
      },
      {
        question: "Quel est le délai ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet après validation du devis. La sélection des projets et des visuels influence le rythme. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
      {
        question: "Puis-je ajouter des projets au fil de l'eau ?",
        answer:
          "Oui. Par email : mise à jour sous 24 à 72 h. La galerie est conçue pour s'enrichir sans refonte à chaque chantier. Tu décris le changement en quelques lignes ou avec un fichier joint. Je m'occupe du reste, sans te demander d'apprendre un back-office.",
      },
    ],
    image: "/image/sophie.png",
    imageAlt: "Sophie Bluel : site web pour architecte d'intérieur",
  },
  {
    slug: "wedding-planner",
    label: "Wedding planner",
    keyword: "site web pour wedding planner",
    metier: "wedding planner",
    metierPlural: "wedding planners",
    title:
      "Site web pour wedding planner | Abonnement mensuel dès 89€/mois | Kopio",
    metaDescription:
      "Site web pour wedding planner : univers, formules, demande de devis. Kopio dès 89 €/mois ; Complet à 129 €/mois recommandé.",
    h1: "Le site qui donne à ton activité de wedding planner la crédibilité qu'elle mérite",
    tldr:
      "Je crée ton site web pour wedding planner : ton style, tes mariages, un parcours vers l'appel découverte. Abonnement dès 89 €/mois ; Complet à 129 €/mois pour formules détaillées et SEO. Pensé pour convertir les couples qui comparent plusieurs organisatrices.",
    intro:
      "Les couples comparent plusieurs wedding planners. Ton site doit faire sentir ton univers et rendre la prise de contact évidente.",
    douleur:
      "Beau feed Instagram, mais aucune page formules et process pour les couples encore indécis.",
    whyTitle:
      "Pourquoi une wedding planner a besoin d'un site différent d'un site générique ?",
    whyPoints: [
      {
        t: "L'émotion se design",
        d: "Couleurs, photos, rythme : le site prolonge l'expérience que tu vends.",
      },
      {
        t: "Les formules clarifient le budget",
        d: "Day-of, partiel, full planning : le couple sait où il se situe.",
      },
      {
        t: "Le calendrier se remplit tôt",
        d: "Demande de devis avec date et lieu : tu qualifies avant l'appel.",
      },
      {
        t: "En pleine saison, zéro temps web",
        d: "Je gère le site toute l'année pendant que tu es sur les mariages.",
      },
    ],
    sections: [
      {
        h2: "Pourquoi Instagram ne suffit pas pour signer un couple ?",
        body: "Instagram inspire ; il ne détaille pas formules, process et disponibilités. Les couples comparent plusieurs organisatrices et veulent une page à relire à deux. Le site porte ton univers, tes niveaux d'accompagnement et le formulaire de devis. En 2025, une wedding planner à Aix-en-Provence recevait surtout des DM incomplets ; après mise en ligne des formules, les demandes précisaient date et lieu. Tu gardes Instagram pour l'émotion. Le site porte la décision et le SEO autour de ton positionnement.",
      },
      {
        h2: "Comment présenter day-of, partiel et full planning sans confondre ?",
        body: "Des intitulés flous créent des appels hors budget. Je structure chaque formule : inclus, limites, pour quel type de mariage, prochain pas. Le couple se situe avant l'appel découverte. En pratique, une page formules claire réduit les échanges « en fait on voulait juste le jour J ». Tu prépares mieux le premier rendez-vous. Le site aligne attentes et offre. Complet donne l'espace pour détailler sans écraser la page d'accueil.\n\nLe détail compte pour la lectrice pressée : titres scannables, preuves placées au bon endroit, un seul prochain pas visible sur mobile. Tu gagnes des conversations déjà cadrées. Le site ne remplace pas ton expertise ; il la rend lisible avant le premier échange et réduit les allers-retours inutiles.",
      },
      {
        h2: "Combien coûte un site pour une wedding planner ?",
        body: "Pour démarrer à 89 €/mois peut lancer une vitrine d'univers avec contact. Complet à 129 €/mois est en général recommandé : pages formules, galerie, SEO, formulaire de devis qualifiant. Besoin précis couvre des besoins très spécifiques sur devis. Tu choisis selon la richesse de ton catalogue et la saisonnalité de ton acquisition. L'abonnement inclut les mises à jour de portfolio après chaque saison. Tu ne reconstruis pas le site chaque année.\n\nLe devis précise le périmètre avant ton engagement. Tu sais ce qui est inclus (design, hébergement, mises à jour) et ce qui reste hors scope. Si ton offre grossit plus tard, je te propose le passage de formule sans tout reconstruire. Tu paies pour une présence maintenue, pas pour un fichier livré puis abandonné.",
      },
      {
        h2: "Est-ce utile si mon agenda est déjà plein pour cette année ?",
        body: "Oui, parce que les couples réservent souvent 12 à 18 mois à l'avance. Un site à jour capture les demandes pour l'année suivante pendant que tu es en pleine saison. Je peux indiquer clairement tes disponibilités ou la liste d'attente. En 2024, une organisatrice a rempli une partie de N+1 via des demandes entrées hors saison Instagram. Tu ne refuses pas la visibilité ; tu la cadres. Le site travaille quand tu es sur un lieu de réception.\n\nConcrètement, tu avances avec ce que tu as déjà sous la main. Je priorise la clarté de l'offre et le prochain pas pour la visiteuse. Les enrichissements (galerie, preuves, pages secondaires) arrivent ensuite par email, au rythme de ton activité. Tu n'as pas besoin d'un dossier parfait pour être joignable et crédible.",
      },
      {
        h2: "Comment ton site relie Instagram, Pinterest et les annuaires mariage ?",
        body: "Le maillage évite les versions contradictoires de ton offre. Bio Instagram, épingles Pinterest, fiches annuaires et signature mail renvoient vers la même URL. Un couple qui te découvre sur un annuaire lit ton process sur le site sans dépendre d'un chat. Tu contrôles le récit. Concrètement, les plateformes apportent la découverte ; le site convertit. Quand un annuaire modifie ses tarifs ou sa visibilité, ta maison reste en ligne.",
      },
      {
        h2: "Que se passe-t-il après la saison des mariages ?",
        body: "Tu ajoutes les plus beaux reportages, tu ajustes les formules, tu ouvres les dates N+1. Tu m'envoies les éléments ; je mets à jour sous 24 à 72 h. Tu ne te formes pas à un CMS en octobre après six mois intensifs. En pratique, le site se rafraîchit chaque intersaison sans chantier technique de ton côté. Tu prépares la saison suivante. La maintenance suit le rythme réel du métier de wedding planner.\n\nCe rythme de maintenance colle au quotidien d'une indépendante : peu de temps, besoin de réactivité, zéro formation outil. Tu restes dans ton métier pendant que le site reste à jour. Si un chantier plus large apparaît (nouvelle offre, refonte de parcours), je le traite dans un échange dédié avant de toucher à la structure.",
      },
    ],
    includedTitle: "Ce qui est inclus dans un site Kopio pour wedding planner",
    priceTitle: "Combien coûte un site pour une wedding planner ?",
    recommendedPlanId: "pro",
    relatedBesoinSlug: "site-vitrine-independante",
    relatedBesoinLabel: "site vitrine d'indépendante",
    closing:
      "Si tu veux un site qui fait sentir ton univers et clarifie tes formules pour les couples, écris-moi : je pars de ton positionnement et de ton agenda.",
    ctaLabel: "Parler de mon site wedding planner",
    faqs: [
      {
        question: "Instagram suffit-il pour une wedding planner ?",
        answer:
          "Il inspire. Le site convertit : formules, process, contact, et reste trouvable sur Google. Les deux se complètent quand chaque bio et chaque fiche pointent vers ton URL. En pratique, tu gardes tes canaux d'acquisition et tu pointes vers une URL stable. C'est ce lien que tu envoies après un premier échange sérieux.",
      },
      {
        question: "Combien coûte un site pour wedding planner ?",
        answer:
          "Pour démarrer commence à 89 €/mois ; Complet à 129 €/mois est recommandé pour formules détaillées, galerie et formulaire de devis. Le devis écrit le périmètre (pages, réservation, délais). Tu compares ensuite avec ton budget mensuel réel, sans surprise de maintenance cachée.",
      },
      {
        question: "Quel est le délai ?",
        answer:
          "14 jours pour Pour démarrer, 21 jours pour Complet après validation du devis. Les textes de formules et la sélection photo influencent le rythme. Un kickoff court cadre les contenus attendus. Plus tes textes et visuels arrivent tôt, plus la date de mise en ligne reste réaliste.",
      },
      {
        question: "Puis-je ajouter des mariages récents ?",
        answer:
          "Oui. Mises à jour par email sous 24 à 72 h, typiquement en intersaison. Le portfolio grandit sans que tu touches à la technique. Tu décris le changement en quelques lignes ou avec un fichier joint. Je m'occupe du reste, sans te demander d'apprendre un back-office.",
      },
    ],
    image: "/image/independant.jpg",
    imageAlt: "Wedding planner : site web pour convertir les couples",
  },
];

export function getMetier(slug: string): MetierPage | undefined {
  return metiers.find((m) => m.slug === slug);
}
