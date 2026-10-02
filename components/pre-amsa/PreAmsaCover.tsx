import Link from "next/link";

const groups = [
  {
    title: "Vessel Structure & General Condition",
    items: [
      "Visible hull and deck condition, where accessible",
      "General structure observations",
      "Housekeeping and access arrangements",
    ],
  },
  {
    title: "Safety Equipment",
    items: [
      "Relevant safety equipment, where included",
      "Condition and readiness observations",
      "Equipment records where available",
    ],
  },
  {
    title: "Fire Safety Systems",
    items: [
      "Fire-fighting equipment, where accessible",
      "Visible fire safety arrangements",
      "Related documentation where provided",
    ],
  },
  {
    title: "Lifesaving Equipment",
    items: [
      "Life-saving appliances, where included in scope",
      "Visible condition and stowage",
      "Related records where available",
    ],
  },
  {
    title: "Machinery & Mechanical Systems",
    items: [
      "Main and auxiliary machinery, where accessible",
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
    title: "Navigation & Communication Equipment",
    items: [
      "Navigation equipment, where accessible",
      "Communication equipment",
      "Bridge or wheelhouse arrangements",
    ],
  },
  {
    title: "Emergency Preparedness",
    items: [
      "Emergency equipment, where included",
      "Visible emergency arrangements",
      "Related procedures or records where available",
    ],
  },
  {
    title: "Documentation & Records",
    items: [
      "Available certificates",
      "Maintenance and inspection records where provided",
      "Other vessel-specific documents supplied for review",
    ],
  },
  {
    title: "Operational Readiness",
    items: [
      "Crew and operational documentation, where applicable",
      "Known operational concerns",
      "Practical readiness observations within the agreed scope",
    ],
  },
] as const;

export default function PreAmsaCover() {
  return (
    <>
      <section
        aria-labelledby="pre-amsa-cover-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-cover-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Can a Pre-AMSA Inspection Cover?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Items below may be reviewed where applicable, where accessible and
            within the agreed inspection scope. Not every item is inspected on
            every vessel.
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
        aria-labelledby="pre-amsa-dcv-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="pre-amsa-dcv-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Pre-AMSA Inspection for Domestic Commercial Vessels
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              A Domestic Commercial Vessel (DCV) is a vessel used for commercial
              purposes within the Australian domestic regulatory framework.
              Whether a particular vessel is treated as a DCV depends on the
              vessel and how it is operated.
            </p>
            <p>
              The Australian Maritime Safety Authority (AMSA) has regulatory
              responsibilities for domestic commercial vessel safety.
              Requirements can vary according to vessel type, operation,
              certification and applicable standards. Frameworks that may be
              relevant, depending on the vessel, include the Marine Safety
              (Domestic Commercial Vessel) National Law and the National
              Standard for Commercial Vessels (NSCV).
            </p>
            <p>
              Applicable requirements depend on the vessel, operation and
              regulatory circumstances. Vessel owners and operators should
              confirm the current requirements applicable to their vessel. PMS
              is not AMSA and does not issue government certificates. Further
              context is available on{" "}
              <Link
                href="/amsa-dcv-marine-surveyor/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                AMSA DCV marine surveyor support
              </Link>{" "}
              and{" "}
              <Link
                href="/about-us/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                About PMS Peace Marine Services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
