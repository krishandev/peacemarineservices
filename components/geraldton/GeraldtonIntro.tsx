import Link from "next/link";

const situations = [
  "Commercial vessel operations calling at or based around Geraldton",
  "Coastal and regional maritime operations in the Mid West",
  "Vessel condition inspections",
  "Marine safety checks",
  "Domestic commercial vessel preparation",
  "Vessel maintenance, repairs and modifications",
  "Machinery and technical inspections",
  "Cargo-related survey requirements",
  "Bunker survey requirements, where applicable",
  "Pre-purchase vessel assessments",
  "Inspection and audit preparation",
  "Documentation and compliance readiness",
  "Safety vetting and Port State Control preparation, where relevant",
] as const;

export default function GeraldtonIntro() {
  return (
    <>
      <section
        aria-labelledby="geraldton-answer-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-answer-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Services in Geraldton
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS Peace Marine Services provides marine survey, inspection,
              technical consultancy, audit and inspection-preparation support in
              Geraldton, depending on the agreed scope. Work may include marine
              safety inspections, AMSA and DCV inspection preparation, pre-AMSA
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
        aria-labelledby="geraldton-context-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-context-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Support in Geraldton, Western Australia
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Geraldton is a Mid West regional commercial port on Western
            Australia&apos;s west coast, between the Perth metropolitan ports and
            the northern Pilbara. Inspection requests often relate to visiting
            commercial ships, coastal and regional vessels, cargo-related survey
            work, and documentation or safety checks that can be completed while
            a vessel is alongside. PMS does not operate a physical office in
            Geraldton. A full list of{" "}
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
