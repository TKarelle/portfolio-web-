import { StatsBand } from "@/components/ui/StatsBand";

const clients = [
  "PULSE",
  "Sophie Bluel",
  "Madeleine Fragrance",
];

const stats = [
  { n: "30+", l: "sites livrés pour des indépendants" },
  { n: "5★", l: "retours clients sur les projets livrés" },
  { n: "7–14 j", l: "délai habituel selon le forfait" },
] as const;

function ClientMarquee() {
  const row = clients.map((name, i) => (
    <span key={`${name}-${i}`} className="flex items-center gap-5 shrink-0">
      <span className="text-sm font-medium text-ink/55">{name}</span>
      <span className="text-pink/40 select-none" aria-hidden="true">
        ·
      </span>
    </span>
  ));

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-5 whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-5 shrink-0">
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <StatsBand
      items={stats}
      eyebrow="Ils m'ont fait confiance"
      footer={
        <>
          <ClientMarquee />
          <span className="sr-only">{clients.join(" · ")}</span>
        </>
      }
    />
  );
}
