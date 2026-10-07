"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
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

async function submitLead(
  name: string,
  email: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return { ok: false, message: "Configuration email manquante. Réessayez plus tard." };
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
    return { ok: false, message: w3Data.message ?? "Envoi impossible. Réessayez." };
  }

  void fetch("/api/quiz-leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  }).catch(() => {});

  return { ok: true };
}

/** Prénom + email + CTA lime, intégré au hero (pattern lead magnet). */
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
        className="flex flex-col gap-2 rounded-2xl border-2 border-ink bg-surface p-2 shadow-[4px_4px_0_#111]"
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
            className="w-full sm:w-[38%] min-h-12 rounded-xl bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
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
            className="flex-1 min-h-12 rounded-xl bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 min-h-12 w-full rounded-xl bg-lime text-ink text-sm sm:text-base font-bold px-5 border-2 border-ink shadow-[3px_3px_0_#111] hover:bg-lime-soft hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111] transition-all touch-manipulation disabled:opacity-60"
        >
          {loading ? "…" : QUIZ_META.ctaLabel}
        </button>
      </form>
      {error ? (
        <p className="mt-2 text-sm font-bold text-pink" role="alert">
          {error}
        </p>
      ) : null}
      <p className="mt-3 text-xs sm:text-sm font-bold text-ink/60">
        ✓ {QUIZ_META.trustLine.replace(/ · /g, "  ·  ✓ ")}
      </p>
    </div>
  );
}

/** Aperçu résultat (décoratif), DA Kopio. */
export function AuditResultPreview() {
  return (
    <aside
      className="rounded-[1.5rem] border-[3px] border-ink bg-surface p-5 sm:p-6 shadow-[6px_6px_0_#ff1f71]"
      aria-hidden
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-xs font-bold text-muted truncate">
          ta-pratique.fr
        </span>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-pink shrink-0">
          Exemple de résultat
        </span>
      </div>

      <p className="text-pink text-xl sm:text-2xl font-extrabold leading-tight">
        Google et ChatGPT te montrent encore mal.
      </p>
      <p className="mt-1 text-3xl font-extrabold text-ink tracking-tight">
        52&nbsp;%{" "}
        <span className="text-base font-bold text-muted">de score</span>
      </p>

      <div className="mt-4 h-3 rounded-full border-2 border-ink overflow-hidden flex">
        <span className="w-[28%] bg-pink" />
        <span className="w-[24%] bg-violet relative">
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-lime border-2 border-ink" />
        </span>
        <span className="w-[26%] bg-ink/20" />
        <span className="w-[22%] bg-lime/50" />
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-extrabold uppercase tracking-wider text-muted">
        <span>Critique</span>
        <span>Élevée</span>
        <span>Modérée</span>
        <span>Faible</span>
      </div>

      <ul className="mt-5 space-y-2.5 text-sm font-semibold text-ink">
        <li className="flex gap-2.5 items-start">
          <span className="mt-1.5 w-2 h-2 rounded-full bg-pink shrink-0" />
          Google : site peu visible sous ton nom
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="mt-1.5 w-2 h-2 rounded-full bg-violet shrink-0" />
          ChatGPT : pas de citation claire
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="mt-1.5 w-2 h-2 rounded-full bg-lime border border-ink shrink-0" />
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
      className={`w-full text-left rounded-xl border-2 px-4 py-3 text-sm sm:text-[0.95rem] font-semibold leading-snug transition-all touch-manipulation ${
        selected
          ? "border-ink bg-lime shadow-[3px_3px_0_#111] text-ink"
          : "border-ink/15 bg-bg hover:border-pink/60 hover:bg-pink/5 text-ink"
      }`}
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
    <section className="rounded-[1.25rem] border-2 border-ink bg-surface p-5 sm:p-7 shadow-[5px_5px_0_#7c3aed]">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-violet mb-2">
        Étape 1 · tes trois chiffres
      </p>
      <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight">
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
            className="w-full max-w-[12rem] min-h-12 rounded-xl border-2 border-ink/15 bg-bg px-4 text-base font-bold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
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
            className="w-full max-w-[12rem] min-h-12 rounded-xl border-2 border-ink/15 bg-bg px-4 text-base font-bold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
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
            className="w-full max-w-[12rem] min-h-12 rounded-xl border-2 border-ink/15 bg-bg px-4 text-base font-bold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-violet"
          />
        </label>
      </div>
    </section>
  );
}

function verdictTone(level: QuizAnswerLevel): string {
  if (level === 2) return "border-ink bg-lime/50";
  if (level === 1) return "border-ink bg-violet-bg";
  return "border-ink bg-pink-bg";
}

