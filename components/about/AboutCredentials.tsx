import Image from "next/image";

const credentials = [
  {
    src: "/Peace-Marine-Services-1.png",
    alt: "Australasian Institute of Marine Surveyors certificate of membership issued to Peace Marine Services",
    label: "Membership Certificate",
    caption:
      "Certificate of Membership issued to Peace Marine Services by the Australasian Institute of Marine Surveyors. The document records membership from 11 July 2019 and shows an expiry of 1 July 2026. Current membership status is not confirmed on this page.",
  },
  {
    src: "/Peace-Marine-Services.png",
    alt: "QMS Audits statement of attainment issued to Peace Marine Services for quality audit units",
    label: "Audit Training / Statement of Attainment",
    caption:
      "Statement of Attainment issued to Peace Marine Services by QMS Audits for quality audit units, including ISO integrated management system lead auditor training. This is a training attainment document, not a claim of organisational accreditation.",
  },
  {
    src: "/Peace-Marine-Services-2.png",
    alt: "International Maritime Training certificate of achievement for Tanker Vetting Preparation and Inspection SIRE 2.0 issued to Peace Marine Services",
    label: "Professional Training & Certificate",
    caption:
      "Certificate of Achievement issued to Peace Marine Services by International Maritime Training for Tanker Vetting Preparation & Inspection (SIRE 2.0). This records a training course result, not an AMSA approval.",
  },
] as const;

export default function AboutCredentials() {
  return (
    <section
      aria-labelledby="about-credentials-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Professional Credentials
        </p>
        <h2
          id="about-credentials-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Professional Documentation
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          The documents below are shown as issued. Captions describe what
          appears on each document and do not add claims beyond that.
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
                <figcaption className="border-t border-pms-line px-4 py-3">
                  <p className="text-sm font-semibold text-pms-navy">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-pms-muted">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
