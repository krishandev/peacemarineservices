import { pageMetadata, pageSeo } from "@/lib/page-seo";
import AboutCredentials from "@/components/about/AboutCredentials";
import AboutHero from "@/components/about/AboutHero";
import AboutMarineWork from "@/components/about/AboutMarineWork";
import AboutServiceAreas from "@/components/about/AboutServiceAreas";
import ComplianceApproach from "@/components/about/ComplianceApproach";
import ExperienceCommitment from "@/components/about/ExperienceCommitment";
import OurValues from "@/components/about/OurValues";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhoWeSupport from "@/components/about/WhoWeSupport";
import WhyWorkWithPms from "@/components/about/WhyWorkWithPms";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";


export const metadata = pageMetadata.about;

export default function AboutUsPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]}
            seo={{
              page: pageSeo.about,
              webpageType: "AboutPage"
            }}
          />
        </div>
      </div>
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <WhoWeSupport />
      <ExperienceCommitment />
      <ComplianceApproach />
      <OurValues />
      <AboutCredentials />
      <AboutMarineWork />
      <WhyWorkWithPms />
      <AboutServiceAreas />
      <CTA
        eyebrow="Marine Surveying & Inspection Support"
        title="Need a Marine Surveyor or Marine Inspection?"
        description="Contact PMS Peace Marine Services to discuss your vessel inspection, survey, auditing or marine consultancy requirements."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
