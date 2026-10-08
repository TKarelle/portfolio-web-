import Image from "next/image";
import { FOUNDER_NAME, FOUNDER_PHOTO, FOUNDER_PHOTO_ALT } from "@/data/site";
import { ScrollBoldText } from "@/components/home/ScrollBoldText";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { SectionCta } from "@/components/ui/SectionCta";
import { CTA } from "@/data/copy";

const ABOUT_COPY = [
  "Un site n’est jamais simplement un site.",
  "Vous avez construit votre expertise. Comment la faire ressentir en quelques secondes sur Google ?",
  "C’est là que j’interviens.",
  `Je suis ${FOUNDER_NAME}, développeuse web. Je transforme votre expertise en une présence claire, personnelle et rassurante.`,
  "Votre expertise est déjà là. Mon rôle : lui donner la place qu’elle mérite.",
] as const;

/** À propos — SoftBlurBand + photo + texte scroll-bold. */
export function HowIWork() {
  return (
    <section id="pourquoi-moi" className="relative z-10 w-full">
      <SoftBlurBand contentClassName="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] overflow-hidden rounded-[var(--rounded-large)]">
            <Image
              src={FOUNDER_PHOTO}
              alt={FOUNDER_PHOTO_ALT}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-left min-h-[50vh] lg:min-h-0">
            <ScrollBoldText
              paragraphs={ABOUT_COPY}
              className="max-w-xl mx-auto lg:mx-0"
            />
            <SectionCta align="left" className="lg:justify-start">
              {CTA.practice}
            </SectionCta>
          </div>
        </div>
      </SoftBlurBand>
    </section>
  );
}
