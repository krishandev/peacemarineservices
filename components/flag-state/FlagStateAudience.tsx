const audiences = [
  "Ship owners",
  "Vessel operators",
  "Fleet managers",
  "Ship management companies",
  "Commercial vessel operators",
  "Vessel masters",
  "Companies registering or operating vessels under a particular flag",
] as const;

const situations = [
  "Before a scheduled Flag State inspection",
  "Before vessel registration or flag-related processes where applicable",
  "Before renewal of relevant certificates",
  "Following significant vessel modifications",
  "Following repairs or deficiencies",
  "When preparing for an external inspection",
  "When previous inspection findings require follow-up",
  "When vessel documentation needs review",
] as const;

const preAreas = [
  "Safety equipment",
  "Vessel condition",
  "Documentation",
  "Machinery and technical areas",
  "Pollution prevention arrangements",
  "Crew documentation",
  "Operational procedures",
  "Previous inspection findings",
] as const;

const documents = [
  "Certificate of Registry",
  "Statutory certificates",
  "Safety certificates",
  "Crew certificates",
  "Maintenance records",
  "Safety management documentation",
  "Previous inspection reports",
  "Vessel plans and manuals",
  "Pollution prevention records",
] as const;

export default function FlagStateAudience() {
  return (
    <>
      <section
        aria-labelledby="flag-state-who-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who May Need Flag State Inspection Support?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Flag State inspection support may be relevant to the parties below.
            Inspection timing and scope depend on the flag administration,
            vessel and applicable requirements. Not every vessel is inspected on
            the same schedule.
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
        aria-labelledby="flag-state-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Can Flag State Inspection Preparation Help?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Preparation may be useful in the situations below, depending on
            requirements. A PMS pre-inspection can help identify potential
            issues; it does not guarantee a successful official inspection.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {situations.map((item) => (
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

      <section
        aria-labelledby="flag-state-pre-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-pre-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Flag State Inspection Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS can provide an independent inspection or review intended to help
            identify potential issues before an official or authorised Flag
            State inspection, where this service is appropriate. It does not
            guarantee a pass, approval or an absence of deficiencies.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {preAreas.map((item) => (
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
        aria-labelledby="flag-state-docs-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-docs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Preparing for a Flag State Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Relevant documentation can vary by flag, vessel and inspection
            purpose. Documents may include the items below. This list is not
            universally applicable and is not a set of requirements for any
            specific flag.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((item) => (
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
