import FAQ from "@/components/common/FAQ";
import { dampierLocationFaqs } from "@/data/faqs";

export default function DampierFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={dampierLocationFaqs}
          title="Marine Surveyor in Dampier FAQs"
          description="Answers about marine surveying and inspection support in Dampier, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
