import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// --- START: Internal Data and Helper Functions ---

// Helper for parsing SVG string to React component
const renderSvg = (svgString, wrapperClassName = '') => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} className={wrapperClassName} />;
};

// SVG Icons for various sections and content
const visaIcons = {
  // Main Section Icons
  studentVisa: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-3 3-3-3m0 6h6m-3-6v9m-4.5-9v4.5a3 3 0 003 3H12V21h3a2 2 0 002-2v-2a2 2 0 00-2-2h-3v-3h3a2 2 0 002-2v-2a2 2 0 00-2-2H12a2 2 0 00-2 2v2a2 2 0 002 2h3m-4.5-9h6" /></svg>', // Visa/Document icon
  workPermit: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 18H7.5m-3-6h.008v.008H3.75V12zm0 0c0 1.5.659 3 1.5 3h1.5c.841 0 1.5-1.5 1.5-3s-.659-3-1.5-3h-1.5c-.841 0-1.5 1.5-1.5 3z" /></svg>', // Briefcase/Work
  residencePermit: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h9.75a.75.75 0 01.75.75v11.25a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 1.5l1.5 1.5M12 1.5l-1.5 1.5M9 1.5L7.5 3M15 6.75h-9M18 6.75h-2.25" /></svg>', // ID Card
  documentChecklist: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Checklist icon

  // General Accordion/Info icons
  info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
};

// Main Content Sections Data
const visaSections = [
  {
    id: 'student-visa',
    heading: 'Student Visas: Your Gateway to Education',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">The student visa is your primary requirement for long-term studies in Europe. The application process is meticulous but manageable with proper preparation.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Key Requirements:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>University Acceptance Letter:</strong> Official confirmation of enrollment from a recognized European institution.</li>
        <li><strong>Proof of Financial Means:</strong> Demonstrating sufficient funds for your living expenses (e.g., blocked account, bank statements, scholarship letters).</li>
        <li><strong>Valid Passport:</strong> Must be valid for at least 6 months beyond your intended stay.</li>
        <li><strong>Health Insurance:</strong> Proof of comprehensive medical coverage valid in Europe.</li>
        <li><strong>Accommodation Proof:</strong> Confirmation of housing in your study city.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Application Process:</h3>
      <p class="text-base text-gray-700">Typically involves online application, document submission to the embassy/consulate in your home country, and an interview.</p>
      <a href="/legal-docs" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Find detailed visa document checklists here</a>
    `,
    imageUrl: '/assets/images/student_visa.png',
    iconSvg: visaIcons.studentVisa,
  },
  {
    id: 'work-permit',
    heading: 'Work Permits & Student Job Rights',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">While studying, many countries allow international students to work part-time. Understanding work permit nuances is crucial.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">General Regulations:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Most student visas allow up to 20 hours/week during semesters and full-time during breaks.</li>
        <li>Some countries have annual work hour limits (e.g., 120 full days or 240 half days in Germany/Austria for non-EU/EEA).</li>
        <li>Usually, no separate work permit is needed for student jobs, but check specific national laws.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Post-Study Work Permits:</h3>
      <p class="text-base text-gray-700">Many European countries offer options for international graduates to stay and seek employment after completing their studies. This typically requires applying for a job-seeker visa or a post-study work permit.</p>
      <a href="/career" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Explore career opportunities and work rights further</a>
    `,
    imageUrl: '/assets/images/work_permit.png',
    iconSvg: visaIcons.workPermit,
  },
  {
    id: 'residence-permit',
    heading: 'Residence Permits: Your Legal Stay in Europe',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">For stays longer than 90 days, your student visa will often be converted into a residence permit (Aufenthaltstitel in Austria) upon arrival.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Application & Renewal:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Apply at the local immigration authority (e.g., MA 35 in Vienna) within your first few weeks.</li>
        <li>Requirements are similar to the visa application: proof of study, finances, insurance, accommodation, and a valid travel document.</li>
        <li>Renewals are done annually or bi-annually, usually requiring proof of academic progress.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Registration (Meldezettel):</h3>
      <p class="text-base text-gray-700">In Austria, you must register your address with the local municipal office (Meldeamt) within 3 days of moving into new accommodation. This is a crucial step for your residence permit application.</p>
      <a href="/accommodation" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Find more information on accommodation & registration</a>
    `,
    imageUrl: '/assets/images/residence_permit.png',
    iconSvg: visaIcons.residencePermit,
  },
];

// FAQs Data for Visa & Documents Page
const visaFAQs = [
  {
    id: 'faq-visa-1',
    question: 'How long does the visa application process take?',
    answer: `
      <p>Processing times vary widely by country and embassy/consulate, typically ranging from 4-12 weeks. It's highly recommended to apply as early as possible, ideally 3-6 months before your planned departure.</p>
    `,
  },
  {
    id: 'faq-visa-2',
    question: 'Can I apply for a visa without an acceptance letter?',
    answer: `
      <p>No, an official acceptance letter or proof of enrollment from a recognized educational institution is almost always a mandatory requirement to apply for a student visa.</p>
    `,
  },
  {
    id: 'faq-visa-3',
    question: 'What happens if my visa application is rejected?',
    answer: `
      <p>If your visa is rejected, you will usually receive a refusal letter stating the reasons. You may have the right to appeal the decision or reapply with corrected information. It's advisable to seek professional guidance in such cases.</p>
    `,
  },
  {
    id: 'faq-visa-4',
    question: 'Do I need to get my documents translated and apostilled?',
    answer: `
      <p>Many official documents (e.g., birth certificates, academic transcripts, police clearance certificates) will need to be translated into the official language of the destination country by a sworn/certified translator. Some countries also require an apostille or legalization to certify the authenticity of the document.</p>
    `,
  },
];

// --- END: Internal Data and Helper Functions ---


function VisaDocumentsPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/visa_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Visa & Documents Guide
        </h1>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Your Essential Roadmap to Legal Stay</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Navigate the complexities of European visas and required documents with our comprehensive guides and expert insights.
        </p>

        {/* Main Content Sections (Visa Types & Requirements) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-8 text-center">Understanding Visa Types & Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaSections.map(section => (
              <div key={section.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-[1.02] flex flex-col items-center text-center">
                <div className="text-ga-primary-blue mb-4">
                  {renderSvg(section.iconSvg, "w-16 h-16")} {/* Larger icons for main topics */}
                </div>
                <h3 className="text-xl font-bold text-ga-neutral-800 mb-3">{section.heading}</h3>
                <img src={section.imageUrl} alt={section.heading} className="w-full h-40 object-cover rounded-md mb-4 shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x160/E5E7EB/4B5563?text=Visa+Guide'; }} />
                <div className="text-sm text-gray-700 flex-grow" dangerouslySetInnerHTML={{ __html: section.contentHtml }} />
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Common Questions About Visas & Documents</h2>
          <div className="space-y-4">
            {visaFAQs.map(faq => (
              <AccordionItem
                key={faq.id}
                title={faq.question}
                content={faq.answer}
                icon={renderSvg(visaIcons.info, 'text-ga-primary-blue w-6 h-6')}
              />
            ))}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Visa Guidance?</h2>
          <p className="text-lg mb-6 max-w-2xl">Our experts can provide tailored advice for your specific visa application and documentation needs.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Get Visa Support
          </Link>
        </section>
      </main>
    </div>
  );
}

export default VisaDocumentsPage;
