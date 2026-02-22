import { persistentAtom } from '@nanostores/persistent';

export type CartItem = { slug: string; quantity: number; size: string };

export const cartStore = persistentAtom<CartItem[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addToCart(item: CartItem) {
  const current = cartStore.get();
  const existing = current.find((i) => i.slug === item.slug && i.size === item.size);
  if (existing) {
    cartStore.set(current.map((i) =>
      i.slug === item.slug && i.size === item.size
        ? { ...i, quantity: i.quantity + item.quantity }
        : i
    ));
  } else {
    cartStore.set([...current, item]);
  }
}

export function removeFromCart(slug: string, size: string) {
  cartStore.set(cartStore.get().filter((i) => !(i.slug === slug && i.size === size)));
}

export function setQuantity(slug: string, size: string, quantity: number) {
  if (quantity === 0) {
    removeFromCart(slug, size);
  } else {
    cartStore.set(cartStore.get().map((i) =>
      i.slug === slug && i.size === size ? { ...i, quantity } : i
    ));
  }
}

export function setSize(slug: string, oldSize: string, newSize: string) {
  const current = cartStore.get();
  const item = current.find((i) => i.slug === slug && i.size === oldSize);
  if (!item) return;
  const conflict = current.find((i) => i.slug === slug && i.size === newSize);
  if (conflict) {
    cartStore.set(
      current
        .filter((i) => !(i.slug === slug && i.size === oldSize))
        .map((i) => i.slug === slug && i.size === newSize
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
        )
    );
  } else {
    cartStore.set(current.map((i) =>
      i.slug === slug && i.size === oldSize ? { ...i, size: newSize } : i
    ));
  }
}
