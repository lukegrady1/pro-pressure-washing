import { whyChoose } from "@/data/whyChoose";
import { iconMap } from "@/components/Icons";
import { SectionHeading } from "@/components/Section";

export default function WhyChoose() {
  return (
    <div>
      <SectionHeading title="Why Choose Us?" />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {whyChoose.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <div
              key={item.title}
              // Mobile: centered card with the icon on top.
              // sm+: original icon-left row, no card.
              className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:flex-row sm:items-start sm:gap-4 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:text-left sm:shadow-none sm:transition-none sm:hover:translate-y-0"
            >
              <div className="mb-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red ring-1 ring-brand-red/10 transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white sm:mb-0">
                <Icon width={26} height={26} />
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
