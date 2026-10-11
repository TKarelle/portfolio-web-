import Image from "next/image";
import type { ReactNode } from "react";
import { ScrollBoldText } from "@/components/home/ScrollBoldText";
import { SoftBlurBand } from "@/components/ui/SoftBlurBand";
import { cn } from "@/lib/utils";

type PhotoScrollStoryProps = {
  id?: string;
  /** Titre sémantique (sr-only si déjà repris dans paragraphs) */
  title?: string;
  image: string;
  imageAlt: string;
  paragraphs: readonly string[];
  /** Image du fond SoftBlurBand (défaut : même que la photo) */
  blurImageSrc?: string;
  /** CTA sous le texte (ex. SectionCta) */
  cta?: ReactNode;
  className?: string;
};

/**
 * Section réutilisable — photo à gauche, texte scroll-bold à droite
 * (même composition que « Pourquoi moi » sur l’accueil).
 */
export function PhotoScrollStory({
  id,
  title,
  image,
  imageAlt,
  paragraphs,
  blurImageSrc,
  cta,
  className,
}: PhotoScrollStoryProps) {
  return (
    <section id={id} className={cn("relative z-10 w-full", className)}>
      {title ? <h2 className="sr-only">{title}</h2> : null}
      <SoftBlurBand
        imageSrc={blurImageSrc ?? image}
        contentClassName="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] overflow-hidden rounded-[var(--rounded-large)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>

          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-left min-h-[50vh] lg:min-h-0">
            <ScrollBoldText
              paragraphs={paragraphs}
              className="max-w-xl mx-auto lg:mx-0"
            />
            {cta}
          </div>
        </div>
      </SoftBlurBand>
    </section>
  );
}
