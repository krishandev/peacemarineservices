import Link from "next/link";
import PageJsonLd from "@/components/seo/PageJsonLd";
import type { PageSeoInput } from "@/lib/seo";
import type { FAQItem } from "@/data/faqs";
import type { MarineWorkVideo } from "@/data/videos";
import type {
  AreaServedType,
  SchemaListItem,
  WebpageType,
} from "@/lib/schema";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  seo?: {
    page: PageSeoInput;
    webpageType?: WebpageType;
    service?: {
      name: string;
      description: string;
      areaServed?: string;
      areaServedType?: AreaServedType;
    };
    article?: {
      headline: string;
      description: string;
      image?: string;
      datePublished: string;
      dateModified?: string;
      authorName?: string;
      schemaType?: "BlogPosting" | "Article";
    };
    itemList?: {
      name: string;
      items: SchemaListItem[];
    };
    includeLocalBusiness?: boolean;
    videos?: MarineWorkVideo[];
    faqs?: FAQItem[];
  };
}

export default function Breadcrumbs({
  items,
  className = "",
  seo,
}: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {seo ? (
        <PageJsonLd
          path={seo.page.path}
          name={seo.page.title}
          description={seo.page.description}
          breadcrumbs={items}
          webpageType={seo.webpageType}
          service={seo.service}
          article={seo.article}
          itemList={seo.itemList}
          includeLocalBusiness={seo.includeLocalBusiness}
          videos={seo.videos}
          faqs={seo.faqs}
        />
      ) : null}
      <nav
        aria-label="Breadcrumb"
        className={`text-sm text-pms-muted ${className}`.trim()}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li
                key={`${item.label}-${index}`}
                className="inline-flex min-w-0 items-center gap-2"
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="select-none text-pms-muted/70"
                  >
                    ›
                  </span>
                ) : null}

                {isCurrent || !item.href ? (
                  <span
                    aria-current={isCurrent ? "page" : undefined}
                    className="min-w-0 font-medium break-words text-pms-navy"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-sm break-words text-pms-muted transition-colors duration-150 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
