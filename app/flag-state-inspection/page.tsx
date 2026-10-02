import type { Metadata } from "next";
import FlagStateAudience from "@/components/flag-state/FlagStateAudience";
import FlagStateCompare from "@/components/flag-state/FlagStateCompare";
import FlagStateFaq from "@/components/flag-state/FlagStateFaq";
import FlagStateFindings from "@/components/flag-state/FlagStateFindings";
import FlagStateGallery from "@/components/flag-state/FlagStateGallery";
import FlagStateHero from "@/components/flag-state/FlagStateHero";
import FlagStateIntro from "@/components/flag-state/FlagStateIntro";
import FlagStateLocations from "@/components/flag-state/FlagStateLocations";
import FlagStateProcess from "@/components/flag-state/FlagStateProcess";
import FlagStateRelated from "@/components/flag-state/FlagStateRelated";
import FlagStateScope from "@/components/flag-state/FlagStateScope";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Flag State Inspection Services Australia | PMS Peace Marine Services",
  },
  description:
    "PMS Peace Marine Services provides Flag State inspection and pre-inspection support for vessel owners and operators across Australia, including key ports in Western Australia.",
  alternates: {
    canonical: "/flag-state-inspection/",
  },
};

export default function FlagStateInspectionPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Flag State Inspection" },
            ]}
          />
        </div>
      </div>
      <FlagStateHero />
      <FlagStateIntro />
      <FlagStateScope />
      <FlagStateAudience />
      <FlagStateProcess />
      <FlagStateCompare />
      <FlagStateFindings />
      <FlagStateGallery />
      <FlagStateLocations />
      <FlagStateRelated />
      <FlagStateFaq />
      <CTA
        eyebrow="FLAG STATE INSPECTION SUPPORT"
        title="Need Flag State Inspection Support?"
        description="Contact PMS Peace Marine Services to discuss your vessel, flag State, inspection requirements and location."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
