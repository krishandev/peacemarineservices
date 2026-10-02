const groups = [
  {
    title: "Vessel Condition",
    items: [
      "General vessel condition",
      "Visible structural condition",
      "Deck areas",
      "Access and working areas",
    ],
  },
  {
    title: "Safety Equipment",
    items: [
      "Life-saving appliances",
      "Fire-fighting equipment",
      "Emergency equipment",
      "Safety signage and arrangements",
    ],
  },
  {
    title: "Emergency Preparedness",
    items: [
      "Emergency procedures",
      "Muster arrangements",
      "Emergency equipment accessibility",
      "Relevant drills and documentation where included in scope",
    ],
  },
  {
    title: "Machinery & Technical Areas",
    items: [
      "Visible machinery condition",
      "Engine room safety arrangements",
      "Relevant technical equipment",
      "Machinery-related safety observations",
    ],
  },
  {
    title: "Environmental Protection",
    items: [
      "Pollution prevention equipment",
      "Fuel handling arrangements",
      "Waste and environmental procedures",
      "Relevant documentation",
    ],
  },
  {
    title: "Documentation & Procedures",
    items: [
      "Safety procedures",
      "Inspection records",
      "Maintenance records",
      "Relevant vessel documentation",
    ],
  },
] as const;

export default function MarineSafetyScope() {
  return (
    <section
      aria-labelledby="marine-safety-scope-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="marine-safety-scope-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          What Can a Marine Safety Inspection Cover?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The exact scope depends on the vessel and inspection requirement.
          Inspection scope is agreed according to the vessel, inspection
          purpose and applicable requirements. Not every marine safety
          inspection includes every item below.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <li
              key={group.title}
              className="min-w-0 border border-pms-line bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {group.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-pms-muted">
                {group.title === "Environmental Protection" ||
                group.title === "Documentation & Procedures"
                  ? "Where relevant to the agreed inspection scope."
                  : "Where included in the agreed inspection scope."}
              </p>
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
