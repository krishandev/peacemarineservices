import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

const relatedHrefs = [
  "/marine-safety-inspection-in-australia/",
  "/amsa-dcv-marine-surveyor/",
  "/pre-amsa-inspection/",
  "/flag-state-inspection/",
  "/internal-audits-for-ism-isps-and-mlc/",
  "/technical-inspection-and-marine-engineering-consultancy/",
  "/class-related-consultant/",
  "/cargo-surveyor/",
  "/bunker-surveyor/",
  "/safety-vetting-inspector-in-australia/",
] as const;

const relatedServices = relatedHrefs
  .map((href) => services.find((service) => service.href === href))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function PrePscRelated() {
  return (
    <div className="bg-pms-wash">
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
