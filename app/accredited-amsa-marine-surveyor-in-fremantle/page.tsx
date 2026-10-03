import { pageMetadata, pageSeo } from "@/lib/page-seo";
import FremantleCoverage from "@/components/fremantle/FremantleCoverage";
import FremantleFaq from "@/components/fremantle/FremantleFaq";
import FremantleHero from "@/components/fremantle/FremantleHero";
import FremantleInspections from "@/components/fremantle/FremantleInspections";
import FremantleIntro from "@/components/fremantle/FremantleIntro";
import FremantleProcess from "@/components/fremantle/FremantleProcess";
import FremantleRelated from "@/components/fremantle/FremantleRelated";
import FremantleServices from "@/components/fremantle/FremantleServices";
import FremantleSurveys from "@/components/fremantle/FremantleSurveys";
import FremantleWhy from "@/components/fremantle/FremantleWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.fremantle;

export default function FremantleMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Fremantle" },
            ]}
            seo={{
              page: pageSeo.fremantle,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Fremantle",
                description: "Marine surveyor and marine inspection services in Fremantle, Western Australia, including vessel surveys, cargo, bunker, technical and compliance preparation.",
                areaServed: "Fremantle, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <FremantleHero />
      <FremantleIntro />
      <FremantleInspections />
      <FremantleServices />
      <FremantleSurveys />
      <FremantleWhy />
      <FremantleCoverage />
      <FremantleProcess />
      <FremantleRelated />
      <FremantleFaq />
      <CTA
        eyebrow="Marine Surveying in Fremantle"
        title="Need a Marine Surveyor in Fremantle?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, marine survey, audit or technical support requirements in Fremantle and Western Australia."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
