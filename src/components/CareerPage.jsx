import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// --- START: Internal Data and Helper Functions ---

// Helper for parsing SVG string to React component
const renderSvg = (svgString, wrapperClassName = '') => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} className={wrapperClassName} />;
};

// SVG Icons for various sections and content
// These are raw SVG strings that will be rendered using dangerouslySetInnerHTML
const careerIcons = {
  // Main Section Icons (larger, for headings)
  studentJobs: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L7.25 13.5M7.25 13.5L12.25 18M7.25 13.5L12.25 9M12.25 9L17.25 13.5M17.25 13.5L22.25 18M12.25 9L17.25 4.5M12.25 9L7.25 4.5M12.25 9L12 21M7.5 1.5h9A2.25 2.25 0 0118.75 3.75v16.5A2.25 2.25 0 0116.5 22.5h-9A2.25 2.25 0 014.5 20.25V3.75A2.25 2.25 0 016.75 1.5z" /></svg>', // Briefcase/Job
  internship: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 0h8.25m-8.25 0V6.75m8.25 0v3.75m0 0H21m-3 3l2.25 2.25L21 18m0 0l-2.25 2.25L18 21m0 0l2.25 2.25L21 24m0 0l-2.25-2.25L18 21m0 0l-2.25 2.25L15 24m0 0l2.25-2.25L18 21m0 0l-2.25-2.25L15 18m0 0l2.25 2.25L18 21" /></svg>', // Handshake/Internship
  volunteering: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0z" /></svg>', // Helping hands/Community
  erasmus: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c1.414 0 2.5-1.086 2.5-2.5V10h-5v9.25c0 1.414 1.086 2.5 2.5 2.5zM21 12H3m12-7.5l-3-3m0 0l-3 3M12 2.25V9m-7.5 3h15" /></svg>', // Globe/Exchange
  schools: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" /></svg>', // Academic cap/School
  hackathon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5M10.5 1.5V1.5c-4.305 0-7.818 3.167-7.98 7.216C2.396 11.233 2 12.333 2 13.5c0 1.167.396 2.267.52 3.534.162 4.049 3.675 7.216 7.98 7.216h3C18.605 24 22.118 20.833 22.28 16.784c.124-1.267.52-2.367.52-3.534C22.118 3.167 18.605 0 14.5 0M10.5 1.5H13.5M10.5 1.5c-4.305 0-7.818 3.167-7.98 7.216C2.396 11.233 2 12.333 2 13.5c0 1.167.396 2.267.52 3.534.162 4.049 3.675 7.216 7.98 7.216h3C18.605 24 22.118 20.833 22.28 16.784c.124-1.267.52-2.367.52-3.534C22.118 3.167 18.605 0 14.5 0" /></svg>', // Laptop/Coding

  // General Accordion/Info icons
  info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
};

