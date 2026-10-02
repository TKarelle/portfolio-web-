"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CONTROL_POINTS,
  DEFAULT_FIGURES,
  QUIZ_META,
  computeQuizResult,
  formatEuro,
  type QuizAnswerLevel,
  type QuizFigures,
} from "@/data/etancheite-quiz";
import { CTA } from "@/data/copy";

const STORAGE_KEY = "kopio-etancheite-gate";

type GateState = { name: string; email: string };

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

function GateForm({ onUnlocked }: { onUnlocked: (g: GateState) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (trimmedName.length < 2) {
      setError("Indiquez votre prénom ou nom.");
      return;
    }
    if (!trimmedEmail.includes("@")) {
      setError("Indiquez un email valide.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/quiz-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Enregistrement impossible.");
        setLoading(false);
        return;
      }
      const gate = { name: trimmedName, email: trimmedEmail };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(gate));
      onUnlocked(gate);
    } catch {
      setError("Réseau indisponible. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[1.5rem] border-2 border-ink bg-surface p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_#ff1f71]">
      <span className="inline-flex items-center bg-pink text-white text-[11px] font-extrabold uppercase tracking-[0.12em] px-3 py-1 rounded-full border-2 border-ink">
        Accès au quiz
      </span>
      <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-tight">
        Avant de commencer
      </h2>
      <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed max-w-xl">
        Laissez votre nom et votre email pour débloquer la grille. Comptez
        environ {QUIZ_META.duration.toLowerCase()} — rien à installer, vos
        chiffres restent chez vous.
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 max-w-md">
        <div>
          <label
            htmlFor="quiz-name"
            className="block text-xs font-extrabold uppercase tracking-wider text-ink/70 mb-1.5"
          >
            Nom
          </label>
          <input
            id="quiz-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Prénom Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full min-h-12 rounded-xl border-2 border-ink/15 bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
          />
        </div>
        <div>
          <label
            htmlFor="quiz-email"
            className="block text-xs font-extrabold uppercase tracking-wider text-ink/70 mb-1.5"
          >
            Email
          </label>
          <input
            id="quiz-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="vous@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full min-h-12 rounded-xl border-2 border-ink/15 bg-bg px-4 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
          />
        </div>
        {error ? (
          <p className="text-sm font-bold text-pink" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center min-h-12 rounded-xl bg-pink text-white text-base font-bold px-6 border-2 border-ink shadow-[4px_4px_0_#111] hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111] transition-all touch-manipulation disabled:opacity-60"
        >
          {loading ? "Enregistrement…" : "Accéder au quiz"}
        </button>
        <p className="text-xs font-medium text-muted leading-relaxed">
          Pas de spam. Votre email sert à vous recontacter si vous le souhaitez,
          et à suivre qui utilise la grille.
        </p>
      </form>
    </div>
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
        Étape 1 · vos trois chiffres
      </p>
      <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight">
        Des estimations suffisent
      </h3>
      <p className="mt-2 text-sm font-medium text-muted leading-relaxed">
        Elles servent uniquement à chiffrer la fuite.
      </p>

      <div className="mt-6 grid gap-5">
        <label className="block">
          <span className="block text-sm font-extrabold text-ink mb-1.5">
            Combien de personnes vous contactent chaque mois suite à une visite
            de votre site ou une recommandation&nbsp;?
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
          Votre résultat
        </p>
        <p className="text-base font-bold text-ink leading-snug">
          Complétez les 10 points pour voir votre taux d&apos;étanchéité. Il
          vous reste {result.remainingAnswers} réponse
          {result.remainingAnswers > 1 ? "s" : ""}.
        </p>
      </div>
    );
  }

  const sealingLabel =
    result.sealingRate >= 75
      ? "Plutôt étanche"
      : result.sealingRate >= 45
        ? "Fuites notables"
        : "Fuite importante";

  return (
    <div className="rounded-[1.25rem] border-2 border-ink bg-surface p-5 sm:p-7 shadow-[5px_5px_0_#d4ff00]">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink/60 mb-2">
        Votre résultat
      </p>
      <p className="text-sm font-bold text-pink">{sealingLabel}</p>
      <p className="mt-1 text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
        {result.sealingRate}&nbsp;%{" "}
        <span className="text-lg sm:text-xl font-bold text-muted">
          d&apos;étanchéité
        </span>
      </p>
      <p className="mt-1 text-sm font-semibold text-muted">
        Score&nbsp;: {result.points}&nbsp;/&nbsp;{result.maxPoints} points ·
        fuite estimée ~{result.leakRate}&nbsp;%
      </p>

      <dl className="mt-6 grid gap-3 sm:grid-cols-3">
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
  const [answers, setAnswers] = useState<Array<QuizAnswerLevel | null>>(
    () => Array(CONTROL_POINTS.length).fill(null),
  );

  const result = useMemo(
    () => computeQuizResult(answers, figures),
    [answers, figures],
  );
  const complete = result.remainingAnswers === 0;
  const pointsDisplay =
    Number.isInteger(result.points) ? result.points : result.points.toFixed(1);

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
          Bonjour {gate.name.split(" ")[0]}
        </p>
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-ink/50 mb-2">
          {QUIZ_META.title}
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-[1.15]">
          {QUIZ_META.headline}
        </h1>
        <p className="mt-3 text-base font-medium text-muted leading-relaxed">
          {QUIZ_META.subtitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[QUIZ_META.duration, ...QUIZ_META.bullets].map((b) => (
            <li
              key={b}
              className="inline-flex items-center rounded-full border-2 border-ink/10 bg-surface px-3 py-1 text-xs font-bold text-ink"
            >
              {b}
            </li>
          ))}
        </ul>
      </header>

      <div className="rounded-[1.25rem] border-2 border-ink/10 bg-surface/80 p-5 sm:p-6">
        <h2 className="text-xl font-extrabold text-ink">{QUIZ_META.introTitle}</h2>
        <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed">
          {QUIZ_META.introBody}
        </p>
        <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed">
          {QUIZ_META.introClose}
        </p>
      </div>

      <FiguresStep figures={figures} onChange={setFigures} />

      <section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-pink mb-1">
              Étape 2 · les 10 points de contrôle
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight">
              Faites chaque test, puis choisissez ce que vous constatez
            </h3>
            <p className="mt-1 text-sm font-medium text-muted">
              Pas ce que vous espériez.
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

export function EtancheiteQuiz() {
  const [gate, setGate] = useState<GateState | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setGate(readGate());
    setReady(true);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      {!ready ? (
        <div
          className="rounded-[1.5rem] border-2 border-dashed border-ink/20 bg-surface/60 p-10 min-h-[16rem]"
          aria-hidden
        />
      ) : gate ? (
        <QuizBody gate={gate} />
      ) : (
        <GateForm onUnlocked={setGate} />
      )}
    </div>
  );
}
