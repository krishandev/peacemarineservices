import Link from "next/link";

const fitOutItems = [
  "New vessel fit-outs",
  "Equipment installation",
  "Modifications",
  "Repairs",
  "Safety-related equipment",
  "Machinery changes",
  "Technical documentation",
  "Operational readiness",
] as const;

const salvageItems = [
  "Vessel condition observations",
  "Photographic and written records",
  "Documentation of accessible damage or deficiencies",
  "Technical observations to support planning discussions",
] as const;

export default function DampierExtra() {
  return (
    <>
      <section
        aria-labelledby="dampier-fitout-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-fitout-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            New Vessel Fit-Out & Modification Inspection Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Harbour craft and other commercial vessels used around Dampier and
            Karratha are sometimes fitted out, modified or repaired for
            industrial marine work. Where requested and within the agreed
            inspection scope, PMS may provide inspection or technical assessment
            support for the areas below. This is not statutory approval, design
            certification, government approval, class approval or engineering
            sign-off. Related work may include{" "}
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
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fitOutItems.map((item) => (
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
        aria-labelledby="dampier-salvage-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="dampier-salvage-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Salvage & Recovery Planning Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where this service is agreed, marine inspection and technical
            support may assist stakeholders by assessing vessel condition,
            documenting observations and supporting planning discussions around
            a marine incident or recovery activity. PMS is not described here as
            a salvage contractor, does not provide operational emergency
            instructions, and cannot guarantee recovery outcomes.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {salvageItems.map((item) => (
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
