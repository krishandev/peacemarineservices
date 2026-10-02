const audiences = [
  {
    title: "Vessel owners",
    description:
      "Independent inspection and survey input when you need a clear picture of vessel condition or inspection requirements.",
  },
  {
    title: "Vessel operators",
    description:
      "Practical inspection and audit support arranged around operations, port calls and planned attendances.",
  },
  {
    title: "Ship managers",
    description:
      "Survey, inspection and internal audit work to support fleet management and documented findings.",
  },
  {
    title: "Maritime businesses",
    description:
      "Consultancy and inspection support for commercial marine activities where independent technical input is required.",
  },
  {
    title: "Vessel buyers",
    description:
      "Pre-purchase inspection support so a buying decision can be informed by an agreed inspection scope.",
  },
  {
    title: "Commercial vessel stakeholders",
    description:
      "Inspection and survey work for parties involved in commercial vessel operations, including safety and compliance-related requests.",
  },
] as const;

export default function WhoWeSupport() {
  return (
    <section
      aria-labelledby="who-we-support-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Who We Support
        </p>
        <h2
          id="who-we-support-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Supporting Vessel Owners, Operators &amp; Maritime Businesses
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services works with people and organisations who
          need marine surveying, inspection, auditing or consultancy support.
          We do not publish a client list on this page.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <li
              key={item.title}
              className="border-l-2 border-pms-blue bg-pms-wash px-5 py-5"
            >
              <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-pms-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