// Main Content Sections Data
const mainCareerSections = [
  {
    id: 'student-jobs',
    heading: 'Student Jobs: Earning While You Learn',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Many international students work part-time to support themselves and gain local experience. Regulations typically limit work hours (e.g., 20 hours/week during semesters, full-time during holidays).</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Finding Student Jobs:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>University career centers and job boards.</li>
        <li>Online job portals (e.g., Jobmensa, StudentJob, local country-specific sites).</li>
        <li>Local businesses (cafes, restaurants, shops, language schools).</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Work Permits & Visas:</h3>
      <p class="text-base text-gray-700 mb-4">Your student visa specifies your work rights. Always adhere to these regulations to avoid jeopardizing your visa status. You usually don't need a separate work permit for student jobs.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Average Wages:</h3>
      <p class="text-base text-gray-700">Hourly wages for student jobs vary, typically ranging from €10-€15 per hour, depending on the job type and location.</p>
      <a href="https://www.studyinaustria.at/en/study-options/student-jobs" target="_blank" rel="noopener noreferrer" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Learn more about student jobs in Austria</a>
    `,
    imageUrl: '/assets/images/career/student_jobs.jpg',
    iconSvg: careerIcons.studentJobs,
  },
  {
    id: 'internships',
    heading: 'Internships: Gaining Real-World Experience',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Internships are invaluable for gaining practical experience, building your resume, and networking within your chosen field in Europe.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Finding Internships:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>University Career Services:</strong> Often have exclusive listings and partnerships.</li>
        <li><strong>Dedicated Platforms:</strong> Websites like AIESEC, Erasmus Intern, EURES (European Job Mobility Portal).</li>
        <li><strong>Company Websites:</strong> Directly check the career pages of companies you're interested in.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Application Process:</h3>
      <p class="text-base text-gray-700 mb-4">Prepare a tailored CV (often Europass format), a compelling cover letter, and be ready for online assessments or interviews (virtual or in-person).</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Internship Visa Considerations:</h3>
      <p class="text-base text-gray-700">For non-EU/EEA students, an internship might require a specific internship visa or an amendment to your student visa, depending on its duration and whether it's paid. Always check local embassy guidelines.</p>
      <a href="https://erasmusintern.org/" target="_blank" rel="noopener noreferrer" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Explore Erasmus Internships</a>
    `,
    imageUrl: '/assets/images/career/internships.jpg',
    iconSvg: careerIcons.internship,
  },
  {
    id: 'volunteering',
    heading: 'Volunteering: Make an Impact & Expand Your Network',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Volunteering is a fantastic way to contribute to your new community, develop new skills, improve your language, and expand your social and professional network without requiring a work permit.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Finding Opportunities:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Local NGOs (Non-Governmental Organizations) and non-profits.</li>
        <li>Community centers, cultural institutions, and charity organizations.</li>
        <li>University volunteer programs or student societies focused on social causes.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Types of Volunteering:</h3>
      <p class="text-base text-gray-700 mb-4">Opportunities range from environmental protection, animal welfare, social support, assisting at cultural events, or teaching languages.</p>
      <a href="https://www.europeanvoluntaryservice.org/" target="_blank" rel="noopener noreferrer" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Discover European Volunteer Service</a>
    `,
    imageUrl: '/assets/images/career/volunteering.jpg',
    iconSvg: careerIcons.volunteering,
  },
  {
    id: 'erasmus-programs',
    heading: 'Erasmus+: Beyond Academics, A Career Boost',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">The Erasmus+ program is more than just an academic exchange; it's a significant boost to your employability and intercultural skills, highly valued by European employers.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Participation Requirements:</h3>
      <p class="text-base text-gray-700 mb-4">Typically, you must be enrolled in a higher education institution that participates in Erasmus+ and have completed at least your first year of studies.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Career Benefits:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Enhanced Employability:</strong> Studies show Erasmus+ alumni have higher employment rates.</li>
        <li><strong>Improved Language Skills:</strong> Direct exposure to foreign languages.</li>
        <li><strong>Intercultural Competence:</strong> Adapting to new cultures and working in diverse teams.</li>
        <li><strong>Global Network:</strong> Building connections with peers and professionals worldwide.</li>
      </ul>
      <a href="https://erasmus-plus.ec.europa.eu/node/2" target="_blank" rel="noopener noreferrer" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Visit Official Erasmus+ Website</a>
    `,
    imageUrl: '/assets/images/career/erasmus.jpg',
    iconSvg: careerIcons.erasmus,
  },
  {
    id: 'winter-summer-schools',
    heading: 'Specialized Learning: Winter & Summer Schools',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Short-term winter and summer schools offer intensive learning experiences, skill acquisition, and networking opportunities during academic breaks.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Finding Programs:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Directly on university websites (many offer their own short programs).</li>
        <li>Specialized platforms that list various winter/summer schools across Europe.</li>
        <li>Discipline-specific organizations or professional bodies.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Application Tips:</h3>
      <p class="text-base text-gray-700 mb-4">Pay close attention to application deadlines, program focus, and required language proficiency. Some programs offer scholarships or financial aid.</p>
      <a href="https://www.summerschoolsineurope.eu/" target="_blank" rel="noopener noreferrer" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Explore Summer Schools in Europe</a>
    `,
    imageUrl: '/assets/images/career/winter_summer_schools.jpg',
    iconSvg: careerIcons.schools,
  },
  {
    id: 'hackathons-competitions',
    heading: 'Innovate & Compete: Hackathons and Competitions',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Participation in hackathons and academic competitions is an excellent way to apply your skills, innovate, and connect with industry professionals and future employers.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Finding Events:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Online platforms (e.g., Devpost, Challenge.gov).</li>
        <li>University tech clubs and entrepreneurship centers.</li>
        <li>Industry-specific events and conferences.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2 mt-4">Benefits:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Skill Development:</strong> Rapidly improve problem-solving, coding, and teamwork skills.</li>
        <li><strong>Networking:</strong> Meet recruiters, mentors, and fellow innovators.</li>
        <li><strong>Resume Building:</strong> Prizes, recognition, and project experience are great resume boosters.</li>
        <li><strong>Exposure:</strong> Get direct exposure to companies and real-world challenges.</li>
      </ul>
      <a href="https://devpost.com/hackathons" target="_blank" rel="noopener noreferrer" class="text-ga-primary-blue hover:underline font-semibold mt-4 inline-block">Find Hackathons on Devpost</a>
    `,
    imageUrl: '/assets/images/career/hackathons.jpg',
    iconSvg: careerIcons.hackathon,
  },
];

