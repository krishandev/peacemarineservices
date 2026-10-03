import JsonLd from "@/components/seo/JsonLd";
import { getServiceSchema } from "@/lib/schema";

export default function ServiceSchema({
  path,
  name,
  description,
  areaServed,
}: {
  path: string;
  name: string;
  description: string;
  areaServed?: string;
}) {
  return (
    <JsonLd
      data={getServiceSchema({
        path,
        name,
        description,
        areaServed,
      })}
    />
  );
}
