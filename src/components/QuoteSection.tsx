import { Section, SectionHeading } from "@/components/Section";
import QuoteForm from "@/components/QuoteForm";

// "Request A Quote" band reused on Home, Services, service detail and FAQ pages.
export default function QuoteSection() {
  return (
    <Section id="quote">
      <SectionHeading
        title="Request A Quote"
        intro="Tell us about your project and we'll get right back to you with a free, honest quote."
      />
      <div className="mx-auto max-w-3xl rounded-md border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <QuoteForm variant="quote" />
      </div>
    </Section>
  );
}
