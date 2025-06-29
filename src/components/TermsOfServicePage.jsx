import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/terms_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Terms of Service
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Agreement to Our Terms</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          These Terms of Service ("Terms") govern your use of the Travelling Scholars website and services ("Service"). By accessing or using our Service, you agree to be bound by these Terms.
        </p>

        <div className="max-w-4xl mx-auto space-y-8 text-ga-neutral-800 leading-relaxed">
          {/* Section: 1. Acceptance of Terms */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">1. Acceptance of Terms</h3>
            <p>By accessing and using our website, you signify your acceptance of these Terms. If you do not agree to these Terms, please do not use our Service. We may modify these Terms at any time; your continued use implies acceptance of the updated Terms.</p>
          </section>

          {/* Section: 2. Use of Service and Resources */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">2. Use of Service and Resources</h3>
            <p className="mb-3">Our Service provides information, guides, tools, and resources related to migration and study abroad in Austria and Europe. You agree to use the Service and its resources responsibly and lawfully.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Accuracy of Information:</strong> While we strive for accuracy, the information provided is for general guidance only and may not always be up-to-date or applicable to your specific situation. Migration and education policies are subject to change.</li>
              <li><strong>No Legal Advice:</strong> The content on this website does not constitute legal, financial, or immigration advice. Always consult with qualified professionals for personalized guidance.</li>
              <li><strong>External Links:</strong> Our Service may contain links to third-party websites or resources. We are not responsible for the content or privacy practices of these external sites.</li>
              <li><strong>Resource Usage:</strong> Downloadable documents (templates, guides, checklists) are provided for personal, non-commercial use to assist in your application process. Redistribution or commercial use without explicit permission is prohibited.</li>
            </ul>
          </section>

          {/* Section: 3. User Responsibilities */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">3. User Responsibilities</h3>
            <p className="mb-3">As a user of our Service, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Provide accurate and complete information when required (e.g., in contact forms).</li>
              <li>Use the Service only for lawful purposes.</li>
              <li>Not engage in any activity that could harm, disable, or impair the Service or its users.</li>
              <li>Respect the intellectual property rights of Travelling Scholars and third parties.</li>
            </ul>
          </section>

          {/* Section: 4. Intellectual Property Rights */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">4. Intellectual Property Rights</h3>
            <p>All content on the Travelling Scholars website, including text, graphics, logos, icons, images, digital downloads, data compilations, and software, is the property of Travelling Scholars or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Travelling Scholars.</p>
          </section>

          {/* Section: 5. Limitation of Liability */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">5. Limitation of Liability</h3>
            <p>Travelling Scholars provides its Service on an "as is" and "as available" basis. We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components. To the fullest extent permitted by law, Travelling Scholars shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
          </section>

          {/* Section: 6. Dispute Resolution */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">6. Dispute Resolution</h3>
            <p className="mb-3">Any dispute arising out of or relating to these Terms or the Service will be resolved through good-faith negotiation. If a resolution cannot be reached, disputes will be settled in accordance with the laws of Austria, without regard to its conflict of law provisions.</p>
          </section>

          {/* Section: 7. Governing Law */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">7. Governing Law</h3>
            <p>These Terms shall be governed and construed in accordance with the laws of Austria, without regard to its conflict of law provisions.</p>
          </section>

          {/* Section: 8. Changes to Terms */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">8. Changes to These Terms</h3>
            <p className="mb-3">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p className="text-sm text-gray-600 mt-2">Last updated: June 28, 2025</p>
          </section>

          {/* Section: 9. Contact Information */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">9. Contact Information</h3>
            <p className="mb-3">If you have any questions about these Terms of Service, please contact us:</p>
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

export default TermsOfServicePage;
