import type { Metadata } from "next";
import ServicesApproach from "@/components/services/ServicesApproach";
import ServicesFaqSection from "@/components/services/ServicesFaqSection";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesInAction from "@/components/services/ServicesInAction";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesLocations from "@/components/services/ServicesLocations";
import ServicesSupport from "@/components/services/ServicesSupport";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Our Services | Marine Surveyor & Inspection Services Australia | PMS",
  },
  description:
    "Explore marine surveying, vessel inspection, marine audits, compliance support, cargo surveying, bunker surveying and technical marine services from PMS Peace Marine Services across Australia.",
  alternates: {
    canonical: "/our-services/",
  },
};

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
