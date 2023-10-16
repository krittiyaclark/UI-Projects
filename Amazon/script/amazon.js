import { cart } from "../data/cart.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
       <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" ${product.rating.stars * 10}>
          <div class="product-rating-count link-primary">
           ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
          product.id
        }">
          Add to Cart
        </button>
      </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    // If two products that has the name.
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      // If we find a matching item. We will save it in matchingItem.
      if (productId === item.productId) {
        matchingItem = item;
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

    // Update the cart quantity.
    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    console.log(cartQuantity);
    console.log(cart);
  });
});
