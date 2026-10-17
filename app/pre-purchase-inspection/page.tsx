import { pageMetadata, pageSeo } from "@/lib/page-seo";
import PrePurchaseCompare from "@/components/pre-purchase/PrePurchaseCompare";
import PrePurchaseCover from "@/components/pre-purchase/PrePurchaseCover";
import PrePurchaseFaq from "@/components/pre-purchase/PrePurchaseFaq";
import PrePurchaseHero from "@/components/pre-purchase/PrePurchaseHero";
import PrePurchaseLocations from "@/components/pre-purchase/PrePurchaseLocations";
import PrePurchasePrepare from "@/components/pre-purchase/PrePurchasePrepare";
import PrePurchaseProcess from "@/components/pre-purchase/PrePurchaseProcess";
import PrePurchaseRelated from "@/components/pre-purchase/PrePurchaseRelated";
import PrePurchaseWhat from "@/components/pre-purchase/PrePurchaseWhat";
import PrePurchaseWho from "@/components/pre-purchase/PrePurchaseWho";
import CTA from "@/components/common/CTA";
import RelatedGuidesStrip from "@/components/guides/RelatedGuidesStrip";
import Breadcrumbs from "@/components/seo/Breadcrumbs";



export const metadata = pageMetadata.prePurchase;

export default function PrePurchaseInspectionPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Pre-Purchase Inspection" },
            ]}
            seo={{
              page: pageSeo.prePurchase,
              webpageType: "WebPage",
            service: {
                name: "Pre-Purchase Marine Inspection Services",
                description: "Pre-purchase marine inspections to help buyers assess vessel condition, systems, documentation and potential technical issues before acquisition."
              }
            }}
          />
        </div>
      </div>
      <PrePurchaseHero />
      <PrePurchaseWhat />
      <PrePurchaseCover />
      <PrePurchaseWho />
      <PrePurchaseProcess />
      <PrePurchaseCompare />
      <PrePurchasePrepare />
      <PrePurchaseLocations />
      <RelatedGuidesStrip
        title="Buyer and inspection guides"
        slugs={[
          "pre-purchase-vessel-inspection-checklist",
          "marine-inspection-preparation-checklist",
        ]}
      />
      <PrePurchaseRelated />
      <PrePurchaseFaq />
      <CTA
        eyebrow="Pre-Purchase Vessel Inspection"
        title="Planning to Purchase a Vessel?"
        description="Arrange a professional pre-purchase inspection to better understand the vessel's condition before making an informed purchasing decision."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
