const findings = [
  "Expired or incomplete documentation",
  "Deficiencies in safety equipment",
  "Maintenance issues",
  "Fire safety deficiencies",
  "Life-saving appliance issues",
  "Pollution prevention observations",
  "Crew certification or documentation issues",
  "Incomplete records",
] as const;

export default function FlagStateFindings() {
  return (
    <>
      <section
        aria-labelledby="flag-state-findings-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-findings-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Common Areas That May Require Attention
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Examples of issues that may be identified include the items below.
            These are examples only and are not presented as the most common
            deficiencies for every vessel or flag.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {findings.map((item) => (
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
        aria-labelledby="flag-state-after-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="flag-state-after-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            After a Flag State Inspection
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              If deficiencies are identified, the responsible authority may
              specify corrective action, follow-up requirements or other
              measures.
            </p>
            <p>
              PMS may provide advisory or pre-inspection support where
              appropriate. PMS cannot remove, cancel or override an official
              deficiency, and cannot guarantee that a vessel will avoid
              detention or penalties.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
