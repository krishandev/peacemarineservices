import { pageMetadata, pageSeo } from "@/lib/page-seo";
import PilbaraCoverage from "@/components/pilbara/PilbaraCoverage";
import PilbaraFaq from "@/components/pilbara/PilbaraFaq";
import PilbaraHero from "@/components/pilbara/PilbaraHero";
import PilbaraIntro from "@/components/pilbara/PilbaraIntro";
import PilbaraLocations from "@/components/pilbara/PilbaraLocations";
import PilbaraProcess from "@/components/pilbara/PilbaraProcess";
import PilbaraSafety from "@/components/pilbara/PilbaraSafety";
import PilbaraServices from "@/components/pilbara/PilbaraServices";
import PilbaraSupport from "@/components/pilbara/PilbaraSupport";
import PilbaraSurveys from "@/components/pilbara/PilbaraSurveys";
import PilbaraWhy from "@/components/pilbara/PilbaraWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.pilbara;

export default function PilbaraMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Pilbara" },
            ]}
            seo={{
              page: pageSeo.pilbara,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in the Pilbara",
                description: "Marine surveyor and inspection services across the Pilbara, including Karratha, Dampier and Port Hedland, with vessel safety, cargo, bunker and technical support.",
                areaServed: "Pilbara, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <PilbaraHero />
      <PilbaraIntro />
      <PilbaraLocations />
      <PilbaraServices />
      <PilbaraSafety />
      <PilbaraSurveys />
      <PilbaraSupport />
      <PilbaraWhy />
      <PilbaraCoverage />
      <PilbaraProcess />
      <PilbaraFaq />
      <CTA
        eyebrow="Marine Surveying in the Pilbara"
        title="Need Marine Surveyor or Inspection Support in the Pilbara?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred timing."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