// FAQs Data for Career Page
const careerFAQs = [
  {
    id: 'faq1',
    question: 'Can I work full-time on a student visa in Europe?',
    answer: `
      <p>Generally, student visas in most European countries only permit part-time work during the academic semester (e.g., up to 20 hours per week). Full-time work is usually allowed only during official academic breaks/holidays.</p>
    `,
  },
  {
    id: 'faq2',
    question: 'How important is networking for student jobs/internships?',
    answer: `
      <p>Networking is highly important. Many opportunities, especially internships and entry-level jobs, are found through connections, university career fairs, or professional events. Building relationships can open doors not advertised publicly.</p>
    `,
  },
  {
    id: 'faq3',
    question: 'Do I need to speak the local language for a student job?',
    answer: `
      <p>It depends on the job. For customer-facing roles, local language proficiency is often required. However, many roles in international environments, universities, or certain tech/research fields may only require English.</p>
    `,
  },
  {
    id: 'faq4',
    question: 'What\'s the difference between a student job and an internship?',
    answer: `
      <p>A student job (part-time job) is primarily for earning income and can be in any sector. An internship is typically more structured, directly related to your field of study, and focused on professional development and learning specific skills relevant to your career path.</p>
    `,
  },
];

// --- END: Internal Data and Helper Functions ---


function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/career/career_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Career & Student Jobs: Unlock Your Professional Future in Europe</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Navigate student employment, internships, and professional development pathways for a successful career journey abroad.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Main Content Sections (Opportunities) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-8 text-center">Explore Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCareerSections.map(section => (
              <div key={section.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-[1.02] flex flex-col items-center text-center">
                <div className="text-ga-primary-blue mb-4">
                  {/* Ensure renderSvg is called here with the string iconSvg */}
                  {renderSvg(section.iconSvg, "w-16 h-16")} {/* Larger icons for main topics */}
                </div>
                <h3 className="text-xl font-bold text-ga-neutral-800 mb-3">{section.heading}</h3>
                <img src={section.imageUrl} alt={section.heading} className="w-full h-40 object-cover rounded-md mb-4 shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x160/E5E7EB/4B5563?text=Career+Opportunity'; }} />
                <div className="text-sm text-gray-700 flex-grow" dangerouslySetInnerHTML={{ __html: section.contentHtml }} />
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Common Questions About Career & Student Jobs</h2>
          <div className="space-y-4">
            {careerFAQs.map(faq => (
              <AccordionItem
                key={faq.id}
                title={faq.question}
                content={faq.answer}
                icon={renderSvg(careerIcons.info, 'text-ga-primary-blue w-6 h-6')} // Using info icon
              />
            ))}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to launch your European career?</h2>
          <p className="text-lg mb-6 max-w-2xl">Get personalized guidance from our experts to secure student jobs, internships, and advance your professional future abroad.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Get Career Guidance
          </Link>
        </section>
      </main>
    </div>
  );
}

export default CareerPage;
