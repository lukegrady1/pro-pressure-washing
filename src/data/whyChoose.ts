export type WhyItem = { title: string; body: string; icon: string };

// "Why Choose Us?" — 6 items in a 3×2 grid. `icon` names a lucide-style inline SVG.
export const whyChoose: WhyItem[] = [
  {
    title: "Top Rated",
    body: "We are one of the top rated pressure washing companies in the Worcester County area.",
    icon: "star",
  },
  {
    title: "Professional",
    body: "We use professional state of the art equipment combined with environmentally friendly cleaning agents to attain the best results.",
    icon: "badge",
  },
  {
    title: "Licensed & Insured",
    body: "We are a fully insured pressure washing company.",
    icon: "shield",
  },
  {
    title: "Free Consultations",
    body: "We offer free consultations for our services, and will provide you with an actual quote.",
    icon: "chat",
  },
  {
    title: "Reliable Services",
    body: "We pride ourselves on being on time and being responsive to phone calls and e-mails.",
    icon: "clock",
  },
  {
    title: "Experienced",
    body: "For years Pro Pressure Washing has provided residents and businesses of Worcester County with exceptional pressure cleaning services.",
    icon: "wrench",
  },
];
