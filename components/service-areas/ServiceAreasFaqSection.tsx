import FAQ from "@/components/common/FAQ";
import { serviceAreasFaqs } from "@/data/faqs";

export default function ServiceAreasFaqSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={serviceAreasFaqs}
          title="Service Areas FAQs"
          description="Answers about where PMS Peace Marine Services can discuss marine surveying and inspection support in Western Australia."
        />
      </div>
    </div>
  );
}
