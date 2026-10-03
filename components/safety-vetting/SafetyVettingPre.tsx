const preItems = [
  "Vessel condition",
  "Safety systems",
  "Operational readiness",
  "Documentation",
  "Crew preparedness",
  "Equipment",
  "Maintenance observations",
  "Housekeeping",
  "Emergency preparedness",
  "Environmental controls",
  "Previous deficiencies and corrective actions",
] as const;

const tankerItems = [
  "Oil tankers",
  "Chemical tankers",
  "Gas-related vessel operations, where applicable",
  "Cargo operations",
  "Safety systems",
  "Machinery",
  "Navigation",
  "Emergency preparedness",
  "Documentation",
  "Crew readiness",
  "Pollution prevention",
  "Cargo-related operational practices",
] as const;

const bulkItems = [
  "Vessel condition",
  "Cargo-related readiness",
  "Safety equipment",
  "Machinery",
  "Navigation equipment",
  "Emergency systems",
  "Crew readiness",
  "Documentation",
  "Maintenance",
  "Housekeeping",
  "Environmental controls",
] as const;

export default function SafetyVettingPre() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-pre-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-pre-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-Vetting Inspection for Ships
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where requested and within the agreed scope, PMS can conduct a
            preparatory assessment before an external vetting inspection. PMS is
            not the official vetting authority. Areas that may be reviewed
            include:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {preItems.map((item) => (
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
        aria-labelledby="safety-vetting-tanker-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-tanker-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Safety Vetting for Tankers
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the vessel, operator, cargo and inspection scope, tanker
            safety vetting support may include observations relating to the
            areas below. Not every tanker inspection follows one identical
            checklist.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tankerItems.map((item) => (
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
        aria-labelledby="safety-vetting-bulk-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-bulk-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Safety Vetting for Bulk Carriers & General Cargo Vessels
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the vessel, operator, cargo and inspection scope, bulk
            carrier and general cargo vetting support may include the areas
            below. This is not a vessel-specific compliance statement.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bulkItems.map((item) => (
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
