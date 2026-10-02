import FAQ from "@/components/common/FAQ";
import { ourServicesFaqs } from "@/data/faqs";

export default function ServicesFaqSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={ourServicesFaqs}
          title="Marine Services FAQs"
          description="Answers about the marine surveying, inspection, auditing and consultancy services provided by PMS Peace Marine Services."
        />
      </div>
    </div>
  );
}
