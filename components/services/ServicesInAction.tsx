import Image from "next/image";

const images = [
  {
    src: "/images/services/pre-psc-inspection.webp",
    alt: "Marine vessel inspection at a commercial Australian port berth",
  },
  {
    src: "/images/services/marine-safety-inspection.webp",
    alt: "Marine safety inspection of vessel fire and safety equipment",
  },
  {
    src: "/images/services/pre-purchase-inspection.webp",
    alt: "On-site marine inspection of vessel deck condition and fittings",
  },
  {
    src: "/images/services/flag-state-inspection.webp",
    alt: "Marine inspector reviewing vessel documentation during an inspection",
  },
  {
    src: "/images/services/pre-amsa-inspection.webp",
    alt: "Marine surveyor conducting a vessel compliance checklist on deck",
  },
  {
    src: "/images/services/safety-vetting-inspection.webp",
    alt: "Marine safety and vetting inspection of equipment on a tanker deck",
  },
] as const;

export default function ServicesInAction() {
  return (
    <section
      aria-labelledby="services-in-action-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="services-in-action-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Inspections in Action
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          These images show the type of vessel inspection, survey and port
          environments relevant to PMS services. They are not presented as
          photographs of specific PMS attendances.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <li key={item.src}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-pms-line bg-pms-wash">
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
