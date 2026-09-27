type SeoSection = {
  h2: string;
  body: string;
};

/** Sections H2 en prose (charte éditoriale : paragraphes 4 temps, pas des puces seules). */
export function SeoProseSections({
  sections,
  className = "py-12 md:py-14 px-6 bg-bg",
}: {
  sections: SeoSection[];
  className?: string;
}) {
  return (
    <>
      {sections.map((section, i) => (
        <section
          key={section.h2}
          className={`${className} ${i % 2 === 1 ? "bg-chunk-lime/30" : ""}`}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-5">
              {section.h2}
            </h2>
            {section.body.split("\n\n").map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-muted font-medium leading-relaxed mb-4 last:mb-0"
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
