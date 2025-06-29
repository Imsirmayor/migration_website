import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Import the new AccordionItem component

// --- SVG Icons (for consistency and ease of use) ---
const icons = {
  // Financial Icons
  moneyBag: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
    </svg>
  ),
  scholarship: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" />
    </svg>
  ),
  budget: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0c-2.5 0-4.5-2-4.5-4.5S9.5 7 12 7s4.5 2 4.5 4.5S14.5 16 12 16z" />
    </svg>
  ),
  loan: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V3H7v6M3 15h18M12 3v12" />
    </svg>
  ),
  template: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.25c-5.32 0-9.663 4.066-9.945 9.394a11.97 11.97 0 000 2.214c.282 5.328 4.625 9.394 9.945 9.394 2.862 0 5.5-1.146 7.419-3.048A11.953 11.953 0 0012 21.75c5.32 0 9.663-4.066 9.945-9.394a11.97 11.97 0 000-2.214C21.618 6.066 17.275 2 12 2z" />
    </svg>
  ),
  guide: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.096v11.808M3.25 12h17.5M12 2.25L4 8v8l8 6 8-6V8l-8-5.75z" />
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  // General icons for AccordionItem
  searchIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  currencyIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121a3 3 0 11-4.242-4.242m4.242 4.242L15 15m-4.242-4.242l-.75-.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm-7.5 0c0-2.071 1.679-3.75 3.75-3.75S15 9.179 15 11.25S13.321 15 11.25 15 7.5 13.321 7.5 11.25z" />
    </svg>
  ),
  budgetingIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a2 2 0 012-2h.01M15 10a2 2 0 012-2h.01M12 6V4m0 0V2m0 20v-2m0-2h.01M3 15h2m0-4h2m0-4h2M19 15h2m0-4h2m0-4h2" />
    </svg>
  ),
  platformIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0015.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

// --- Dummy Data for Financial Resources ---
const allFinancialResources = [
  {
    id: 1,
    title: "Global Scholarships List 2025-2026",
    type: "Guide",
    fileSize: "PDF (2.5 MB)",
    description: "A comprehensive list of scholarships available for international students across various disciplines and countries.",
    icon: icons.scholarship,
    downloadLink: "/assets/downloads/global_scholarships_list.pdf",
    imageUrl: "/assets/images/resource_card_placeholder_scholarship.jpg", // Example
    topic: ["Scholarships", "Funding"],
    documentType: "Guide"
  },
  {
    id: 2,
    title: "Sample Financial Sponsorship Letter",
    type: "Template",
    fileSize: "DOCX (0.5 MB)",
    description: "Editable template for a financial sponsorship letter to support your visa application.",
    icon: icons.template,
    downloadLink: "/assets/downloads/sample_sponsorship_letter.docx",
    imageUrl: "/assets/images/Sponsorship_Letter.png", // Example
    topic: ["Funding", "Loans"],
    documentType: "Template"
  },
  {
    id: 3,
    title: "Student Budgeting Guide for Europe",
    type: "Guide",
    fileSize: "PDF (1.8 MB)",
    description: "Detailed guide on creating and managing your budget, including average living costs in European cities.",
    icon: icons.budget,
    downloadLink: "/assets/downloads/europe_budgeting_guide.pdf",
    imageUrl: "/assets/images/budget.png", // Example
    topic: ["Budgeting"],
    documentType: "Guide"
  },
  {
    id: 4,
    title: "Funding Request Document for Study Projects",
    type: "Template",
    fileSize: "DOCX (0.7 MB)",
    description: "A customizable template for requesting financial support for your academic or research projects.",
    icon: icons.document,
    downloadLink: "/assets/downloads/project_funding_request.docx",
    imageUrl: "/assets/images/Study_Projects.png", // Example
    topic: ["Funding"],
    documentType: "Template"
  },
  {
    id: 5,
    title: "Guide to Securing Research Funding in Austria",
    type: "Guide",
    fileSize: "PDF (1.2 MB)",
    description: "Tips and resources for finding and applying for research grants in Austrian universities and institutions.",
    icon: icons.guide,
    downloadLink: "/assets/downloads/austria_research_funding.pdf",
    imageUrl: "/assets/images/Research_Funding.png", // Example
    topic: ["Scholarships", "Funding"],
    documentType: "Guide"
  },
  {
    id: 6,
    title: "Student Loan Options: International Comparison",
    type: "Guide",
    fileSize: "PDF (2.0 MB)",
    description: "Compares student loan options from various countries and international lenders, specifically for non-EU students.",
    icon: icons.loan,
    downloadLink: "/assets/downloads/student_loan_options.pdf",
    imageUrl: "/assets/images/Loan_Options.png", // Example
    topic: ["Loans", "Funding"],
    documentType: "Guide"
  },
];

