const groups = [
  {
    title: "Vessel Structure & General Condition",
    items: [
      "Visible hull and deck condition",
      "General structure observations",
      "Access and working areas",
      "Overall appearance of accessible areas",
    ],
  },
  {
    title: "Machinery & Mechanical Systems",
    items: [
      "Main machinery where accessible",
      "Auxiliary machinery",
      "Visible mechanical arrangements",
      "Maintenance-related observations",
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
    title: "Safety Equipment",
    items: [
      "Life-saving appliances where included",
      "Fire-fighting equipment",
      "Emergency equipment",
      "Safety arrangements",
    ],
  },
  {
    title: "Navigation & Communication Equipment",
    items: [
      "Navigation equipment where accessible",
      "Communication equipment",
      "Bridge or wheelhouse arrangements",
    ],
  },
  {
    title: "Accommodation & General Areas",
    items: [
      "Accessible accommodation spaces",
      "General internal condition",
      "Working and common areas",
    ],
  },
  {
    title: "Documentation & Records",
    items: [
      "Available certificates",
      "Maintenance records where provided",
      "Previous inspection or survey reports",
      "Other documents supplied by the seller or buyer",
    ],
  },
] as const;

const variables = [
  "Vessel type",
  "Vessel size",
  "Vessel age",
  "Intended operation",
  "Location",
  "Accessibility",
  "Available documentation",
  "Buyer requirements",
  "Specific areas of concern",
] as const;

export default function PrePurchaseCover() {
  return (
    <>
      <section
        aria-labelledby="pre-purchase-cover-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-cover-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Does a Pre-Purchase Marine Inspection Cover?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The exact inspection scope depends on the vessel, accessibility,
            available documentation and agreed inspection requirements. Not
            every inspection includes every item below.
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

      <section
        aria-labelledby="pre-purchase-scope-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-purchase-scope-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Inspection Scope Depends on the Vessel
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Inspection scope may vary according to the factors below. Scope is
            discussed before attendance so the work can be planned against the
            assignment.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {variables.map((item) => (
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
