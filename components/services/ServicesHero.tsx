import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/navigation";

export default function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="bg-pms-navy text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-14 lg:px-6 lg:py-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-cyan uppercase">
            PMS Peace Marine Services
          </p>
          <h1
            id="services-hero-heading"
            className="mt-3 max-w-xl text-[1.75rem] leading-tight font-semibold tracking-tight text-white sm:text-4xl"
          >
            Our Marine Services
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
            Professional marine surveys, inspections, audits and compliance
            services for vessel owners, operators and maritime stakeholders
            across Australia.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-[15px]">
            PMS Peace Marine Services provides practical marine inspection,
            survey, audit and consultancy support across Australian ports. The
            scope of each assignment is agreed in advance and depends on the
            vessel, location and applicable requirements.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:max-w-xl sm:flex-row">
            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-pms-blue px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-marine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request an Inspection
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 text-sm font-semibold text-pms-navy transition-colors duration-150 hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`Call PMS Peace Marine Services on ${PHONE_DISPLAY}`}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <figure className="w-full min-w-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-pms-navy-mid">
            <Image
              src="/images/services/marine-safety-inspection.webp"
              alt="Inspector checking fire hoses and safety equipment in a commercial vessel corridor"
              fill
              priority
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
