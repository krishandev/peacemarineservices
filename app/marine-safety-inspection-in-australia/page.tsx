import type { Metadata } from "next";
import MarineSafetyAudience from "@/components/marine-safety/MarineSafetyAudience";
import MarineSafetyFaq from "@/components/marine-safety/MarineSafetyFaq";
import MarineSafetyGallery from "@/components/marine-safety/MarineSafetyGallery";
import MarineSafetyHero from "@/components/marine-safety/MarineSafetyHero";
import MarineSafetyIntro from "@/components/marine-safety/MarineSafetyIntro";
import MarineSafetyLocations from "@/components/marine-safety/MarineSafetyLocations";
import MarineSafetyProcess from "@/components/marine-safety/MarineSafetyProcess";
import MarineSafetyRelated from "@/components/marine-safety/MarineSafetyRelated";
import MarineSafetyReporting from "@/components/marine-safety/MarineSafetyReporting";
import MarineSafetyScope from "@/components/marine-safety/MarineSafetyScope";
import MarineSafetyWhy from "@/components/marine-safety/MarineSafetyWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Marine Safety Inspection Services in Australia | PMS Peace Marine Services",
  },
  description:
    "PMS Peace Marine Services provides marine safety inspection services across Australia, helping vessel owners and operators identify safety, operational and compliance issues.",
  alternates: {
    canonical: "/marine-safety-inspection-in-australia/",
  },
};

export default function MarineSafetyInspectionPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Marine Safety Inspection in Australia" },
            ]}
          />
        </div>
      </div>
      <MarineSafetyHero />
      <MarineSafetyIntro />
      <MarineSafetyWhy />
      <MarineSafetyScope />
      <MarineSafetyAudience />
      <MarineSafetyProcess />
      <MarineSafetyReporting />
      <MarineSafetyGallery />
      <MarineSafetyLocations />
      <MarineSafetyRelated />
      <MarineSafetyFaq />
      <CTA
        eyebrow="MARINE SAFETY INSPECTION"
        title="Need a Marine Safety Inspection?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred inspection scope."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
