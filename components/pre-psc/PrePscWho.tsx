import Link from "next/link";

const audiences = [
  "Ship owners",
  "Vessel operators",
  "Ship managers",
  "Fleet managers",
  "Masters and operators preparing vessels for inspection",
  "Companies preparing for port calls",
  "Maritime stakeholders responsible for vessel readiness",
] as const;

const timing = [
  "Before an expected port call",
  "Before an anticipated PSC inspection",
  "After significant maintenance",
  "After repairs or modifications",
  "When previous deficiencies need follow-up",
  "When an independent readiness assessment is useful",
] as const;

export default function PrePscWho() {
  return (
    <>
      <section
        aria-labelledby="pre-psc-who-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Should Consider a Pre-PSC Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Pre-PSC inspection support may be relevant to the parties below. Not
            every vessel requires a Pre-PSC inspection. Related work such as{" "}
            <Link
              href="/marine-safety-inspection-in-australia/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              marine safety inspection
            </Link>
            ,{" "}
            <Link
              href="/flag-state-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              flag state inspection
            </Link>{" "}
            or{" "}
            <Link
              href="/pre-amsa-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Pre-AMSA inspection
            </Link>{" "}
            may also be discussed depending on the requirement.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm font-medium break-words text-pms-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="pre-psc-when-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should a Pre-PSC Inspection Be Arranged?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Timing depends on vessel operations, port schedule, inspection
            objectives and availability. Arrange the inspection early enough to
            allow time for any identified issues to be reviewed or addressed,
            where practicable. There is no single fixed interval that applies to
            every vessel.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timing.map((item) => (
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
