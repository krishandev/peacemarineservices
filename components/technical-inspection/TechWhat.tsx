import Link from "next/link";

const reasons = [
  "Understanding vessel technical condition",
  "Identifying visible technical issues",
  "Assessing machinery condition",
  "Identifying maintenance concerns",
  "Investigating equipment problems",
  "Supporting repair or modification planning",
  "Identifying areas requiring further specialist investigation",
  "Supporting technical decision-making",
  "Documenting technical observations",
  "Supporting vessel maintenance and operational reliability",
] as const;

export default function TechWhat() {
  return (
    <>
      <section
        aria-labelledby="tech-what-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-what-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Is Technical Marine Inspection & Engineering Consultancy?
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Technical marine inspection and engineering consultancy involves
              assessing vessel machinery, equipment, systems, structural or
              technical conditions and providing practical technical
              observations or consultancy within an agreed scope.
            </p>
            <p>
              Exact scope depends on the vessel, technical issue, inspection
              objective and available information. PMS provides this work as
              part of its{" "}
              <Link
                href="/our-services/"
                className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                marine surveying and inspection services
              </Link>
              . It is not a statutory approval, classification society approval
              or government authority function.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="tech-why-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="tech-why-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Why Arrange a Technical Inspection?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A technical inspection can help document observable condition and
            support planning. It does not guarantee vessel performance or
            eliminate all technical risks.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
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
