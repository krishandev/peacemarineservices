import Link from "next/link";

const situations = [
  "Commercial vessel operations at more than one port in the region",
  "Coastal and offshore marine activities",
  "Port-related marine operations",
  "Vessel condition inspections",
  "Marine safety checks",
  "Domestic Commercial Vessel preparation",
  "Vessel maintenance, repairs and modifications",
  "Machinery and technical inspections",
  "Cargo-related survey requirements",
  "Bunker survey requirements, where applicable",
  "Pre-purchase vessel assessments",
  "Inspection and audit preparation",
  "Documentation and compliance readiness",
  "Safety vetting and Port State Control preparation",
] as const;

export default function PilbaraIntro() {
  return (
    <>
      <section
        aria-labelledby="pilbara-answer-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pilbara-answer-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Services Across the Pilbara
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS Peace Marine Services provides marine survey, inspection,
              technical consultancy, audit and inspection-preparation support
              across the Pilbara region. Work may include marine safety
              inspections, AMSA and DCV inspection preparation, pre-AMSA
              inspections, pre-purchase vessel inspections, cargo surveying,
              bunker surveying, technical marine inspections, marine engineering
              consultancy, Flag State inspection preparation, pre-Port State
              Control inspection preparation, safety vetting or pre-vetting
              support, ISM, ISPS and MLC internal audits, and class-related
              marine consultancy.
            </p>
            <p>
              PMS provides inspection, consultancy and preparation support. It
              is not AMSA, a Port State Control authority, a Flag State
              authority, a classification society or another competent
              authority, and does not control those parties&apos; decisions.
              Official regulatory outcomes remain with the relevant authority.
              Company background is available on{" "}
              <Link
                href="/about-us/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                About PMS Peace Marine Services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pilbara-context-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pilbara-context-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Support Across the Pilbara, Western Australia
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The Pilbara is a northern Western Australian maritime region where
            commercial ships, harbour craft and coastal support vessels may call
            at more than one location during the same operational period.
            Inspection requests are often tied to the port or berth where the
            vessel is available, rather than to a single town. That is why this
            page covers the region as a whole, while{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-karratha/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Karratha
            </Link>
            ,{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-dampier/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Dampier
            </Link>{" "}
            and{" "}
            <Link
              href="/accredited-amsa-maritime-surveyor-in-port-hedland/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Port Hedland
            </Link>{" "}
            remain separate location pages. PMS does not operate a physical
            office throughout the Pilbara. A full list of{" "}
            <Link
              href="/our-services/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine surveying and inspection services
            </Link>{" "}
            is available on the services page.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {situations.map((item) => (
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
