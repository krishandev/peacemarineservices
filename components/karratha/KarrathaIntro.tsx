import Link from "next/link";

const situations = [
  "Commercial vessel operations connected with Karratha and nearby Dampier",
  "Offshore and coastal maritime activities, where inspection support is agreed",
  "Vessel condition inspections",
  "Marine safety checks",
  "Domestic commercial vessel preparation",
  "Vessel repairs and modifications",
  "Machinery and technical inspections",
  "Cargo-related survey requirements",
  "Bunker survey requirements, where applicable",
  "Inspection and audit preparation",
  "Documentation and compliance readiness",
  "Pre-purchase assessments",
  "Pre-vetting and Port State Control preparation",
] as const;

export default function KarrathaIntro() {
  return (
    <>
      <section
        aria-labelledby="karratha-answer-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="karratha-answer-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Services in Karratha
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS Peace Marine Services can provide marine survey, inspection,
              technical consultancy, audit and inspection-preparation support in
              Karratha, depending on the requested scope. Work may include
              marine safety inspections, AMSA and DCV inspection preparation,
              pre-AMSA inspections, pre-purchase marine inspections, cargo
              surveying, bunker surveying, technical marine inspections, marine
              engineering consultancy, Flag State inspection preparation,
              pre-Port State Control inspection support, safety vetting or
              pre-vetting support, ISM, ISPS and MLC internal audits, and
              class-related marine consultancy.
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
        aria-labelledby="karratha-context-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="karratha-context-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Support in Karratha, Western Australia
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Karratha is the regional centre for the nearby Dampier industrial
            harbour and other Pilbara marine activity. Inspection requests are
            often arranged from Karratha for vessels alongside at nearby berths,
            coastal support craft, or ships calling in the wider Karratha–Dampier
            area. PMS does not operate a physical office in Karratha. Work is
            arranged around the vessel, access, timing and the agreed inspection
            requirement. A full list of{" "}
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
