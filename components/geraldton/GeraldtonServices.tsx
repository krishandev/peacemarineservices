import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

const relatedHrefs = [
  "/marine-safety-inspection-in-australia/",
  "/amsa-dcv-marine-surveyor/",
  "/pre-amsa-inspection/",
  "/pre-purchase-inspection/",
  "/cargo-surveyor/",
  "/bunker-surveyor/",
  "/technical-inspection-and-marine-engineering-consultancy/",
  "/flag-state-inspection/",
  "/pre-psc-inspection-in-australia/",
  "/safety-vetting-inspector-in-australia/",
  "/internal-audits-for-ism-isps-and-mlc/",
  "/class-related-consultant/",
] as const;

const geraldtonServices = relatedHrefs
  .map((href) => services.find((service) => service.href === href))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function GeraldtonServices() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <ServiceGrid
          services={geraldtonServices}
          title="Marine Survey & Inspection Services Available in Geraldton"
          description="Depending on vessel type, inspection scope and client requirements, PMS can discuss the marine survey, inspection, audit and consultancy services below. Not every service applies to every vessel."
        />
      </div>
    </div>
  );
}
