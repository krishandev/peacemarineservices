import { pageMetadata, pageSeo } from "@/lib/page-seo";
import PrePscAfter from "@/components/pre-psc/PrePscAfter";
import PrePscAttention from "@/components/pre-psc/PrePscAttention";
import PrePscCompare from "@/components/pre-psc/PrePscCompare";
import PrePscCondition from "@/components/pre-psc/PrePscCondition";
import PrePscCover from "@/components/pre-psc/PrePscCover";
import PrePscCrew from "@/components/pre-psc/PrePscCrew";
import PrePscFaq from "@/components/pre-psc/PrePscFaq";
import PrePscHero from "@/components/pre-psc/PrePscHero";
import PrePscLocations from "@/components/pre-psc/PrePscLocations";
import PrePscNav from "@/components/pre-psc/PrePscNav";
import PrePscProcess from "@/components/pre-psc/PrePscProcess";
import PrePscRelated from "@/components/pre-psc/PrePscRelated";
import PrePscWhat from "@/components/pre-psc/PrePscWhat";
import PrePscWho from "@/components/pre-psc/PrePscWho";
import CTA from "@/components/common/CTA";
import RelatedGuidesStrip from "@/components/guides/RelatedGuidesStrip";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.prePsc;

export default function PrePscInspectionPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Pre-PSC Inspection in Australia" },
            ]}
            seo={{
              page: pageSeo.prePsc,
              webpageType: "WebPage",
            service: {
                name: "Pre-PSC Inspection Services",
                description: "Pre-PSC inspection support to help vessel operators identify potential deficiencies in safety, documentation and operational readiness before Port State Control."
              }
            }}
          />
        </div>
      </div>
      <PrePscHero />
      <PrePscWhat />
      <PrePscCover />
      <PrePscCondition />
      <PrePscNav />
      <PrePscCrew />
      <PrePscProcess />
      <PrePscAttention />
      <PrePscWho />
      <PrePscCompare />
      <PrePscAfter />
      <PrePscLocations />
      <RelatedGuidesStrip
        title="Preparation guides"
        slugs={[
          "pre-psc-inspection-checklist",
          "marine-inspection-preparation-checklist",
        ]}
      />
      <PrePscRelated />
      <PrePscFaq />
      <CTA
        eyebrow="Pre-PSC Inspection Support"
        title="Preparing for a Port State Control Inspection?"
        description="Arrange a professional pre-PSC assessment to identify potential safety, technical, documentation and operational areas requiring attention before an applicable PSC inspection."
        primaryLabel="Request a Pre-PSC Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
