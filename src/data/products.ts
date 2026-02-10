type Base = "hoodie" | "crewneck";

export const bases: Record<Base, { name: string; price: string }> = {
  hoodie: { name: "Hooded", price: "$60" },
  crewneck: { name: "Crew", price: "$55" },
};

type Product = { slug: string; title: string; base: Base; description: string };

export const products: Product[] = [
  { slug: "filler-1", title: "Filler", base: "hoodie", description: "filler line 1,\nfiller line 2,\nfiller line 3" },
  { slug: "filler-2", title: "Filler", base: "crewneck", description: "filler line 1,\nfiller line 2,\nfiller line 3" },
  { slug: "filler-3", title: "Filler", base: "hoodie", description: "filler line 1,\nfiller line 2,\nfiller line 3" },
  { slug: "filler-4", title: "Filler", base: "crewneck", description: "filler line 1,\nfiller line 2,\nfiller line 3" },
  { slug: "filler-5", title: "Filler", base: "hoodie", description: "filler line 1,\nfiller line 2,\nfiller line 3" },
];
