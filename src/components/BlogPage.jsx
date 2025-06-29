// File: src/components/BlogPage.jsx




import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'; // Import useSearchParams

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// BlogCard Component: Displays a single blog post summary
const BlogCard = ({ post, onPostClick }) => {
  // Extract category name safely
  const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
  // Extract author name safely
  const authorName = post._embedded?.author?.[0]?.name || 'Unknown Author';
  // Extract featured image URL safely
  const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/400x300/E5E7EB/4B5563?text=No+Image';

  return (
    <div className="blog-tile bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col cursor-pointer"
         onClick={() => onPostClick(post)}>
      <div className="relative h-48 w-full">
        <img src={featuredImageUrl} alt={post.title.rendered} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E5E7EB/4B5563?text=No+Image'; }} />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        {/* Category Tag */}
        <span className="category-tag text-ga-primary-blue font-semibold text-sm mb-2">{categoryName}</span>
        
        {/* Post Title */}
        <h3 className="post-title text-xl font-bold text-ga-neutral-800 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
        
        {/* Post Excerpt */}
        <div className="post-excerpt text-gray-700 text-sm line-clamp-3 mb-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
        
        {/* Author and Date */}
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <span>By {authorName}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(post.date)}</span>
        </div>
        
        {/* Read More Button */}
        <button className="read-more inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-ga-secondary-red transition-colors duration-200 self-start">
          Read More
        </button>
      </div>
    </div>
  );
};

// BlogPostOverlay Component: Displays the full blog post in an overlay
const BlogPostOverlay = ({ post, onClose }) => {
  useEffect(() => {
    // Add no-scroll class to body when overlay is open
    document.body.classList.add('no-scroll');
    return () => {
      // Remove no-scroll class when overlay closes
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="blog-fullpage-overlay fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center overflow-y-auto">
      <div className="blog-fullpage-container bg-white w-full max-w-[900px] mx-auto my-8 p-8 rounded-lg shadow-xl relative">
        <button
          className="blog-close-btn absolute top-4 right-4 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black transition-colors duration-200"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="blog-fullpage-content text-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold text-ga-neutral-800 mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
          <div className="text-gray-600 text-sm mb-6">
            <span>By {post._embedded?.author?.[0]?.name || 'Unknown Author'}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <span>Category: {post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized'}</span>
          </div>
          {/* Display featured image in full post if available */}
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} className="w-full h-auto object-cover rounded-lg mb-6 shadow-md" />
          )}
          <div className="prose prose-lg max-w-none blog-post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </div>
      </div>
    </div>
  );
};

// Main BlogPage Component
function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams(); // Hook to get/set URL parameters

  // Effect to fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://blog.travellingscholars.com/wp-json/wp/v2/posts?_embed&per_page=10&page=${currentPage}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const totalPagesHeader = response.headers.get('X-WP-TotalPages');
        
        setPosts(data);
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }
      } catch (e) {
        console.error("Failed to fetch posts:", e);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage]);

  // Effect to open specific post overlay from URL parameter
  useEffect(() => {
    const postIdFromUrl = searchParams.get('postId');
    if (postIdFromUrl && posts.length > 0) { // Only try to open if posts are loaded
      const postToOpen = posts.find(post => post.id.toString() === postIdFromUrl);
      if (postToOpen) {
        openPostOverlay(postToOpen);
        // Remove postId from URL after opening to prevent re-opening on refresh
        // setSearchParams({}); // This would clear all params.
        // Better: manually remove just this one if other params might exist
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete('postId');
        setSearchParams(newSearchParams);

      }
    }
  }, [posts, searchParams, setSearchParams]); // Re-run when posts or searchParams change

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };

  const openPostOverlay = (post) => {
    setSelectedPost(post);
    setIsOverlayOpen(true);
  };

  const closePostOverlay = () => {
    setSelectedPost(null);
    setIsOverlayOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Blog Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
           style={{ backgroundImage: `url('/assets/images/blog_home.jpg')` }}> {/* Corrected image path */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Our Blog
        </h1>
      </div>

      <div className="container mx-auto my-12 px-4 xl:px-0">
        <h2 className="section-title text-ga-neutral-800">Our Latest Blog Posts</h2>
        
        {/* Category Filters (Static buttons as per blog.html, no active filtering logic implemented here) */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button type="button" className="btn btn-outline-primary px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 active">All</button>
            <button type="button" className="btn btn-outline-primary px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200">Visa</button>
            <button type="button" className="btn btn-outline-primary px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200">Scholarships</button>
            <button type="button" className="btn btn-outline-primary px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200">Finance</button>
            <button type="button" className="btn btn-outline-primary px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200">Student Jobs</button>
            <button type="button" className="btn btn-outline-primary px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200">Admissions</button>
        </div>

        {loading && <p className="text-center text-lg text-ga-neutral-800">Loading blog posts...</p>}
        {error && <p className="text-center text-lg text-red-500">{error}</p>}
        
        {!loading && !error && posts.length === 0 && (
            <p className="text-center text-lg text-gray-500">No blog posts found.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="blog-container">
            {!loading && !error && posts.map(post => (
                <BlogCard key={post.id} post={post} onPostClick={openPostOverlay} />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8">
            <nav>
                <ul className="flex items-center space-x-2">
                    <li className="page-item">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1 || loading}
                            className="page-link px-4 py-2 rounded-full border border-gray-300 text-ga-primary-blue hover:bg-ga-primary-blue hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                    </li>
                    <li className="page-item">
                        <span className="px-4 py-2 text-ga-neutral-800">Page {currentPage} of {totalPages}</span>
                    </li>
                    <li className="page-item">
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages || loading}
                            className="page-link px-4 py-2 rounded-full border border-gray-300 text-ga-primary-blue hover:bg-ga-primary-blue hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
      </div>

      {/* Full Post Overlay */}
      {isOverlayOpen && selectedPost && (
          <BlogPostOverlay post={selectedPost} onClose={closePostOverlay} />
      )}
    </div>
  );
}

export default BlogPage;
