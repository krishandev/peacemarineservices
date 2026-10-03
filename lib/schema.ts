import type { BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import {
  BUSINESS_ADDRESS_LINES,
  EMAIL,
  EMAIL_SECONDARY,
  OFFICE_PHONE_DISPLAY,
  PHONE_DISPLAY,
} from "@/lib/navigation";
import {
  LOGO_PATH,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
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
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS_LINES[0],
      addressLocality: "Willetton",
      addressRegion: "WA",
      postalCode: "6155",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
  };
}

export function getWebPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      "@id": ORGANIZATION_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function getBreadcrumbSchema(
  items: BreadcrumbItem[],
  currentPath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const path = isLast ? currentPath : item.href;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: path ? absoluteUrl(path) : absoluteUrl(currentPath),
      };
    }),
  };
}

export function getServiceSchema({
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@id": ORGANIZATION_ID,
    },
    areaServed: areaServed
      ? {
          "@type": "AdministrativeArea",
          name: areaServed,
        }
      : {
          "@type": "Country",
          name: "Australia",
        },
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
  const imageUrl = image
    ? image.startsWith("http://") || image.startsWith("https://")
      ? image
      : absoluteUrl(image)
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    headline,
    description,
    ...(imageUrl ? { image: imageUrl } : {}),
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
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
