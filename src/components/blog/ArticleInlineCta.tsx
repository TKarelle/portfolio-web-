import { Button } from "@/components/ui/Button";
import { CTA } from "@/data/copy";
import { QUIZ_META } from "@/data/etancheite-quiz";
import { cn } from "@/lib/utils";

export type ArticleCtaVariant = "mid" | "bridge";

type ArticleInlineCtaProps = {
  variant?: ArticleCtaVariant;
  className?: string;
};

const COPY: Record<
  ArticleCtaVariant,
  { eyebrow: string; title: string; body: string; primary: { href: string; label: string }; secondary?: { href: string; label: string } }
> = {
  /** Conscience → diagnostic gratuit (pas encore RDV) */
  mid: {
    eyebrow: "Étape suivante",
    title: "Votre site est-il prêt à être trouvé, puis cité ?",
    body: "En deux minutes, le Test des 10 Secondes regarde ce que Google, ChatGPT et votre page montrent vraiment de vous. Sans rien installer.",
    primary: { href: QUIZ_META.path, label: QUIZ_META.promoCta },
    secondary: { href: "/contact", label: CTA.mail },
  },
  /** Considération → conversation humaine */
  bridge: {
    eyebrow: "Travailler ensemble",
    title: "Envie que votre présence en ligne soit claire et tenue ?",
    body: "Je crée des sites web qui parlent le langage de Google, des IA et de vos futurs clients. On regarde votre situation, sans jargon et sans pression.",
    primary: { href: "/contact", label: CTA.primary },
    secondary: { href: "/tarifs", label: "Voir les formules" },
  },
};

/**
 * CTA éditorial soft dans le corps d’article — parcours client, zéro prix.
 */
export function ArticleInlineCta({
  variant = "mid",
  className,
}: ArticleInlineCtaProps) {
  const c = COPY[variant];

  return (
    <aside
      className={cn(
        "my-12 sm:my-14 not-prose text-left border-y border-ink/8 py-8 sm:py-10",
        className,
      )}
      aria-label={c.eyebrow}
    >
      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/35">
        {c.eyebrow}
      </p>
      <p className="mt-3 text-lg sm:text-xl md:text-[1.35rem] font-extrabold text-ink tracking-tight leading-snug text-balance">
        {c.title}
      </p>
      <p className="mt-3 text-sm sm:text-base font-medium text-muted leading-relaxed max-w-xl">
        {c.body}
      </p>
      <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
        <Button href={c.primary.href} size="lg">
          {c.primary.label}
        </Button>
        {c.secondary ? (
          <Button href={c.secondary.href} variant="outline" size="lg">
            {c.secondary.label}
          </Button>
        ) : null}
      </div>
    </aside>
  );
}

export function parseArticleCta(
  block: string,
): ArticleCtaVariant | null {
  const t = block.trim();
  if (t === "{{cta}}" || t === "{{cta|mid}}") return "mid";
  if (t === "{{cta|bridge}}") return "bridge";
  return null;
}

/**
 * Insère mid (+ bridge si pas de quiz) pour un parcours client homogène
 * sur tous les articles, sauf si un {{cta|…}} est déjà présent.
 */
export function injectArticleJourney(blocks: string[]): string[] {
  const hasManual = blocks.some((b) => parseArticleCta(b) != null);
  if (hasManual) return blocks;

  const out = [...blocks];
  const h2Idx = out
    .map((b, i) => (b.startsWith("## ") ? i : -1))
    .filter((i) => i >= 0);
  const hasQuiz = out.some((b) => b.trim() === "{{quiz}}");

  if (h2Idx.length >= 3) {
    out.splice(h2Idx[2], 0, "{{cta|mid}}");
  } else if (out.length >= 6) {
    out.splice(Math.min(4, out.length), 0, "{{cta|mid}}");
  }

  if (!hasQuiz) {
    const h2After = out
      .map((b, i) => (b.startsWith("## ") ? i : -1))
      .filter((i) => i >= 0);
    const midPos = out.findIndex((b) => b.trim() === "{{cta|mid}}");
    const lastH2 = h2After[h2After.length - 1];

    if (lastH2 != null && midPos >= 0 && lastH2 - midPos > 5) {
      out.splice(lastH2, 0, "{{cta|bridge}}");
    } else if (midPos >= 0) {
      out.push("{{cta|bridge}}");
    } else {
      out.push("{{cta|bridge}}");
    }
  }

  return out;
}
