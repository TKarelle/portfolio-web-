import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { QuizLeadMagnet } from "@/components/home/QuizLeadMagnet";
import { MediaCard, MediaCardCaption } from "@/components/ui/MediaCard";
import { ResponsiveDataTable } from "@/components/ui/ResponsiveDataTable";
import { slugifyHeading } from "@/lib/slugify-heading";

/** {{media|src|alt|title|text}} — même MediaCard que l'accueil. */
const MEDIA_RE =
  /^\{\{media\|([^|]+)\|([^|]+)\|([^|]*)\|([^}]*)\}\}$/;

function ProofCheck() {
  return (
    <span className="proof-check shrink-0 mt-0.5" aria-hidden="true">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 8.2 6.4 11l6.1-7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * Inline : **gras**, ==surlignage lime==, [lien](/url)
 */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex =
    /(\*\*(.+?)\*\*|==(.+?)==|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }

    if (match[2]) {
      parts.push(
        <strong key={`b-${key++}`} className="font-extrabold text-ink">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      parts.push(
        <em key={`m-${key++}`} className="title-em whitespace-normal">
          {match[3]}
        </em>,
      );
    } else if (match[4] && match[5]) {
      const href = match[5];
      const label = match[4];
      const isInternal = href.startsWith("/");
      parts.push(
        isInternal ? (
          <Link
            key={`l-${key++}`}
            href={href}
            className="font-bold text-pink underline underline-offset-2 hover:text-violet transition-colors"
          >
            {label}
          </Link>
        ) : (
          <a
            key={`l-${key++}`}
            href={href}
            className="font-bold text-pink underline underline-offset-2 hover:text-violet transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ),
      );
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.length ? parts : [text];
}

function renderInlineBlock(block: string): ReactNode {
  const lines = block.split("\n");
  if (lines.length === 1) {
    return <>{renderInline(block)}</>;
  }
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {renderInline(line)}
        </Fragment>
      ))}
    </>
  );
}

function isChecklistBlock(block: string): boolean {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return false;
  return lines.every(
    (l) => l.startsWith("- ") || l.startsWith("• ") || l.startsWith("* "),
  );
}

function Checklist({ block }: { block: string }) {
  const items = block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/^[-•*]\s+/, ""));

  return (
    <ul className="my-6 space-y-3 not-prose">
      {items.map((item) => (
        <li
          key={item.slice(0, 48)}
          className="flex items-start gap-3 text-ink/85 font-medium leading-relaxed"
        >
          <ProofCheck />
          <span className="min-w-0 pt-0.5">{renderInline(item)}</span>
        </li>
      ))}
    </ul>
  );
}

const STEP_RE = /^Étape\s+(\d+)\s*:\s*(.+)$/;

function parseStep(block: string): { n: string; title: string; body: string } | null {
  const m = block.match(STEP_RE);
  if (!m) return null;
  const n = m[1].padStart(2, "0");
  const rest = m[2].trim();
  const dot = rest.indexOf(". ");
  if (dot > 0 && dot < 90) {
    const title =
      rest.slice(0, dot).charAt(0).toUpperCase() + rest.slice(1, dot);
    const body = rest.slice(dot + 2).trim();
    return { n, title, body };
  }
  return { n, title: rest, body: "" };
}

function StepCard({
  n,
  title,
  body,
  index,
  total,
}: {
  n: string;
  title: string;
  body: string;
  index: number;
  total: number;
}) {
  return (
    <li className="relative">
      {index < total - 1 ? (
        <span
          className="absolute left-[1.15rem] top-12 bottom-[-1.25rem] w-0.5 bg-ink/15"
          aria-hidden
        />
      ) : null}
      <article className="relative flex gap-4 sm:gap-5 rounded-[var(--rounded-large)] border border-ink/10 bg-white p-5 sm:p-6 shadow-[0_14px_44px_rgba(17,17,17,0.07)]">
        <span className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ink/5 text-ink text-xs sm:text-sm font-extrabold flex items-center justify-center shrink-0 tabular-nums">
          {n}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg sm:text-xl font-extrabold text-ink leading-snug tracking-tight mb-2">
            {renderInline(title)}
          </h3>
          {body ? (
            <p className="text-sm sm:text-[0.95rem] text-muted font-medium leading-relaxed">
              {renderInline(body)}
            </p>
          ) : null}
        </div>
      </article>
    </li>
  );
}

