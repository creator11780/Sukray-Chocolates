
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "";
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ₹${item.price} × ${item.quantity}`;
    container.appendChild(li);
    total += item.price * item.quantity;
  });

  totalElement.textContent = `Total: ₹${total}`;
}
