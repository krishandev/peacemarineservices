import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { fitSeoDescription, fitSeoTitle } from "@/lib/blog-seo";
import { createPageMetadata } from "@/lib/seo";
import {
  getAllPublishedPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/wordpress";

export const revalidate = 300;
export const dynamicParams = true;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  }

  return createPageMetadata({
    title: fitSeoTitle(post.title),
    description: fitSeoDescription(post.excerpt, post.content),
    path: post.path,
    image: post.featuredImage.src,
    imageAlt: post.featuredImage.alt,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post);
  const seoDescription = fitSeoDescription(post.excerpt, post.content);

  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog/" },
              { label: post.title },
            ]}
            seo={{
              page: {
                title: fitSeoTitle(post.title),
                description: seoDescription,
                path: post.path,
              },
              webpageType: "WebPage",
              article: {
                headline: post.title,
                description: seoDescription,
                image: post.featuredImage.src,
                datePublished: post.date,
                dateModified: post.modified,
                authorName: post.authorName,
              },
            }}
          />
        </div>
      </div>
      <BlogPost post={post} relatedPosts={relatedPosts} />
      <CTA
        eyebrow="Marine Surveying & Inspection"
        title="Need Marine Inspection or Survey Support?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred timing."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
