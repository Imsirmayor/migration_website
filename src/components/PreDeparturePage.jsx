import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// --- START: Internal Data and Helper Functions ---

// Helper for parsing SVG string to React component
const renderSvg = (svgString, wrapperClassName = '') => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} className={wrapperClassName} />;
};

// SVG Icons
const preDepartureIcons = {
  // Main Section Icons
  packing: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6L12 3.75 9.75 6M9.75 6L12 8.25M9.75 6V18M9.75 6L14.25 18M14.25 18L12 20.25 9.75 18M14.25 18L12 15.75 9.75 18" /></svg>', // Luggage/Packing
  airport: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75c1.414 0 2.5-1.086 2.5-2.5V10h-5v9.25c0 1.414 1.086 2.5 2.5 2.5zM21 12H3m12-7.5l-3-3m0 0l-3 3M12 2.25V9m-7.5 3h15" /></svg>', // Plane/Airport
  firstSteps: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25l-8 5.75L4 18.25l8 5.75 8-5.75V8l-8-5.75zM12 2.25L4 8l8 5.75 8-5.75-8-5.75zM12 14.25V21.75m0 0H6m6 0h6"/></svg>', // Footsteps/First steps
  
  // Checklist item icon
  checked: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Checkmark in circle
  
  // General Accordion/Info icons
  info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
};

