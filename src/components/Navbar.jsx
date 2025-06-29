
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


// function Navbar() {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false); // State for Resources dropdown

//   // Effect to handle sticky navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Toggle mobile menu visibility
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(prev => !prev);
//     // Close desktop resources dropdown if mobile menu opens
//     if (!isMobileMenuOpen) setIsResourcesDropdownOpen(false);
//   };

//   // Close all menus (used when a link is clicked)
//   const closeAllMenus = () => {
//     setIsMobileMenuOpen(false);
//     setIsResourcesDropdownOpen(false);
//   };

//   // Toggle desktop resources dropdown visibility
//   const toggleResourcesDropdown = () => {
//     setIsResourcesDropdownOpen(prev => !prev);
//   };

//   // Close desktop resources dropdown when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       const resourcesDropdownBtn = document.getElementById('resourcesDropdownBtn');
//       const resourcesDropdown = document.getElementById('resourcesDropdown');
//       if (resourcesDropdownBtn && resourcesDropdown &&
//           !resourcesDropdownBtn.contains(event.target) &&
//           !resourcesDropdown.contains(event.target)) {
//         setIsResourcesDropdownOpen(false);
//       }
//     };

//     if (isResourcesDropdownOpen) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     } else {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, [isResourcesDropdownOpen]);


//   return (
//     <div className={`relative w-full z-50 transition-all duration-300 ${isSticky ? 'f1fn83er sticky' : 'f1fn83er'}`}>
//       <div className="toast_notif"></div> {/* Placeholder from GoAbroad */}
      
//       {/* Desktop Navigation (visible on large screens) */}
//       <div className="desktop-topnav hidden md:flex w-full max-w-[75rem] mx-auto p-4 md:p-0">
//         <Link className="ga-logo mr-auto" to="/" title="Migration & Study Abroad">
//           <img src="/assets/images/logo.png" alt="Migration & Study Abroad" className="h-[46.5px] w-[60px] object-fill" />
//         </Link>
//         <nav className="flex items-center justify-end w-full space-x-2">
//           {/* Dynamically assign text color based on sticky state */}
//           <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200`} to="/">Home</Link>
//           <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200`} to="/blog">Blog</Link>
//           <div className="relative flex items-center">
//             <button
//               id="resourcesDropdownBtn"
//               onClick={(e) => {
//                 // If the click is on the text or left side, navigate; if on the arrow, just toggle dropdown
//                 if (
//                   e.target.closest('svg') ||
//                   e.target.getAttribute('aria-label') === 'Toggle Resources Dropdown'
//                 ) {
//                   e.preventDefault();
//                   toggleResourcesDropdown();
//                 } else {
//                   closeAllMenus();
//                   window.location.href = '/resources';
//                 }
//               }}
//               aria-expanded={isResourcesDropdownOpen}
//               className={`flex items-center font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200 focus:outline-none ${
//                 isSticky ? 'text-ga-neutral-800' : 'text-white'
//               }`}
//               style={{ zIndex: 51 }}
//               type="button"
//             >
//               <span className="pr-1">Resources</span>
//               <svg
//                 className={`ml-0 w-4 h-4 transition-transform duration-200 ${
//                   isResourcesDropdownOpen ? 'rotate-180' : ''
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 aria-label="Toggle Resources Dropdown"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isResourcesDropdownOpen && (
//               <div
//                 id="resourcesDropdown"
//                 className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
//               >
//                 {/* Dropdown links default to ga-neutral-800 for consistency */}
//                 <Link to="/resources" className="block px-4 py-2 text-ga-neutral-800 font-semibold hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Main Resources Page
//                 </Link>
//                 <Link to="/financial-resources" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Financial Resources
//                 </Link>
//                 <Link to="/academic-resources" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Academic Resources
//                 </Link>
//                 <Link to="/legal-docs" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Legal & Documentation
//                 </Link>
//                 <Link to="/accommodation" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Accommodation & Logistics
//                 </Link>
//                 <Link to="/health" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Health & Wellbeing
//                 </Link>
//                 <Link to="/culture" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Social & Cultural Integration
//                 </Link>
//                 <Link to="/technology" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Tech & Communication
//                 </Link>
//                 <Link to="/career" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
//                   Career & Networking
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200`} to="/about">About Us</Link>
//           <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline hover:text-ga-primary-blue transition-colors duration-200`} to="/contact">Contact</Link>
          
//         </nav>
//       </div>

