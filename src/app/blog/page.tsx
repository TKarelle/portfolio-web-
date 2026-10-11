import type { Metadata } from "next";
import { getBlogPosts } from "@/data/blog";
import { BlogCard, blogPostToCard } from "@/components/blog/BlogCard";
import { PageIntro } from "@/components/ui/PageIntro";
import { TitleEm } from "@/components/ui/SectionHead";
import { ValueBanner } from "@/components/ui/ValueBanner";
import { FutureVitrineCta } from "@/components/landing/FutureVitrineCta";
import { buildPageMetadata } from "@/lib/metadata";

const blogTitle =
  "Blog SEO IA et SAGEO | Conseils pour être trouvée | Kopio";
const blogDescription =
  "Conseils et stratégies pour améliorer la visibilité de votre site sur Google, dans les réponses IA et auprès de vos prospects.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: blogTitle,
    description: blogDescription,
    path: "/blog",
  }),
  title: { absolute: blogTitle },
};

export default function BlogPage() {
  const [featured, ...rest] = getBlogPosts();

  return (
    <>
      <PageIntro
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title={
          <>
            Stratégies SEO, IA et{" "}
            <TitleEm>SAGEO</TitleEm> pour développer votre visibilité
          </>
        }
        description="Conseils et stratégies pour améliorer la visibilité de votre site sur Google, dans les réponses IA et auprès de vos prospects."
        video="/image/sitewebvideo.mp4"
        videoPoster="/image/sophie.jpg"
        videoLabel="Aperçu du site Sophie Bluel, architecte d'intérieur"
        videoByline="Sophie Bluel"
        badge="Guides pratiques"
        secondaryHref="/tarifs"
      />
      <ValueBanner />

      <section className="py-16 sm:py-20 md:py-24 page-x bg-bg">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <BlogCard {...blogPostToCard(featured)} featured />
            {rest.map((post) => (
              <BlogCard key={post.slug} {...blogPostToCard(post)} />
            ))}
          </div>
        </div>
      </section>

      <FutureVitrineCta />
    </>
  );
}
