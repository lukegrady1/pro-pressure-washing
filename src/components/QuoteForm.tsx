"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/data/business";

// Formspree endpoint — replace FORM_ID after creating a form that delivers to
// clpropressurewashing@gmail.com (see README "Forms"). Until then, submissions
// fall back to a mailto: so nothing is silently lost.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORM_ID";
const CONFIGURED = !FORMSPREE_ENDPOINT.endsWith("FORM_ID");

type Variant = "quote" | "contact";

export default function QuoteForm({ variant = "quote" }: { variant?: Variant }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (data.get("company")) return;

    if (!CONFIGURED) {
      // Graceful fallback while the endpoint is not yet set up.
      const body = Array.from(data.entries())
        .filter(([k]) => k !== "company")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        "Website quote request"
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-bold text-green-800">Thank you!</p>
        <p className="mt-1 text-sm text-green-700">
          Your message has been sent. We&rsquo;ll get right back to you.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-neutral-300 bg-white px-3.5 py-2 text-sm text-neutral-800 focus:border-brand-red focus:outline-none sm:py-2.5";

  return (
    <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-heading">
            Your Name <span className="text-brand-red">*</span>
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-heading">
            Your Email <span className="text-brand-red">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-heading">
            Your Phone <span className="text-brand-red">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-semibold text-heading">
            {variant === "contact" ? (
              "Subject"
            ) : (
              <>
                Service Needed <span className="text-brand-red">*</span>
              </>
            )}
          </label>
          {variant === "contact" ? (
            <input id="service" name="subject" className={inputClass} />
          ) : (
            <select id="service" name="service" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Choose one…
              </option>
              <option>House or Building</option>
              <option>Patio or Walkway</option>
              <option>Fence or Deck</option>
              <option>Other</option>
            </select>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-heading">
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClass} />
      </div>

      <p className="text-xs text-body-muted">
        Fields marked with a <span className="text-brand-red">*</span> are required.
      </p>

      {status === "error" && (
        <p className="text-sm text-brand-red">
          Something went wrong. Please call us at {business.phone.display}.
        </p>
      )}

      <button type="submit" className="btn w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
