// main.js

document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector("button");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const productName = document.querySelector("h2").innerText.trim();
      const priceText = document.querySelector(".details p strong + text") 
                    || document.querySelector(".details p").nextSibling.nodeValue.trim();
      const price = priceText.replace(/[^\d]/g, ''); 

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name: productName, price: price });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${productName} added to cart!`);
    });
  }

  // Populate cart page if present
  const cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartContainer.innerHTML = "";
      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <p>${item.name} - ₹${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button>
          </p>`;
        cartContainer.appendChild(div);
      });
    }
  }
});

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

