import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideArticle from "@/components/guides/GuideArticle";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { guides, getGuideBySlug } from "@/data/guides";
import { pageSeo } from "@/lib/page-seo";
import { createPageMetadata } from "@/lib/seo";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

const guideSeoBySlug = {
  "pre-psc-inspection-checklist": pageSeo.guidePrePsc,
  "australian-dcv-survey-requirements": pageSeo.guideDcv,
  "pre-purchase-vessel-inspection-checklist": pageSeo.guidePrePurchase,
  "marine-inspection-preparation-checklist": pageSeo.guideInspection,
  "ism-isps-mlc-audit-preparation": pageSeo.guideIsm,
} as const;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = guideSeoBySlug[slug as keyof typeof guideSeoBySlug];
  const guide = getGuideBySlug(slug);

  if (!seo || !guide) {
    return {
      title: "Guide not found",
      robots: { index: false, follow: false },
    };
  }

  return createPageMetadata({
    ...seo,
    image: guide.image.src,
    imageAlt: guide.image.alt,
    type: "article",
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const seo = guideSeoBySlug[slug as keyof typeof guideSeoBySlug];

  if (!guide || !seo) {
    notFound();
  }

  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides & Resources", href: "/guides/" },
              { label: guide.h1 },
            ]}
            seo={{
              page: seo,
              webpageType: "WebPage",
              article: {
                headline: guide.h1,
                description: seo.description,
                image: guide.image.src,
                datePublished: "2026-10-17",
                schemaType: "Article",
              },
              faqs: guide.faqs,
            }}
          />
        </div>
      </div>
      <GuideArticle guide={guide} />
    </main>
  );
}
