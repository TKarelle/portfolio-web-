"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { AutoPlayVideo } from "@/components/ui/AutoPlayVideo";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  src: string;
  alt: string;
  /** Vidéo optionnelle (src = poster) */
  video?: string;
  /** Ratio CSS, ex. "16/10" ou "590/442" */
  aspect?: string;
  /** Légende sous l’image (titre + texte, byline, etc.) */
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

/**
 * Card média réutilisable : image/vidéo arrondie sans trait + slot sous le média.
 * Même langage que le carrousel “inclus” et la section “beau / utile”.
 */
export function MediaCard({
  src,
  alt,
  video,
  aspect = "16/10",
  children,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 90vw, 50vw",
}: MediaCardProps) {
  return (
    <article className={cn("flex flex-col min-w-0", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[var(--rounded-large)] bg-ink/5",
          imageClassName,
        )}
        style={{ aspectRatio: aspect }}
      >
        {video ? (
          <AutoPlayVideo
            src={video}
            poster={src}
            title={alt}
            aria-label={alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        )}
      </div>
      {children ? <div className="mt-4 min-w-0">{children}</div> : null}
    </article>
  );
}

/** Légende titre gras + corps (carrousel inclus). */
export function MediaCardCaption({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const labeled = /[.?!:]$/.test(title) ? title : `${title}.`;
  return (
    <p className="text-[0.95rem] sm:text-base md:text-[1.05rem] font-medium text-muted leading-relaxed text-left">
      <strong className="font-extrabold text-ink">{labeled}</strong> {text}
    </p>
  );
}
