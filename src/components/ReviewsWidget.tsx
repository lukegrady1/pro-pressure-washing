"use client";

import { useEffect, useRef, useState } from "react";

// Google reviews widget (Local Marketing Manager). The iframe src carries a
// pageSize that we set from the container width, and re-set on resize — a React
// port of the provider's embed script.
//
// The widget renders 316px tall at every width; the frame matches it exactly so
// it never scrolls up and down.
const SRC =
  "https://www.localmarketingmanager.com/api/reviews/pro-pressure-washing-review-widget";
const WIDGET_HEIGHT = 316;

// Phones: the provider shows one review below 450px, and two cards at true
// phone width squash the name/date into the Google logo. So below 450px the
// widget is laid out at 500px with two reviews and scaled down to fit.
const PHONE_MAX_WIDTH = 450;
const PHONE_LAYOUT_WIDTH = 500;

function pageSizeForWidth(width: number) {
  if (width < 675) return 2;
  if (width < 918) return 3;
  if (width < 1144) return 4;
  return 5;
}

type Frame = { src: string; layoutWidth: number; scale: number };

function frameFor(width: number): Frame {
  if (width < PHONE_MAX_WIDTH) {
    return {
      src: `${SRC}?pageSize=2`,
      layoutWidth: PHONE_LAYOUT_WIDTH,
      scale: width / PHONE_LAYOUT_WIDTH,
    };
  }
  return {
    src: `${SRC}?pageSize=${pageSizeForWidth(width)}`,
    layoutWidth: width,
    scale: 1,
  };
}

export default function ReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState<Frame | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const update = () => {
      const width = container.offsetWidth;
      if (width === 0) return;
      const next = frameFor(width);
      setFrame((prev) =>
        prev &&
        prev.src === next.src &&
        prev.layoutWidth === next.layoutWidth &&
        prev.scale === next.scale
          ? prev
          : next,
      );
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const scale = frame?.scale ?? 1;
  return (
    <div
      id="reviewsWidgetContainer"
      ref={containerRef}
      style={{ height: WIDGET_HEIGHT * scale, overflow: "hidden" }}
    >
      {frame && (
        <iframe
          id="reviewsWidget"
          src={frame.src}
          title="Google Reviews for Pro Pressure Washing"
          loading="lazy"
          scrolling="no"
          style={{
            display: "block",
            border: "none",
            width: scale === 1 ? "100%" : frame.layoutWidth,
            height: WIDGET_HEIGHT,
            transform: scale === 1 ? undefined : `scale(${scale})`,
            transformOrigin: "top left",
          }}
        />
      )}
    </div>
  );
}
