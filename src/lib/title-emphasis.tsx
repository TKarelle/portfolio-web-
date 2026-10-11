import type { ReactNode } from "react";
import { TitleEm } from "@/components/ui/SectionHead";

/**
 * Titre avec accents italic (TitleEm) et coupure de ligne optionnelle.
 */
export function emphasizeTitle(
  title: string,
  highlight?: string | readonly string[],
  breakAfter?: string,
): ReactNode {
  const highlights = highlight
    ? Array.isArray(highlight)
      ? [...highlight]
      : [highlight]
    : [];

  const applyEm = (chunk: string): ReactNode => {
    if (highlights.length === 0) return chunk;
    const parts: ReactNode[] = [];
    let remaining = chunk;
    let key = 0;

    while (remaining.length > 0) {
      let earliest = -1;
      let match = "";
      for (const h of highlights) {
        const idx = remaining.indexOf(h);
        if (idx !== -1 && (earliest === -1 || idx < earliest)) {
          earliest = idx;
          match = h;
        }
      }
      if (earliest === -1) {
        parts.push(remaining);
        break;
      }
      if (earliest > 0) parts.push(remaining.slice(0, earliest));
      parts.push(<TitleEm key={`em-${key++}`}>{match}</TitleEm>);
      remaining = remaining.slice(earliest + match.length);
    }
    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  if (breakAfter && title.includes(breakAfter)) {
    const idx = title.indexOf(breakAfter) + breakAfter.length;
    const first = title.slice(0, idx).trimEnd();
    const second = title.slice(idx).trimStart();
    return (
      <>
        {applyEm(first)}
        <br />
        {applyEm(second)}
      </>
    );
  }

  return applyEm(title);
}
