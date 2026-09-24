import { cn } from "@/lib/utils";

export const DELIVERY_DISCLAIMER =
  "Délais indicatifs selon le forfait. Ils peuvent bouger si les contenus arrivent en retard ou s’il y a beaucoup de retours — on le dit clairement avant de démarrer.";

export function DeliveryDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted font-medium leading-relaxed", className)}>
      {DELIVERY_DISCLAIMER}
    </p>
  );
}
