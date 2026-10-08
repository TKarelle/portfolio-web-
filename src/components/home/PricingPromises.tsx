"use client";

import { useCallback, useEffect, useRef } from "react";
import { guarantees, includedInAll } from "@/data/pricing";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { MediaCard, MediaCardCaption } from "@/components/ui/MediaCard";
import { FeaturePoints } from "@/components/ui/FeaturePoints";
import { SoftNavButton } from "@/components/ui/SoftNavButton";
import {
  IconCheck,
  IconHome,
  IconSliders,
  IconTag,
} from "@/components/ui/FeatureIcon";

/** Inclus — carrousel MediaCard (même shell que le reste du site). */
export function PricingIncluded() {
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

  const scrollByCard = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-included-card]");
    const styles = getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "20") || 20;
    const step = card ? card.offsetWidth + gap : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <div className="included-carousel mb-14 md:mb-20 w-full">
      <div className="text-center mb-10 md:mb-12 px-5 sm:px-6 max-w-3xl mx-auto">
        <SectionHead size="xl">
          Tout ce qu’il faut pour faire rayonner votre{" "}
          <TitleEm>expertise</TitleEm>.
        </SectionHead>
      </div>

      <div className="relative w-full">
        <ul
          ref={scrollerRef}
          className="included-carousel__track flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
          aria-label="Ce qui est inclus"
        >
          <li className="included-carousel__spacer" aria-hidden="true" />

          {includedInAll.map((item) => (
            <li
              key={item.title}
              data-included-card
              className="included-carousel__card shrink-0"
            >
              <MediaCard
                src={item.image}
                alt={item.imageAlt}
                video={"video" in item ? item.video : undefined}
                aspect="16/10"
                sizes="(max-width: 768px) 70vw, 50vw"
              >
                <MediaCardCaption title={item.title} text={item.text} />
              </MediaCard>
            </li>
          ))}
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

const guaranteeItems = guarantees.map((g, i) => ({
  id: g.title,
  title: g.title,
  text: g.text,
  icon: [IconCheck, IconSliders, IconHome, IconTag][i] ?? IconCheck,
}));

/** Garanties — même FeaturePoints que Constat. */
export function PricingGuarantees() {
  return (
    <FeaturePoints
      as="div"
      glass
      title={
        <>
          Votre projet, entre de <TitleEm>bonnes mains</TitleEm>.
        </>
      }
      ariaLabel="Garanties"
      items={guaranteeItems}
      className="mt-16 md:mt-20"
    />
  );
}
