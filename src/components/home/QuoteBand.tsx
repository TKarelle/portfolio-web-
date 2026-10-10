import Image from "next/image";
import {
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
  FOUNDER_ROLE,
  FOUNDER_TAGLINE,
} from "@/data/site";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";

/** Accroche fondatrice — fond blanc, sans CTA. */
export function QuoteBand() {
  return (
    <section
      className="relative z-10 overflow-hidden py-20 md:py-28 px-5 sm:px-8 bg-surface"
      aria-label="Accroche"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 15% 40%, rgba(255, 31, 113, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 45% 45% at 90% 70%, rgba(212, 255, 0, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 55% 10%, rgba(124, 58, 237, 0.07) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="reveal">
          <SectionHead size="xl" className="!max-w-[22em]">
            Votre expertise, clairement <TitleEm>visible</TitleEm>.
            <br />
            Votre esprit, enfin <TitleEm>libre</TitleEm>.
          </SectionHead>
        </div>

        <div className="reveal mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
          <div className="relative w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
            <Image
              src={FOUNDER_PHOTO}
              alt={FOUNDER_PHOTO_ALT}
              fill
              className="object-cover"
              sizes="72px"
            />
          </div>

          <div className="text-center sm:text-left max-w-lg">
            <p className="text-sm sm:text-base font-extrabold text-ink leading-snug">
              {FOUNDER_NAME}{" "}
              <span className="font-medium text-muted">| {FOUNDER_ROLE}</span>
            </p>
            <p className="mt-1.5 text-sm font-medium text-muted leading-snug">
              {FOUNDER_TAGLINE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
