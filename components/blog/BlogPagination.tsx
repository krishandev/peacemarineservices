import Link from "next/link";

export default function BlogPagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Blog pagination" className="mt-10">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {page > 1 ? (
          <li>
            <Link
              href={page === 2 ? "/blog/" : `/blog/?page=${page - 1}`}
              className="inline-flex min-h-11 items-center rounded-sm border border-pms-line px-3 text-sm text-pms-navy hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Previous
            </Link>
          </li>
        ) : null}
        {pages.map((number) => (
          <li key={number}>
            <Link
              href={number === 1 ? "/blog/" : `/blog/?page=${number}`}
              aria-current={number === page ? "page" : undefined}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue ${
                number === page
                  ? "border-pms-blue bg-pms-blue text-white"
                  : "border-pms-line text-pms-navy hover:bg-pms-wash"
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
        {page < totalPages ? (
          <li>
            <Link
              href={`/blog/?page=${page + 1}`}
              className="inline-flex min-h-11 items-center rounded-sm border border-pms-line px-3 text-sm text-pms-navy hover:bg-pms-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
            >
              Next
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
