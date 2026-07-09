import type { Product, Review } from "@/types/product";

export const fbUrl = "https://www.facebook.com/holanayan";

export const products: Product[] = [
  {
    name: "Baccarat Rouge",
    slug: "baccarat-rouge",
    family: "Amber Floral",
    notes: "Warm saffron and sweet amber over soft woods.",
  },
  {
    name: "Black XS",
    slug: "black-xs",
    family: "Woody Spicy",
    notes: "Spicy praline and dark woods, bold for the evening.",
  },
  {
    name: "Chloé",
    slug: "chloe",
    family: "Floral",
    notes: "Powdery roses with a clean, feminine finish.",
  },
  {
    name: "Good Girl",
    slug: "good-girl",
    family: "Oriental Floral",
    notes: "Jasmine and tonka bean — sweet, mysterious, magnetic.",
  },
  {
    name: "Sauvage",
    slug: "sauvage",
    family: "Fresh Spicy",
    notes: "Crisp bergamot and pepper with an ambery base.",
  },
  {
    name: "La Vie Est Belle",
    slug: "la-vie-est-belle",
    family: "Sweet Gourmand",
    notes: "Iris and praline — soft, joyful, and radiant.",
  },
  {
    name: "Coco Mademoiselle",
    slug: "coco-mademoiselle",
    family: "Floral Woody",
    notes: "Bright orange and rose over warm patchouli.",
  },
  {
    name: "Aventus",
    slug: "aventus",
    family: "Fruity Chypre",
    notes: "Pineapple and birch — fresh, sophisticated, timeless.",
  },
  {
    name: "J'adore",
    slug: "jadore",
    family: "Floral",
    notes: "A luminous bouquet of jasmine, rose, and ylang-ylang.",
  },
  {
    name: "Miss Dior",
    slug: "miss-dior",
    family: "Floral",
    notes: "Delicate peony and rose with a tender musk trail.",
  },
];

export const favorites = [
  {
    name: "Baccarat Rouge",
    slug: "baccarat-rouge",
    notes:
      "Warm saffron and sweet amber with a soft woody trail — rich, cozy, and unmistakable. Our number-one most-ordered scent.",
  },
  {
    name: "Black XS",
    slug: "black-xs",
    notes:
      "Bold and daring — spicy praline and dark woods for a confident evening scent.",
  },
  {
    name: "Chloé",
    slug: "chloe",
    notes:
      "Fresh, powdery roses with a clean, feminine finish. Effortlessly elegant.",
  },
];

export const reviews: Review[] = [
  {
    quote:
      "The scent lasts all day and smells just like the real thing. I get compliments every time I wear it.",
    initial: "M",
    name: "Maria L.",
    place: "Quezon City",
  },
  {
    quote:
      "Beautiful bottle and a lovely, soft fragrance. Ordering through Facebook was so easy and quick.",
    initial: "J",
    name: "Jorge P.",
    place: "Cebu City",
  },
  {
    quote:
      "My favourite shop for affordable, long-lasting perfume. Black XS is my everyday signature now.",
    initial: "A",
    name: "Anna R.",
    place: "Manila",
  },
  {
    quote:
      "Chloé smells so fresh and clean. Packaging is neat and it arrived exactly as pictured. Highly recommend!",
    initial: "R",
    name: "Rhea D.",
    place: "Davao City",
  },
  {
    quote:
      "Been a repeat customer for months. Great scents, fair prices, and the seller is so kind and accommodating.",
    initial: "K",
    name: "Kevin S.",
    place: "Pampanga",
  },
];
