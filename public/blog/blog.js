// Global variables
let allBlogs = [];
let filteredBlogs = [];
let currentPage = 1;
const postsPerPage = 6; // Number of posts per page
let selectedCategory = "all";

// DOM Elements - Ensure these match the blog.html IDs and classes
const blogContainer = document.getElementById('blog-container');
const paginationContainer = document.getElementById('pagination');
const categoryButtons = document.querySelectorAll('[data-category]');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const fullPageOverlay = document.getElementById('blog-fullpage-overlay');
const fullPageContentWrapper = fullPageOverlay ? fullPageOverlay.querySelector('.blog-fullpage-container') : null; // Wrapper that scrolls
const fullPageContent = fullPageOverlay ? fullPageOverlay.querySelector('.blog-fullpage-content') : null; // Inner content div
const fullPageCloseBtn = fullPageOverlay ? fullPageOverlay.querySelector('.blog-close-btn') : null;

// Fetch WordPress posts with categories and featured images
async function fetchWordPressPosts() {
  const apiUrl = "https://blog.travellingscholars.com/wp-json/wp/v2/posts?_embed&per_page=100"; // Fetch more to enable full filtering/pagination
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const posts = await response.json();
    return posts.map(post => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 150) + '...', // Clean HTML and truncate
      content: post.content.rendered, // Full content for detail view
      link: post.link, // Original WordPress post link
      date: new Date(post.date),
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/images/blog-placeholder.jpg', // Placeholder for missing image
      categories: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || []
    }));
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return null;
  }
}

