import Image from "next/image";
import {
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
  FOUNDER_ROLE,
  FOUNDER_TAGLINE,
} from "@/data/site";

/** Byline fondatrice — signature unique (site.ts). */
export function BlogAuthor() {
  return (
    <div className="mt-8 flex items-center gap-4">
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
        <Image
          src={FOUNDER_PHOTO}
          alt={FOUNDER_PHOTO_ALT}
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>
      <div>
        <p className="text-sm sm:text-base font-extrabold text-ink leading-tight">
          {FOUNDER_NAME}{" "}
          <span className="font-medium text-muted">| {FOUNDER_ROLE}</span>
        </p>
        <p className="mt-0.5 text-xs sm:text-sm text-muted font-medium leading-snug">
          {FOUNDER_TAGLINE}
        </p>
      </div>
    </div>
  );
}
