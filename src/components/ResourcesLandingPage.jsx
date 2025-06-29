import React from 'react';
import { Link } from 'react-router-dom';

function ResourcesLandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Page Banner (Similar to your resources.html banner) */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url('public/assets/images/resources_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Resources for Migrants & Students Abroad
        </h1>
      </div>

      {/* Page Header / Introduction */}
      <header className="w-full bg-white py-12 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-ga-primary-blue mb-4">Essential Resources for Moving & Studying Abroad</h1>
          <p className="text-lg text-ga-neutral-800 mb-6">
            Navigating a new country can be complex, but with the right information, your journey can be seamless. We've organized essential resources by key life areas to help students and migrants thrive overseas, from managing finances to finding your community.
          </p>
        </div>
      </header>

      {/* Resource Categories Grid (from your resources.html) */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Financial Resources */}
          <Link to="/financial-resources" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            {/* Icon: Money Bag */}
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 0c-2.5 0-4.5 2-4.5 4.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5C16.5 7 14.5 5 12 5zm0 0v2m0 0c-2.5 0-4.5 2-4.5 4.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5C16.5 7 14.5 5 12 5z" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Financial Resources</h2>
            <p className="text-ga-neutral-800 mb-4">Scholarships, living expenses, emergency funds, and part-time job options.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
          {/* Academic Resources */}
          <Link to="/academic-resources" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Academic Resources</h2>
            <p className="text-ga-neutral-800 mb-4">Documents, materials, and university support.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
          {/* Legal & Documentation */}
          <Link to="/legal-docs" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                <rect width="18" height="18" x="3" y="3" rx="2" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Legal & Documentation</h2>
            <p className="text-ga-neutral-800 mb-4">Visa processes, insurance, and personal documents.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
          {/* Accommodation & Logistics */}
          <Link to="/accommodation" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Accommodation & Logistics</h2>
            <p className="text-ga-neutral-800 mb-4">Housing, transport, and packing tips.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
          {/* Health & Wellbeing */}
          <Link to="/health" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Health & Wellbeing</h2>
            <p className="text-ga-neutral-800 mb-4">Healthcare access, mental wellness, and local registration.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
          {/* Social & Cultural Integration */}
          <Link to="/culture" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Social & Cultural Integration</h2>
            <p className="text-ga-neutral-800 mb-4">Language tools, student clubs, and cultural tips.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
          {/* Tech & Communication */}
          <Link to="/technology" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v2m0 4a8 8 0 100-16 8 8 0 000 16zm-4-4h8" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Tech & Communication</h2>
            <p className="text-ga-neutral-800 mb-4">SIM cards, VPNs, and essential apps abroad.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
          {/* Career & Networking */}
          <Link to="/career" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue">
            <span className="mb-4">
              <svg className="w-12 h-12 text-ga-primary-blue group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m8 0v2a4 4 0 01-8 0V7m8 0v2a4 4 0 01-8 0V7" />
              </svg>
            </span>
            <h2 className="text-xl font-bold mb-2 text-ga-neutral-800">Career & Networking</h2>
            <p className="text-ga-neutral-800 mb-4">Internship portals, CV adaptation, and alumni networks.</p>
            <span className="inline-block mt-auto bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm group-hover:bg-ga-secondary-red transition-colors duration-200">Explore Resources</span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ResourcesLandingPage;
