import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discuss Your Vessel & Requirement",
    description:
      "Review vessel type, berth or location in the Fremantle area, timing and the purpose of the inspection or survey.",
  },
  {
    number: "02",
    title: "Confirm Inspection Scope",
    description:
      "Agree the areas to be inspected, harbour access arrangements and any documents to be reviewed.",
  },
  {
    number: "03",
    title: "Conduct the Marine Inspection",
    description:
      "Inspect the agreed areas and record observable conditions on board, alongside or at the relevant location.",
  },
  {
    number: "04",
    title: "Record Findings & Observations",
    description:
      "Document findings, supporting evidence and areas requiring attention within the agreed scope.",
  },
  {
    number: "05",
    title: "Provide the Inspection Report",
    description:
      "Issue a structured report with observations and practical recommendations. Follow-up support can be discussed where required.",
  },
] as const;

const audiences = [
  "Vessel owners",
  "Ship managers",
  "Vessel operators",
  "Commercial vessel operators",
  "Charterers",
  "Vessel buyers",
  "Maritime companies",
  "Cargo interests",
  "Other maritime stakeholders",
] as const;

const timing = [
  "Buying or selling a vessel",
  "Preparing for an external inspection",
  "Preparing for an AMSA-related inspection",
  "Reviewing vessel condition",
  "Checking safety readiness",
  "Investigating machinery or technical issues",
  "Cargo damage inspection",
  "Bunker survey",
  "Preparing for Port State Control",
  "Preparing for safety vetting",
  "Internal maritime audits",
  "After repairs or modifications",
] as const;

export default function FremantleProcess() {
  return (
    <>
      <section
        aria-labelledby="fremantle-process-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="fremantle-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Inspection Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Timing depends on the vessel, berth access, harbour operations and
            agreed scope. Follow-up support can be discussed where required.
            There is no single inspection duration that applies to every
            assignment.
          </p>
          <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        aria-labelledby="fremantle-who-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="fremantle-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who We Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Marine survey and inspection support in Fremantle may be relevant to
            the parties below. This is not a legal requirement to use PMS.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-pms-line bg-pms-wash px-4 py-3 text-sm font-medium break-words text-pms-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="fremantle-when-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="fremantle-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When to Request a Marine Surveyor in Fremantle
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A marine surveyor can be useful during a Fremantle port call, a
            harbour inspection window, or related vessel work in the situations
            below. To discuss an assignment, use the{" "}
            <Link
              href="/contact/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              contact form
            </Link>{" "}
            or review other{" "}
            <Link
              href="/faq/"
              className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              frequently asked questions
            </Link>
            .
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {timing.map((item) => (
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
