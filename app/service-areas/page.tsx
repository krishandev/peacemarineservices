import type { Metadata } from "next";
import ServiceAreasFaqSection from "@/components/service-areas/ServiceAreasFaqSection";
import ServiceAreasHero from "@/components/service-areas/ServiceAreasHero";
import ServiceAreasIntro from "@/components/service-areas/ServiceAreasIntro";
import ServiceAreasLocations from "@/components/service-areas/ServiceAreasLocations";
import ServiceAreasPorts from "@/components/service-areas/ServiceAreasPorts";
import ServiceAreasProcess from "@/components/service-areas/ServiceAreasProcess";
import ServiceAreasServices from "@/components/service-areas/ServiceAreasServices";
import ServiceAreasWhy from "@/components/service-areas/ServiceAreasWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute: "Marine Surveyor Service Areas Western Australia | PMS",
  },
  description:
    "Explore PMS Peace Marine Services coverage across Perth, Fremantle, Kwinana, Bunbury, Albany, Esperance, Geraldton, Port Hedland, Dampier, Karratha and the Pilbara for marine surveying and vessel inspection services.",
  alternates: {
    canonical: "/service-areas/",
  },
};

export default function ServiceAreasPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas" },
            ]}
          />
        </div>
      </div>
      <ServiceAreasHero />
      <ServiceAreasIntro />
      <ServiceAreasLocations />
      <ServiceAreasPorts />
      <ServiceAreasServices />
      <ServiceAreasProcess />
      <ServiceAreasWhy />
      <ServiceAreasFaqSection />
      <CTA
        eyebrow="Marine Services Across Western Australia"
        title="Need a Marine Surveyor in Your Area?"
        description="Contact PMS Peace Marine Services to discuss your vessel location, inspection requirements and marine service needs."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
