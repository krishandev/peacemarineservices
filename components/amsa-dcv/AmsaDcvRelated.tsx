import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

const relatedHrefs = [
  "/marine-safety-inspection-in-australia/",
  "/pre-amsa-inspection/",
  "/flag-state-inspection/",
  "/our-services/pre-psc-inspection-in-australia/",
  "/class-related-consultant/",
  "/our-services/technical-inspection-and-marine-engineering-consultancy/",
  "/pre-purchase-inspection/",
] as const;

const relatedServices = relatedHrefs
  .map((href) => services.find((service) => service.href === href))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function AmsaDcvRelated() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <ServiceGrid
          services={relatedServices}
          title="Related Marine Services"
          description="Other PMS survey and inspection services that may be relevant depending on the vessel and requirement."
        />
      </div>
    </div>
  );
}