function EngineCard({ verdict }: { verdict: EngineVerdict }) {
  return (
    <div
      className={`rounded-xl border-2 p-4 sm:p-5 ${verdictTone(verdict.level)}`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/60">
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
      <div className="rounded-[1.25rem] border-2 border-dashed border-ink/30 bg-bg p-5 sm:p-6">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted mb-2">
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
    <div className="rounded-[1.25rem] border-2 border-ink bg-surface p-5 sm:p-7 shadow-[5px_5px_0_#d4ff00]">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/60 mb-2">
        Réponse à la question
      </p>
      <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight">
        {QUIZ_META.headline}
      </h3>
      <p className="mt-3 text-lg sm:text-xl font-extrabold text-pink leading-snug">
        {result.combinedHeadline}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <EngineCard verdict={result.google} />
        <EngineCard verdict={result.chatgpt} />
      </div>

      <div className="mt-8 pt-6 border-t-2 border-ink/10">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted mb-2">
          Et ton site dans tout ça
        </p>
        <p className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
          {result.sealingRate}&nbsp;%{" "}
          <span className="text-base sm:text-lg font-bold text-muted">
            de score global
          </span>
        </p>
        <p className="mt-1 text-sm font-semibold text-muted">
          {result.points}&nbsp;/&nbsp;{result.maxPoints} points · perte estimée ~
          {result.leakRate}&nbsp;%
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border-2 border-ink/10 bg-pink-bg/60 p-4">
            <dt className="text-[10px] font-extrabold uppercase tracking-wider text-muted">
              Contacts perdus / mois
            </dt>
            <dd className="mt-1 text-2xl font-extrabold text-ink">
              ~{result.lostContactsPerMonth}
            </dd>
          </div>
          <div className="rounded-xl border-2 border-ink/10 bg-violet-bg/70 p-4">
            <dt className="text-[10px] font-extrabold uppercase tracking-wider text-muted">
              Clientes perdues / mois
            </dt>
            <dd className="mt-1 text-2xl font-extrabold text-ink">
              ~{result.lostClientsPerMonth}
            </dd>
          </div>
          <div className="rounded-xl border-2 border-ink/10 bg-lime-bg/80 p-4">
            <dt className="text-[10px] font-extrabold uppercase tracking-wider text-muted">
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
        <Link
          href="/tarifs"
          className="inline-flex items-center justify-center min-h-12 rounded-full bg-lime text-ink text-sm font-bold px-6 shadow-[0_4px_0_0_#a8c400] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#a8c400] transition-all"
        >
          {CTA.primary}
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center min-h-12 rounded-full bg-pink text-white text-sm font-bold px-6 shadow-[0_4px_0_0_#c40055] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#c40055] transition-all"
        >
          Parler de mon site
        </Link>
      </div>
    </div>
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
        <p className="text-sm font-bold text-pink tracking-wide mb-2">
          Bonjour {gate.name}
        </p>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-tight">
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
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-pink mb-1">
              Étape 2 · les 10 points de contrôle
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight">
              Google, ChatGPT, puis ton site
            </h3>
            <p className="mt-1 text-sm font-medium text-muted">
              Fais chaque test, puis choisis ce que tu constates. Pas ce que tu
              espérais.
            </p>
          </div>
          <p className="shrink-0 text-sm font-extrabold text-ink tabular-nums rounded-full border-2 border-ink bg-lime px-4 py-2 shadow-[3px_3px_0_#111]">
            {pointsDisplay}&nbsp;/&nbsp;{result.maxPoints} points
          </p>
        </div>

        <ol className="space-y-4">
          {CONTROL_POINTS.map((point, index) => {
            const selected = answers[index];
            return (
              <li
                key={point.id}
                className="rounded-[1.15rem] border-2 border-ink bg-surface p-4 sm:p-5 shadow-[4px_4px_0_#111]"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center min-w-8 h-8 rounded-full bg-ink text-white text-xs font-extrabold">
                    {point.id}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-pink">
                    {point.tag}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-ink leading-snug">
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
              </li>
            );
          })}
        </ol>
      </section>

      <ResultsPanel result={result} complete={complete} />
    </div>
  );
}

/** Hero 2 colonnes (PageIntro) + email inline + quiz après unlock. */
export function EtancheiteQuiz() {
  const [gate, setGate] = useState<GateState | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setGate(readGate());
    setReady(true);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden pt-36 md:pt-40 pb-14 md:pb-20 px-6">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 0% 20%, rgba(255, 31, 113, 0.22) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 100% 10%, rgba(124, 58, 237, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 40% 35% at 70% 100%, rgba(212, 255, 0, 0.16) 0%, transparent 45%),
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

            <span className="mt-6 inline-block bg-ink text-lime text-sm font-bold px-4 py-1.5 rounded-full border-2 border-ink">
              {QUIZ_META.eyebrow}
            </span>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-ink">
              Que disent Google et ChatGPT{" "}
              <span className="mark mark-pink">de toi</span>&nbsp;?
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted font-medium leading-relaxed max-w-lg">
              {QUIZ_META.subtitle}
            </p>

            <div className="mt-8">
              {!ready ? (
                <div
                  className="h-14 max-w-xl rounded-full border-2 border-dashed border-ink/20 bg-surface/50"
                  aria-hidden
                />
              ) : gate ? (
                <div className="rounded-2xl border-2 border-ink bg-lime/40 px-5 py-4 shadow-[4px_4px_0_#111] max-w-xl">
                  <p className="text-sm font-extrabold text-ink">
                    Bonjour {gate.name}. Test débloqué.
                  </p>
                  <a
                    href="#quiz"
                    className="mt-1 inline-flex text-sm font-bold text-pink hover:text-pink-hot"
                  >
                    Continuer les 10 points →
                  </a>
                </div>
              ) : (
                <HeroEmailGate onUnlocked={setGate} />
              )}
            </div>
          </div>

          <AuditResultPreview />
        </div>
      </section>

      {ready && gate ? (
        <section
          id="quiz"
          className="scroll-mt-28 py-14 md:py-20 px-5 sm:px-6 bg-chunk-pink"
        >
          <div className="max-w-3xl mx-auto">
            <QuizBody gate={gate} />
          </div>
        </section>
      ) : null}
    </>
  );
}
