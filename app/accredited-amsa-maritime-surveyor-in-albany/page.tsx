import { pageMetadata, pageSeo } from "@/lib/page-seo";
import AlbanyCoverage from "@/components/albany/AlbanyCoverage";
import AlbanyFaq from "@/components/albany/AlbanyFaq";
import AlbanyHero from "@/components/albany/AlbanyHero";
import AlbanyIntro from "@/components/albany/AlbanyIntro";
import AlbanyProcess from "@/components/albany/AlbanyProcess";
import AlbanySafety from "@/components/albany/AlbanySafety";
import AlbanyServices from "@/components/albany/AlbanyServices";
import AlbanySupport from "@/components/albany/AlbanySupport";
import AlbanySurveys from "@/components/albany/AlbanySurveys";
import AlbanyWhy from "@/components/albany/AlbanyWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.albany;

export default function AlbanyMarineSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas/" },
              { label: "Albany" },
            ]}
            seo={{
              page: pageSeo.albany,
              webpageType: "WebPage",
            service: {
                name: "Marine Surveyor and Inspection Services in Albany",
                description: "Marine surveyor and marine inspection services in Albany, Western Australia, including vessel safety, pre-purchase, cargo, bunker and technical inspection support.",
                areaServed: "Albany, Western Australia"
              }
            }}
          />
        </div>
      </div>
      <AlbanyHero />
      <AlbanyIntro />
      <AlbanyServices />
      <AlbanySafety />
      <AlbanySurveys />
      <AlbanySupport />
      <AlbanyWhy />
      <AlbanyCoverage />
      <AlbanyProcess />
      <AlbanyFaq />
      <CTA
        eyebrow="Marine Surveying in Albany"
        title="Need Marine Surveyor or Inspection Support in Albany?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred timing."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
