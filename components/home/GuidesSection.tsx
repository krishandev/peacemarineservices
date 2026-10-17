import Link from "next/link";
import { guides } from "@/data/guides";

export default function GuidesSection() {
  return (
    <section
      aria-labelledby="home-guides-heading"
      className="border-b border-pms-line bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-14 lg:px-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Guides &amp; resources
        </p>
        <div className="mt-3 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2
              id="home-guides-heading"
              className="max-w-xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
            >
              Practical marine inspection and survey guides
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-pms-muted sm:text-[15px]">
              Checklists and preparation notes for PSC, domestic commercial
              vessels, pre-purchase inspections and management-system audits.
              They are resources for operators, not official AMSA publications.
            </p>
            <Link
              href="/guides/"
              className="mt-5 inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              View Guides &amp; Resources
            </Link>
          </div>
          <ul className="lg:col-span-7">
            {guides.map((guide) => (
              <li key={guide.slug} className="border-t border-pms-line first:border-t-0">
                <Link
                  href={guide.path}
                  className="flex min-h-12 items-center justify-between gap-4 py-3 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                >
                  <span>{guide.h1}</span>
                  <span aria-hidden="true" className="text-pms-blue">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
