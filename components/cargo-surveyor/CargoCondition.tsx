const conditionItems = [
  "Visible damage",
  "Wetness or water exposure",
  "Contamination",
  "Packaging condition",
  "Deformation",
  "Breakage",
  "Corrosion where relevant",
  "Markings and identification",
  "Apparent shortage or discrepancy where measurable",
] as const;

const operations = [
  "Loading operations",
  "Discharge operations",
  "Cargo transfer",
  "Tally or quantity-related checks where agreed",
  "Cargo handling observations",
  "Stowage observations",
  "Securing observations",
  "Documentation of exceptions",
] as const;

const damageItems = [
  "Nature of visible damage",
  "Location of damage",
  "Apparent extent of damage",
  "Packaging condition",
  "Photographs",
  "Surrounding conditions where relevant",
  "Available cargo documentation",
  "Statements or information provided by relevant parties",
] as const;

const quantityItems = [
  "Draft survey, where applicable and agreed",
  "Ullage-related measurements, where applicable",
  "Quantity observations",
  "Tally-related observations",
  "Measurement records",
  "Cargo documentation review",
] as const;

export default function CargoCondition() {
  return (
    <>
      <section
        aria-labelledby="cargo-condition-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-condition-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Condition Inspection
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            A survey may document observable cargo condition. These are visual
            and practical observations, not laboratory testing or specialist
            analysis. A visual survey cannot determine every cause of cargo
            damage.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditionItems.map((item) => (
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
        aria-labelledby="cargo-ops-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-ops-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Loading & Discharge Surveys
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Cargo survey support may be used during the operations below, where
            attendance is instructed. PMS does not control the port, terminal,
            vessel crew or cargo operation.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {operations.map((item) => (
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
        aria-labelledby="cargo-damage-heading"
        className="bg-pms-wash"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-damage-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Damage Surveys
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Cargo damage surveys may document the points below. Determining the
            definitive cause of damage may require additional evidence, testing
            or specialist investigation.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {damageItems.map((item) => (
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
        aria-labelledby="cargo-quantity-heading"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <h2
            id="cargo-quantity-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Cargo Quantity & Measurement Support
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
            Quantity-related survey work may include appropriate measurements or
            observations depending on the cargo and agreed scope. Not every
            cargo survey includes a draft survey. Methods used are those agreed
            for the assignment.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quantityItems.map((item) => (
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
    </>
  );
}
