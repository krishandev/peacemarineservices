import type { Metadata } from "next";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactDirect from "@/components/contact/ContactDirect";
import ContactEnquiryForm from "@/components/contact/ContactEnquiryForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import ContactServiceAreas from "@/components/contact/ContactServiceAreas";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute: "Contact PMS Peace Marine Services | Marine Surveyor Australia",
  },
  description:
    "Contact PMS Peace Marine Services for marine surveying, vessel inspections, audits, compliance support and marine consultancy across Western Australia and Australia.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
        </div>
      </div>
      <ContactHero />
      <section
        aria-labelledby="contact-details-heading"
        className="bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 py-14 lg:grid-cols-12 lg:gap-12 lg:px-6 lg:py-16">
          <div className="min-w-0 lg:col-span-5">
            <ContactDetails />
          </div>
          <div className="min-w-0 lg:col-span-7">
            <ContactEnquiryForm />
          </div>
        </div>
      </section>
      <ContactDirect />
      <ContactServiceAreas />
      <ContactMap />
      <CTA
        eyebrow="Marine Surveying & Inspection Support"
        title="Need to Discuss a Marine Inspection?"
        description="Speak with PMS Peace Marine Services about your vessel inspection, survey, audit or marine consultancy requirements."
        primaryLabel="Call +61 456 980 609"
        primaryHref="tel:+61456980609"
        secondaryLabel="View Our Services"
        secondaryHref="/our-services/"
      />
    </main>
  );
}
