import BeforeAfter from "@/components/BeforeAfter";
import type { GalleryPair } from "@/data/gallery";

// A grid of interactive before/after comparison sliders. Drop it anywhere to
// "show off" different jobs — each slider is draggable to wipe between shots.
export default function BeforeAfterShowcase({ pairs }: { pairs: GalleryPair[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6">
      {pairs.map((p) => (
        <figure key={p.after} className="space-y-2 sm:space-y-3">
          <BeforeAfter
            before={p.before}
            after={p.after}
            beforeAlt={`Before ${p.label} — Pro Pressure Washing`}
            afterAlt={`After ${p.label} — Pro Pressure Washing`}
          />
          <figcaption className="text-center text-xs font-semibold leading-snug text-heading sm:text-sm">
            {p.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
