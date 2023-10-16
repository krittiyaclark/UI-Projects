export const cart = [];

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
