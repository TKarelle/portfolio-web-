import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { CTA } from "@/data/copy";
import { ROI_DISCLAIMER, roiProof } from "@/data/pricing";

export function RoiProof() {
  return (
    <section
      className="scroll-mt-28 py-16 md:py-20 px-6 bg-chunk-violet"
      id="demonstration"
    >
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <p className="text-sm font-bold text-violet mb-3 tracking-wide">
            La démonstration
          </p>
          <SectionHead stroke="violet" highlight="bénéfice">
            {roiProof.headline}
          </SectionHead>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-6">
          {roiProof.columns.map((col) => (
            <div
              key={col.label}
              className="rounded-[1.25rem] border-2 border-ink bg-surface p-6 text-center shadow-[4px_4px_0_#111]"
            >
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
                {col.value}
              </p>
              <p className="mt-2 text-sm font-extrabold text-ink leading-snug">
                {col.label}
              </p>
              <p className="mt-1 text-xs font-medium text-muted">{col.note}</p>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-sm sm:text-base font-bold text-ink mb-3">
          vs{" "}
          <span className="mark mark-lime">{roiProof.costValue}</span>{" "}
          {roiProof.costLabel}
        </p>

        <p
          id="estimation-rentabilite"
          className="reveal mx-auto mb-8 md:mb-10 max-w-2xl text-center text-[10px] sm:text-[11px] font-medium text-muted/80 leading-relaxed"
        >
          {ROI_DISCLAIMER}
        </p>

        <div className="reveal flex justify-center">
          <Button href="#modeles" size="lg">
            {CTA.conditions}
          </Button>
        </div>
      </div>
    </section>
  );
}
