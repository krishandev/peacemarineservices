import type { Metadata } from "next";
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
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute:
      "AMSA DCV Marine Surveyor Australia | Domestic Commercial Vessel Surveys | PMS",
  },
  description:
    "PMS Peace Marine Services provides AMSA DCV marine survey and inspection support for domestic commercial vessels across Australia and Western Australia.",
  alternates: {
    canonical: "/amsa-dcv-marine-surveyor/",
  },
};

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
