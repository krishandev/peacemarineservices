import Link from "next/link";

const claimItems = [
  "Apparent shortage",
  "Quantity discrepancy",
  "Sampling issues",
  "Documentation discrepancies",
  "Fuel-related observations",
  "Delivery exceptions",
] as const;

const limitations = [
  "Survey scope is based on agreed instructions",
  "Findings depend on access and conditions during the operation",
  "Quantity measurements depend on the agreed measurement method and available information",
  "Sampling procedures depend on the agreed procedure and circumstances",
  "Laboratory testing is separate unless specifically included",
  "Survey observations do not automatically establish legal liability",
  "Specialist technical or laboratory investigation may be required",
  "The report reflects observations within the agreed scope",
] as const;

export default function BunkerClaims() {
  return (
    <>
      <section
        aria-labelledby="bunker-claims-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-claims-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Bunker Survey & Claims Documentation Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Survey documentation can assist with factual assessment of matters
            such as those below. Survey findings can provide factual
            documentation that may assist relevant parties and their advisers
            when assessing a bunker-related matter. PMS does not provide legal
            conclusions, determine contractual liability or guarantee insurance
            or claim outcomes.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {claimItems.map((item) => (
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
        aria-labelledby="bunker-limits-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-limits-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Important Information About Bunker Surveys
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A bunker survey is a practical attendance and reporting assignment.
            Further context is available on{" "}
            <Link
              href="/about-us/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              About PMS Peace Marine Services
            </Link>{" "}
            and through the{" "}
            <Link
              href="/contact/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              contact form
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {limitations.map((item) => (
              <li
                key={item}
                className="flex min-w-0 gap-3 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
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
