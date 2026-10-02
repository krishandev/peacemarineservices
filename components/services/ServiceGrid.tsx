import type { ReactNode } from "react";
import {
  services as defaultServices,
  type Service,
  type ServiceIconName,
} from "@/data/services";
import ServiceCard from "./ServiceCard";

export interface ServiceGridProps {
  services?: Service[];
  title?: string;
  description?: string;
}

export default function ServiceGrid({
  services = defaultServices,
  title,
  description,
}: ServiceGridProps) {
  const headingId = title ? "service-grid-heading" : undefined;

  const grid = (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {services.map((service) => (
        <li key={service.href} className="h-full">
          <ServiceCard
            title={service.title}
            description={service.description}
            href={service.href}
            icon={getServiceIcon(service.icon)}
            image={service.image}
            imageAlt={service.imageAlt}
          />
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

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function getServiceIcon(name: ServiceIconName) {
  switch (name) {
    case "safety-inspection":
      return (
        <IconFrame>
          <path
            d="M12 3.5 5 6.2v5.3c0 4.3 2.8 7.3 7 8.5 4.2-1.2 7-4.2 7-8.5V6.2L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </IconFrame>
      );
    case "amsa-dcv":
      return (
        <IconFrame>
          <path
            d="M4 17.5 12 6l8 11.5H4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8.2 17.5V14h7.6v3.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </IconFrame>
      );
    case "flag-state":
      return (
        <IconFrame>
          <path
            d="M6 20V4.5h.2L14 8.2 6.2 12"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </IconFrame>
      );
    case "class-consultant":
      return (
        <IconFrame>
          <rect
            x="5"
            y="4.5"
            width="14"
            height="15"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8.5 9h7M8.5 12.5h7M8.5 16h4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </IconFrame>
      );
    case "internal-audits":
      return (
        <IconFrame>
          <path
            d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <rect
            x="5.5"
            y="7"
            width="13"
            height="13"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="m9 14 2 2 4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </IconFrame>
      );
    case "pre-purchase":
      return (
        <IconFrame>
          <circle cx="11" cy="11" r="6.2" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M15.5 15.5 20 20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </IconFrame>
      );
    case "pre-amsa":
      return (
        <IconFrame>
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 8.5V12l2.5 1.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </IconFrame>
      );
    case "cargo-survey":
      return (
        <IconFrame>
          <path
            d="M4.5 16.5 8 8h8l3.5 8.5H4.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8 8V5.5h8V8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </IconFrame>
      );
    case "technical-consultancy":
      return (
        <IconFrame>
          <path
            d="M14.5 5.5 18.5 9.5 9.8 18.2 5.5 19l.8-4.3L14.5 5.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m13 7 4 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </IconFrame>
      );
    case "bunker-survey":
      return (
        <IconFrame>
          <path
            d="M8 7h6.5v12H8V7Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8 10h6.5M11.2 4.5v2.5M14.5 12.5h2.2L18.5 15v4H14.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </IconFrame>
      );
    case "pre-psc":
      return (
        <IconFrame>
          <path
            d="M5 18.5h14M6.5 18.5 9 8h6l2.5 10.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 12h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </IconFrame>
      );
    case "safety-vetting":
      return (
        <IconFrame>
          <path
            d="M8 10.5 11 14l8-8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 12.2V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </IconFrame>
      );
  }
}
