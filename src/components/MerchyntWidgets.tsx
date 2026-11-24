// Merchynt (Local Marketing Manager) widgets fed from the Google Business
// Profile: photos, Google posts and the profile's Q&A. Plain iframes, server
// rendered, lazy-loaded — the embed codes Merchynt supplies, as JSX.
const BASE = "https://www.localmarketingmanager.com/api";

export function ImagesWidget() {
  return (
    <iframe
      src={`${BASE}/images/pro-pressure-washing-image-widget`}
      title="Pro Pressure Washing photos from Google"
      loading="lazy"
      style={{ width: "100%", border: "none", minHeight: 480 }}
    />
  );
}

export function LocalPostsWidget() {
  return (
    <iframe
      src={`${BASE}/local-posts/pro-pressure-washing-local-posts-widget?objectFit=cover`}
      title="Recent Google posts from Pro Pressure Washing"
      loading="lazy"
      style={{ width: "100%", border: "none", minHeight: 480 }}
    />
  );
}

export function FaqWidget() {
  return (
    <div style={{ height: 1100 }}>
      <iframe
        id="ai-seo-iframe"
        src={`${BASE}/questions/pro-pressure-washing-frequently-asked-questions?textColor=%23000000&backgroundColor=%23ffffff&showTitle=true&borderRadius=10px&visibility=showAllExpanded&isTransparentBackgroundApplied=false`}
        title="Pro Pressure Washing frequently asked questions"
        loading="lazy"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