// Main Content Sections Data
const preDepartureSections = [
  {
    id: 'packing-essentials',
    heading: 'Packing Smart: What to Bring & What to Leave',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Packing for an international move can be daunting. Focus on essentials and remember you can buy most things in Europe.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Pre-Departure Packing Checklist:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Documents:</strong> Passport, visa, acceptance letter, insurance, copy of all important documents.</li>
        <li><strong>Essentials:</strong> Adapters, necessary medications (with prescription), travel-sized toiletries.</li>
        <li><strong>Clothing:</strong> Layering essentials, specific winter gear if applicable (check <a href="/health" class="text-ga-primary-blue hover:underline">Health page</a>).</li>
        <li><strong>Valuables:</strong> Keep electronics, jewelry, and important papers in your carry-on.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Tips for Packing Light:</h3>
      <p class="text-base text-gray-700">Roll clothes, use packing cubes, wear your heaviest shoes on the plane, and remember most basic clothing can be purchased affordably in Europe.</p>
      <a href="/accommodation" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">See accommodation tips for what to expect in furnished places.</a>
    `,
    imageUrl: '/assets/images/packing.png',
    iconSvg: preDepartureIcons.packing,
  },
  {
    id: 'airport-arrival',
    heading: 'Airport Arrival: Customs, Transport & First Impressions',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Your first hours in a new country can be overwhelming. Plan your airport arrival thoroughly.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Customs & Immigration:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Have your passport, visa/residence permit, acceptance letter, and proof of funds ready.</li>
        <li>Be prepared to answer questions about your purpose of visit and duration of stay.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Airport to Accommodation:</h3>
      <p class="text-base text-gray-700 mb-4">Research public transport options (train, bus, metro) from the airport to your accommodation in advance. Taxis are available but more expensive. Avoid unlicensed cabs.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Immediate Essentials:</h3>
      <p class="text-base text-gray-700">Have some local currency for immediate needs and consider buying a local SIM card at the airport for immediate connectivity. (<a href="/technology" class="text-ga-primary-blue hover:underline">See Tech page</a>)</p>
    `,
    imageUrl: '/assets/images/airport_arrival.png',
    iconSvg: preDepartureIcons.airport,
  },
  {
    id: 'first-steps',
    heading: 'First Days in Europe: Critical Post-Arrival Tasks',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">The first few days are crucial for setting up your life. Prioritize these tasks:</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">1. Residence Registration (Meldezettel in Austria):</h3>
      <p class="text-base text-gray-700 mb-4">Register your address with the local municipal office within the legal timeframe (e.g., 3 days in Austria). This is essential for your residence permit.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">2. Bank Account Opening:</h3>
      <p class="text-base text-gray-700 mb-4">Open a local bank account. This is needed for scholarships, part-time job payments, and daily expenses. Some banks offer student-friendly accounts.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">3. Health Insurance Activation:</h3>
      <p class="text-base text-gray-700">Activate your local health insurance. This is mandatory and provides full coverage during your stay. (<a href="/health" class="text-ga-primary-blue hover:underline">See Health page</a>)</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">4. University Enrollment:</h3>
      <p class="text-base text-gray-700">Complete your final university enrollment, collect student ID, and attend orientation sessions.</p>
    `,
    imageUrl: '/assets/images/first_steps.png',
    iconSvg: preDepartureIcons.firstSteps,
  },
];

// Pre-Departure Checklist Data (for accordion)
const preDepartureChecklist = [
  {
    id: 'checklist-1',
    question: 'Before You Leave Home (Pre-Departure Checklist)',
    answer: `
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><span class="font-bold">Visa & Passport:</span> Ensure valid for duration of stay + 6 months. Make copies.</li>
        <li><span class="font-bold">Financial Proof:</span> Have all documents ready (blocked account confirmation, scholarship letters).</li>
        <li><span class="font-bold">Acceptance Letter:</span> Keep original and copies handy.</li>
        <li><span class="font-bold">Health Insurance:</span> Obtain travel and research local insurance options.</li>
        <li><span class="font-bold">Flights & Accommodation:</span> Booked and confirmed.</li>
        <li><span class="font-bold">Bank Notification:</span> Inform your home bank about international travel.</li>
        <li><span class="font-bold">Phone Unlocked:</span> Ensure phone is unlocked for international SIM.</li>
        <li><span class="font-bold">Medication:</span> Sufficient supply with prescriptions.</li>
        <li><span class="font-bold">Packing:</span> Pack essentials, consider climate.</li>
      </ul>
      <p class="mt-2">Download our <a href="/assets/downloads/pre_departure/pre_departure_checklist.pdf" download class="text-ga-primary-blue hover:underline font-semibold">Pre-Departure Checklist PDF</a>.</p>
    `,
  },
  {
    id: 'checklist-2',
    question: 'Upon Arrival in Europe (First 7 Days Checklist)',
    answer: `
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><span class="font-bold">Residence Registration:</span> Register your address with local authorities (e.g., Meldeamt in Austria).</li>
        <li><span class="font-bold">University Enrollment:</span> Finalize enrollment and collect student ID.</li>
        <li><span class="font-bold">Local Bank Account:</span> Open a student bank account.</li>
        <li><span class="font-bold">Local SIM Card:</span> Get a local phone number.</li>
        <li><span class="font-bold">Health Insurance:</span> Activate local health insurance.</li>
        <li><span class="font-bold">Explore Campus/City:</span> Familiarize yourself with public transport, grocery stores.</li>
        <li><span class="font-bold">Connect:</span> Attend orientation events, join student groups.</li>
      </ul>
    `,
  },
];

// --- END: Internal Data and Helper Functions ---


function PreDeparturePage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/predeparture_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Pre-Departure & First Steps
        </h1>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Your Essential Guide to a Smooth Transition</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Prepare effectively for your journey to Europe and navigate your first days with confidence using our comprehensive checklists and practical advice.
        </p>

        {/* Main Content Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-8 text-center">Key Stages of Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preDepartureSections.map(section => (
              <div key={section.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-[1.02] flex flex-col items-center text-center">
                <div className="text-ga-primary-blue mb-4">
                  {renderSvg(section.iconSvg, "w-16 h-16")} {/* Larger icons for main topics */}
                </div>
                <h3 className="text-xl font-bold text-ga-neutral-800 mb-3">{section.heading}</h3>
                <img src={section.imageUrl} alt={section.heading} className="w-full h-40 object-cover rounded-md mb-4 shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x160/E5E7EB/4B5563?text=Travel+Prep'; }} />
                <div className="text-sm text-gray-700 flex-grow" dangerouslySetInnerHTML={{ __html: section.contentHtml }} />
              </div>
            ))}
          </div>
        </section>

        {/* Checklists Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Comprehensive Checklists</h2>
          <div className="space-y-4">
            {preDepartureChecklist.map(item => (
              <AccordionItem
                key={item.id}
                title={item.question}
                content={item.answer}
                icon={renderSvg(preDepartureIcons.checked, 'text-ga-primary-blue w-6 h-6')}
              />
            ))}
          </div>
          {/* Optional: Download Full Guide CTA */}
          <div className="mt-8 text-center">
            <a href="/assets/downloads/pre_departure/pre_departure_guide.pdf" download className="bg-ga-primary-blue text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-lg">
              Download Full Pre-Departure Guide
            </a>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Still Feeling Unsure?</h2>
          <p className="text-lg mb-6 max-w-2xl">Our team is ready to provide personalized guidance for your pre-departure preparations and first steps in Europe.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Get Personalized Assistance
          </Link>
        </section>
      </main>
    </div>
  );
}

export default PreDeparturePage;
