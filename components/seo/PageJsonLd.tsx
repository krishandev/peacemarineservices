import JsonLd from "@/components/seo/JsonLd";
import type { BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import type { FAQItem } from "@/data/faqs";
import type { MarineWorkVideo } from "@/data/videos";
import {
  getPageSchemaGraph,
  type AreaServedType,
  type SchemaListItem,
  type WebpageType,
} from "@/lib/schema";

export type PageJsonLdProps = {
  path: string;
  name: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
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

export default function PageJsonLd(props: PageJsonLdProps) {
  return <JsonLd data={getPageSchemaGraph(props)} />;
}
