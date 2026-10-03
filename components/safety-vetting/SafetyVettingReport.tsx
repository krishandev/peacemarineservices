import Link from "next/link";

const reportItems = [
  "Inspection date",
  "Vessel details",
  "Inspection scope",
  "Areas reviewed",
  "Observations",
  "Deficiencies and findings",
  "Supporting photographs where appropriate",
  "Recommended corrective actions",
  "Follow-up items where agreed",
] as const;

const limitations = [
  "A PMS safety vetting inspection is not automatically an official government inspection.",
  "PMS does not control the final decision of a charterer, vetting organisation, Flag State, Port State Control authority, classification society or other third party.",
  "A preparatory inspection cannot guarantee acceptance, approval, clearance, a specific vetting score or absence of deficiencies.",
  "The inspection scope must be agreed based on vessel type and client requirements.",
  "Regulatory requirements can change and should be verified against current applicable requirements.",
] as const;

export default function SafetyVettingReport() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-report-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-report-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Inspection Reporting
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The report is based on the agreed scope and the conditions observed
            during the assessment. Depending on that scope, the report may
            include:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reportItems.map((item) => (
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
        aria-labelledby="safety-vetting-limits-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-limits-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Important Scope & Limitations
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            These limits are stated so the service is understood clearly. Further
            questions can be sent through the{" "}
            <Link
              href="/contact/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              contact form
            </Link>{" "}
            or reviewed against other{" "}
            <Link
              href="/faq/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              frequently asked questions
            </Link>
            . Related technical work may include{" "}
            <Link
              href="/technical-inspection-and-marine-engineering-consultancy/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              technical inspection and marine engineering consultancy
            </Link>{" "}
            or{" "}
            <Link
              href="/amsa-dcv-marine-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              AMSA DCV marine surveyor support
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
    </>
  );
}
