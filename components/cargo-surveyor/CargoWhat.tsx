import Link from "next/link";

const reasons = [
  "Documenting cargo condition",
  "Recording visible damage or irregularities",
  "Supporting cargo handling and loading or discharge operations",
  "Documenting observations at key stages",
  "Identifying apparent cargo issues",
  "Supporting communication between relevant parties",
  "Providing an independent survey report within the agreed scope",
  "Assisting with cargo-related claims or investigations where appropriate",
] as const;

export default function CargoWhat() {
  return (
    <>
      <section
        aria-labelledby="cargo-what-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is a Cargo Survey?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A cargo survey is an inspection or assessment carried out to
              document relevant cargo condition, quantity-related observations,
              loading or discharge conditions, handling practices or other
              agreed cargo-related matters.
            </p>
            <p>
              Exact scope depends on the cargo, vessel, port operation and
              survey instructions. Not every cargo survey covers the same
              checks. PMS provides this work as part of its{" "}
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
        aria-labelledby="cargo-why-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Use a Cargo Surveyor?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            An independent cargo survey can record observable facts for the
            parties involved. It does not automatically determine legal
            liability or guarantee a successful insurance claim.
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
