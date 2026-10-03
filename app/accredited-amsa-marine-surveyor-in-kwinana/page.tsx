import { pageMetadata, pageSeo } from "@/lib/page-seo";
import KwinanaCoverage from "@/components/kwinana/KwinanaCoverage";
import KwinanaFaq from "@/components/kwinana/KwinanaFaq";
import KwinanaHero from "@/components/kwinana/KwinanaHero";
import KwinanaInspections from "@/components/kwinana/KwinanaInspections";
import KwinanaIntro from "@/components/kwinana/KwinanaIntro";
import KwinanaProcess from "@/components/kwinana/KwinanaProcess";
import KwinanaRelated from "@/components/kwinana/KwinanaRelated";
import KwinanaServices from "@/components/kwinana/KwinanaServices";
import KwinanaSurveys from "@/components/kwinana/KwinanaSurveys";
import KwinanaWhy from "@/components/kwinana/KwinanaWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.kwinana;

export default function KwinanaMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Kwinana" },
            ]}
            seo={{
              page: pageSeo.kwinana,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Kwinana",
                description: "Marine surveyor and inspection services in Kwinana, Western Australia, covering vessel safety, technical inspections, AMSA/DCV preparation and marine consultancy.",
                areaServed: "Kwinana, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <KwinanaHero />
      <KwinanaIntro />
      <KwinanaInspections />
      <KwinanaServices />
      <KwinanaSurveys />
      <KwinanaWhy />
      <KwinanaCoverage />
      <KwinanaProcess />
      <KwinanaRelated />
      <KwinanaFaq />
      <CTA
        eyebrow="Marine Surveying in Kwinana"
        title="Need a Marine Surveyor in Kwinana?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, marine survey, audit or technical support requirements in Kwinana and Western Australia."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
