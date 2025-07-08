let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartDiv.appendChild(div);
    total += item.price;
  });
  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
  cartDiv.appendChild(totalDiv);
}

function removeFromCart(index) {
  cart.splice(index,1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

