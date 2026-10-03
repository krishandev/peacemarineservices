import FAQ from "@/components/common/FAQ";
import { fremantleLocationFaqs } from "@/data/faqs";

export default function FremantleFaq() {
  return (
    <div className="bg-pms-wash">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <FAQ
          items={fremantleLocationFaqs}
          title="Marine Surveyor in Fremantle FAQs"
          description="Answers about marine surveying and inspection support in Fremantle, Western Australia, and how PMS Peace Marine Services can help with an enquiry."
        />
      </div>
    </div>
  );
}
