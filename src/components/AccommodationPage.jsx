import React, { useState, useEffect } from 'react';
// No longer import Navbar or Footer here, they are handled by App.jsx
// import Navbar from './Navbar';
import Footer from './Footer';


// Icons for accommodation types and amenities (using Phosphor Icons or similar)
// If you prefer Font Awesome, you'll need to adjust these.
// For simplicity, using inline SVGs or placeholder text for icons
const icons = {
  apartment: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  dorm: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  hostel: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87m-2-12v1.172a2 2 0 00.586 1.414L18 9m-8 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m-2 2h8m0 0l3 3m-3-3l6 6m0 0l-3 3M9 16H6a2 2 0 00-2 2v2a2 2 0 002 2h3" />
    </svg>
  ),
  shared: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87m-2-12v1.172a2 2 0 00.586 1.414L12 18h-2.343l-6.243-6.243A2 2 0 006 10h2m4 0h.01M9 16H6a2 2 0 00-2 2v2a2 2 0 002 2h3" />
    </svg>
  ),
  wifi: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9.247a3.75 3.75 0 100 5.506M15.772 9.247a3.75 3.75 0 110 5.506M2.25 12a9.75 9.75 0 0115 6.75h-.25A7.75 7.75 0 002.25 12h0zm19.5 0a9.75 9.75 0 00-15-6.75h.25A7.75 7.75 0 0121.75 12h0z" />
    </svg>
  ),
  furnished: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2zM5 11h14M12 2v2m0 16v2m7-9H5m14-4V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2M7 5v2m10-2v2" />
    </svg>
  ),
  laundry: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a2 2 0 012-2h.01M15 10a2 2 0 012-2h.01M12 6V4m0 0V2m0 20v-2m0-2h.01M3 15h2m0-4h2m0-4h2M19 15h2m0-4h2m0-4h2" />
    </svg>
  ),
  privateBath: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c1.414 0 2.5-1.086 2.5-2.5V10h-5v9.25c0 1.414 1.086 2.5 2.5 2.5zM21 12H3m12-7.5l-3-3m0 0l-3 3M12 2.25V9m-7.5 3h15" />
    </svg>
  ),
};

// Dummy data for accommodation listings
const allAccommodations = [
  {
    id: 1,
    title: "Modern Studio in Vienna",
    type: "Apartment",
    price: "€650-€800/month",
    location: "Vienna, Austria",
    universityProximity: "University of Vienna (2km)",
    imageUrl: "/assets/images/accommodation_vienna_studio.jpg", // Corrected path
    amenities: ["wifi", "furnished", "privateBath"],
    description: "Cozy studio in a vibrant district, perfect for solo students. Fully furnished with modern amenities.",
    coordinates: [48.210033, 16.363449] // Example coordinates for Vienna
  },
  {
    id: 2,
    title: "Shared Housing near TU Graz",
    type: "Shared",
    price: "€350-€450/month",
    location: "Graz, Austria",
    universityProximity: "TU Graz (0.8km)",
    imageUrl: "/assets/images/accommodation_graz_shared.jpg", // Corrected path
    amenities: ["wifi", "furnished", "laundry"],
    description: "Spacious room in a shared apartment with friendly international students. Close to campus.",
    coordinates: [47.069947, 15.440263] // Example coordinates for Graz
  },
  {
    id: 3,
    title: "Student Dormitory, Munich",
    type: "Dorm",
    price: "€400-€550/month",
    location: "Munich, Germany",
    universityProximity: "Ludwig Maximilian University (3km)",
    imageUrl: "/assets/images/accommodation_munich_dorm.jpg", // Corrected path
    amenities: ["wifi", "furnished", "laundry"],
    description: "Affordable dorm room with communal facilities. Great for meeting new people.",
    coordinates: [48.135125, 11.581981] // Example coordinates for Munich
  },
  {
    id: 4,
    title: "Cozy Apartment, Berlin",
    type: "Apartment",
    price: "€700-€950/month",
    location: "Berlin, Germany",
    universityProximity: "Humboldt University (4km)",
    imageUrl: "/assets/images/accommodation_berlin_apt.jpg", // Corrected path
    amenities: ["wifi", "furnished"],
    description: "Comfortable apartment in a lively neighborhood. Easy access to public transport.",
    coordinates: [52.520008, 13.404954] // Example coordinates for Berlin
  },
  {
    id: 5,
    title: "Hostel Stay, Salzburg",
    type: "Hostel",
    price: "€200-€300/month (per bed)",
    location: "Salzburg, Austria",
    universityProximity: "University of Salzburg (1.5km)",
    imageUrl: "/assets/images/accommodation_salzburg_hostel.jpg", // Corrected path
    amenities: ["wifi", "laundry"],
    description: "Budget-friendly hostel with communal kitchen and social events. Short walk to university.",
    coordinates: [47.809490, 13.055000] // Example coordinates for Salzburg
  },
];

