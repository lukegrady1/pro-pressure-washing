import Script from "next/script";

// The quote/contact form is a GoHighLevel embed, hosted on the agency's
// white-label domain (api.gradydigital.com). The form fields, spam protection,
// notifications and lead delivery are all managed inside GoHighLevel — this
// component only renders the iframe and loads GHL's form_embed.js, which
// listens for the form's postMessage and auto-resizes the iframe to fit.
//
// next/script loads the embed script once and dedupes it across routes, so it
// is safe to render this component on multiple pages. minHeight matches GHL's
// configured data-height (877) so the form is visible immediately and never
// collapses to zero if the resize script is slow or blocked.
const FORM_ID = "4sStOnSBmTjPXxfugvPo";
const FORM_SRC = `https://api.gradydigital.com/widget/form/${FORM_ID}`;
const EMBED_SCRIPT = "https://api.gradydigital.com/js/form_embed.js";

export default function QuoteForm() {
  return (
    <>
      <iframe
        src={FORM_SRC}
        id={`inline-${FORM_ID}`}
        title="Website Form"
        style={{
          width: "100%",
          minHeight: 877,
          border: "none",
          borderRadius: 10,
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height="877"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
      />
      <Script src={EMBED_SCRIPT} />
    </>
  );
}
