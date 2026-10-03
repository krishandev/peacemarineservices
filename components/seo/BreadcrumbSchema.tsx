import JsonLd from "@/components/seo/JsonLd";
import type { BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/schema";

export default function BreadcrumbSchema({
  items,
  currentPath,
}: {
  items: BreadcrumbItem[];
  currentPath: string;
}) {
  return <JsonLd data={getBreadcrumbSchema(items, currentPath)} />;
}
