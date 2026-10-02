import type { Metadata } from "next";
import PreAmsaCompare from "@/components/pre-amsa/PreAmsaCompare";
import PreAmsaCover from "@/components/pre-amsa/PreAmsaCover";
import PreAmsaDocs from "@/components/pre-amsa/PreAmsaDocs";
import PreAmsaFaq from "@/components/pre-amsa/PreAmsaFaq";
import PreAmsaHero from "@/components/pre-amsa/PreAmsaHero";
import PreAmsaLocations from "@/components/pre-amsa/PreAmsaLocations";
import PreAmsaPrepare from "@/components/pre-amsa/PreAmsaPrepare";
import PreAmsaProcess from "@/components/pre-amsa/PreAmsaProcess";
import PreAmsaRelated from "@/components/pre-amsa/PreAmsaRelated";
import PreAmsaWhat from "@/components/pre-amsa/PreAmsaWhat";
import PreAmsaWho from "@/components/pre-amsa/PreAmsaWho";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const title =
  "Pre-AMSA Inspection Australia | Marine Inspection & Survey Preparation | PMS";
const description =
  "Pre-AMSA inspection and vessel preparation services in Australia. PMS Peace Marine Services helps vessel owners and operators identify potential issues before applicable AMSA-related inspections and surveys.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/pre-amsa-inspection/",
  },
  openGraph: {
    title,
    description,
    url: "/pre-amsa-inspection/",
    type: "website",
    images: [
      {
        url: "/images/services/pre-amsa-inspection.webp",
        alt: "Surveyor on a commercial vessel deck reviewing an inspection checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function PreAmsaInspectionPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/our-services/" },
              { label: "Pre-AMSA Inspection" },
            ]}
          />
        </div>
      </div>
      <PreAmsaHero />
      <PreAmsaWhat />
      <PreAmsaCover />
      <PreAmsaPrepare />
      <PreAmsaProcess />
      <PreAmsaCompare />
      <PreAmsaWho />
      <PreAmsaDocs />
      <PreAmsaLocations />
      <PreAmsaRelated />
      <PreAmsaFaq />
      <CTA
        eyebrow="Pre-AMSA Inspection Support"
        title="Preparing for an AMSA-Related Inspection?"
        description="Arrange a professional pre-inspection assessment to identify potential areas requiring attention before an applicable AMSA-related inspection or survey."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
