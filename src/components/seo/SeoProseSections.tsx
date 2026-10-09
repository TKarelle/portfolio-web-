type SeoSection = {
  h2: string;
  body: string;
};

/** Sections H2 en prose éditoriale, centrées (charte métier). */
export function SeoProseSections({
  sections,
  className = "py-14 md:py-20 page-x bg-bg",
}: {
  sections: SeoSection[];
  className?: string;
}) {
  return (
    <>
      {sections.map((section, i) => (
        <section
          key={section.h2}
          className={`${className} ${i % 2 === 1 ? "bg-surface" : ""}`}
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
                {para}
              </p>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
