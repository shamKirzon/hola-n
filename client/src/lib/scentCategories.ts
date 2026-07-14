import type { Product } from "@/types/product";

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

const rules: Array<{ bucket: ScentBucket; keywords: string[] }> = [
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

  return "Fresh & Citrus";
}

export function matchesCategory(product: Product, category: ScentCategory): boolean {
  if (category === "All") return true;
  return classifyFamily(product.family) === category;
}
