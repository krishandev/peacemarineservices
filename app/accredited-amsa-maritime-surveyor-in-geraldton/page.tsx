import { pageMetadata, pageSeo } from "@/lib/page-seo";
import GeraldtonCoverage from "@/components/geraldton/GeraldtonCoverage";
import GeraldtonFaq from "@/components/geraldton/GeraldtonFaq";
import GeraldtonHero from "@/components/geraldton/GeraldtonHero";
import GeraldtonIntro from "@/components/geraldton/GeraldtonIntro";
import GeraldtonProcess from "@/components/geraldton/GeraldtonProcess";
import GeraldtonSafety from "@/components/geraldton/GeraldtonSafety";
import GeraldtonServices from "@/components/geraldton/GeraldtonServices";
import GeraldtonSupport from "@/components/geraldton/GeraldtonSupport";
import GeraldtonSurveys from "@/components/geraldton/GeraldtonSurveys";
import GeraldtonWhy from "@/components/geraldton/GeraldtonWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.geraldton;

export default function GeraldtonMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Geraldton" },
            ]}
            seo={{
              page: pageSeo.geraldton,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Geraldton",
                description: "Marine surveyor and marine inspection services in Geraldton, Western Australia, including vessel safety, cargo, bunker, technical and DCV preparation support.",
                areaServed: "Geraldton, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <GeraldtonHero />
      <GeraldtonIntro />
      <GeraldtonServices />
      <GeraldtonSafety />
      <GeraldtonSurveys />
      <GeraldtonSupport />
      <GeraldtonWhy />
      <GeraldtonCoverage />
      <GeraldtonProcess />
      <GeraldtonFaq />
      <CTA
        eyebrow="Marine Surveying in Geraldton"
        title="Need Marine Surveyor or Inspection Support in Geraldton?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred timing."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
