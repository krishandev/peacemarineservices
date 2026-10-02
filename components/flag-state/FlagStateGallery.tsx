import Image from "next/image";

const images = [
  {
    src: "/images/services/flag-state-inspection.webp",
    alt: "Inspector reviewing vessel documents beside a commercial ship at a quay",
  },
  {
    src: "/images/services/pre-psc-inspection.webp",
    alt: "Commercial cargo ship alongside a port berth during a vessel inspection",
  },
  {
    src: "/images/services/marine-safety-inspection.webp",
    alt: "Inspector checking fire hoses and safety equipment in a commercial vessel corridor",
  },
  {
    src: "/images/services/pre-amsa-inspection.webp",
    alt: "Surveyor on a commercial vessel deck reviewing an inspection checklist",
  },
  {
    src: "/images/services/internal-audits-ism-isps-mlc.webp",
    alt: "Auditor reviewing vessel documentation and checklists at a desk onboard",
  },
  {
    src: "/images/services/technical-inspection-marine-engineering.webp",
    alt: "Marine diesel machinery and piping in a commercial ship engine room",
  },
] as const;

export default function FlagStateGallery() {
  return (
    <section
      aria-labelledby="flag-state-gallery-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="flag-state-gallery-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Flag State Inspection & Marine Survey Work
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          These images show the type of vessel inspection, documentation review
          and marine environments relevant to this service. They are not
          presented as photographs of specific PMS attendances, flag
          administrations or inspection results.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <li key={item.src} className="min-w-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-pms-line bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
