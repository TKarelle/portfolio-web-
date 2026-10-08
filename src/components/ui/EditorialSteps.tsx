import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type EditorialStepItem = {
  step: string;
  title: string;
  paragraphs: readonly string[];
  /** CTA ou action sous le texte */
  action?: ReactNode;
};

/**
 * Colonnes éditoriales numérotées (contact 01/02, process, etc.).
 * Pas de cards — grands numéros + texte.
 */
export function EditorialSteps({
  items,
  className,
  columns = 2,
}: {
  items: readonly EditorialStepItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "md:grid-cols-4"
      : columns === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  return (
    <ol
      className={cn(
        "relative grid grid-cols-1 gap-12 md:gap-10 lg:gap-14",
        cols,
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.step} className="flex flex-col min-w-0">
          <p className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold tracking-tight text-ink/15 leading-none tabular-nums">
            {item.step}
          </p>
          <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-ink tracking-tight leading-snug">
            {item.title}
          </h3>
          <div className="mt-3 space-y-3 flex-1">
            {item.paragraphs.map((p) => (
              <p
                key={p}
                className="text-sm sm:text-[0.95rem] font-medium text-muted leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
          {item.action ? <div className="mt-7">{item.action}</div> : null}
        </li>
      ))}
    </ol>
  );
}
