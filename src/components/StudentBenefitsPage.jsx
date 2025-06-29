import React from 'react';
import { Link } from 'react-router-dom';
// No Navbar or Footer import needed, as they are handled by App.jsx at the global level

// --- START: Internal Data for Student Benefits ---
const benefitsData = [
  {
    id: 1,
    title: "Student Discounts & Offers",
    description: "Access exclusive discounts on transportation, software, entertainment, and retail with your student ID.",
    imageUrl: "https://via.placeholder.com/400x200/F0F0F0/808080?text=Student+Discounts",
    details: [
      { type: "Software:", content: "Adobe Creative Cloud, Microsoft Office" },
      { type: "Travel:", content: "Reduced fares on public transport" },
      { type: "Entertainment:", content: "Cinema, museum, and concert tickets" },
    ],
    learnMoreLink: "#", // Replace with actual link
  },
  {
    id: 2,
    title: "Dedicated Student Support Services",
    description: "Universities and local organizations offer a wide range of support, from academic advising to mental health services.",
    imageUrl: "https://via.placeholder.com/400x200/F8F8F8/808080?text=Student+Support",
    details: [
      { type: "Academic:", content: "Tutoring, writing centers, career counseling" },
      { type: "Personal:", content: "Counseling, wellness programs" },
      { type: "International Office:", content: "Visa advice, orientation programs" },
    ],
    learnMoreLink: "#", // Replace with actual link
  },
  {
    id: 3,
    title: "Networking & Social Opportunities",
    description: "Connect with fellow international students, locals, and professionals through various clubs, events, and alumni networks.",
    imageUrl: "https://via.placeholder.com/400x200/F0F8FF/808080?text=Networking",
    details: [
      { type: "University Clubs:", content: "Academic, cultural, sports clubs" },
      { type: "Community Events:", content: "Festivals, workshops, volunteer work" },
      { type: "Professional Groups:", content: "Industry meetups, alumni associations" },
    ],
    learnMoreLink: "#", // Replace with actual link
  },
  // Add more benefits as needed
];
// --- END: Internal Data for Student Benefits ---


function StudentBenefitsPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Page Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/student_benefits_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Student Benefits & Perks
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Unlock Your Student Privileges</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Being an international student comes with a host of exclusive benefits, discounts, and support services.
          Make the most of your journey abroad!
        </p>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map(benefit => (
            <div key={benefit.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]">
              <img src={benefit.imageUrl} alt={benefit.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/E5E7EB/4B5563?text=Benefit+Image'; }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ga-neutral-800 mb-2 line-clamp-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{benefit.description}</p>
                
                {benefit.details && (
                  <ul className="list-none text-sm text-gray-700 space-y-1 mb-4">
                    {benefit.details.map((detail, index) => (
                      <li key={index}><span className="font-bold">{detail.type}</span> {detail.content}</li>
                    ))}
                  </ul>
                )}

                <a 
                  href={benefit.learnMoreLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-ga-primary-blue text-white px-4 py-2 text-sm font-bold rounded-full inline-block hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-md"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer is rendered by App.jsx, not here */}
    </div>
  );
}

export default StudentBenefitsPage;
