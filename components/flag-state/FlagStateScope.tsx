const groups = [
  {
    title: "Vessel Condition",
    note: "Possible assessment of:",
    items: [
      "Hull and deck condition",
      "Structural areas",
      "Access and working areas",
      "General vessel condition",
    ],
  },
  {
    title: "Safety Equipment",
    note: "Possible areas:",
    items: [
      "Life-saving appliances",
      "Fire-fighting equipment",
      "Emergency systems",
      "Safety arrangements",
    ],
  },
  {
    title: "Navigation & Communication",
    note: "Where applicable:",
    items: [
      "Navigation equipment",
      "Communication equipment",
      "Bridge arrangements",
      "Relevant records",
    ],
  },
  {
    title: "Machinery & Technical Systems",
    note: "Depending on scope:",
    items: [
      "Main machinery",
      "Auxiliary machinery",
      "Engine room",
      "Technical systems",
      "Maintenance arrangements",
    ],
  },
  {
    title: "Pollution Prevention",
    note: "Where applicable:",
    items: [
      "Pollution prevention equipment",
      "MARPOL-related arrangements",
      "Fuel and oil handling",
      "Waste management",
      "Relevant records",
    ],
  },
  {
    title: "Crew & Documentation",
    note: "Where applicable:",
    items: [
      "Crew certificates",
      "Qualifications",
      "Manning documentation",
      "Required vessel records",
      "Safety management documentation",
    ],
  },
] as const;

export default function FlagStateScope() {
  return (
    <section
      aria-labelledby="flag-state-scope-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="flag-state-scope-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What Can a Flag State Inspection Cover?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The actual inspection scope depends on the vessel, flag administration
          and applicable requirements. Not every inspection includes every
          category below.
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
              <p className="mt-1 text-xs leading-5 text-pms-muted">{group.note}</p>
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
