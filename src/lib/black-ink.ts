/**
 * Protocole Black Ink (Sem.10) — règles d’ancrage sémantique.
 * Anti-SpamBrain : pas de listes d’ancres exactes en masse.
 */

export const BLACK_INK_RULES = [
  "3 à 7 liens internes contextuels max par page money",
  "Ancre exacte (mot-clé) : au plus 1 fois par URL cible sur la page",
  "Co-occurrence dans ~40–60 tokens : keyword + Karelle + action (prix sur /tarifs, pas dans le CTA)",
  "Hub ← spoke ← siblings cosine + 1 besoin lié",
  "Footer = hubs + sélection courte (déjà Sem.5), pas dump exhaustif",
  "Pas d’ancres 100 % exact match en rafale depuis pages orphelines",
] as const;

export function metierAnchor(metier: string): string {
  return `site web pour ${metier}`;
}
