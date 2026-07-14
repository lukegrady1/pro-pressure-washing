// Single source of truth for NAP (Name / Address / Phone) — keep consistent everywhere.
export const business = {
  name: "Pro Pressure Washing",
  tagline: "One Call Cleans It All.",
  owner: "Chris",
  legalName: "Pro Pressure Washing",
  address: {
    street: "343 Reservoir Street",
    city: "Holden",
    state: "MA",
    zip: "01520",
    country: "US",
  },
  geo: {
    // Holden, MA — from the existing LocalBusiness schema
    latitude: 42.3529,
    longitude: -71.8676,
  },
  phone: {
    display: "(508) 736-0089",
    tel: "5087360089",
  },
  email: "clpropressurewashing@gmail.com",
  hoursText: "Open 7 days a week, 7 AM – 7 PM",
  reviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJE6yQ6Nv_44kRSP9Yvgw3rEY",
  // Google Business Profile rating (keep in sync with the live listing).
  rating: 4.9,
  reviewCount: 64,
  // Google Business Profile map embed (from the "Share > Embed a map" iframe).
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.178920276984!2d-71.8698308!3d42.338708600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3ffdbe890ac13%3A0x46ac370cbe58ff48!2sPro%20Pressure%20Washing!5e0!3m2!1sen!2sus!4v1783969118477!5m2!1sen!2sus",
  // Canonical production domain (used for metadata, sitemap, canonicals, schema).
  siteUrl: "https://clpropressurewashing.com",
  serviceAreas: [
    "Holden",
    "Paxton",
    "Princeton",
    "Sterling",
    "Rutland",
    "Shrewsbury",
    "West Boylston",
    "Boylston",
    "Northborough",
    "Westborough",
    "Worcester",
  ],
  logo: "/images/2023/02/Pro-Pressure-Washing-logo.png",
  favicon: "/images/2020/03/cropped-favicon-270x270.png",
  // Strong before/after used as the default social-share (OG) image.
  ogImage:
    "/images/2021/03/Pressure-Washing-Service-House-Washing-Worcester-County-MA-960x320.jpeg",
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
