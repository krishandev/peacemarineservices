import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_ALT } from "@/lib/seo";
import { stripHtml } from "@/lib/blog-seo";

export const WORDPRESS_API_URL = (
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://peacemarineservices.com.au/wp-json/wp/v2"
).replace(/\/$/, "");

export const BLOG_REVALIDATE_SECONDS = 300;
export const BLOG_POSTS_PER_PAGE = 9;
export const BLOG_PLACEHOLDER_IMAGE = DEFAULT_OG_IMAGE;
export const BLOG_PLACEHOLDER_IMAGE_ALT = DEFAULT_OG_IMAGE_ALT;

type WpRendered = {
  rendered: string;
  protected?: boolean;
};

type WpMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: Record<string, { source_url?: string }>;
  };
};

type WpTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

type WpAuthor =
  | {
      name?: string;
      slug?: string;
    }
  | {
      code?: string;
      message?: string;
    };

export type WordPressPost = {
  id: number;
  slug: string;
  status: string;
  date: string;
  modified: string;
  link: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WpAuthor[];
    "wp:featuredmedia"?: WpMedia[];
    "wp:term"?: WpTerm[][];
  };
};

export type BlogTerm = {
  id: number;
  name: string;
  slug: string;
};

export type BlogImage = {
  src: string;
  alt: string;
};

export type BlogPost = {
  id: number;
  slug: string;
  path: string;
  date: string;
  modified: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: BlogImage;
  categories: BlogTerm[];
  tags: BlogTerm[];
  authorName?: string;
};

export type BlogListResult = {
  posts: BlogPost[];
  total: number;
  totalPages: number;
  error?: boolean;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isWordpressPost(value: unknown): value is WordPressPost {
  return (
    isRecord(value) &&
    typeof value.id === "number" &&
    typeof value.slug === "string" &&
    isRecord(value.title) &&
    typeof value.title.rendered === "string"
  );
}

function mediaUrl(media: WpMedia | undefined) {
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url
  );
}

function termsByTaxonomy(post: WordPressPost, taxonomy: string): BlogTerm[] {
  const groups = post._embedded?.["wp:term"] ?? [];
  return groups
    .flat()
    .filter((term) => term.taxonomy === taxonomy)
    .map((term) => ({
      id: term.id,
      name: stripHtml(term.name),
      slug: term.slug,
    }));
}

function authorName(post: WordPressPost) {
  const author = post._embedded?.author?.[0];
  if (!author || !("name" in author)) {
    return undefined;
  }

  const name = author.name?.trim();
  if (!name || /^(admin|user|author)$/i.test(name)) {
    return undefined;
  }

  return name;
}

export function normalizePost(post: WordPressPost): BlogPost {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const imageSrc = mediaUrl(media);
  const title = stripHtml(post.title.rendered);

  return {
    id: post.id,
    slug: post.slug,
    path: `/blog/${post.slug}/`,
    date: post.date,
    modified: post.modified,
    title,
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    featuredImage: {
      src: imageSrc || BLOG_PLACEHOLDER_IMAGE,
      alt: stripHtml(media?.alt_text || "") || `${title} article image`,
    },
    categories: termsByTaxonomy(post, "category").filter(
      (term) => term.slug !== "uncategorized",
    ),
    tags: termsByTaxonomy(post, "post_tag"),
    authorName: authorName(post),
  };
}

async function wordpressFetch(path: string) {
  const response = await fetch(`${WORDPRESS_API_URL}${path}`, {
    next: {
      revalidate: BLOG_REVALIDATE_SECONDS,
      tags: ["blog"],
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API request failed with ${response.status}`);
  }

  const payload: unknown = await response.json();
  const total = Number(response.headers.get("X-WP-Total") || 0);
  const totalPages = Number(response.headers.get("X-WP-TotalPages") || 0);

  return { payload, total, totalPages };
}

export async function getPosts({
  page = 1,
  perPage = BLOG_POSTS_PER_PAGE,
  exclude,
  categories,
}: {
  page?: number;
  perPage?: number;
  exclude?: number;
  categories?: number[];
} = {}): Promise<BlogListResult> {
  const params = new URLSearchParams({
    _embed: "1",
    status: "publish",
    orderby: "date",
    order: "desc",
    page: String(Math.max(page, 1)),
    per_page: String(perPage),
  });

  if (exclude) {
    params.set("exclude", String(exclude));
  }

  if (categories && categories.length > 0) {
    params.set("categories", categories.join(","));
  }

  try {
    const { payload, total, totalPages } = await wordpressFetch(
      `/posts?${params.toString()}`,
    );

    if (!Array.isArray(payload)) {
      return { posts: [], total: 0, totalPages: 0, error: true };
    }

    return {
      posts: payload.filter(isWordpressPost).map(normalizePost),
      total,
      totalPages,
    };
  } catch {
    return { posts: [], total: 0, totalPages: 0, error: true };
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const params = new URLSearchParams({
    slug,
    _embed: "1",
    status: "publish",
  });

  try {
    const { payload } = await wordpressFetch(`/posts?${params.toString()}`);
    if (!Array.isArray(payload) || payload.length === 0) {
      return null;
    }

    const post = payload.find(isWordpressPost);
    return post ? normalizePost(post) : null;
  } catch {
    return null;
  }
}

export async function getRelatedPosts(post: BlogPost, limit = 3) {
  const categoryIds = post.categories.map((category) => category.id);
  const related = await getPosts({
    perPage: limit,
    exclude: post.id,
    categories: categoryIds.length > 0 ? categoryIds : undefined,
  });

  if (!related.error && related.posts.length > 0) {
    return related.posts;
  }

  const recent = await getPosts({
    perPage: limit,
    exclude: post.id,
  });

  return recent.posts;
}

export async function getAllPublishedPosts() {
  const first = await getPosts({ page: 1, perPage: 100 });
  if (first.error) {
    return [];
  }

  const posts = [...first.posts];
  for (let page = 2; page <= first.totalPages; page += 1) {
    const next = await getPosts({ page, perPage: 100 });
    if (!next.error) {
      posts.push(...next.posts);
    }
  }

  return posts;
}
