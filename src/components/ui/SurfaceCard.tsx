import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shell commun des cards “premium soft” (avec ou sans image). */
export const surfaceCardClassName =
  "rounded-[var(--rounded-large)] border border-ink/10 bg-white shadow-[0_14px_44px_rgba(17,17,17,0.07)]";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  /** Padding interne standard */
  padded?: boolean;
  highlight?: boolean;
  as?: Extract<ElementType, "div" | "article" | "li" | "section">;
};

export function SurfaceCard({
  children,
  className,
  padded = true,
  highlight = false,
  as: Tag = "div",
}: SurfaceCardProps) {
  return (
    <Tag
      className={cn(
        surfaceCardClassName,
        padded && "px-6 py-7 sm:px-7 sm:py-8 md:px-8 md:py-9",
        highlight && "ring-2 ring-ink/10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
