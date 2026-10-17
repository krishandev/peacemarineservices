import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/common/CTA";
import FAQ from "@/components/common/FAQ";
import GuideBody from "@/components/guides/GuideBody";
import { getGuidesBySlugs } from "@/data/guides";
import type { Guide } from "@/data/guides/types";

export default function GuideArticle({ guide }: { guide: Guide }) {
  const relatedGuides = getGuidesBySlugs(guide.relatedGuideSlugs);

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-12 lg:items-center lg:px-6 lg:py-14">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
              {guide.category}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-pms-navy sm:text-4xl">
              {guide.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-pms-muted sm:text-[15px]">
              {guide.summary}
            </p>
            <p className="mt-4 text-sm text-pms-muted">
              For {guide.audience} · {guide.readingMinutes} min read
            </p>
          </div>
          <figure className="lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-pms-line bg-pms-wash">
              <Image
                src={guide.image.src}
                alt={guide.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={guide.image.className}
              />
            </div>
          </figure>
        </div>
      </header>

      <div className="border-t border-pms-line bg-pms-wash">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-12 lg:px-6 lg:py-16">
          <nav
            aria-label="On this page"
            className="guide-toc lg:col-span-4 lg:self-start"
          >
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
                Contents
              </p>
              <ol className="mt-4 space-y-2">
                {guide.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-flex min-h-11 items-center rounded-sm text-sm text-pms-ink transition-colors duration-150 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-6 text-pms-muted">
                Related service:{" "}
                <Link
                  href={guide.relatedService.href}
                  className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                >
                  {guide.relatedService.label}
                </Link>
              </p>
            </div>
          </nav>

          <article className="lg:col-span-8">
            <GuideBody blocks={guide.blocks} />

            <section className="mt-12" aria-labelledby="official-sources-heading">
              <h2
                id="official-sources-heading"
                className="text-2xl font-semibold tracking-tight text-pms-navy"
              >
                Official sources
              </h2>
              <p className="mt-3 text-sm leading-7 text-pms-muted sm:text-[15px]">
                Requirements change. Verify current rules on the issuing
                organisation&apos;s website before relying on this guide for an
                operational decision.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                {guide.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <FAQ
            items={guide.faqs}
            title="Frequently asked questions"
            description="Answers about the limits of this guide, official processes, and how PMS can support an enquiry."
          />
        </div>
      </div>

      {relatedGuides.length > 0 ? (
        <section className="border-t border-pms-line bg-pms-wash">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-pms-navy">
              Related guides
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedGuides.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.path}
                    className="block h-full rounded-sm border border-pms-line bg-white px-5 py-5 transition-colors duration-150 hover:border-pms-blue/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                  >
                    <p className="text-xs text-pms-muted">{item.category}</p>
                    <p className="mt-2 font-semibold text-pms-navy">{item.h1}</p>
                    <p className="mt-2 text-sm leading-6 text-pms-muted">
                      {item.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <div className="guide-cta">
        <CTA
          eyebrow="Guides & inspection support"
          title="Need help preparing for an inspection or survey?"
          description="Contact PMS Peace Marine Services to discuss the vessel, location and the type of inspection or consultancy support required. Preparation support does not replace official inspections or certificates."
          primaryLabel="Request an Inspection"
          primaryHref="/contact/"
        />
      </div>
    </>
  );
}
