import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// --- START: Internal Data and Helper Functions ---

// Helper for parsing SVG string to React component
// It takes the SVG string and an optional className to apply to the wrapping div.
const renderSvg = (svgString, wrapperClassName = '') => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} className={wrapperClassName} />;
};

// SVG Icons for categories and document types (using inline SVGs for convenience)
// IMPORTANT: Removed 'className="w-X h-Y"' from SVG strings here. Sizes will be controlled externally.
const healthIcons = {
  // General Health/Wellbeing
  healthGuide: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3-3v6m-6-3a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>',
  
  // Winter Prep
  winterClothing: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75v3m0 0a3 3 0 00-3-3H4.5M9 12.75a3 3 0 013 3h.01M15 12.75v3m0 0a3 3 0 003-3h1.5M15 12.75a3 3 0 01-3 3h-.01M9 7.5a3 3 0 013-3h.01M15 7.5a3 3 0 00-3-3h-.01M9 16.5a3 3 0 013-3h.01M15 16.5a3 3 0 00-3-3h-.01M3.75 6.75h16.5M3.75 17.25h16.5M12 3v18" /></svg>', // Sweater/Warmth
  
  // Insurance
  insurancePolicy: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Checkmark/Policy
  hospital: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5h15M12 18V6m-8.25 4.5V18a2.25 2.25 0 002.25 2.25h11.5a2.25 2.25 0 002.25-2.25V10.5m-18 0h18" /></svg>', // Hospital symbol
  
  // Doctor/GP
  doctor: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h9.75a.75.75 0 01.75.75v11.25a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 1.5l1.5 1.5M12 1.5l-1.5 1.5M9 1.5L7.5 3M15 6.75h-9M18 6.75h-2.25" /></svg>', // Medical bag
  
  // General Accordion/FAQ icons
  info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.036.84-1.875 1.875-1.875h14.25c1.036 0 1.875.84 1.875 1.875v10.5a1.875 1.875 0 01-1.875 1.875H4.125A1.875 1.875 0 012.25 17.25V6.75zM2.25 6.75h17.5M12 10.5V17m-6-6h12" /></svg>',
};

// --- Content for Main Sections ---
const mainSections = [
  {
    id: 'winter-prep',
    heading: 'Embrace the European Winter: Stay Warm and Healthy',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">European winters, especially in Austria, can be beautiful but also very cold if you're not prepared. Proper clothing is essential not just for comfort, but for your health.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Essential Winter Clothing Checklist:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 mb-4">
        <li><strong>Thermal Base Layers:</strong> Moisture-wicking tops and bottoms.</li>
        <li><strong>Mid-Layers:</strong> Fleece or wool sweaters, insulated vests.</li>
        <li><strong>Outerwear:</strong> A high-quality waterproof and windproof winter jacket.</li>
        <li><strong>Warm Trousers:</strong> Lined trousers or ski pants for colder days.</li>
        <li><strong>Warm, Waterproof Boots:</strong> Essential for snow and slush, with good grip.</li>
        <li><strong>Accessories:</strong> Woolen socks, gloves/mittens, warm hat, scarf.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Layering Guide:</h3>
      <p class="text-base text-gray-700 mb-4">The key to staying warm is layering. This allows you to adjust to changing temperatures indoors and outdoors.</p>
      <ol class="list-decimal list-inside space-y-1 text-gray-700">
        <li><strong>Base Layer:</strong> Wicks moisture away from your skin.</li>
        <li><strong>Mid Layer:</strong> Provides insulation and warmth.</li>
        <li><strong>Outer Shell:</strong> Protects from wind, rain, and snow.</li>
      </ol>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Where to Buy:</h3>
      <p class="text-base text-gray-700">Look for outdoor gear shops, department stores, or even second-hand shops for quality and affordable options. Many European cities have excellent second-hand markets for winter clothing.</p>
    `,
    imageUrl: '/assets/images/health/winter_clothing.jpg',
    iconSvg: healthIcons.winterClothing, // Now just the SVG string
  },
  {
    id: 'travel-insurance',
    heading: 'Secure Your Journey: Travel Health Insurance Essentials (Before Departure)',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Travel health insurance is crucial before you even step foot outside your home country. It covers you during your journey and until your local health insurance kicks in upon arrival.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Key Coverage Areas:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Medical Emergencies:</strong> Hospitalization, doctor's visits, emergency dental.</li>
        <li><strong>Medical Evacuation/Repatriation:</strong> Extremely important for serious conditions.</li>
        <li><strong>Trip Cancellation/Interruption:</strong> For unforeseen events affecting your travel plans.</li>
        <li><strong>Lost or Delayed Luggage:</strong> Coverage for your belongings.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Choosing a Plan:</h3>
      <p class="text-base text-gray-700">Consider the duration of your travel, your destination (Schengen Visa requirements), existing medical conditions, and activities planned. Compare different providers for their coverage limits and deductibles.</p>
    `,
    imageUrl: '/assets/images/health/travel_insurance.jpg',
    iconSvg: healthIcons.insurancePolicy, // Now just the SVG string
  },
  {
    id: 'local-insurance',
    heading: 'Integrate Locally: Navigating European Health Systems (Upon Arrival)',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Once you arrive, obtaining local health insurance is usually mandatory and provides comprehensive coverage. Europe typically has public (social security) and private health systems.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Registration Process:</h3>
      <ol class="list-decimal list-inside space-y-1 text-gray-700">
        <li>Enroll at your university/institution.</li>
        <li>Apply for a local health insurance plan (e.g., through OEAD for students in Austria, or a general provider).</li>
        <li>Submit required documents: Visa, passport, acceptance letter, proof of enrollment, residence registration.</li>
        <li>Receive your insurance card/confirmation.</li>
      </ol>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Cost & Coverage:</h3>
      <p class="text-base text-gray-700">Student health insurance is typically affordable, with contributions often around €60-€100 per month. Public insurance usually covers most medical services, including doctor visits, prescriptions, and hospital stays, with minimal co-payments.</p>
    `,
    imageUrl: '/assets/images/health/local_insurance.jpg',
    iconSvg: healthIcons.hospital, // Now just the SVG string
  },
  {
    id: 'doctor-registration',
    heading: 'Your Primary Care: Registering with a General Practitioner',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">In many European countries, including Austria, it's common and recommended to register with a general practitioner (GP) – your primary doctor.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">How to Find a GP:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Ask for recommendations from your university's international office or local friends.</li>
        <li>Use online directories or local health authority websites.</li>
        <li>Look for doctors who speak English if needed.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Booking Appointments & Emergencies:</h3>
      <p class="text-base text-gray-700 mb-4">Appointments are usually booked by phone or online. For non-emergencies, always see your GP first. For life-threatening emergencies, call the emergency number or go to the nearest hospital emergency room.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-1">What to Bring to Appointments:</h4>
      <p class="text-base text-gray-700">Your health insurance card/confirmation, passport/ID, and any relevant medical history documents.</p>
    `,
    imageUrl: '/assets/images/health/doctor_registration.jpg',
    iconSvg: healthIcons.doctor, // Now just the SVG string
  },
];

