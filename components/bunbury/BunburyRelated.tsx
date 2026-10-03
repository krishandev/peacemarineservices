import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

const relatedHrefs = [
  "/marine-safety-inspection-in-australia/",
  "/amsa-dcv-marine-surveyor/",
  "/flag-state-inspection/",
  "/class-related-consultant/",
  "/internal-audits-for-ism-isps-and-mlc/",
  "/pre-purchase-inspection/",
  "/pre-amsa-inspection/",
  "/cargo-surveyor/",
  "/technical-inspection-and-marine-engineering-consultancy/",
  "/bunker-surveyor/",
  "/pre-psc-inspection-in-australia/",
  "/safety-vetting-inspector-in-australia/",
] as const;

const relatedServices = relatedHrefs
  .map((href) => services.find((service) => service.href === href))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function BunburyRelated() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <ServiceGrid
          services={relatedServices}
          title="Related Marine Services"
          description="PMS marine surveying, inspection, audit and consultancy services that may be relevant depending on the vessel, operation and agreed scope."
        />
      </div>
    </div>
  );
}
