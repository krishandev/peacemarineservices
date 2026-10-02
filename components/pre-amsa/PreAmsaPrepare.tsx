const preparation = [
  "Understanding the applicable inspection or survey scope",
  "Reviewing vessel condition",
  "Checking safety equipment",
  "Checking relevant machinery and systems",
  "Reviewing certificates and records where available",
  "Reviewing maintenance records where available",
  "Checking documentation supplied for the assignment",
  "Identifying visible deficiencies",
  "Preparing crew and operational documentation where applicable",
  "Addressing known issues before the inspection",
] as const;

const attentionAreas = [
  "Expired or incomplete documentation",
  "Equipment condition",
  "Safety equipment readiness",
  "Emergency equipment",
  "Fire safety equipment",
  "Machinery condition",
  "Electrical issues",
  "Navigation and communication equipment",
  "Maintenance records",
  "Vessel housekeeping",
  "Emergency preparedness",
  "Visible defects or deficiencies",
] as const;

export default function PreAmsaPrepare() {
  return (
    <>
      <section
        aria-labelledby="pre-amsa-prepare-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-prepare-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Preparing for an AMSA-Related Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Preparation typically focuses on the agreed scope for the vessel.
            The items below are practical examples, not a mandatory document or
            inspection list for every assignment.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {preparation.map((item) => (
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
        aria-labelledby="pre-amsa-attention-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-attention-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Common Areas That May Require Attention
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The examples below may be relevant depending on the vessel. They are
            not a complete regulatory checklist.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {attentionAreas.map((item) => (
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