// Dummy data for guide sections (replace with real content)
const guidanceSections = [
  {
    id: 'how-to-search',
    title: 'How to Search for Accommodation',
    content: `
      <p>Start your search early, ideally 3-6 months before your arrival. Use a combination of online platforms, university housing services, and local real estate agents.</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Define your budget and preferred location.</li>
        <li>Research different types of accommodation (dorm, shared apartment, studio).</li>
        <li>Utilize filters on search platforms (price, amenities, proximity).</li>
        <li>Be wary of deals that seem too good to be true.</li>
      </ul>
      <p class="mt-2">Download our <a href="#" class="text-ga-primary-blue hover:underline font-semibold">Accommodation Search Checklist</a> for a step-by-step guide.</p>
    `,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-ga-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 'reliable-platforms',
    title: 'Reliable Platforms & Websites',
    content: `
      <p>Finding trustworthy platforms is key to a safe search. Here are some commonly used and reliable options:</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li><strong>University Housing Offices:</strong> Often the safest and most reliable for dorms.</li>
        <li><strong>Uniplaces:</strong> Popular for student accommodation across Europe.</li>
        <li><strong>HousingAnywhere:</strong> Peer-to-peer platform for student rooms.</li>
        <li><strong>WG-Gesucht.de (Germany/Austria):</strong> Popular for shared flats.</li>
        <li><strong>Local Real Estate Agencies:</strong> Can offer more options, but often come with agency fees.</li>
      </ul>
      <p class="mt-2">Always verify the legitimacy of a platform or landlord before making any payments.</p>
    `,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-ga-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0015.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'contract-essentials',
    title: 'Contract Essentials & Legal Tips',
    content: `
      <p>Understanding your rental contract is crucial. Always read it carefully before signing.</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li><strong>Duration:</strong> Fixed-term vs. open-ended contract.</li>
        <li><strong>Notice Period:</strong> How much notice you need to give before moving out.</li>
        <li><strong>Rent & Utilities:</strong> Clarify what's included (heating, electricity, internet).</li>
        <li><strong>Deposit (Kaution):</strong> Amount and conditions for return.</li>
        <li><strong>Inventory List:</strong> Document the condition of the apartment before moving in.</li>
      </ul>
      <p class="mt-2">Seek legal advice if unsure about any clauses. Many universities offer legal support for international students.</p>
    `,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-ga-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.25c-5.32 0-9.663 4.066-9.945 9.394a11.97 11.97 0 000 2.214c.282 5.328 4.625 9.394 9.945 9.394 2.862 0 5.5-1.146 7.419-3.048A11.953 11.953 0 0012 21.75c5.32 0 9.663-4.066 9.945-9.394a11.97 11.97 0 000-2.214C21.618 6.066 17.275 2 12 2z" />
      </svg>
    ),
  },
  {
    id: 'renting-tips',
    title: 'Practical Renting Tips: What to Ask & Avoid',
    content: `
      <p>Be prepared with questions and aware of common scams.</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li><strong>Ask:</strong> What utilities are included? Is registration (Meldezettel) possible? What's the internet speed?</li>
        <li><strong>Avoid:</strong> Paying a deposit before seeing the place or signing a contract. Being rushed into a decision. Unusually low prices.</li>
        <li>Always get everything in writing.</li>
        <li>Take photos/videos of the apartment before moving in to document its condition.</li>
      </ul>
    `,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-ga-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.25 15c-1.121 0-2.203.208-3.15.589M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-9.75 0h.008v.008H12.25V12zm2.121-7.75A9.954 9.954 0 0012 2.25C6.727 2.25 2.5 6.477 2.5 12h.008v.008H2.5V12zm10 0a9.954 9.954 0 0110 9.75v.008H22v-.008A9.954 9.954 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    id: 'budgeting-advice',
    title: 'Budgeting for Housing',
    content: `
      <p>Housing will likely be your biggest expense. Plan your budget carefully.</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li><strong>Initial Costs:</strong> Factor in deposit (1-3 months' rent), first month's rent, agency fees (if applicable).</li>
        <li><strong>Utilities:</strong> Understand if electricity, heating, water, and internet are included or extra.</li>
        <li><strong>Saving Strategies:</strong> Consider shared housing, living slightly further from the city center, or cooking at home.</li>
      </ul>
      <p class="mt-2">Use our <a href="#" class="text-ga-primary-blue hover:underline font-semibold">Budget Calculator Tool</a> to estimate your monthly expenses.</p>
    `,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-ga-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM3 17.25a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 17.25v.75m-6-1.5l1.5 1.5-1.5 1.5m-6-3l-1.5 1.5 1.5 1.5" />
      </svg>
    ),
  },
];

