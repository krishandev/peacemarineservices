import Link from "next/link";

const inspectionAreas = [
  "Vessel condition",
  "Structural condition",
  "Machinery",
  "Electrical systems",
  "Safety equipment",
  "Fire-fighting equipment",
  "Life-saving appliances",
  "Navigation and communication equipment",
  "Deck equipment",
  "Emergency preparedness",
  "Documentation",
  "Maintenance records",
  "Environmental protection",
  "Operational readiness",
] as const;

const amsaItems = [
  "Australian Maritime Safety Authority (AMSA) context, where relevant",
  "Domestic Commercial Vessel (DCV) inspection support",
  "Marine Safety (Domestic Commercial Vessel) National Law, where applicable",
  "National Standard for Commercial Vessels (NSCV), where applicable",
  "Preparatory inspection and advisory support within an agreed scope",
] as const;

export default function PerthInspections() {
  return (
    <>
      <section
        aria-labelledby="perth-inspection-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="perth-inspection-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Inspection Services in Perth
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The exact inspection scope depends on the vessel, service requested
            and agreed inspection requirements. Possible inspection areas
            include:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {inspectionAreas.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="perth-amsa-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="perth-amsa-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            AMSA & Domestic Commercial Vessel Inspection Support
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Domestic commercial vessels in Australia operate under a national
              framework administered by the Australian Maritime Safety Authority
              (AMSA). PMS can provide preparation, inspection and advisory
              support where applicable, including{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>
              .
            </p>
            <p>
              PMS is not AMSA and is not a government authority. PMS does not
              guarantee AMSA approval, certification or survey acceptance, and
              cannot make official AMSA decisions. Current requirements should
              be verified against the applicable official requirements.
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {amsaItems.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
