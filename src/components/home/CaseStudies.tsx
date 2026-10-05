import Image from "next/image";
import { featuredCaseStudies } from "@/data/caseStudies";
import { SectionHead } from "@/components/ui/SectionHead";

export function CaseStudies() {
  return (
    <section className="pt-6 md:pt-8 pb-14 md:pb-20 px-6 bg-bg" id="projets">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-10 md:mb-12 text-center md:text-left max-w-2xl md:mx-0 mx-auto">
          <p className="text-sm font-bold text-pink mb-3 tracking-wide">
            Études de cas
          </p>
          <SectionHead align="left" stroke="pink" highlight="concrètement">
            {"Ce que ça change, concrètement"}
          </SectionHead>
        </div>

        <div className="space-y-8 md:space-y-10">
          {featuredCaseStudies.map((study, i) => (
            <article
              key={study.id}
              className="reveal rounded-[1.5rem] border-2 border-ink bg-surface overflow-hidden shadow-[4px_4px_0_#111]"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-5 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:col-span-2 lg:[direction:ltr] relative aspect-[16/10] lg:aspect-auto lg:min-h-[300px] border-b-2 lg:border-b-0 lg:border-r-2 border-ink overflow-hidden bg-ink/5">
                  <Image
                    src={study.capture}
                    alt={`Capture du site livré pour ${study.firstName}, ${study.metier} à ${study.city}`}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={75}
                  />
                  <span className="absolute top-4 left-4 bg-ink text-lime text-xs font-bold px-3 py-1 rounded-full z-10">
                    Livrable
                  </span>
                </div>

                <div className="lg:col-span-3 lg:[direction:ltr] p-6 sm:p-8 md:p-9 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 shrink-0 photo-frame photo-frame-lime overflow-hidden">
                      <Image
                        src={study.photo}
                        alt={`Portrait de ${study.firstName}, ${study.metier} à ${study.city}`}
                        fill
                        className="object-cover rounded-[0.75rem]"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-ink leading-tight">
                        {study.firstName}
                      </p>
                      <p className="text-sm font-medium text-muted">
                        {study.metier}, {study.city}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl p-4 border border-ink/12 bg-bg/70">
                      <p className="font-bold text-muted text-xs uppercase tracking-wide mb-1.5">
                        Avant
                      </p>
                      <p className="text-ink/85 font-medium leading-snug">
                        {study.before}
                      </p>
                    </div>
                    <div className="rounded-2xl p-4 border border-ink/12 bg-bg/70">
                      <p className="font-bold text-muted text-xs uppercase tracking-wide mb-1.5">
                        Résultat
                      </p>
                      <p className="text-ink font-extrabold leading-snug">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-base md:text-lg font-medium text-ink leading-relaxed border-l-4 border-lime pl-4">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
