import type { ReactNode } from "react";

/** Wrap the first occurrence of `highlight` in a mark for display titles. */
export function highlightPhrase(
  text: string,
  highlight: string,
  markClassName = "mark mark-pink"
): ReactNode {
  if (!highlight) return text;
  const idx = text.indexOf(highlight);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className={markClassName}>{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

/**
 * Choisit un surlignage court (1–2 mots, ≤ 22 car.) comme sur la landing.
 * Évite les barres roses sur toute une phrase longue.
 */
export function pickShortHighlight(title: string): string {
  const clean = title.replace(/\?$/, "").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return title;

  const last = words[words.length - 1];
  if (words.length >= 2) {
    const two = `${words[words.length - 2]} ${last}`;
    if (two.length <= 22) return two;
  }
  if (last.length <= 22) return last;
  return last.slice(0, 18);
}
