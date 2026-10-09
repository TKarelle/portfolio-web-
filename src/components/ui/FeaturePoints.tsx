import type { ComponentType, ElementType, ReactNode } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { SectionCta } from "@/components/ui/SectionCta";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { cn } from "@/lib/utils";

export type FeaturePointItem = {
  id: string;
  title: string;
  text: string;
  icon: ComponentType<{ className?: string }>;
};

type FeaturePointsProps = {
  title: ReactNode;
  items: readonly FeaturePointItem[];
  eyebrow?: string;
  ariaLabel?: string;
  id?: string;
  /** Bande floutée full-bleed (SoftBlurBand — fiable Android) */
  glass?: boolean;
  as?: Extract<ElementType, "section" | "div">;
  className?: string;
  /** CTA sous la grille (défaut : contact) */
  cta?: boolean | ReactNode;
  /** Médias / contenu sous le titre (ex. maquette) */
  afterTitle?: ReactNode;
  /** @deprecated */
  highlight?: string;
  /** @deprecated */
  stroke?: "lime" | "pink" | "violet";
};

/**
 * Grille éditoriale 4 points : icône KOPIO + titre ↗ + texte.
 */
export function FeaturePoints({
  title,
  items,
  eyebrow,
  ariaLabel,
  id,
  glass = false,
  as: Tag = "section",
  className,
  cta = false,
  afterTitle,
}: FeaturePointsProps) {
  const inner = (
    <div
      className={cn(
        "w-full",
        glass
          ? "px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 pt-24 pb-24 sm:pt-28 sm:pb-28 md:pt-36 md:pb-36 lg:pt-44 lg:pb-44"
          : "py-4",
      )}
    >
      <div className="reveal max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
        <SectionHead size="xl" eyebrow={eyebrow}>
          {title}
        </SectionHead>
      </div>

      {afterTitle ? (
        <div className="reveal mb-16 sm:mb-20 md:mb-24 max-w-4xl mx-auto">
          {afterTitle}
        </div>
      ) : null}

      <ul
        className="feature-points w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-8 xl:gap-12"
        aria-label={ariaLabel}
      >
        {items.map((item) => (
          <li key={item.id} className="feature-point group">
            <article className="flex flex-col items-center text-center sm:items-start sm:text-left h-full">
              <FeatureIcon
                icon={item.icon}
                className="feature-point__icon mb-5"
              />
              <h3 className="text-xl sm:text-[1.35rem] font-extrabold text-ink tracking-tight leading-snug inline-flex items-center justify-center sm:justify-start gap-1.5">
                {item.title}
                <span
                  className="inline-block text-base font-bold text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-pink"
                  aria-hidden
                >
                  ↗
                </span>
              </h3>
              <p className="mt-2.5 text-sm sm:text-[0.95rem] font-medium text-muted leading-relaxed max-w-sm sm:max-w-none">
                {item.text}
              </p>
            </article>
          </li>
        ))}
      </ul>

      {cta === true ? (
        <div className="reveal">
          <SectionCta />
        </div>
      ) : cta ? (
        <div className="reveal">{cta}</div>
      ) : null}
    </div>
  );

  if (glass) {
    return (
      <SoftBlurBand
        className={cn("relative z-10 w-full !py-0", className)}
        contentClassName="w-full"
      >
        <Tag id={id} className="relative z-10 block w-full">
          {inner}
        </Tag>
      </SoftBlurBand>
    );
  }

  return (
    <Tag id={id} className={cn("relative z-10 w-full", className)}>
      {inner}
    </Tag>
  );
}
