"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { business } from "@/data/business";

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

// Region gate. The business only serves Worcester County, MA, so the form is
// shown only to browsers whose IANA timezone is US Eastern time. Every spam
// submission to date (SEO / lead-gen / financing pitches) has come from a
// browser outside it — Asia/* first, then America/Los_Angeles. The check uses
// the same signal GHL logs, so anything that wouldn't show up as an Eastern
// zone in the GHL submissions table never gets the form at all. Everyone else
// sees the phone number instead, so a genuine caller is never stranded.
//
// Nearly every device in New England reports "America/New_York". The rest of
// the list is the other Eastern-time zones a mis-set device might report.
const ALLOWED_TIMEZONES = new Set([
  "America/New_York",
  "America/Detroit",
  "America/Toronto",
  "America/Montreal",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Indiana/Indianapolis",
  "America/Indianapolis",
  "America/Fort_Wayne",
  "US/Eastern",
  "US/Michigan",
  "US/East-Indiana",
  "EST5EDT",
  "EST",
]);

function isBlockedTimezone(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    return !ALLOWED_TIMEZONES.has(tz);
  } catch {
    // Old browsers with no Intl support: don't block a possible real lead.
    return false;
  }
}

// useSyncExternalStore with a null server snapshot: the server HTML and the
// hydration render both see `null` (placeholder), then React re-renders with
// the browser's real answer. No hydration mismatch, no setState-in-effect.
const subscribeNoop = () => () => {};
const getClientSnapshot = () => isBlockedTimezone();
const getServerSnapshot = () => null;

export default function QuoteForm() {
  // Three states: null (server render + hydration), allowed, blocked.
  const blocked = useSyncExternalStore<boolean | null>(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (blocked === null) {
    // Reserve the form's height so the page doesn't jump when it appears.
    return <div style={{ minHeight: 877 }} aria-hidden />;
  }

  if (blocked) {
    return (
      <div className="rounded-md bg-neutral-50 p-6 text-center">
        <p className="mb-2 text-lg font-bold text-heading">
          Online quotes are for our local service area
        </p>
        <p className="text-sm text-body-muted">
          We serve Worcester County, Massachusetts. If you&rsquo;re a local
          customer, please call us at{" "}
          <a
            href={`tel:${business.phone.tel}`}
            className="font-semibold text-brand-red hover:underline"
          >
            {business.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

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
