// Authoritative identifiers for every town we serve, used as `sameAs` on the
// City entities in schema (LocalBusiness.areaServed and Service.areaServed).
// Linking each city to Wikipedia, Wikidata and Google's Knowledge Graph entity
// removes any ambiguity about which "Holden" or "Princeton" we mean.
//
// Source: Wikidata (QID, enwiki sitelink, and Freebase ID P646 — Google's
// Knowledge Graph still keys these towns by their /m/ Freebase MID). The
// Knowledge Graph ID is expressed as the full Google search URL, which is the
// form Google documents for identifying an entity, not the bare MID.

export type PlaceIds = {
  wikipedia: string;
  wikidata: string;
  kgmid: string; // e.g. "/m/0v038"
};

export const placeIds: Record<string, PlaceIds> = {
  Holden: { wikipedia: "Holden,_Massachusetts", wikidata: "Q2559867", kgmid: "/m/0v038" },
  Worcester: { wikipedia: "Worcester,_Massachusetts", wikidata: "Q49179", kgmid: "/m/0pc7r" },
  Paxton: { wikipedia: "Paxton,_Massachusetts", wikidata: "Q2539237", kgmid: "/m/0v071" },
  Princeton: { wikipedia: "Princeton,_Massachusetts", wikidata: "Q3921977", kgmid: "/m/0v08j" },
  Sterling: { wikipedia: "Sterling,_Massachusetts", wikidata: "Q1023553", kgmid: "/m/0v0bl" },
  Rutland: { wikipedia: "Rutland,_Massachusetts", wikidata: "Q957421", kgmid: "/m/023v8g" },
  Shrewsbury: { wikipedia: "Shrewsbury,_Massachusetts", wikidata: "Q2559909", kgmid: "/m/0v096" },
  "West Boylston": { wikipedia: "West_Boylston,_Massachusetts", wikidata: "Q2562576", kgmid: "/m/0v0dn" },
  Boylston: { wikipedia: "Boylston,_Massachusetts", wikidata: "Q2559500", kgmid: "/m/0t_zs" },
  Northborough: { wikipedia: "Northborough,_Massachusetts", wikidata: "Q3878560", kgmid: "/m/01m8m1" },
  Westborough: { wikipedia: "Westborough,_Massachusetts", wikidata: "Q386170", kgmid: "/m/01m8sk" },
  Southborough: { wikipedia: "Southborough,_Massachusetts", wikidata: "Q2560012", kgmid: "/m/0v0b7" },
};

// The three canonical URLs for a town, in the order Wikipedia, Wikidata,
// Google Knowledge Graph. Returns undefined for a town we have no IDs for, so
// callers can simply omit `sameAs` rather than emit a half-empty array.
export function placeSameAs(townName: string): string[] | undefined {
  const p = placeIds[townName];
  if (!p) return undefined;
  return [
    `https://en.wikipedia.org/wiki/${p.wikipedia}`,
    `https://www.wikidata.org/wiki/${p.wikidata}`,
    `https://www.google.com/search?kgmid=${p.kgmid}`,
  ];
}
