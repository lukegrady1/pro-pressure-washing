// Embedded Local Marketing Manager FAQ widget (AI-SEO). Renders the client's
// managed FAQ list in an iframe with all answers expanded.
//
// The widget is cross-origin and sends no postMessage height signal, so it
// can't auto-resize. The provider's default 1100px clips the expanded content
// (measured ~2020px tall at ~768px wide), so we set explicit heights sized to
// fit everything — taller on mobile where the answers wrap to more lines.
// The `ai-seo-iframe` id is what the provider's optional resize script targets.
export default function FaqWidget() {
  return (
    <div className="mx-auto h-[4400px] w-full max-w-3xl sm:h-[2700px] lg:h-[2200px]">
      <iframe
        src="https://www.localmarketingmanager.com/api/questions/pro-pressure-washing-frequently-asked-questions?textColor=%23000000&backgroundColor=%23ffffff&showTitle=true&borderRadius=10px&visibility=showAllExpanded&isTransparentBackgroundApplied=false"
        title="Pro Pressure Washing — Frequently Asked Questions"
        loading="lazy"
        id="ai-seo-iframe"
        className="h-full w-full border-0"
      />
    </div>
  );
}
