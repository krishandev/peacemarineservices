const codes = [
  {
    code: "ISM",
    title: "International Safety Management Code",
    text: "The ISM Code provides an international framework for the safe management and operation of ships and for pollution prevention.",
  },
  {
    code: "ISPS",
    title: "International Ship and Port Facility Security Code",
    text: "ISPS establishes a security framework for ships and relevant port facilities against security threats.",
  },
  {
    code: "MLC, 2006",
    title: "Maritime Labour Convention",
    text: "MLC, 2006 establishes international standards relating to seafarers' working and living conditions.",
  },
] as const;

export default function InternalAuditsIntro() {
  return (
    <>
      <section
        aria-labelledby="internal-audits-intro-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-intro-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Internal Maritime Audits for ISM, ISPS and MLC
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Internal audits are an important part of reviewing a company&apos;s
              or vessel&apos;s management and compliance systems.
            </p>
            <p>
              PMS Peace Marine Services provides internal audit support covering
              ISM, ISPS and MLC, depending on the agreed audit scope. PMS is not
              a Flag State, Port State or classification society.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="internal-audits-codes-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="internal-audits-codes-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Understanding ISM, ISPS and MLC
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            The summaries below are for general understanding. They are not
            legal advice and do not reproduce convention text.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {codes.map((item) => (
              <li
                key={item.code}
                className="min-w-0 border border-pms-line bg-white p-5 sm:p-6"
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
    </>
  );
}