// Placeholder for map component (e.g., using react-leaflet or react-google-maps)
// For demonstration, this will just be a simple div with a background color.
const AccommodationMap = ({ accommodations, selectedAccommodationId }) => {
  // In a real app, you would integrate a map library here
  // and pass `accommodations` and `selectedAccommodationId` to it
  // to render markers and center the map.
  return (
    <div className="bg-gray-200 h-96 w-full md:w-1/3 rounded-lg shadow-inner flex items-center justify-center text-gray-500">
      <p>Interactive Map Placeholder</p>
      {selectedAccommodationId && (
        <p className="absolute top-4 bg-white px-3 py-1 rounded-full text-sm shadow-md">
          Showing: {allAccommodations.find(acc => acc.id === selectedAccommodationId)?.title}
        </p>
      )}
    </div>
  );
};


function AccommodationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: [],
    price: [0, 2000], // Example max price
    location: '',
    proximity: '',
  });
  const [filteredAccommodations, setFilteredAccommodations] = useState(allAccommodations);
  const [expandedSections, setExpandedSections] = useState({}); // For accordions
  const [selectedAccommodationOnMap, setSelectedAccommodationOnMap] = useState(null);

  // Effect to filter accommodations based on search and filters
  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFiltered = allAccommodations.filter(acc => {
      // Search term filter
      const matchesSearch = lowercasedSearchTerm === '' ||
                            acc.title.toLowerCase().includes(lowercasedSearchTerm) ||
                            acc.location.toLowerCase().includes(lowercasedSearchTerm) ||
                            acc.description.toLowerCase().includes(lowercasedSearchTerm);

      // Type filter
      const matchesType = filters.type.length === 0 || filters.type.includes(acc.type);

      // Price filter (simple example, you'd need more robust parsing for real price strings)
      const accPrice = parseInt(acc.price.split('-')[0].replace('€', '').trim()); // Takes lower bound
      const matchesPrice = accPrice >= filters.price[0] && accPrice <= filters.price[1];

      // Location filter
      const matchesLocation = filters.location === '' || acc.location.toLowerCase().includes(filters.location.toLowerCase());
      
      // Proximity filter (simplified for this example)
      const matchesProximity = filters.proximity === '' || acc.universityProximity.toLowerCase().includes(filters.proximity.toLowerCase());


      return matchesSearch && matchesType && matchesPrice && matchesLocation && matchesProximity;
    });
    setFilteredAccommodations(newFiltered);
  }, [searchTerm, filters]);

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleTypeFilterChange = (type) => {
    setFilters(prevFilters => {
      const currentTypes = prevFilters.type;
      if (currentTypes.includes(type)) {
        return { ...prevFilters, type: currentTypes.filter(t => t !== type) };
      } else {
        return { ...prevFilters, type: [...currentTypes, type] };
      }
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      type: [],
      price: [0, 2000],
      location: '',
      proximity: '',
    });
  };

  const toggleAccordion = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* REMOVED: <Navbar /> - This is rendered by App.jsx at the top level */}

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px] w-full bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/accommodation_banner.png')` }}> {/* Corrected image path */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Find Your Home Abroad</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Your comprehensive guide to securing comfortable and safe housing for your study journey in Austria and beyond.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Search & Filter Section */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-ga-neutral-800 mb-4">Search & Filter Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Keywords</label>
              <input
                type="text"
                id="search"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                placeholder="City, University, Type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Location Filter */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                id="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Vienna">Vienna, Austria</option>
                <option value="Graz">Graz, Austria</option>
                <option value="Salzburg">Salzburg, Austria</option>
                <option value="Munich">Munich, Germany</option>
                <option value="Berlin">Berlin, Germany</option>
                {/* Add more locations as needed */}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Accommodation Type</label>
              <div className="flex flex-wrap gap-2">
                {['Apartment', 'Dorm', 'Hostel', 'Shared'].map(type => (
                  <button
                    key={type}
                    onClick={() => handleTypeFilterChange(type)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200
                                ${filters.type.includes(type) ? 'bg-ga-primary-blue text-white' : 'bg-gray-200 text-ga-neutral-800 hover:bg-gray-300'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range (Simplified - in a real app, use a slider component) */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Max Price (€)</label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                value={filters.price[1]}
                onChange={(e) => handleFilterChange('price', [0, parseInt(e.target.value)])}
                min="0"
                max="2000" // Example max
              />
            </div>

            {/* Proximity Filter (Simplified) */}
            <div>
              <label htmlFor="proximity" className="block text-sm font-medium text-gray-700 mb-1">Proximity to University</label>
              <select
                id="proximity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                value={filters.proximity}
                onChange={(e) => handleFilterChange('proximity', e.target.value)}
              >
                <option value="">Any Proximity</option>
                <option value="University of Vienna">University of Vienna</option>
                <option value="TU Graz">TU Graz</option>
                <option value="Ludwig Maximilian University">Ludwig Maximilian University</option>
                {/* Add more universities as needed */}
              </select>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-ga-secondary-red text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>

        {/* Accommodation Listings & Map View */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-ga-neutral-800">Available Accommodations ({filteredAccommodations.length})</h2>
            {filteredAccommodations.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredAccommodations.map(acc => (
                  <div
                    key={acc.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col cursor-pointer"
                    onMouseEnter={() => setSelectedAccommodationOnMap(acc.id)}
                    onMouseLeave={() => setSelectedAccommodationOnMap(null)}
                  >
                    <div className="relative h-48 w-full">
                      <img src={acc.imageUrl} alt={acc.title} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E5E7EB/4B5563?text=No+Image'; }} />
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-ga-neutral-800 mb-2">{acc.title}</h3>
                      <p className="text-ga-primary-blue font-semibold text-lg mb-2">{acc.price}</p>
                      <p className="text-gray-600 text-sm mb-1 flex items-center">
                        {icons[acc.type.toLowerCase()] || <i className="fas fa-home mr-1"></i>} {/* Default icon */}
                        <span className="ml-1">{acc.type} | {acc.location}</span>
                      </p>
                      <p className="text-gray-500 text-sm mb-2">{acc.universityProximity}</p>
                      <p className="text-gray-700 text-sm line-clamp-2 mb-3">{acc.description}</p>
                      <div className="flex flex-wrap gap-2 text-ga-neutral-800 text-sm mb-3">
                        {acc.amenities.map(amenity => (
                          <span key={amenity} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                            {icons[amenity]}<span className="ml-1 capitalize">{amenity}</span>
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex justify-between items-center pt-2">
                        <button className="bg-ga-primary-blue text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-ga-secondary-red transition-colors duration-200">
                          View Details
                        </button>
                        <button className="text-ga-primary-blue hover:text-ga-secondary-red transition-colors duration-200 text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                          </svg>
                          View on Map
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg py-10">No accommodations found matching your criteria.</p>
            )}
          </div>
          {/* Interactive Map (Placeholder) */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-ga-neutral-800 mb-4">Accommodation Map</h2>
            <AccommodationMap accommodations={filteredAccommodations} selectedAccommodationId={selectedAccommodationOnMap} />
          </div>
        </section>

        {/* Guidance & Tips Section */}
        <section className="mt-12 mb-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Your Housing Journey: Guides & Tips</h2>
          <div className="space-y-4">
            {guidanceSections.map(section => (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-ga-neutral-800 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue"
                  onClick={() => toggleAccordion(section.id)}
                  aria-expanded={!!expandedSections[section.id]}
                  aria-controls={`content-${section.id}`}
                >
                  <span className="flex items-center">
                    {section.icon}
                    {section.title}
                  </span>
                  <svg className={`w-5 h-5 transition-transform duration-200 ${expandedSections[section.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {expandedSections[section.id] && (
                  <div id={`content-${section.id}`} className="p-4 border-t border-gray-200 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Additional Resources / Testimonials / CTA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-ga-neutral-800 mb-4">FAQs & Testimonials</h3>
            {/* Simple FAQ placeholder */}
            <div className="space-y-3 mb-6">
                <p className="font-semibold text-ga-primary-blue">Q: How early should I start looking for accommodation?</p>
                <p className="text-gray-700 text-sm">A: We recommend starting 3-6 months before your arrival, especially in popular cities.</p>
                <p className="font-semibold text-ga-primary-blue">Q: What is a "Meldezettel" in Austria?</p>
                <p className="text-gray-700 text-sm">A: It's a mandatory registration of your residence with local authorities. Your landlord can assist with this.</p>
            </div>
            {/* Simple Testimonial placeholder */}
            <div className="bg-gray-100 p-4 rounded-lg italic text-gray-600">
                <p>"Travelling Scholars made finding a dorm in Vienna so easy! Their tips saved me a lot of stress." - Maria S., Student</p>
            </div>
          </div>

          <div className="bg-ga-primary-blue p-6 rounded-xl shadow-md text-white flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Still Feeling Overwhelmed?</h3>
            <p className="mb-6">Let our team of experts guide you to your perfect home abroad. Get personalized support tailored to your needs.</p>
            <a href="/contact.html" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
              Get Personalized Support
            </a>
          </div>
        </section>

      </main>

      
    </div>
  );
}

export default AccommodationPage;
