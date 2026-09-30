import { StatsBand } from "@/components/ui/StatsBand";

const values = [
  { n: "France", l: "Sites livrés partout" },
  { n: "21 j", l: "Livraison typique" },
  { n: "24–72 h", l: "Mises à jour par email" },
] as const;

export function ValueBanner() {
  return <StatsBand items={values} aria-label="Points forts" />;
}
