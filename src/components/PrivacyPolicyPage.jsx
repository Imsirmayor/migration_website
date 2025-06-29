import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/privacy_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Privacy Policy
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Your Privacy Matters to Us</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          This Privacy Policy describes how Travelling Scholars ("we," "us," or "our") collects, uses, and discloses your personal information when you visit and use our website.
        </p>

        <div className="max-w-4xl mx-auto space-y-8 text-ga-neutral-800 leading-relaxed">
          {/* Section: Information We Collect */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">1. Information We Collect</h3>
            <p className="mb-3">We collect information to provide and improve our services to you. This may include:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Personal Information:</strong> Name, email address, contact number, country of origin, academic interests, and any other information you provide when filling out forms (e.g., contact form, inquiry form, registration).</li>
              <li><strong>Usage Data:</strong> Information about how you access and use the website, such as your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our service and hold certain information.</li>
            </ul>
          </section>

          {/* Section: How We Use Your Information */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">2. How We Use Your Information</h3>
            <p className="mb-3">We use the collected information for various purposes, including:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To provide and maintain our service.</li>
              <li>To personalize your experience and deliver content tailored to your interests.</li>
              <li>To communicate with you, respond to your inquiries, and send you updates or newsletters (if you opt-in).</li>
              <li>To analyze and monitor the usage of our website and improve its functionality and user experience.</li>
              <li>To detect, prevent, and address technical issues or fraudulent activities.</li>
              <li>For legal and regulatory compliance.</li>
            </ul>
          </section>

          {/* Section: Data Storage and Security */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">3. Data Storage and Security</h3>
            <p className="mb-3">We are committed to protecting your personal information. We implement appropriate technical and organizational measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.</p>
            <p>Your data may be stored on secure servers located within Europe or other regions in compliance with applicable data protection laws. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          </section>

          {/* Section: Sharing Your Information */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">4. Sharing Your Information</h3>
            <p className="mb-3">We may share your information in certain situations, such as:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.</li>
              <li><strong>For Legal Reasons:</strong> If required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
              <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your explicit consent.</li>
            </ul>
          </section>

          {/* Section: Your Data Protection Rights */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">5. Your Data Protection Rights</h3>
            <p className="mb-3">Depending on your location and applicable laws (like GDPR), you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>The right to access</strong> the personal data we hold about you.</li>
              <li><strong>The right to rectification</strong> if your personal data is inaccurate or incomplete.</li>
              <li><strong>The right to erasure</strong> of your personal data under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> of your personal data under certain conditions.</li>
              <li><strong>The right to data portability</strong> to receive your data in a structured, commonly used format.</li>
              <li><strong>The right to object</strong> to our processing of your personal data.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:connect@travellingscholars.com" className="text-ga-primary-blue hover:underline font-semibold">connect@travellingscholars.com</a>.</p>
          </section>

          {/* Section: Changes to This Privacy Policy */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">6. Changes to This Privacy Policy</h3>
            <p className="mb-3">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            <p className="text-sm text-gray-600 mt-2">Last updated: June 28, 2025</p>
          </section>

          {/* Section: Contact Us */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">7. Contact Us</h3>
            <p className="mb-3">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>By email: <a href="mailto:connect@travellingscholars.com" className="text-ga-primary-blue hover:underline font-semibold">connect@travellingscholars.com</a></li>
              <li>By visiting this page on our website: <Link to="/contact" className="text-ga-primary-blue hover:underline font-semibold">Contact Us Page</Link></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicyPage;
