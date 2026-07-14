import { SectionHeading } from "@/components/Section";
import ReviewsWidget from "@/components/ReviewsWidget";

// "Client Reviews" band — live Google reviews via the Local Marketing Manager
// widget. Wider container = more review cards shown (the widget's pageSize
// scales with width).
export default function Testimonials() {
  return (
    <div className="bg-neutral-100 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading
          title="Client Reviews"
          intro="See what our customers across Worcester County are saying about us on Google."
        />
        <ReviewsWidget />
      </div>
    </div>
  );
}
