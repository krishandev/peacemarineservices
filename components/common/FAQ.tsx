"use client";

import { useId, useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
          <div className="divide-y divide-pms-line border-y border-pms-line">
            {items.map((item, index) => {
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;
              const isOpen = openIndex === index;

              return (
                <div key={item.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                      className="flex min-h-12 w-full items-start justify-between gap-4 py-4 text-left text-base font-semibold text-pms-navy transition-colors duration-150 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
                    >
                      <span>{item.question}</span>
                      <span
                        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-pms-blue"
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <MinusIcon className="h-4 w-4" />
                        ) : (
                          <PlusIcon className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                  >
                    <p className="pb-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3.5v9M3.5 8h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