function StepList({ steps }: { steps: { n: string; title: string; body: string }[] }) {
  return (
    <ol className="my-8 space-y-5 list-none" aria-label="Étapes">
      {steps.map((s, i) => (
        <StepCard
          key={`${s.n}-${s.title.slice(0, 24)}`}
          n={s.n}
          title={s.title}
          body={s.body}
          index={i}
          total={steps.length}
        />
      ))}
    </ol>
  );
}

function SectionHeading({
  title,
  id,
  index,
}: {
  title: string;
  id: string;
  index: number;
}) {
  return (
    <header className="mb-6 text-center">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/30 mb-3">
        {String(index).padStart(2, "0")}
      </p>
      <h2
        id={id}
        className="scroll-mt-28 text-[clamp(1.5rem,3.2vw,2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] text-ink text-balance"
      >
        {title}
      </h2>
    </header>
  );
}

function parsePipeRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((c) => c.trim());
}

function isPipeTable(block: string): boolean {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 3) return false;
  if (!lines.every((l) => l.includes("|"))) return false;
  const sep = lines[1].replace(/\s/g, "");
  return /^:?-+:?(\|:?-+:?)+$/.test(sep) || /^[-:|]+$/.test(sep);
}

function PipeTable({ block }: { block: string }) {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const headers = parsePipeRow(lines[0]);
  const rows = lines.slice(2).map(parsePipeRow);

  return (
    <ResponsiveDataTable
      headers={headers}
      rows={rows}
      renderCell={(text) => <>{renderInline(text)}</>}
    />
  );
}

type Segment =
  | { type: "block"; value: string }
  | { type: "steps"; steps: { n: string; title: string; body: string }[] };

function segmentBlocks(blocks: string[]): Segment[] {
  const out: Segment[] = [];
  let i = 0;
  while (i < blocks.length) {
    const step = parseStep(blocks[i]);
    if (step) {
      const steps = [step];
      i += 1;
      while (i < blocks.length) {
        const next = parseStep(blocks[i]);
        if (!next) break;
        steps.push(next);
        i += 1;
      }
      out.push({ type: "steps", steps });
      continue;
    }
    out.push({ type: "block", value: blocks[i] });
    i += 1;
  }
  return out;
}

function renderBodyBlock(
  block: string,
  key: string,
  paraIndex: number,
) {
  if (block.trim() === "{{quiz}}") {
    return (
      <div key={key} className="my-8 text-left">
        <QuizLeadMagnet variant="inline" id="quiz-article" />
      </div>
    );
  }

  const media = block.trim().match(MEDIA_RE);
  if (media) {
    const [, src, alt, title, text] = media;
    return (
      <div key={key} className="my-8 text-left max-w-2xl mx-auto">
        <MediaCard
          src={src.trim()}
          alt={alt.trim()}
          aspect="16/10"
          sizes="(max-width: 768px) 100vw, 720px"
        >
          <MediaCardCaption
            title={title.trim() || "Search Console"}
            text={text.trim()}
          />
        </MediaCard>
      </div>
    );
  }

  if (block.startsWith("> ")) {
    const callout = block.replace(/^>\s?/, "").trim();
    if (/^Vérifié le\b/i.test(callout)) return null;

    return (
      <aside
        key={key}
        className="my-6 text-left rounded-[var(--rounded-large)] border border-ink/10 bg-lime/25 px-5 py-4 text-ink font-medium leading-relaxed shadow-[0_8px_24px_rgba(17,17,17,0.04)]"
      >
        {renderInline(callout)}
      </aside>
    );
  }

  if (isPipeTable(block)) {
    return (
      <div key={key} className="text-left">
        <PipeTable block={block} />
      </div>
    );
  }

  if (isChecklistBlock(block)) {
    return (
      <div key={key} className="text-left">
        <Checklist block={block} />
      </div>
    );
  }

  if (/^[-•*]\s+/.test(block.trim()) && !block.includes("\n")) {
    return (
      <p
        key={key}
        className="flex items-start gap-3 text-left text-ink/85 font-medium leading-relaxed my-3"
      >
        <ProofCheck />
        <span className="min-w-0 pt-0.5">
          {renderInline(block.trim().replace(/^[-•*]\s+/, ""))}
        </span>
      </p>
    );
  }

  return (
    <p
      key={key}
      className={`text-muted font-medium leading-[1.75] mb-5 last:mb-0 mx-auto max-w-2xl ${
        paraIndex === 0
          ? "text-base md:text-[1.05rem] text-ink/75"
          : "text-[0.95rem] md:text-base"
      }`}
    >
      {renderInlineBlock(block)}
    </p>
  );
}

