const steps = [
  {
    number: "01",
    title: "Initial Discussion",
    description:
      "Understand the vessel, technical issue, project and objectives.",
  },
  {
    number: "02",
    title: "Scope Definition",
    description:
      "Agree the consultancy or inspection scope and available information.",
  },
  {
    number: "03",
    title: "Technical Review",
    description:
      "Review the relevant vessel condition, documentation, equipment or technical issue.",
  },
  {
    number: "04",
    title: "Findings & Recommendations",
    description:
      "Provide clear observations and practical recommendations within the agreed scope.",
  },
] as const;

const situations = [
  "Before a class survey",
  "When technical deficiencies are identified",
  "Before major repairs",
  "Before vessel modifications",
  "During machinery-related problems",
  "When reviewing technical documentation",
  "During vessel acquisition or takeover",
  "When assessing vessel condition",
  "When planning maintenance or technical work",
  "When additional independent technical input is useful",
] as const;

export default function ClassConsultantProcess() {
  return (
    <>
      <section
        aria-labelledby="class-consultant-process-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-process-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Our Class Related Consultancy Process
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The steps below outline a typical consultancy pathway. Timing and
            reporting format depend on the assignment. PMS does not promise a
            specific turnaround or a guaranteed technical outcome.
          </p>
          <ol className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="min-w-0 border border-pms-line bg-pms-wash p-5 sm:p-6"
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
        aria-labelledby="class-consultant-class-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-class-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Working Alongside Classification Requirements
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              PMS consultancy can support owners and operators in preparing for
              or understanding technical matters related to classification.
            </p>
            <p>
              The relevant classification society remains responsible for its
              own class surveys, technical decisions, approvals and
              certification. PMS is not a classification society, is not
              described here as a Recognized Organization, and is not affiliated
              with a particular class society on this page.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="class-consultant-when-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Might You Need a Class Related Consultant?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Consultancy may be useful in the situations below and can help
            depending on the circumstances. It is not required in every case.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item}
                className="flex min-w-0 gap-3 border border-pms-line bg-pms-wash px-4 py-3 text-sm leading-6 text-pms-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pms-blue"
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
