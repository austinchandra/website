type Base = "hooded" | "crew";

export const bases: Record<Base, { name: string; price: string }> = {
  hooded: { name: "Hooded", price: "$60" },
  crew: { name: "Crew", price: "$55" },
};

type Product = { slug: string; title: string; base: Base; description: string };

export function getPrice(base: Base, quantity = 1): number {
  return parseInt(bases[base].price.slice(1)) * quantity;
}

export const products: Product[] = [
  {
    slug: "square-1",
    title: "Square 1",
    base: "hooded",
    description: "I want to sit and ponder,\nhead heavy as a stone,\nuntil it rolls away.",
  },
  {
    slug: "circle-1",
    title: "Circle 1",
    base: "crew",
    description: "I want to melt into glass,\nfall with the sunlight,\nlight as a cloud.",
  },
  {
    slug: "triangle-1",
    title: "Triangle 1",
    base: "hooded",
    description: "I want to cut like a knife,\nsail across the sea,\nto lands unknown.",
  },
  {
    slug: "square-2",
    title: "Square 2",
    base: "crew",
    description: "I want to dive into water,\nswim a lazy circle,\ndrink deep of life.",
  },
  {
    slug: "circle-2",
    title: "Circle 2",
    base: "hooded",
    description: "I want to climb up trees,\nto lush, green canopy,\nwhere birds nest.",
  },
];
