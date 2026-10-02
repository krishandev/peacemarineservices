const reasons = [
  {
    title: "Identify Findings Early",
    text: "Internal audits can help identify non-conformities, observations or weaknesses before they become larger issues.",
  },
  {
    title: "Verify Procedures",
    text: "Audits can assess whether documented procedures are being followed in practice.",
  },
  {
    title: "Support Corrective Action",
    text: "Findings can help management identify areas requiring corrective action.",
  },
  {
    title: "Strengthen Safety Management",
    text: "ISM audits can support continuous improvement of safety management systems.",
  },
  {
    title: "Review Security Arrangements",
    text: "ISPS audits can help review ship security procedures and implementation.",
  },
  {
    title: "Support Labour Compliance",
    text: "MLC-related audits can help review relevant working and living condition requirements.",
  },
] as const;

export default function InternalAuditsWhy() {
  return (
    <section
      aria-labelledby="internal-audits-why-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="internal-audits-why-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Why Are Internal Maritime Audits Important?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Internal audits can help companies review systems and may identify
          issues requiring attention. They do not automatically prevent
          detention, accidents, penalties or certification issues.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
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
  );
}
