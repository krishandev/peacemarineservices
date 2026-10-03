import { pageMetadata, pageSeo } from "@/lib/page-seo";
import BunkerClaims from "@/components/bunker-surveyor/BunkerClaims";
import BunkerCompare from "@/components/bunker-surveyor/BunkerCompare";
import BunkerCover from "@/components/bunker-surveyor/BunkerCover";
import BunkerDocs from "@/components/bunker-surveyor/BunkerDocs";
import BunkerFaq from "@/components/bunker-surveyor/BunkerFaq";
import BunkerHero from "@/components/bunker-surveyor/BunkerHero";
import BunkerLocations from "@/components/bunker-surveyor/BunkerLocations";
import BunkerProcess from "@/components/bunker-surveyor/BunkerProcess";
import BunkerQuality from "@/components/bunker-surveyor/BunkerQuality";
import BunkerQuantity from "@/components/bunker-surveyor/BunkerQuantity";
import BunkerRelated from "@/components/bunker-surveyor/BunkerRelated";
import BunkerWhat from "@/components/bunker-surveyor/BunkerWhat";
import BunkerWho from "@/components/bunker-surveyor/BunkerWho";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.bunker;

export default function BunkerSurveyorPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Bunker Surveyor" },
            ]}
            seo={{
              page: pageSeo.bunker,
              webpageType: "WebPage",
            service: {
                name: "Bunker Surveyor Services",
                description: "Bunker survey services covering quantity measurements, bunker delivery documentation, sampling observations and discrepancy reporting."
              }
            }}
          />
        </div>
      </div>
      <BunkerHero />
      <BunkerWhat />
      <BunkerCover />
      <BunkerQuantity />
      <BunkerDocs />
      <BunkerQuality />
      <BunkerProcess />
      <BunkerWho />
      <BunkerCompare />
      <BunkerClaims />
      <BunkerLocations />
      <BunkerRelated />
      <BunkerFaq />
      <CTA
        eyebrow="Bunker Survey Services"
        title="Need a Bunker Surveyor?"
        description="Arrange bunker survey support for fuel quantity, sampling, documentation and bunkering-related inspection requirements within the agreed survey scope."
        primaryLabel="Request a Bunker Survey"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
