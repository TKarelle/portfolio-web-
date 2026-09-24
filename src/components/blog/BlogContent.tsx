import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/** Parse **bold** et [lien](/url) dans un bloc de texte. */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
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
        </strong>
      );
    } else if (match[3] && match[4]) {
      const href = match[4];
      const label = match[3];
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
        )
      );
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts.length ? parts : [text];
}

function renderBlockLines(block: string): ReactNode {
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

export function BlogContent({ blocks }: { blocks: string[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2
              key={`h-${i}`}
              className="text-2xl md:text-3xl font-extrabold mt-10 mb-4"
            >
              <span className="title-stroke title-stroke-pink">
                {block.replace("## ", "")}
              </span>
            </h2>
          );
        }

        return (
          <p
            key={`p-${i}`}
            className="text-ink/80 leading-relaxed font-medium"
          >
            {renderBlockLines(block)}
          </p>
        );
      })}
    </div>
  );
}
