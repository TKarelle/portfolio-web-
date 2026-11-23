import { cn } from "@/lib/utils";

export const DELIVERY_DISCLAIMER = "Délai : à partir de 48h.";

export function DeliveryDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted font-medium leading-relaxed", className)}>
      {DELIVERY_DISCLAIMER}
    </p>
  );
}
