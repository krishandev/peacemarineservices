export default function ServicesIntro() {
  return (
    <section
      aria-labelledby="services-intro-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          What We Provide
        </p>
        <h2
          id="services-intro-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Surveying, Inspection &amp; Compliance Services
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services supports vessel owners, operators, ship
          managers and other maritime stakeholders with inspection, survey,
          audit and consultancy work. Services can help operators review
          vessel condition, safety arrangements, documentation and operational
          readiness within an agreed scope.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Work is arranged around the vessel, port and inspection requirement.
          PMS does not guarantee regulatory outcomes. The exact items reviewed
          depend on the assignment and the applicable framework.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Vessel inspections",
            "Marine surveys",
            "Safety inspections",
            "AMSA-related inspection preparation and support",
            "Flag State inspections",
            "Marine audits",
            "Pre-purchase inspections",
            "Cargo and bunker surveys",
            "Technical inspection and engineering consultancy",
            "Pre-PSC inspections",
            "Safety vetting inspections",
          ].map((item) => (
            <li
              key={item}
              className="border-l-2 border-pms-blue bg-pms-wash px-4 py-3 text-sm font-medium text-pms-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
