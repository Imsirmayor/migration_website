import React from 'react';
import { Link } from 'react-router-dom';

function AccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/accessibility_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Accessibility Statement
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Our Commitment to Inclusive Design</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Travelling Scholars is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
        </p>

        <div className="max-w-4xl mx-auto space-y-8 text-ga-neutral-800 leading-relaxed">
          {/* Section: 1. Conformance Status */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">1. Conformance Status</h3>
            <p className="mb-3">The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: A, AA, and AAA. Travelling Scholars aims to be conformant with <strong>WCAG 2.1 level AA</strong>.</p>
            <p>We believe that achieving this level will provide a good experience for the vast majority of our users.</p>
          </section>

          {/* Section: 2. Accessibility Features Implemented */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">2. Accessibility Features Implemented</h3>
            <p className="mb-3">We have implemented the following features to enhance accessibility on our website:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed and operated using only a keyboard.</li>
              <li><strong>Screen Reader Support:</strong> Content is structured with semantic HTML and appropriate ARIA attributes to be perceivable and operable by screen readers.</li>
              <li><strong>Color Contrast:</strong> We ensure a high contrast ratio between text and background colors for readability, adhering to WCAG 2.1 AA guidelines.</li>
              <li><strong>Descriptive Alt Text:</strong> All meaningful images include descriptive alternative text.</li>
              <li><strong>Consistent Navigation:</strong> Our navigation menus are consistent across the site.</li>
              <li><strong>Resizable Text:</strong> Text can be resized up to 200% without loss of content or functionality.</li>
              <li><strong>Focus Indicators:</strong> Clear visual focus indicators are provided for all interactive elements.</li>
            </ul>
          </section>

          {/* Section: 3. Technical Specifications */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">3. Technical Specifications</h3>
            <p className="mb-3">Accessibility of Travelling Scholars relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (React framework)</li>
            </ul>
            <p>These technologies are relied upon for conformance with the accessibility standards used.</p>
          </section>

          {/* Section: 4. Feedback Mechanism */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">4. Feedback Mechanism</h3>
            <p className="mb-3">We welcome your feedback on the accessibility of Travelling Scholars. Please let us know if you encounter accessibility barriers:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>E-mail: <a href="mailto:connect@travellingscholars.com" className="text-ga-primary-blue hover:underline font-semibold">connect@travellingscholars.com</a></li>
              <li>Contact Form: <Link to="/contact" className="text-ga-primary-blue hover:underline font-semibold">Contact Us Page</Link></li>
            </ul>
            <p className="mt-3">We try to respond to feedback within 5 business days.</p>
          </section>

          {/* Section: 5. Date */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">5. Date</h3>
            <p className="text-sm text-gray-600">This statement was created on June 28, 2025.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AccessibilityPage;
