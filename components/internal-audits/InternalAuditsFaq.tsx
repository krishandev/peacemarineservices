import FAQ from "@/components/common/FAQ";
import { internalAuditsFaqs } from "@/data/faqs";

export default function InternalAuditsFaq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={internalAuditsFaqs}
          title="ISM, ISPS and MLC Internal Audit FAQs"
          description="Answers about internal maritime audits, findings, certification and how PMS Peace Marine Services can support an enquiry."
        />
      </div>
    </div>
  );
}
