const consultancy = [
  "Machinery",
  "Mechanical systems",
  "Vessel equipment",
  "Repairs",
  "Modifications",
  "Maintenance",
  "Technical documentation",
  "Equipment selection",
  "Technical problem investigation",
  "Operational reliability",
  "Vessel improvement projects",
] as const;

const inspectionFindings = [
  "Visible equipment defects",
  "Machinery concerns",
  "Maintenance issues",
  "Corrosion or deterioration",
  "Abnormal conditions",
  "Equipment condition concerns",
  "Technical documentation gaps",
  "Areas requiring specialist testing or further investigation",
] as const;

export default function TechConsultancy() {
  return (
    <>
      <section
        aria-labelledby="tech-consultancy-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-consultancy-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Engineering Consultancy
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Consultancy support may cover technical assessment and practical
            advice relating to the areas below. This does not constitute formal
            engineering certification, statutory approval or design approval.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {consultancy.map((item) => (
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
        aria-labelledby="tech-inspection-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-inspection-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Vessel Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical inspections may help identify the items below. An
            inspection is distinct from specialist testing. Visual inspection
            cannot identify every hidden defect.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {inspectionFindings.map((item) => (
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
