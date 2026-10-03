import JsonLd from "@/components/seo/JsonLd";
import { getSiteIdentityGraph } from "@/lib/schema";

export default function OrganizationSchema() {
  return <JsonLd data={getSiteIdentityGraph()} />;
}
