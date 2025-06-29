import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// Helper for parsing SVG string to React component (needed for AccordionItem icon)
const renderSvg = (svgString, wrapperClassName = '') => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} className={wrapperClassName} />;
};

// SVG Icon for FAQs (e.g., a question mark or info circle)
const faqIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h9.75a.75.75 0 01.75.75v11.25a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 1.5l1.5 1.5M12 1.5l-1.5 1.5M9 1.5L7.5 3M15 6.75h-9M18 6.75h-2.25" /></svg>';


// --- START: Expanded FAQs Data ---
const faqsData = [
  // General Study Abroad
  {
    id: 'faq-general-1',
    question: 'Why should I choose Austria or Europe for my studies?',
    answer: `
      <p>Europe offers world-class education, diverse cultures, strong research opportunities, and vibrant student cities. Austria, in particular, is known for its high quality of life, beautiful nature, rich history, and affordable tuition fees at public universities (especially for EU/EEA citizens, and often reasonable for others).</p>
    `,
  },
  {
    id: 'faq-general-2',
    question: 'What are the general eligibility criteria for European universities?',
    answer: `
      <p>Typically, you need a high school diploma (for Bachelor's) or a Bachelor's degree (for Master's/PhD) recognized in Europe. Language proficiency (English or local language), academic transcripts, and a strong motivation letter are usually required. Specific requirements vary greatly by program and university.</p>
    `,
  },
  {
    id: 'faq-general-3',
    question: 'How much does it cost to study in Austria/Europe?',
    answer: `
      <p>Tuition fees at public universities in Austria are often very low or free for EU/EEA students and generally affordable (e.g., around €726 per semester for non-EU/EEA students). Living costs vary by city, ranging from €700-€1,000 per month for essentials. Private universities are significantly more expensive.</p>
    `,
  },
  // Visa & Immigration
  {
    id: 'faq-visa-1',
    question: 'How can I apply for a student visa?',
    answer: `
      <p>The student visa application process varies by country. Generally, you'll need an acceptance letter from an accredited institution, proof of sufficient funds, a valid passport, proof of health insurance, and sometimes a medical examination and police clearance. We recommend checking our detailed country-specific visa guides for precise requirements and applying well in advance.</p>
    `,
  },
  {
    id: 'faq-visa-2',
    question: 'What is a "blocked account" and do I need one?',
    answer: `
      <p>A blocked account is a special bank account where you deposit a set amount of money (e.g., over €11,200 for Germany per year) that you can only withdraw monthly. It serves as proof of financial means for your visa. Germany widely requires it for student visas, while Austria typically requires other forms of financial proof (e.g., bank statements, financial guarantee letters).</p>
    `,
  },
  {
    id: 'faq-visa-3',
    question: 'Can I extend my student visa/residence permit?',
    answer: `
      <p>Yes, student visas/residence permits can usually be extended if you continue your studies. You typically need to apply for an extension at the local immigration office before your current permit expires, providing proof of enrollment, academic progress, and continued financial means.</p>
    `,
  },
  // Financial & Scholarships
  {
    id: 'faq-finance-1',
    question: 'What are the requirements for scholarships?',
    answer: `
      <p>Scholarship requirements differ significantly based on the scholarship type, provider, and target audience. Common criteria include academic merit, financial need, specific fields of study, nationality, and extracurricular activities. Always read the scholarship guidelines carefully and tailor your application.</p>
    `,
  },
  {
    id: 'faq-finance-2',
    question: 'Are there scholarships that cover full tuition and living expenses?',
    answer: `
      <p>Yes, "full scholarships" or "fully funded scholarships" exist and cover both tuition and living costs. These are highly competitive but can be found through university-specific programs, national scholarship bodies (like DAAD for Germany), or international organizations.</p>
    `,
  },
  {
    id: 'faq-finance-3',
    question: 'Can I get a student loan as an international student in Europe?',
    answer: `
      <p>Obtaining student loans as an international student (especially non-EU/EEA) can be challenging. Some European countries or universities offer limited loan programs for international students, but most require a local co-signer or proof of strong credit history within the EU. Explore international private lenders as an alternative.</p>
    `,
  },
  // Accommodation
  {
    id: 'faq-accom-1',
    question: 'How do I find accommodation in Europe?',
    answer: `
      <p>Accommodation options include on-campus dormitories, private apartments, shared housing (WGs), and hostels. Start your search early (3-6 months before arrival). Use university housing services, reputable online platforms (e.g., Uniplaces, HousingAnywhere), and local real estate agents.</p>
    `,
  },
  {
    id: 'faq-accom-2',
    question: 'What is a "Meldezettel" and do I need it in Austria?',
    answer: `
      <p>A "Meldezettel" is a mandatory residence registration form in Austria that you must complete within three days of moving into new accommodation. Yes, it is absolutely required for all residents, including international students. Your landlord can often help you with this process.</p>
    `,
  },
  // Work & Career
  {
    id: 'faq-work-1',
    question: 'Can I work while studying abroad?',
    answer: `
      <p>Many countries allow international students to work part-time during their studies (e.g., 20 hours/week) and full-time during breaks. However, there are usually restrictions on the type of employment and maximum hours. Always check the specific visa regulations for your study destination.</p>
    `,
  },
  {
    id: 'faq-work-2',
    question: 'How do I find a student job or internship in Europe?',
    answer: `
      <p>Utilize university career services, online job portals (e.g., Jobmensa, StudentJob), dedicated internship platforms (e.g., Erasmus Intern, AIESEC), and network at career fairs. Having some proficiency in the local language can significantly boost your chances.</p>
    `,
  },
  // Health & Wellbeing
  {
    id: 'faq-health-1',
    question: 'Do I need health insurance for my studies in Europe?',
    answer: `
      <p>Yes, health insurance is mandatory for all international students in Europe. You'll typically need travel health insurance for your initial arrival period, followed by local health insurance upon enrollment, which can be public or private depending on your status and the country's system.</p>
    `,
  },
  {
    id: 'faq-health-2',
    question: 'What should I do in a medical emergency in Europe?',
    answer: `
      <p>In the event of a life-threatening emergency in any EU country, dial the universal emergency number <strong>112</strong> for immediate assistance (police, fire, ambulance). For non-emergencies, contact your registered general practitioner or visit an after-hours clinic.</p>
    `,
  },
  // Cultural Integration
  {
    id: 'faq-culture-1',
    question: 'How can I adapt to a new culture and make friends?',
    answer: `
      <p>Be open-minded, proactive in joining university clubs/events, attend orientation programs, try learning basic local phrases, and seek out local community activities. Many universities have international student associations (like ESN) that organize social events.</p>
    `,
  },
  {
    id: 'faq-culture-2',
    question: 'What are common social etiquettes in Austria/Europe?',
    answer: `
      <p>Punctuality is generally highly valued. Greetings often involve handshakes. Learn about formal ('Sie'/'vous') vs. informal ('du'/'tu') address. Tipping customs vary, often less than in North America. Be mindful of quiet hours, especially in residential areas.</p>
    `,
  },
];
// --- END: Expanded FAQs Data ---


function FAQsPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/faq_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Frequently Asked Questions
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Your Questions, Answered</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Browse our comprehensive FAQs for quick answers to common inquiries about studying and migrating abroad.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map(faq => (
            <AccordionItem
              key={faq.id}
              title={faq.question}
              content={faq.answer}
              icon={renderSvg(faqIcon, 'text-ga-primary-blue')} // Using the common FAQ icon
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default FAQsPage;
