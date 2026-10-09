import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import { BlogContent } from "@/components/blog/BlogContent";
import { BlogAuthor } from "@/components/blog/BlogAuthor";
import { BlogCard, blogPostToCard } from "@/components/blog/BlogCard";
import { SectionHead, TitleEm } from "@/components/ui/SectionHead";
import { FAQ } from "@/components/home/FAQ";
import { ArticleJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { ArticleSommaire } from "@/components/seo/ArticleSommaire";
import { FutureVitrineCta } from "@/components/landing/FutureVitrineCta";
import { LandingHero } from "@/components/ui/LandingHero";
import { extractHeadingsFromBlocks } from "@/lib/slugify-heading";
import { pickShortHighlight } from "@/lib/highlight";
import { buildPageMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function articleDateLabel(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  const label = d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
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
  const headings = extractHeadingsFromBlocks(post.content);
  const modified = post.updatedAt ?? post.date;
  const highlight = pickShortHighlight(post.title);

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

      <LandingHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category, href: `/blog/${post.slug}` },
        ]}
        title={post.title}
        highlight={highlight}
        eyebrow={articleDateLabel(modified)}
        intro={post.excerpt}
        image={post.image}
        imageAlt={post.imageAlt}
        factChips={["Création de site", "Positionnement", "Visibilité"]}
        footer={<BlogAuthor />}
      />

      <section className="relative page-x pt-10 md:pt-12 pb-6 md:pb-8 bg-bg">
        <div className="w-full max-w-3xl mx-auto">
          <ArticleSommaire headings={headings} />
        </div>
      </section>

      <BlogContent blocks={post.content} />

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

      <FutureVitrineCta />

      {related.length > 0 && (
        <section className="py-16 sm:py-20 page-x bg-surface border-t border-ink/8">
          <div className="w-full max-w-5xl mx-auto">
            <div className="mb-10 md:mb-12 text-center">
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
