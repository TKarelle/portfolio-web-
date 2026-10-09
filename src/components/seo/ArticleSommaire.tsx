import type { ReactNode } from "react";

export type SommaireHeading = {
  id: string;
  label: string;
};

type ArticleSommaireProps = {
  headings: SommaireHeading[];
  /** Titre du bloc (défaut : Sommaire) */
  title?: string;
  className?: string;
  /** Contenu optionnel sous le titre */
  lead?: ReactNode;
};

/**
 * Sommaire GEO réutilisable — shell soft (SurfaceCard / home), sans trait noir.
 */
export function ArticleSommaire({
  headings,
  title = "Sommaire",
  className = "",
  lead,
}: ArticleSommaireProps) {
  if (headings.length < 2) return null;

  return (
    <nav
      aria-labelledby="article-sommaire-title"
      className={`my-8 rounded-[var(--rounded-large)] border border-ink/10 bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-[0_14px_44px_rgba(17,17,17,0.07)] ${className}`}
    >
      <p
        id="article-sommaire-title"
        className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/40 mb-3"
      >
        {title}
      </p>
      {lead ? (
        <div className="mb-4 text-sm text-muted font-medium leading-relaxed">
          {lead}
        </div>
      ) : null}
      <ol className="space-y-2.5 list-none">
        {headings.map((h, i) => (
          <li key={h.id} className="flex gap-3 text-sm leading-snug">
            <span
              className="shrink-0 w-6 text-right text-ink/35 font-extrabold tabular-nums"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${h.id}`}
              className="font-semibold text-ink/85 hover:text-pink underline-offset-2 hover:underline transition-colors"
            >
              {h.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
