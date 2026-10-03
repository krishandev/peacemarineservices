import { pageMetadata, pageSeo } from "@/lib/page-seo";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.privacy;

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy", href: "/privacy-policy/" },
            ]}
            seo={{
              page: pageSeo.privacy,
              webpageType: "WebPage"
            }}
          />
        </div>
      </div>
      <PrivacyContent />
      <CTA
        variant="light"
        eyebrow="Marine Surveying & Inspection"
        title="Need to discuss a marine inspection or survey?"
        description="Contact PMS Peace Marine Services to talk about your vessel, inspection requirements, location and preferred timing."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
