import type { Metadata } from "next";
import Link from "next/link";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogPagination from "@/components/blog/BlogPagination";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { pageSeo } from "@/lib/page-seo";
import { createPageMetadata } from "@/lib/seo";
import {
  BLOG_POSTS_PER_PAGE,
  getPosts,
} from "@/lib/wordpress";

export const revalidate = 300;

function pageNumber(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number(raw || 1);
  return Number.isFinite(parsed) && parsed > 1 ? Math.floor(parsed) : 1;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const page = pageNumber(params.page);
  const path = page > 1 ? `/blog/?page=${page}` : "/blog/";

  return createPageMetadata({
    ...pageSeo.blog,
    path,
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = pageNumber(params.page);
  const { posts, totalPages, error } = await getPosts({
    page,
    perPage: BLOG_POSTS_PER_PAGE,
  });

  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
            seo={{
              page: pageSeo.blog,
              webpageType: "CollectionPage",
              itemList:
                posts.length > 0
                  ? {
                      name: "Latest marine and maritime articles",
                      items: posts.map((post) => ({
                        name: post.title,
                        url: post.path,
                      })),
                    }
                  : undefined,
            }}
          />
        </div>
      </div>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
          <p className="text-sm font-semibold tracking-wide text-pms-blue">
            PMS Peace Marine Services
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-pms-navy sm:text-4xl">
            Marine & Maritime Services Blog
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-pms-muted sm:text-[15px]">
            The PMS blog shares practical information on marine surveying,
            marine inspections, vessel safety, AMSA and DCV preparation, marine
            compliance, cargo surveys, bunker surveys, technical marine
            inspection, marine audits, maritime operations, and vessel ownership
            and inspection considerations. Longer checklists are in the{" "}
            <Link
              href="/guides/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Guides &amp; Resources
            </Link>{" "}
            section.
          </p>
        </div>
      </section>
      <section
        aria-labelledby="latest-articles-heading"
        className="border-t border-pms-line bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
          <h2
            id="latest-articles-heading"
            className="text-2xl font-semibold text-pms-navy"
          >
            Latest Articles
          </h2>
          {error ? (
            <p className="mt-6 max-w-2xl text-sm leading-6 text-pms-muted">
              Blog articles are unavailable at the moment. Please try again
              shortly, or contact PMS Peace Marine Services if you need
              inspection or survey information now.
            </p>
          ) : posts.length === 0 ? (
            <p className="mt-6 max-w-2xl text-sm leading-6 text-pms-muted">
              No published articles are available yet. New posts will appear
              here after they are published in WordPress.
            </p>
          ) : (
            <>
              <div className="mt-8">
                <BlogGrid posts={posts} />
              </div>
              <BlogPagination page={page} totalPages={totalPages} />
            </>
          )}
        </div>
      </section>
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
