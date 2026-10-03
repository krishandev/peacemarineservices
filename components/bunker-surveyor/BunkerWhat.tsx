import Link from "next/link";

const reasons = [
  "Documenting bunker quantity",
  "Recording bunker delivery information",
  "Observing sampling procedures",
  "Documenting fuel transfer operations",
  "Recording apparent discrepancies",
  "Supporting communication between vessel and supplier",
  "Maintaining survey records",
  "Documenting relevant observations during bunkering",
  "Supporting fuel-related claims or investigations where appropriate",
] as const;

export default function BunkerWhat() {
  return (
    <>
      <section
        aria-labelledby="bunker-what-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is a Bunker Survey?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A bunker survey is an inspection and documentation service
              associated with the receipt, measurement, sampling and/or
              condition assessment of marine fuel during a bunkering operation,
              depending on the agreed scope.
            </p>
            <p>
              Scope can vary depending on the vessel, fuel type, bunkering
              location, delivery method, contractual requirements and survey
              instructions. Not every bunker survey includes laboratory fuel
              testing. PMS provides this work as part of its{" "}
              <Link
                href="/our-services/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine surveying and inspection services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="bunker-why-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Arrange a Bunker Survey?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            An independent bunker survey can record observable facts during fuel
            delivery. It does not automatically determine legal liability or
            guarantee a successful claim.
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
