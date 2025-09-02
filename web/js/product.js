// Simple product data array (would be replaced by real backend or API in production)
const products = [
  {
    id: '1',
    title: 'Premium Brake Pads',
    price: 45.99,
    img: 'assets/sample-motor1.png',
    desc: 'High-durability brake pads for all car models. Ensure better stopping power and longevity for your vehicle.',
    features: [
      'Fits most car makes',
      'Heat resistant material',
      'Easy to install',
      '12-month warranty'
    ]
  },
  {
    id: '2',
    title: 'Platinum Spark Plugs (Set of 4)',
    price: 19.99,
    img: 'assets/sample-motor2.png',
    desc: 'Boost your engine performance and efficiency.',
    features: [
      'Improved ignition',
      'Long life span',
      'Suitable for most engines'
    ]
  },
  {
    id: '3',
    title: 'Pro Gaming Mouse',
    price: 29.99,
    img: 'assets/sample-electronics1.png',
    desc: 'Ergonomic, RGB, and ultra-responsive for gamers.',
    features: [
      'High DPI sensor',
      'Customizable RGB lighting',
      '6 programmable buttons'
    ]
  },
  {
    id: '4',
    title: '1TB SSD Drive',
    price: 89.99,
    img: 'assets/sample-electronics2.png',
    desc: 'Reliable, fast, and perfect for all desktops & laptops.',
    features: [
      'Up to 500MB/s read speed',
      'Slim form factor',
      '5-year warranty'
    ]
  }
];

// Helper to get URL params
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function renderProduct(product) {
  document.getElementById('productImage').src = product.img;
  document.getElementById('productImage').alt = product.title;
  document.getElementById('productTitle').textContent = product.title;
  document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('productDesc').textContent = product.desc;

  const featuresList = document.getElementById('productFeatures');
  featuresList.innerHTML = '';
  product.features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featuresList.appendChild(li);
  });

  // Add-to-cart button
  document.getElementById('addCartBtn').onclick = () => {
    alert(`Added "${product.title}" to your cart! (Cart coming soon)`);
  };
}

function renderNotFound() {
  document.querySelector('.product-detail').innerHTML = `
    <div style="text-align:center; width:100%;">
      <h2 style="color:#ff5252">Product Not Found</h2>
      <p>The product you are looking for does not exist.</p>
      <a href="products.html" class="cta-btn">Browse Products</a>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const id = getQueryParam('id');
  const product = products.find(p => p.id === id);
  if (product) {
    renderProduct(product);
  } else {
    renderNotFound();
  }
});