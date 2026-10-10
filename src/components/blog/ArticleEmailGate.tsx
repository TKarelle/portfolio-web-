"use client";

import {
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { surfaceCardClassName } from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/utils";

type GateState = { name: string; email: string };

function storageKey(gateId: string) {
  return `kopio-article-gate:${gateId}`;
}

function readGate(gateId: string): GateState | null {
  try {
    const raw = sessionStorage.getItem(storageKey(gateId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GateState;
    if (
      typeof parsed?.name === "string" &&
      typeof parsed?.email === "string" &&
      parsed.name.length >= 2
    ) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return null;
}

async function submitArticleLead(
  name: string,
  email: string,
  gateId: string,
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
  formData.append("subject", `[Kopio] Lead article : ${gateId} — ${name}`);
  formData.append("from_name", "Kopio Blog");
  formData.append("name", name);
  formData.append("email", email);
  formData.append(
    "message",
    `Nouveau lead article Kopio\n\nGate : ${gateId}\nNom : ${name}\nEmail : ${email}\nDate : ${new Date().toISOString()}`,
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

type ArticleEmailGateProps = {
  gateId: string;
  children: ReactNode;
  /** Titre du panneau (soft gate) */
  headline?: string;
  /** Sous-texte */
  body?: string;
};

/**
 * Soft gate : le contenu reste dans le HTML (SEO / GEO / crawlers),
 * flouté pour la lectrice (cible Kopio) jusqu’à prénom + email.
 */
export function ArticleEmailGate({
  gateId,
  children,
  headline = "Accédez à la grille pratique SAGEO",
  body = "Laissez votre prénom et votre email pour débloquer les 6 actions concrètes, avec exemples pour coachs et expertes de l’accompagnement.",
}: ArticleEmailGateProps) {
  const [gate, setGate] = useState<GateState | null>(null);

  useEffect(() => {
    setGate(readGate(gateId));
  }, [gateId]);

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
      setError("Indiquez votre prénom.");
      return;
    }
    if (!trimmedEmail.includes("@") || trimmedEmail.length < 5) {
      setError("Indiquez un email valide.");
      return;
    }

    setLoading(true);
    try {
      const result = await submitArticleLead(
        trimmedName,
        trimmedEmail,
        gateId,
      );
      if (!result.ok) {
        setError(result.message);
        return;
      }
      const next = { name: trimmedName, email: trimmedEmail };
      sessionStorage.setItem(storageKey(gateId), JSON.stringify(next));
      setGate(next);
    } catch {
      setError("Réseau indisponible. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  if (gate) {
    return (
      <div id={`gate-${gateId}`} className="text-left">
        <p className="mb-6 text-sm font-bold text-ink/60">
          Bonjour {gate.name}. Grille pratique débloquée.
        </p>
        {children}
      </div>
    );
  }

  return (
    <div id={`gate-${gateId}`} className="relative my-8 text-left">
      <div
        className="max-h-[28rem] overflow-hidden select-none pointer-events-none"
        aria-hidden
      >
        <div className="blur-[6px] opacity-55">{children}</div>
      </div>

      <div className="absolute inset-0 z-10 flex items-end sm:items-center justify-center bg-gradient-to-t from-bg via-bg/92 to-bg/40 px-1 pb-2 sm:pb-0">
        <div
          className={cn(
            surfaceCardClassName,
            "w-full max-w-md p-5 sm:p-6 shadow-[0_18px_50px_rgba(17,17,17,0.12)]",
          )}
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-2">
            Accès gratuit · 10 secondes
          </p>
          <h3 className="text-lg sm:text-xl font-extrabold text-ink leading-snug tracking-tight">
            {headline}
          </h3>
          <p className="mt-2 text-sm font-medium text-muted leading-relaxed">
            {body}
          </p>

          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
            <label htmlFor={`gate-name-${gateId}`} className="sr-only">
              Prénom
            </label>
            <input
              id={`gate-name-${gateId}`}
              name="name"
              type="text"
              autoComplete="given-name"
              required
              minLength={2}
              placeholder="Prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
            <label htmlFor={`gate-email-${gateId}`} className="sr-only">
              Email
            </label>
            <input
              id={`gate-email-${gateId}`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 min-h-12 w-full rounded-[var(--rounded-large)] bg-lime text-ink text-sm sm:text-base font-bold px-5 shadow-[0_4px_0_0_#a8c400] hover:bg-lime-soft hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#a8c400] transition-all touch-manipulation disabled:opacity-60"
            >
              {loading ? "…" : "Débloquer la pratique"}
            </button>
          </form>

          {error ? (
            <p className="mt-2 text-sm font-bold text-pink" role="alert">
              {error}
            </p>
          ) : null}

          <p className="mt-3 text-xs font-medium text-ink/45 leading-relaxed">
            Gratuit · Pas de spam · Contenu utile, pensé pour vous
          </p>
        </div>
      </div>
    </div>
  );
}
