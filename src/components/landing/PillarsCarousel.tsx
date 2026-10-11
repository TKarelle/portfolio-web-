"use client";

import type { ServicePillar } from "@/data/services";
import { HorizontalSnapCarousel } from "@/components/ui/HorizontalSnapCarousel";
import { TextFirstCard } from "@/components/ui/TextFirstCard";
import { SectionHead } from "@/components/ui/SectionHead";
import { emphasizeTitle } from "@/lib/title-emphasis";

type PillarsCarouselProps = {
  h2?: string;
  h2Highlight?: string | readonly string[];
  /** Texte sous le H2 (ex. intro stages) */
  intro?: string;
  items: readonly ServicePillar[];
  /** Fond de section (alternance bg / surface) */
  className?: string;
};

/**
 * Section piliers en carrousel — cards texte-first (même shell snap que l’accueil).
 */
export function PillarsCarousel({
  h2,
  h2Highlight,
  intro,
  items,
  className = "bg-surface",
}: PillarsCarouselProps) {
  return (
    <section className={`py-14 md:py-20 ${className}`}>
      {h2 ? (
        <div className="text-center mb-10 md:mb-12 px-5 sm:px-6 max-w-3xl mx-auto">
          <SectionHead size="xl">
            {h2Highlight ? emphasizeTitle(h2, h2Highlight) : h2}
          </SectionHead>
          {intro
            ? intro.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="mt-5 text-base md:text-lg font-medium text-muted leading-relaxed"
                >
                  {para}
                </p>
              ))
            : null}
        </div>
      ) : null}

      <HorizontalSnapCarousel ariaLabel={h2 ?? "Points clés"}>
        {items.map((item) => (
          <li
            key={item.title}
            data-snap-card
            className="included-carousel__card shrink-0 self-stretch"
          >
            <TextFirstCard
              label={item.label}
              title={item.title}
              text={item.body}
              image={item.image}
              imageAlt={item.imageAlt ?? item.title}
            />
          </li>
        ))}
      </HorizontalSnapCarousel>
    </section>
  );
}
