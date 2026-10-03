import { pageMetadata, pageSeo } from "@/lib/page-seo";
import InternalAuditsFaq from "@/components/internal-audits/InternalAuditsFaq";
import InternalAuditsGallery from "@/components/internal-audits/InternalAuditsGallery";
import InternalAuditsHero from "@/components/internal-audits/InternalAuditsHero";
import InternalAuditsIntro from "@/components/internal-audits/InternalAuditsIntro";
import InternalAuditsLocations from "@/components/internal-audits/InternalAuditsLocations";
import InternalAuditsProcess from "@/components/internal-audits/InternalAuditsProcess";
import InternalAuditsRelated from "@/components/internal-audits/InternalAuditsRelated";
import InternalAuditsScope from "@/components/internal-audits/InternalAuditsScope";
import InternalAuditsTypes from "@/components/internal-audits/InternalAuditsTypes";
import InternalAuditsWho from "@/components/internal-audits/InternalAuditsWho";
import InternalAuditsWhy from "@/components/internal-audits/InternalAuditsWhy";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";


export const metadata = pageMetadata.internalAudits;

export default function InternalAuditsPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Internal Audits for ISM, ISPS and MLC" },
            ]}
            seo={{
              page: pageSeo.internalAudits,
              webpageType: "WebPage",
            service: {
                name: "ISM, ISPS and MLC Internal Audit Services",
                description: "Internal audit services for ISM, ISPS and MLC systems, including audit preparation, evidence review, findings and corrective action support."
              }
            }}
          />
        </div>
      </div>
      <InternalAuditsHero />
      <InternalAuditsIntro />
      <InternalAuditsWhy />
      <InternalAuditsTypes />
      <InternalAuditsScope />
      <InternalAuditsProcess />
      <InternalAuditsWho />
      <InternalAuditsGallery />
      <InternalAuditsLocations />
      <InternalAuditsRelated />
      <InternalAuditsFaq />
      <CTA
        eyebrow="ISM • ISPS • MLC AUDIT SUPPORT"
        title="Need an Internal Maritime Audit?"
        description="Contact PMS Peace Marine Services to discuss your ISM, ISPS or MLC audit requirements, vessel, company and audit scope."
        primaryLabel="Request an Audit"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