// --- FAQs Data ---
const healthFAQs = [
  {
    id: 'faq1',
    question: 'What if I get sick during holidays or outside normal doctor hours?',
    answer: `
      <p>For urgent but non-life-threatening issues, most cities have after-hours clinics (Bereitschaftsdienst in Austria) or designated pharmacies open late/on weekends. For emergencies, always call the emergency number or go to a hospital's emergency department.</p>
    `,
  },
  {
    id: 'faq2',
    question: 'Are vaccinations required to study in Europe?',
    answer: `
      <p>Generally, there are no mandatory vaccinations for entry into European countries from most regions. However, it's highly recommended to be up-to-date on routine vaccinations (e.g., MMR, Tetanus, Diphtheria, Pertussis) and to consider specific vaccinations like Hepatitis B or Meningitis, especially for communal living. Consult your doctor before travel.</p>
    `,
  },
  {
    id: 'faq3',
    question: 'Where can I find mental health support?',
    answer: `
      <p>Many universities offer free counseling services for students. Additionally, there are local public health services and private therapists. Your GP can often provide referrals. Don't hesitate to seek support if needed.</p>
    `,
  },
  {
    id: 'faq4',
    question: 'What is the emergency number in Austria/Europe?',
    answer: `
      <p>The universal emergency number in the European Union, including Austria, is <strong>112</strong> for all emergencies (police, fire, ambulance). For specific services in Austria:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li><strong>Fire Department:</strong> 122</li>
        <li><strong>Police:</strong> 133</li>
        <li><strong>Ambulance/Medical Emergency:</strong> 144</li>
      </ul>
      <p class="mt-2">Always use 112 for any situation requiring immediate assistance.</p>
    `,
  },
];

// --- END: Internal Data and Helper Functions ---


function HealthPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/health/health_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-lg"></div> {/* Subtle overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Health & Wellbeing: Your Guide to Thriving in Europe</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Essential tips for staying healthy, happy, and prepared throughout your international study and migration journey.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Main Content Sections */}
        {mainSections.map(section => (
          <section key={section.id} className="mb-12 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">{section.heading}</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src={section.imageUrl} alt={section.heading} className="w-full h-auto object-cover rounded-lg shadow-md" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E5E7EB/4B5563?text=Health+Guide'; }} />
              </div>
              <div className="md:w-1/2">
                {/* Corrected: Apply classes to the div returned by renderSvg */}
                <div className="text-ga-primary-blue mb-4 w-12 h-12"> 
                    {renderSvg(section.iconSvg, "w-full h-full")} 
                </div>
                <div dangerouslySetInnerHTML={{ __html: section.contentHtml }} />
              </div>
            </div>
          </section>
        ))}

        {/* Additional Resources / FAQs Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Additional Resources & FAQs</h2>
          <div className="space-y-4">
            {healthFAQs.map(faq => (
              <AccordionItem
                key={faq.id}
                title={faq.question}
                content={faq.answer}
                // Corrected: Pass the raw SVG string to renderSvg with desired wrapper class
                icon={renderSvg(healthIcons.info, 'text-ga-primary-blue w-6 h-6')} 
              />
            ))}
          </div>
          {/* Emergency Contacts (Optional, but good to highlight) */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow-inner text-center">
            <h3 className="text-2xl font-bold text-ga-neutral-800 mb-4">Emergency Contacts in Europe (112)</h3>
            <p className="text-lg text-gray-700 flex items-center justify-center mb-2">
              {/* Corrected: Pass the raw SVG string to renderSvg with desired wrapper class */}
              <span className="text-ga-secondary-red mr-3 text-2xl w-8 h-8 flex-shrink-0">{renderSvg(healthIcons.phone, "w-full h-full")}</span>
              For all emergencies, dial: <strong className="ml-2 text-ga-primary-blue text-xl">112</strong>
            </p>
            <p className="text-sm text-gray-600">This is the universal emergency number throughout the EU.</p>
            <p className="mt-4 text-sm text-gray-600">
                For specific services in Austria: Police (133), Fire (122), Ambulance (144).
            </p>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Prioritize Your Wellbeing.</h2>
          <p className="text-lg mb-6 max-w-2xl">Need more personalized health guidance or support? Our team is here to help you thrive.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Contact Our Support Team
          </Link>
        </section>
      </main>
    </div>
  );
}

export default HealthPage;

