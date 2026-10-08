import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type SectionHeadProps = {
  children: ReactNode;
  /** Petit label au-dessus du titre (optionnel) */
  eyebrow?: string;
  className?: string;
  align?: "left" | "center";
  as?: Extract<ElementType, "h1" | "h2" | "h3">;
  /** Échelle typo premium */
  size?: "md" | "lg" | "xl";
  /** @deprecated */
  highlight?: string;
  /** @deprecated */
  stroke?: "lime" | "pink" | "violet";
};

const sizeClass = {
  md: "text-[clamp(1.75rem,3.8vw,2.35rem)]",
  lg: "text-[clamp(2.1rem,5vw,3.15rem)]",
  xl: "text-[clamp(2.45rem,6.5vw,4.25rem)]",
} as const;

/**
 * Mot important en Instrument Serif italic — contraste premium dans les titres Jakarta.
 */
export function TitleEm({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <em className={cn("title-em", className)}>
      {children}
    </em>
  );
}

/**
 * Titre premium — Jakarta extrabold + TitleEm (serif italic) pour les accents.
 */
export function SectionHead({
  children,
  eyebrow,
  className,
  align = "center",
  as: Tag = "h2",
  size = "lg",
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "section-head",
        align === "center" && "text-center",
        align === "left" && "text-left",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 sm:mb-4 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.22em] text-ink/35",
            align === "center" && "mx-auto",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "section-head__title m-0 font-extrabold text-ink tracking-[-0.035em] leading-[1.08] text-balance",
          sizeClass[size],
          className,
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
