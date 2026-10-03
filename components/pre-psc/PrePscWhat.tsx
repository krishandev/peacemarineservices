import Link from "next/link";

const reasons = [
  "Identify potential deficiencies early",
  "Review vessel condition",
  "Review safety equipment",
  "Review documentation and records",
  "Identify maintenance concerns",
  "Review emergency preparedness",
  "Assess operational readiness",
  "Identify areas requiring corrective action",
  "Prepare crew for applicable inspection expectations",
  "Reduce the risk of avoidable deficiencies",
] as const;

export default function PrePscWhat() {
  return (
    <>
      <section
        aria-labelledby="pre-psc-what-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is a Pre-PSC Inspection?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A Pre-PSC inspection is a preparatory vessel assessment intended
              to identify potential deficiencies or areas requiring attention
              before an applicable Port State Control inspection.
            </p>
            <p>
              The actual PSC inspection is carried out by the relevant Port
              State authority or authorized officials. PMS provides preparatory
              support as part of its{" "}
              <Link
                href="/our-services/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine surveying and inspection services
              </Link>
              . A Pre-PSC inspection is not an official PSC inspection.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pre-psc-why-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Arrange a Pre-PSC Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A preparatory inspection can help owners and operators understand
            observable condition and documentation before an applicable PSC
            attendance. It does not guarantee PSC clearance, zero deficiencies,
            prevention of detention or fines, or a successful PSC inspection.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
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
