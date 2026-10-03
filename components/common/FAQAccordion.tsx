"use client";

import { useId, useState, type ReactNode } from "react";

export type FAQAccordionItem = {
  question: string;
  answer: ReactNode;
};

export interface FAQAccordionProps {
  items: FAQAccordionItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
                  setOpenIndex((current) => (current === index ? null : index))
                }
                className="flex min-h-12 w-full items-start justify-between gap-4 py-4 text-left text-base font-semibold break-words text-pms-navy transition-colors duration-150 hover:text-pms-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pms-blue"
              >
                <span className="min-w-0">{item.question}</span>
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
              <div className="space-y-3 pb-4 text-sm leading-6 text-pms-muted sm:text-[15px]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
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
