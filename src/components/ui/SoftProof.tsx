import { GoogleReviewBadge } from "@/components/ui/GoogleReviewBadge";
import { cn } from "@/lib/utils";

/** Preuve hero — badge Google + volume de projets, discret. */
export function SoftProof({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm font-medium text-ink/50",
        className,
      )}
    >
      <GoogleReviewBadge variant="soft" />
      <span className="text-ink/20" aria-hidden>
        ·
      </span>
      <span>+20 projets livrés</span>
    </div>
  );
}
