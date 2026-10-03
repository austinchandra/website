export const SIZES = ['S', 'M', 'L', 'XL', '2XL'] as const;
export const QUANTITIES = [1, 2, 3, 4, 5] as const;
export const MAX_QUANTITY = QUANTITIES[QUANTITIES.length - 1];

type Base = "hooded" | "crew";

export const bases: Record<Base, { name: string; price: string }> = {
  hooded: { name: "Hooded", price: "$60" },
  crew: { name: "Crew", price: "$55" },
};

type Product = { slug: string; title: string; base: Base; description: string; adjusted?: boolean };

export function getPrice(base: Base, quantity = 1): number {
  return parseInt(bases[base].price.slice(1)) * quantity;
}

export const products: Product[] = [
  {
    slug: "intellect",
    title: "Intellect",
    base: "hooded",
    description: "I want to sit and ponder,\nhead heavy as a stone,\nuntil it rolls away.",
  },
  {
    slug: "optimism",
    title: "Optimism",
    base: "crew",
    description: "I want to melt into glass,\nfall with the sunlight,\nlight as a cloud.",
  },
  {
    slug: "violence",
    title: "Violence",
    base: "hooded",
    description: "I want to cut like a knife,\nsail across the sea,\nto lands unknown.",
    adjusted: true,
  },
  {
    slug: "seduction",
    title: "Seduction",
    base: "crew",
    description: "I want to dive into water,\nswim a lazy circle,\ndrink deep of life.",
    adjusted: true,
  },
  {
    slug: "ambition",
    title: "Ambition",
    base: "hooded",
    description: "I want to climb up trees,\nto lush, green canopy,\nwhere birds nest.",
  },
];
