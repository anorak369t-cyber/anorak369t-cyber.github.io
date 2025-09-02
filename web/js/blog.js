// Example static blog data (replace with dynamic fetch for production)
const blogPosts = [
  {
    id: '1',
    title: "Top 5 Maintenance Tips for Your Car",
    date: "2025-08-10",
    author: "Alex Mechanic",
    summary: "Keep your car in peak condition with these essential maintenance tips that every vehicle owner should know.",
    image: "assets/blog1.png",
    slug: "maintenance-tips"
  },
  {
    id: '2',
    title: "SSD or HDD? Choosing the Right Storage for Your PC",
    date: "2025-08-02",
    author: "Jamie Tech",
    summary: "Confused about storage? We compare SSDs and HDDs for speed, reliability, and price so you can make the best choice.",
    image: "assets/blog2.png",
    slug: "ssd-vs-hdd"
  },
  {
    id: '3',
    title: "How to Upgrade Your Brake System Safely",
    date: "2025-07-20",
    author: "Sam Garage",
    summary: "A step-by-step guide to upgrading your brake system for better performance and safety on the road.",
    image: "assets/blog3.png",
    slug: "upgrade-brakes"
  }
];

function renderBlogList() {
  const blogListDiv = document.getElementById('blogList');
  blogListDiv.innerHTML = '';

  if (blogPosts.length === 0) {
    blogListDiv.innerHTML = '<p>No posts yet. Check back soon!</p>';
    return;
  }

  blogPosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'blog-post-preview';

    postDiv.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="blog-post-thumb">
      <div class="blog-post-content">
        <a href="blog-post.html?slug=${post.slug}" class="blog-post-title">${post.title}</a>
        <div class="blog-post-meta">
          ${new Date(post.date).toLocaleDateString()} &middot; by ${post.author}
        </div>
        <div class="blog-post-summary">${post.summary}</div>
        <a href="blog-post.html?slug=${post.slug}" class="blog-post-read">Read more &rarr;</a>
      </div>
    `;
    blogListDiv.appendChild(postDiv);
  });
}

document.addEventListener('DOMContentLoaded', renderBlogList);