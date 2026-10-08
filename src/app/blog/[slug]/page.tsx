import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogAuthor } from "@/components/blog/BlogAuthor";
import { BlogCard, blogPostToCard } from "@/components/blog/BlogCard";
import { ContactSection } from "@/components/home/ContactSection";
import { MediaCard } from "@/components/ui/MediaCard";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

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

      <article className="relative z-10 pt-32 sm:pt-36 md:pt-40 pb-16 px-5 sm:px-8 bg-bg">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-bold text-muted hover:text-ink transition-colors mb-8"
          >
            ← Retour au blog
          </Link>

          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink/35 mb-4">
            {post.category}
            <span className="font-medium normal-case tracking-normal text-muted">
              {" "}
              ·{" "}
              <time dateTime={post.updatedAt ?? post.date}>
                {new Date(post.updatedAt ?? post.date).toLocaleDateString(
                  "fr-FR",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                )}
              </time>
              {" · "}
              {post.readTime} de lecture
            </span>
          </p>

          <SectionHead as="h1" size="xl" align="left" className="!max-w-none">
            {post.title}
          </SectionHead>

          <p className="mt-5 text-lg text-muted font-medium leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-8">
            <BlogAuthor />
          </div>

          <div className="my-10">
            <MediaCard
              src={post.image}
              alt={post.imageAlt}
              aspect="16/10"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <BlogContent blocks={post.content} />
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 ? (
        <FAQ
          items={post.faqs}
          title={
            <>
              Questions <TitleEm>fréquentes</TitleEm>
            </>
          }
        />
      ) : null}

      <ContactSection />

      {related.length > 0 && (
        <section className="py-16 sm:py-20 px-5 sm:px-8 bg-bg border-t border-ink/8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <SectionHead size="xl">
                À lire <TitleEm>aussi</TitleEm>
              </SectionHead>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
