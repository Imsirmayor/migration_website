


import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link

function LatestBlogsCarousel() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch WordPress posts
  useEffect(() => {
    async function fetchWordPressPosts() {
      const apiUrl = "https://blog.travellingscholars.com/wp-json/wp/v2/posts?_embed&per_page=10";
      
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        const formattedPosts = posts.map(post => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 150) + '...',
          // The direct link to WordPress post for consistency if desired, or simplified to just ID
          wordpressLink: post.link, // Keep original WP link if needed
          date: new Date(post.date),
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/images/blog-placeholder.jpg',
          categories: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || []
        }));
        
        formattedPosts.sort((a, b) => b.date - a.date);
        
        setLatestBlogs(formattedPosts);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching WordPress posts:", e);
        setError("Failed to load blog posts. Please try again later.");
        setLoading(false);
      }
    }

    fetchWordPressPosts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin inline-block w-8 h-8 border-4 rounded-full border-ga-primary-blue border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="text-ga-neutral-800 mt-4">Loading latest blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (latestBlogs.length === 0) {
    return (
      <div className="text-center py-10 text-ga-neutral-800">
        <p>No latest blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Slider {...settings} className="slick-slider relative h-full w-full">
        {latestBlogs.map((blog) => (
          <div key={blog.id} className="p-4">
            {/* IMPORTANT: Changed <a> to <Link> and href to to */}
            {/* Link to the BlogPage, passing postId as a URL parameter */}
            <Link to={`/blog?postId=${blog.id}`} className="block relative h-fit flex-shrink-0 rounded-lg bg-white shadow-md no-underline overflow-hidden">
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  width="390"
                  height="200"
                  className="h-full w-full object-cover rounded-t-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/390x200/E5E7EB/4B5563?text=Blog+Image'; }} // Fallback
                />
              </div>
              <div className="p-4 space-y-2 text-left">
                <div className="flex flex-wrap gap-1">
                  {blog.categories.map((category, idx) => (
                    <span key={idx} className="badge bg-ga-primary-blue text-white text-xs font-medium px-2 py-1 rounded">
                      {category}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold leading-tight text-ga-neutral-800 line-clamp-2">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {blog.excerpt}
                </p>
                <span className="block text-xs font-light text-gray-500 mt-2">
                  {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="w-fit rounded-md bg-ga-secondary-red text-white px-4 py-2 text-sm font-bold no-underline mt-4 inline-block hover:bg-ga-primary-blue transition-colors duration-200">
                  Read More
                </span>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestBlogsCarousel;
