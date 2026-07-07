import { whyChoose } from "@/data/whyChoose";
import { iconMap } from "@/components/Icons";
import { SectionHeading } from "@/components/Section";

export default function WhyChoose() {
  return (
    <div>
      <SectionHeading title="Why Choose Us?" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <Icon width={24} height={24} />
              </div>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wide text-heading">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
