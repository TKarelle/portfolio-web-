import Image from "next/image";
import { featuredCaseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";

export function CaseStudies() {
  return (
    <section className="pt-6 md:pt-8 pb-14 md:pb-20 px-6 bg-bg" id="projets">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-10 md:mb-12 text-center">
          <SectionHead stroke="pink" highlight="3 résultats">
            {"3 projets, 3 résultats"}
          </SectionHead>
        </div>

        <div className="space-y-6">
          {featuredCaseStudies.map((study, i) => (
            <article
              key={study.id}
              className="reveal card card-hover overflow-hidden bg-surface"
              style={{ animationDelay: `${i * 0.38}s` }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-5 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:col-span-2 lg:[direction:ltr] relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] photo-frame overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    loading="lazy"
                    className="object-cover object-top"
                    sizes="40vw"
                    quality={75}
                  />
                  <span className="absolute top-4 left-4 bg-ink text-surface text-xs font-bold px-3 py-1 rounded-full z-10">
                    {study.category}
                  </span>
                </div>

                <div className="lg:col-span-3 lg:[direction:ltr] p-7 md:p-9">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight leading-tight">
                    {study.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-5">
                    <div className="rounded-2xl p-4 border border-ink/12 bg-bg/60">
                      <p className="font-bold text-muted text-xs uppercase tracking-wide mb-1">
                        Avant
                      </p>
                      <p className="text-ink/80 font-medium">{study.problem}</p>
                    </div>
                    <div className="rounded-2xl p-4 border border-ink/12 bg-bg/60">
                      <p className="font-bold text-muted text-xs uppercase tracking-wide mb-1">
                        Ce qu&apos;on a fait
                      </p>
                      <p className="text-ink/80 font-medium">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-extrabold text-lg bg-ink text-lime inline-block px-4 py-2 rounded-full">
                      → {study.result}
                    </p>
                    {study.url && (
                      <Button href={study.url} variant="outline" size="sm">
                        Voir le site →
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
