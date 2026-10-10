import Image from "next/image";
import { photos } from "@/data/site-images";

const images = [
  photos.heroHarbour,
  photos.rescueBoat,
  photos.bulkHatches,
  photos.vesselAlongside,
  photos.bridgeConsole,
  photos.tankerDeckPersonnel,
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
                  className={item.className}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
