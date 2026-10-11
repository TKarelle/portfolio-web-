import { InlineProse } from "@/components/seo/InlineProse";

type SeoSection = {
  h2: string;
  body: string;
};

/** Sections H2 en prose éditoriale, centrées (charte métier). */
export function SeoProseSections({
  sections,
  /** Première section : bg-bg ou bg-surface, puis alternance */
  startTone = "bg",
}: {
  sections: SeoSection[];
  startTone?: "bg" | "surface";
}) {
  return (
    <>
      {sections.map((section, i) => {
        const even = i % 2 === 0;
        const tone =
          startTone === "bg"
            ? even
              ? "bg-bg"
              : "bg-surface"
            : even
              ? "bg-surface"
              : "bg-bg";
        return (
        <section
          key={section.h2}
          className={`py-14 md:py-20 page-x ${tone}`}
        >
          <div className="w-full max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/30 mb-3">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="text-[clamp(1.5rem,3.2vw,2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-6 text-ink text-balance">
              {section.h2}
            </h2>
            {section.body.split("\n\n").map((para, pi) => (
              <p
                key={para.slice(0, 48)}
                className={`text-muted font-medium leading-[1.75] mb-5 last:mb-0 mx-auto max-w-2xl ${
                  pi === 0
                    ? "text-base md:text-[1.05rem] text-ink/75"
                    : "text-[0.95rem] md:text-base"
                }`}
              >
                <InlineProse text={para} />
              </p>
            ))}
          </div>
        </section>
        );
      })}
    </>
  );
}
