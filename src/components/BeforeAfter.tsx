"use client";

import { useEffect, useRef, useState } from "react";

// Draggable before/after image-comparison slider (used on the Patios page).
export default function BeforeAfter({
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
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Measure the container so the clipped "before" image keeps its true width
  // (otherwise it would squash to the reveal width and distort the comparison).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-md"
      onMouseMove={(e) => e.buttons === 1 && setFromClientX(e.clientX)}
      onClick={(e) => setFromClientX(e.clientX)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* After (full) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Before (clipped to reveal width, image itself kept at full width) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          className="absolute inset-0 h-full object-cover"
          style={{ width: width || "100%", maxWidth: "none" }}
        />
        <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs font-bold uppercase text-white">
          Before
        </span>
      </div>
      <span className="absolute right-3 top-3 rounded bg-brand-red px-2 py-1 text-xs font-bold uppercase text-white">
        After
      </span>

      {/* Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-1 bg-white"
        style={{ left: `calc(${pos}% - 2px)` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-red shadow">
          ⇆
        </div>
      </div>

      <label className="sr-only" htmlFor="ba-range">
        Before/after slider position
      </label>
      <input
        id="ba-range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute bottom-0 left-0 w-full opacity-0"
      />
    </div>
  );
}
