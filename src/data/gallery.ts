export type GalleryPair = {
  before: string;
  after: string;
  label: string; // used for descriptive alt text
};

const U = "/images/2015/07";

// Before/after pairs shown on the gallery page (with lightbox).
// Filenames are preserved verbatim — they are SEO assets.
export const galleryPairs: GalleryPair[] = [
  { before: `${U}/walkway1_after-1.jpg`, after: `${U}/walkway1_after.jpg`, label: "walkway pressure washing in Worcester County MA" },
  { before: `${U}/stairs1_before.jpg`, after: `${U}/stairs1_before-1.jpg`, label: "concrete stairs pressure washing" },
  { before: `${U}/siding3-after.jpg`, after: `${U}/siding3-after-1.jpg`, label: "vinyl siding soft washing" },
  { before: `${U}/siding2-before.jpg`, after: `${U}/siding2-after.jpg`, label: "house siding pressure washing" },
  { before: `${U}/siding1-before.jpg`, after: `${U}/siding1-after.jpg`, label: "house siding cleaning" },
  { before: `${U}/fence1-before.jpg`, after: "/images/2020/03/fence1-after.jpg", label: "wood fence pressure washing" },
  { before: `${U}/BEFORE-House-washing.jpg`, after: `${U}/AFTER-House-Washing.jpg`, label: "house washing in Worcester County MA" },
  { before: `${U}/BEFORE-power-washing-siding.jpg`, after: `${U}/AFTER-power-washing-siding.jpg`, label: "power washing siding" },
  { before: `${U}/BEFORE-power-washing-house.jpg`, after: `${U}/AFTER-power-washing-house.jpg`, label: "power washing a house exterior" },
  { before: `${U}/BEFORE-power-washing-house-1.jpg`, after: `${U}/AFTER-power-washing-house-1.jpg`, label: "power washing a home in Worcester County MA" },
  { before: `${U}/BEFORE-pressure-washing-house-Sterling.jpg`, after: `${U}/after-pressure-wash-house-near-me-Sterling.jpg`, label: "house pressure washing in Sterling MA" },
  { before: `${U}/before-deck-power-washing-in-Holden-NEW.jpg`, after: `${U}/pressure-wash-deck-Holden-NEW.jpg`, label: "deck power washing in Holden MA" },
  { before: `${U}/before-deck-pressure-washing-in-Holden-NEW.jpg`, after: `${U}/deck-pressure-washing-in-Holden-NEW.jpg`, label: "deck pressure washing in Holden MA" },
  { before: `${U}/BEFORE-house-pressure-washing-service-Holden.jpg`, after: `${U}/Huse-Pressure-Washing-Service-Holden-AFTER.jpg`, label: "house pressure washing service in Holden MA" },
  { before: `${U}/BEFORE-house-washing-and-cement-walkway-power-washing.jpg`, after: `${U}/Power-washing-house-and-cement-walkway-Worcester-MA.jpg`, label: "house and cement walkway power washing in Worcester MA" },
  { before: `${U}/before-patio-pressure-washing-for-moss-removal-in-Worceester.jpg`, after: `${U}/patio-pressure-washing-for-moss-removal-in-Worcester.jpg`, label: "patio moss removal in Worcester MA" },
  { before: `${U}/before-power-washing-concrete-stairs-in-Worcester.jpg`, after: `${U}/power-washing-concrete-stairs-in-Worcester.jpg`, label: "concrete stairs power washing in Worcester MA" },
  { before: `${U}/before-power-washing-graffiti-removal-in-Worcester.jpg`, after: `${U}/power-washing-graffiti-removal-in-Worcester.jpg`, label: "graffiti removal in Worcester MA" },
  { before: `${U}/before-pressure-washing-rust-stain-removal-in-Worcester.jpg`, after: `${U}/pressure-washing-rust-stain-removal-in-Worcester.jpg`, label: "rust stain removal in Worcester MA" },
  { before: `${U}/before-power-washing-deck-in-Worcester.jpg`, after: `${U}/power-washing-deck-in-Worcester.jpg`, label: "deck power washing in Worcester MA" },
  { before: `${U}/before-power-washing-blue-stone-patio-in-Worcester.jpg`, after: `${U}/power-washing-blue-stone-patio-in-Worcester.jpg`, label: "blue stone patio power washing in Worcester MA" },
  { before: `${U}/before-pressure-washing-deck-floor-in-Worcester.jpg`, after: `${U}/pressure-washing-deck-floor-in-Worcester.jpg`, label: "deck floor pressure washing in Worcester MA" },
  { before: `${U}/BEFORE-power-washing-house-Leicester-MA.jpg`, after: `${U}/After-power-washing-house-Leicester-MA-2.jpg`, label: "house power washing in Leicester MA" },
  { before: `${U}/before-power-washing-walkway.jpg`, after: `${U}/after-power-washing-walkway.jpg`, label: "walkway power washing" },
  { before: `${U}/Before-power-washing-siding-1.jpg`, after: `${U}/AFTER-power-washing-siding-1.jpg`, label: "siding power washing" },
];
