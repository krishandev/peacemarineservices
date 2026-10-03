import Link from "next/link";

const documents = [
  "Certificates and statutory documents",
  "Safety management documentation",
  "Maintenance records",
  "Inspection records",
  "Drill records",
  "Crew documentation",
  "Safety records",
  "Previous inspection or vetting findings",
  "Corrective action records",
  "Relevant vessel procedures",
] as const;

const deficiencyItems = [
  "Identify observations and deficiencies",
  "Record evidence",
  "Categorise findings where appropriate",
  "Explain practical corrective actions",
  "Prioritise issues based on agreed scope and risk",
  "Support follow-up review where requested",
] as const;

export default function SafetyVettingDocs() {
  return (
    <>
      <section
        aria-labelledby="safety-vetting-docs-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-docs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Documentation & Record Review
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Document review may include the items below, depending on the
            vessel, operation and agreed scope. This is not a mandatory document
            list for every inspection. Related work may include{" "}
            <Link
              href="/flag-state-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              flag state inspection
            </Link>{" "}
            or{" "}
            <Link
              href="/pre-amsa-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Pre-AMSA inspection
            </Link>{" "}
            support where that is the more suitable pathway.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((item) => (
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
        aria-labelledby="safety-vetting-deficiencies-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="safety-vetting-deficiencies-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Deficiency Identification & Corrective Action
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Findings are recorded within the agreed inspection scope. Final
            classification or acceptance of findings may depend on the relevant
            vetting organisation, charterer, authority or other responsible
            party.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deficiencyItems.map((item) => (
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
