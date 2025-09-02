// Blog post database (should match slugs used in blog.js)
const blogPosts = [
  {
    slug: "maintenance-tips",
    title: "Top 5 Maintenance Tips for Your Car",
    date: "2025-08-10",
    author: "Alex Mechanic",
    image: "assets/blog1.png",
    body: `
      <p>Proper maintenance is key to keeping your car running smoothly and avoiding costly repairs. Here are our top five tips:</p>
      <ol>
        <li><strong>Regular Oil Changes</strong> – Change your oil and oil filter as recommended by your vehicle’s manufacturer.</li>
        <li><strong>Check Tire Pressure</strong> – Maintain the correct tire pressure for safety and fuel efficiency.</li>
        <li><strong>Inspect Brakes</strong> – Listen for squeaks or grinding, and have your brakes inspected regularly.</li>
        <li><strong>Replace Air Filters</strong> – Clean filters improve performance and fuel economy.</li>
        <li><strong>Monitor Fluid Levels</strong> – Check coolant, brake, and transmission fluids routinely.</li>
      </ol>
      <p>Follow these tips and your car will thank you with years of reliable service!</p>
    `
  },
  {
    slug: "ssd-vs-hdd",
    title: "SSD or HDD? Choosing the Right Storage for Your PC",
    date: "2025-08-02",
    author: "Jamie Tech",
    image: "assets/blog2.png",
    body: `
      <p>When upgrading your computer, choosing between an SSD and an HDD is crucial. Here’s a quick comparison:</p>
      <ul>
        <li><strong>Speed</strong>: SSDs are much faster, cutting boot and load times significantly.</li>
        <li><strong>Reliability</strong>: SSDs have no moving parts, making them less prone to failure.</li>
        <li><strong>Cost</strong>: HDDs are cheaper per GB but slower and heavier.</li>
      </ul>
      <p>If you want speed and reliability, choose an SSD. For lots of affordable storage, go with an HDD—or combine both!</p>
    `
  },
  {
    slug: "upgrade-brakes",
    title: "How to Upgrade Your Brake System Safely",
    date: "2025-07-20",
    author: "Sam Garage",
    image: "assets/blog3.png",
    body: `
      <p>Upgrading your brakes can greatly improve your vehicle’s safety and performance. Here’s how you can do it:</p>
      <ol>
        <li>Choose high-quality brake pads and rotors suitable for your driving needs.</li>
        <li>Carefully follow the installation instructions or have a professional do the job.</li>
        <li>Test your brakes in a safe environment before hitting the road.</li>
      </ol>
      <p>Need advice on which brake system is best? Contact our support team!</p>
    `
  }
];

// Helper to get query param
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function renderBlogPost() {
  const slug = getQueryParam('slug');
  const post = blogPosts.find(p => p.slug === slug);

  const container = document.getElementById('blogPostContent');
  if (!post) {
    container.innerHTML = `<h1>Post Not Found</h1><p>Sorry, we couldn’t find that blog post.</p>
      <a href="blog.html" class="back-to-blog">&larr; Back to Blog</a>`;
    return;
  }

  container.innerHTML = `
    <h1 class="blog-post-title">${post.title}</h1>
    <div class="blog-post-meta">${new Date(post.date).toLocaleDateString()} &middot; by ${post.author}</div>
    <img src="${post.image}" class="blog-post-image" alt="${post.title}">
    <div class="blog-post-body">${post.body}</div>
    <a href="blog.html" class="back-to-blog">&larr; Back to Blog</a>
  `;
}

document.addEventListener('DOMContentLoaded', renderBlogPost);