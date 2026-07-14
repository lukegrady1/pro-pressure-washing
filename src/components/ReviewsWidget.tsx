"use client";

import { useEffect, useRef } from "react";

// Google reviews widget (Local Marketing Manager). The iframe src carries a
// pageSize that we set from the container width, and re-set on resize — a React
// port of the provider's embed script.
function pageSizeForWidth(width: number) {
  if (width < 450) return 1;
  if (width < 675) return 2;
  if (width < 918) return 3;
  if (width < 1144) return 4;
  return 5;
}

export default function ReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const setSrc = () => {
      const container = containerRef.current;
      const iframe = iframeRef.current;
      if (!container || !iframe) return;
      const width = container.offsetWidth;
      if (width === 0) {
        timer = setTimeout(setSrc, 50);
        return;
      }
      const pageSize = pageSizeForWidth(width);
      const expected = `https://www.localmarketingmanager.com/api/reviews/pro-pressure-washing-review-widget?pageSize=${pageSize}`;
      if (iframe.src !== expected) iframe.src = expected;
    };
    setSrc();
    timer = setTimeout(setSrc, 50);
    window.addEventListener("resize", setSrc);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setSrc);
    };
  }, []);

  return (
    <div id="reviewsWidgetContainer" ref={containerRef}>
      <iframe
        id="reviewsWidget"
        ref={iframeRef}
        title="Google Reviews for Pro Pressure Washing"
        loading="lazy"
        style={{ width: "100%", border: "none", minHeight: 300 }}
      />
    </div>
  );
}
