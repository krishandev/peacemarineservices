import JsonLd from "@/components/seo/JsonLd";
import type { BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import {
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/schema";

type WebpageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

type PageJsonLdProps = {
  path: string;
  name: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  webpageType?: WebpageType;
  service?: {
    name: string;
    description: string;
    areaServed?: string;
  };
  article?: {
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
  };
};

export default function PageJsonLd({
  path,
  name,
  description,
  breadcrumbs,
  webpageType = "WebPage",
  service,
  article,
}: PageJsonLdProps) {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          path,
          name,
          description,
          type: webpageType,
        })}
      />
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <JsonLd data={getBreadcrumbSchema(breadcrumbs, path)} />
      ) : null}
      {service ? (
        <JsonLd
          data={getServiceSchema({
            path,
            name: service.name,
            description: service.description,
            areaServed: service.areaServed,
          })}
        />
      ) : null}
      {article ? (
        <JsonLd
          data={getBlogPostingSchema({
            path,
            ...article,
          })}
        />
      ) : null}
    </>
  );
}
