import { StatsBand } from "@/components/ui/StatsBand";

const values = [
  { n: "France", l: "Sites pour coachs" },
  { n: "48h", l: "Délai à partir de" },
  { n: "0 €", l: "Site vitrine offert" },
] as const;

export function ValueBanner() {
  return <StatsBand items={values} aria-label="Points forts" />;
}
