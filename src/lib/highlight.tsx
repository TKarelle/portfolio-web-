import type { ReactNode } from "react";

function highlightInLine(
  line: string,
  highlight: string,
  markClassName: string
): ReactNode {
  if (!highlight) return line;
  const idx = line.indexOf(highlight);
  if (idx === -1) return line;
  return (
    <>
      {line.slice(0, idx)}
      <span className={markClassName}>{highlight}</span>
      {line.slice(idx + highlight.length)}
    </>
  );
}

/**
 * Wrap the first occurrence of `highlight` in a mark.
 * `\n` in `text` becomes a hard line break so the mark never wraps mid-phrase.
 */
export function highlightPhrase(
  text: string,
  highlight: string,
  markClassName = "mark mark-pink"
): ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 ? <br /> : null}
      <span className="hero-title-line">
        {highlightInLine(line, highlight, markClassName)}
      </span>
    </span>
  ));
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
