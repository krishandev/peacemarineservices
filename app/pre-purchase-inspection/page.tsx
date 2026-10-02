import type { Metadata } from "next";
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
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const title =
  "Pre-Purchase Marine Inspection Australia | Vessel Condition Assessment | PMS";
const description =
  "Professional pre-purchase vessel inspections and condition assessments in Australia. PMS Peace Marine Services helps buyers understand vessel condition, identify potential issues and assess risks before purchasing a vessel.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/pre-purchase-inspection/",
  },
  openGraph: {
    title,
    description,
    url: "/pre-purchase-inspection/",
    type: "website",
    images: [
      {
        url: "/images/services/pre-purchase-inspection.webp",
        alt: "Surveyor inspecting the deck and fittings of a vessel before purchase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

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
