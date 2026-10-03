import { pageMetadata, pageSeo } from "@/lib/page-seo";
import KarrathaCoverage from "@/components/karratha/KarrathaCoverage";
import KarrathaFaq from "@/components/karratha/KarrathaFaq";
import KarrathaHero from "@/components/karratha/KarrathaHero";
import KarrathaIntro from "@/components/karratha/KarrathaIntro";
import KarrathaProcess from "@/components/karratha/KarrathaProcess";
import KarrathaSafety from "@/components/karratha/KarrathaSafety";
import KarrathaServices from "@/components/karratha/KarrathaServices";
import KarrathaSupport from "@/components/karratha/KarrathaSupport";
import KarrathaSurveys from "@/components/karratha/KarrathaSurveys";
import KarrathaWhy from "@/components/karratha/KarrathaWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.karratha;

export default function KarrathaMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Karratha" },
            ]}
            seo={{
              page: pageSeo.karratha,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Karratha",
                description: "Marine surveyor and inspection services in Karratha, Western Australia, including vessel inspections, DCV preparation, technical consultancy and Pilbara marine support.",
                areaServed: "Karratha, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <KarrathaHero />
      <KarrathaIntro />
      <KarrathaServices />
      <KarrathaSafety />
      <KarrathaSurveys />
      <KarrathaSupport />
      <KarrathaWhy />
      <KarrathaCoverage />
      <KarrathaProcess />
      <KarrathaFaq />
      <CTA
        eyebrow="Marine Surveying in Karratha"
        title="Need Marine Surveyor or Inspection Support in Karratha?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred timing."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
