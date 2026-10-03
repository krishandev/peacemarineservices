import { pageMetadata, pageSeo } from "@/lib/page-seo";
import FAQCategory from "@/components/faq/FAQCategory";
import FAQCategoryNav from "@/components/faq/FAQCategoryNav";
import FAQIntro from "@/components/faq/FAQIntro";
import { faqHubCategories } from "@/components/faq/faqCategories";
import CTA from "@/components/common/CTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";




export const metadata = pageMetadata.faq;

export default function FAQPage() {
  return (
    <main id="main-content">
      <div className="border-b border-pms-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faq/" },
            ]}
            seo={{
              page: pageSeo.faq,
              webpageType: "WebPage",
            }}
          />
        </div>
      </div>
      <FAQIntro />
      <FAQCategoryNav />
      <div className="bg-white">
        {faqHubCategories.map((category) => (
          <FAQCategory
            key={category.id}
            id={category.id}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
      <CTA
        eyebrow="Marine Surveying & Inspection Support"
        title="Still Have Questions About Marine Survey or Inspection Services?"
        description="Contact PMS Peace Marine Services to discuss your vessel, inspection requirements, location and preferred service."
        primaryLabel="Request an Inspection"
        primaryHref="/contact/"
        secondaryLabel="Call +61 456 980 609"
        secondaryHref="tel:+61456980609"
      />
    </main>
  );
}
