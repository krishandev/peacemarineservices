import { pageMetadata, pageSeo } from "@/lib/page-seo";
import CargoClaims from "@/components/cargo-surveyor/CargoClaims";
import CargoCondition from "@/components/cargo-surveyor/CargoCondition";
import CargoCover from "@/components/cargo-surveyor/CargoCover";
import CargoDocs from "@/components/cargo-surveyor/CargoDocs";
import CargoFaq from "@/components/cargo-surveyor/CargoFaq";
import CargoHero from "@/components/cargo-surveyor/CargoHero";
import CargoLocations from "@/components/cargo-surveyor/CargoLocations";
import CargoProcess from "@/components/cargo-surveyor/CargoProcess";
import CargoRelated from "@/components/cargo-surveyor/CargoRelated";
import CargoWhat from "@/components/cargo-surveyor/CargoWhat";
import CargoWho from "@/components/cargo-surveyor/CargoWho";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.cargo;

export default function CargoSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Cargo Surveyor" },
            ]}
            seo={{
              page: pageSeo.cargo,
              webpageType: "WebPage",
            service: {
                name: "Cargo Surveyor Services",
                description: "Cargo surveyor services covering cargo condition, loading and discharge observations, quantity documentation, damage assessment and survey reporting."
              }
            }}
          />
        </div>
      </div>
      <CargoHero />
      <CargoWhat />
      <CargoCover />
      <CargoCondition />
      <CargoDocs />
      <CargoProcess />
      <CargoWho />
      <CargoClaims />
      <CargoLocations />
      <CargoRelated />
      <CargoFaq />
      <CTA
        eyebrow="Cargo Survey Services"
        title="Need a Cargo Surveyor?"
        description="Arrange cargo survey support for vessel, cargo condition, loading, discharge and cargo-related inspection requirements within the agreed survey scope."
        primaryLabel="Request a Cargo Survey"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
