import Image from "next/image";
import {
  FOUNDER_LINKEDIN,
  FOUNDER_NAME,
  FOUNDER_PHOTO,
  FOUNDER_PHOTO_ALT,
  FOUNDER_ROLE,
  FOUNDER_TAGLINE,
} from "@/data/site";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";

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
        <p className="text-sm sm:text-base font-extrabold text-ink leading-tight flex items-center gap-2 flex-wrap">
          <span>
            {FOUNDER_NAME}{" "}
            <span className="font-medium text-muted">| {FOUNDER_ROLE}</span>
          </span>
          <a
            href={FOUNDER_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-[#0A66C2] hover:opacity-80 transition-opacity"
            aria-label={`${FOUNDER_NAME} sur LinkedIn`}
          >
            <LinkedInIcon className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem]" />
          </a>
        </p>
        <p className="mt-0.5 text-xs sm:text-sm text-muted font-medium leading-snug">
          {FOUNDER_TAGLINE}
        </p>
      </div>
    </div>
  );
}
