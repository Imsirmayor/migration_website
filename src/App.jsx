// // src/App.jsx
// // This is the main entry point for your React application.

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// // Core Layout Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// // Homepage Components
// import Hero from './components/Hero';
// import LatestBlogsCarousel from './components/LatestBlogsCarousel';
// import FeaturedResourcesCarousel from './components/FeaturedResourcesCarousel';
// import StudentSupportGrid from './components/StudentSupportGrid';
// import CareerAdvancementCarousel from './components/CareerAdvancementCarousel';

// // Page Components
// import AccommodationPage from './components/AccommodationPage'; // Your Accommodation Page
// import BlogPage from './components/BlogPage';
// import AboutUsPage from './components/AboutUsPage';
// import ContactPage from './components/ContactPage';
// import ResourcesLandingPage from './components/ResourcesLandingPage'; // Your main Resources Page
// import FinancialPage from './components/FinancialPage';
// import AcademicResources from './components/AcademicResources'; // Your Academic Resources Page
// import LegalDocsPage from './components/LegalDocsPage'; // Your Legal & Documentation Page
// import HealthPage from './components/HealthPage';
// import CulturePage from './components/CulturePage';
// import TechnologyPage from './components/TechnologyPage';
// import CareerPage from './components/CareerPage';
// import FAQsPage from './components/FAQsPage';
// import FreeCoursesPage from './components/FreeCoursesPage';
// import ConferencesTrainingPage from './components/ConferencesTrainingPage';
// import StudentBenefitsPage from './components/StudentBenefitsPage';
// import PrivacyPolicyPage from './components/PrivacyPolicyPage';
// import TermsOfServicePage from './components/TermsOfServicePage';
// import DisclaimerPage from './components/DisclaimerPage';
// import SitemapPage from './components/SitemapPage.jsx';
// import AccessibilityPage from './components/AccessibilityPage'; 
// import ImprintPage from './components/ImprintPage'; 



// // HomePage component: Renders content specific to the root path "/"
// function HomePage() {
//   return (
//     <>
//       <Hero />
      
//       <section className="py-6">
//         <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
//           <h2 className="text-left text-2xl font-bold text-ga-neutral-800 mb-4">Our Latest Blogs</h2>
//           <LatestBlogsCarousel />
//           <div className="text-center mt-8">
//             <Link to="/blog" className="bg-ga-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-ga-secondary-red transition-colors duration-200 no-underline">
//               Read More Blogs
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="py-6">
//         <div className="mx-auto max-w-[1200px] px-4 xl:px-0 space-y-8">
//           <h2 className="pl-4 xl:pl-0 font-bold text-2xl text-ga-neutral-800 text-left">Featured Resources</h2>
//           <FeaturedResourcesCarousel />
//           <div className="text-center mt-8">
//             <Link to="/resources" className="bg-ga-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-ga-secondary-red transition-colors duration-200 no-underline">
//               See All Resources
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="py-6">
//         <div className="mx-auto max-w-[1200px] px-4 xl:px-0 space-y-8">
//           <h2 className="pl-4 xl:pl-0 font-bold text-2xl text-ga-neutral-800 text-left">Student Support & Guidance</h2>
//           <StudentSupportGrid />
//         </div>
//       </section>

//       <section className="py-6">
//         <div className="mx-auto max-w-[1200px] px-4 xl:px-0 space-y-8">
//           <h2 className="pl-4 xl:pl-0 font-bold text-2xl text-ga-neutral-800 text-left">Advance Your Career</h2>
//           <CareerAdvancementCarousel /> 
//         </div>
//       </section>
//     </>
//   );
// }

// // Main App Component
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         {/* Navbar is rendered here so it appears on ALL pages handled by React Router */}
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             {/* Define all your routes here */}
//             <Route path="/" element={<HomePage />} />
            
//             {/* Main navigation pages */}
//             <Route path="/blog" element={<BlogPage />} />
//             <Route path="/about" element={<AboutUsPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/resources" element={<ResourcesLandingPage />} />
            
//             {/* Sub-resource pages (linked from Resources dropdown) */}
            
//             <Route path="/financial-resources" element={<FinancialPage />} />
//             <Route path="/academic-resources" element={<AcademicResources />} />
//             <Route path="/legal-docs" element={<LegalDocsPage />} />
//             <Route path="/accommodation" element={<AccommodationPage />} /> {/* Your Accommodation page */}
//             <Route path="/health" element={<HealthPage />} />
//             <Route path="/culture" element={<CulturePage />} />
//             <Route path="/technology" element={<TechnologyPage />} />
//             <Route path="/career" element={<CareerPage />} />
//             <Route path="/free-online-courses" element={<FreeCoursesPage />} />
//             <Route path="/faqs" element={<FAQsPage />} />
//             <Route path="/conferences-training" element={<ConferencesTrainingPage />} />
//             <Route path="/student-benefits" element={<StudentBenefitsPage />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//             <Route path="/terms-of-service" element={<TermsOfServicePage />} />
//             <Route path="/disclaimer" element={<DisclaimerPage />} />
//             <Route path="/sitemap" element={<SitemapPage />} />
//             <Route path="/accessibility" element={<AccessibilityPage />} />
//             <Route path="/imprint" element={<ImprintPage />} />
            
            

