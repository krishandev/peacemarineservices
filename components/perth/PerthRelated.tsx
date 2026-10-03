import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

export default function PerthRelated() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <ServiceGrid
          services={services}
          title="Related Marine Services"
          description="PMS marine surveying, inspection, audit and consultancy services that may be relevant depending on the vessel, operation and agreed scope."
        />
      </div>
    </div>
  );
}
