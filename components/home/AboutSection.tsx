import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/site-images";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-16">
        <figure className="w-full min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-pms-line bg-pms-navy">
            <Image
              src={photos.vesselAlongside.src}
              alt={photos.vesselAlongside.alt}
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className={photos.vesselAlongside.className}
            />
          </div>
        </figure>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
            About PMS Marine Services
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            Marine Inspection Expertise for Vessel Owners, Operators &amp;
            Maritime Businesses
          </h2>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            PMS Peace Marine Services is a marine surveying and inspection
            company working with vessel owners, operators, ship managers,
            buyers and other marine professionals. We provide marine surveys,
            vessel inspections, internal audits and marine consultancy where
            independent inspection input is required.
          </p>
          <p className="mt-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
            Services are available across Western Australia, including Perth,
            Fremantle, Kwinana, Bunbury, Albany, Esperance, Geraldton, Port
            Hedland, Dampier, Karratha and the Pilbara. Coverage for a specific
            job depends on the vessel, timing and inspection requirement. PMS
            does not operate a physical office in every listed location.
          </p>
          <Link
            href="/about-us/"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-pms-blue px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-navy-mid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            Learn More About PMS
          </Link>
        </div>
      </div>
    </section>
  );
}