//             {/* Catch-all route for any undefined paths */}
//             <Route path="*" element={<div className="container mx-auto px-4 py-8 text-center text-xl text-gray-600">404 - Page Not Found</div>} />
//           </Routes>
//         </main>
//         {/* Footer is rendered here so it appears on ALL pages handled by React Router */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
// This is the main entry point for your React application.

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Core Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage Components
import Hero from './components/Hero';
import LatestBlogsCarousel from './components/LatestBlogsCarousel';
import FeaturedResourcesCarousel from './components/FeaturedResourcesCarousel';
import StudentSupportGrid from './components/StudentSupportGrid';
import CareerAdvancementCarousel from './components/CareerAdvancementCarousel';

// Page Components
import AccommodationPage from './components/AccommodationPage'; // Your Accommodation Page
import BlogPage from './components/BlogPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import ResourcesLandingPage from './components/ResourcesLandingPage'; // Your main Resources Page
import FinancialPage from './components/FinancialPage';
import AcademicResources from './components/AcademicResources'; // Your Academic Resources Page
import LegalDocsPage from './components/LegalDocsPage'; // Your Legal & Documentation Page
import HealthPage from './components/HealthPage';
import CulturePage from './components/CulturePage';
import TechnologyPage from './components/TechnologyPage';
import CareerPage from './components/CareerPage';
import FAQsPage from './components/FAQsPage';
import FreeCoursesPage from './components/FreeCoursesPage';
import ConferencesTrainingPage from './components/ConferencesTrainingPage';
import StudentBenefitsPage from './components/StudentBenefitsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import DisclaimerPage from './components/DisclaimerPage';
import SitemapPage from './components/SitemapPage.jsx';
import AccessibilityPage from './components/AccessibilityPage'; 
import ImprintPage from './components/ImprintPage'; 
import TravelingTipsPage from './components/TravelingTipsPage';
import VisaDocumentsPage from './components/VisaDocumentsPage.jsx';
import PreDeparturePage from './components/PreDeparturePage.jsx';

// HomePage component: Renders content specific to the root path "/"
function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="py-6">
        <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
          <h2 className="text-left text-2xl font-bold text-ga-neutral-800 mb-4">Our Latest Blogs</h2>
          <LatestBlogsCarousel />
          <div className="text-center mt-8">
            <Link to="/blog" className="bg-ga-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-ga-secondary-red transition-colors duration-200 no-underline">
              Read More Blogs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="mx-auto max-w-[1200px] px-4 xl:px-0 space-y-8">
          <h2 className="pl-4 xl:pl-0 font-bold text-2xl text-ga-neutral-800 text-left">Featured Resources</h2>
          <FeaturedResourcesCarousel />
          <div className="text-center mt-8">
            <Link to="/resources" className="bg-ga-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-ga-secondary-red transition-colors duration-200 no-underline">
              See All Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="mx-auto max-w-[1200px] px-4 xl:px-0 space-y-8">
          <h2 className="pl-4 xl:pl-0 font-bold text-2xl text-ga-neutral-800 text-left">Student Support & Guidance</h2>
          <StudentSupportGrid />
        </div>
      </section>

      <section className="py-6">
        <div className="mx-auto max-w-[1200px] px-4 xl:px-0 space-y-8">
          <h2 className="pl-4 xl:pl-0 font-bold text-2xl text-ga-neutral-800 text-left">Advance Your Career</h2>
          <CareerAdvancementCarousel /> 
        </div>
      </section>
    </>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar is rendered here so it appears on ALL pages handled by React Router */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Define all your routes here */}
            <Route path="/" element={<HomePage />} />
            
            {/* Main navigation pages */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesLandingPage />} />
            
            {/* Sub-resource pages (linked from Resources dropdown) */}
            
            <Route path="/financial-resources" element={<FinancialPage />} />
            <Route path="/academic-resources" element={<AcademicResources />} />
            <Route path="/legal-docs" element={<LegalDocsPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} /> {/* Your Accommodation page */}
            <Route path="/health" element={<HealthPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/free-online-courses" element={<FreeCoursesPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/conferences-training" element={<ConferencesTrainingPage />} />
            <Route path="/student-benefits" element={<StudentBenefitsPage />} />
            {/* <Route path="/video" element={<VideoPage />} />  */}
            
            {/* Corrected paths for Privacy Policy and Terms of Service */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} /> {/* Corrected from /privacy-policy */}
            <Route path="/terms" element={<TermsOfServicePage />} /> {/* Corrected from /terms-of-service */}
            
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/imprint" element={<ImprintPage />} />
            <Route path="/traveling-tips" element={<TravelingTipsPage />} />
            <Route path="/visa-documents" element={<VisaDocumentsPage />} />
            <Route path="/pre-departure" element={<PreDeparturePage />} />
            
            

            {/* Catch-all route for any undefined paths */}
            <Route path="*" element={<div className="container mx-auto px-4 py-8 text-center text-xl text-gray-600">404 - Page Not Found</div>} />
          </Routes>
        </main>
        {/* Footer is rendered here so it appears on ALL pages handled by React Router */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
