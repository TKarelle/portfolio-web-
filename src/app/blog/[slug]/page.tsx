import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogAuthor } from "@/components/blog/BlogAuthor";
import { BlogCard, blogPostToCard } from "@/components/blog/BlogCard";
import { ContactSection } from "@/components/home/ContactSection";
import { SectionHead } from "@/components/ui/SectionHead";
import { FAQ } from "@/components/home/FAQ";
import { ArticleJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article non trouvé" };

  return buildPageMetadata({
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.image,
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedAt ?? post.date,
  });
}

const categoryColors: Record<string, string> = {
  Guide: "bg-lime text-ink",
  Conseils: "bg-pink text-white",
  Accessibilité: "bg-violet text-white",
  Prix: "bg-pink text-white",
  Business: "bg-violet text-white",
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);
  const catClass = categoryColors[post.category] ?? "bg-lime text-ink";

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        date={post.date}
        dateModified={post.updatedAt}
        image={post.image}
        slug={post.slug}
      />
      {post.faqs && post.faqs.length > 0 ? (
        <FaqJsonLd items={post.faqs} />
      ) : null}
      {post.howTo ? (
        <HowToJsonLd
          name={post.howTo.name}
          description={post.howTo.description}
          steps={post.howTo.steps}
        />
      ) : null}
      <article className="pt-36 md:pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-bold text-muted hover:text-pink transition-colors mb-8"
          >
            ← Retour au blog
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold mb-5">
            <span
              className={`px-3 py-1 rounded-full border-2 border-ink ${catClass}`}
            >
              {post.category}
            </span>
            <time dateTime={post.updatedAt ?? post.date} className="text-muted">
              {new Date(post.updatedAt ?? post.date).toLocaleDateString(
                "fr-FR",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )}
            </time>
            <span className="text-muted">· {post.readTime} de lecture</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-muted font-medium leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <BlogAuthor />

          <div className="relative h-64 md:h-80 photo-frame my-10">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              quality={80}
              className="object-cover rounded-[1.1rem]"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>

          <BlogContent blocks={post.content} />
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 ? (
        <FAQ
          items={post.faqs}
          title="Questions fréquentes"
          highlight="fréquentes"
        />
      ) : null}

      <ContactSection />

      {related.length > 0 && (
        <section className="py-16 px-6 bg-chunk-pink border-t-[3px] border-ink">
          <div className="max-w-5xl mx-auto">
            <SectionHead stroke="violet" highlight="aussi" className="mb-8">
              {"À lire aussi"}
            </SectionHead>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((p) => (
                <BlogCard key={p.slug} {...blogPostToCard(p)} headingAs="h3" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
