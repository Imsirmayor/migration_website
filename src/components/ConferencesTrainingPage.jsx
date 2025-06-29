import React from 'react';
// No Navbar or Footer import needed, as they are handled by App.jsx at the global level

// --- START: Internal Data for Conferences & Training ---
const eventsData = [
  {
    id: 1,
    title: "Global Tech Summit 2025",
    description: "A leading technology conference featuring keynote speakers, workshops, and networking opportunities in innovation.",
    imageUrl: "/assets/images/Tech_Summit.png",
    date: "Oct 20-22, 2025",
    location: "Berlin, Germany",
    registerLink: "#", // Replace with actual registration link
  },
  {
    id: 2,
    title: "International Student Leadership Training",
    description: "Develop essential leadership skills in a diverse, international environment. Ideal for student association leaders.",
    imageUrl: "/assets/images/Leadership_Training.png",
    date: "Jan 10-12, 2026",
    location: "Vancouver, Canada",
    registerLink: "#",
  },
  {
    id: 3,
    title: "Creative Writing Workshop for Migrants",
    description: "A hands-on workshop focused on developing creative writing skills for individuals from diverse linguistic backgrounds.",
    imageUrl: "/assets/images/Writing_Workshop.png",
    date: "March 5-7, 2026",
    location: "Online",
    registerLink: "#",
  },
  {
    id: 4,
    title: "International Development Conference",
    description: "An annual conference for professionals and students in international development and global affairs.",
    imageUrl: "/assets/images/Development_Conference.png",
    date: "Apr 10-12, 2026",
    location: "Geneva, Switzerland",
    registerLink: "#",
  },
  {
    id: 5,
    title: "Study Abroad Fair Online 2025",
    description: "Connect with university representatives and program providers from around the world from your home.",
    imageUrl: "/assets/images/Fair_Online.png",
    date: "Nov 5, 2025",
    location: "Online",
    registerLink: "#",
  },
];
// --- END: Internal Data for Conferences & Training ---


function ConferencesTrainingPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Page Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/conference_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Conferences & Training
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Upcoming Events and Workshops</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Stay updated with the latest industry insights and enhance your professional skills by attending relevant conferences and training sessions worldwide.
        </p>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]">
              <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/E5E7EB/4B5563?text=Event+Image'; }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ga-neutral-800 mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">Date: {event.date}</span>
                  <span>Location: {event.location}</span>
                </div>
                <a 
                  href={event.registerLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-ga-primary-blue text-white px-4 py-2 text-sm font-bold rounded-full inline-block hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-md"
                >
                  Register Now
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

export default ConferencesTrainingPage;
