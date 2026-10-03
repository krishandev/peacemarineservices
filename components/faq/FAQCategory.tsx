import FAQAccordion from "@/components/common/FAQAccordion";
import type { FAQHubItem } from "@/components/faq/faqCategories";

type FAQCategoryProps = {
  id: string;
  title: string;
  items: FAQHubItem[];
};

export default function FAQCategory({ id, title, items }: FAQCategoryProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-pms-line"
    >
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-6 lg:py-14">
        <h2
          id={headingId}
          className="text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-6">
          <FAQAccordion
            items={items.map((item) => ({
              question: item.question,
              answer: item.answer,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
