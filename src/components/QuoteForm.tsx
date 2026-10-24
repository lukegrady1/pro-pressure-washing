"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { business } from "@/data/business";

// The quote/contact form is a GoHighLevel embed, served from the client's
// branded domain (forms.clpropressurewashing.com). The form fields, spam protection,
// notifications and lead delivery are all managed inside GoHighLevel — this
// component only renders the iframe and loads GHL's form_embed.js, which
// listens for the form's postMessage and auto-resizes the iframe to fit.
//
// next/script loads the embed script once and dedupes it across routes, so it
// is safe to render this component on multiple pages. minHeight matches GHL's
// configured data-height (877) so the form is visible immediately and never
// collapses to zero if the resize script is slow or blocked.
const FORM_ID = "4sStOnSBmTjPXxfugvPo";
const FORM_SRC = `https://forms.clpropressurewashing.com/widget/form/${FORM_ID}`;
const EMBED_SCRIPT = "https://forms.clpropressurewashing.com/js/form_embed.js";

// Region gate. The business only serves Worcester County, MA, so the form is
// shown only to browsers whose IANA timezone is New York (US Eastern). Every spam
// submission to date (SEO / lead-gen / financing pitches) has come from a
// browser outside it — Asia/* first, then America/Los_Angeles. The check uses
// the same signal GHL logs, so anything that wouldn't show up as an Eastern
// zone in the GHL submissions table never gets the form at all. Everyone else
// sees the phone number instead, so a genuine caller is never stranded.
//
// Every modern device in Massachusetts reports "America/New_York". "US/Eastern"
// and "EST5EDT" are legacy aliases for the same zone that a few older systems
// still use.
const ALLOWED_TIMEZONES = new Set(["America/New_York", "US/Eastern", "EST5EDT"]);

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
