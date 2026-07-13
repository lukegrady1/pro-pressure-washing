import { residentialServices, commercialServices } from "@/data/services";

export type NavLink = { label: string; href: string };

// Header dropdown + footer service list, derived from the service content.
export const residentialServiceNav: NavLink[] = residentialServices.map((s) => ({
  label: s.navLabel,
  href: `/${s.slug}/`,
}));

export const commercialServiceNav: NavLink[] = commercialServices.map((s) => ({
  label: s.navLabel,
  href: `/${s.slug}/`,
}));

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Our Work", href: "/gallery/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const footerNav: NavLink[] = [
  { label: "Services", href: "/services/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Our Work", href: "/gallery/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "FAQs", href: "/faq/" },
  { label: "About Us", href: "/about/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];
