import { cn } from "@/lib/utils";

/** Longueur max du surlignage (comme sur la landing : 2–5 mots courts). */
const MAX_HIGHLIGHT_LEN = 28;

export function SectionHead({
  children,
  highlight,
  stroke = "lime",
  className,
  align = "center",
}: {
  /** Titre complet (string recommandée pour le surlignage) */
  children: string;
  /** Phrase courte surlignée (ex. « sans gérer la technique ») */
  highlight: string;
  stroke?: "lime" | "pink" | "violet";
  className?: string;
  align?: "left" | "center";
}) {
  const markClass =
    stroke === "pink"
      ? "mark mark-pink"
      : stroke === "violet"
        ? "mark mark-violet"
        : "mark mark-lime";

  const safe =
    highlight.length > 0 && highlight.length <= MAX_HIGHLIGHT_LEN
      ? highlight
      : "";
  const idx = safe ? children.indexOf(safe) : -1;

  const content =
    idx === -1 ? (
      <>{children}</>
    ) : (
      <>
        {children.slice(0, idx)}
        <span className={markClass}>{safe}</span>
        {children.slice(idx + safe.length)}
      </>
    );

  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-extrabold tracking-tight leading-tight",
        align === "center" && "text-center",
        className
      )}
    >
      {content}
    </h2>
  );
}
