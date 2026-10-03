const groups = [
  {
    title: "Main & Auxiliary Machinery",
    items: [
      "Main machinery, where accessible",
      "Auxiliary machinery, where included in the agreed scope",
      "Visible condition and maintenance-related observations",
    ],
  },
  {
    title: "Mechanical Systems",
    items: [
      "Mechanical arrangements, where accessible",
      "Related fittings and supports",
      "Observations within the agreed scope",
    ],
  },
  {
    title: "Pumps, Valves & Piping",
    items: [
      "Pumps and valves, where accessible",
      "Visible piping arrangements",
      "Leakage or condition observations where present",
    ],
  },
  {
    title: "Electrical Systems",
    items: [
      "Visible electrical installations",
      "Relevant safety arrangements",
      "Electrical documentation where available",
    ],
  },
  {
    title: "Marine Equipment",
    items: [
      "Deck and machinery-space equipment, where included",
      "Condition observations",
      "Related records where provided",
    ],
  },
  {
    title: "Engine Room Condition",
    items: [
      "Accessible engine-room spaces",
      "Housekeeping and access observations",
      "General technical condition notes",
    ],
  },
  {
    title: "Deck Machinery",
    items: [
      "Deck machinery, where accessible",
      "Visible operating arrangements",
      "Maintenance-related observations",
    ],
  },
  {
    title: "Structural/Technical Condition",
    items: [
      "Visible structural or technical condition, where accessible",
      "Deterioration observations where present",
      "Areas that may need further investigation",
    ],
  },
  {
    title: "Safety-Related Technical Systems",
    items: [
      "Safety-related technical systems, where applicable",
      "Visible condition and arrangement notes",
      "Related documentation where available",
    ],
  },
  {
    title: "Maintenance & Technical Records",
    items: [
      "Maintenance records where provided",
      "Technical documents supplied for review",
      "Gaps identified within the agreed scope",
    ],
  },
  {
    title: "Repairs and Modifications",
    items: [
      "Repair or modification observations, where included",
      "Work completed or planned, based on available information",
      "Post-repair notes where instructed",
    ],
  },
  {
    title: "Operational/Performance Observations",
    items: [
      "Operational observations, where applicable",
      "Reported performance concerns",
      "Performance testing only if specifically agreed",
    ],
  },
] as const;

export default function TechCover() {
  return (
    <section
      aria-labelledby="tech-cover-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="tech-cover-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What Can a Technical Marine Inspection Cover?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Items below may be reviewed where applicable, where accessible and
          where included in the agreed scope. Not every inspection includes
          every item.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <li
              key={group.title}
              className="min-w-0 border border-pms-line bg-pms-wash p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {group.title}
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-pms-muted">
                {group.items.map((item) => (
                  <li key={item} className="break-words">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
