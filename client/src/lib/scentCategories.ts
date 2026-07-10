import type { Product } from "@/types/product";

/**
 * The scent-family filters shown on the Full Collection page. "All" is the
 * default and is not a real bucket — every product maps to one of the other six.
 */
export const scentCategories = [
  "All",
  "Floral",
  "Woody & Oud",
  "Oriental & Amber",
  "Fresh & Citrus",
  "Gourmand & Sweet",
  "Musk",
] as const;

export type ScentCategory = (typeof scentCategories)[number];
export type ScentBucket = Exclude<ScentCategory, "All">;

/**
 * Best-effort classifier: the catalog stores granular families ("Oriental
 * Amber", "Fresh Spicy Woody"...), so we fold each one into a single filter
 * bucket. Rules are checked in priority order — the first match wins — so that
 * dominant notes (a pure musk, an amber, an oud) win over incidental ones.
 */
const rules: Array<{ bucket: ScentBucket; keywords: string[] }> = [
  // Pure musks only — anything also floral/woody/amber falls through to those.
  { bucket: "Musk", keywords: ["musk"] },
  { bucket: "Oriental & Amber", keywords: ["oriental", "amber"] },
  {
    bucket: "Woody & Oud",
    keywords: [
      "oud",
      "wood",
      "sandal",
      "leather",
      "vetiver",
      "cedar",
      "patchouli",
      "chypre",
    ],
  },
  {
    bucket: "Gourmand & Sweet",
    keywords: [
      "gourmand",
      "sweet",
      "vanilla",
      "coffee",
      "chocolate",
      "cocoa",
      "caramel",
      "praline",
      "marshmallow",
      "honey",
      "boozy",
      "milky",
      "latte",
      "candy",
      "coconut",
    ],
  },
  { bucket: "Floral", keywords: ["floral", "flower", "rose", "bouquet", "blossom"] },
  {
    bucket: "Fresh & Citrus",
    keywords: [
      "fresh",
      "citrus",
      "aquatic",
      "marine",
      "aromatic",
      "ozonic",
      "green",
      "aldehyde",
      "fougere",
      "fougère",
      "electric",
      "fruity",
      "fruit",
      "berry",
    ],
  },
];

export function classifyFamily(family: string): ScentBucket {
  const f = family.toLowerCase();

  // The pure-musk rule is special: only match when musk is the whole story.
  if (
    f.includes("musk") &&
    !/floral|flower|rose|oud|wood|amber|oriental|gourmand|fruit/.test(f)
  ) {
    return "Musk";
  }

  for (const { bucket, keywords } of rules) {
    if (bucket === "Musk") continue;
    if (keywords.some((k) => f.includes(k))) return bucket;
  }

  // Fallback for the rare family that matches nothing above.
  return "Fresh & Citrus";
}

export function matchesCategory(product: Product, category: ScentCategory): boolean {
  if (category === "All") return true;
  return classifyFamily(product.family) === category;
}