//       {/* Mobile Navigation (visible on small screens) */}
//       <div className="flex md:hidden f1fn83er-mobile items-center justify-between w-full p-4">
//         <button className="hamburger-menu p-0 border-none bg-transparent" onClick={toggleMobileMenu}>
//           <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6 text-ga-neutral-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//             <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
//           </svg>
//         </button>
//         <Link className="ga-logo mx-auto" to="/" title="Migration & Study Abroad">
//           <img src="/assets/images/logo.png" alt="Migration & Study Abroad" className="h-[46.5px] w-[60px] object-fill" />
//         </Link>
//         <div className="w-6"></div> {/* Spacer for alignment */}
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden">
//           <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleMobileMenu}>
//             &times;
//           </button>
//           <nav className="flex flex-col space-y-6 text-xl">
//             {/* Mobile links always white against dark overlay */}
//             <Link to="/" className="text-white no-underline" onClick={closeAllMenus}>Home</Link>
//             <Link to="/blog" className="text-white no-underline" onClick={closeAllMenus}>Blog</Link>
            
//             {/* Mobile Resources Dropdown */}
//             <div className="relative w-full text-center">
//               <button
//                 id="mobile-resources-dropdown-btn"
//                 onClick={toggleResourcesDropdown} // Reusing the same toggle logic
//                 className="flex items-center justify-center w-full text-white no-underline focus:outline-none"
//                 aria-expanded={isResourcesDropdownOpen}
//               >
//                 Resources
//                 <svg className={`ml-1 w-5 h-5 transition-transform duration-200 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </button>
//               {isResourcesDropdownOpen && (
//                 <div id="mobile-resources-dropdown" className="flex flex-col pl-4 space-y-2 mt-2">
//                   {/* Dropdown links default to ga-neutral-800 for consistency */}
//                   {/* <Link to="/financial-resources" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Financial Resources</Link> */}
//                   <Link to="/financial-resources" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Financial Resources</Link>
//                   <Link to="/academic-resources" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Academic Resources</Link>
//                   <Link to="/legal-docs" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Legal & Documentation</Link>
//                   <Link to="/accommodation" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Accommodation & Logistics</Link>
//                   <Link to="/health" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Health & Wellbeing</Link>
//                   <Link to="/culture" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Social & Cultural Integration</Link>
//                   <Link to="/technology" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Tech & Communication</Link>
//                   <Link to="/career" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Career & Networking</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/about" className="text-white no-underline" onClick={closeAllMenus}>About Us</Link>
//             <Link to="/contact" className="text-white no-underline" onClick={closeAllMenus}>Contact</Link>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false); // State for Resources dropdown

  // Effect to handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    // Close desktop resources dropdown if mobile menu opens
    if (!isMobileMenuOpen) setIsResourcesDropdownOpen(false);
  };

  // Close all menus (used when a link is clicked)
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  // Toggle desktop resources dropdown visibility
  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(prev => !prev);
  };

  // Close desktop resources dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const resourcesDropdownBtn = document.getElementById('resourcesDropdownBtn');
      const resourcesDropdown = document.getElementById('resourcesDropdown');
      if (resourcesDropdownBtn && resourcesDropdown &&
          !resourcesDropdownBtn.contains(event.target) &&
          !resourcesDropdown.contains(event.target)) {
        setIsResourcesDropdownOpen(false);
      }
    };

    if (isResourcesDropdownOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isResourcesDropdownOpen]);


  return (
    <div className={`relative w-full z-50 transition-all duration-300 ${isSticky ? 'f1fn83er sticky' : 'f1fn83er'}`}>
      <div className="toast_notif"></div> {/* Placeholder from GoAbroad */}
      
      {/* Desktop Navigation (visible on large screens) */}
      <div className="desktop-topnav hidden md:flex w-full max-w-[75rem] mx-auto p-4 md:p-0">
        <Link className="ga-logo mr-auto" to="/" title="Migration & Study Abroad">
          <img src="/assets/images/logo.png" alt="Migration & Study Abroad" className="h-[46.5px] w-[60px] object-fill" />
        </Link>
        <nav className="flex items-center justify-end w-full space-x-2">
          {/* Dynamically assign text color based on sticky state */}
          <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200`} to="/">Home</Link>
          <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200`} to="/blog">Blog</Link>
          
          <div className="relative"> {/* Use a div for the dropdown container */}
            <button
              id="resourcesDropdownBtn"
              onClick={toggleResourcesDropdown} // This button only toggles the dropdown
              aria-expanded={isResourcesDropdownOpen}
              className={`flex items-center font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200 focus:outline-none ${
                isSticky ? 'text-ga-neutral-800' : 'text-white'
              }`}
              type="button"
            >
              <span className="pr-1">Resources</span>
              <svg
                className={`ml-0 w-4 h-4 transition-transform duration-200 ${
                  isResourcesDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-label="Toggle Resources Dropdown"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isResourcesDropdownOpen && (
              <div
                id="resourcesDropdown"
                className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
              >
                {/* Link to Main Resources Page (now explicit item in dropdown) */}
                <Link to="/resources" className="block px-4 py-2 text-ga-neutral-800 font-semibold hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>
                  Main Resources Page
                </Link>
                {/* Other sub-resource links */}
                <Link to="/financial-resources" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Financial Resources</Link>
                <Link to="/academic-resources" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Academic Resources</Link>
                <Link to="/legal-docs" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Legal & Documentation</Link>
                <Link to="/accommodation" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Accommodation & Logistics</Link>
                <Link to="/health" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Health & Wellbeing</Link>
                <Link to="/culture" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Social & Cultural Integration</Link>
                <Link to="/technology" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Tech & Communication</Link>
                <Link to="/career" className="block px-4 py-2 text-ga-neutral-800 hover:bg-ga-primary-blue hover:text-white transition-colors duration-150" onClick={closeAllMenus}>Career & Networking</Link>
              </div>
            )}
          </div>
          <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline mr-4 hover:text-ga-primary-blue transition-colors duration-200`} to="/about">About Us</Link>
          <Link className={`${isSticky ? 'text-ga-neutral-800' : 'text-white'} font-semibold text-base no-underline hover:text-ga-primary-blue transition-colors duration-200`} to="/contact">Contact</Link>
          
        </nav>
      </div>

      {/* Mobile Navigation (visible on small screens) */}
      <div className="flex md:hidden f1fn83er-mobile items-center justify-between w-full p-4">
        <button className="hamburger-menu p-0 border-none bg-transparent" onClick={toggleMobileMenu}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-6 w-6 text-ga-neutral-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </button>
        <Link className="ga-logo mx-auto" to="/" title="Migration & Study Abroad">
          <img src="/assets/images/logo.png" alt="Migration & Study Abroad" className="h-[46.5px] w-[60px] object-fill" />
        </Link>
        <div className="w-6"></div> {/* Spacer for alignment */}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleMobileMenu}>
            &times;
          </button>
          <nav className="flex flex-col space-y-6 text-xl">
            {/* Mobile links always white against dark overlay */}
            <Link to="/" className="text-white no-underline" onClick={closeAllMenus}>Home</Link>
            <Link to="/blog" className="text-white no-underline" onClick={closeAllMenus}>Blog</Link>
            
            {/* Mobile Resources Dropdown */}
            <div className="relative w-full text-center">
              <button
                id="mobile-resources-dropdown-btn"
                onClick={toggleResourcesDropdown} // Reusing the same toggle logic
                className="flex items-center justify-center w-full text-white no-underline focus:outline-none"
                aria-expanded={isResourcesDropdownOpen}
              >
                Resources
                <svg className={`ml-1 w-5 h-5 transition-transform duration-200 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isResourcesDropdownOpen && (
                <div id="mobile-resources-dropdown" className="flex flex-col pl-4 space-y-2 mt-2">
                  {/* Link to Main Resources Page (now explicit item in mobile dropdown) */}
                  <Link to="/resources" className="block px-4 py-2 text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Main Resources Page</Link>
                  {/* Other sub-resource links */}
                  <Link to="/financial-resources" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Financial Resources</Link>
                  <Link to="/academic-resources" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Academic Resources</Link>
                  <Link to="/legal-docs" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Legal & Documentation</Link>
                  <Link to="/accommodation" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Accommodation & Logistics</Link>
                  <Link to="/health" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Health & Wellbeing</Link>
                  <Link to="/culture" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Social & Cultural Integration</Link>
                  <Link to="/technology" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Tech & Communication</Link>
                  <Link to="/career" className="text-white hover:text-ga-primary-blue transition-colors duration-150" onClick={closeAllMenus}>Career & Networking</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white no-underline" onClick={closeAllMenus}>About Us</Link>
            <Link to="/contact" className="text-white no-underline" onClick={closeAllMenus}>Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;

