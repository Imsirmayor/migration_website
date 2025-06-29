// // src/components/Hero.js
// import React from 'react';

// function Hero() {
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const query = e.target.elements.searchInput.value.trim();
//     if (query) {
//       // Navigate to blog page with search query
//       window.location.href = `blog.html?search=${encodeURIComponent(query)}`;
//     }
//   };

//   return (
//     <section className="relative h-[500px] w-full"> {/* h-[500px] from GoAbroad */}
//       <div className="absolute h-full w-full">
//         <div className="absolute h-full w-full bg-gradient-to-t from-slate-900 to-slate-50/5"></div> {/* Gradient overlay from GoAbroad */}
//         <img
//           className="h-full w-full object-cover"
//           src="/assets/images/homepage_banner_image.jpg" // Changed from "assets/images"
//           alt="Start Your Journey to Study & Migrate Abroad"
//         />
//       </div>
//       <div className="relative mx-auto flex h-full max-w-[1200px] flex-col items-start justify-end p-4 lg:justify-center xl:p-0"> {/* From GoAbroad */}
//         <div className="text-left leading-tight">
//           {/* Logo, if part of hero as seen in GoAbroad for desktop */}
//           {/* <img src="assets/images/logo.png" alt="Migration & Study Abroad logo" width="167" height="123" className="mb-[30px] hidden object-fill md:block lg:mb-[40px]" /> */}
          
//           <div className="pb-[30px] lg:pb-[56.5px]">
//             <h1 className="text-2xl font-semibold text-white sm:leading-normal lg:text-4xl">
//               Start Your Journey to Study & Migrate Abroad {/* Your original H1 */}
//             </h1>
//             <h2 className="block text-lg font-light text-white sm:tracking-wide lg:text-2xl">
//               We provide resources, insights, and step-by-step guides to support your transition abroad. {/* Your original P */}
//             </h2>
//           </div>
//           <div className="flex flex-col rounded-xl bg-white bg-opacity-40 p-4 lg:flex-row lg:space-x-4"> {/* Search bar container from GoAbroad */}
//             <div className="mb-4 h-11 w-full lg:m-0 lg:w-[412px]"> {/* Placeholder for directory dropdown */}
//               {/* You would integrate a React select component here */}
//               <input type="text" id="directory-dd-input" className="w-full h-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder:text-gray-500" placeholder="What do you want to do?" />
//             </div>
//             <div className="mb-4 h-11 w-full lg:m-0 lg:w-[412px]"> {/* Placeholder for country dropdown */}
//               {/* You would integrate another React select component here */}
//               <input type="text" id="country-dd-input" className="w-full h-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder:text-gray-500" placeholder="Where do you want to go? (optional)" />
//             </div>
//             <div className="w-full lg:w-[312px]">
//               <form onSubmit={handleSearch} className="h-full">
//                 <input type="text" id="searchInput" className="sr-only" aria-label="Search by topic" /> {/* Hidden input for actual search query if not using dropdowns */}
//                 <button type="submit" className="cta btn-block !rounded-[6px] !min-h-[45px] !p-0 w-full h-full">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;




import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

function Hero() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.globalSearchInput.value.trim(); // Get value from new unified search input
    if (query) {
      // Navigate to a search results page (e.g., blog search, or a dedicated global search)
      // For now, let's point it to the blog page with a search query, similar to your old setup.
      // In a more advanced setup, you'd have a /search route and pass the query there.
      navigate(`/blog?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative h-[500px] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Video Background (Visible on screens larger than md) */}
      {/* Ensure you have a 'video_hero_banner.mp4' in public/assets/videos/ */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        loop
        playsInline
        autoPlay
        muted // Mute is required for autoplay in most browsers
        preload="auto"
        poster="/assets/images/homepage_banner_image.jpg" // Fallback image for video
      >
        <source src="/assets/videos/austria_europe_landscape.mp4" type="video/mp4" />
        {/* You can add other video formats for broader browser support */}
        {/* <source src="/assets/videos/austria_europe_landscape.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Image Background (Fallback for mobile and if video fails) */}
      <img
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        src="/assets/images/homepage_banner_image.jpg" // Your existing static banner image
        alt="Start Your Journey to Study & Migrate Abroad"
      />

      {/* Overlay for readability and gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-50/5"></div>
      
      {/* Content Container (Text and Search Bar) */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col items-start justify-end p-4 lg:justify-center xl:p-0">
        <div className="text-left leading-tight">
          <div className="pb-[30px] lg:pb-[56.5px]">
            <h1 className="text-2xl font-semibold text-white sm:leading-normal lg:text-4xl">
              Start Your Journey to Study & Migrate Abroad
            </h1>
            <h2 className="block text-lg font-light text-white sm:tracking-wide lg:text-2xl">
              We provide resources, insights, and step-by-step guides to support your transition abroad.
            </h2>
          </div>
          
          {/* Unified Search Bar */}
          <form onSubmit={handleSearch} className="flex flex-col rounded-xl bg-white bg-opacity-40 p-4 w-full max-w-xl mx-auto lg:flex-row lg:space-x-4 lg:p-2">
            <div className="h-12 w-full flex-grow mb-4 lg:mb-0">
              <input 
                type="text" 
                id="globalSearchInput" 
                className="w-full h-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Search resources, blogs, programs..." 
                aria-label="Search website content"
              />
            </div>
            <div className="w-full lg:w-auto"> {/* Adjusted width for the button */}
              <button 
                type="submit" 
                className="cta btn-block !rounded-[6px] !min-h-[48px] !p-0 w-full h-full bg-ga-primary-blue text-white font-bold hover:bg-ga-secondary-red transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
