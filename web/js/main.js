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