const audiences = [
  {
    title: "Ship Owners",
    text: "Independent review of safety, security and labour management systems used across owned vessels.",
  },
  {
    title: "Ship Management Companies",
    text: "Internal audit support for company and shipboard management systems.",
  },
  {
    title: "Vessel Operators",
    text: "Practical audit support for onboard implementation of applicable procedures.",
  },
  {
    title: "Maritime Companies",
    text: "Structured review of relevant management systems within an agreed scope.",
  },
  {
    title: "Fleet Managers",
    text: "Audit support aligned to fleet vessels, locations and operational circumstances.",
  },
  {
    title: "DPA / Safety Management Teams",
    text: "Internal ISM audit support to review SMS documentation and implementation.",
  },
  {
    title: "Security Management Teams",
    text: "ISPS-related internal audit support for ship security procedures and records.",
  },
  {
    title: "Maritime Compliance Teams",
    text: "Independent review of ISM, ISPS and MLC systems depending on the assignment.",
  },
] as const;

const situations = [
  "As part of an established internal audit programme",
  "Before an external audit",
  "Before a scheduled verification",
  "After significant operational changes",
  "After recurring findings",
  "Following changes to procedures",
  "When management wants an independent review",
  "When corrective actions need verification",
  "When reviewing SMS, security or labour management processes",
] as const;

const approach = [
  "Structured audit process",
  "Evidence-based findings",
  "Clear reporting",
  "Practical observations",
  "Confidential handling of client information",
  "Focus on corrective action",
  "Professional communication",
] as const;

export default function InternalAuditsWho() {
  return (
    <>
      <section
        aria-labelledby="internal-audits-who-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-who-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Who Can Benefit From ISM, ISPS and MLC Internal Audits?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Internal audit support may be relevant to the parties below,
            depending on the company, vessel and agreed scope.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <li
                key={item.title}
                className="min-w-0 border border-pms-line bg-pms-wash p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-pms-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="internal-audits-when-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-when-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            When Should You Consider an Internal Maritime Audit?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            An internal audit may be useful in the situations below. Frequency
            depends on the applicable management system, company procedures and
            relevant requirements. There is no single interval stated here for
            every vessel.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {situations.map((item) => (
              <li
                key={item}
                className="flex min-w-0 gap-3 border border-pms-line bg-white px-4 py-3 text-sm leading-6 text-pms-muted"
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

      <section
        aria-labelledby="internal-audits-approach-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-approach-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Independent and Practical Audit Approach
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Internal audit value comes from an objective review of the
            applicable systems and implementation. PMS does not claim
            government certification or guaranteed impartiality beyond a
            structured, professional approach to the agreed assignment.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((item) => (
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
