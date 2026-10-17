import { pageMetadata, pageSeo } from "@/lib/page-seo";
import TechCompare from "@/components/technical-inspection/TechCompare";
import TechConsultancy from "@/components/technical-inspection/TechConsultancy";
import TechCover from "@/components/technical-inspection/TechCover";
import TechDesign from "@/components/technical-inspection/TechDesign";
import TechFaq from "@/components/technical-inspection/TechFaq";
import TechHero from "@/components/technical-inspection/TechHero";
import TechLimits from "@/components/technical-inspection/TechLimits";
import TechLocations from "@/components/technical-inspection/TechLocations";
import TechMachinery from "@/components/technical-inspection/TechMachinery";
import TechProcess from "@/components/technical-inspection/TechProcess";
import TechRelated from "@/components/technical-inspection/TechRelated";
import TechWhat from "@/components/technical-inspection/TechWhat";
import TechWho from "@/components/technical-inspection/TechWho";
import CTA from "@/components/common/CTA";
import RelatedGuidesStrip from "@/components/guides/RelatedGuidesStrip";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.technical;

export default function TechnicalInspectionPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              {
                label:
                  "Technical Inspection & Marine Engineering Consultancy",
              },
            ]}
            seo={{
              page: pageSeo.technical,
              webpageType: "WebPage",
            service: {
                name: "Technical Marine Inspection and Engineering Consultancy",
                description: "Technical marine inspection and engineering consultancy covering machinery, engine room systems, repairs, modifications and technical vessel assessments."
              }
            }}
          />
        </div>
      </div>
      <TechHero />
      <TechWhat />
      <TechCover />
      <TechConsultancy />
      <TechMachinery />
      <TechDesign />
      <TechProcess />
      <TechWho />
      <TechCompare />
      <TechLimits />
      <TechLocations />
      <RelatedGuidesStrip
        title="Inspection preparation"
        slugs={["marine-inspection-preparation-checklist"]}
      />
      <TechRelated />
      <TechFaq />
      <CTA
        eyebrow="Technical Marine Inspection & Consultancy"
        title="Need Technical Support for Your Vessel?"
        description="Discuss your vessel inspection, machinery, engineering, repair or technical consultancy requirements with PMS Peace Marine Services."
        primaryLabel="Request a Technical Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