// Render blog posts in tile layout
function renderPosts() {
  if (!blogContainer) return;
  
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedBlogs = filteredBlogs.slice(start, end);
  
  // Show loading spinner
  blogContainer.innerHTML = `<div class="text-center col-span-full py-10">
    <div class="animate-spin inline-block w-8 h-8 border-4 rounded-full border-ga-primary-blue border-r-transparent" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <p class="text-ga-neutral-800 mt-4">Loading blog posts...</p>
  </div>`;

  if (paginatedBlogs.length === 0 && !allBlogs.length) {
    blogContainer.innerHTML = '<div class="col-span-full text-center py-10 text-gray-600">No blog posts found. Please try again later.</div>';
    renderPagination();
    return;
  } else if (paginatedBlogs.length === 0 && allBlogs.length) {
    blogContainer.innerHTML = '<div class="col-span-full text-center py-10 text-gray-600">No posts found for this category.</div>';
    renderPagination();
    return;
  }

  // Render actual blog posts
  blogContainer.innerHTML = paginatedBlogs.map(post => `
    <div class="col">
      <div class="relative flex h-fit flex-shrink-0 rounded-lg bg-white shadow-md no-underline overflow-hidden blog-tile">
        <div class="relative h-[220px] overflow-hidden w-full">
          <img src="${post.image}" alt="${post.title}" class="h-full w-full object-cover rounded-t-lg" />
        </div>
        <div class="p-4 space-y-2 text-left">
          <div class="flex flex-wrap gap-1 mb-2">
            ${post.categories.map(cat => `<span class="bg-ga-primary-blue text-white text-xs font-medium px-2 py-1 rounded">${cat}</span>`).join('')}
          </div>
          <h4 class="text-xl font-bold leading-tight text-ga-neutral-800 line-clamp-2">
            ${post.title}
          </h4>
          <p class="text-sm text-gray-600 line-clamp-3">
            ${post.excerpt}
          </p>
          <span class="block text-xs font-light text-gray-500 mt-2">
            ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <button class="bg-ga-secondary-red px-4 py-2 text-sm font-bold text-white rounded-full mt-4 hover:bg-ga-primary-blue transition-colors duration-200" data-id="${post.id}">
            Read More
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach event listeners to "Read More" buttons
  document.querySelectorAll('#blog-container button').forEach(button => {
    button.addEventListener('click', (event) => {
      const postId = event.target.dataset.id;
      showFullPost(postId);
    });
  });

  renderPagination();
}

// Show full post in an overlay
function showFullPost(postId) {
  const post = allBlogs.find(p => p.id == postId);
  if (!post || !fullPageOverlay || !fullPageContent) return;

  // Show loading spinner in overlay content area
  fullPageContent.innerHTML = `<div class="text-center py-10">
    <div class="animate-spin inline-block w-8 h-8 border-4 rounded-full border-ga-primary-blue border-r-transparent" role="status">
      <span class="sr-only">Loading content...</span>
    </div>
    <p class="text-ga-neutral-800 mt-4">Loading blog post...</p>
  </div>`;

  fullPageOverlay.classList.remove('hidden'); // Show the overlay
  document.body.classList.add('no-scroll'); // Prevent scrolling on body

  // Populate content after brief delay or immediately if data is sync
  setTimeout(() => { // Using a setTimeout to ensure spinner renders first
    fullPageContent.innerHTML = `
      <h1 class="text-3xl lg:text-4xl font-bold text-ga-neutral-800 mb-4">${post.title}</h1>
      <div class="flex flex-wrap gap-x-4 gap-y-2 mb-8 items-center text-sm text-gray-600">
        ${post.categories.map(cat => `<span class="bg-ga-primary-blue text-white px-3 py-1 rounded-full text-xs font-semibold">${cat}</span>`).join('')}
        <span>${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <img src="${post.image}" alt="${post.title}" class="w-full h-auto rounded-lg mb-8 shadow-md" />
      <div class="blog-post-content text-lg leading-relaxed text-ga-neutral-800">
        ${post.content}
      </div>
    `;

    // Process WordPress content to remove unwanted classes and ensure styling
    const contentDiv = fullPageContent.querySelector('.blog-post-content');
    if (contentDiv) {
      contentDiv.querySelectorAll('*').forEach(el => {
        // Remove specific WordPress classes that might cause styling issues
        el.classList.remove('has-background', 'has-text-color', 'has-gray-background-color', 'wp-block-group', 'wp-block-column', 'wp-block-cover');
        // Force white background and dark text for all elements inside blog content
        el.style.backgroundColor = 'white';
        el.style.color = 'inherit'; // Keep color as inherited, or force a specific dark color
      });
      // Special handling for code blocks to retain their background if they exist
      contentDiv.querySelectorAll('pre, code').forEach(el => {
        el.style.backgroundColor = '#f5f5f5'; // Light gray for code blocks
        el.style.color = '#333';
        el.style.padding = '1em';
        el.style.borderRadius = '0.5em';
        el.style.overflowX = 'auto'; // Ensure scroll for long code lines
      });
    }

    // Adjust max-height for scrolling content (if needed, otherwise overflow-y:auto should be enough)
    if (fullPageContentWrapper) {
      // Set a max-height relative to viewport to ensure scrolling for long content
      // Calculate max-height to leave room for close button and some padding
      const headerHeight = 64; // Example top padding/header space
      const footerHeight = 0; // Example bottom padding/footer space
      fullPageContentWrapper.style.maxHeight = `calc(100vh - ${headerHeight + footerHeight + 64}px)`; // 64px for overall page margin
      fullPageContentWrapper.style.overflowY = 'auto'; // Ensure scrolling
    }

  }, 50); // Small delay


  // Close functionality
  const closeOverlay = () => {
    fullPageOverlay.classList.add('hidden'); // Hide the overlay
    document.body.classList.remove('no-scroll'); // Restore body scrolling
  };

  if (fullPageCloseBtn) {
    fullPageCloseBtn.onclick = closeOverlay; // Use onclick to avoid multiple listeners
  }

  // Close on ESC key press
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape && !fullPageOverlay.classList.contains('hidden')) {
        closeOverlay();
    }
  };
}

// Filter blogs by category
function filterBlogs(category) {
  selectedCategory = category;
  currentPage = 1;
  
  if (category === "all") {
    filteredBlogs = [...allBlogs];
  } else {
    filteredBlogs = allBlogs.filter(post => 
      post.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
    );
  }
  
  renderPosts();
  // Highlight active category button
  categoryButtons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Render pagination controls
function renderPagination() {
  if (!paginationContainer) return;
  
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  
  // Previous button state
  if (prevPageBtn) {
    prevPageBtn.parentElement.classList.toggle('opacity-50', currentPage === 1);
    prevPageBtn.parentElement.classList.toggle('pointer-events-none', currentPage === 1);
  }
  
  // Next button state
  if (nextPageBtn) {
    nextPageBtn.parentElement.classList.toggle('opacity-50', currentPage >= totalPages);
    nextPageBtn.parentElement.classList.toggle('pointer-events-none', currentPage >= totalPages);
  }
}

// Go to specific page
function goToPage(page) {
  if (page < 1 || page > Math.ceil(filteredBlogs.length / postsPerPage)) return;
  currentPage = page;
  renderPosts();
  // Smooth scroll to the top of the blog container on page change
  if (blogContainer) { // Changed to blogContainer
    window.scrollTo({ top: blogContainer.offsetTop - 100, behavior: 'smooth' });
  }
}

// Initialize the blog page
async function initBlogPage() {
  // Show initial loading spinner in HTML (already in blog.html)
  
  allBlogs = await fetchWordPressPosts();
  
  if (allBlogs && allBlogs.length > 0) {
    allBlogs.sort((a, b) => b.date - a.date); // Sort by date (newest first)
    filteredBlogs = [...allBlogs];
    
    // Set up category filter buttons
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active')); // Remove active from all
        btn.classList.add('active'); // Add active to clicked
        filterBlogs(btn.dataset.category);
      });
    });
    
    // Set up pagination buttons
    if (prevPageBtn) {
      prevPageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToPage(currentPage - 1);
      });
    }
    if (nextPageBtn) {
      nextPageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToPage(currentPage + 1);
      });
    }
    
    renderPosts();

    // Check for a specific post ID in the URL for direct full post view
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    if (postId) {
      showFullPost(postId);
    }

  } else {
    if (blogContainer) { // Changed to blogContainer
      blogContainer.innerHTML = '<div class="col-span-full text-center py-10 text-gray-600">No blog posts found. Please try again later.</div>';
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initBlogPage);