import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { AutoPlayVideo } from "@/components/ui/AutoPlayVideo";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { CTA } from "@/data/copy";

type PageIntroProps = {
  breadcrumbs: Crumb[];
  /** Titre (string ou JSX avec <br /> / TitleEm) */
  title: ReactNode;
  description: string;
  /** Accent auto si title est une string */
  highlight?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
  videoLabel?: string;
  badge?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** @deprecated */
  stroke?: "lime" | "pink" | "violet";
  /** @deprecated */
  frame?: "pink" | "lime" | "violet";
};

function titleWithAccent(title: string, highlight?: string): ReactNode {
  if (!highlight) return title;
  const idx = title.indexOf(highlight);
  if (idx === -1) {
    return (
      <>
        {title} <TitleEm>{highlight}</TitleEm>
      </>
    );
  }
  return (
    <>
      {title.slice(0, idx)}
      <TitleEm>{highlight}</TitleEm>
      {title.slice(idx + highlight.length)}
    </>
  );
}

/**
 * Intro de page — SectionHead + atmosphère soft (source unique).
 */
export function PageIntro({
  breadcrumbs,
  highlight,
  title,
  description,
  image,
  imageAlt,
  video,
  videoPoster = "/image/sitewebvideo-poster.jpg",
  videoLabel = "Aperçu du projet",
  badge = "Création de site web",
  primaryHref = "/contact",
  primaryLabel = CTA.primary,
  secondaryHref,
  secondaryLabel = CTA.secondary,
}: PageIntroProps) {
  const mediaAspect = video ? "aspect-[16/10]" : "aspect-[4/3]";
  const heading =
    typeof title === "string" ? titleWithAccent(title, highlight) : title;
  const altFallback = typeof title === "string" ? title : "Kopio";

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

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <Breadcrumbs items={breadcrumbs} />

          {badge ? (
            <p className="mt-6 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-ink/35">
              {badge}
            </p>
          ) : null}

          <div className="mt-4">
            <SectionHead as="h1" size="xl" align="left" className="!max-w-none">
              {heading}
            </SectionHead>
          </div>

          <p className="mt-5 text-base md:text-lg text-muted font-medium leading-relaxed max-w-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref ? (
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>

        <div
          className={`relative ${mediaAspect} w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[var(--rounded-large)] bg-ink/5`}
        >
          {video ? (
            <AutoPlayVideo
              src={video}
              poster={videoPoster}
              title={videoLabel}
              aria-label={videoLabel}
              className="absolute inset-0 h-full w-full object-cover object-top rounded-[var(--rounded-large)]"
            />
          ) : image ? (
            <Image
              src={image}
              alt={imageAlt ?? altFallback}
              fill
              priority
              className="object-cover rounded-[var(--rounded-large)]"
              sizes="(max-width: 1024px) 90vw, 480px"
              quality={75}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
