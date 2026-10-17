import Image from "next/image";
import Link from "next/link";
import { locations as defaultLocations, type Location } from "@/data/locations";

export interface LocationGridProps {
  locations?: Location[];
  title?: string;
  description?: string;
  linkLabel?: string;
  showImages?: boolean;
}

export default function LocationGrid({
  locations = defaultLocations,
  title,
  description,
  linkLabel = "View Marine Services",
  showImages = false,
}: LocationGridProps) {
  const headingId = title ? "location-grid-heading" : undefined;
  const gridClassName = showImages
    ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
    : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6";

  const grid = (
    <ul className={gridClassName}>
      {locations.map((location) => (
        <li key={location.href ?? location.name} className="h-full">
          <article className="flex h-full flex-col overflow-hidden rounded-sm border border-pms-line bg-white shadow-[0_1px_2px_rgba(7,26,50,0.05)] transition-[border-color,box-shadow] duration-150 hover:border-pms-blue/45 hover:shadow-[0_8px_20px_rgba(7,26,50,0.07)]">
            {showImages && location.image ? (
              <div className="relative aspect-[16/10] bg-pms-wash">
                <Image
                  src={location.image}
                  alt={location.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}

            <div className="flex h-full flex-col p-5 sm:p-6">
              <div className="flex items-start gap-3">
                {showImages && location.image ? null : (
                  <span
                    className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-pms-wash text-pms-blue"
                    aria-hidden="true"
                  >
                    <MapPinIcon className="h-4 w-4" />
                  </span>
                )}
                <div className="min-w-0">
                  <h3 className="text-lg leading-snug font-semibold tracking-tight text-pms-navy">
                    {location.name}
                  </h3>
                  {location.description ? (
                    <p className="mt-2 text-sm leading-6 text-pms-muted">
                      {location.description}
                    </p>
                  ) : null}
                </div>
              </div>

              {location.href ? (
                <Link
                  href={location.href}
                  aria-label={
                    linkLabel === "View Marine Services"
                      ? `Marine Surveyor Services in ${location.name}`
                      : `${linkLabel} in ${location.name}`
                  }
                  className="mt-auto inline-flex min-h-11 w-fit items-center gap-1.5 pt-5 rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                >
                  {linkLabel}
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              ) : null}
            </div>
          </article>
        </li>
      ))}
    </ul>
  );

  if (!title && !description) {
    return grid;
  }

  return (
    <section aria-labelledby={headingId}>
      {title ? (
        <h2
          id={headingId}
          className="text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-pms-muted sm:text-[15px]">
          {description}
        </p>
      ) : null}
      <div className={title || description ? "mt-8" : undefined}>{grid}</div>
    </section>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
