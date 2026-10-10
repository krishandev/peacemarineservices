import Image from "next/image";
import { photos, stockPhotos } from "@/data/site-images";

const images = [
  stockPhotos.dcvWorkboat,
  photos.mooringWinch,
  photos.containerGantries,
  photos.tankerDeckGreen,
  photos.vesselAlongside,
  photos.tankerDeckPersonnel,
] as const;

export default function AboutMarineWork() {
  return (
    <section
      aria-labelledby="about-marine-work-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Marine Work
        </p>
        <h2
          id="about-marine-work-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Inspection &amp; Survey Work
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          These images illustrate the type of marine inspection, survey and
          port environments relevant to PMS services. They are not presented
          as photographs of PMS attendances.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <li key={item.src}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-pms-line bg-white">
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
