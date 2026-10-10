import Image from "next/image";
import type { ReactNode } from "react";
import {
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
} from "@/data/site";
import { cn } from "@/lib/utils";

type MotDeKarelleProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Citation éditoriale Karelle — photo + voix, sans carte ni byline marque.
 */
export function MotDeKarelle({ children, className }: MotDeKarelleProps) {
  return (
    <aside
      className={cn(
        "my-10 sm:my-12 text-left max-w-2xl mx-auto",
        className,
      )}
      aria-label={`Mot de ${FOUNDER_NAME}`}
    >
      <div className="flex gap-4 sm:gap-5 items-start">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
          <Image
            src={FOUNDER_PHOTO}
            alt={FOUNDER_PHOTO_ALT}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-ink/35">
            Mot de {FOUNDER_NAME}
          </p>
          <p className="mt-2.5 sm:mt-3 text-base sm:text-lg font-medium text-ink leading-relaxed tracking-tight">
            {children}
          </p>
        </div>
      </div>
    </aside>
  );
}

/** Détecte un callout « Mot de Karelle : … » et renvoie le corps sans le préfixe. */
export function parseMotDeKarelle(callout: string): string | null {
  const m = callout.match(/^Mot de Karelle\s*:\s*([\s\S]+)$/i);
  if (!m) return null;
  return m[1].trim();
}
