import JsonLd from "@/components/seo/JsonLd";
import type { BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { getBreadcrumbSchema, schemaGraph } from "@/lib/schema";

export default function BreadcrumbSchema({
  items,
  currentPath,
}: {
  items: BreadcrumbItem[];
  currentPath: string;
}) {
  return (
    <JsonLd data={schemaGraph([getBreadcrumbSchema(items, currentPath)])} />
  );
}