// --- Dummy Data for Guidance Sections (Accordions) ---
const financialGuidanceSections = [
  {
    id: 'types-of-funding',
    title: 'Types of Funding Available',
    icon: icons.moneyBag,
    content: `
      <p>Explore various avenues to finance your international education:</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li><strong>Scholarships & Grants:</strong> Non-repayable funds based on merit, need, or specific criteria.</li>
        <li><strong>Student Loans:</strong> Funds that need to be repaid, often with interest, from government or private lenders.</li>
        <li><strong>Part-time Jobs:</strong> Work opportunities available to international students, subject to visa regulations.</li>
        <li><strong>University Aid:</strong> Specific financial support offered directly by institutions.</li>
      </ul>
    `,
  },
  {
    id: 'applying-for-scholarships',
    title: 'Applying for Scholarships: Best Practices',
    icon: icons.scholarship,
    content: `
      <p>Maximize your chances of securing scholarships:</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Start early and research thoroughly.</li>
        <li>Check eligibility criteria carefully.</li>
        <li>Tailor your application, essay, and CV to each scholarship.</li>
        <li>Highlight your achievements, leadership, and relevant experiences.</li>
        <li>Prepare for interviews if required.</li>
      </ul>
      <p class="mt-2">Download our <span class="font-semibold text-ga-primary-blue">Scholarship Application Checklist</span> for more details.</p>
    `,
  },
  {
    id: 'managing-budget-abroad',
    title: 'Managing Your Budget Abroad',
    icon: icons.budgetingIcon,
    content: `
      <p>Effective budgeting is key to financial stability overseas:</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li><strong>Pre-departure Budgeting:</strong> Plan for initial costs like visa fees, flights, and first month's rent/deposit.</li>
        <li><strong>Living Costs:</strong> Research average expenses for rent, food, transport, and leisure in your chosen city.</li>
        <li><strong>Expense Tracking:</strong> Use apps or spreadsheets to monitor your spending.</li>
        <li><strong>Saving Strategies:</strong> Cook at home, use public transport, find student discounts.</li>
      </ul>
      <p class="mt-2">Our <span class="font-semibold text-ga-primary-blue">Europe Living Costs Calculator</span> can help you estimate.</p>
    `,
  },
  {
    id: 'financial-aid-international',
    title: 'Financial Aid for International Students',
    icon: icons.moneyBag,
    content: `
      <p>International students might be eligible for specific aid:</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Some countries offer limited government grants or student loans to non-residents.</li>
        <li>University-specific aid packages (grants, tuition waivers) are common.</li>
        <li>Research programs and foundations that specifically support international students.</li>
        <li>Understand tax implications on any income or aid received.</li>
      </ul>
    `,
  },
  {
    id: 'exchange-rates-transfers',
    title: 'Understanding Exchange Rates & Transfers',
    icon: icons.currencyIcon,
    content: `
      <p>Minimize costs when moving money internationally:</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Compare exchange rates and fees across different transfer services (banks, Wise, Revolut).</li>
        <li>Consider multi-currency accounts for better flexibility.</li>
        <li>Be aware of dynamic currency conversion (DCC) when paying by card abroad.</li>
        <li>Transfer larger sums less frequently to save on transaction fees.</li>
      </ul>
    `,
  },
];

