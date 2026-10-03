const conditionItems = [
  "Hull and deck condition, where accessible",
  "Visible corrosion or deterioration",
  "Machinery spaces",
  "Main and auxiliary machinery",
  "Pumps and piping",
  "Electrical systems",
  "Steering systems",
  "Deck equipment",
  "Visible technical deficiencies",
] as const;

const safetyItems = [
  "Firefighting equipment",
  "Lifesaving appliances",
  "Emergency equipment",
  "Alarms",
  "Escape routes",
  "Emergency signage",
  "Emergency preparedness",
  "Safety-related records",
  "Drills and familiarisation where included in the agreed scope",
] as const;

export default function PrePscCondition() {
  return (
    <>
      <section
        aria-labelledby="pre-psc-condition-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-condition-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Vessel Condition & Technical Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The assessment may include relevant observable areas such as those
            below. Specialist testing may be required for certain issues. Visual
            inspection cannot identify every hidden defect.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditionItems.map((item) => (
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
        aria-labelledby="pre-psc-safety-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-psc-safety-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Safety Equipment & Emergency Preparedness
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where applicable and accessible, the inspection may include the
            areas below. PMS does not certify or officially approve safety
            equipment.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {safetyItems.map((item) => (
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
