import Link from "next/link";

const followUp = [
  "Corrective action",
  "Maintenance",
  "Repairs",
  "Documentation updates",
  "Equipment attention",
  "Crew familiarisation",
  "Further technical investigation",
] as const;

const limitations = [
  "The inspection is performed within an agreed scope",
  "Findings depend on vessel accessibility and condition",
  "The assessment is not an official PSC inspection",
  "Hidden defects may not be identifiable",
  "Specialist testing may be required",
  "Regulatory requirements vary according to vessel, flag, port and circumstances",
  "Final PSC decisions remain with the relevant authority",
  "The service does not guarantee clearance, acceptance, zero deficiencies or freedom from detention",
] as const;

export default function PrePscAfter() {
  return (
    <>
      <section
        aria-labelledby="pre-psc-after-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-after-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Happens After the Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Findings may help the vessel owner or operator prioritize the
            follow-up below. PMS cannot guarantee that the vessel will pass PSC
            after corrective actions. Related technical or class matters can be
            discussed through{" "}
            <Link
              href="/technical-inspection-and-marine-engineering-consultancy/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              technical inspection and marine engineering consultancy
            </Link>{" "}
            or{" "}
            <Link
              href="/class-related-consultant/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              class related consultancy
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {followUp.map((item) => (
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

      <section
        aria-labelledby="pre-psc-limits-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-limits-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Important Information About Pre-PSC Inspections
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A Pre-PSC inspection is a practical readiness assessment, not a
            substitute for official Port State Control. Further context is
            available on{" "}
            <Link
              href="/about-us/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              About PMS Peace Marine Services
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {limitations.map((item) => (
              <li
                key={item}
                className="flex min-w-0 gap-3 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pms-blue"
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="pre-psc-australia-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-australia-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-PSC Inspection Support in Australia
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS provides preparatory inspection support for vessels operating
              in or calling at Australian ports, within its service coverage and
              agreed scope. The Australian Maritime Safety Authority (AMSA) has
              regulatory responsibilities for relevant Australian maritime
              functions.
            </p>
            <p>
              PMS is not AMSA, an Australian Port State Control authority or a
              government authority. PMS does not perform official PSC
              inspections and cannot guarantee AMSA or PSC clearance. Related
              work may include{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>
              ,{" "}
              <Link
                href="/cargo-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                cargo survey
              </Link>
              ,{" "}
              <Link
                href="/bunker-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                bunker survey
              </Link>{" "}
              or{" "}
              <Link
                href="/pre-purchase-inspection/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                pre-purchase inspection
              </Link>
              . To discuss a vessel, use the{" "}
              <Link
                href="/contact/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
