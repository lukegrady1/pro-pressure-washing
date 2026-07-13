"use client";

import { useCallback, useEffect, useState } from "react";
import type { GalleryPair } from "@/data/gallery";

type Shot = { src: string; alt: string };

export default function Gallery({ pairs }: { pairs: GalleryPair[] }) {
  // Flatten each pair into two lightbox-able shots with descriptive alt text.
  const shots: Shot[] = pairs.flatMap((p) => [
    { src: p.before, alt: `Before ${p.label} — Pro Pressure Washing` },
    { src: p.after, alt: `After ${p.label} — Pro Pressure Washing` },
  ]);

  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, move]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {shots.map((shot, i) => (
          <button
            key={shot.src + i}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-100 shadow-card ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-card-hover"
            aria-label={`Open image: ${shot.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 text-3xl text-white hover:text-brand-red"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Previous image"
            className="absolute left-4 text-4xl text-white hover:text-brand-red"
          >
            ‹
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shots[active].src}
            alt={shots[active].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Next image"
            className="absolute right-4 text-4xl text-white hover:text-brand-red"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
