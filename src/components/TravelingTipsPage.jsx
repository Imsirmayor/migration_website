import React from 'react';
// No Navbar or Footer import needed, as they are handled by App.jsx at the global level

// --- START: Internal Data for Traveling Tips ---
const travelTipsData = [
  {
    id: 1,
    title: "Master the Art of Packing Light",
    description: "Avoid excess baggage fees and travel stress-free. Learn how to pack efficiently for any trip duration.",
    imageUrl: '/assets/images/Packing_Light.png',
    details: [
      "Roll your clothes to save space.",
      "Use packing cubes for organization.",
      "Limit liquids to travel-sized containers.",
    ],
    readTipLink: "#", // Replace with actual link to a detailed blog post or guide
  },
  {
    id: 2,
    title: "Understand Local Currency & Payments",
    description: "Know the best ways to handle money abroad, from exchanging currency to using credit cards without hefty fees.",
    imageUrl: '/assets/images/Local_Currency.png',
    details: [
      "Inform your bank about your travel plans.",
      "Carry a mix of local currency and cards.",
      "Be aware of ATM fees and exchange rates.",
    ],
    readTipLink: "#", // Replace with actual link
  },
  {
    id: 3,
    title: "Stay Safe & Aware While Exploring",
    description: "Prioritize your safety with essential tips for navigating unfamiliar environments, protecting valuables, and emergency contacts.",
    imageUrl: '/assets/images/While_Exploring.png',
    details: [
      "Share your itinerary with someone reliable.",
      "Keep emergency contacts handy.",
      "Be mindful of your surroundings, especially at night.",
    ],
    readTipLink: "#", // Replace with actual link
  },
  {
    id: 4,
    title: "Navigating Culture Shock & Adaptation",
    description: "Understand and overcome the challenges of adapting to a new culture. Tips for embracing new customs and finding support.",
    imageUrl: '/assets/images/Shock_Adaptation.png',
    details: [
      "Research local customs before you go.",
      "Be open-minded and patient.",
      "Connect with other international students.",
    ],
    readTipLink: "#", // Replace with actual link
  },
  // Add more travel tips as needed
];
// --- END: Internal Data for Traveling Tips ---


function TravelingTipsPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Page Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/travel_tips_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Traveling Tips
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Your Essential Guide to Seamless Travel</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          From packing smart to navigating new cultures, these tips will help you enjoy every moment of your international adventure.
        </p>
        
        {/* Travel Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {travelTipsData.map(tip => (
            <div key={tip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]">
              <img src={tip.imageUrl} alt={tip.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/E5E7EB/4B5563?text=Travel+Tip'; }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ga-neutral-800 mb-2 line-clamp-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{tip.description}</p>
                
                {tip.details && (
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
                    {tip.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}

                <a 
                  href={tip.readTipLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-ga-primary-blue text-white px-4 py-2 text-sm font-bold rounded-full inline-block hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-md"
                >
                  Read Tip
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

export default TravelingTipsPage;
