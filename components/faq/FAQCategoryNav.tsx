import Link from "next/link";
import { faqHubCategories } from "@/components/faq/faqCategories";

export default function FAQCategoryNav() {
  return (
    <nav
      aria-label="FAQ categories"
      className="border-b border-pms-line bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 lg:px-6">
        <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
          Browse by topic
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {faqHubCategories.map((category) => (
            <li key={category.id} className="min-w-0">
              <Link
                href={`#${category.id}`}
                className="inline-flex min-h-11 items-center rounded-sm border border-pms-line bg-pms-wash px-3 py-2 text-sm font-medium break-words text-pms-navy transition-colors duration-150 hover:border-pms-blue/45 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                {category.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
