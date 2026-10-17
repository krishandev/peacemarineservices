import type { MetadataRoute } from "next";
import { pageSeo } from "@/lib/page-seo";
import { SITE_URL } from "@/lib/seo";
import { getAllPublishedPosts } from "@/lib/wordpress";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = Object.values(pageSeo).map(
    (page) => ({
      url: page.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${page.path}`,
      lastModified: page.path.startsWith("/guides")
        ? new Date("2026-10-17")
        : new Date("2026-10-03"),
      changeFrequency:
        page.path === "/" || page.path === "/blog/" || page.path === "/guides/"
          ? "weekly"
          : "monthly",
      priority:
        page.path === "/"
          ? 1
          : page.path === "/privacy-policy/"
            ? 0.3
            : page.path === "/blog/" || page.path === "/guides/"
              ? 0.8
              : 0.7,
    }),
  );

  const posts = await getAllPublishedPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}${post.path}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
