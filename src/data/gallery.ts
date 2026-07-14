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
  { before: `${U}/walkway1_after-1.webp`, after: `${U}/walkway1_after.webp`, label: "Walkway Pressure Washing in Worcester County, MA" },
  { before: `${U}/stairs1_before.webp`, after: `${U}/stairs1_before-1.webp`, label: "Concrete Stairs Cleaning in Worcester County, MA" },
  { before: `${U}/siding3-after.webp`, after: `${U}/siding3-after-1.webp`, label: "Vinyl Siding Soft Washing in Worcester County, MA" },
  { before: `${U}/siding2-before.webp`, after: `${U}/siding2-after.webp`, label: "House Siding Washing in Worcester County, MA" },
  { before: `${U}/siding1-before.webp`, after: `${U}/siding1-after.webp`, label: "House Siding Cleaning in Worcester County, MA" },
  { before: `${U}/fence1-before.webp`, after: "/images/2020/03/fence1-after.webp", label: "Wood Fence Pressure Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-House-washing.webp`, after: `${U}/AFTER-House-Washing.webp`, label: "House Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-power-washing-siding.webp`, after: `${U}/AFTER-power-washing-siding.webp`, label: "Vinyl Siding Power Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-power-washing-house.webp`, after: `${U}/AFTER-power-washing-house.webp`, label: "House Power Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-power-washing-house-1.webp`, after: `${U}/AFTER-power-washing-house-1.webp`, label: "Home Exterior Power Washing in Worcester County, MA" },
  { before: `${U}/BEFORE-pressure-washing-house-Sterling.webp`, after: `${U}/after-pressure-wash-house-near-me-Sterling.webp`, label: "House Pressure Washing in Sterling, MA" },
  { before: `${U}/before-deck-power-washing-in-Holden-NEW.webp`, after: `${U}/pressure-wash-deck-Holden-NEW.webp`, label: "Deck Power Washing in Holden, MA" },
  { before: `${U}/before-deck-pressure-washing-in-Holden-NEW.webp`, after: `${U}/deck-pressure-washing-in-Holden-NEW.webp`, label: "Deck Pressure Washing in Holden, MA" },
  { before: `${U}/BEFORE-house-pressure-washing-service-Holden.webp`, after: `${U}/Huse-Pressure-Washing-Service-Holden-AFTER.webp`, label: "House Pressure Washing in Holden, MA" },
  { before: `${U}/BEFORE-house-washing-and-cement-walkway-power-washing.webp`, after: `${U}/Power-washing-house-and-cement-walkway-Worcester-MA.webp`, label: "House & Walkway Washing in Worcester, MA" },
  { before: `${U}/before-patio-pressure-washing-for-moss-removal-in-Worceester.webp`, after: `${U}/patio-pressure-washing-for-moss-removal-in-Worcester.webp`, label: "Patio Moss Removal in Worcester, MA" },
  { before: `${U}/before-power-washing-concrete-stairs-in-Worcester.webp`, after: `${U}/power-washing-concrete-stairs-in-Worcester.webp`, label: "Concrete Stairs Power Washing in Worcester, MA" },
  { before: `${U}/before-power-washing-graffiti-removal-in-Worcester.webp`, after: `${U}/power-washing-graffiti-removal-in-Worcester.webp`, label: "Graffiti Removal in Worcester, MA" },
  { before: `${U}/before-pressure-washing-rust-stain-removal-in-Worcester.webp`, after: `${U}/pressure-washing-rust-stain-removal-in-Worcester.webp`, label: "Rust Stain Removal in Worcester, MA" },
  { before: `${U}/before-power-washing-deck-in-Worcester.webp`, after: `${U}/power-washing-deck-in-Worcester.webp`, label: "Deck Power Washing in Worcester, MA" },
  { before: `${U}/before-power-washing-blue-stone-patio-in-Worcester.webp`, after: `${U}/power-washing-blue-stone-patio-in-Worcester.webp`, label: "Bluestone Patio Power Washing in Worcester, MA" },
  { before: `${U}/before-pressure-washing-deck-floor-in-Worcester.webp`, after: `${U}/pressure-washing-deck-floor-in-Worcester.webp`, label: "Deck Floor Pressure Washing in Worcester, MA" },
  { before: `${U}/BEFORE-power-washing-house-Leicester-MA.webp`, after: `${U}/After-power-washing-house-Leicester-MA-2.webp`, label: "House Power Washing in Leicester, MA" },
  { before: `${U}/before-power-washing-walkway.webp`, after: `${U}/after-power-washing-walkway.webp`, label: "Walkway Power Washing in Worcester County, MA" },
  { before: `${U}/Before-power-washing-siding-1.webp`, after: `${U}/AFTER-power-washing-siding-1.webp`, label: "Vinyl Siding Power Washing in Worcester County, MA" },
];

// Hand-picked pairs (genuine matching-frame shots) for the interactive
// before/after comparison sliders on the homepage and elsewhere.
export const featuredPairs: GalleryPair[] = [
  { before: `${U}/BEFORE-House-washing.webp`, after: `${U}/AFTER-House-Washing.webp`, label: "House Washing in Worcester County, MA" },
  { before: `${U}/before-deck-power-washing-in-Holden-NEW.webp`, after: `${U}/pressure-wash-deck-Holden-NEW.webp`, label: "Deck Power Washing in Holden, MA" },
  { before: `${U}/before-patio-pressure-washing-for-moss-removal-in-Worceester.webp`, after: `${U}/patio-pressure-washing-for-moss-removal-in-Worcester.webp`, label: "Patio Moss Removal in Worcester, MA" },
  { before: `${U}/before-power-washing-concrete-stairs-in-Worcester.webp`, after: `${U}/power-washing-concrete-stairs-in-Worcester.webp`, label: "Concrete Stairs Power Washing in Worcester, MA" },
  { before: `${U}/before-power-washing-walkway.webp`, after: `${U}/after-power-washing-walkway.webp`, label: "Walkway Power Washing" },
  { before: `${U}/BEFORE-power-washing-house-Leicester-MA.webp`, after: `${U}/After-power-washing-house-Leicester-MA-2.webp`, label: "House Power Washing in Leicester, MA" },
];
