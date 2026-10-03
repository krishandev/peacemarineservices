import Link from "next/link";

const situations = [
  "Vessel condition inspections during a south-east coast port call",
  "Commercial vessel safety assessments",
  "Domestic commercial vessel preparation",
  "Pre-purchase vessel assessment",
  "Cargo-related survey requirements",
  "Bunker survey requirements, where applicable",
  "Technical inspections of machinery and equipment",
  "Repair and modification inspections",
  "Documentation and compliance readiness",
  "Internal audit support",
  "Preparation before regulatory or third-party inspections",
] as const;

export default function EsperanceIntro() {
  return (
    <>
      <section
        aria-labelledby="esperance-answer-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="esperance-answer-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Services in Esperance
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS Peace Marine Services can provide marine inspection, survey
              and consultancy support for vessels and maritime operations in
              Esperance, depending on the requested scope. Work may include
              marine safety inspections, AMSA and DCV survey preparation,
              pre-AMSA inspections, pre-purchase vessel inspections, cargo
              surveying, bunker surveying, technical marine inspections, marine
              engineering consultancy, Flag State inspection preparation,
              pre-Port State Control inspection support, safety vetting or
              pre-vetting support, ISM, ISPS and MLC internal audits, and
              class-related marine consultancy.
            </p>
            <p>
              PMS provides inspection, consultancy and preparation support. It
              is not AMSA, a Port State Control authority, a Flag State
              authority, a classification society, a charterer or a vetting
              organisation, and does not control those parties&apos; decisions.
              Official regulatory outcomes remain with the relevant competent
              authority. Company background is available on{" "}
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
        aria-labelledby="esperance-context-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="esperance-context-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Surveyor Support in Esperance, Western Australia
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Esperance is a south-east Western Australian commercial port. A
            vessel may need inspection while it is alongside for cargo
            operations, a safety or documentation check, a regional domestic
            vessel assignment, or related marine work supporting fishing and
            harbour activity. Because Esperance is distant from Perth, inspection
            planning often needs to fit around berth access and the vessel&apos;s
            time in port. PMS does not operate a physical office in Esperance.
            A full list of{" "}
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
