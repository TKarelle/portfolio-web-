import { cn } from "@/lib/utils";

type SoftNavButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  className?: string;
};

/** Bouton carrousel soft (inclus, témoignages). */
export function SoftNavButton({
  direction,
  onClick,
  label,
  className,
}: SoftNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink/8 text-ink hover:bg-ink/15 transition-colors touch-manipulation",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
        {direction === "prev" ? (
          <path
            d="M14.5 6 8.5 12l6 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9.5 6 15.5 12l-6 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
