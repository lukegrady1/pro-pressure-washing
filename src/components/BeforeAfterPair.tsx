// Static labeled BEFORE / AFTER image pair (no JS).
export default function BeforeAfterPair({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        { src: before, alt: beforeAlt, label: "Before" },
        { src: after, alt: afterAlt, label: "After" },
      ].map((img) => (
        <figure key={img.label} className="relative overflow-hidden rounded-md">
          <div className="aspect-[4/3] w-full bg-neutral-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption
            className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-bold uppercase text-white ${
              img.label === "After" ? "bg-brand-red" : "bg-black/60"
            }`}
          >
            {img.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
