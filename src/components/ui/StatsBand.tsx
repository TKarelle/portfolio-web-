import type { ReactNode } from "react";

type StatItem = {
  n: string;
  l: string;
};

const bandStyle = {
  background:
    "linear-gradient(90deg, var(--pink) 0%, var(--violet) 50%, var(--lime) 100%)",
} as const;

function GradientBand() {
  return <div className="h-1 w-full" style={bandStyle} aria-hidden="true" />;
}

type StatsBandProps = {
  items: readonly StatItem[];
  /** Optional label above the stats grid */
  eyebrow?: string;
  /** Optional content below the stats (e.g. marquee) */
  footer?: ReactNode;
  "aria-label"?: string;
  className?: string;
};

export function StatsBand({
  items,
  eyebrow,
  footer,
  "aria-label": ariaLabel,
  className,
}: StatsBandProps) {
  return (
    <section
      className={`relative bg-surface ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      <GradientBand />

      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 md:py-8">
        {eyebrow ? (
          <p className="text-center text-sm text-muted font-medium mb-6">
            {eyebrow}
          </p>
        ) : null}

        <ul className="grid grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.l}
              className={`text-center px-2 sm:px-4 ${
                i > 0 ? "border-l border-ink/8" : ""
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-ink tabular-nums">
                {item.n}
              </p>
              <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-muted leading-snug font-medium">
                {item.l}
              </p>
            </li>
          ))}
        </ul>

        {footer ? (
          <div className="mt-6 pt-5 border-t border-ink/8">{footer}</div>
        ) : null}
      </div>

      <GradientBand />
    </section>
  );
}
