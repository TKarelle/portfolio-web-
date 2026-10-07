import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";
import { process } from "@/data/services";
import { MOTION } from "@/lib/motion";
import { CTA } from "@/data/copy";

const styles = [
  "card p-6 !bg-ink text-white border-ink h-full",
  "card p-6 !bg-surface text-ink border-ink h-full",
  "card p-6 !bg-ink text-white border-ink h-full",
  "card p-6 !bg-surface text-ink border-ink h-full",
];

const textStyles = [
  "text-white/80",
  "text-muted",
  "text-white/80",
  "text-muted",
];

const waveClass = [
  "float-wave",
  "float-wave-alt",
  "float-wave-slow",
  "float-wave",
] as const;

/** Processus 4 étapes — Server Component (Sem.2). */
export function ProcessSimple() {
  return (
    <section className="py-20 md:py-28 px-6 bg-chunk-lime" id="processus">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-12 max-w-2xl">
          <p className="text-sm font-bold text-violet mb-3 tracking-wide">
            4 étapes simples
          </p>
          <SectionHead align="left" stroke="lime" highlight="ça marche">
            {"Comment ça marche"}
          </SectionHead>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 items-stretch">
          {process.map((s, i) => (
            <div
              key={s.step}
              className="h-full bubble-stagger"
              style={{ animationDelay: `${i * MOTION.stagger}s` }}
            >
              <div
                className={`h-full ${waveClass[i % waveClass.length]}`}
                style={{
                  animationDelay: `${i * MOTION.stagger + MOTION.duration * 0.85}s`,
                }}
              >
                <div className={`${styles[i]} flex flex-col`}>
                  <p className="text-3xl font-extrabold opacity-40 mb-3">
                    {s.step}
                  </p>
                  <h3 className="font-extrabold text-lg mb-3">{s.title}</h3>
                  <p
                    className={`text-sm font-medium leading-relaxed flex-1 ${textStyles[i]}`}
                  >
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <Button href="#contact" size="lg">
            {CTA.primary}
          </Button>
        </div>
      </div>
    </section>
  );
}
