"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

// Draggable before/after image-comparison slider. Uses pointer events with
// pointer capture so a single press-and-drag works uniformly for mouse, touch
// and pen — and the images set draggable={false} so the browser's native
// image-drag never hijacks the gesture (the old "it won't slide" bug).
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
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Unique id so multiple sliders on one page don't collide on the range input.
  const rangeId = useId();

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

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragging(true);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging) setFromClientX(e.clientX);
      }}
      onPointerUp={(e) => {
        setDragging(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => setDragging(false)}
    >
      {/* After (full) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* Before (clipped to reveal width, image itself kept at full width) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full object-cover"
          style={{ width: width || "100%", maxWidth: "none" }}
        />
      </div>

      {/* Persistent corner labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-brand-red px-2 py-1 text-xs font-bold uppercase tracking-wide text-white">
        After
      </span>

      {/* Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div
          className={`ba-knob absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-red shadow-lg ring-1 ring-black/10 ${
            dragging ? "scale-105" : ""
          }`}
        >
          <span aria-hidden className="text-lg leading-none">⇆</span>
        </div>
      </div>

      <label className="sr-only" htmlFor={rangeId}>
        Before/after slider position
      </label>
      <input
        id={rangeId}
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 w-full cursor-ew-resize opacity-0"
        aria-label="Reveal more of the before or after photo"
      />
    </div>
  );
}
