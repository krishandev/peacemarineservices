import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import BlogContent from "@/components/blog/BlogContent";
import type { BlogPost } from "@/lib/wordpress";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default function BlogPost({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: BlogPost[];
}) {
  const category = post.categories[0];
  const showUpdated =
    post.modified && post.modified.slice(0, 10) !== post.date.slice(0, 10);

  return (
    <article className="bg-white">
      <header className="mx-auto max-w-3xl px-4 pt-10 pb-6 lg:px-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-pms-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {showUpdated ? (
            <span>Updated {formatDate(post.modified)}</span>
          ) : null}
          {category ? <span>{category.name}</span> : null}
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-pms-navy sm:text-4xl">
          {post.title}
        </h1>
      </header>
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-pms-wash">
          <Image
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        <div className="py-10">
          <BlogContent html={post.content} />
        </div>
      </div>
      {relatedPosts.length > 0 ? (
        <section
          aria-labelledby="related-articles-heading"
          className="border-t border-pms-line bg-pms-wash"
        >
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
            <h2
              id="related-articles-heading"
              className="text-2xl font-semibold text-pms-navy"
            >
              Related Articles
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
            <p className="mt-6 text-sm">
              <Link
                href="/blog/"
                className="font-semibold text-pms-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                View all articles
              </Link>
            </p>
          </div>
        </section>
      ) : null}
    </article>
  );
}
