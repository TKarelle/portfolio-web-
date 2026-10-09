import Image from "next/image";
import { FOUNDER_NAME, FOUNDER_PHOTO, FOUNDER_PHOTO_ALT } from "@/data/site";

/** Byline fondatrice — même DA soft que QuoteBand / Testimonials (home). */
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
          {FOUNDER_NAME}
        </p>
        <p className="mt-0.5 text-xs sm:text-sm text-muted font-medium leading-snug">
          Développeuse web · présence en ligne pour entrepreneuses
        </p>
      </div>
    </div>
  );
}
