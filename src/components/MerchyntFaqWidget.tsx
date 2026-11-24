"use client";

import { useEffect, useRef, useState } from "react";

// Merchynt FAQ widget (the Google Business Profile's Q&A), answers expanded.
//
// Desktop (frame ≥ 768px wide): the whole list in a 1100px frame that scrolls.
// Narrower: the full list runs ~8,700px on a phone, so the frame shows only the
// first ~3 Q&As, fades out, and the "View All FAQs" button under it carries on.
// It's display-only there (pointer-events off), so swiping over it scrolls the
// page, not the widget. The widget can't report its height (cross-origin), so
// the preview height is an approximation; the fade hides where the cut lands.
const SRC =
  "https://www.localmarketingmanager.com/api/questions/pro-pressure-washing-frequently-asked-questions?textColor=%23000000&backgroundColor=%23ffffff&showTitle=true&borderRadius=10px&visibility=showAllExpanded&isTransparentBackgroundApplied=false";
const DESKTOP_MIN_WIDTH = 768;
const DESKTOP_HEIGHT = 1100;
const FADE_HEIGHT = 160;

// Bottom of the 3rd Q&A, fitted to measurements at 280–760px frame widths
// (text rewraps, so the height falls off roughly as 1/width).
function previewHeight(width: number) {
  return Math.round(200 + 470_000 / width);
}

export default function MerchyntFaqWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const update = () => {
      if (container.offsetWidth > 0) setWidth(container.offsetWidth);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const preview = width !== null && width < DESKTOP_MIN_WIDTH;
  const height = preview ? previewHeight(width) : DESKTOP_HEIGHT;

  return (
    <div
      ref={containerRef}
      style={{ height, position: "relative", overflow: "hidden" }}
    >
      {width !== null && (
        <iframe
          id="ai-seo-iframe"
          src={SRC}
          title="Pro Pressure Washing frequently asked questions"
          loading="lazy"
          scrolling={preview ? "no" : undefined}
          tabIndex={preview ? -1 : undefined}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: preview ? "none" : undefined,
          }}
        />
      )}
      {preview && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            insetInline: 0,
            bottom: 0,
            height: FADE_HEIGHT,
            background:
              "linear-gradient(to bottom, transparent, var(--color-neutral-50, #fafafa))",
          }}
        />
      )}
    </div>
  );
}
