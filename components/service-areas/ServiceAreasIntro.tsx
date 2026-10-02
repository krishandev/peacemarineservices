import Link from "next/link";

export default function ServiceAreasIntro() {
  return (
    <section
      aria-labelledby="service-areas-intro-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="service-areas-intro-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Surveying &amp; Inspection Across Western Australia
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          PMS Peace Marine Services provides marine surveying, inspection,
          auditing and technical marine support for vessel owners, operators
          and maritime stakeholders across Western Australia. Work is arranged
          around the vessel, the port or marine area, and the inspection
          requirement.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Depending on the assignment,{" "}
          <Link
            href="/our-services/"
            className="font-semibold text-pms-blue underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            marine services
          </Link>{" "}
          can include marine surveys, vessel inspections, marine safety
          inspections, pre-AMSA inspections, pre-purchase inspections, pre-PSC
          inspections, Flag State inspections, cargo surveys, bunker surveys,
          safety vetting inspections, marine audits, and technical marine
          inspection and consultancy.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          A listed service area means PMS can discuss inspection and survey
          support for that location. It does not mean PMS has a branch or
          permanent office there.
        </p>
      </div>
    </section>
  );
}
