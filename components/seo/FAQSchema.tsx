import JsonLd from "@/components/seo/JsonLd";
import type { FAQItem } from "@/data/faqs";
import { getFAQPageSchema, schemaGraph } from "@/lib/schema";

export default function FAQSchema({
  path,
  faqs,
}: {
  path: string;
  faqs: FAQItem[];
}) {
  if (faqs.length === 0) {
    return null;
  }

  return <JsonLd data={schemaGraph([getFAQPageSchema({ path, faqs })])} />;
}
