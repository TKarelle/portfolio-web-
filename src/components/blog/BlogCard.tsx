import Link from "next/link";
import type { ResolvedBlogPost } from "@/data/blog";
import type { Project } from "@/data/projects";
import { getBlogCover } from "@/data/blog-covers";
import { MediaCard } from "@/components/ui/MediaCard";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  href: string;
  external?: boolean;
  image: string;
  imageAlt?: string;
  category: string;
  title: string;
  description: string;
  meta?: string;
  cta?: string;
  featured?: boolean;
  headingAs?: "h2" | "h3";
};

/**
 * Carte blog / projet — MediaCard (même shell que le reste du site).
 */
export function BlogCard({
  href,
  external = false,
  image,
  imageAlt,
  category,
  title,
  description,
  meta,
  cta = "Lire l'article →",
  featured = false,
  headingAs: Heading = "h2",
}: BlogCardProps) {
  const body = (
    <MediaCard
      src={image}
      alt={imageAlt ?? title}
      aspect={featured ? "16/9" : "16/10"}
      sizes={featured ? "(max-width: 768px) 100vw, 900px" : "(max-width: 768px) 100vw, 420px"}
      className="h-full group"
    >
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35">
        {category}
        {meta ? (
          <span className="font-medium normal-case tracking-normal text-muted">
            {" "}
            · {meta}
          </span>
        ) : null}
      </p>

      <Heading
        className={cn(
          "mt-2 font-extrabold text-ink tracking-tight leading-snug group-hover:text-pink transition-colors",
          featured ? "text-xl sm:text-2xl md:text-[1.65rem]" : "text-lg sm:text-xl",
        )}
      >
        {title}
      </Heading>

      <p className="mt-2 text-sm font-medium text-muted leading-relaxed line-clamp-3">
        {description}
      </p>

      <p className="mt-3 text-sm font-extrabold text-ink group-hover:text-violet transition-colors">
        {cta}
      </p>
    </MediaCard>
  );

  const className = cn(
    "block h-full min-w-0",
    featured && "md:col-span-2",
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}

export function blogPostToCard(post: ResolvedBlogPost): BlogCardProps {
  return {
    href: `/blog/${post.slug}`,
    image: getBlogCover(post.slug, post.image),
    imageAlt: post.imageAlt,
    category: post.category,
    title: post.title,
    description: post.excerpt,
    meta: `${new Date(post.date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })} · ${post.readTime}`,
    cta: "Lire l'article →",
  };
}

export function projectToCard(project: Project): BlogCardProps {
  return {
    href: project.url ?? "/projets",
    external: Boolean(project.url),
    image: project.image,
    imageAlt: project.imageAlt,
    category: project.category,
    title: project.title,
    description: project.result,
    cta: project.url ? "Voir le projet →" : "Voir les projets →",
  };
}
