import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextFirstCardProps = {
  /** Surligne / label (ex. Découverte) */
  label?: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  /** Ratio CSS du média (défaut plus bas que MediaCard — texte prioritaire) */
  aspect?: string;
  /** Action optionnelle */
  action?: ReactNode;
};

/**
 * Card texte-first — même DA que MediaCard (pas de fond, pas de contour) :
 * label + titre + corps, puis média arrondi secondaire.
 * Hauteur pleine + image en bas : 2 ou 3 lignes de description ne déplacent pas le média.
 */
export function TextFirstCard({
  label,
  title,
  text,
  image,
  imageAlt = "",
  className,
  aspect = "16/9",
  action,
}: TextFirstCardProps) {
  return (
    <article className={cn("relative flex h-full flex-col min-w-0", className)}>
      <div className="min-w-0 flex-1">
        {label ? (
          <p className="text-[0.95rem] sm:text-base font-semibold text-ink/55 mb-2">
            {label}
          </p>
        ) : null}
        <h3 className="text-[1.25rem] sm:text-[1.4rem] md:text-[1.55rem] font-extrabold text-ink tracking-tight leading-[1.2] text-balance min-h-[2.4em] sm:min-h-[2.4em]">
          {title}
        </h3>
        {/* Réserve ~3 lignes si image : la longueur du corps ne décale pas le média */}
        <p
          className={cn(
            "mt-3 text-[0.95rem] sm:text-base md:text-[1.05rem] font-medium text-muted leading-relaxed",
            image && "min-h-[4.875em]",
          )}
        >
          {text}
        </p>
      </div>

      {image ? (
        <div
          className="relative mt-5 w-full shrink-0 overflow-hidden rounded-[var(--rounded-large)] bg-ink/5"
          style={{ aspectRatio: aspect }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 45vw"
          />
        </div>
      ) : null}

      {action ? (
        <div className="absolute bottom-3 right-3 z-20">{action}</div>
      ) : null}
    </article>
  );
}
