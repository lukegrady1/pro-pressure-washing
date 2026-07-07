import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { business } from "@/data/business";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service | Pro Pressure Washing",
  description:
    "The terms and conditions that apply to your use of the Pro Pressure Washing website and services.",
  path: "/terms-of-service/",
});

// NOTE: Standard boilerplate — client should review and confirm before launch.
export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" path="/terms-of-service/">
      <p>
        By accessing and using this website, you accept and agree to be bound by
        these Terms of Service. If you do not agree, please do not use the site.
      </p>

      <h2>Services</h2>
      <p>
        {business.name} provides residential and commercial pressure washing and
        soft washing services throughout Worcester County, Massachusetts. All
        quotes are estimates; final pricing is confirmed after an on-site
        evaluation.
      </p>

      <h2>Use of the Website</h2>
      <p>
        The content on this website is provided for general information only. You
        agree not to misuse the site or attempt to interfere with its normal
        operation.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content, images and branding on this website are the property of{" "}
        {business.name} and may not be reproduced without permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        {business.name} is not liable for any indirect or consequential damages
        arising from the use of this website. Service work is covered by our
        insurance and any applicable written agreement.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a> or call{" "}
        <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>.
      </p>
    </LegalPage>
  );
}
