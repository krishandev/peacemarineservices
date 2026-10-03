import Link from "next/link";

const audiences = [
  "Ship owners",
  "Vessel operators",
  "Ship managers",
  "Charterers",
  "Fuel buyers",
  "Marine fuel suppliers",
  "Cargo or vessel stakeholders where appropriate",
  "Marine insurers and claims stakeholders where appropriate",
  "Other maritime stakeholders",
] as const;

const timing = [
  "Before bunkering",
  "During fuel delivery",
  "During sampling",
  "At completion of bunkering",
  "When quantity discrepancies are suspected",
  "When fuel documentation needs independent review",
  "When fuel-related issues arise",
  "When contractual survey instructions require attendance",
  "When a bunker-related claim may need factual documentation",
] as const;

export default function BunkerWho() {
  return (
    <>
      <section
        aria-labelledby="bunker-who-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Can Benefit From Bunker Survey Services?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Bunker survey support may be relevant to the parties below. PMS does
            not represent any specific party unless engaged for that assignment.
            Related work such as{" "}
            <Link
              href="/cargo-surveyor/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              cargo survey
            </Link>
            ,{" "}
            <Link
              href="/technical-inspection-and-marine-engineering-consultancy/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              technical inspection and marine engineering consultancy
            </Link>{" "}
            or{" "}
            <Link
              href="/marine-safety-inspection-in-australia/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine safety inspection
            </Link>{" "}
            may also be discussed depending on the requirement.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-white px-4 py-3 text-sm font-medium break-words text-pms-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="bunker-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="bunker-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should a Bunker Survey Be Arranged?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A survey can be useful at the times below, where applicable. This
            page does not describe bunker surveys as legally mandatory for every
            fuel delivery.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timing.map((item) => (
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
    </>
  );
}
