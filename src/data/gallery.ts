export type GalleryPair = {
  before: string;
  after: string;
  label: string; // used for descriptive alt text
};

const U = "/images/2015/07";
const W = "/images/work";

// Before/after pairs shown on the gallery page as interactive comparison
// sliders. `label` is the visible caption (service + location) and the alt text.
// Filenames are preserved verbatim — they are SEO assets.
//
// Captions say "Worcester County, MA" rather than a specific town: these photos
// carry no location metadata, and naming a town would assert where the job was
// without evidence. Every town served is in Worcester County, so this is both
// accurate and safe. If a job's town is confirmed, tighten its caption.
export const galleryPairs: GalleryPair[] = [
  // --- Rust / irrigation staining ---
  { before: `${W}/before-rust-removal-granite-stepping-stones-irrigation-stains-worcester-county-ma.webp`, after: `${W}/after-rust-removal-granite-stepping-stones-irrigation-stains-worcester-county-ma.webp`, label: "Irrigation Rust Stain Removal from Granite Stepping Stones in Worcester County, MA" },
  { before: `${W}/before-rust-removal-paver-walkway-irrigation-stains-worcester-county-ma.webp`, after: `${W}/after-rust-removal-paver-walkway-irrigation-stains-worcester-county-ma.webp`, label: "Irrigation Rust Stain Removal from a Paver Walkway in Worcester County, MA" },
  { before: `${W}/before-rust-removal-paver-patio-irrigation-stains-worcester-county-ma.webp`, after: `${W}/after-rust-removal-paver-patio-irrigation-stains-worcester-county-ma.webp`, label: "Irrigation Rust Stain Removal from a Paver Patio in Worcester County, MA" },
  // --- Moss removal ---
  { before: `${W}/before-moss-removal-brick-paver-patio-worcester-county-ma.webp`, after: `${W}/after-moss-removal-brick-paver-patio-worcester-county-ma.webp`, label: "Moss Removal from a Brick Paver Patio in Worcester County, MA" },
  { before: `${W}/before-moss-removal-paver-walkway-joints-worcester-county-ma.webp`, after: `${W}/after-moss-removal-paver-walkway-joints-worcester-county-ma.webp`, label: "Moss Removal from Paver Walkway Joints in Worcester County, MA" },
  { before: `${W}/before-moss-removal-fieldstone-wall-granite-steps-worcester-county-ma.webp`, after: `${W}/after-moss-removal-fieldstone-wall-granite-steps-worcester-county-ma.webp`, label: "Moss Removal from a Fieldstone Wall & Granite Steps in Worcester County, MA" },
  { before: `${W}/before-moss-removal-brick-paver-path-worcester-county-ma.webp`, after: `${W}/after-moss-removal-brick-paver-path-worcester-county-ma.webp`, label: "Moss Removal from a Brick Paver Path in Worcester County, MA" },
  // --- Lichen removal ---
  { before: `${W}/before-lichen-removal-vinyl-siding-worcester-county-ma.webp`, after: `${W}/after-lichen-removal-vinyl-siding-worcester-county-ma.webp`, label: "Lichen Removal from Vinyl Siding in Worcester County, MA" },
  { before: `${W}/before-lichen-removal-siding-closeup-worcester-county-ma.webp`, after: `${W}/after-lichen-removal-siding-closeup-worcester-county-ma.webp`, label: "Lichen Removal from House Siding in Worcester County, MA" },
  { before: `${W}/before-lichen-removal-bluestone-walkway-worcester-county-ma.webp`, after: `${W}/after-lichen-removal-bluestone-walkway-worcester-county-ma.webp`, label: "Lichen Removal from a Bluestone Walkway in Worcester County, MA" },
  // --- House / siding soft washing ---
  { before: `${W}/before-house-washing-algae-removal-vinyl-siding-worcester-county-ma.webp`, after: `${W}/after-house-washing-algae-removal-vinyl-siding-worcester-county-ma.webp`, label: "House Washing & Algae Removal in Worcester County, MA" },
  { before: `${W}/before-house-washing-soft-wash-siding-worcester-county-ma.webp`, after: `${W}/after-house-washing-soft-wash-siding-worcester-county-ma.webp`, label: "Soft Wash House Washing in Worcester County, MA" },
  { before: `${W}/before-house-washing-green-algae-siding-worcester-county-ma.webp`, after: `${W}/after-house-washing-green-algae-siding-worcester-county-ma.webp`, label: "Green Algae Removal from House Siding in Worcester County, MA" },
  { before: `${W}/before-soft-washing-white-vinyl-siding-worcester-county-ma.webp`, after: `${W}/after-soft-washing-white-vinyl-siding-worcester-county-ma.webp`, label: "Vinyl Siding Soft Washing in Worcester County, MA" },
  // --- Pavers / stone ---
  { before: `${W}/before-paver-walkway-cleaning-algae-removal-worcester-county-ma.webp`, after: `${W}/after-paver-walkway-cleaning-algae-removal-worcester-county-ma.webp`, label: "Paver Walkway Cleaning & Algae Removal in Worcester County, MA" },
  { before: `${W}/before-paver-patio-cleaning-worcester-county-ma.webp`, after: `${W}/after-paver-patio-cleaning-worcester-county-ma.webp`, label: "Paver Patio Cleaning in Worcester County, MA" },
  { before: `${W}/before-bluestone-patio-cleaning-worcester-county-ma.webp`, after: `${W}/after-bluestone-patio-cleaning-worcester-county-ma.webp`, label: "Bluestone Patio Cleaning in Worcester County, MA" },
  { before: `${W}/before-retaining-wall-cleaning-worcester-county-ma.webp`, after: `${W}/after-retaining-wall-cleaning-worcester-county-ma.webp`, label: "Retaining Wall Cleaning in Worcester County, MA" },
  // --- Decks & docks ---
  { before: `${W}/before-dock-cleaning-composite-decking-worcester-county-ma.webp`, after: `${W}/after-dock-cleaning-composite-decking-worcester-county-ma.webp`, label: "Dock Cleaning in Worcester County, MA" },
  { before: `${W}/before-deck-railing-cleaning-organic-growth-worcester-county-ma.webp`, after: `${W}/after-deck-railing-cleaning-organic-growth-worcester-county-ma.webp`, label: "Deck & Railing Cleaning in Worcester County, MA" },
  { before: `${W}/before-deck-cleaning-composite-porch-worcester-county-ma.webp`, after: `${W}/after-deck-cleaning-composite-porch-worcester-county-ma.webp`, label: "Composite Deck Cleaning in Worcester County, MA" },
  // --- Fleet / commercial ---
  { before: `${W}/before-fleet-washing-dump-truck-worcester-county-ma.webp`, after: `${W}/after-fleet-washing-dump-truck-worcester-county-ma.webp`, label: "Fleet Washing — Tri-Axle Dump Truck in Worcester County, MA" },
  { before: `${W}/before-fleet-washing-truck-fuel-tank-polishing-worcester-county-ma.webp`, after: `${W}/after-fleet-washing-truck-fuel-tank-polishing-worcester-county-ma.webp`, label: "Fleet Washing — Aluminum Fuel Tank Polishing in Worcester County, MA" },
  { before: `${W}/before-fleet-washing-truck-wheel-cleaning-worcester-county-ma.webp`, after: `${W}/after-fleet-washing-truck-wheel-cleaning-worcester-county-ma.webp`, label: "Fleet Washing — Wheel & Rim Cleaning in Worcester County, MA" },
  { before: `${W}/before-fleet-washing-dump-body-road-film-worcester-county-ma.webp`, after: `${W}/after-fleet-washing-dump-body-road-film-worcester-county-ma.webp`, label: "Fleet Washing — Road Film Removal in Worcester County, MA" },
  { before: `${W}/before-fleet-washing-kenworth-dump-truck-worcester-county-ma.webp`, after: `${W}/after-fleet-washing-kenworth-dump-truck-worcester-county-ma.webp`, label: "Fleet Washing — Kenworth Dump Truck in Worcester County, MA" },
  // --- Concrete ---
  { before: `${W}/before-concrete-pool-deck-cleaning-worcester-county-ma.webp`, after: `${W}/after-concrete-pool-deck-cleaning-worcester-county-ma.webp`, label: "Concrete Pool Deck Cleaning in Worcester County, MA" },
  { before: `${W}/before-concrete-steps-cleaning-worcester-county-ma.webp`, after: `${W}/after-concrete-steps-cleaning-worcester-county-ma.webp`, label: "Concrete Steps Cleaning in Worcester County, MA" },
  { before: `${W}/before-exposed-aggregate-pool-deck-cleaning-worcester-county-ma.webp`, after: `${W}/after-exposed-aggregate-pool-deck-cleaning-worcester-county-ma.webp`, label: "Exposed Aggregate Pool Deck Cleaning in Worcester County, MA" },
  // --- Legacy pairs (original site) ---
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
// before/after comparison sliders on the homepage and elsewhere. Chosen for
// tight frame matching — a slider only reads well when the two shots line up.
export const featuredPairs: GalleryPair[] = [
  { before: `${W}/before-moss-removal-brick-paver-patio-worcester-county-ma.webp`, after: `${W}/after-moss-removal-brick-paver-patio-worcester-county-ma.webp`, label: "Moss Removal from a Brick Paver Patio in Worcester County, MA" },
  { before: `${W}/before-house-washing-algae-removal-vinyl-siding-worcester-county-ma.webp`, after: `${W}/after-house-washing-algae-removal-vinyl-siding-worcester-county-ma.webp`, label: "House Washing & Algae Removal in Worcester County, MA" },
  { before: `${W}/before-rust-removal-granite-stepping-stones-irrigation-stains-worcester-county-ma.webp`, after: `${W}/after-rust-removal-granite-stepping-stones-irrigation-stains-worcester-county-ma.webp`, label: "Irrigation Rust Stain Removal in Worcester County, MA" },
  { before: `${W}/before-lichen-removal-vinyl-siding-worcester-county-ma.webp`, after: `${W}/after-lichen-removal-vinyl-siding-worcester-county-ma.webp`, label: "Lichen Removal from Vinyl Siding in Worcester County, MA" },
  { before: `${W}/before-retaining-wall-cleaning-worcester-county-ma.webp`, after: `${W}/after-retaining-wall-cleaning-worcester-county-ma.webp`, label: "Retaining Wall Cleaning in Worcester County, MA" },
  { before: `${U}/BEFORE-House-washing.webp`, after: `${U}/AFTER-House-Washing.webp`, label: "House Washing in Worcester County, MA" },
];
