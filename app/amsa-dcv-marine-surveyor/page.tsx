import { pageMetadata, pageSeo } from "@/lib/page-seo";
import AmsaDcvFaq from "@/components/amsa-dcv/AmsaDcvFaq";
import AmsaDcvGallery from "@/components/amsa-dcv/AmsaDcvGallery";
import AmsaDcvHero from "@/components/amsa-dcv/AmsaDcvHero";
import AmsaDcvIntro from "@/components/amsa-dcv/AmsaDcvIntro";
import AmsaDcvLocations from "@/components/amsa-dcv/AmsaDcvLocations";
import AmsaDcvProcess from "@/components/amsa-dcv/AmsaDcvProcess";
import AmsaDcvRelated from "@/components/amsa-dcv/AmsaDcvRelated";
import AmsaDcvRequirements from "@/components/amsa-dcv/AmsaDcvRequirements";
import AmsaDcvScope from "@/components/amsa-dcv/AmsaDcvScope";
import AmsaDcvSupport from "@/components/amsa-dcv/AmsaDcvSupport";
import AmsaDcvVessels from "@/components/amsa-dcv/AmsaDcvVessels";
import CTA from "@/components/common/CTA";
import RelatedGuidesStrip from "@/components/guides/RelatedGuidesStrip";
import Breadcrumbs from "@/components/seo/Breadcrumbs";


export const metadata = pageMetadata.amsaDcv;

export default function AmsaDcvMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "AMSA DCV Marine Surveyor" },
            ]}
            seo={{
              page: pageSeo.amsaDcv,
              webpageType: "WebPage",
            service: {
                name: "AMSA DCV Marine Surveyor Services",
                description: "Marine surveyor support for domestic commercial vessel operators, including DCV inspection preparation, documentation review and marine inspection services."
              }
            }}
          />
        </div>
      </div>
      <AmsaDcvHero />
      <AmsaDcvIntro />
      <AmsaDcvSupport />
      <AmsaDcvScope />
      <AmsaDcvVessels />
      <AmsaDcvProcess />
      <AmsaDcvRequirements />
      <AmsaDcvGallery />
      <AmsaDcvLocations />
      <RelatedGuidesStrip
        title="DCV and inspection guides"
        slugs={[
          "australian-dcv-survey-requirements",
          "marine-inspection-preparation-checklist",
        ]}
      />
      <AmsaDcvRelated />
      <AmsaDcvFaq />
      <CTA
        eyebrow="AMSA DCV MARINE SURVEY SUPPORT"
        title="Need an AMSA DCV Marine Surveyor?"
        description="Contact PMS Peace Marine Services to discuss your vessel type, survey requirements, location and inspection scope."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
