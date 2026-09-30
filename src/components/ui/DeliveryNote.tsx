import { cn } from "@/lib/utils";

export const DELIVERY_DISCLAIMER =
  "Délai indicatif : 21 jours. Il peut bouger si les contenus arrivent en retard ou s’il y a beaucoup de retours.";

export function DeliveryDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted font-medium leading-relaxed", className)}>
      {DELIVERY_DISCLAIMER}
    </p>
  );
}
