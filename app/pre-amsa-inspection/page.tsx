import { pageMetadata, pageSeo } from "@/lib/page-seo";
import PreAmsaCompare from "@/components/pre-amsa/PreAmsaCompare";
import PreAmsaCover from "@/components/pre-amsa/PreAmsaCover";
import PreAmsaDocs from "@/components/pre-amsa/PreAmsaDocs";
import PreAmsaFaq from "@/components/pre-amsa/PreAmsaFaq";
import PreAmsaHero from "@/components/pre-amsa/PreAmsaHero";
import PreAmsaLocations from "@/components/pre-amsa/PreAmsaLocations";
import PreAmsaPrepare from "@/components/pre-amsa/PreAmsaPrepare";
import PreAmsaProcess from "@/components/pre-amsa/PreAmsaProcess";
import PreAmsaRelated from "@/components/pre-amsa/PreAmsaRelated";
import PreAmsaWhat from "@/components/pre-amsa/PreAmsaWhat";
import PreAmsaWho from "@/components/pre-amsa/PreAmsaWho";
import CTA from "@/components/common/CTA";
import RelatedGuidesStrip from "@/components/guides/RelatedGuidesStrip";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.preAmsa;

export default function PreAmsaInspectionPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Pre-AMSA Inspection" },
            ]}
            seo={{
              page: pageSeo.preAmsa,
              webpageType: "WebPage",
            service: {
                name: "Pre-AMSA Inspection Services",
                description: "Pre-AMSA inspection support for vessel operators, covering inspection readiness, documentation, safety systems and potential deficiencies before an official inspection."
              }
            }}
          />
        </div>
      </div>
      <PreAmsaHero />
      <PreAmsaWhat />
      <PreAmsaCover />
      <PreAmsaPrepare />
      <PreAmsaProcess />
      <PreAmsaCompare />
      <PreAmsaWho />
      <PreAmsaDocs />
      <PreAmsaLocations />
      <RelatedGuidesStrip
        title="DCV and inspection guides"
        slugs={[
          "australian-dcv-survey-requirements",
          "marine-inspection-preparation-checklist",
        ]}
      />
      <PreAmsaRelated />
      <PreAmsaFaq />
      <CTA
        eyebrow="Pre-AMSA Inspection Support"
        title="Preparing for an AMSA-Related Inspection?"
        description="Arrange a professional pre-inspection assessment to identify potential areas requiring attention before an applicable AMSA-related inspection or survey."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
