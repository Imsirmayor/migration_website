import React from 'react';
import { Link } from 'react-router-dom';

function ImprintPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/imprint_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Imprint
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Legally Required Information</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          This imprint provides legally required information about Travelling Scholars and its online presence.
        </p>

        <div className="max-w-4xl mx-auto space-y-8 text-ga-neutral-800 leading-relaxed">
          {/* Section: 1. Website Information */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">1. Website Information</h3>
            <p><strong>Website Name:</strong> Travelling Scholars e.U.</p>
                        
            <p><strong>Website Purpose:</strong> Provision of information and resources for international students and migrants.</p>
          </section>

          {/* Section: 2. Contact Details */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">2. Contact Details</h3>
            <p><strong>Email:</strong> <a href="mailto:connect@travellingscholars.com" className="text-ga-primary-blue hover:underline font-semibold">connect@travellingscholars.com</a></p>
            
            <p><strong>Website:</strong> <a href="https://www.travellingscholars.com" className="text-ga-primary-blue hover:underline font-semibold">www.travellingscholars.com</a></p>
          </section>

          {/* Section: 3. Responsible for Content */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">3. Responsible for Content</h3>
            <p><strong>Responsible Person:</strong> Mayor</p>
            <p><strong>Address:</strong> 8020 Graz, Austria</p>
          </section>

          {/* Section: 4. Online Dispute Resolution (EU Specific) */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">4. Online Dispute Resolution (Art. 14 para. 1 ODR-Regulation):</h3>
            <p>The European Commission provides a platform for online dispute resolution (OS), which you can find at <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-ga-primary-blue hover:underline font-semibold">https://ec.europa.eu/consumers/odr/</a>.</p>
            <p>We are not obligated and unwilling to participate in a dispute settlement procedure before a consumer arbitration board.</p>
          </section>

          {/* Section: 5. Professional Liability Insurance (If applicable) */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">5. Professional Liability Insurance (If applicable)</h3>
            <p><strong>Name and Location of Insurer:</strong> [Name of Insurance Company], [Address of Insurance Company]</p>
            <p><strong>Scope of Insurance:</strong> [e.g., Worldwide, Europe]</p>
            <p className="text-sm text-gray-600 mt-2">*(Remove this section if not applicable)*</p>
          </section>

          {/* Section: 6. Copyright Notice */}
          <section>
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">6. Copyright Notice</h3>
            <p>&copy; {new Date().getFullYear()} Travelling Scholars. All rights reserved. All content and works on these pages are subject to Austrian copyright law. Any duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ImprintPage;
