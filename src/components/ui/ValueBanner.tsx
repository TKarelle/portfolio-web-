import { StatsBand } from "@/components/ui/StatsBand";

const values = [
  { n: "France", l: "Sites livrés partout" },
  { n: "7–14 j", l: "Livraison selon le forfait" },
  { n: "1×", l: "Paiement en une seule fois" },
] as const;

export function ValueBanner() {
  return <StatsBand items={values} aria-label="Points forts" />;
}
