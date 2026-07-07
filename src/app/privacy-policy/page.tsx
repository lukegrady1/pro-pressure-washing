import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { business, fullAddress } from "@/data/business";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | Pro Pressure Washing",
  description:
    "How Pro Pressure Washing collects, uses and protects the information you share when requesting a quote or contacting us.",
  path: "/privacy-policy/",
});

// NOTE: Standard boilerplate — client should review and confirm before launch.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy/">
      <p>
        This Privacy Policy explains how {business.name} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses and protects any
        information you provide when you use this website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you request a quote or contact us, we may collect your name, email
        address, phone number and any details you include about your project. We
        only collect information that you voluntarily provide.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information solely to respond to your inquiry, provide a
        quote and deliver the services you request. We do not sell, rent or trade
        your personal information to third parties.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        This site may use basic analytics to understand how visitors use the
        website so we can improve it. You can disable cookies in your browser
        settings at any time.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect the information you share with us.
        However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>, by phone at{" "}
        <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>, or by
        mail at {fullAddress}.
      </p>
    </LegalPage>
  );
}
