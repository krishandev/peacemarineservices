import type { Metadata } from "next";

export const SITE_URL = "https://peacemarineservices.com.au";
export const SITE_NAME = "PMS Peace Marine Services";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const LOGO_PATH = "/PMS-4.png";
export const DEFAULT_OG_IMAGE =
  "/images/client/optimized/hero-container-ship-harbour.webp";
export const DEFAULT_OG_IMAGE_ALT =
  "Containership in harbour seen from a vessel deck, with a lifebuoy and safety gear in the foreground";

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
};

export const TITLE_MIN = 50;
export const TITLE_MAX = 55;
export const DESCRIPTION_MIN = 150;
export const DESCRIPTION_MAX = 155;

export function countCharacters(text: string) {
  return text.length;
}

export function validateMetadata(title: string, description: string, url: string) {
  const titleLength = countCharacters(title);
  const descriptionLength = countCharacters(description);
  const titleOk = titleLength >= TITLE_MIN && titleLength <= TITLE_MAX;
  const descriptionOk =
    descriptionLength >= DESCRIPTION_MIN &&
    descriptionLength <= DESCRIPTION_MAX;

  if (!titleOk || !descriptionOk) {
    throw new Error(
      [
        `Invalid SEO metadata for ${url}`,
        `Title: ${titleLength} characters ${titleOk ? "✓" : "✗"} (required ${TITLE_MIN}–${TITLE_MAX})`,
        `Description: ${descriptionLength} characters ${descriptionOk ? "✓" : "✗"} (required ${DESCRIPTION_MIN}–${DESCRIPTION_MAX})`,
      ].join("\n"),
    );
  }

  return {
    url,
    titleLength,
    descriptionLength,
    titleOk,
    descriptionOk,
  };
}

export function absoluteUrl(path: string) {
  if (path === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  type = "website",
}: PageSeoInput): Metadata {
  validateMetadata(title, description, path);
  const url = absoluteUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type,
      locale: "en_AU",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
