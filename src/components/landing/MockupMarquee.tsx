import Image from "next/image";
import { cn } from "@/lib/utils";

export type MockupItem = {
  src: string;
  alt: string;
};

type MockupMarqueeProps = {
  items: readonly MockupItem[];
  className?: string;
};

/**
 * Bande de maquettes en défilement infini (CSS marquee).
 * Respecte prefers-reduced-motion.
 */
export function MockupMarquee({ items, className }: MockupMarqueeProps) {
  if (items.length === 0) return null;
  const loop = [...items, ...items];

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
      aria-hidden
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none gap-4 sm:gap-5 md:gap-6 py-2">
        {loop.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="relative shrink-0 w-[260px] sm:w-[340px] md:w-[420px] aspect-[16/10] rounded-[var(--rounded-large)] overflow-hidden bg-white shadow-[0_12px_40px_rgba(17,17,17,0.08)] ring-1 ring-ink/8"
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, 420px"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
