import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";
import { AutoPlayVideo } from "@/components/ui/AutoPlayVideo";
import { CTA } from "@/data/copy";

type PageIntroProps = {
  breadcrumbs: Crumb[];
  highlight: string;
  title: string;
  description: string;
  stroke?: "lime" | "pink" | "violet";
  image?: string;
  imageAlt?: string;
  video?: string;
  videoPoster?: string;
  videoLabel?: string;
  badge?: string;
  frame?: "pink" | "lime" | "violet";
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

function Blob({ className, color }: { className?: string; color: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl animate-float pointer-events-none ${className}`}
      style={{ background: color }}
      aria-hidden
    />
  );
}

export function PageIntro({
  breadcrumbs,
  highlight,
  title,
  description,
  stroke = "pink",
  image,
  imageAlt = "",
  video,
  videoPoster = "/image/sitewebvideo-poster.jpg",
  videoLabel = "Aperçu du projet",
  badge = "Dès 500 € · sans engagement",
  frame = "pink",
  primaryHref = "/contact",
  primaryLabel = CTA.primary,
  secondaryHref,
  secondaryLabel = CTA.secondary,
}: PageIntroProps) {
  const markClass =
    stroke === "violet"
      ? "mark mark-violet"
      : stroke === "lime"
        ? "mark mark-lime"
        : "mark mark-pink";

  const frameClass =
    frame === "lime"
      ? "photo-frame-lime"
      : frame === "violet"
        ? "photo-frame-violet"
        : "photo-frame";

  const idx = title.indexOf(highlight);
  const heading =
    idx === -1 ? (
      <>
        {title} <span className={markClass}>{highlight}</span>
      </>
    ) : (
      <>
        {title.slice(0, idx)}
        <span className={markClass}>{highlight}</span>
        {title.slice(idx + highlight.length)}
      </>
    );

  const mediaAspect = video ? "aspect-[16/10]" : "aspect-[4/3]";

  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-14 md:pb-20 px-6">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 65% 50% at 0% 20%, rgba(255, 31, 113, 0.22) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 100% 10%, rgba(124, 58, 237, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 70% 100%, rgba(212, 255, 0, 0.16) 0%, transparent 45%),
            var(--bg)
          `,
        }}
      />
      <Blob className="z-[1] w-56 h-56 -top-10 -left-10 opacity-40" color="rgba(255,31,113,0.4)" />
      <Blob
        className="z-[1] w-72 h-72 top-1/3 -right-16 opacity-35 animate-float-slow"
        color="rgba(124,58,237,0.35)"
      />
      <Blob
        className="z-[1] w-48 h-48 bottom-0 left-1/3 opacity-30 animate-pulse-glow"
        color="rgba(212,255,0,0.3)"
      />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <Breadcrumbs items={breadcrumbs} />

          {badge && (
            <span className="mt-6 inline-block bg-ink text-lime text-sm font-bold px-4 py-1.5 rounded-full border-2 border-ink">
              {badge}
            </span>
          )}

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight">
            {heading}
          </h1>

          <p className="mt-5 text-base md:text-lg text-muted font-medium leading-relaxed max-w-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref && (
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>

        <div
          className={`relative ${mediaAspect} w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-[1.25rem] ${frameClass}`}
        >
          {video ? (
            <AutoPlayVideo
              src={video}
              poster={videoPoster}
              aria-label={videoLabel}
              className="absolute inset-0 h-full w-full object-cover object-top rounded-[1.1rem]"
            />
          ) : image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover rounded-[1.1rem]"
              sizes="(max-width: 1024px) 90vw, 480px"
              quality={75}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
