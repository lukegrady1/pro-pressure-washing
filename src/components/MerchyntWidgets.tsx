// Merchynt (Local Marketing Manager) widgets fed from the Google Business
// Profile: photos, Google posts and the profile's Q&A. Plain iframes, server
// rendered, lazy-loaded — the embed codes Merchynt supplies, as JSX.
//
// The widgets are cross-origin and don't report their height, so each frame is
// sized (in globals.css, via container queries on the frame's own width) to the
// height Merchynt's layout actually renders at that width — no dead space below
// the content and no scroll-inside-a-scroll on phones.
export { default as FaqWidget } from "@/components/MerchyntFaqWidget";

const BASE = "https://www.localmarketingmanager.com/api";

export function ImagesWidget() {
  return (
    <div className="merchynt-photos">
      <iframe
        src={`${BASE}/images/pro-pressure-washing-image-widget`}
        title="Pro Pressure Washing photos from Google"
        loading="lazy"
      />
    </div>
  );
}

export function LocalPostsWidget() {
  return (
    <div className="merchynt-posts">
      <iframe
        src={`${BASE}/local-posts/pro-pressure-washing-local-posts-widget?objectFit=cover`}
        title="Recent Google posts from Pro Pressure Washing"
        loading="lazy"
      />
    </div>
  );
}
