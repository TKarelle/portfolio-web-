"use client";

import { FormEvent, useMemo, useState, useSyncExternalStore } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { SurfaceCard, surfaceCardClassName } from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/utils";
import {
  CONTROL_POINTS,
  DEFAULT_FIGURES,
  QUIZ_META,
  computeQuizResult,
  formatEuro,
  type EngineVerdict,
  type QuizAnswerLevel,
  type QuizFigures,
} from "@/data/etancheite-quiz";
import { CTA } from "@/data/copy";

const STORAGE_KEY = "kopio-etancheite-gate";

export type GateState = { name: string; email: string };

function readGate(): GateState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GateState;
    if (parsed?.name && parsed?.email) return parsed;
  } catch {
    /* ignore */
  }
  return null;
}

function subscribeGate(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

async function submitLead(
  name: string,
  email: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return {
      ok: false,
      message: "Configuration email manquante. Réessayez plus tard.",
    };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", `[Kopio] Lead test : ${name}`);
  formData.append("from_name", "Kopio Audit");
  formData.append("name", name);
  formData.append("email", email);
  formData.append(
    "message",
    `Nouveau lead audit Kopio\n\nNom : ${name}\nEmail : ${email}\nDate : ${new Date().toISOString()}`,
  );
  formData.append("botcheck", "");

  const w3 = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const w3Data = (await w3.json()) as {
    success?: boolean;
    message?: string;
  };
  if (!w3.ok || !w3Data.success) {
    return {
      ok: false,
      message: w3Data.message ?? "Envoi impossible. Réessayez.",
    };
  }

  void fetch("/api/quiz-leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  }).catch(() => {});

  return { ok: true };
}

const fieldClass =
  "w-full min-h-12 rounded-[var(--rounded-large)] border border-ink/10 bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20";

/** Prénom + email + CTA lime, intégré au hero. */
export function HeroEmailGate({
  onUnlocked,
}: {
  onUnlocked: (g: GateState) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedName.length < 2) {
      setError("Indique ton prénom.");
      return;
    }
    if (!trimmedEmail.includes("@") || trimmedEmail.length < 5) {
      setError("Indique un email valide.");
      return;
    }

    setLoading(true);
    try {
      const result = await submitLead(trimmedName, trimmedEmail);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      const gate = { name: trimmedName, email: trimmedEmail };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(gate));
      onUnlocked(gate);
      requestAnimationFrame(() => {
        document.getElementById("quiz")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } catch {
      setError("Réseau indisponible. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="audit-form" className="w-full max-w-xl">
      <form
        onSubmit={onSubmit}
        className={cn(surfaceCardClassName, "flex flex-col gap-2 p-2 sm:p-2.5")}
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="audit-name" className="sr-only">
            Prénom
          </label>
          <input
            id="audit-name"
            name="name"
            type="text"
            autoComplete="given-name"
            required
            minLength={2}
            placeholder="Prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn(fieldClass, "sm:w-[38%]")}
          />
          <label htmlFor="audit-email" className="sr-only">
            Email
          </label>
          <input
            id="audit-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="vous@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(fieldClass, "flex-1")}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 min-h-12 w-full rounded-[var(--rounded-large)] bg-lime text-ink text-sm sm:text-base font-bold px-5 shadow-[0_4px_0_0_#a8c400] hover:bg-lime-soft hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#a8c400] transition-all touch-manipulation disabled:opacity-60"
        >
          {loading ? "…" : QUIZ_META.ctaLabel}
        </button>
      </form>
      {error ? (
        <p className="mt-2 text-sm font-bold text-pink" role="alert">
          {error}
        </p>
      ) : null}
      <p className="mt-3 text-xs sm:text-sm font-medium text-ink/50">
        {QUIZ_META.trustLine}
      </p>
    </div>
  );
}

/** Aperçu résultat (décoratif). */
export function AuditResultPreview() {
  return (
    <aside
      className={cn(surfaceCardClassName, "p-5 sm:p-6 md:p-7")}
      aria-hidden
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-xs font-medium text-muted truncate">
          ta-pratique.fr
        </span>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink/35 shrink-0">
          Exemple de résultat
        </span>
      </div>

      <p className="text-xl sm:text-2xl font-extrabold leading-tight text-ink tracking-tight">
        Google et ChatGPT te montrent encore mal.
      </p>
      <p className="mt-2 text-3xl font-extrabold text-ink tracking-tight">
        52&nbsp;%{" "}
        <span className="text-base font-bold text-muted">de score</span>
      </p>

      <div className="mt-5 h-2.5 rounded-full overflow-hidden flex bg-ink/8">
        <span className="w-[28%] bg-pink/80" />
        <span className="w-[24%] bg-violet/70 relative">
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-lime ring-2 ring-white" />
        </span>
        <span className="w-[26%] bg-ink/15" />
        <span className="w-[22%] bg-lime/60" />
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-extrabold uppercase tracking-wider text-ink/35">
        <span>Critique</span>
        <span>Élevée</span>
        <span>Modérée</span>
        <span>Faible</span>
      </div>

      <ul className="mt-5 space-y-2.5 text-sm font-medium text-ink">
        <li className="flex gap-2.5 items-start">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink shrink-0" />
          Google : site peu visible sous ton nom
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
          ChatGPT : pas de citation claire
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
          Site : message encore lisible
        </li>
      </ul>
    </aside>
  );
}

function OptionButton({
  selected,
  label,
  onSelect,
}: {
  selected: boolean;
  label: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "w-full text-left rounded-[var(--rounded-large)] border px-4 py-3 text-sm sm:text-[0.95rem] font-semibold leading-snug transition-all touch-manipulation",
        selected
          ? "border-ink/15 bg-lime text-ink shadow-[0_8px_24px_rgba(17,17,17,0.06)]"
          : "border-ink/10 bg-bg hover:border-ink/20 hover:bg-white text-ink",
      )}
    >
      {label}
    </button>
  );
}

function FiguresStep({
  figures,
  onChange,
}: {
  figures: QuizFigures;
  onChange: (f: QuizFigures) => void;
}) {
  return (
    <SurfaceCard as="section">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-2">
        Étape 1 · tes trois chiffres
      </p>
      <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight tracking-tight">
        Des estimations suffisent
      </h3>
      <p className="mt-2 text-sm font-medium text-muted leading-relaxed">
        Elles servent à estimer ce que ça peut coûter si Google, ChatGPT ou ton
        site ne te représentent plus.
      </p>

      <div className="mt-6 grid gap-5">
        <label className="block">
          <span className="block text-sm font-extrabold text-ink mb-1.5">
            Combien de personnes te contactent chaque mois suite à une visite de
            ton site ou une recommandation&nbsp;?
          </span>
          <span className="block text-xs font-medium text-muted mb-2">
            Messages, appels, demandes de rendez-vous.
          </span>
          <input
            type="number"
            min={0}
            step={1}
            value={figures.contactsPerMonth}
            onChange={(e) =>
              onChange({
                ...figures,
                contactsPerMonth: Number(e.target.value) || 0,
              })
            }
            className={cn(fieldClass, "max-w-[12rem] font-bold")}
          />
        </label>

        <label className="block">
          <span className="block text-sm font-extrabold text-ink mb-1.5">
            Sur 10 de ces personnes, combien deviennent clientes&nbsp;?
          </span>
          <span className="block text-xs font-medium text-muted mb-2">
            Modifiez la valeur proposée si besoin.
          </span>
          <input
            type="number"
            min={0}
            max={10}
            step={0.5}
            value={figures.clientsOutOf10}
            onChange={(e) =>
              onChange({
                ...figures,
                clientsOutOf10: Number(e.target.value) || 0,
              })
            }
            className={cn(fieldClass, "max-w-[12rem] font-bold")}
          />
        </label>

        <label className="block">
          <span className="block text-sm font-extrabold text-ink mb-1.5">
            Que vaut en moyenne une nouvelle cliente, sur l&apos;année (en
            €)&nbsp;?
          </span>
          <span className="block text-xs font-medium text-muted mb-2">
            Exemple&nbsp;: 4 séances × 90&nbsp;€ = 360&nbsp;€.
          </span>
          <input
            type="number"
            min={0}
            step={10}
            value={figures.avgClientValueYear}
            onChange={(e) =>
              onChange({
                ...figures,
                avgClientValueYear: Number(e.target.value) || 0,
              })
            }
            className={cn(fieldClass, "max-w-[12rem] font-bold")}
          />
        </label>
      </div>
    </SurfaceCard>
  );
}

function verdictTone(level: QuizAnswerLevel): string {
  if (level === 2) return "bg-lime/40 border-ink/10";
  if (level === 1) return "bg-violet-bg border-ink/10";
  return "bg-pink-bg border-ink/10";
}

function EngineCard({ verdict }: { verdict: EngineVerdict }) {
  return (
    <div
      className={cn(
        "rounded-[var(--rounded-large)] border p-4 sm:p-5",
        verdictTone(verdict.level),
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/45">
          {verdict.engine}
        </p>
        <p className="text-sm font-extrabold text-ink">{verdict.status}</p>
      </div>
      <p className="text-sm font-medium text-ink leading-relaxed">
        {verdict.summary}
      </p>
    </div>
  );
}

function ResultsPanel({
  result,
  complete,
}: {
  result: ReturnType<typeof computeQuizResult>;
  complete: boolean;
}) {
  if (!complete) {
    return (
      <div
        className={cn(
          surfaceCardClassName,
          "border-dashed p-5 sm:p-6 bg-white/70",
        )}
      >
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/35 mb-2">
          Ton résultat
        </p>
        <p className="text-base font-bold text-ink leading-snug">
          Complète les 10 points pour savoir ce que Google et ChatGPT disent de
          toi. Il te reste {result.remainingAnswers} réponse
          {result.remainingAnswers > 1 ? "s" : ""}.
        </p>
      </div>
    );
  }

  return (
    <SurfaceCard>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/35 mb-2">
        Réponse à la question
      </p>
      <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight tracking-tight">
        {QUIZ_META.headline}
      </h3>
      <p className="mt-3 text-lg sm:text-xl font-extrabold text-ink leading-snug tracking-tight">
        {result.combinedHeadline}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <EngineCard verdict={result.google} />
        <EngineCard verdict={result.chatgpt} />
      </div>

      <div className="mt-8 pt-6 border-t border-ink/10">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/35 mb-2">
          Et ton site dans tout ça
        </p>
        <p className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
          {result.sealingRate}&nbsp;%{" "}
          <span className="text-base sm:text-lg font-bold text-muted">
            de score global
          </span>
        </p>
        <p className="mt-1 text-sm font-semibold text-muted">
          {result.points}&nbsp;/&nbsp;{result.maxPoints} points · perte estimée
          ~{result.leakRate}&nbsp;%
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[var(--rounded-large)] border border-ink/10 bg-pink-bg/50 p-4">
            <dt className="text-[10px] font-extrabold uppercase tracking-wider text-ink/40">
              Contacts perdus / mois
            </dt>
            <dd className="mt-1 text-2xl font-extrabold text-ink">
              ~{result.lostContactsPerMonth}
            </dd>
          </div>
          <div className="rounded-[var(--rounded-large)] border border-ink/10 bg-violet-bg/60 p-4">
            <dt className="text-[10px] font-extrabold uppercase tracking-wider text-ink/40">
              Clientes perdues / mois
            </dt>
            <dd className="mt-1 text-2xl font-extrabold text-ink">
              ~{result.lostClientsPerMonth}
            </dd>
          </div>
          <div className="rounded-[var(--rounded-large)] border border-ink/10 bg-lime/30 p-4">
            <dt className="text-[10px] font-extrabold uppercase tracking-wider text-ink/40">
              Perte estimée / an
            </dt>
            <dd className="mt-1 text-2xl font-extrabold text-ink">
              ~{formatEuro(result.lostEurosPerYear)}
            </dd>
          </div>
        </dl>

        <p className="mt-4 text-sm font-medium text-muted leading-relaxed">
          Charge mentale (hors €)&nbsp;:{" "}
          <span className="font-bold text-ink">{result.hoursLabel}</span>
        </p>
        <p className="mt-3 text-xs font-medium text-muted leading-relaxed">
          {QUIZ_META.disclaimer}
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button href="/tarifs" size="lg">
          {CTA.primary}
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Parler de mon site
        </Button>
      </div>
    </SurfaceCard>
  );
}

function QuizBody({ gate }: { gate: GateState }) {
  const [figures, setFigures] = useState<QuizFigures>(DEFAULT_FIGURES);
  const [answers, setAnswers] = useState<Array<QuizAnswerLevel | null>>(() =>
    Array(CONTROL_POINTS.length).fill(null),
  );

  const result = useMemo(
    () => computeQuizResult(answers, figures),
    [answers, figures],
  );
  const complete = result.remainingAnswers === 0;
  const pointsDisplay = Number.isInteger(result.points)
    ? result.points
    : result.points.toFixed(1);

  const setAnswer = (index: number, level: QuizAnswerLevel) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = level;
      return next;
    });
  };

  return (
    <div className="space-y-8 md:space-y-10">
      <header className="max-w-2xl">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-3">
          Bonjour {gate.name}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-ink leading-tight">
          {QUIZ_META.introTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed">
          {QUIZ_META.introBody}
        </p>
        <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed">
          {QUIZ_META.introClose}
        </p>
      </header>

      <FiguresStep figures={figures} onChange={setFigures} />

      <section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-1">
              Étape 2 · les 10 points de contrôle
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight tracking-tight">
              Google, ChatGPT, puis ton site
            </h3>
            <p className="mt-1 text-sm font-medium text-muted">
              Fais chaque test, puis choisis ce que tu constates. Pas ce que tu
              espérais.
            </p>
          </div>
          <p className="shrink-0 text-sm font-extrabold text-ink tabular-nums rounded-[var(--rounded-large)] bg-lime px-4 py-2.5 shadow-[0_4px_0_0_#a8c400]">
            {pointsDisplay}&nbsp;/&nbsp;{result.maxPoints} points
          </p>
        </div>

        <ol className="space-y-4">
          {CONTROL_POINTS.map((point, index) => {
            const selected = answers[index];
            return (
              <li key={point.id}>
                <SurfaceCard padded className="!py-5 sm:!py-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center min-w-8 h-8 rounded-full bg-ink text-lime text-xs font-extrabold">
                      {point.id}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink/35">
                      {point.tag}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-ink leading-snug tracking-tight">
                    {point.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-muted leading-relaxed">
                    <span className="font-extrabold text-ink/70">
                      Test de 30 secondes&nbsp;:{" "}
                    </span>
                    {point.test}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {point.options.map((opt, level) => (
                      <OptionButton
                        key={opt}
                        label={opt}
                        selected={selected === level}
                        onSelect={() =>
                          setAnswer(index, level as QuizAnswerLevel)
                        }
                      />
                    ))}
                  </div>
                </SurfaceCard>
              </li>
            );
          })}
        </ol>
      </section>

      <ResultsPanel result={result} complete={complete} />
    </div>
  );
}

/** Hero 2 colonnes + email inline + quiz après unlock. */
export function EtancheiteQuiz() {
  const storedGate = useSyncExternalStore(subscribeGate, readGate, () => null);
  const [unlockedGate, setUnlockedGate] = useState<GateState | null>(null);
  const gate = unlockedGate ?? storedGate;

  return (
    <>
      <section className="relative overflow-hidden pt-36 md:pt-40 pb-14 md:pb-20 px-5 sm:px-8">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 0% 20%, rgba(255, 31, 113, 0.14) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 100% 10%, rgba(124, 58, 237, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 40% 35% at 70% 100%, rgba(212, 255, 0, 0.1) 0%, transparent 45%),
              var(--bg)
            `,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Breadcrumbs
              items={[
                { label: "Accueil", href: "/" },
                { label: "Test gratuit", href: QUIZ_META.path },
              ]}
            />

            <p className="mt-6 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-ink/35">
              {QUIZ_META.eyebrow}
            </p>

            <div className="mt-4">
              <SectionHead
                as="h1"
                size="xl"
                align="left"
                className="!max-w-none"
              >
                Que disent Google et ChatGPT <TitleEm>de toi</TitleEm>&nbsp;?
              </SectionHead>
            </div>

            <p className="mt-5 text-base md:text-lg text-muted font-medium leading-relaxed max-w-lg">
              {QUIZ_META.subtitle}
            </p>

            <div className="mt-8">
              {gate ? (
                <div
                  className={cn(
                    surfaceCardClassName,
                    "max-w-xl px-5 py-4 bg-lime/35",
                  )}
                >
                  <p className="text-sm font-extrabold text-ink">
                    Bonjour {gate.name}. Test débloqué.
                  </p>
                  <a
                    href="#quiz"
                    className="mt-1 inline-flex text-sm font-bold text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink"
                  >
                    Continuer les 10 points →
                  </a>
                </div>
              ) : (
                <HeroEmailGate onUnlocked={setUnlockedGate} />
              )}
            </div>
          </div>

          <AuditResultPreview />
        </div>
      </section>

      {gate ? (
        <section
          id="quiz"
          className="scroll-mt-28 py-14 md:py-20 px-5 sm:px-8 bg-surface"
        >
          <div className="max-w-3xl mx-auto">
            <QuizBody gate={gate} />
          </div>
        </section>
      ) : null}
    </>
  );
}
