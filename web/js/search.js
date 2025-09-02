// Demo search database: combine your products and blogs
const searchData = [
  // Products (example)
  {
    type: 'Product',
    title: 'Premium Brake Pads',
    desc: 'High performance brake pads for maximum safety.',
    url: 'product.html?id=1'
  },
  {
    type: 'Product',
    title: 'Platinum Spark Plugs (Set of 4)',
    desc: 'Reliable spark plugs for optimal engine performance.',
    url: 'product.html?id=2'
  },
  {
    type: 'Product',
    title: 'Pro Gaming Mouse',
    desc: 'Precision gaming mouse for e-sports.',
    url: 'product.html?id=3'
  },
  {
    type: 'Product',
    title: '1TB SSD Drive',
    desc: 'Fast, high-capacity solid state drive for your PC.',
    url: 'product.html?id=4'
  },
  // Blog posts (same as in blog.js)
  {
    type: 'Blog',
    title: 'Top 5 Maintenance Tips for Your Car',
    desc: 'Essential maintenance tips for every vehicle owner.',
    url: 'blog-post.html?slug=maintenance-tips'
  },
  {
    type: 'Blog',
    title: 'SSD or HDD? Choosing the Right Storage for Your PC',
    desc: 'We compare SSDs and HDDs for speed, reliability, and price.',
    url: 'blog-post.html?slug=ssd-vs-hdd'
  },
  {
    type: 'Blog',
    title: 'How to Upgrade Your Brake System Safely',
    desc: 'Step-by-step guide to upgrading your brake system.',
    url: 'blog-post.html?slug=upgrade-brakes'
  }
];

const searchInput = document.getElementById('siteSearchInput');
const resultsBox = document.getElementById('siteSearchResults');
const searchForm = document.getElementById('siteSearchForm');

function filterSearchResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchData.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q)
  );
}

function renderSearchResults(results) {
  if (!results.length) {
    resultsBox.innerHTML = `<div class="site-search-result-item">No results found.</div>`;
    resultsBox.style.display = 'block';
    return;
  }
  resultsBox.innerHTML = results.map(item =>
    `<a href="${item.url}" class="site-search-result-item" onclick="closeSiteSearch()">
      <span class="site-search-result-type">${item.type}</span>
      <span>${item.title}</span>
      <div style="font-size:0.93em; color:#b8c7e0;">${item.desc}</div>
    </a>`
  ).join('');
  resultsBox.style.display = 'block';
}

function closeSiteSearch() {
  resultsBox.style.display = 'none';
}

searchInput.addEventListener('input', function() {
  const query = searchInput.value;
  if (!query.trim()) {
    resultsBox.style.display = 'none';
    return;
  }
  const results = filterSearchResults(query);
  renderSearchResults(results);
});

searchInput.addEventListener('focus', function() {
  if (searchInput.value.trim()) {
    const results = filterSearchResults(searchInput.value);
    renderSearchResults(results);
  }
});

document.addEventListener('click', function(e) {
  if (!searchForm.contains(e.target)) {
    closeSiteSearch();
  }
});

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const results = filterSearchResults(searchInput.value);
  if (results.length > 0) {
    window.location = results[0].url;
  }
});