function buildHeadingIdMap(blocks: string[]): Map<string, string> {
  const seen = new Map<string, number>();
  const map = new Map<string, string>();
  for (const block of blocks) {
    if (!block.startsWith("## ")) continue;
    const label = block.slice(3).trim();
    let id = slugifyHeading(label);
    const n = seen.get(id) ?? 0;
    seen.set(id, n + 1);
    if (n > 0) id = `${id}-${n + 1}`;
    map.set(label, id);
  }
  return map;
}

type ProseSection = {
  title?: string;
  id?: string;
  body: Segment[];
};

/** Découpe l'article en sections H2 — même rythme visuel que SeoProseSections. */
function groupIntoProseSections(blocks: string[]): ProseSection[] {
  const segments = segmentBlocks(blocks);
  const sections: ProseSection[] = [{ body: [] }];

  for (const seg of segments) {
    if (seg.type === "block" && seg.value.startsWith("## ")) {
      sections.push({
        title: seg.value.slice(3).trim(),
        body: [],
      });
      continue;
    }
    sections[sections.length - 1].body.push(seg);
  }

  return sections.filter((s) => s.title || s.body.length > 0);
}

export function BlogContent({ blocks }: { blocks: string[] }) {
  const headingIds = buildHeadingIdMap(blocks);
  const sections = groupIntoProseSections(blocks);
  let sectionNumber = 0;

  return (
    <div className="blog-prose">
      {sections.map((section, si) => {
        const isLead = !section.title;
        const n = isLead ? 0 : ++sectionNumber;
        const id = section.title
          ? (headingIds.get(section.title) ?? slugifyHeading(section.title))
          : undefined;
        let paraIndex = 0;

        return (
          <section
            key={section.title ?? `lead-${si}`}
            className={`page-x ${
              isLead ? "pt-4 pb-10 md:pb-12" : "py-14 md:py-20"
            } ${!isLead && n % 2 === 0 ? "bg-surface" : "bg-bg"}`}
          >
            <div className="w-full max-w-3xl mx-auto text-center">
              {section.title && id ? (
                <SectionHeading title={section.title} id={id} index={n} />
              ) : null}
              {section.body.map((seg, bi) => {
                if (seg.type === "steps") {
                  return (
                    <div key={`steps-${si}-${bi}`} className="text-left">
                      <StepList steps={seg.steps} />
                    </div>
                  );
                }
                const node = renderBodyBlock(
                  seg.value,
                  `b-${si}-${bi}`,
                  paraIndex,
                );
                if (
                  node &&
                  !seg.value.startsWith(">") &&
                  !seg.value.startsWith("## ") &&
                  !isPipeTable(seg.value) &&
                  !isChecklistBlock(seg.value) &&
                  !/^[-•*]\s+/.test(seg.value.trim()) &&
                  seg.value.trim() !== "{{quiz}}" &&
                  !MEDIA_RE.test(seg.value.trim())
                ) {
                  paraIndex += 1;
                }
                return node;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
