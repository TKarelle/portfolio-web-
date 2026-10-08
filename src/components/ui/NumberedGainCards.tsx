import { MOTION } from "@/lib/motion";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export type NumberedGainItem = {
  n: string;
  t: string;
  d: string;
};

/** Cartes numérotées — même shell SurfaceCard que tarifs / garanties. */
export function NumberedGainCards({
  items,
  ariaLabel = "Points clés",
}: {
  items: readonly NumberedGainItem[];
  ariaLabel?: string;
}) {
  return (
    <ol
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
      aria-label={ariaLabel}
    >
      {items.map((g, i) => (
        <li
          key={g.n}
          className="bubble-stagger"
          style={{ animationDelay: `${i * MOTION.stagger}s` }}
        >
          <SurfaceCard as="article" className="h-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/40">
                {g.n}
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-ink leading-snug tracking-tight">
                {g.t}
              </span>
            </div>
            <p className="text-sm sm:text-[0.95rem] text-muted font-medium leading-relaxed">
              {g.d}
            </p>
          </SurfaceCard>
        </li>
      ))}
    </ol>
  );
}
