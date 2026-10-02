import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { pickShortHighlight } from "@/lib/highlight";

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
        <span
          key={`m-${key++}`}
          className="mark mark-lime font-extrabold whitespace-normal"
        >
          {match[3]}
        </span>,
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
      <article className="relative flex gap-4 sm:gap-5 rounded-[1.25rem] border-2 border-ink bg-surface p-5 sm:p-6 shadow-[3px_3px_0_#111]">
        <span className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ink text-lime text-xs sm:text-sm font-extrabold flex items-center justify-center shrink-0">
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

function Heading({ title }: { title: string }) {
  const highlight = pickShortHighlight(title);
  const idx = title.lastIndexOf(highlight);
  const before = idx >= 0 ? title.slice(0, idx) : title;
  const after = idx >= 0 ? title.slice(idx + highlight.length) : "";

  return (
    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mt-12 mb-5">
      {before}
      {idx >= 0 ? (
        <span className="mark mark-lime">{highlight}</span>
      ) : null}
      {after}
    </h2>
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

function renderBlock(block: string, key: string) {
  if (block.startsWith("## ")) {
    return <Heading key={key} title={block.replace("## ", "")} />;
  }

  if (block.startsWith("> ")) {
    return (
      <aside
        key={key}
        className="my-6 rounded-2xl border-2 border-ink bg-lime/40 px-5 py-4 text-ink font-medium leading-relaxed shadow-[3px_3px_0_0_#0a0a0a]"
      >
        {renderInline(block.replace(/^>\s?/, ""))}
      </aside>
    );
  }

  if (isChecklistBlock(block)) {
    return <Checklist key={key} block={block} />;
  }

  if (/^[-•*]\s+/.test(block.trim()) && !block.includes("\n")) {
    return (
      <p
        key={key}
        className="flex items-start gap-3 text-ink/85 font-medium leading-relaxed my-3"
      >
        <ProofCheck />
        <span className="min-w-0 pt-0.5">
          {renderInline(block.trim().replace(/^[-•*]\s+/, ""))}
        </span>
      </p>
    );
  }

  return (
    <p key={key} className="text-ink/80 leading-[1.75] font-medium mb-5">
      {renderInlineBlock(block)}
    </p>
  );
}

export function BlogContent({ blocks }: { blocks: string[] }) {
  const segments = segmentBlocks(blocks);

  return (
    <div className="blog-prose max-w-none">
      {segments.map((seg, i) => {
        if (seg.type === "steps") {
          return <StepList key={`steps-${i}`} steps={seg.steps} />;
        }
        return renderBlock(seg.value, `b-${i}`);
      })}
    </div>
  );
}
