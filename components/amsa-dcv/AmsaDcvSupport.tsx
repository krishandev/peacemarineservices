const categories = [
  {
    title: "Initial Survey",
    text: "Support for vessels entering commercial operation, or where an initial survey is applicable, depending on vessel type and survey requirements.",
  },
  {
    title: "Periodic Survey",
    text: "Support for recurring survey requirements where applicable, depending on the vessel and the survey schedule that applies.",
  },
  {
    title: "Renewal Survey",
    text: "Support related to renewal requirements where applicable, based on the vessel, documentation and survey purpose.",
  },
  {
    title: "Survey After Modification or Repair",
    text: "Inspection or survey support following relevant vessel changes, repairs or modifications where a survey may be required.",
  },
  {
    title: "Safety & Equipment Inspection",
    text: "Review of relevant safety equipment, systems and arrangements within the agreed inspection scope.",
  },
  {
    title: "Documentation Review",
    text: "Review of relevant vessel documents and records within the agreed scope, where documentation forms part of the assignment.",
  },
] as const;

export default function AmsaDcvSupport() {
  return (
    <section
      aria-labelledby="amsa-dcv-support-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="amsa-dcv-support-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          DCV Survey Support
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The categories below describe types of DCV survey support that may be
          relevant depending on vessel type and survey requirements. Not every
          vessel must undergo all of these survey types.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <li
              key={item.title}
              className="min-w-0 border border-pms-line bg-white p-5 sm:p-6"
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
