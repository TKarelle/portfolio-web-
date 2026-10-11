import { Button } from "@/components/ui/Button";
import { MeshGrainBackground } from "@/components/ui/MeshGrainBackground";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import {
  MockupMarquee,
  type MockupItem,
} from "@/components/landing/MockupMarquee";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";

export type CreationEmotionalHeroProps = {
  breadcrumbs: Crumb[];
  title: string;
  highlight?: string;
  /** H2 / lede sous le H1 */
  lede: string;
  stack?: readonly string[];
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  /** Si fourni et non vide : bande maquettes (création uniquement) */
  mockups?: readonly MockupItem[];
};

function withAccent(title: string, highlight?: string) {
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
 * Hero sticky hubs services — même langage que l’accueil (mesh + H1 + lede + CTA).
 * Marquee optionnelle (création). SEO / GEO / SAGEO : sans bande images.
 */
export function CreationEmotionalHero({
  breadcrumbs,
  title,
  highlight,
  lede,
  stack = [],
  primaryCta,
  secondaryCta,
  mockups,
}: CreationEmotionalHeroProps) {
  const hasMarquee = Boolean(mockups && mockups.length > 0);

  return (
    <section className="sticky top-0 z-0 min-h-[100svh] flex flex-col">
      <MeshGrainBackground
        className="flex-1 flex flex-col min-h-[100svh]"
        contentClassName="flex flex-col w-full pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-12 min-h-[100svh]"
      >
        <div className="page-x w-full flex-1 flex flex-col">
          <Breadcrumbs items={breadcrumbs} />

          <div className="hero-enter mt-8 sm:mt-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-5 sm:gap-6 flex-1 justify-center">
            <SectionHead as="h1" size="xl" className="!max-w-none">
              {withAccent(title, highlight)}
            </SectionHead>

            <p className="hero-lede mx-auto m-0 max-w-2xl">{lede}</p>

            {stack.length > 0 ? (
              <p className="mt-1 sm:mt-2 text-[clamp(1.15rem,3.2vw,1.75rem)] font-extrabold tracking-[-0.03em] leading-[1.25] text-ink text-balance">
                {stack.map((line, i) => (
                  <span key={line} className="block">
                    {i === stack.length - 1 ? (
                      <TitleEm>{line}</TitleEm>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </p>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto mt-1">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        {hasMarquee ? (
          <div className="hero-enter-d1 w-full mt-8 sm:mt-10 md:mt-12">
            <MockupMarquee items={mockups!} />
          </div>
        ) : null}
      </MeshGrainBackground>
    </section>
  );
}
