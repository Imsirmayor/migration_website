import React from 'react';
import { Link } from 'react-router-dom';

function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/disclaimer_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Disclaimer
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Important Legal Notices</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Please read this disclaimer carefully before using our website or any of the information and resources provided.
        </p>

        <div className="max-w-4xl mx-auto space-y-8 text-ga-neutral-800 leading-relaxed">
          {/* Section: 1. Accuracy of Information */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">1. Accuracy of Information</h3>
            <p className="mb-3">The information provided on the Travelling Scholars website (including guides, articles, tools, and downloadable resources) is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
            <p>Any reliance you place on such information is therefore strictly at your own risk. Migration laws, university requirements, and other details are subject to frequent change, and may vary greatly depending on individual circumstances.</p>
          </section>

          {/* Section: 2. No Legal or Professional Advice */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">2. No Legal or Professional Advice</h3>
            <p className="mb-3">The content on this website does not constitute and is not intended to be a substitute for legal, financial, immigration, medical, or other professional advice. Always seek the advice of a qualified professional in the respective field for any questions you may have regarding your specific situation.</p>
            <p>Never disregard professional advice or delay in seeking it because of something you have read on this website.</p>
          </section>

          {/* Section: 3. Limitation of Liability */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">3. Limitation of Liability</h3>
            <p className="mb-3">In no event will Travelling Scholars be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
            <p>This includes, but is not limited to, any errors or omissions in the content, or for any loss or damage incurred as a result of the use of any content posted, transmitted, or otherwise made available via the Service.</p>
          </section>

          {/* Section: 4. External Links Policy */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">4. External Links Policy</h3>
            <p className="mb-3">Through this website, you may be able to link to other websites which are not under the control of Travelling Scholars. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. We are not responsible for the privacy practices or the content of such websites.</p>
          </section>

          {/* Section: 5. User Responsibilities */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">5. User Responsibilities</h3>
            <p className="mb-3">Users are solely responsible for ensuring that any information, documents, or resources obtained from this website are accurate, complete, and suitable for their specific purpose before relying on them.</p>
            <p>Users are responsible for ensuring that their use of the website and its resources complies with all applicable local, national, and international laws and regulations.</p>
          </section>

          {/* Section: 6. Copyright Notice */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">6. Copyright Notice</h3>
            <p>&copy; {new Date().getFullYear()} Travelling Scholars. All rights reserved. The content, design, and layout of this website are protected by copyright law. Any reproduction, distribution, or transmission of any part or parts of this website without prior written permission is prohibited.</p>
          </section>

          {/* Section: 7. Changes to Disclaimer */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">7. Changes to This Disclaimer</h3>
            <p className="mb-3">We reserve the right to amend this disclaimer at any time without notice. By continuing to use the website after any changes, you agree to be bound by the revised disclaimer.</p>
            <p className="text-sm text-gray-600 mt-2">Last updated: June 28, 2025</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DisclaimerPage;
