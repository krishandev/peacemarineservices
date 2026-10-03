import { pageMetadata, pageSeo } from "@/lib/page-seo";
import EsperanceCoverage from "@/components/esperance/EsperanceCoverage";
import EsperanceFaq from "@/components/esperance/EsperanceFaq";
import EsperanceHero from "@/components/esperance/EsperanceHero";
import EsperanceIntro from "@/components/esperance/EsperanceIntro";
import EsperanceProcess from "@/components/esperance/EsperanceProcess";
import EsperanceSafety from "@/components/esperance/EsperanceSafety";
import EsperanceServices from "@/components/esperance/EsperanceServices";
import EsperanceSupport from "@/components/esperance/EsperanceSupport";
import EsperanceSurveys from "@/components/esperance/EsperanceSurveys";
import EsperanceWhy from "@/components/esperance/EsperanceWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.esperance;

export default function EsperanceMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Esperance" },
            ]}
            seo={{
              page: pageSeo.esperance,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Esperance",
                description: "Marine surveyor and inspection services in Esperance, Western Australia, covering vessel safety, pre-purchase, cargo, bunker and technical marine inspections.",
                areaServed: "Esperance, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <EsperanceHero />
      <EsperanceIntro />
      <EsperanceServices />
      <EsperanceSafety />
      <EsperanceSurveys />
      <EsperanceSupport />
      <EsperanceWhy />
      <EsperanceCoverage />
      <EsperanceProcess />
      <EsperanceFaq />
      <CTA
        eyebrow="Marine Surveying in Esperance"
        title="Need Marine Surveyor or Inspection Support in Esperance?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred timing."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
