import Image from "next/image";
import {
  BRAND_SIGNATURE,
  FOUNDER_DIPLOMA,
  FOUNDER_EXPERIENCE,
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
} from "@/data/site";
import { SectionHead } from "@/components/ui/SectionHead";

/** À propos fondatrice — Server Component (Sem.2). Photo visible sans JS (WRS / bots). */
export function HowIWork() {
  return (
    <section className="py-16 md:py-20 px-6 bg-chunk-violet" id="pourquoi-moi">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="mirror-stage w-full max-w-sm mx-auto lg:mx-0">
          <div className="mirror-flip mirror-flip-auto relative aspect-[4/5] w-full photo-frame photo-frame-lime">
            <Image
              src={FOUNDER_PHOTO}
              alt={FOUNDER_PHOTO_ALT}
              fill
              className="object-cover rounded-[1.1rem]"
              sizes="400px"
            />
          </div>
        </div>

        <div className="reveal">
          <p className="text-sm font-bold text-violet mb-3">
            {FOUNDER_DIPLOMA} · {FOUNDER_EXPERIENCE}
          </p>

          <SectionHead
            align="left"
            stroke="violet"
            highlight="déléguée"
            className="mb-5"
          >
            {"Kopio n'est pas une agence. C'est votre présence en ligne, déléguée."}
          </SectionHead>

          <div className="space-y-4 text-muted text-base md:text-lg font-medium leading-relaxed mb-7">
            <p>
              Je m&apos;appelle <strong className="text-ink">{FOUNDER_NAME}</strong>.
              Développeuse indépendante. Juste vous et moi.
            </p>
            <p>
              Avec {FOUNDER_EXPERIENCE}, j&apos;aide les professionnelles de
              l&apos;accompagnement (coachs, thérapeutes, sophrologues,
              naturopathes, consultantes) à avoir une présence en ligne claire,
              sans la charge mentale technique.
            </p>
          </div>

          <p className="text-sm font-semibold text-ink/70 border-l-4 border-lime pl-4 leading-snug">
            {BRAND_SIGNATURE}
          </p>
        </div>
      </div>
    </section>
  );
}
