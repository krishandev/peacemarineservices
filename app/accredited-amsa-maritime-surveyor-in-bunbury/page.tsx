import { pageMetadata, pageSeo } from "@/lib/page-seo";
import BunburyCoverage from "@/components/bunbury/BunburyCoverage";
import BunburyExtra from "@/components/bunbury/BunburyExtra";
import BunburyFaq from "@/components/bunbury/BunburyFaq";
import BunburyHero from "@/components/bunbury/BunburyHero";
import BunburyInspections from "@/components/bunbury/BunburyInspections";
import BunburyIntro from "@/components/bunbury/BunburyIntro";
import BunburyProcess from "@/components/bunbury/BunburyProcess";
import BunburyRelated from "@/components/bunbury/BunburyRelated";
import BunburyServices from "@/components/bunbury/BunburyServices";
import BunburySurveys from "@/components/bunbury/BunburySurveys";
import BunburyWhy from "@/components/bunbury/BunburyWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.bunbury;

export default function BunburyMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Bunbury" },
            ]}
            seo={{
              page: pageSeo.bunbury,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Bunbury",
                description: "Marine surveyor and inspection services in Bunbury, Western Australia, including DCV support, vessel inspections, technical assessments and marine consultancy.",
                areaServed: "Bunbury, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <BunburyHero />
      <BunburyIntro />
      <BunburyInspections />
      <BunburyServices />
      <BunburySurveys />
      <BunburyExtra />
      <BunburyWhy />
      <BunburyCoverage />
      <BunburyProcess />
      <BunburyRelated />
      <BunburyFaq />
      <CTA
        eyebrow="Marine Surveying in Bunbury"
        title="Need a Marine Surveyor in Bunbury?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, marine survey, audit or technical support requirements in Bunbury and Western Australia."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
