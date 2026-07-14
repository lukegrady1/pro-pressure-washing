export type GalleryPair = {
  before: string;
  after: string;
  label: string; // used for descriptive alt text
};

const U = "/images/2015/07";

// Before/after pairs shown on the gallery page as interactive comparison
// sliders. `label` is the visible caption (service + location) and the alt text.
// Filenames are preserved verbatim — they are SEO assets.
export const galleryPairs: GalleryPair[] = [
  { before: `${U}/walkway1_after-1.jpg`, after: `${U}/walkway1_after.jpg`, label: "Walkway Pressure Washing in Worcester County, MA" },
  { before: `${U}/stairs1_before.jpg`, after: `${U}/stairs1_before-1.jpg`, label: "Concrete Stairs Cleaning in Worcester County, MA" },
  { before: `${U}/siding3-after.jpg`, after: `${U}/siding3-after-1.jpg`, label: "Vinyl Siding Soft Washing in Worcester County, MA" },
  { before: `${U}/siding2-before.jpg`, after: `${U}/siding2-after.jpg`, label: "House Siding Washing in Worcester County, MA" },
  { before: `${U}/siding1-before.jpg`, after: `${U}/siding1-after.jpg`, label: "House Siding Cleaning in Worcester County, MA" },
  { before: `${U}/fence1-before.jpg`, after: "/images/2020/03/fence1-after.jpg", label: "Wood Fence Pressure Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-House-washing.jpg`, after: `${U}/AFTER-House-Washing.jpg`, label: "House Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-power-washing-siding.jpg`, after: `${U}/AFTER-power-washing-siding.jpg`, label: "Vinyl Siding Power Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-power-washing-house.jpg`, after: `${U}/AFTER-power-washing-house.jpg`, label: "House Power Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-power-washing-house-1.jpg`, after: `${U}/AFTER-power-washing-house-1.jpg`, label: "Home Exterior Power Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-pressure-washing-house-Sterling.jpg`, after: `${U}/after-pressure-wash-house-near-me-Sterling.jpg`, label: "House Pressure Washing in Sterling, MA" },
  { before: `${U}/before-deck-power-washing-in-Holden-NEW.jpg`, after: `${U}/pressure-wash-deck-Holden-NEW.jpg`, label: "Deck Power Washing in Holden, MA" },
  { before: `${U}/before-deck-pressure-washing-in-Holden-NEW.jpg`, after: `${U}/deck-pressure-washing-in-Holden-NEW.jpg`, label: "Deck Pressure Washing in Holden, MA" },
  { before: `${U}/BEFORE-house-pressure-washing-service-Holden.jpg`, after: `${U}/Huse-Pressure-Washing-Service-Holden-AFTER.jpg`, label: "House Pressure Washing in Holden, MA" },
  { before: `${U}/BEFORE-house-washing-and-cement-walkway-power-washing.jpg`, after: `${U}/Power-washing-house-and-cement-walkway-Worcester-MA.jpg`, label: "House & Walkway Washing in Worcester, MA" },
  { before: `${U}/before-patio-pressure-washing-for-moss-removal-in-Worceester.jpg`, after: `${U}/patio-pressure-washing-for-moss-removal-in-Worcester.jpg`, label: "Patio Moss Removal in Worcester, MA" },
  { before: `${U}/before-power-washing-concrete-stairs-in-Worcester.jpg`, after: `${U}/power-washing-concrete-stairs-in-Worcester.jpg`, label: "Concrete Stairs Power Washing in Worcester, MA" },
  { before: `${U}/before-power-washing-graffiti-removal-in-Worcester.jpg`, after: `${U}/power-washing-graffiti-removal-in-Worcester.jpg`, label: "Graffiti Removal in Worcester, MA" },
  { before: `${U}/before-pressure-washing-rust-stain-removal-in-Worcester.jpg`, after: `${U}/pressure-washing-rust-stain-removal-in-Worcester.jpg`, label: "Rust Stain Removal in Worcester, MA" },
  { before: `${U}/before-power-washing-deck-in-Worcester.jpg`, after: `${U}/power-washing-deck-in-Worcester.jpg`, label: "Deck Power Washing in Worcester, MA" },
  { before: `${U}/before-power-washing-blue-stone-patio-in-Worcester.jpg`, after: `${U}/power-washing-blue-stone-patio-in-Worcester.jpg`, label: "Bluestone Patio Power Washing in Worcester, MA" },
  { before: `${U}/before-pressure-washing-deck-floor-in-Worcester.jpg`, after: `${U}/pressure-washing-deck-floor-in-Worcester.jpg`, label: "Deck Floor Pressure Washing in Worcester, MA" },
  { before: `${U}/BEFORE-power-washing-house-Leicester-MA.jpg`, after: `${U}/After-power-washing-house-Leicester-MA-2.jpg`, label: "House Power Washing in Leicester, MA" },
  { before: `${U}/before-power-washing-walkway.jpg`, after: `${U}/after-power-washing-walkway.jpg`, label: "Walkway Power Washing in Worcester County, MA" },
  { before: `${U}/Before-power-washing-siding-1.jpg`, after: `${U}/AFTER-power-washing-siding-1.jpg`, label: "Vinyl Siding Power Washing in Worcester County, MA" },
];

// Hand-picked pairs (genuine matching-frame shots) for the interactive
// before/after comparison sliders on the homepage and elsewhere.
export const featuredPairs: GalleryPair[] = [
  { before: `${U}/BEFORE-House-washing.jpg`, after: `${U}/AFTER-House-Washing.jpg`, label: "House Washing in Worcester County, MA" },
  { before: `${U}/before-deck-power-washing-in-Holden-NEW.jpg`, after: `${U}/pressure-wash-deck-Holden-NEW.jpg`, label: "Deck Power Washing in Holden, MA" },
  { before: `${U}/before-patio-pressure-washing-for-moss-removal-in-Worceester.jpg`, after: `${U}/patio-pressure-washing-for-moss-removal-in-Worcester.jpg`, label: "Patio Moss Removal in Worcester, MA" },
  { before: `${U}/before-power-washing-concrete-stairs-in-Worcester.jpg`, after: `${U}/power-washing-concrete-stairs-in-Worcester.jpg`, label: "Concrete Stairs Power Washing in Worcester, MA" },
  { before: `${U}/before-power-washing-walkway.jpg`, after: `${U}/after-power-washing-walkway.jpg`, label: "Walkway Power Washing" },
  { before: `${U}/BEFORE-power-washing-house-Leicester-MA.jpg`, after: `${U}/After-power-washing-house-Leicester-MA-2.jpg`, label: "House Power Washing in Leicester, MA" },
];