// --- Dummy Data for Reliable Platforms ---
const reliablePlatforms = [
  { name: "ScholarshipPortal", logo: "/assets/icons/scholarshipportal.svg", link: "https://www.scholarshipportal.com/" },
  { name: "DAAD", logo: "/assets/icons/daad.svg", link: "https://www.daad.de/en/" },
  { name: "Studyportals", logo: "/assets/icons/studyportals.svg", link: "https://www.studyportals.com/" },
  { name: "Chegg", logo: "/assets/icons/chegg.svg", link: "https://www.chegg.com/scholarships" },
  { name: "Finaid", logo: "/assets/icons/finaid.svg", link: "https://finaid.org/" },
];

// --- Dummy Data for FAQs ---
const financialFAQs = [
  {
    id: 'faq1',
    question: 'How much money do I need to study in Austria/Europe?',
    answer: `
      <p>The required amount varies significantly by city and country. For visa purposes, you often need to show proof of financial means, typically ranging from €700 to €1,000 per month for living expenses, plus tuition fees. Vienna and Munich are generally more expensive than Graz or smaller cities.</p>
      <p class="mt-2">Refer to our <span class="font-semibold text-ga-primary-blue">Student Budgeting Guide for Europe</span> for detailed estimates.</p>
    `,
  },
  {
    id: 'faq2',
    question: 'Can international students get student loans in Europe?',
    answer: `
      <p>It's challenging but not impossible. Some European countries offer government-backed loans only to EU citizens or long-term residents. However, there are private international lenders or specialized loan programs for specific nationalities or fields of study. Always check eligibility carefully.</p>
    `,
  },
  {
    id: 'faq3',
    question: 'What is a blocked account and do I need one?',
    answer: `
      <p>A blocked account is a special bank account where you deposit a certain amount of money (e.g., around €11,208 for Germany for a year) that you can only withdraw monthly. It's primarily required by Germany for student visas and sometimes by other countries like Austria (though less common for Austria than a financial guarantee letter). It serves as proof that you have sufficient funds to cover your living expenses.</p>
    `,
  },
  {
    id: 'faq4',
    question: 'Are there scholarships for living expenses?',
    answer: `
      <p>Yes, many scholarships cover not only tuition fees but also living expenses (stipends). These are often more competitive. Look for full scholarships, university-specific grants, or government-funded programs like Erasmus+ which typically include living allowances.</p>
    `,
  },
];


