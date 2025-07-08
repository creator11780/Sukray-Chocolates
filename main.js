document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector(".add-to-cart");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const name = document.querySelector("h2").innerText.trim();
      const price = document.querySelector(".price").innerText.replace(/[^\d]/g, '');
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name, price });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
  }

  if (document.getElementById("cart")) {
    renderCart();
  }
});

function renderCart() {
  const cartDiv = document.getElementById("cart");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartDiv.innerHTML = '';

  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = 'cart-item';
    div.innerHTML = `
      ${item.name} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartDiv.appendChild(div);
    total += Number(item.price);
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
  cartDiv.appendChild(totalDiv);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

