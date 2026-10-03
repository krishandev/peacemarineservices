import { sanitizeWordpressHtml } from "@/lib/wordpress-html";

export default function BlogContent({ html }: { html: string }) {
  return (
    <div
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: sanitizeWordpressHtml(html) }}
    />
  );
}
