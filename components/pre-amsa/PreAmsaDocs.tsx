import Link from "next/link";

const documents = [
  "Vessel certificates",
  "Safety documentation",
  "Maintenance records",
  "Inspection records",
  "Equipment records",
  "Operational records",
  "Previous survey or inspection reports",
  "Other vessel-specific documentation",
] as const;

const followUp = [
  "Maintenance",
  "Repair",
  "Documentation updates",
  "Further technical investigation",
  "Corrective action",
  "Additional specialist assessment",
] as const;

export default function PreAmsaDocs() {
  return (
    <>
      <section
        aria-labelledby="pre-amsa-docs-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-docs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Documentation & Record Review
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Where relevant and available, preparation may include reviewing the
            records below. The exact documents depend on the vessel and
            applicable requirements. These are not mandatory for every
            inspection.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((item) => (
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
        aria-labelledby="pre-amsa-after-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-after-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Happens After the Inspection?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS can provide findings and identify areas that may require the
              follow-up below. PMS cannot guarantee acceptance by AMSA.
            </p>
            <p>
              Related technical or class matters can be discussed through{" "}
              <Link
                href="/our-services/technical-inspection-and-marine-engineering-consultancy/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                technical inspection and marine engineering consultancy
              </Link>
              ,{" "}
              <Link
                href="/class-related-consultant/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                class related consultancy
              </Link>
              ,{" "}
              <Link
                href="/flag-state-inspection/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                flag state inspection
              </Link>{" "}
              or{" "}
              <Link
                href="/contact/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                the contact form
              </Link>
              .
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {followUp.map((item) => (
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
