import Link from "next/link";

const audiences = [
  "Ship owners",
  "Ship managers",
  "Vessel operators",
  "Charterers",
  "Crew managers",
  "Commercial shipping companies",
  "Tanker operators",
  "Bulk carrier operators",
  "General cargo operators",
  "Other maritime stakeholders",
] as const;

const timing = [
  "Before a planned external vetting inspection",
  "Before a new chartering opportunity",
  "After major repairs or modifications",
  "After repeated deficiencies",
  "Before entering a new commercial operation",
  "When an independent readiness assessment is useful",
  "After changes to vessel operations",
  "As part of ongoing safety improvement",
] as const;

const prepareItems = [
  "Vessel particulars",
  "Relevant certificates and documents",
  "Safety management records",
  "Maintenance records",
  "Previous inspection reports",
  "Previous deficiencies",
  "Corrective action records",
  "Crew documentation",
  "Drill records",
  "Relevant operational procedures",
  "Contact details for onboard representatives",
] as const;

export default function SafetyVettingWho() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-who-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Can Benefit From Safety Vetting Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Safety vetting and pre-vetting support may be relevant to the
            parties below. This is not a legal requirement to use PMS, and not
            every stakeholder needs a PMS inspection. See{" "}
            <Link
              href="/about-us/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              About PMS Peace Marine Services
            </Link>{" "}
            for company context.
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
        aria-labelledby="safety-vetting-when-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should a Vessel Consider a Pre-Vetting Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Timing depends on vessel operations, commercial schedules, inspection
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

      <section
        aria-labelledby="safety-vetting-prepare-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-prepare-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What to Prepare Before the Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The exact document list depends on the inspection scope. The items
            below are commonly useful where available.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {prepareItems.map((item) => (
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
