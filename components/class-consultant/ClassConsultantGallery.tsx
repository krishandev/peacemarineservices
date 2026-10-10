import Image from "next/image";
import { photos, stockPhotos } from "@/data/site-images";

const images = [
  photos.mooringWinch,
  stockPhotos.engineRoom,
  photos.tankerDeckGreen,
  photos.bulkHatches,
  photos.tankerDeckPersonnel,
  photos.bridgeWide,
] as const;

export default function ClassConsultantGallery() {
  return (
    <section
      aria-labelledby="class-consultant-gallery-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="class-consultant-gallery-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Marine Technical Consultancy in Practice
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          These images show the type of machinery inspection, technical review
          and marine environments relevant to this service. They are not
          presented as photographs of specific PMS assignments, class society
          involvement or technical outcomes.
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
