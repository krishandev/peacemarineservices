import Link from "next/link";

const designItems = [
  "Requirements analysis",
  "Vessel purpose",
  "Operational considerations",
  "Technical feasibility",
  "Efficiency considerations",
  "HSE considerations",
  "Technical documentation",
  "Conversion planning",
  "Upgrade planning",
] as const;

const documents = [
  "Machinery documentation",
  "Equipment manuals",
  "Maintenance records",
  "Technical drawings",
  "Inspection reports",
  "Repair records",
  "Modification documentation",
  "Vessel specifications",
  "Engineering information",
] as const;

export default function TechDesign() {
  return (
    <>
      <section
        aria-labelledby="tech-design-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-design-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Vessel Design & Conversion Consultancy
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical consultancy may support suitable vessel design, upgrade or
            conversion requirements, subject to project scope and applicable
            technical, classification and regulatory requirements. PMS is not a
            naval architecture firm, classification society or statutory
            approval authority. Design or conversion work is not described as
            ISO-certified.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {designItems.map((item) => (
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
        aria-labelledby="tech-docs-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-docs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Documentation & Engineering Review
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where relevant and available, consultancy may involve reviewing the
            documents below. Document review depends on the documents supplied
            and the agreed scope. Related class or flag matters can be discussed
            through{" "}
            <Link
              href="/class-related-consultant/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              class related consultancy
            </Link>{" "}
            or{" "}
            <Link
              href="/flag-state-inspection/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              flag state inspection
            </Link>
            .
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
    </>
  );
}
