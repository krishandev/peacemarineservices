import Link from "next/link";

const claimItems = [
  "Condition documentation",
  "Photographs",
  "Damage observations",
  "Quantity-related observations",
  "Timeline and operation observations",
  "Available documentation",
  "Statements from relevant parties",
] as const;

const limitations = [
  "Survey scope is based on agreed instructions",
  "Findings depend on accessibility and conditions at the time",
  "Some cargo defects may not be visible",
  "Specialist testing may be required for certain issues",
  "Quantity measurements depend on the agreed measurement method and available information",
  "The survey report records observations within the agreed scope",
  "A survey report is not automatically a legal determination of liability",
  "Further investigation may be required for complex cargo claims",
] as const;

export default function CargoClaims() {
  return (
    <>
      <section
        aria-labelledby="cargo-claims-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-claims-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Damage & Claims Documentation Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A cargo survey can help document observable facts relevant to a
            cargo damage or shortage matter. Survey findings can provide factual
            documentation that may assist the relevant parties and their
            advisers when assessing a cargo-related matter. PMS does not
            determine liability or guarantee insurance or claim outcomes.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {claimItems.map((item) => (
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
        aria-labelledby="cargo-limits-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-limits-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Important Information About Cargo Surveys
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A cargo survey is a practical attendance and reporting assignment,
            not a legal determination. Further context is available on{" "}
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
