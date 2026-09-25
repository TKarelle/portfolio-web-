import Image from "next/image";
import { FOUNDER_DIPLOMA, FOUNDER_NAME, FOUNDER_PHOTO } from "@/data/site";

export function QuoteBand() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 px-6 bg-surface"
      aria-label="Accroche"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 15% 40%, rgba(255, 31, 113, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 45% 45% at 90% 70%, rgba(212, 255, 0, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 55% 10%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <blockquote className="reveal">
          <p className="text-[clamp(1.85rem,5vw,3.15rem)] font-extrabold tracking-tight leading-[1.12] text-ink">
            Ton métier, c’est ton{" "}
            <span className="mark mark-pink">savoir-faire</span>.
            <br />
            Le mien, c’est de le{" "}
            <span className="mark mark-lime">rendre visible</span>.
          </p>
        </blockquote>

        <div className="reveal mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
          <div className="relative w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] shrink-0 photo-frame photo-frame-lime">
            <Image
              src={FOUNDER_PHOTO}
              alt={FOUNDER_NAME}
              fill
              className="object-cover rounded-[0.9rem]"
              sizes="72px"
            />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-extrabold text-ink leading-tight">
              {FOUNDER_NAME}
            </p>
            <p className="text-sm font-medium text-muted mt-0.5">
              {FOUNDER_DIPLOMA}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 mt-2 text-sm font-extrabold text-pink hover:text-pink-hot transition-colors"
            >
              Parlons de ton projet
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
