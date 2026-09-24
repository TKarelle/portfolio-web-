import { cn } from "@/lib/utils";

export function SectionHead({
  children,
  highlight,
  stroke = "lime",
  className,
  align = "center",
}: {
  /** Titre complet (string recommandée pour le surlignage) */
  children: string;
  /** Phrase surlignée avec le trait (comme « sans gérer la technique ») */
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

  const idx = children.indexOf(highlight);
  const content =
    idx === -1 ? (
      <>
        {children} <span className={markClass}>{highlight}</span>
      </>
    ) : (
      <>
        {children.slice(0, idx)}
        <span className={markClass}>{highlight}</span>
        {children.slice(idx + highlight.length)}
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
