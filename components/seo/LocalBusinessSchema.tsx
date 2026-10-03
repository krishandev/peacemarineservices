import JsonLd from "@/components/seo/JsonLd";
import { getLocalBusinessSchema, schemaGraph } from "@/lib/schema";

export default function LocalBusinessSchema() {
  return <JsonLd data={schemaGraph([getLocalBusinessSchema()])} />;
}
