import { pageMetadata, pageSeo } from "@/lib/page-seo";
import DampierCoverage from "@/components/dampier/DampierCoverage";
import DampierExtra from "@/components/dampier/DampierExtra";
import DampierFaq from "@/components/dampier/DampierFaq";
import DampierHero from "@/components/dampier/DampierHero";
import DampierInspections from "@/components/dampier/DampierInspections";
import DampierIntro from "@/components/dampier/DampierIntro";
import DampierProcess from "@/components/dampier/DampierProcess";
import DampierRelated from "@/components/dampier/DampierRelated";
import DampierServices from "@/components/dampier/DampierServices";
import DampierSurveys from "@/components/dampier/DampierSurveys";
import DampierWhy from "@/components/dampier/DampierWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.dampier;

export default function DampierMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Dampier" },
            ]}
            seo={{
              page: pageSeo.dampier,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Dampier",
                description: "Marine surveyor and inspection services in Dampier, Western Australia, including vessel safety, AMSA/DCV preparation, cargo, bunker and technical inspection support.",
                areaServed: "Dampier, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <DampierHero />
      <DampierIntro />
      <DampierInspections />
      <DampierServices />
      <DampierSurveys />
      <DampierExtra />
      <DampierWhy />
      <DampierCoverage />
      <DampierProcess />
      <DampierRelated />
      <DampierFaq />
      <CTA
        eyebrow="Marine Surveying in Dampier"
        title="Need a Marine Surveyor in Dampier?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, marine survey, audit or technical support requirements in Dampier and the Pilbara."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
