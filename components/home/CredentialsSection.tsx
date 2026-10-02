import Image from "next/image";

const credentials = [
  {
    src: "/Peace-Marine-Services-1.png",
    alt: "Australasian Institute of Marine Surveyors certificate of membership issued to Peace Marine Services",
    caption:
      "Certificate of Membership, Australasian Institute of Marine Surveyors, issued to Peace Marine Services.",
  },
  {
    src: "/Peace-Marine-Services.png",
    alt: "QMS Audits statement of attainment issued to Peace Marine Services for quality audit units",
    caption:
      "Statement of Attainment issued to Peace Marine Services by QMS Audits for quality audit units, including ISO integrated management system lead auditor training.",
  },
  {
    src: "/Peace-Marine-Services-2.png",
    alt: "International Maritime Training certificate of achievement issued to Peace Marine Services for Tanker Vetting Preparation and Inspection SIRE 2.0",
    caption:
      "Certificate of Achievement issued to Peace Marine Services by International Maritime Training for Tanker Vetting Preparation & Inspection (SIRE 2.0).",
  },
] as const;

export default function CredentialsSection() {
  return (
    <section
      aria-labelledby="credentials-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Professional Credentials
        </p>
        <h2
          id="credentials-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Experience, Professional Standards &amp; Marine Industry Expertise
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The documents below are professional records supplied by PMS Peace
          Marine Services. They are shown as issued and should be read in
          their own terms.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {credentials.map((item) => (
            <li key={item.src}>
              <figure className="h-full overflow-hidden rounded-sm border border-pms-line bg-pms-wash">
                <div className="relative aspect-[3/4] bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
                <figcaption className="border-t border-pms-line px-4 py-3 text-sm leading-6 text-pms-muted">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
