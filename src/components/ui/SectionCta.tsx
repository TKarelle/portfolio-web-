import { Button } from "@/components/ui/Button";
import { CTA } from "@/data/copy";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionCtaProps = {
  href?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark" | "violet";
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Alignement du bloc */
  align?: "left" | "center";
  /** Second bouton (ex. quiz) */
  secondaryHref?: string;
  secondaryLabel?: ReactNode;
  secondaryVariant?: "primary" | "secondary" | "outline" | "dark" | "violet";
};

/**
 * CTA de fin de section — une seule source pour ne pas oublier les boutons.
 */
export function SectionCta({
  href = "#contact",
  children = CTA.primary,
  variant = "primary",
  size = "lg",
  className,
  align = "center",
  secondaryHref,
  secondaryLabel,
  secondaryVariant = "outline",
}: SectionCtaProps) {
  return (
    <div
      className={cn(
        "mt-10 sm:mt-12 md:mt-14 flex flex-wrap gap-3",
        align === "center"
          ? "justify-center text-center"
          : "justify-start",
        className,
      )}
    >
      <Button href={href} variant={variant} size={size}>
        {children}
      </Button>
      {secondaryHref && secondaryLabel ? (
        <Button href={secondaryHref} variant={secondaryVariant} size={size}>
          {secondaryLabel}
        </Button>
      ) : null}
    </div>
  );
}
