import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Discuss vessel type, location, requested service, inspection scope, timing and relevant documents.",
  },
  {
    number: "02",
    title: "Inspection / Survey",
    description:
      "Conduct the agreed inspection or survey within the defined scope.",
  },
  {
    number: "03",
    title: "Findings & Report",
    description:
      "Provide findings, observations and recommendations appropriate to the service.",
  },
  {
    number: "04",
    title: "Follow-Up",
    description:
      "Where applicable, discuss corrective actions, additional inspection or technical support. This does not promise regulatory approval or clearance.",
  },
] as const;

const timing = [
  "Before an official AMSA inspection",
  "Before purchasing a vessel",
  "After vessel damage",
  "After repairs or modifications",
  "When safety deficiencies are identified",
  "Before Flag State inspection",
  "Before Port State Control",
  "Before a vetting inspection",
  "During cargo operations where survey support is required",
  "During bunker operations where survey support is required",
  "When technical condition requires independent assessment",
  "When internal audit support is required",
] as const;

export default function GeraldtonProcess() {
  return (
    <>
      <section
        aria-labelledby="geraldton-process-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Our Marine Inspection Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Timing depends on the vessel, berth access, harbour operations and
            agreed scope. There is no single inspection duration that applies to
            every assignment.
          </p>
          <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <li
                key={step.number}
                className="min-w-0 border border-pms-line bg-white p-5 sm:p-6"
              >
                <p className="text-sm font-semibold tracking-[0.14em] text-pms-blue">
                  {step.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-pms-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-pms-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="geraldton-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="geraldton-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should You Contact a Marine Surveyor in Geraldton?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A marine surveyor can be useful during a Mid West port call,
            coastal or regional vessel work, or related inspection planning in
            the situations below. To discuss an assignment, use the{" "}
            <Link
              href="/contact/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              contact form
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timing.map((item) => (
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
