import { pageMetadata, pageSeo } from "@/lib/page-seo";
import PortHedlandCoverage from "@/components/port-hedland/PortHedlandCoverage";
import PortHedlandExtra from "@/components/port-hedland/PortHedlandExtra";
import PortHedlandFaq from "@/components/port-hedland/PortHedlandFaq";
import PortHedlandHero from "@/components/port-hedland/PortHedlandHero";
import PortHedlandInspections from "@/components/port-hedland/PortHedlandInspections";
import PortHedlandIntro from "@/components/port-hedland/PortHedlandIntro";
import PortHedlandProcess from "@/components/port-hedland/PortHedlandProcess";
import PortHedlandRelated from "@/components/port-hedland/PortHedlandRelated";
import PortHedlandServices from "@/components/port-hedland/PortHedlandServices";
import PortHedlandSurveys from "@/components/port-hedland/PortHedlandSurveys";
import PortHedlandWhy from "@/components/port-hedland/PortHedlandWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.portHedland;

export default function PortHedlandMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Port Hedland" },
            ]}
            seo={{
              page: pageSeo.portHedland,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Port Hedland",
                description: "Marine surveyor and inspection services in Port Hedland and the Pilbara, including vessel safety, cargo, bunker, technical and DCV preparation support.",
                areaServed: "Port Hedland, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <PortHedlandHero />
      <PortHedlandIntro />
      <PortHedlandInspections />
      <PortHedlandServices />
      <PortHedlandSurveys />
      <PortHedlandExtra />
      <PortHedlandWhy />
      <PortHedlandCoverage />
      <PortHedlandProcess />
      <PortHedlandRelated />
      <PortHedlandFaq />
      <CTA
        eyebrow="Marine Surveying in Port Hedland"
        title="Need a Marine Surveyor in Port Hedland?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, marine survey, audit or technical support requirements in Port Hedland and the Pilbara."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
