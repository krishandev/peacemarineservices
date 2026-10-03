"use client";

import { useId } from "react";
import FAQAccordion from "@/components/common/FAQAccordion";
import { faqs as defaultFaqs, type FAQItem } from "@/data/faqs";

export interface FAQProps {
  items?: FAQItem[];
  title?: string;
  description?: string;
}

export default function FAQ({
  items = defaultFaqs,
  title = "Marine Surveying & Inspection FAQs",
  description = "Answers to common questions about marine surveying, vessel inspection, auditing and how to request support from PMS Peace Marine Services.",
}: FAQProps) {
  const baseId = useId();
  const headingId = `${baseId}-heading`;

  return (
    <section aria-labelledby={headingId}>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
            Frequently Asked Questions
          </p>
          <h2
            id={headingId}
            className="mt-3 text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-md text-sm leading-6 text-pms-muted sm:text-[15px]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="lg:col-span-8">
          <FAQAccordion
            items={items.map((item) => ({
              question: item.question,
              answer: <p>{item.answer}</p>,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
