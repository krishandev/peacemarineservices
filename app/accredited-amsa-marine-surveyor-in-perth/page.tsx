import { pageMetadata, pageSeo } from "@/lib/page-seo";
import PerthCoverage from "@/components/perth/PerthCoverage";
import PerthFaq from "@/components/perth/PerthFaq";
import PerthHero from "@/components/perth/PerthHero";
import PerthInspections from "@/components/perth/PerthInspections";
import PerthIntro from "@/components/perth/PerthIntro";
import PerthProcess from "@/components/perth/PerthProcess";
import PerthRelated from "@/components/perth/PerthRelated";
import PerthRelatedSupport from "@/components/perth/PerthRelatedSupport";
import PerthServices from "@/components/perth/PerthServices";
import PerthWhy from "@/components/perth/PerthWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.perth;

export default function PerthMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Perth" },
            ]}
            seo={{
              page: pageSeo.perth,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Perth",
                description: "Marine surveyor and inspection services in Perth, Western Australia, including vessel inspections, AMSA/DCV preparation, pre-purchase, cargo, bunker and technical support.",
                areaServed: "Perth, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <PerthHero />
      <PerthIntro />
      <PerthInspections />
      <PerthServices />
      <PerthRelatedSupport />
      <PerthWhy />
      <PerthCoverage />
      <PerthProcess />
      <PerthRelated />
      <PerthFaq />
      <CTA
        eyebrow="Marine Surveying in Perth"
        title="Need a Marine Surveyor in Perth?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, marine survey, audit or technical support requirements in Perth and Western Australia."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
