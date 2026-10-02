export default function ExperienceCommitment() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="experience-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Experience &amp; Professional Commitment
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <p className="text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS Peace Marine Services approaches marine surveying and
            inspection as structured, documented work. The aim is accurate
            inspection input, consistent process and reporting that the
            client can use.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Accurate inspection work",
                text: "The inspection or survey is carried out against an agreed scope for the vessel and assignment.",
              },
              {
                title: "Consistent processes",
                text: "Work is planned and delivered in a repeatable way so findings can be followed and compared.",
              },
              {
                title: "Clear communication",
                text: "Requirements, timing and findings are discussed in practical terms before and after attendance.",
              },
              {
                title: "Professional reporting",
                text: "Results are documented so you have a written record of the inspection or survey completed.",
              },
            ].map((item) => (
              <li key={item.title} className="border border-pms-line bg-white p-5">
                <h3 className="font-semibold text-pms-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-pms-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
