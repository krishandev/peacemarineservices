const pillars = [
  {
    code: "ISM",
    title: "Safety Management",
    text: "Review of Safety Management System documentation and implementation within the agreed scope.",
  },
  {
    code: "ISPS",
    title: "Ship Security",
    text: "Review of applicable ship security procedures and Ship Security Plan implementation within the agreed scope.",
  },
  {
    code: "MLC",
    title: "Maritime Labour",
    text: "Review of relevant seafarer working and living condition requirements and related records within the agreed scope.",
  },
] as const;

const documents = [
  "Company procedures",
  "Safety management documentation",
  "Security documentation",
  "MLC-related procedures",
  "Previous audit reports",
  "Corrective action records",
  "Vessel records",
  "Training records",
  "Maintenance records",
  "Relevant certificates and documentation",
] as const;

export default function InternalAuditsScope() {
  return (
    <>
      <section
        aria-labelledby="internal-audits-scope-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-scope-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            What Can an ISM, ISPS or MLC Audit Cover?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The audit scope is agreed according to the vessel, company, audit
            purpose, applicable management system, applicable requirements,
            previous findings and operational circumstances.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
              <li
                key={item.code}
                className="min-w-0 border border-pms-line bg-pms-wash p-5 sm:p-6"
              >
                <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
                  {item.code}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-pms-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-pms-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="internal-audits-prep-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-prep-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Preparing for an Internal Maritime Audit
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the audit scope, relevant documents may include the
            items below. The same document list does not apply to every audit.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
