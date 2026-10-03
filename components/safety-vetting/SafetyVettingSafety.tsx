const readinessItems = [
  "General vessel condition",
  "Safe working practices",
  "Emergency preparedness",
  "Fire safety",
  "Life-saving equipment",
  "Navigation and communication equipment",
  "Machinery readiness",
  "Deck equipment",
  "Operational procedures",
  "Maintenance records",
  "Housekeeping",
] as const;

const equipmentItems = [
  "Fire-fighting equipment",
  "Life-saving appliances",
  "Emergency equipment",
  "Personal protective equipment",
  "Emergency systems",
  "Navigation and communication equipment",
  "Relevant alarms and safety systems",
] as const;

export default function SafetyVettingSafety() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-readiness-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-readiness-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Safety & Operational Readiness Assessment
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where applicable, accessible and included in the agreed scope, the
            inspection may consider the areas below. Items are reviewed as
            observations, not as official certification.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {readinessItems.map((item) => (
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
        aria-labelledby="safety-vetting-equipment-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-equipment-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Safety Equipment Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Relevant safety equipment may include the items below, where
            accessible and within the agreed inspection scope. PMS does not
            provide laboratory testing, equipment certification, calibration or
            official approval as part of this service.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentItems.map((item) => (
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
