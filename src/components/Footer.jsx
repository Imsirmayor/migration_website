import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Footer() {
  return (
    <footer className="px-0"> {/* Outer wrapper, consistent with your snippet */}
      {/* Copyright Section (consistent with your previous content) */}
      <p className="text-center text-ga-neutral-800 py-4">&copy; {new Date().getFullYear()} Migration & Study Abroad. All rights reserved.</p>

      {/* Footer Link Lists (Main Section) */}
      <div className="container-fluid py-8 bg-secondary" id="linklists-wrapper"> {/* Replaced bg-brand1 with bg-secondary from theme */}
        <div className="px-0" id="linklists-container">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"> {/* Tailwind grid for columns */}
            
            {/* Column 1: About Us */}
            <div className="col-span-1">
              <h2 className="text-primary font-bold text-lg mb-4">
                <strong className="hidden lg:block">About Us</strong>
              </h2>
              <nav>
                <ul className="list-none p-0 space-y-2"> {/* Tailwind for list styling */}
                  <li><Link to="/faqs" className="text-primary no-underline hover:text-accent transition-colors duration-200">FAQs</Link></li>
                  <li><Link to="/disclaimer" className="text-primary no-underline hover:text-accent transition-colors duration-200">Disclaimer</Link></li> {/* Assuming /disclaimer route */}
                  <li><Link to="/about" className="text-primary no-underline hover:text-accent transition-colors duration-200">What is this website?</Link></li>
                </ul>
              </nav>
            </div>

            {/* Column 2: Quick Services */}
            <div className="col-span-1">
              <h2 className="text-primary font-bold text-lg mb-4">
                <strong className="hidden lg:block">Quick Services</strong>
              </h2>
              <nav>
                <ul className="list-none p-0 space-y-2">
                  <li><Link to="/blog" className="text-primary no-underline hover:text-accent transition-colors duration-200">Read Our Blog</Link></li>
                  <li><Link to="/contact" className="text-primary no-underline hover:text-accent transition-colors duration-200">Contact Support</Link></li>
                  <li><Link to="/resources" className="text-primary no-underline hover:text-accent transition-colors duration-200">Student Resources</Link></li>
                </ul>
              </nav>
            </div>

            {/* Column 3: Explore Topics */}
            <div className="col-span-1">
              <h2 className="text-primary font-bold text-lg mb-4">
                <strong className="hidden lg:block">Explore Topics</strong>
              </h2>
              <nav>
                <ul className="list-none p-0 space-y-2">
                  <li><Link to="/" className="text-primary no-underline hover:text-accent transition-colors duration-200">Home Page</Link></li>
                  {/* Corrected path for Student Benefits */}
                  <li><Link to="/student-benefits" className="text-primary no-underline hover:text-accent transition-colors duration-200">Student Benefits</Link></li>
                  <li><Link to="/financial-resources" className="text-primary no-underline hover:text-accent transition-colors duration-200">Scholarship & Other Tips</Link></li> {/* Links to Financial Resources page */}
                </ul>
              </nav>
            </div>

            {/* Column 4: Help Links */}
            <div className="col-span-1">
              <h2 className="text-primary font-bold text-lg mb-4">
                <strong className="hidden lg:block">Help Links</strong>
              </h2>
              <nav>
                <ul className="list-none p-0 space-y-2">
                  <li><Link to="/sitemap" className="text-primary no-underline hover:text-accent transition-colors duration-200">Sitemap</Link></li> {/* Assuming /sitemap route */}
                  <li><Link to="/privacy" className="text-primary no-underline hover:text-accent transition-colors duration-200">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-primary no-underline hover:text-accent transition-colors duration-200">Terms of Service</Link></li> {/* Assuming /terms route */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Last Page Section (Copyright, Legal, Social Media) */}
      <div className="px-0 bg-primary py-6 text-white" id="footer-container">
        <nav className="text-sm mb-2" aria-label="Footer navigation">
          <ul className="list-none p-0 text-center mb-0"> {/* Tailwind for list styling */}
            <li className="inline-block md:inline-block px-2"> {/* Added horizontal padding */}
              <Link to="/privacy" className="text-white no-underline hover:opacity-70 transition-opacity duration-200">Privacy Statement</Link>
              <span className="hidden md:inline-block pl-2">/</span>
            </li>
            <li className="inline-block md:inline-block px-2">
              <Link to="/accessibility" className="text-white no-underline hover:opacity-70 transition-opacity duration-200">Accessibility</Link> {/* Assuming /accessibility route */}
              <span className="hidden md:inline-block pl-2">/</span>
            </li>
            <li className="inline-block md:inline-block px-2">
              <Link to="/imprint" className="text-white no-underline hover:opacity-70 transition-opacity duration-200">Imprint</Link> {/* Assuming /imprint route */}
            </li>
          </ul>
        </nav>

        <nav className="footer-social" aria-label="Social Media">
          <ul className="list-none p-0 text-center mb-0 flex justify-center space-x-3"> {/* Tailwind for list styling and centering */}
            {/* Image src paths should be absolute from public */}
            <li><a href="#" className="text-white hover:opacity-70 transition-opacity duration-200"><img src="/assets/icons/twitter.svg" alt="Twitter" className="h-6 w-6 inline-block" /></a></li>
            <li><a href="#" className="text-white hover:opacity-70 transition-opacity duration-200"><img src="/assets/icons/facebook.svg" alt="Facebook" className="h-6 w-6 inline-block" /></a></li>
            <li><a href="#" className="text-white hover:opacity-70 transition-opacity duration-200"><img src="/assets/icons/youtube.svg" alt="YouTube" className="h-6 w-6 inline-block" /></a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
