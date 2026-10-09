"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { MediaCard } from "@/components/ui/MediaCard";
import { SectionCta } from "@/components/ui/SectionCta";
import { SoftNavButton } from "@/components/ui/SoftNavButton";
import { CTA } from "@/data/copy";
import { BRAND_NAME, FOUNDER_PHOTO } from "@/data/site";

const cards = [
  {
    id: "sophie",
    title: "Sophie Delmas",
    image: "/image/mockupsophie.png",
    imageAlt: "Mockup site Sophie Delmas, coach",
  },
  {
    id: "pulse",
    title: "PULSE",
    image: "/image/mockuppulse2.png",
    imageAlt: "Mockup site web PULSE pour consultante en bien-être",
  },
  {
    id: "madeleine",
    title: "Madeleine Fragrance",
    image: "/image/mockupmadeleine2.png",
    imageAlt: "Mockup site Madeleine Fragrance, marque de parfum sur-mesure",
  },
] as const;

/** Portfolio — carrousel MediaCard (Sophie → PULSE → Madeleine en dernier). */
export function DemoVideos() {
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
    const card = el.querySelector<HTMLElement>("[data-demo-card]");
    const styles = getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "20") || 20;
    const step = card ? card.offsetWidth + gap : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section
      id="demos"
      className="relative z-10 w-full bg-bg py-20 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="included-carousel w-full">
        <div className="reveal text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 px-5 sm:px-6">
          <SectionHead size="xl">
            Pensé pour être <TitleEm>beau</TitleEm>. Conçu pour être{" "}
            <TitleEm>utile</TitleEm>.
          </SectionHead>
        </div>

        <div className="relative w-full">
          <ul
            ref={scrollerRef}
            className="included-carousel__track flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
            aria-label="Projets livrés"
          >
            <li className="included-carousel__spacer" aria-hidden="true" />

            {cards.map((card) => (
              <li
                key={card.id}
                data-demo-card
                className="included-carousel__card shrink-0"
              >
                <MediaCard
                  src={card.image}
                  alt={card.imageAlt}
                  aspect="590/442"
                  sizes="(max-width: 768px) 70vw, 50vw"
                >
                  <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.95rem] sm:text-base leading-none text-left">
                    <span className="font-extrabold text-ink tracking-tight">
                      {card.title}
                    </span>
                    <span className="font-medium text-muted">by</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Image
                        src={FOUNDER_PHOTO}
                        alt=""
                        width={22}
                        height={22}
                        className="w-[22px] h-[22px] rounded-full object-cover shrink-0"
                      />
                      <span className="font-extrabold text-ink underline underline-offset-2 decoration-ink/80">
                        {BRAND_NAME}
                      </span>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted/70">
                      PRO
                    </span>
                  </p>
                </MediaCard>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-end gap-2.5 pr-5 sm:pr-6">
            <SoftNavButton
              direction="prev"
              label="Projet précédent"
              onClick={() => scrollByCard(-1)}
            />
            <SoftNavButton
              direction="next"
              label="Projet suivant"
              onClick={() => scrollByCard(1)}
            />
          </div>
        </div>

        <div className="reveal px-5 sm:px-6">
          <SectionCta href="/projets">{CTA.secondary}</SectionCta>
        </div>
      </div>
    </section>
  );
}
