/**
 * Convertit src/data/blog.ts vers la charte éditoriale (vouvoiement, jargon, H2 uniques).
 * Usage: node scripts/convert-blog-charte.mjs
 */
import fs from "node:fs";

const PATH = "src/data/blog.ts";
let s = fs.readFileSync(PATH, "utf8");

/** Protect string literals temporarily? Not needed — whole file is TS with French strings. */

/** Ordered phrase replacements (longer / more specific first). */
const phrases = [
  // Questions inversées
  [/As-tu /g, "Avez-vous "],
  [/Peux-tu /g, "Pouvez-vous "],
  [/Possèdes-tu /g, "Possédez-vous "],
  [/Que paies-tu /g, "Que payez-vous "],
  [/Que te demande-je /g, "Que vous demande-je "],
  [/Que gagnes-tu /g, "Que gagnez-vous "],
  [/Sais-tu /g, "Savez-vous "],

  // Impératifs (lecteur)
  [/Prends l’image/g, "Prenez l’image"],
  [/Prends l'image/g, "Prenez l'image"],
  [/Prends dix/g, "Prenez dix"],
  [/Remplis /g, "Remplissez "],
  [/Recherche ton /g, "Recherchez votre "],
  [/Recherche ta /g, "Recherchez votre "],
  [/Ouvre ton /g, "Ouvrez votre "],
  [/Ouvre-le /g, "Ouvrez-le "],
  [/Ouvre le /g, "Ouvrez le "],
  [/Ouvre «/g, "Ouvrez «"],
  [/Cartographie /g, "Cartographiez "],
  [/Élimine /g, "Éliminez "],
  [/Ramène /g, "Ramenez "],
  [/Allège /g, "Allégez "],
  [/Maîtrise /g, "Maîtrisez "],
  [/Aligne /g, "Alignez "],
  [/Sers /g, "Servez "],
  [/Réduis /g, "Réduisez "],
  [/Évite /g, "Évitez "],
  [/Vérifie /g, "Vérifiez "],
  [/Identifie /g, "Identifiez "],
  [/Déclare /g, "Déclarez "],
  [/Configure /g, "Configurez "],
  [/Purge /g, "Purgez "],
  [/Surveille /g, "Surveillez "],
  [/Enrichis /g, "Enrichissez "],
  [/Compare-les /g, "Comparez-les "],
  [/Compare avec/g, "Comparez avec"],
  [/Compare toujours/g, "Comparez toujours"],
  [/Compare ensuite/g, "Comparez ensuite"],
  [/Lis cette/g, "Lisez cette"],
  [/Lis-le /g, "Lisez-le "],
  [/Mets-toi /g, "Mettez-vous "],
  [/Mets de /g, "Mettez de "],
  [/Mets en /g, "Mettez en "],
  [/Corrige /g, "Corrigez "],
  [/Corrige-les/g, "Corrigez-les"],
  [/Pose-toi /g, "Posez-vous "],
  [/Posez-vous ces/g, "Posez-vous ces"],
  [/Pose une /g, "Posez une "],
  [/Pose d’abord/g, "Posez d’abord"],
  [/Pose d'abord/g, "Posez d'abord"],
  [/Pose toujours/g, "Posez toujours"],
  [/Pose trois/g, "Posez trois"],
  [/Choisis /g, "Choisissez "],
  [/Garde /g, "Gardez "],
  [/Gardez l’IA/g, "Gardez l’IA"],
  [/Note /g, "Notez "],
  [/Notez sur/g, "Notez sur"],
  [/Demande /g, "Demandez "],
  [/Demandez une/g, "Demandez une"],
  [/Ajoute /g, "Ajoutez "],
  [/Ajoutez des/g, "Ajoutez des"],
  [/Utilise-la /g, "Utilisez-la "],
  [/Utilise /g, "Utilisez "],
  [/Supprime /g, "Supprimez "],
  [/Réécris /g, "Réécrivez "],
  [/Assigne /g, "Assignez "],
  [/Crée /g, "Créez "],
  [/Renomme /g, "Renommez "],
  [/Envoie /g, "Envoyez "],
  [/Floute /g, "Floutez "],
  [/Sélectionne /g, "Sélectionnez "],
  [/Calcule /g, "Calculez "],
  [/Multiplie /g, "Multipliez "],
  [/Découpe /g, "Découpez "],
  [/Écris /g, "Écrivez "],
  [/Rassemble /g, "Rassemblez "],
  [/Place-toi /g, "Placez-vous "],
  [/Place /g, "Placez "],
  [/Travaille /g, "Travaillez "],
  [/Range /g, "Rangez "],
  [/Charge /g, "Chargez "],
  [/Fais /g, "Faites "],
  [/Faites des/g, "Faites des"],
  [/Faites valider/g, "Faites valider"],
  [/Faites pointer/g, "Faites pointer"],
  [/Faites apparaître/g, "Faites apparaître"],
  [/Audite /g, "Auditez "],
  [/Mesure /g, "Mesurez "],
  [/Ajuste /g, "Ajustez "],
  [/Ne reconstruis/g, "Ne reconstruisez"],
  [/Ne retarde/g, "Ne retardez"],
  [/Lance avec/g, "Lancez avec"],
  [/Publie /g, "Publiez "],
  [/Affine /g, "Affinez "],
  [/Améliore/g, "Améliorez"],
  [/Indique /g, "Indiquez "],
  [/Adapte /g, "Adaptez "],
  [/Priorise/g, "Priorisez"],
  [/Planifie/g, "Planifiez"],
  [/Reste /g, "Restez "],
  [/Restez simple/g, "Restez simple"],
  [/Restez sur/g, "Restez sur"],
  [/Commence /g, "Commencez "],
  [/Commencez par/g, "Commencez par"],
  [/Teste /g, "Testez "],
  [/Prépare /g, "Préparez "],
  [/Enchaîne /g, "Enchaînez "],
  [/Délègue /g, "Déléguez "],
  [/redemande /g, "redemandez "],
  [/mets de l’ordre/g, "mettez de l’ordre"],
  [/fais apparaître/g, "faites apparaître"],
  [/ajoute de la valeur/g, "ajoutez de la valeur"],
  [/N’utilise pas/g, "N’utilisez pas"],
  [/N'utilise pas/g, "N'utilisez pas"],
  [/Utilise un sitemap/g, "Utilisez un sitemap"],
  [/Vide le cache/g, "Videz le cache"],
  [/Demande ensuite/g, "Demandez ensuite"],
  [/Liste /g, "Listez "],
  [/Repère /g, "Repérez "],
  [/Rapproche /g, "Rapprochez "],
  [/Organise /g, "Organisez "],
  [/fais pointer/gi, "faites pointer"],

  // Conjugaisons tu + verbe (phrases fréquentes)
  [/\btu as\b/gi, "vous avez"],
  [/\btu es\b/gi, "vous êtes"],
  [/\btu peux\b/gi, "vous pouvez"],
  [/\btu doit\b/gi, "vous devez"],
  [/\btu dois\b/gi, "vous devez"],
  [/\btu veux\b/gi, "vous voulez"],
  [/\btu vois\b/gi, "vous voyez"],
  [/\btu sais\b/gi, "vous savez"],
  [/\btu fais\b/gi, "vous faites"],
  [/\btu vas\b/gi, "vous allez"],
  [/\btu vas\b/gi, "vous allez"],
  [/\btu iras\b/gi, "vous irez"],
  [/\btu seras\b/gi, "vous serez"],
  [/\btu auras\b/gi, "vous aurez"],
  [/\btu pourras\b/gi, "vous pourrez"],
  [/\btu voudras\b/gi, "vous voudrez"],
  [/\btu resteras\b/gi, "vous resterez"],
  [/\btu paies\b/gi, "vous payez"],
  [/\btu paie\b/gi, "vous payez"],
  [/\btu lisses\b/gi, "vous lissez"],
  [/\btu construis\b/gi, "vous construisez"],
  [/\btu construisez\b/gi, "vous construisez"],
  [/\btu dépends\b/gi, "vous dépendez"],
  [/\btu portes\b/gi, "vous portez"],
  [/\btu restes\b/gi, "vous restez"],
  [/\btu restes\b/gi, "vous restez"],
  [/\btu gardes\b/gi, "vous gardez"],
  [/\btu réponds\b/gi, "vous répondez"],
  [/\btu envoies\b/gi, "vous envoyez"],
  [/\btu envoies\b/gi, "vous envoyez"],
  [/\btu contrôles\b/gi, "vous contrôlez"],
  [/\btu factures\b/gi, "vous facturez"],
  [/\btu prospectes\b/gi, "vous prospectez"],
  [/\btu travailles\b/gi, "vous travaillez"],
  [/\btu proposes\b/gi, "vous proposez"],
  [/\btu aides\b/gi, "vous aidez"],
  [/\btu traites\b/gi, "vous traitez"],
  [/\btu oses\b/gi, "vous osez"],
  [/\btu préfères\b/gi, "vous préférez"],
  [/\btu te lances\b/gi, "vous vous lancez"],
  [/\btu te reconnais\b/gi, "vous vous reconnaissez"],
  [/\btu te noies\b/gi, "vous vous noyez"],
  [/\btu te perds\b/gi, "vous vous perdez"],
  [/\btu te perds\b/gi, "vous vous perdez"],
  [/\btu te fais\b/gi, "vous vous faites"],
  [/\btu te rends\b/gi, "vous vous rendez"],
  [/\btu t’en rends\b/gi, "vous vous en rendez"],
  [/\btu t'en rends\b/gi, "vous vous en rendez"],
  [/\btu t’enfermes\b/gi, "vous vous enfermez"],
  [/\btu t'enfermes\b/gi, "vous vous enfermez"],
  [/\btu te lances\b/gi, "vous vous lancez"],
  [/\btu compar\w*\b/gi, (m) => m.replace(/^tu /i, "vous ").replace(/^Tu /i, "Vous ")],
  [/\btu n’as\b/gi, "vous n’avez"],
  [/\btu n'as\b/gi, "vous n'avez"],
  [/\btu n’es\b/gi, "vous n’êtes"],
  [/\btu n'es\b/gi, "vous n'êtes"],
  [/\btu n’y\b/gi, "vous n’y"],
  [/\btu n'y\b/gi, "vous n'y"],
  [/\btu ne\b/gi, "vous ne"],
  [/\btu n’\b/gi, "vous n’"],
  [/\btu n'\b/gi, "vous n'"],
  [/\btu te\b/gi, "vous vous"],
  [/\btu t’\b/gi, "vous vous "],
  [/\btu t'\b/gi, "vous vous "],
  [/\bTu as\b/g, "Vous avez"],
  [/\bTu es\b/g, "Vous êtes"],
  [/\bTu peux\b/g, "Vous pouvez"],
  [/\bTu dois\b/g, "Vous devez"],
  [/\bTu veux\b/g, "Vous voulez"],
  [/\bTu n’\b/g, "Vous n’"],
  [/\bTu n'\b/g, "Vous n'"],
  [/\bTu ne\b/g, "Vous ne"],
  [/\bTu te\b/g, "Vous vous"],
  [/\bTu t’\b/g, "Vous vous "],
  [/\bTu t'\b/g, "Vous vous "],
  [/\bTu /g, "Vous "],
  [/\btu /g, "vous "],

  // Possessifs
  [/\bton site\b/gi, "votre site"],
  [/\bton nom\b/gi, "votre nom"],
  [/\bton métier\b/gi, "votre métier"],
  [/\bton offre\b/gi, "votre offre"],
  [/\bton activité\b/gi, "votre activité"],
  [/\bton angle\b/gi, "votre angle"],
  [/\bton stade\b/gi, "votre stade"],
  [/\bton temps\b/gi, "votre temps"],
  [/\bton agenda\b/gi, "votre agenda"],
  [/\bton téléphone\b/gi, "votre téléphone"],
  [/\bton propre\b/gi, "votre propre"],
  [/\bton secteur\b/gi, "votre secteur"],
  [/\bton contenu\b/gi, "votre contenu"],
  [/\bton prénom\b/gi, "votre prénom"],
  [/\bton engagement\b/gi, "votre engagement"],
  [/\bton besoin\b/gi, "votre besoin"],
  [/\bton bilan\b/gi, "votre bilan"],
  [/\bton visage\b/gi, "votre visage"],
  [/\bton image\b/gi, "votre image"],
  [/\bton positionnement\b/gi, "votre positionnement"],
  [/\bton portfolio\b/gi, "votre portfolio"],
  [/\bton ego\b/gi, "votre ego"],
  [/\bton discours\b/gi, "votre discours"],
  [/\bton feed\b/gi, "votre feed"],
  [/\bton LinkedIn\b/gi, "votre LinkedIn"],
  [/\bton Instagram\b/gi, "votre Instagram"],
  [/\bton exemple\b/gi, "votre exemple"],
  [/\bton accompagnement\b/gi, "votre accompagnement"],
  [/\bton prestataire\b/gi, "votre prestataire"],
  [/\bton référencement\b/gi, "votre référencement"],
  [/\bton budget\b/gi, "votre budget"],
  [/\bton contexte\b/gi, "votre contexte"],
  [/\bton cadre\b/gi, "votre cadre"],
  [/\bton lieu\b/gi, "votre lieu"],
  [/\bton réseau\b/gi, "votre réseau"],
  [/\bton parcours\b/gi, "votre parcours"],
  [/\bton heure\b/gi, "votre heure"],
  [/\bton choix\b/gi, "votre choix"],
  [/\bton serveur\b/gi, "votre serveur"],
  [/\bton sitemap\b/gi, "votre sitemap"],
  [/\bton menu\b/gi, "votre menu"],
  [/\bton pied\b/gi, "votre pied"],
  [/\bton maillage\b/gi, "votre maillage"],
  [/\bton hébergeur\b/gi, "votre hébergeur"],
  [/\bton noindex\b/gi, "votre noindex"],
  [/\bton texte\b/gi, "votre texte"],
  [/\bton URL\b/gi, "votre URL"],
  [/\bton travail\b/gi, "votre travail"],
  [/\bton draft\b/gi, "votre draft"],
  [/\bton taux\b/gi, "votre taux"],
  [/\bton formulaire\b/gi, "votre formulaire"],
  [/\bton smartphone\b/gi, "votre smartphone"],
  [/\bton public\b/gi, "votre public"],
  [/\bton format\b/gi, "votre format"],
  [/\bton prochain\b/gi, "votre prochain"],
  [/\bton premier\b/gi, "votre premier"],
  [/\bton vrai\b/gi, "votre vrai"],
  [/\bton idéal\b/gi, "votre idéal"],
  [/\bTon /g, "Votre "],
  [/\bton /g, "votre "],

  [/\bta page\b/gi, "votre page"],
  [/\bta ville\b/gi, "votre ville"],
  [/\bta fiche\b/gi, "votre fiche"],
  [/\bta cliente\b/gi, "votre cliente"],
  [/\bta clientèle\b/gi, "votre clientèle"],
  [/\bta cible\b/gi, "votre cible"],
  [/\bta pratique\b/gi, "votre pratique"],
  [/\bta crédibilité\b/gi, "votre crédibilité"],
  [/\bta trésorerie\b/gi, "votre trésorerie"],
  [/\bta liberté\b/gi, "votre liberté"],
  [/\bta présence\b/gi, "votre présence"],
  [/\bta méthode\b/gi, "votre méthode"],
  [/\bta façon\b/gi, "votre façon"],
  [/\bta charge\b/gi, "votre charge"],
  [/\bta zone\b/gi, "votre zone"],
  [/\bta structure\b/gi, "votre structure"],
  [/\bta validation\b/gi, "votre validation"],
  [/\bta propriété\b/gi, "votre propriété"],
  [/\bta capacité\b/gi, "votre capacité"],
  [/\bta place\b/gi, "votre place"],
  [/\bta tête\b/gi, "votre tête"],
  [/\bta bio\b/gi, "votre bio"],
  [/\bta promesse\b/gi, "votre promesse"],
  [/\bta prospecte\b/gi, "votre prospecte"],
  [/\bta photographe\b/gi, "votre photographe"],
  [/\bta session\b/gi, "votre session"],
  [/\bta sélection\b/gi, "votre sélection"],
  [/\bta tenue\b/gi, "votre tenue"],
  [/\bta DA\b/gi, "votre DA"],
  [/\bta canonique\b/gi, "votre canonique"],
  [/\bta canonical\b/gi, "votre canonical"],
  [/\bta tienne\b/gi, "la vôtre"],
  [/\bTa /g, "Votre "],
  [/\bta /g, "votre "],

  [/\btes pages\b/gi, "vos pages"],
  [/\btes clientes\b/gi, "vos clientes"],
  [/\btes prospectes\b/gi, "vos prospectes"],
  [/\btes soirées\b/gi, "vos soirées"],
  [/\btes propres\b/gi, "vos propres"],
  [/\btes titres\b/gi, "vos titres"],
  [/\btes qualifications\b/gi, "vos qualifications"],
  [/\btes premières\b/gi, "vos premières"],
  [/\btes efforts\b/gi, "vos efforts"],
  [/\btes concurrentes\b/gi, "vos concurrentes"],
  [/\btes preuves\b/gi, "vos preuves"],
  [/\btes tarifs\b/gi, "vos tarifs"],
  [/\btes mots\b/gi, "vos mots"],
  [/\btes fichiers\b/gi, "vos fichiers"],
  [/\btes photos\b/gi, "vos photos"],
  [/\btes certifications\b/gi, "vos certifications"],
  [/\btes vraies\b/gi, "vos vraies"],
  [/\btes pages\b/gi, "vos pages"],
  [/\btes liens\b/gi, "vos liens"],
  [/\btes pages\b/gi, "vos pages"],
  [/\bTes /g, "Vos "],
  [/\btes /g, "vos "],

  // toi / te / t'
  [/\btoi-même\b/gi, "vous-même"],
  [/\bpour toi\b/gi, "pour vous"],
  [/\bchez toi\b/gi, "chez vous"],
  [/\bsans toi\b/gi, "sans vous"],
  [/\bvers toi\b/gi, "vers vous"],
  [/\bà toi\b/gi, "à vous"],
  [/\bde toi\b/gi, "de vous"],
  [/\bsur toi\b/gi, "sur vous"],
  [/\bavec toi\b/gi, "avec vous"],
  [/\bToi\b/g, "Vous"],
  [/\btoi\b/g, "vous"],

  [/\bte donne\b/gi, "vous donne"],
  [/\bte pose\b/gi, "vous pose"],
  [/\bte coûte\b/gi, "vous coûte"],
  [/\bte ressemble\b/gi, "vous ressemble"],
  [/\bte dit\b/gi, "vous dit"],
  [/\bte demande\b/gi, "vous demande"],
  [/\bte laisse\b/gi, "vous laisse"],
  [/\bte facture\b/gi, "vous facture"],
  [/\bte rend\b/gi, "vous rend"],
  [/\bte connaît\b/gi, "vous connaît"],
  [/\bte parl\b/gi, "vous parl"],
  [/\bte contacter\b/gi, "vous contacter"],
  [/\bte joindre\b/gi, "vous joindre"],
  [/\bte lancer\b/gi, "vous lancer"],
  [/\bte faire\b/gi, "vous faire"],
  [/\bte perdre\b/gi, "vous perdre"],
  [/\bte laisser\b/gi, "vous laisser"],
  [/\bte reconnaître\b/gi, "vous reconnaître"],
  [/\bte poser\b/gi, "vous poser"],
  [/\bte fournir\b/gi, "vous fournir"],
  [/\bt’aide\b/gi, "vous aide"],
  [/\bt'aide\b/gi, "vous aide"],
  [/\bt’envoies\b/gi, "vous envoyez"],
  [/\bt’en\b/gi, "vous en"],
  [/\bt'en\b/gi, "vous en"],
  [/\bt’appartient\b/gi, "vous appartient"],
  [/\bt'appartient\b/gi, "vous appartient"],
  [/\bt’as\b/gi, "vous avez"], // shouldn't happen
  [/\bje t’aide\b/gi, "je vous aide"],
  [/\bje t'aide\b/gi, "je vous aide"],
  [/\bJe t’aide\b/g, "Je vous aide"],
  [/\bJe t'aide\b/g, "Je vous aide"],
  [/\bJe t’\b/g, "Je vous "],
  [/\bJe t'\b/g, "Je vous "],
  [/\bje t’\b/gi, "je vous "],
  [/\bje t'\b/gi, "je vous "],
  [/\bde te \b/gi, "de vous "],
  [/\bà te \b/gi, "à vous "],
  [/\bpour te \b/gi, "pour vous "],
  [/\bsans te \b/gi, "sans vous "],
  [/\bqui te \b/gi, "qui vous "],
  [/\bque te \b/gi, "que vous "],
  [/\bce que tu\b/gi, "ce que vous"],
  [/\bsi tu\b/gi, "si vous"],
  [/\bquand tu\b/gi, "quand vous"],
  [/\bparce que tu\b/gi, "parce que vous"],
  [/\bpendant que tu\b/gi, "pendant que vous"],
  [/\baprès que tu\b/gi, "après que vous"],

  // Remaining te / t' as object pronouns (best-effort)
  [/\b te \b/g, " vous "],
  [/\b t’/g, " vous "],
  [/\b t'/g, " vous "],
];

for (const [re, rep] of phrases) {
  s = s.replace(re, rep);
}

// Jargon (UI-facing) — careful contextual replacements
const jargon = [
  [/\bbuilder\b/gi, "éditeur"],
  [/\btemplate\b/gi, "modèle"],
  [/\bkickoff\b/gi, "appel de lancement"],
  [/\bCTA\b/g, "bouton d’action"],
  [/\bcash-flow\b/gi, "trésorerie"],
  [/\bfriction\b/gi, "obstacle"],
  [/\btrafic\b/gi, "visites"],
  [/\bl’acquisition\b/gi, "vous faire connaître"],
  [/\bl'acquisition\b/gi, "vous faire connaître"],
  [/\bd’acquisition\b/gi, "pour vous faire connaître"],
  [/\bd'acquisition\b/gi, "pour vous faire connaître"],
  [/\btunnel d’acquisition\b/gi, "parcours pour vous faire connaître"],
  [/\btunnel d'acquisition\b/gi, "parcours pour vous faire connaître"],
  // conversion / convertir — prefer contact-oriented wording
  [/\bne convertit pas\b/gi, "n’amène personne à vous contacter"],
  [/\bne convertissent pas\b/gi, "n’amènent personne à vous contacter"],
  [/\bqui convertissent\b/gi, "qui obtiennent des contacts"],
  [/\bpour la conversion\b/gi, "pour amener au contact"],
  [/\bpensée conversion\b/gi, "pensée pour le contact"],
  [/\bsite pour la conversion\b/gi, "site pour le contact"],
  [/\bla conversion\b/gi, "le passage au contact"],
  [/\ben conversion\b/gi, "au passage au contact"],
  [/\bsans gagner en conversion\b/gi, "sans mieux amener au contact"],
  [/\bn’aident pas la conversion\b/gi, "n’aident pas à amener au contact"],
  [/\bn'aident pas la conversion\b/gi, "n'aident pas à amener au contact"],
  [/\bbloque la conversion\b/gi, "bloque le passage au contact"],
  [/\borienté conversion\b/gi, "orienté contact"],
  [/\bPourquoi la conversion résiste\b/g, "Pourquoi le passage au contact résiste"],
  [/\bParce que convertir\b/g, "Parce qu’amener au contact"],
  [/\bveut convertir\b/gi, "veut amener au contact"],
  [/\bqui convertit vraiment\b/gi, "qui amène vraiment au contact"],
  [/\bL’honnêteté convertit\b/g, "L’honnêteté convainc"],
  [/\bL'honnêteté convertit\b/g, "L'honnêteté convainc"],
  [/\bce qui convertit\b/gi, "ce qui amène au contact"],
  [/\ble site convertit\b/gi, "le site amène au contact"],
  [/\bLe site convertit\b/g, "Le site amène au contact"],
  [/\bconvertit autant\b/gi, "convainc autant"],
  [/\bsans aucune preuve\b/gi, "sans aucune preuve"],
  [/\bPeux-tu convertir\b/g, "Pouvez-vous convaincre"],
  [/\bPouvez-vous convertir\b/g, "Pouvez-vous convaincre"],
  [/\bconvertir sans\b/gi, "convaincre sans"],
  [/## Peux-tu convertir/g, "## Pouvez-vous convaincre"],
  [/## Pouvez-vous convertir/g, "## Pouvez-vous convaincre"],
];

for (const [re, rep] of jargon) {
  s = s.replace(re, rep);
}

// Em dash → hyphen (incl. code comment)
s = s.replace(/—/g, " - ");

// Fix double spaces from t' replacements
s = s.replace(/vous vous  +/g, "vous vous ");
s = s.replace(/  +/g, " ");

// Differentiate duplicate H2s
s = s.replace(
  /(slug: "page-non-indexee-google-guide-debutant"[\s\S]*?)## Que signifie « Détectée, actuellement non indexée » \?/,
  '$1## Que signifie « Détectée, actuellement non indexée » pour une débutante ?'
);
s = s.replace(
  /(slug: "page-non-indexee-google-guide-debutant"[\s\S]*?)## Que signifie « Explorée, actuellement non indexée » \?/,
  '$1## Que signifie « Explorée, actuellement non indexée » pour une débutante ?'
);
s = s.replace(
  /(slug: "indexation-google-bloquée-rejets-crawl"|slug: "indexation-google-bloquee-rejets-crawl")([\s\S]*?)## Que signifie « Détectée, actuellement non indexée » \?/,
  '$1$2## Que signifie « Détectée, actuellement non indexée » côté crawl / GSC technique ?'
);
s = s.replace(
  /(slug: "indexation-google-bloquee-rejets-crawl"[\s\S]*?)## Que signifie « Explorée, actuellement non indexée » \?/,
  '$1## Que signifie « Explorée, actuellement non indexée » côté crawl / GSC technique ?'
);

// Titles / H2 still with possessifs leftover patterns (explicit SEO titles)
const titleFixes = [
  [
    "Optimiser son référencement pour Google et les IA : le guide des débutantes en 2026",
    "Optimiser son référencement pour Google et les IA : le guide des débutantes en 2026",
  ],
  [
    "Être trouvée sur ton métier et ta ville",
    "Être trouvée sur votre métier et votre ville",
  ],
  [
    "Créer ou reprendre ta fiche Google",
    "Créer ou reprendre votre fiche Google",
  ],
  [
    "Pourquoi être trouvée sur ton nom est la priorité n°1 ?",
    "Pourquoi être trouvée sur votre nom est la priorité n°1 ?",
  ],
  [
    "Comment être trouvée sur ton métier et ta ville ?",
    "Comment être trouvée sur votre métier et votre ville ?",
  ],
  [
    "Comment écrire pour les questions que tes clientes posent vraiment ?",
    "Comment écrire pour les questions que vos clientes posent vraiment ?",
  ],
  [
    "Comment mesurer si ton site travaille déjà pour toi ?",
    "Comment mesurer si votre site travaille déjà pour vous ?",
  ],
  [
    "Que retenir pour référencer ton site en 2026 ?",
    "Que retenir pour référencer votre site en 2026 ?",
  ],
  [
    "Pourquoi tes pages importantes semblent perdues dans ton site ?",
    "Pourquoi vos pages importantes semblent perdues dans votre site ?",
  ],
  [
    "Comment Googlebot perd-il son temps sur ton site ?",
    "Comment Googlebot perd-il son temps sur votre site ?",
  ],
  [
    "Pourquoi demander une réindexation ne sert à rien si tu n’as rien changé ?",
    "Pourquoi demander une réindexation ne sert à rien si vous n’avez rien changé ?",
  ],
  [
    "Que faire en urgence si ta page n’est pas indexée ?",
    "Que faire en urgence si votre page n’est pas indexée ?",
  ],
  [
    "Comment la saturation des sessions de crawl réduit-elle ton budget ?",
    "Comment la saturation des sessions de crawl réduit-elle votre budget ?",
  ],
  [
    "Reconversion professionnelle 2026 : pourquoi ton site web est le premier levier",
    "Reconversion professionnelle 2026 : pourquoi votre site web est le premier levier",
  ],
  [
    "Comment avancer sans y passer tes soirées ?",
    "Comment avancer sans y passer vos soirées ?",
  ],
  [
    "Que retenir pour créer ton site maintenant ?",
    "Que retenir pour créer votre site maintenant ?",
  ],
  [
    "Quelles cinq questions doivent guider ton choix ?",
    "Quelles cinq questions doivent guider votre choix ?",
  ],
  [
    "Comment séparer le budget du site et celui pour te faire connaître ?",
    "Comment séparer le budget du site et celui pour vous faire connaître ?",
  ],
  [
    "Comment mesurer si ton site actuel travaille pour toi ?",
    "Comment mesurer si votre site actuel travaille pour vous ?",
  ],
  [
    "Un design générique affaiblit-il vraiment ta crédibilité ?",
    "Un design générique affaiblit-il vraiment votre crédibilité ?",
  ],
  [
    "Pourquoi le jargon métier fait fuir tes prospectes ?",
    "Pourquoi le jargon métier fait fuir vos prospectes ?",
  ],
  [
    "Pouvez-vous convertir sans aucune preuve ?",
    "Pouvez-vous convaincre sans aucune preuve ?",
  ],
  [
    "Comment auditer ton site en quinze minutes ?",
    "Comment auditer votre site en quinze minutes ?",
  ],
  [
    "Comment choisir selon ta trésorerie et ton stade ?",
    "Comment choisir selon votre trésorerie et votre stade ?",
  ],
  [
    "L’abonnement est-il rentable face à ton temps ?",
    "L’abonnement est-il rentable face à votre temps ?",
  ],
  [
    "L’abonnement freine-t-il ta liberté créative ?",
    "L’abonnement freine-t-il votre liberté créative ?",
  ],
  [
    "Comment lire un devis hors Kopio sans te faire piéger ?",
    "Comment lire un devis hors Kopio sans vous faire piéger ?",
  ],
  [
    "Comment trier et nommer tes fichiers avant envoi ?",
    "Comment trier et nommer vos fichiers avant envoi ?",
  ],
  [
    "Faut-il montrer ton lieu de travail ?",
    "Faut-il montrer votre lieu de travail ?",
  ],
  [
    "Que retenir avant de retarder ton site ?",
    "Que retenir avant de retarder votre site ?",
  ],
  [
    "Quel budget selon ton métier ?",
    "Quel budget selon votre métier ?",
  ],
  [
    "5 raisons de ne pas attendre pour avoir ton site web",
    "5 raisons de ne pas attendre pour avoir votre site web",
  ],
  [
    "Tes clientes te cherchent-elles vraiment sur Google ?",
    "Vos clientes vous cherchent-elles vraiment sur Google ?",
  ],
  [
    "Vos clientes te cherchent-elles vraiment sur Google ?",
    "Vos clientes vous cherchent-elles vraiment sur Google ?",
  ],
  [
    "Que se passe-t-il pendant que tes concurrentes ont déjà un site ?",
    "Que se passe-t-il pendant que vos concurrentes ont déjà un site ?",
  ],
  [
    "Un site travaille-t-il vraiment quand tu n’es pas disponible ?",
    "Un site travaille-t-il vraiment quand vous n’êtes pas disponible ?",
  ],
  [
    "Un site travaille-t-il vraiment quand vous n’êtes pas disponible ?",
    "Un site travaille-t-il vraiment quand vous n’êtes pas disponible ?",
  ],
  [
    "Est-ce vraiment moins cher et plus rapide que tu crois ?",
    "Est-ce vraiment moins cher et plus rapide que vous croyez ?",
  ],
  [
    "Est-ce vraiment moins cher et plus rapide que vous croyez ?",
    "Est-ce vraiment moins cher et plus rapide que vous croyez ?",
  ],
  [
    "Avez-vous vraiment besoin de connaître le web pour te lancer ?",
    "Avez-vous vraiment besoin de connaître le web pour vous lancer ?",
  ],
  [
    "Le site remplace-t-il ta présence sur les réseaux ?",
    "Le site remplace-t-il votre présence sur les réseaux ?",
  ],
  [
    "Pourquoi « attendre d’être prête » coûte plus cher que tu crois ?",
    "Pourquoi « attendre d’être prête » coûte plus cher que vous croyez ?",
  ],
  [
    "Que gagnez-vous concrètement dès la première semaine en ligne ?",
    "Que gagnez-vous concrètement dès la première semaine en ligne ?",
  ],
  [
    "Et si ton offre n’est pas encore « figée » ?",
    "Et si votre offre n’est pas encore « figée » ?",
  ],
  [
    "Créer son site avec l’IA : les 5 pièges que personne ne te dit",
    "Créer son site avec l’IA : les 5 pièges que personne ne vous dit",
  ],
  [
    "Que faire si tu as déjà un site généré par IA ?",
    "Que faire si vous avez déjà un site généré par IA ?",
  ],
  [
    "Les textes IA « SEO » aident-ils vraiment ton référencement ?",
    "Les textes IA « SEO » aident-ils vraiment votre référencement ?",
  ],
  [
    "Que retenir sur l’IA et ton site ?",
    "Que retenir sur l’IA et votre site ?",
  ],
  [
    "sans y passer tes soirées",
    "sans y passer vos soirées",
  ],
  [
    "pour ton site d’entrepreneuse",
    "pour votre site d’entrepreneuse",
  ],
  [
    "ce que tu paies vraiment",
    "ce que vous payez vraiment",
  ],
  [
    "quand tu es entrepreneuse",
    "quand vous êtes entrepreneuse",
  ],
];

for (const [a, b] of titleFixes) {
  if (a !== b) s = s.split(a).join(b);
}

// Update updatedAt on all posts that have content (set every post's updatedAt)
// Add or replace updatedAt after date fields
s = s.replace(
  /(slug: "[^"]+",\s*\n(?:\s*(?:title|metaTitle|excerpt):[\s\S]*?\n)*?\s*date: "[^"]+",\s*\n)(\s*updatedAt: "[^"]+",\s*\n)?/g,
  (match, before, existing) => {
    return before + '    updatedAt: "2026-10-09",\n';
  }
);

// Fix common conjugation leftovers / grammar after mechanical pass
const polish = [
  [/vous vous vous /g, "vous vous "],
  [/vous n’avez rien changé/g, "vous n’avez rien changé"],
  [/si vous n’avez rien changé/g, "si vous n’avez rien changé"],
  [/vous dépendez entièrement/g, "vous dépendez entièrement"],
  [/Es-vous /g, "Êtes-vous "], // if broken
  [/es-vous en première/gi, "êtes-vous en première"],
  [/Montre votre site/g, "Montrez votre site"],
  [/demande-lui/g, "demandez-lui"],
  [/vois aussi/gi, "voyez aussi"],
  [/Vois aussi/g, "Voyez aussi"],
  [/\bvois \[/gi, "voyez ["],
  [/\bregarde \[/gi, "regardez ["],
  [/\bRegarde \[/g, "Regardez ["],
  [/regarde plutôt/gi, "regardez plutôt"],
  [/\bouvre \[/gi, "ouvrez ["],
  [/« vous devrais/g, "« vous devriez"],
  [/« tu devrais/g, "« vous devriez"],
  [/Je vous aide à retrouver du sens dans votre travail/g, "Je vous aide à retrouver du sens dans votre travail"],
  [/Optimisation de votre potentiel/g, "Optimisation de votre potentiel"],
  [/vous clarifiez votre charge mentale et vous posez/g, "vous clarifiez votre charge mentale et vous posez"],
  [/« vous clarifiez/g, "« vous clarifiez"],
  [/vous clarifiez votre charge/g, "vous clarifiez votre charge"],
  [/Moins de « vous faites quoi exactement/g, "Moins de « vous faites quoi exactement"],
  [/j’ai vu votre LinkedIn/g, "j’ai vu votre LinkedIn"],
  [/scaler/gi, "augmenter la capacité"],
  [/WaaS/g, "abonnement site"],
  [/one-shot/gi, "paiement unique"],
  [/DIY/g, "en autonomie"],
  [/performant/gi, "efficace"],
  // Fix "vous vous " doubling from te→vous vous then tu te
  [/vous vous lancez/g, "vous vous lancez"],
  [/qui vous aidez/g, "que vous aidez"],
  [/pour qui vous travaillez, que vous aidez/g, "pour qui vous travaillez, que vous aidez"],
  [/qui vous aidez, comment/g, "que vous aidez, comment"],
  [/expliquer à des inconnues que vous aidez/g, "expliquer à des inconnues qui vous aidez"],
  // Better reformulation
  [/expliquer à des inconnues qui vous aidez, comment, et quoi faire ensuite/g,
    "expliquer à des inconnues pour qui vous travaillez, comment, et quoi faire ensuite"],
  [/pour qui vous travaillez, quel problème vous traitez, quel format vous proposez/g,
    "pour qui vous travaillez, quel problème vous traitez, quel format vous proposez"],
  [/Choisissez 24 mois/g, "Choisissez 24 mois"],
  [/Appliquez-la/g, "Appliquez-la"],
  [/Applique-la/g, "Appliquez-la"],
  [/Exportéz/g, "Exportez"],
  [/Exporte /g, "Exportez "],
  // Comment line already fixed emdash
  [/Sem\.10  -  préférer/g, "Sem.10 - préférer"],
  [/Sem\.10 -  préférer/g, "Sem.10 - préférer"],
];

for (const [re, rep] of polish) {
  s = s.replace(re, rep);
}

fs.writeFileSync(PATH, s);

// Report
const left = [...s.matchAll(/\b(tu|ton|ta|tes|toi)\b/gi)];
const em = [...s.matchAll(/—/g)];
const h2s = [...s.matchAll(/"## ([^"]+)"/g)].map((m) => m[1]);
const c = {};
for (const h of h2s) c[h] = (c[h] || 0) + 1;
const dups = Object.entries(c).filter(([, n]) => n > 1);

console.log("remaining tu/ton/ta/tes/toi:", left.length);
for (const m of left.slice(0, 80)) {
  const i = m.index;
  console.log(" ", JSON.stringify(s.slice(Math.max(0, i - 35), i + 40).replace(/\n/g, " ")));
}
console.log("emdashes:", em.length);
console.log("dup H2s:", dups);
console.log("jargon left:", {
  builder: (s.match(/\bbuilder\b/gi) || []).length,
  template: (s.match(/\btemplate\b/gi) || []).length,
  conversion: (s.match(/conversion/gi) || []).length,
  convertir: (s.match(/convertir/gi) || []).length,
  convertit: (s.match(/convertit/gi) || []).length,
  trafic: (s.match(/trafic/gi) || []).length,
  CTA: (s.match(/\bCTA\b/g) || []).length,
  kickoff: (s.match(/kickoff/gi) || []).length,
  cash: (s.match(/\bcash\b/gi) || []).length,
  friction: (s.match(/friction/gi) || []).length,
});
