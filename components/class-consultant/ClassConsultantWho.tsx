const audiences = [
  {
    title: "Ship Owners",
    text: "Support with technical issues, vessel condition, repairs, modifications and lifecycle considerations.",
  },
  {
    title: "Ship Managers",
    text: "Technical support for maintenance, inspection preparation and operational issues.",
  },
  {
    title: "Vessel Operators",
    text: "Practical assistance with technical and operational concerns.",
  },
  {
    title: "Charterers",
    text: "Technical information and independent support where relevant to a vessel or project.",
  },
  {
    title: "Marine Companies",
    text: "Technical consultancy for marine projects, inspections and vessel-related requirements.",
  },
  {
    title: "Technical Teams",
    text: "Additional technical review or specialist marine inspection support where appropriate.",
  },
] as const;

export default function ClassConsultantWho() {
  return (
    <section
      aria-labelledby="class-consultant-who-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="class-consultant-who-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Who Can Benefit From Class Related Marine Consultancy?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          Support is discussed against the vessel, project and agreed scope.
          PMS does not claim affiliation with a particular classification
          society.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
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
