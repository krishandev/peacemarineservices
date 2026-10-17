import { pageMetadata, pageSeo } from "@/lib/page-seo";
import { services } from "@/data/services";
import ServicesApproach from "@/components/services/ServicesApproach";
import ServicesFaqSection from "@/components/services/ServicesFaqSection";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesInAction from "@/components/services/ServicesInAction";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesLocations from "@/components/services/ServicesLocations";
import ServicesSupport from "@/components/services/ServicesSupport";
import CTA from "@/components/common/CTA";
import RelatedGuidesStrip from "@/components/guides/RelatedGuidesStrip";
import Breadcrumbs from "@/components/seo/Breadcrumbs";


export const metadata = pageMetadata.services;

export default function OurServicesPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services" },
            ]}
            seo={{
              page: pageSeo.services,
              webpageType: "CollectionPage",
              itemList: {
                name: "PMS marine survey and inspection services",
                items: services.map((service) => ({
                  name: service.title,
                  url: service.href,
                })),
              },
            }}
          />
        </div>
      </div>
      <ServicesHero />
      <ServicesIntro />
      <ServicesGridSection />
      <ServicesSupport />
      <ServicesApproach />
      <ServicesInAction />
      <ServicesLocations />
      <RelatedGuidesStrip
        title="Helpful inspection and survey guides"
        showHubLink
        slugs={[
          "pre-psc-inspection-checklist",
          "australian-dcv-survey-requirements",
          "pre-purchase-vessel-inspection-checklist",
          "ism-isps-mlc-audit-preparation",
        ]}
      />
      <ServicesFaqSection />
      <CTA
        eyebrow="Marine Surveying & Inspection Support"
        title="Need a Marine Surveyor or Marine Inspection?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, survey, auditing or marine consultancy requirements."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
