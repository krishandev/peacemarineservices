import Link from "next/link";
import { getGuidesBySlugs } from "@/data/guides";

export default function RelatedGuidesStrip({
  slugs,
  title = "Related guides",
  showHubLink = false,
}: {
  slugs: string[];
  title?: string;
  showHubLink?: boolean;
}) {
  const guides = getGuidesBySlugs(slugs);
  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-pms-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Guides &amp; resources
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-pms-navy sm:text-2xl">
          {title}
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <article className="flex h-full flex-col rounded-sm border border-pms-line px-4 py-4">
                <p className="text-xs text-pms-muted">{guide.category}</p>
                <h3 className="mt-1 text-sm font-semibold text-pms-navy">
                  <Link
                    href={guide.path}
                    className="rounded-sm hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                  >
                    {guide.h1}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-pms-muted">
                  {guide.summary}
                </p>
                <Link
                  href={guide.path}
                  className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-pms-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                >
                  Read {guide.h1}
                </Link>
              </article>
            </li>
          ))}
        </ul>
        {showHubLink ? (
          <p className="mt-6">
            <Link
              href="/guides/"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-pms-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              View all marine guides
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
