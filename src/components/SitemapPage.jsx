import React from 'react';
import { Link } from 'react-router-dom';

function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/sitemap_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Website Sitemap
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Explore Our Comprehensive Content</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          This sitemap provides an organized overview of all the pages and key sections on the Travelling Scholars website, helping you quickly find the information you need.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-ga-neutral-800 leading-relaxed">
          {/* Section: Main Pages */}
          <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-ga-primary-blue">
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">General Navigation</h3>
            <nav>
              <ul className="list-disc list-inside space-y-2">
                <li><Link to="/" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Home</Link></li>
                <li><Link to="/blog" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Blog</Link></li>
                <li><Link to="/about" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Contact</Link></li>
                <li><Link to="/faqs" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">FAQs (Frequently Asked Questions)</Link></li>
              </ul>
            </nav>
          </section>

          {/* Section: Resources */}
          <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-ga-primary-blue">
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">Resources</h3>
            <nav>
              <ul className="list-disc list-inside space-y-2">
                <li><Link to="/resources" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">All Resources</Link></li>
                <li><Link to="/financial-resources" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Financial Resources</Link></li>
                <li><Link to="/academic-resources" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Academic Resources</Link></li>
                <li><Link to="/legal-docs" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Legal & Documentation</Link></li>
                <li><Link to="/accommodation" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Accommodation & Logistics</Link></li>
                <li><Link to="/health" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Health & Wellbeing</Link></li>
                <li><Link to="/culture" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Social & Cultural Integration</Link></li>
                <li><Link to="/technology" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Tech & Communication</Link></li>
                <li><Link to="/career" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Career & Networking</Link></li>
              </ul>
            </nav>
          </section>

          {/* Section: Opportunities & Legal */}
          <section className="bg-white p-6 rounded-xl shadow-md border-t-4 border-ga-primary-blue">
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">Opportunities & Legal Info</h3>
            <nav>
              <ul className="list-disc list-inside space-y-2">
                <li><Link to="/free-online-courses" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Free Online Courses</Link></li>
                <li><Link to="/conferences-training" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Conferences & Training</Link></li>
                <li><Link to="/student-benefits" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Student Benefits</Link></li>
                <li className="mt-4 font-bold">Legal & Other Information</li> {/* Sub-heading within the list */}
                <li><Link to="/privacy" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Disclaimer</Link></li>
                <li><Link to="/imprint" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Imprint</Link></li>
                <li><Link to="/accessibility" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Accessibility</Link></li>
                {/* <li><Link to="/video" className="text-ga-neutral-800 hover:text-ga-secondary-red transition-colors duration-200">Video Guides</Link></li> */}
              </ul>
            </nav>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SitemapPage;
