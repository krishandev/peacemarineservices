import { GOOGLE_MAPS_HREF } from "@/lib/navigation";

export default function ContactMap() {
  return (
    <section
      aria-labelledby="contact-map-heading"
      className="bg-pms-wash"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <h2
          id="contact-map-heading"
          className="max-w-3xl text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          Find PMS Peace Marine Services
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          View the PMS Peace Marine Services Google Business listing. The
          listing opens in a new tab.
        </p>
        <a
          href={GOOGLE_MAPS_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-pms-blue px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-pms-marine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        >
          View PMS on Google Maps
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
