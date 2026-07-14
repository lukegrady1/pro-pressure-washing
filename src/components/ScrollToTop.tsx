"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reset the window to the top on every route change. Temporarily disables the
// global `scroll-behavior: smooth` so the reset is instant, not an animated
// scroll. (Same-route clicks — e.g. the logo while already on Home — are
// handled by onClick handlers in the Header.)
export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname]);
  return null;
}

// Shared helper for click handlers that must jump to the top even when the
// destination is the current route (so Next doesn't re-navigate).
export function scrollToTop() {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.style.scrollBehavior = prev;
}
