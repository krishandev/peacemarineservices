import type { BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import type { MarineWorkVideo } from "@/data/videos";
import type { FAQItem } from "@/data/faqs";
import { getFaqsForPath } from "@/lib/page-faqs";
import {
  BUSINESS_ADDRESS_LINES,
  EMAIL,
  EMAIL_SECONDARY,
  GOOGLE_MAPS_HREF,
  OFFICE_PHONE_DISPLAY,
  PHONE_DISPLAY,
} from "@/lib/navigation";
import {
  LOCAL_BUSINESS_ID,
  LOGO_PATH,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
} from "@/lib/seo";

export type SchemaNode = Record<string, unknown>;
export type WebpageType =
  | "WebPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage";
export type AreaServedType = "Country" | "City" | "AdministrativeArea";

export type SchemaListItem = {
  name: string;
  url: string;
};

export function organizationRef() {
  return { "@id": ORGANIZATION_ID };
}

export function websiteRef() {
  return { "@id": WEBSITE_ID };
}

export function schemaGraph(nodes: SchemaNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_ADDRESS_LINES[0],
    addressLocality: "Willetton",
    addressRegion: "WA",
    postalCode: "6155",
    addressCountry: "AU",
  };
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(LOGO_PATH),
    telephone: [PHONE_DISPLAY, OFFICE_PHONE_DISPLAY],
    email: [EMAIL, EMAIL_SECONDARY],
    sameAs: [
      "https://www.linkedin.com/company/peacemarineservices/",
      "https://www.facebook.com/pmsmarineservices",
      "https://x.com/pms_marine",
    ],
    address: postalAddress(),
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "en-AU",
    publisher: organizationRef(),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    parentOrganization: organizationRef(),
    telephone: [PHONE_DISPLAY, OFFICE_PHONE_DISPLAY],
    email: [EMAIL, EMAIL_SECONDARY],
    address: postalAddress(),
    hasMap: GOOGLE_MAPS_HREF,
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.0660833,
      longitude: 115.8864859,
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
  };
}

export function getSiteIdentityGraph() {
  return schemaGraph([getOrganizationSchema(), getWebSiteSchema()]);
}

function areaServedNode(areaServed?: string, areaServedType?: AreaServedType) {
  if (!areaServed) {
    return {
      "@type": "Country",
      name: "Australia",
    };
  }

  const name = areaServed.split(",")[0]?.trim() || areaServed;

  if (areaServedType) {
    return {
      "@type": areaServedType,
      name,
    };
  }

  if (name.toLowerCase() === "pilbara") {
    return {
      "@type": "AdministrativeArea",
      name: "Pilbara",
    };
  }

  return {
    "@type": "City",
    name,
  };
}

export function getWebPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  mainEntityId,
  breadcrumbId,
}: {
  path: string;
  name: string;
  description: string;
  type?: WebpageType;
  mainEntityId?: string;
  breadcrumbId?: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-AU",
    isPartOf: websiteRef(),
    about: organizationRef(),
    publisher: organizationRef(),
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };
}

export function getBreadcrumbSchema(
  items: BreadcrumbItem[],
  currentPath: string,
) {
  const url = absoluteUrl(currentPath);

  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const path = isLast ? currentPath : item.href;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: path ? absoluteUrl(path) : url,
      };
    }),
  };
}

export function getServiceSchema({
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
  const url = absoluteUrl(path);

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: organizationRef(),
    areaServed: areaServedNode(areaServed, areaServedType),
  };
}

export function getItemListSchema({
  path,
  name,
  items,
}: {
  path: string;
  name: string;
  items: SchemaListItem[];
}) {
  const url = absoluteUrl(path);

  return {
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : absoluteUrl(item.url),
    })),
  };
}

export function getBlogPostingSchema({
  path,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  path: string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  const url = absoluteUrl(path);
  const imageUrl = image
    ? image.startsWith("http://") || image.startsWith("https://")
      ? image
      : absoluteUrl(image)
    : undefined;

  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@id": `${url}#webpage`,
    },
    publisher: organizationRef(),
    ...(authorName
      ? {
          author: {
            "@type": "Person",
            name: authorName,
          },
        }
      : {}),
  };
}

export function getVideoObjectSchema(video: MarineWorkVideo) {
  return {
    "@type": "VideoObject",
    "@id": `${SITE_URL}/#video-${video.id}`,
    name: video.name,
    description: video.description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`],
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    publisher: organizationRef(),
  };
}

export function getFAQPageSchema({
  path,
  faqs,
}: {
  path: string;
  faqs: FAQItem[];
}) {
  const url = absoluteUrl(path);

  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getPageSchemaGraph({
  path,
  name,
  description,
  breadcrumbs,
  webpageType = "WebPage",
  service,
  article,
  itemList,
  includeLocalBusiness = false,
  videos,
  faqs,
}: {
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
  };
  itemList?: {
    name: string;
    items: SchemaListItem[];
  };
  includeLocalBusiness?: boolean;
  videos?: MarineWorkVideo[];
  faqs?: FAQItem[];
}) {
  const url = absoluteUrl(path);
  const breadcrumbId =
    breadcrumbs && breadcrumbs.length > 0 ? `${url}#breadcrumb` : undefined;
  const serviceNode = service
    ? getServiceSchema({
        path,
        name: service.name,
        description: service.description,
        areaServed: service.areaServed,
        areaServedType: service.areaServedType,
      })
    : undefined;
  const articleNode = article
    ? getBlogPostingSchema({
        path,
        ...article,
      })
    : undefined;
  const itemListNode = itemList
    ? getItemListSchema({
        path,
        name: itemList.name,
        items: itemList.items,
      })
    : undefined;

  const faqItems = faqs ?? getFaqsForPath(path);
  const faqNode =
    faqItems && faqItems.length > 0
      ? getFAQPageSchema({ path, faqs: faqItems })
      : undefined;

  const mainEntityId = articleNode
    ? String(articleNode["@id"])
    : serviceNode
      ? String(serviceNode["@id"])
      : itemListNode
        ? String(itemListNode["@id"])
        : includeLocalBusiness
          ? LOCAL_BUSINESS_ID
          : webpageType === "AboutPage"
            ? ORGANIZATION_ID
            : faqNode
              ? String(faqNode["@id"])
              : undefined;

  const nodes: SchemaNode[] = [
    getWebPageSchema({
      path,
      name,
      description,
      type: webpageType,
      mainEntityId,
      breadcrumbId,
    }),
  ];

  if (breadcrumbId && breadcrumbs) {
    nodes.push(getBreadcrumbSchema(breadcrumbs, path));
  }

  if (serviceNode) {
    nodes.push(serviceNode);
  }

  if (itemListNode) {
    nodes.push(itemListNode);
  }

  if (articleNode) {
    nodes.push(articleNode);
  }

  if (includeLocalBusiness) {
    nodes.push(getLocalBusinessSchema());
  }

  if (videos) {
    for (const video of videos) {
      nodes.push(getVideoObjectSchema(video));
    }
  }

  if (faqNode) {
    nodes.push(faqNode);
  }

  return schemaGraph(nodes);
}
