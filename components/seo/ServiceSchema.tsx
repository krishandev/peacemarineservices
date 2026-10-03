import JsonLd from "@/components/seo/JsonLd";
import { getServiceSchema, schemaGraph, type AreaServedType } from "@/lib/schema";

export default function ServiceSchema({
  path,
  name,
  description,
  areaServed,
  areaServedType,
}: {
  path: string;
  name: string;
  description: string;
  areaServed?: string;
  areaServedType?: AreaServedType;
}) {
  return (
    <JsonLd
      data={schemaGraph([
        getServiceSchema({
          path,
          name,
          description,
          areaServed,
          areaServedType,
        }),
      ])}
    />
  );
}
