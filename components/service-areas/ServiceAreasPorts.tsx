import Image from "next/image";
import { photos } from "@/data/site-images";

export default function ServiceAreasPorts() {
  return (
    <section
      aria-labelledby="service-areas-ports-heading"
      className="bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-16">
        <div>
          <h2
            id="service-areas-ports-heading"
            className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Supporting Marine Operations Across Key Western Australian Ports
          </h2>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS Peace Marine Services is a marine surveying, inspection,
            auditing and consultancy provider working with vessel owners,
            operators, ship managers and other maritime stakeholders.
          </p>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            Service coverage is focused on Western Australia. Inspection and
            survey work can be discussed for major ports and marine locations,
            including metropolitan, regional and Pilbara areas, depending on
            the vessel and the assignment.
          </p>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            When you enquire, it helps to include the port or marine area, the
            vessel, the timing and the type of inspection or survey required.
            PMS can then discuss whether the work can be arranged for that
            location.
          </p>
        </div>
        <figure className="w-full min-w-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-pms-line bg-pms-wash">
            <Image
              src={photos.containerGantries.src}
              alt={photos.containerGantries.alt}
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className={photos.containerGantries.className}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
