export type Testimonial = { quote: string; name: string; location: string };

// Sitewide testimonial set (Home, Services, Contact, FAQ, etc.).
export const testimonials: Testimonial[] = [
  {
    quote:
      "Chris was incredibly easy to work with. Scheduling was quick. Our home and fence looked brand new when he was done. We will definitely use him again and would highly recommend him to anyone.",
    name: "Robert L.",
    location: "Holden, MA",
  },
  {
    quote:
      "Chris did a fantastic job and he is a wonderful person to work with! He cleaned out our gutters which were half full along with unclogging the downspouts. Highly recommended! Well done and will definitely use his services again! Thanks Chris!",
    name: "Trever G.",
    location: "Holden, MA",
  },
  {
    quote:
      "Chris was able to get our entire home looking immaculate! We have some very difficult areas to get to on the back of our house and they look amazing. He was able to get to those tough spots without a ladder. Worth every penny. Thank you Chris!",
    name: "William S.",
    location: "Massachusetts, US",
  },
  {
    quote:
      "After this winter, I noticed some mold and spots growing along the foundation of my home. Chris came and gave me an estimate on the entire house for what I planned to pay for the foundation alone. Everything looks beautiful. Thank you again Chris!!",
    name: "Tim L.",
    location: "Holden, MA",
  },
];
