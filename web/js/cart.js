// Simulate cart state with localStorage (or in-memory for demo)
const PRODUCT_LIST = [
  {
    id: '1',
    title: 'Premium Brake Pads',
    price: 45.99,
    img: 'assets/sample-motor1.png'
  },
  {
    id: '2',
    title: 'Platinum Spark Plugs (Set of 4)',
    price: 19.99,
    img: 'assets/sample-motor2.png'
  },
  {
    id: '3',
    title: 'Pro Gaming Mouse',
    price: 29.99,
    img: 'assets/sample-electronics1.png'
  },
  {
    id: '4',
    title: '1TB SSD Drive',
    price: 89.99,
    img: 'assets/sample-electronics2.png'
  }
];

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return cart;
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function findProductById(id) {
  return PRODUCT_LIST.find(p => p.id === id);
}

function renderCart() {
  const cart = loadCart();
  const container = document.getElementById('cartContainer');
  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = `<p>Your cart is empty.</p>`;
    document.querySelector('.cart-actions').style.display = 'none';
    return;
  } else {
    document.querySelector('.cart-actions').style.display = 'flex';
  }

  cart.forEach(item => {
    const product = findProductById(item.id);
    if (!product) return;
    total += product.price * item.qty;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <div class="cart-details">
        <div class="cart-title">${product.title}</div>
        <div class="cart-price">$${product.price.toFixed(2)}</div>
        <div class="cart-quantity">
          <button onclick="updateQty('${item.id}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</button>
    `;
    container.appendChild(itemDiv);
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'cart-total';
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
  container.appendChild(totalDiv);
}

function updateQty(id, change) {
  let cart = loadCart();
  const idx = cart.findIndex(item => item.id === id);
  if (idx !== -1) {
    cart[idx].qty += change;
    if (cart[idx].qty < 1) cart[idx].qty = 1;
    saveCart(cart);
    renderCart();
  }
}

function removeFromCart(id) {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

function checkoutCart() {
  const cart = loadCart();
  if (cart.length === 0) return;
  // For demo, just clear cart and show a message
  saveCart([]);
  renderCart();
  document.getElementById('cartMessage').textContent = 'Thank you for your order! (Checkout logic to be implemented)';
}

document.addEventListener('DOMContentLoaded', renderCart);