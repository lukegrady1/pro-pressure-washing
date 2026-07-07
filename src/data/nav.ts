export type NavLink = { label: string; href: string };

export const services: NavLink[] = [
  { label: "Houses, Buildings and Roofs", href: "/services/houses-buildings-roofs/" },
  { label: "Patios and Walkways", href: "/services/patios-and-walkways/" },
  { label: "Fences and Decks", href: "/services/fences-and-decks/" },
];

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Our Work", href: "/gallery/our-work-2/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const footerNav: NavLink[] = [
  { label: "Our Work", href: "/gallery/our-work-2/" },
  { label: "FAQs", href: "/frequently-asked-questions/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
];
