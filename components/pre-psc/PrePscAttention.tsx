const attentionAreas = [
  "Expired or incomplete documentation",
  "Visible equipment deficiencies",
  "Fire safety equipment",
  "Lifesaving equipment",
  "Emergency equipment",
  "Navigation and communication equipment",
  "Machinery condition",
  "Electrical systems",
  "Maintenance records",
  "Housekeeping",
  "Emergency preparedness",
  "Crew familiarisation",
  "Pollution-prevention equipment",
  "Visible structural or deck deficiencies",
] as const;

export default function PrePscAttention() {
  return (
    <section
      aria-labelledby="pre-psc-attention-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="pre-psc-attention-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Common Areas That May Require Attention
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The examples below may be relevant depending on the vessel. They are
          not an official PSC checklist.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {attentionAreas.map((item) => (
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
  );
}
