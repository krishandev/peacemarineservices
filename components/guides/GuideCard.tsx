import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/data/guides/types";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-pms-line bg-white shadow-[0_1px_2px_rgba(7,26,50,0.05)]">
      <Link
        href={guide.path}
        className="relative block aspect-[16/10] bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pms-blue"
      >
        <Image
          src={guide.image.src}
          alt={guide.image.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className={guide.image.className}
        />
      </Link>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-pms-muted">
          <span>{guide.category}</span>
          <span>{guide.readingMinutes} min read</span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-pms-navy">
          <Link
            href={guide.path}
            className="rounded-sm hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            {guide.h1}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-pms-muted">
          {guide.summary}
        </p>
        <Link
          href={guide.path}
          className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-pms-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        >
          Read {guide.h1}
        </Link>
        <Link
          href={guide.relatedService.href}
          className="mt-1 inline-flex min-h-11 items-center text-sm text-pms-muted hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        >
          Related service: {guide.relatedService.label}
        </Link>
      </div>
    </article>
  );
}
