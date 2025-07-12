// Initialize cart from localStorage or empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

// Optional: View product (just an alert or redirect if needed)
function viewProduct(name, price) {
    alert(`You selected ${name}. Price: ₹${price}`);
}

// Render cart if on cart page
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");

    if (cartContainer) {
        cartContainer.innerHTML = "";
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        let total = 0;

        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                ${item.name} — ₹${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(div);
            total += parseInt(item.price);
        });

        const totalDiv = document.createElement("div");
        totalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
        cartContainer.appendChild(totalDiv);
    }
});

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // re-render
}

