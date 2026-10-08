import Image from "next/image";
import type { ReactNode } from "react";
import { FOUNDER_PHOTO } from "@/data/site";
import { cn } from "@/lib/utils";

type SoftBlurBandProps = {
  children: ReactNode;
  className?: string;
  /** Image de fond (défaut : photo fondatrice) */
  imageSrc?: string;
  contentClassName?: string;
};

/**
 * Bande fond flouté réutilisable (titres pricing, à propos, etc.).
 * Une seule source de vérité pour le traitement couleur / blur.
 */
export function SoftBlurBand({
  children,
  className,
  imageSrc = FOUNDER_PHOTO,
  contentClassName,
}: SoftBlurBandProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32",
        className,
      )}
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover scale-125 blur-3xl opacity-70 saturate-150"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 10% 40%, rgba(255, 31, 113, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse 55% 45% at 90% 20%, rgba(124, 58, 237, 0.16) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 50% 100%, rgba(212, 255, 0, 0.12) 0%, transparent 45%),
              rgba(255, 255, 255, 0.72)
            `,
          }}
        />
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/40" />
      </div>

      <div className={cn("relative z-10 h-full", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
