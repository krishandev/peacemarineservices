import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/lib/schema";

export default function OrganizationSchema() {
  return <JsonLd data={getOrganizationSchema()} />;
}