// --- Main FinancialPage Component ---
function FinancialPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    documentType: [],
    topic: [],
  });
  const [filteredResources, setFilteredResources] = useState(allFinancialResources);

  // Filter logic
  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFiltered = allFinancialResources.filter(resource => {
      const matchesSearch = lowercasedSearchTerm === '' ||
                            resource.title.toLowerCase().includes(lowercasedSearchTerm) ||
                            resource.description.toLowerCase().includes(lowercasedSearchTerm);

      const matchesDocType = filters.documentType.length === 0 || filters.documentType.includes(resource.documentType);
      
      const matchesTopic = filters.topic.length === 0 || 
                           (resource.topic && resource.topic.some(t => filters.topic.includes(t)));

      return matchesSearch && matchesDocType && matchesTopic;
    });
    setFilteredResources(newFiltered);
  }, [searchTerm, filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => {
      const currentValues = prevFilters[filterName];
      if (currentValues.includes(value)) {
        return { ...prevFilters, [filterName]: currentValues.filter(item => item !== value) };
      } else {
        return { ...prevFilters, [filterName]: [...currentValues, value] };
      }
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({ documentType: [], topic: [] });
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px] w-full bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/financial_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-lg"></div> {/* Subtle overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Unlock Your Potential: Financial Resources for Global Scholars</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Your essential guide to securing funding, managing budgets, and thriving financially during your study and migration journey in Europe.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Resource Search & Filter Section */}
        <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-ga-neutral-800 mb-4">Find Financial Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Keywords</label>
              <input
                type="text"
                id="search"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue transition-all duration-200 shadow-sm"
                placeholder="e.g., scholarship, budget, loan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Document Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
              <div className="flex flex-wrap gap-2">
                {['Guide', 'Template', 'Video', 'PDF'].map(type => (
                  <button
                    key={type}
                    onClick={() => handleFilterChange('documentType', type)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200
                                ${filters.documentType.includes(type) ? 'bg-ga-primary-blue text-white' : 'bg-gray-200 text-ga-neutral-800 hover:bg-gray-300'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
              <div className="flex flex-wrap gap-2">
                {['Scholarships', 'Funding', 'Budgeting', 'Loans'].map(topic => (
                  <button
                    key={topic}
                    onClick={() => handleFilterChange('topic', topic)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200
                                ${filters.topic.includes(topic) ? 'bg-ga-primary-blue text-white' : 'bg-gray-200 text-ga-neutral-800 hover:bg-gray-300'}`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-ga-secondary-red text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Resource Listings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6">Available Financial Resources ({filteredResources.length})</h2>
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResources.map(resource => (
                <div key={resource.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col">
                  <div className="relative h-48 w-full">
                    {/* Fallback to generic icon if imageUrl is not available or loads with error */}
                    <img src={resource.imageUrl} alt={resource.title} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E5E7EB/4B5563?text=Resource'; }} />
                    <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-ga-primary-blue">
                      {resource.icon || icons.document} {/* Use specific icon or generic document icon */}
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-ga-neutral-800 mb-2 line-clamp-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{resource.type} | {resource.fileSize}</p>
                    <p className="text-gray-700 text-sm line-clamp-3 mb-4">{resource.description}</p>
                    <div className="mt-auto">
                      <a href={resource.downloadLink} download className="inline-block bg-ga-primary-blue text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-md">
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg py-10">No financial resources found matching your criteria.</p>
          )}
        </section>

        {/* Guidance & Comprehensive Tips Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Your Financial Journey: Guides & Tips</h2>
          <div className="space-y-4">
            {financialGuidanceSections.map(section => (
              <AccordionItem
                key={section.id}
                title={section.title}
                content={section.content}
                icon={section.icon}
              />
            ))}
          </div>
        </section>

        {/* Reliable Platforms Showcase */}
        <section className="mb-12 bg-gray-50 p-8 rounded-xl shadow-inner text-center">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-8">Trusted Financial Platforms</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {reliablePlatforms.map(platform => (
              <a key={platform.name} href={platform.link} target="_blank" rel="noopener noreferrer"
                 className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                <img src={platform.logo} alt={platform.name} className="h-16 object-contain mb-2" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x40/E5E7EB/4B5563?text=Logo'; }} />
                <span className="text-sm font-semibold text-gray-700">{platform.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials / FAQs Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">FAQs About Funding Your Studies</h2>
          <div className="space-y-4">
            {financialFAQs.map(faq => (
              <AccordionItem
                key={faq.id}
                title={faq.question}
                content={faq.answer}
                icon={icons.searchIcon} // Using a generic search/question icon for FAQs
              />
            ))}
          </div>
          {/* Testimonials Carousel (Placeholder - integration with react-slick needed if fully dynamic) */}
          <div className="mt-12 text-center bg-gray-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-2xl font-bold text-ga-neutral-800 mb-4">What Our Scholars Say</h3>
            <div className="italic text-gray-600">
              <p>"The financial resources here were a game-changer! I found the scholarship I needed thanks to Travelling Scholars." - Elena K., Student from Italy</p>
              <p className="mt-2">"Budgeting advice made moving to Vienna so much less stressful. Highly recommend their guides." - David C., Student from Canada</p>
            </div>
            {/* Integrate react-slick here if you want a carousel */}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Financial Advice?</h2>
          <p className="text-lg mb-6 max-w-2xl">Our experts are here to help you navigate complex financial aid options and build a solid plan for your international education.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Book a Financial Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}

export default FinancialPage;
