import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import CredentialsSection from "@/components/home/CredentialsSection";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import MarineWorkSection from "@/components/home/MarineWorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import ServicesSection from "@/components/home/ServicesSection";
import TrustIntro from "@/components/home/TrustIntro";
import CTA from "@/components/common/CTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "AMSA Marine Surveyor Australia | Marine Inspector & Auditor | PMS",
  },
  description:
    "PMS Peace Marine Services provides marine surveying, vessel inspection, auditing and consultancy services across Western Australia, including AMSA-related survey support.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrustIntro />
      <ServicesSection />
      <AboutSection />
      <ServiceAreasSection />
      <CredentialsSection />
      <ProcessSection />
      <MarineWorkSection />
      <FAQSection />
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
