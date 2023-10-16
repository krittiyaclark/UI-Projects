export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    // If we find a matching item. We will save it in matchingItem.
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If we find a matching item. We will increase the quantity by 1.
  if (matchingItem) {
    matchingItem.quantity += 1;
    // If we can't find a matching item. We will push it in the cart.
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
