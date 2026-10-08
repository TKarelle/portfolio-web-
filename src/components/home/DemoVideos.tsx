import Image from "next/image";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { MediaCard } from "@/components/ui/MediaCard";
import { SectionCta } from "@/components/ui/SectionCta";
import { CTA } from "@/data/copy";
import { BRAND_NAME, FOUNDER_PHOTO } from "@/data/site";

const cards = [
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

/** Portfolio — MediaCard (même image shell que le carrousel inclus). */
export function DemoVideos() {
  return (
    <section
      id="demos"
      className="relative z-10 w-full bg-bg py-20 sm:py-24 md:py-28 lg:py-32 px-3 sm:px-4 md:px-5"
    >
      <div className="w-full max-w-[1220px] mx-auto">
        <div className="reveal text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <SectionHead size="xl">
            Pensé pour être <TitleEm>beau</TitleEm>. Conçu pour être{" "}
            <TitleEm>utile</TitleEm>.
          </SectionHead>
        </div>

        <ul className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 lg:gap-5">
          {cards.map((card) => (
            <li
              key={card.id}
              className="w-full max-w-[590px] md:w-[min(590px,calc(50%-0.625rem))] lg:w-[590px] shrink-0"
            >
              <MediaCard
                src={card.image}
                alt={card.imageAlt}
                aspect="590/442"
                sizes="(max-width: 768px) 100vw, 590px"
                className="items-center md:items-stretch text-center md:text-left"
              >
                <p className="flex flex-wrap items-center justify-center md:justify-start gap-x-1.5 gap-y-1 text-[0.95rem] sm:text-base leading-none">
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

        <div className="reveal">
          <SectionCta href="/projets">{CTA.secondary}</SectionCta>
        </div>
      </div>
    </section>
  );
}
