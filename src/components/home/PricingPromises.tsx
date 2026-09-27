import { guarantees, includedInAll } from "@/data/pricing";
import { SectionHead } from "@/components/ui/SectionHead";

/** Inclus dans toutes les formules : avant les tarifs */
export function PricingIncluded() {
  return (
    <div className="mb-12 md:mb-16">
      <div className="text-center mb-8 md:mb-10">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-pink mb-3">
          Dans toutes les formules
        </p>
        <SectionHead stroke="lime" highlight="partout">
          {"Ce qui est inclus partout"}
        </SectionHead>
        <p className="mt-3 text-sm md:text-base font-medium text-muted max-w-xl mx-auto">
          Pas d’option cachée : ces points font partie de chaque forfait.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {includedInAll.map((item) => (
          <li
            key={item.title}
            className="rounded-[1.25rem] border-2 border-ink bg-surface p-5 md:p-6 shadow-[3px_3px_0_#111]"
          >
            <p className="text-base md:text-lg font-extrabold text-ink leading-snug">
              {item.title}
            </p>
            <p className="mt-2 text-sm font-medium text-muted leading-relaxed">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Garanties : après les tarifs */
export function PricingGuarantees() {
  return (
    <div className="mt-14 md:mt-16 rounded-[1.75rem] md:rounded-blob border-[3px] border-ink bg-ink text-white p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_#d4ff00]">
      <div className="text-center mb-8 md:mb-10">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-lime mb-3">
          Les garanties
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
          Ce qui te <span className="mark mark-lime text-white">rassure</span>{" "}
          avant de signer
        </h3>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {guarantees.map((g) => (
          <li
            key={g.title}
            className="rounded-[1.25rem] border-2 border-white/20 bg-white/5 p-5 md:p-6"
          >
            <p className="text-base md:text-lg font-extrabold text-lime leading-snug">
              {g.title}
            </p>
            <p className="mt-2 text-sm font-medium text-white/70 leading-relaxed">
              {g.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
