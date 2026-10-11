"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { SoftNavButton } from "@/components/ui/SoftNavButton";
import { cn } from "@/lib/utils";

type HorizontalSnapCarouselProps = {
  children: ReactNode;
  /** Sélecteur de carte pour le pas de scroll */
  cardSelector?: string;
  ariaLabel: string;
  className?: string;
  trackClassName?: string;
};

/**
 * Carrousel horizontal snap — même mécanique que « inclus » / démos (accueil).
 */
export function HorizontalSnapCarousel({
  children,
  cardSelector = "[data-snap-card]",
  ariaLabel,
  className,
  trackClassName,
}: HorizontalSnapCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reset = () => {
      el.scrollLeft = 0;
    };
    reset();
    const t1 = window.setTimeout(reset, 0);
    const t2 = window.setTimeout(reset, 100);
    requestAnimationFrame(reset);
    window.addEventListener("load", reset);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("load", reset);
    };
  }, []);

  const scrollByCard = useCallback(
    (dir: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>(cardSelector);
      const styles = getComputedStyle(el);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "20") || 20;
      const step = card ? card.offsetWidth + gap : 320;
      el.scrollBy({ left: dir * step, behavior: "smooth" });
    },
    [cardSelector],
  );

  return (
    <div className={cn("included-carousel w-full", className)}>
      <div className="relative w-full">
        <ul
          ref={scrollerRef}
          className={cn(
            "included-carousel__track flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2",
            trackClassName,
          )}
          aria-label={ariaLabel}
        >
          <li className="included-carousel__spacer" aria-hidden="true" />
          {children}
        </ul>

        <div className="mt-6 flex justify-end gap-2.5 pr-5 sm:pr-6">
          <SoftNavButton
            direction="prev"
            label="Carte précédente"
            onClick={() => scrollByCard(-1)}
          />
          <SoftNavButton
            direction="next"
            label="Carte suivante"
            onClick={() => scrollByCard(1)}
          />
        </div>
      </div>
    </div>
  );
}
