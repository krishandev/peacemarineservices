import { pageMetadata, pageSeo } from "@/lib/page-seo";
import ClassConsultantAreas from "@/components/class-consultant/ClassConsultantAreas";
import ClassConsultantFaq from "@/components/class-consultant/ClassConsultantFaq";
import ClassConsultantGallery from "@/components/class-consultant/ClassConsultantGallery";
import ClassConsultantHero from "@/components/class-consultant/ClassConsultantHero";
import ClassConsultantIntro from "@/components/class-consultant/ClassConsultantIntro";
import ClassConsultantLocations from "@/components/class-consultant/ClassConsultantLocations";
import ClassConsultantProcess from "@/components/class-consultant/ClassConsultantProcess";
import ClassConsultantRelated from "@/components/class-consultant/ClassConsultantRelated";
import ClassConsultantSupport from "@/components/class-consultant/ClassConsultantSupport";
import ClassConsultantWho from "@/components/class-consultant/ClassConsultantWho";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";


export const metadata = pageMetadata.classConsultant;

export default function ClassRelatedConsultantPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Class Related Consultant" },
            ]}
            seo={{
              page: pageSeo.classConsultant,
              webpageType: "WebPage",
            service: {
                name: "Class Related Marine Consultancy Services",
                description: "Class-related marine consultancy covering technical inspections, machinery, repairs, modifications and preparation for classification-related requirements."
              }
            }}
          />
        </div>
      </div>
      <ClassConsultantHero />
      <ClassConsultantIntro />
      <ClassConsultantWho />
      <ClassConsultantAreas />
      <ClassConsultantSupport />
      <ClassConsultantProcess />
      <ClassConsultantGallery />
      <ClassConsultantLocations />
      <ClassConsultantRelated />
      <ClassConsultantFaq />
      <CTA
        eyebrow="MARINE TECHNICAL CONSULTANCY"
        title="Need Class Related Marine Consultancy?"
        description="Contact PMS Peace Marine Services to discuss your vessel, technical issue, inspection requirement or class-related project."
        primaryLabel="Request a Consultation"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
