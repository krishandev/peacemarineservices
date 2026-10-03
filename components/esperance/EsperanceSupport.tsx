import Link from "next/link";

const cards = [
  {
    title: "Flag State Inspection",
    href: "/flag-state-inspection/",
    text: "Inspection support against the requirements of a vessel's flag administration, within an agreed scope. PMS is not a Flag State authority.",
  },
  {
    title: "Pre-PSC Inspection",
    href: "/pre-psc-inspection-in-australia/",
    text: "Preparatory assessment before an applicable Port State Control inspection. PMS is not a Port State Control authority and does not perform official PSC inspections.",
  },
  {
    title: "Safety Vetting Inspector",
    href: "/safety-vetting-inspector-in-australia/",
    text: "Preparatory or commercial safety vetting support. Frameworks such as SIRE, CDI, OCIMF or RightShip may be relevant context for some vessels, but PMS is not accredited by those organisations and does not issue official vetting scores.",
  },
] as const;

const auditItems = [
  "ISM internal audit support",
  "ISPS internal audit support",
  "MLC internal audit support",
  "Documentation review",
  "Implementation review",
  "Identifying findings",
  "Corrective-action support",
  "Follow-up, where agreed",
] as const;

const classItems = [
  "Vessel repairs",
  "Modifications",
  "Machinery issues",
  "Technical documentation",
  "Inspection preparation",
  "Communication and coordination support, where agreed",
] as const;

export default function EsperanceSupport() {
  return (
    <>
      <section
        aria-labelledby="esperance-related-support-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="esperance-related-support-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Inspection & Vetting Preparation Support in Esperance
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Visiting commercial ships may need preparation connected with Flag
            State inspection, Port State Control, safety vetting or pre-vetting
            inspection. PMS provides preparation, inspection and consultancy
            support. Official inspections and regulatory decisions remain with
            the relevant authority or organisation. PMS does not guarantee
            clearance, detention avoidance, a vetting score or acceptance.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((item) => (
              <li
                key={item.href}
                className="flex min-w-0 flex-col border border-pms-line bg-pms-wash p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-pms-muted">
                  {item.text}
                </p>
                <p className="mt-4">
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                  >
                    {item.title}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="esperance-audits-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="esperance-audits-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            ISM, ISPS & MLC Internal Audits in Esperance
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Internal audits are consultancy and review services. They do not
            automatically constitute statutory certification or official
            government approval. See{" "}
            <Link
              href="/internal-audits-for-ism-isps-and-mlc/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              internal audits for ISM, ISPS and MLC
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {auditItems.map((item) => (
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
        aria-labelledby="esperance-class-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="esperance-class-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Class-Related Marine Consultancy in Esperance
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS may provide technical preparation and consultancy support around
            repairs, modifications and inspection readiness. PMS is not a
            classification society, cannot issue class certificates and does not
            approve class matters as part of this service. See{" "}
            <Link
              href="/class-related-consultant/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              class-related marine consultancy
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {classItems.map((item) => (
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
