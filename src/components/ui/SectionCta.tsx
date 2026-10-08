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
}: SectionCtaProps) {
  return (
    <div
      className={cn(
        "mt-10 sm:mt-12 md:mt-14 flex",
        align === "center" ? "justify-center text-center" : "justify-start",
        className,
      )}
    >
      <Button href={href} variant={variant} size={size}>
        {children}
      </Button>
    </div>
  );
}
