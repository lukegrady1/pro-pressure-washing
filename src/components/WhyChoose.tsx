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
            <div key={item.title} className="group flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red ring-1 ring-brand-red/10 transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
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
