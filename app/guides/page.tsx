import Link from "next/link";
import CTA from "@/components/common/CTA";
import GuideCard from "@/components/guides/GuideCard";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { guides } from "@/data/guides";
import { services } from "@/data/services";
import { pageMetadata, pageSeo } from "@/lib/page-seo";

export const metadata = pageMetadata.guides;

const hubServiceHrefs = [
  "/pre-psc-inspection-in-australia/",
  "/amsa-dcv-marine-surveyor/",
  "/pre-purchase-inspection/",
  "/marine-safety-inspection-in-australia/",
  "/internal-audits-for-ism-isps-and-mlc/",
] as const;

const hubServices = hubServiceHrefs
  .map((href) => services.find((service) => service.href === href))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function GuidesPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides & Resources" },
            ]}
            seo={{
              page: pageSeo.guides,
              webpageType: "CollectionPage",
              itemList: {
                name: "PMS marine guides and resources",
                items: guides.map((guide) => ({
                  name: guide.h1,
                  url: guide.path,
                })),
              },
            }}
          />
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
            Guides &amp; resources
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-pms-navy sm:text-4xl">
            Marine Guides &amp; Resources for Vessel Owners and Operators
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-pms-muted sm:text-[15px]">
            These guides are written for shipowners, operators, masters,
            superintendents, domestic commercial vessel managers and buyers who
            need practical preparation help. They explain how to organise
            documents, walk a vessel, and ask better questions before a survey,
            inspection or internal audit. They are not official AMSA, flag or
            class publications and they do not guarantee an inspection outcome.
          </p>
        </div>
      </section>

      <section className="bg-pms-wash" aria-labelledby="guide-cards-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="guide-cards-heading"
            className="text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Current guides
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Each card notes the audience, an estimated reading time and the
            topic group.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="how-guides-help-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="how-guides-help-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            How these resources help inspection preparation
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            <p className="text-sm leading-7 text-pms-muted sm:text-[15px]">
              Use the checklists to brief the master, engineer or owner before
              anyone attends the vessel. They are prompts for certificates,
              access, known defects and records — not a substitute for the
              applicable convention, Marine Order or company SMS.
            </p>
            <p className="text-sm leading-7 text-pms-muted sm:text-[15px]">
              Official AMSA and international links sit at the end of each
              guide so regulatory claims can be checked at the source. Where a
              requirement depends on vessel type, the guide says so instead of
              inventing a single rule.
            </p>
            <p className="text-sm leading-7 text-pms-muted sm:text-[15px]">
              When you need attendance on board, follow the related PMS service
              page and send the vessel particulars, location and requested
              scope. Preparation support is not an official inspection.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pms-wash" aria-labelledby="related-services-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="related-services-heading"
            className="text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Related PMS services
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hubServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="block h-full rounded-sm border border-pms-line bg-white px-5 py-5 transition-colors duration-150 hover:border-pms-blue/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                >
                  <p className="font-semibold text-pms-navy">{service.label}</p>
                  <p className="mt-2 text-sm leading-6 text-pms-muted">
                    {service.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        eyebrow="Inspection and survey support"
        title="Need a marine surveyor or inspection?"
        description="If a guide has helped you define the job, contact PMS to discuss attendance, documents and the agreed scope of work."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
      />
    </main>
  );
}
