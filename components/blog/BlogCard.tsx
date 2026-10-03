import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/wordpress";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const category = post.categories[0];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-pms-line bg-white">
      <Link href={post.path} className="relative block aspect-[16/10] bg-pms-wash">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-pms-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {category ? <span>{category.name}</span> : null}
        </div>
        <h2 className="line-clamp-3 text-lg font-semibold text-pms-navy">
          <Link
            href={post.path}
            className="rounded-sm hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-pms-muted">
          {post.excerpt}
        </p>
        <Link
          href={post.path}
          className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-pms-blue hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
