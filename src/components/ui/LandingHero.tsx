import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { HeroFacts } from "@/components/ui/HeroFacts";
import { MediaCard } from "@/components/ui/MediaCard";

type LandingHeroProps = {
  breadcrumbs: Crumb[];
  title: ReactNode;
  /** Accent auto si title string */
  highlight?: string;
  /** Label éditorial au-dessus du H1 */
  eyebrow?: string;
  intro: string;
  image: string;
  imageAlt: string;
  geoSummary?: string;
  proof?: string;
  delivery?: string;
  /** Remplace les chips commerciales par défaut (prix, délai…) */
  factChips?: string[];
  footer?: ReactNode;
};

function withAccent(title: string, highlight?: string): ReactNode {
  if (!highlight) return title;
  const idx = title.indexOf(highlight);
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <TitleEm>{highlight}</TitleEm>
      {title.slice(idx + highlight.length)}
    </>
  );
}

/**
 * Hero landings métier / besoin — même DA que PageIntro.
 */
export function LandingHero({
  breadcrumbs,
  title,
  highlight,
  eyebrow,
  intro,
  image,
  imageAlt,
  geoSummary,
  proof,
  delivery,
  factChips,
  footer,
}: LandingHeroProps) {
  const heading =
    typeof title === "string" ? withAccent(title, highlight) : title;

  return (
    <section className="relative overflow-hidden pt-36 md:pt-40 pb-14 md:pb-20 page-x">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 65% 50% at 0% 20%, rgba(255, 31, 113, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 100% 10%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 70% 100%, rgba(212, 255, 0, 0.1) 0%, transparent 45%),
            var(--bg)
          `,
        }}
      />

      <div className="relative z-10 w-full">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <SectionHead
              as="h1"
              size="lg"
              align="left"
              eyebrow={eyebrow}
              className="!max-w-none"
            >
              {heading}
            </SectionHead>

            <p className="mt-6 text-base md:text-lg text-ink/80 font-medium leading-relaxed max-w-xl">
              {intro}
            </p>

            {geoSummary || factChips ? (
              <div className="mt-6">
                <HeroFacts
                  geoSummary={geoSummary}
                  proof={proof}
                  delivery={delivery}
                  chips={factChips}
                />
              </div>
            ) : null}
            {footer}
          </div>

          <MediaCard
            src={image}
            alt={imageAlt}
            aspect="4/3"
            sizes="(max-width: 1024px) 100vw, 500px"
          />
        </div>
      </div>
    </section>
  );
}
