import { pageMetadata, pageSeo } from "@/lib/page-seo";
import SafetyVettingCompare from "@/components/safety-vetting/SafetyVettingCompare";
import SafetyVettingCrew from "@/components/safety-vetting/SafetyVettingCrew";
import SafetyVettingDocs from "@/components/safety-vetting/SafetyVettingDocs";
import SafetyVettingFaq from "@/components/safety-vetting/SafetyVettingFaq";
import SafetyVettingFrameworks from "@/components/safety-vetting/SafetyVettingFrameworks";
import SafetyVettingHero from "@/components/safety-vetting/SafetyVettingHero";
import SafetyVettingIntro from "@/components/safety-vetting/SafetyVettingIntro";
import SafetyVettingLocations from "@/components/safety-vetting/SafetyVettingLocations";
import SafetyVettingPre from "@/components/safety-vetting/SafetyVettingPre";
import SafetyVettingProcess from "@/components/safety-vetting/SafetyVettingProcess";
import SafetyVettingRelated from "@/components/safety-vetting/SafetyVettingRelated";
import SafetyVettingReport from "@/components/safety-vetting/SafetyVettingReport";
import SafetyVettingSafety from "@/components/safety-vetting/SafetyVettingSafety";
import SafetyVettingWho from "@/components/safety-vetting/SafetyVettingWho";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.safetyVetting;

export default function SafetyVettingInspectorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Safety Vetting Inspector in Australia" },
            ]}
            seo={{
              page: pageSeo.safetyVetting,
              webpageType: "WebPage",
            service: {
                name: "Safety Vetting and Pre-Vetting Inspection Services",
                description: "Safety vetting and pre-vetting inspection support covering vessel condition, safety equipment, documentation, crew readiness and operational preparedness."
              }
            }}
          />
        </div>
      </div>
      <SafetyVettingHero />
      <SafetyVettingIntro />
      <SafetyVettingPre />
      <SafetyVettingSafety />
      <SafetyVettingCrew />
      <SafetyVettingDocs />
      <SafetyVettingProcess />
      <SafetyVettingFrameworks />
      <SafetyVettingCompare />
      <SafetyVettingWho />
      <SafetyVettingReport />
      <SafetyVettingLocations />
      <SafetyVettingRelated />
      <SafetyVettingFaq />
      <CTA
        eyebrow="Safety Vetting Inspection Support"
        title="Prepare Your Vessel for a Safety Vetting Inspection"
        description="Speak with PMS Peace Marine Services about your vessel's safety vetting, pre-vetting or marine inspection requirements."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
