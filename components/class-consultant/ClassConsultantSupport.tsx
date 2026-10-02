const surveyPrep = [
  "Vessel condition",
  "Machinery",
  "Safety-related equipment",
  "Technical documentation",
  "Maintenance records",
  "Previous survey findings",
  "Repairs and modifications",
  "Relevant certificates and records",
] as const;

const assessment = [
  "Machinery",
  "Engine room",
  "Equipment",
  "Vessel condition",
  "Technical documentation",
  "Maintenance condition",
  "Visible defects",
  "Operational concerns",
] as const;

const documents = [
  "Previous survey reports",
  "Maintenance records",
  "Technical drawings",
  "Equipment documentation",
  "Repair records",
  "Modification documentation",
  "Certificates",
  "Inspection records",
] as const;

export default function ClassConsultantSupport() {
  return (
    <>
      <section
        aria-labelledby="class-consultant-survey-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-survey-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Preparing for a Class Survey
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Preparation may include reviewing the items below. The exact
            preparation depends on the vessel, class society, survey type,
            scope, applicable rules and current vessel condition. Support may
            help identify issues and can support preparation depending on the
            scope. It does not guarantee a successful class survey.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {surveyPrep.map((item) => (
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

      <section
        aria-labelledby="class-consultant-assessment-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-assessment-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Inspection and Assessment
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS may provide technical inspection and assessment support where
            appropriate. Observations and consultancy are distinct from official
            class approval or certification.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {assessment.map((item) => (
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

      <section
        aria-labelledby="class-consultant-repairs-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-repairs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Support for Vessel Repairs and Modifications
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Vessel repairs, alterations and modifications may require
              technical review and potentially approval from the relevant
              classification society, flag administration or other authority,
              depending on the vessel and applicable requirements.
            </p>
            <p>
              PMS may provide technical consultancy or support within the agreed
              scope. PMS does not approve modifications unless that specific
              authority has been verified for the assignment.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="class-consultant-fuels-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-fuels-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Support for Fuels, Lubricants and Machinery
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            <p>
              Technical consultancy may help owners and operators investigate
              or better understand concerns relating to fuels, lubricants,
              mechanical issues, machinery and vessel technical operations,
              depending on the agreed scope.
            </p>
            <p>
              PMS does not present laboratory fuel testing or certified
              laboratory analysis as part of this service. Comments on fuel or
              lubricant concerns are consultancy observations based on the
              information available for that assignment.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="class-consultant-reliability-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-reliability-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Supporting Vessel Performance and Reliability
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Technical consultancy can help owners and operators understand
            equipment condition, maintenance considerations, reliability
            concerns, operational efficiency, potential technical issues and
            lifecycle considerations. PMS does not guarantee fuel savings,
            uptime or financial savings.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="class-consultant-docs-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="class-consultant-docs-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Technical Documentation & Class-Related Records
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Depending on the assignment, relevant documents may include the
            items below. Documentation requirements vary and this list is not a
            class-specific requirement set.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
