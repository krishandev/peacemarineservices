import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

const relatedHrefs = [
  "/marine-safety-inspection-in-australia/",
  "/amsa-dcv-marine-surveyor/",
  "/flag-state-inspection/",
  "/internal-audits-for-ism-isps-and-mlc/",
  "/pre-amsa-inspection/",
  "/pre-psc-inspection-in-australia/",
  "/technical-inspection-and-marine-engineering-consultancy/",
] as const;

const relatedServices = relatedHrefs
  .map((href) => services.find((service) => service.href === href))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function SafetyVettingRelated() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <ServiceGrid
          services={relatedServices}
          title="Related Marine Services"
          description="Other PMS survey, inspection and consultancy services that may be relevant depending on the vessel and requirement."
        />
      </div>
    </div>
  );
}
