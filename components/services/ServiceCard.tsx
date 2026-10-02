import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-pms-line bg-white shadow-[0_1px_2px_rgba(7,26,50,0.05)] transition-[border-color,box-shadow,transform] duration-150 hover:border-pms-blue/45 hover:shadow-[0_8px_20px_rgba(7,26,50,0.07)] motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none">
      <div className="relative aspect-video overflow-hidden bg-pms-wash">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {icon ? (
          <div
            className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-pms-wash text-pms-blue"
            aria-hidden="true"
          >
            {icon}
          </div>
        ) : null}

        <h3 className="text-lg leading-snug font-semibold tracking-tight text-pms-navy">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-pms-muted">
          {description}
        </p>

        <Link
          href={href}
          aria-label={`Learn more about ${title}`}
          className="mt-5 inline-flex min-h-11 w-fit items-center gap-1.5 rounded-sm text-sm font-semibold text-pms-blue transition-colors duration-150 hover:text-pms-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        >
          Learn More
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-150 motion-safe:group-hover:translate-x-0.5 motion-reduce:transform-none" />
        </Link>
      </div>
    </article>
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
