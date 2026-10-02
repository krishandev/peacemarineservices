const flagChecks = [
  "Vessel safety",
  "Construction and condition",
  "Safety equipment",
  "Pollution prevention",
  "Crew certification and qualifications",
  "Operational procedures",
  "Required documentation",
  "Statutory certificates",
  "Applicable international conventions",
  "National maritime requirements",
] as const;

export default function FlagStateIntro() {
  return (
    <>
      <section
        aria-labelledby="flag-state-intro-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-intro-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Flag State Inspection Services
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A Flag State is the State under whose laws a vessel is registered
              or entitled to fly its flag. The flag State has responsibilities
              relating to the vessel&apos;s compliance with applicable maritime
              requirements.
            </p>
            <p>
              Flag State inspections may assess areas such as safety, pollution
              prevention, crew-related requirements, vessel condition,
              documentation and operational arrangements, depending on the
              applicable requirements and inspection scope.
            </p>
            <p>
              PMS Peace Marine Services provides marine inspection and
              pre-inspection support. PMS is not a government authority and does
              not act as the flag administration.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="flag-state-what-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is a Flag State Inspection?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A Flag State Inspection is an inspection conducted by, or on
              behalf of, the relevant flag administration to assess whether a
              vessel complies with applicable flag State requirements.
            </p>
            <p>
              The exact inspection scope can vary based on flag State, vessel
              type, vessel size, vessel operation, applicable conventions,
              national requirements, vessel certification and inspection
              purpose. Not every Flag State inspection uses the same checklist.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="flag-state-check-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-check-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does the Flag State Check?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the vessel, flag administration and inspection scope,
            the applicable flag administration may oversee areas relating to:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {flagChecks.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Not every item is checked during every inspection.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="flag-state-conventions-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-conventions-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Flag State Inspections and International Maritime Requirements
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Depending on the vessel and applicable requirements, Flag State
              inspections may consider international maritime conventions and
              national legislation.
            </p>
            <p>
              Examples may include SOLAS, MARPOL, STCW and MLC, 2006. Not every
              Flag State inspection checks every convention.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
