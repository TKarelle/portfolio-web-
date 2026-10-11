import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Inline léger pour landings : **gras**, [lien](/url)
 */
export function InlineProse({ text }: { text: string }): ReactNode {
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
        </strong>,
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
            className="font-bold text-violet underline underline-offset-2 hover:text-pink transition-colors"
          >
            {label}
          </Link>
        ) : (
          <a
            key={`l-${key++}`}
            href={href}
            className="font-bold text-violet underline underline-offset-2 hover:text-pink transition-colors"
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

  return parts.length > 0 ? parts : text;
}
