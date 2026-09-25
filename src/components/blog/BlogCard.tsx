import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";
import type { Project } from "@/data/projects";

const categoryColors: Record<string, string> = {
  Guide: "bg-lime text-ink",
  Conseils: "bg-pink text-white",
  Accessibilité: "bg-violet text-white",
  Prix: "bg-pink text-white",
  Business: "bg-violet text-white",
  Parfum: "bg-pink text-white",
  Artisanat: "bg-lime text-ink",
  Beauté: "bg-violet text-white",
  "Artisan BTP": "bg-lime text-ink",
  "Bien-être": "bg-violet text-white",
  Créatif: "bg-pink text-white",
  Restauration: "bg-lime text-ink",
  "Architecte d’intérieur": "bg-violet text-white",
  "Consultante en bien-être": "bg-lime text-ink",
};

type BlogCardProps = {
  href: string;
  external?: boolean;
  image: string;
  category: string;
  title: string;
  description: string;
  meta?: string;
  cta?: string;
  featured?: boolean;
};

/** Carte blog / projet : même DA : contour noir, ombre rose au hover. */
export function BlogCard({
  href,
  external = false,
  image,
  category,
  title,
  description,
  meta,
  cta = "Lire l'article →",
  featured = false,
}: BlogCardProps) {
  const catClass = categoryColors[category] ?? "bg-lime text-ink";

  const className = `card card-hover overflow-hidden group h-full bg-surface ${
    featured ? "md:grid md:grid-cols-2 md:col-span-2" : "flex flex-col"
  }`;

  const body = (
    <>
      <div
        className={`relative overflow-hidden ${
          featured ? "min-h-[220px] md:min-h-full" : "h-48"
        }`}
      >
        <Image
          src={image}
          alt=""
          fill
          loading="lazy"
          quality={75}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "50vw" : "(max-width: 768px) 100vw, 350px"}
        />
        <span
          className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full border-2 border-ink ${catClass}`}
        >
          {category}
        </span>
      </div>

      <div className="p-6 md:p-7 flex-1 flex flex-col">
        {meta ? (
          <p className="text-xs text-muted font-semibold mb-3">{meta}</p>
        ) : null}

        <h2
          className={`font-extrabold leading-snug mb-3 group-hover:text-pink transition-colors flex-1 ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h2>

        <p className="text-muted text-sm leading-relaxed font-medium">
          {description}
        </p>

        <p className="mt-4 text-sm font-extrabold text-ink group-hover:text-violet transition-colors">
          {cta}
        </p>
      </div>
    </>
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

export function blogPostToCard(post: BlogPost): BlogCardProps {
  return {
    href: `/blog/${post.slug}`,
    image: post.image,
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
    category: project.category,
    title: project.title,
    description: project.result,
    cta: project.url ? "Voir le projet →" : "Voir les projets →",
  };
}
