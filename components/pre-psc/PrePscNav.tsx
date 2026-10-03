const navItems = [
  "Navigation equipment",
  "Communication equipment",
  "Bridge equipment",
  "Alarms",
  "Visible equipment condition",
  "Relevant operational records",
] as const;

const documents = [
  "Vessel certificates",
  "Safety records",
  "Maintenance records",
  "Inspection records",
  "Drill records",
  "Operational records",
  "Crew-related documentation where applicable",
  "Equipment records",
  "Previous inspection or survey reports",
  "Other vessel-specific documentation",
] as const;

export default function PrePscNav() {
  return (
    <>
      <section
        aria-labelledby="pre-psc-nav-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-nav-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Navigation & Communication Equipment
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where applicable and accessible, the inspection may include
            observations relating to the items below. Specialist calibration or
            certification is not included unless specifically agreed.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {navItems.map((item) => (
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
        aria-labelledby="pre-psc-docs-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-docs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Documentation & Record Review
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Relevant documents and records may include the items below. Exact
            documentation review depends on vessel type, operation and agreed
            scope. These are not mandatory requirements for every inspection.
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
