import Image from "next/image";
import { photos } from "@/data/site-images";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/navigation";

export default function PortHedlandHero() {
  return (
    <section
      aria-labelledby="port-hedland-hero-heading"
      className="bg-pms-navy text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-16">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-cyan uppercase">
            Port Hedland, Western Australia
          </p>
          <h1
            id="port-hedland-hero-heading"
            className="mt-3 max-w-xl text-[1.75rem] leading-tight font-semibold tracking-tight break-words text-white sm:text-4xl"
          >
            Marine Surveyor & Inspection Services in Port Hedland, Western
            Australia
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            PMS Peace Marine Services provides marine surveying, vessel
            inspection, safety, audit and technical support for vessel owners,
            operators and maritime stakeholders in Port Hedland and relevant
            Western Australian service areas.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:max-w-xl sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-pms-blue px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-marine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Request an Inspection
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-white px-6 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <figure className="w-full min-w-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-pms-navy-mid">
            <Image
              src={photos.bulkLoading.src}
              alt={photos.bulkLoading.alt}
              fill
              priority
              sizes="(min-width: 1024px) 36rem, 100vw"
              className={photos.bulkLoading.className}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
