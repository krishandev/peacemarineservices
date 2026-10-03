import sanitizeHtml from "sanitize-html";
import { stripHtml } from "@/lib/blog-seo";

const ALLOWED_IFRAME_HOSTS = new Set([
  "www.youtube-nocookie.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "youtube.com",
]);

export function sanitizeWordpressHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",
      "hr",
      "h2",
      "h3",
      "h4",
      "ul",
      "ol",
      "li",
      "strong",
      "em",
      "b",
      "i",
      "blockquote",
      "a",
      "img",
      "figure",
      "figcaption",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "iframe",
    ],
    allowedAttributes: {
      a: ["href", "title", "rel", "target"],
      img: ["src", "alt", "width", "height", "loading"],
      iframe: ["src", "title", "allow", "allowfullscreen", "width", "height"],
      th: ["colspan", "rowspan"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
      img: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          loading: attribs.loading || "lazy",
          alt: attribs.alt || "",
        },
      }),
      iframe: (tagName, attribs) => {
        try {
          const host = new URL(attribs.src || "").hostname;
          if (!ALLOWED_IFRAME_HOSTS.has(host)) {
            return { tagName: "p", attribs: {}, text: "" };
          }
        } catch {
          return { tagName: "p", attribs: {}, text: "" };
        }

        return { tagName, attribs };
      },
    },
    exclusiveFilter: (frame) =>
      frame.tag === "p" && !stripHtml(frame.text || "").length,
  });
}
