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
