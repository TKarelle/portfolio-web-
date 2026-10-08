import Image from "next/image";
import { featuredCaseStudies } from "@/data/caseStudies";
import { MediaCard } from "@/components/ui/MediaCard";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SectionCta } from "@/components/ui/SectionCta";
import { CTA } from "@/data/copy";

/**
 * Études de cas — éditorial premium (lisible, sans cards lourdes).
 */
export function CaseStudies() {
  return (
    <section
      className="relative z-10 py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-10 bg-bg"
      id="projets"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="reveal mb-14 sm:mb-16 md:mb-20 max-w-3xl">
          <SectionHead
            align="left"
            size="xl"
            eyebrow="Études de cas"
            className="!max-w-none"
          >
            Ce que ça change,
            <br />
            <TitleEm>concrètement</TitleEm>
          </SectionHead>
        </div>

        <ul className="space-y-16 sm:space-y-20 md:space-y-24">
          {featuredCaseStudies.map((study, i) => (
            <li key={study.id} className="reveal">
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
                <div
                  className={`lg:col-span-5 min-w-0 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <MediaCard
                    src={study.capture}
                    alt={`Site livré pour ${study.firstName}, ${study.metier} à ${study.city}`}
                    aspect="16/10"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>

                <div
                  className={`lg:col-span-7 flex flex-col gap-7 min-w-0 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
                      <Image
                        src={study.photo}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-extrabold text-ink leading-tight tracking-tight">
                        {study.firstName}
                      </p>
                      <p className="text-sm font-medium text-muted mt-0.5">
                        {study.metier} · {study.city}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/40 mb-2">
                        Avant
                      </p>
                      <p className="text-base sm:text-[1.05rem] font-medium text-ink/80 leading-relaxed">
                        {study.before}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/40 mb-2">
                        Résultat
                      </p>
                      <p className="text-base sm:text-[1.05rem] font-extrabold text-ink leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-lg sm:text-xl font-medium text-ink leading-snug tracking-tight border-l-2 border-ink/15 pl-5">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="reveal">
          <SectionCta href="#contact">{CTA.practice}</SectionCta>
        </div>
      </div>
    </section>
  );
}
