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
  hoursText: "Open Monday–Sunday",
  reviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJE6yQ6Nv_44kRSP9Yvgw3rEY",
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
