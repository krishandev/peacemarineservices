import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/site-images";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/navigation";

export const HERO_WORK_VIDEO_URL =
  "https://www.youtube.com/watch?v=2iU9F3jC8GI";

const trustHighlights = [
  "Marine Surveys",
  "Vessel Inspections",
  "Auditing & Compliance",
  "Australia",
] as const;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-pms-navy text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 lg:px-6 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-cyan uppercase">
              PMS Peace Marine Services
            </p>
            <h1
              id="hero-heading"
              className="mt-3 max-w-xl text-[1.75rem] leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
            >
              AMSA Marine Surveyor &amp; Marine Inspection Services in Australia
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              Marine surveying, inspection, auditing and consultancy services
              for vessels, operators and maritime businesses across Western
              Australia.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-[15px]">
              PMS Peace Marine Services provides marine surveys and vessel
              inspections for owners, operators, ship managers, buyers and
              maritime businesses. We also support auditing and consultancy
              work where independent inspection input is needed for operational
              and compliance-related requirements.
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
                <PhoneIcon className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <ul className="mt-8 grid max-w-xl grid-cols-2 gap-3 border-t border-white/10 pt-5 sm:grid-cols-4">
              {trustHighlights.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-pms-blue pl-3 text-sm font-medium text-white/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure className="w-full min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-pms-navy-mid">
              <Image
                src={photos.heroHarbour.src}
                alt={photos.heroHarbour.alt}
                fill
                priority
                sizes="(min-width: 1024px) 36rem, 100vw"
                className={photos.heroHarbour.className}
              />
            </div>
            <figcaption className="mt-3">
              <a
                href={HERO_WORK_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-white/80 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Our Work
                <span className="sr-only">
                  {" "}
                  (opens a PMS marine inspection video on YouTube)
                </span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.7 3.8c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.3l-.2 2.2c0 .4-.2.8-.5 1.1l-1.1 1.1a12.6 12.6 0 0 0 5.6 5.6l1.1-1.1c.3-.3.7-.5 1.1-.5l2.2-.2c.6 0 1.1.3 1.3.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.5 1.5c-.4.4-1 .6-1.6.5-3.4-.4-6.6-2.2-9.4-5-2.8-2.8-4.6-6-5-9.4-.1-.6.1-1.2.5-1.6L6.7 3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
