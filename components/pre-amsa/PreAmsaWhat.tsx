import Link from "next/link";

const reasons = [
  "Identify potential issues before an official inspection",
  "Review vessel condition",
  "Check relevant safety equipment",
  "Review documentation and records",
  "Identify maintenance concerns",
  "Identify areas requiring attention",
  "Improve inspection readiness",
  "Understand potential compliance gaps",
  "Prepare the vessel and crew for the applicable inspection process",
] as const;

export default function PreAmsaWhat() {
  return (
    <>
      <section
        aria-labelledby="pre-amsa-what-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is a Pre-AMSA Inspection?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A Pre-AMSA inspection is a preparatory inspection or assessment
              intended to help vessel owners and operators identify potential
              issues and prepare for an applicable AMSA-related inspection,
              survey or compliance assessment.
            </p>
            <p>
              Exact requirements depend on the vessel type, operation, applicable
              requirements and inspection or survey scope. PMS is not the
              regulatory authority. Related{" "}
              <Link
                href="/our-services/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine inspection services
              </Link>{" "}
              and{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>{" "}
              may also be relevant depending on the vessel.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pre-amsa-why-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Arrange a Pre-AMSA Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A preparatory inspection can help owners and operators understand
            observable condition and documentation before an applicable
            AMSA-related attendance. It does not guarantee approval or a
            successful AMSA inspection.
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
