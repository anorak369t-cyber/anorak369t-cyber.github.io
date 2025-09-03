// Placeholder for site-wide JS logic
console.log('Welcome to Motor & Tech Parts Hub!');

// ...keep any previous JS, and add the following...

function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[onclick*="${category}"]`).classList.add('active');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  function addToCart(productName) {
    alert(`Added "${productName}" to your cart! (Functionality coming soon)`);

  }
// Add to Cart functionality

// Retrieve cart from localStorage or initialize as empty array
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Save cart back to localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart by name
function addToCart(productName) {
  const cart = getCart();
  const existing = cart.find(item => item.name === productName);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: productName, qty: 1 });
  }
  saveCart(cart);
  showCartAddedMessage(productName);
}

// Show a brief on-screen message when an item is added
function showCartAddedMessage(productName) {
  let msg = document.createElement('div');
  msg.className = 'cart-added-message';
  msg.innerText = `"${productName}" added to cart!`;
  document.body.appendChild(msg);
  setTimeout(() => {
    msg.remove();
  }, 1500);
}

// Filter products by category (optional, for your buttons)
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
  // Update the active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter-btn[onclick*="${category}"]`).classList.add('active');
}

// Initialize filter on page load
document.addEventListener('DOMContentLoaded', () => {
  filterProducts('all');
});
