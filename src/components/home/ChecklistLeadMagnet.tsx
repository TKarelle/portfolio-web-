"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/data/site";

const CHECKLIST_PDF = "/docs/checklist-site-qui-convertit.pdf";
const CHECKLIST_TITLE = "La Checklist du Site Qui Convertit";

function DownloadIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ChecklistLeadMagnetProps = {
  /** Compact pour le footer */
  variant?: "section" | "footer";
  id?: string;
};

export function ChecklistLeadMagnet({
  variant = "section",
  id = "checklist",
}: ChecklistLeadMagnetProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) return;

    const subject = encodeURIComponent(`Checklist : ${trimmed}`);
    const body = encodeURIComponent(
      `Nouvelle demande de checklist\nEmail : ${trimmed}\n`,
    );
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
      "_self",
    );

    const a = document.createElement("a");
    a.href = CHECKLIST_PDF;
    a.download = "La-Checklist-du-Site-Qui-Convertit-Kopio.pdf";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setStatus("done");
  };

  if (variant === "footer") {
    return (
      <div
        id={id}
        className="mt-5 rounded-2xl border border-dashed border-pink/50 bg-pink/10 p-4"
      >
        <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-pink mb-1.5">
          Cadeau · lecture 15&nbsp;min
        </p>
        <p className="text-sm font-extrabold text-white leading-snug">
          {CHECKLIST_TITLE}
        </p>
        {status === "done" ? (
          <p className="mt-3 text-sm font-medium text-lime">
            Téléchargement lancé. Merci.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2">
            <label htmlFor={`${id}-email`} className="sr-only">
              Votre email
            </label>
            <input
              id={`${id}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-h-11 rounded-xl border border-white/20 bg-ink px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 min-h-11 rounded-xl bg-pink text-white text-sm font-bold px-4 hover:bg-pink-hot transition-colors touch-manipulation border-2 border-white/10"
            >
              <DownloadIcon />
              Recevoir la checklist
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section
      id={id}
      className="scroll-mt-28 py-12 md:py-14 px-5 sm:px-6 bg-chunk-pink"
      aria-labelledby={`${id}-title`}
    >
      <div className="max-w-3xl mx-auto relative rounded-[1.5rem] border-2 border-dashed border-ink bg-surface p-6 sm:p-8 md:p-10 shadow-[6px_6px_0_#ff1f71]">
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-pink text-white text-[11px] font-extrabold uppercase tracking-[0.12em] px-3 py-1 rounded-full border-2 border-ink">
          Cadeau gratuit
        </span>

        <p className="text-sm font-bold text-pink mb-2 tracking-wide mt-1">
          Pour démarrer sans appel
        </p>
        <h2
          id={`${id}-title`}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink leading-tight"
        >
          {CHECKLIST_TITLE}
        </h2>
        <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed max-w-xl">
          Un guide court (~15&nbsp;min) pour clarifier ce dont votre site a
          vraiment besoin.
        </p>

        {status === "done" ? (
          <p className="mt-6 text-base font-bold text-ink">
            Téléchargement lancé. Si besoin,{" "}
            <a
              href={CHECKLIST_PDF}
              className="text-pink underline underline-offset-2"
            >
              recliquer ici
            </a>
            .
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-stretch"
          >
            <label htmlFor={`${id}-email`} className="sr-only">
              Votre email
            </label>
            <input
              id={`${id}-email`}
              type="email"
              name="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-h-12 rounded-xl border-2 border-ink/15 bg-bg px-5 text-base text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 min-h-12 shrink-0 rounded-xl bg-pink text-white text-sm sm:text-base font-bold px-5 sm:px-6 border-2 border-ink shadow-[4px_4px_0_#111] hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111] transition-all touch-manipulation"
            >
              <DownloadIcon className="w-5 h-5" />
              Recevoir la checklist
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
