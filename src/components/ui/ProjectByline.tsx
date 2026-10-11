import Image from "next/image";
import { BRAND_NAME, FOUNDER_PHOTO } from "@/data/site";
import { cn } from "@/lib/utils";

type ProjectBylineProps = {
  /** Nom du projet / cliente (ex. Sophie Delmas) */
  name: string;
  className?: string;
};

/**
 * Crédit projet — « Sophie Delmas by [avatar] Kopio PRO »
 * (même DA que le carrousel « Pensé pour être beau »).
 */
export function ProjectByline({ name, className }: ProjectBylineProps) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.95rem] sm:text-base leading-none text-left",
        className,
      )}
    >
      <span className="font-extrabold text-ink tracking-tight">{name}</span>
      <span className="font-medium text-muted">by</span>
      <span className="inline-flex items-center gap-1.5">
        <Image
          src={FOUNDER_PHOTO}
          alt=""
          width={22}
          height={22}
          className="w-[22px] h-[22px] rounded-full object-cover shrink-0"
        />
        <span className="font-extrabold text-ink underline underline-offset-2 decoration-ink/80">
          {BRAND_NAME}
        </span>
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted/70">
        PRO
      </span>
    </p>
  );
}
