import Link from "next/link";
import { getBaseUrl } from "@/lib/seo";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const base = getBaseUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${base}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Fil d'Ariane" className="text-sm font-medium text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-ink/25">/</span>}
              {i === items.length - 1 ? (
                <span className="text-ink font-semibold">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-pink transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
