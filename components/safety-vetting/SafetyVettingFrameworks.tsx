const frameworks = [
  {
    title: "SIRE",
    text: "A tanker inspection programme associated with OCIMF. Requirements depend on the vessel, operator and the inspecting organisation.",
  },
  {
    title: "CDI",
    text: "A chemical distribution inspection framework used in parts of the chemical tanker trade. Applicability depends on the commercial arrangement.",
  },
  {
    title: "OCIMF",
    text: "An industry organisation associated with tanker safety and related inspection programmes. PMS is not an OCIMF authority.",
  },
  {
    title: "RightShip",
    text: "A vetting and due-diligence service used in parts of dry bulk and related trades. PMS does not issue RightShip scores or approvals.",
  },
] as const;

export default function SafetyVettingFrameworks() {
  return (
    <section
      aria-labelledby="safety-vetting-frameworks-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="safety-vetting-frameworks-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          SIRE, CDI, OCIMF, RightShip and Other Vetting Frameworks
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
          <p>
            Maritime vetting can involve different organisations, frameworks and
            inspection requirements depending on vessel type and commercial
            operation. Examples include SIRE, CDI, OCIMF and RightShip. These
            names are used here for context only.
          </p>
          <p>
            PMS is not accredited by these organisations, is not an official
            SIRE, OCIMF, CDI or RightShip authority, and cannot issue their
            approvals or guarantee acceptance by a charterer or a particular
            vetting score. Where relevant to the agreed scope, PMS can help a
            vessel prepare for inspection requirements associated with
            applicable vetting frameworks.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {frameworks.map((item) => (
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
