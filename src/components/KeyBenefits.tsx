import { keyBenefits } from "@/data/services";
import { CheckIcon } from "@/components/Icons";

// Shared "Key Benefits of the Service" block (all 3 service pages).
export default function KeyBenefits({ intro }: { intro?: string }) {
  return (
    <div>
      <h2 className="text-2xl text-heading">Key Benefits of the Service</h2>
      <p className="mt-3 text-base leading-relaxed">
        {intro ??
          "Giving your property the clean it's been waiting for has more benefits than you may think."}
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {keyBenefits.map((b) => (
          <li key={b} className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <CheckIcon width={15} height={15} />
            </span>
            <span className="text-sm font-medium text-heading">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
