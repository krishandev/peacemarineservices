import type { GuideBlock } from "@/data/guides/types";
import GuideInlineText from "@/components/guides/GuideInlineText";
import PrintChecklistButton from "@/components/guides/PrintChecklistButton";

export default function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p
              key={`p-${index}`}
              className="text-sm leading-7 text-pms-ink sm:text-[15px]"
            >
              <GuideInlineText text={block.text} />
            </p>
          );
        }

        if (block.type === "h2") {
          return (
            <h2
              key={block.id}
              id={block.id}
              className="scroll-mt-28 text-2xl font-semibold tracking-tight text-pms-navy sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={block.id}
              id={block.id}
              className="scroll-mt-28 text-lg font-semibold tracking-tight text-pms-navy sm:text-xl"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={`ul-${index}`}
              className="list-disc space-y-2 pl-5 text-sm leading-7 text-pms-ink sm:text-[15px]"
            >
              {block.items.map((item) => (
                <li key={item}>
                  <GuideInlineText text={item} />
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol
              key={`ol-${index}`}
              className="list-decimal space-y-2 pl-5 text-sm leading-7 text-pms-ink sm:text-[15px]"
            >
              {block.items.map((item) => (
                <li key={item}>
                  <GuideInlineText text={item} />
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "callout") {
          return (
            <aside
              key={`callout-${index}`}
              className={`rounded-sm border px-5 py-4 ${
                block.variant === "limitation"
                  ? "border-pms-navy/20 bg-pms-wash"
                  : "border-pms-line bg-white"
              }`}
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] text-pms-blue uppercase">
                {block.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-pms-ink sm:text-[15px]">
                <GuideInlineText text={block.text} />
              </p>
            </aside>
          );
        }

        return (
          <section
            key={block.id}
            id={block.id}
            className="guide-checklist scroll-mt-28 rounded-sm border border-pms-line bg-white p-5 sm:p-6"
            aria-labelledby={`${block.id}-title`}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3
                  id={`${block.id}-title`}
                  className="text-lg font-semibold tracking-tight text-pms-navy"
                >
                  {block.title}
                </h3>
                {block.intro ? (
                  <p className="mt-2 text-sm leading-6 text-pms-muted">
                    <GuideInlineText text={block.intro} />
                  </p>
                ) : null}
              </div>
              <PrintChecklistButton />
            </div>
            <ul className="mt-5 divide-y divide-pms-line border-t border-pms-line">
              {block.items.map((item) => (
                <li key={item.label} className="flex gap-3 py-3">
                  <span
                    className="mt-1 inline-flex h-4 w-4 shrink-0 rounded-sm border border-pms-navy/40"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-pms-navy sm:text-[15px]">
                      <GuideInlineText text={item.label} />
                    </p>
                    {item.note ? (
                      <p className="mt-1 text-sm leading-6 text-pms-muted">
                        <GuideInlineText text={item.note} />
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
