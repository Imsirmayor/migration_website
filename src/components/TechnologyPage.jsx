import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// --- START: Internal Data and Helper Functions ---

// Helper for parsing SVG string to React component
const renderSvg = (svgString, wrapperClassName = '') => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} className={wrapperClassName} />;
};

// SVG Icons for various sections and content
const techIcons = {
  // Mobile Connectivity
  phoneSignal: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5M10.5 1.5V1.5c-4.305 0-7.818 3.167-7.98 7.216C2.396 11.233 2 12.333 2 13.5c0 1.167.396 2.267.52 3.534.162 4.049 3.675 7.216 7.98 7.216h3C18.605 24 22.118 20.833 22.28 16.784c.124-1.267.52-2.367.52-3.534 0-1.167-.396-2.267-.52-3.534C22.118 3.167 18.605 0 14.5 0M10.5 1.5H13.5M10.5 1.5c-4.305 0-7.818 3.167-7.98 7.216C2.396 11.233 2 12.333 2 13.5c0 1.167.396 2.267.52 3.534.162 4.049 3.675 7.216 7.98 7.216h3C18.605 24 22.118 20.833 22.28 16.784c.124-1.267.52-2.367.52-3.534C22.118 3.167 18.605 0 14.5 0" /></svg>',
  simCard: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a3 3 0 100-6 3 3 0 000 6zM20.25 4.5a3 3 0 100 6 3 3 0 000-6zM3.75 4.5a3 3 0 100 6 3 3 0 000-6zM12 12a3 3 0 100 6 3 3 0 000-6zM2.25 18.75a3 3 0 100 6 3 3 0 000-6zM20.25 18.75a3 3 0 100 6 3 3 0 000-6zM3.75 12a3 3 0 100 6 3 3 0 000-6zM12 4.5a3 3 0 100 6 3 3 0 000-6zM2.25 12a3 3 0 100 6 3 3 0 000-6zM20.25 12a3 3 0 100 6 3 3 0 000-6zM12 1.5a3 3 0 100 6 3 3 0 000-6z" /></svg>',

  // Home Internet
  router: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5V19.5M19.5 12a7.5 7.5 0 01-7.5 7.5m7.5-7.5a7.5 7.5 0 00-7.5-7.5M12 19.5a7.5 7.5 0 01-7.5-7.5m7.5 7.5a7.5 7.5 0 00-7.5-7.5M4.5 12h15" /></svg>',
  wifiConnected: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9.247a3.75 3.75 0 100 5.506M15.772 9.247a3.75 3.75 0 110 5.506M2.25 12a9.75 9.75 0 0115 6.75h-.25A7.75 7.75 0 002.25 12h0zm19.5 0a9.75 9.75 0 00-15-6.75h.25A7.75 7.75 0 0121.75 12h0z" /></svg>',

  // Navigation
  map: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15.75M9 6.75a3 3 0 013-3h5.25a3 3 0 013 3v2.25m-10.5 0a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3H9z" /></svg>',
  compass: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c1.414 0 2.5-1.086 2.5-2.5V10h-5v9.25c0 1.414 1.086 2.5 2.5 2.5zM21 12H3m12-7.5l-3-3m0 0l-3 3M12 2.25V9m-7.5 3h15" /></svg>',

  // Power & Adapters
  powerPlug: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.375 18L10 21.75l-5.375-3.75M4.5 13.5V19.5c0 1.125.875 2 2 2h10.5c1.125 0 2-.875 2-2V13.5m0-9L12 1.5l-7.5 7.5M12 4.5v9M12 4.5H4.5m7.5 0H19.5" /></svg>',
  battery: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.375 18L10 21.75l-5.375-3.75M4.5 13.5V19.5c0 1.125.875 2 2 2h10.5c1.125 0 2-.875 2-2V13.5m0-9L12 1.5l-7.5 7.5M12 4.5v9M12 4.5H4.5m7.5 0H19.5" /></svg>',

  // Recommended Apps (general placeholders)
  appStore: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25c-1.414 0-2.5-1.086-2.5-2.5S10.586 9.25 12 9.25s2.5 1.086 2.5 2.5-1.086 2.5-2.5 2.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  chatApp: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75a2.25 2.25 0 012.25-2.25h14.25a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75zM2.25 6.75h17.5M12 10.5V17m-6-6h12" /></svg>',

  // General Accordion/Info icons
  info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
};

// Main Content Sections Data
const mainTechSections = [
  {
    id: 'mobile-connectivity',
    heading: 'Stay Connected: Your Mobile Guide',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Immediate mobile connectivity is crucial upon arrival. Understand your options for seamless communication.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Unlocking Carrier-Locked Phones:</h3>
      <p class="text-base text-gray-700 mb-4">Contact your current mobile carrier *before* departing. Request them to unlock your phone so you can use it with a European SIM card.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Purchasing SIM Cards at Airports:</h3>
      <p class="text-base text-gray-700 mb-4">Airports usually have kiosks or stores where you can buy a local SIM card immediately. This offers instant connectivity, though airport plans can sometimes be slightly more expensive.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Selecting Suitable Phone Data Plans:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Prepaid vs. Post-paid:</strong> Prepaid offers flexibility without a contract. Post-paid requires a local bank account and credit check, often cheaper long-term.</li>
        <li><strong>Data Allowances:</strong> European plans often have generous data. Check if it includes EU roaming if you plan to travel.</li>
        <li><strong>EU Roaming:</strong> Under "Roam like at home" rules, your data, calls, and texts within the EU/EEA cost the same as in your home EU/EEA country.</li>
      </ul>
    `,
    imageUrl: '/assets/images/tech/mobile_connectivity.jpg',
    iconSvg: techIcons.phoneSignal,
  },
  {
    id: 'home-internet',
    heading: 'Home Sweet Home Network: Getting Online',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Setting up reliable home internet is a key step for studies and daily life.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Obtaining Home Routers/Modems:</h3>
      <p class="text-base text-gray-700 mb-4">ISPs typically provide a router/modem with your contract, usually for a rental fee or included in the package. Setup is often straightforward, sometimes plug-and-play.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Internet Service Providers (ISPs) in Europe:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Europe boasts advanced fiber (FTTH) and reliable DSL networks. Speeds vary, but high-speed internet is widely available.</li>
        <li>Popular providers vary by country/region (e.g., A1, Magenta in Austria; Deutsche Telekom, Vodafone in Germany).</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Contract vs. Flexible Plans:</h3>
      <p class="text-base text-gray-700">Long-term contracts (12-24 months) are generally cheaper. Flexible, no-contract options exist but are pricier. As a student, consider short-term rental apartments that include internet.</p>
    `,
    imageUrl: '/assets/images/tech/home_internet.jpg',
    iconSvg: techIcons.router,
  },
  {
    id: 'navigation-tools',
    heading: 'Navigate with Confidence: Maps and Mobility',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Reliable navigation tools are your best friend for exploring your new city and country.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Downloading Offline Maps:</h3>
      <p class="text-base text-gray-700 mb-4">Before you arrive, download offline maps of your destination city/country using Google Maps orHERE WeGo. This saves data and works even without internet access.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Public Transport Apps:</h3>
      <p class="text-base text-gray-700 mb-4">Most European cities have excellent public transport networks. Download the local transport app (e.g., WienMobil in Vienna, MVG Fahrinfo in Munich) for real-time schedules and ticket purchases.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Ride-Sharing/Taxi Apps:</h3>
      <p class="text-base text-gray-700">Familiarize yourself with popular ride-sharing (Bolt, Free Now, Uber in some cities) or local taxi apps available in your area. Always ensure you are using official or reputable services.</p>
    `,
    imageUrl: '/assets/images/tech/navigation_maps.jpg',
    iconSvg: techIcons.map,
  },
  {
    id: 'power-adapters',
    heading: 'Power Up: Adapters and Chargers',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Electrical compatibility is crucial to avoid damaging your devices or running out of battery.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Checking Voltage Compatibility (Europe: 230V):</h3>
      <p class="text-base text-gray-700 mb-4">Most modern devices (laptops, phone chargers) are dual-voltage (100-240V) and only need a plug adapter. Check your device's charger label. Hair dryers or older appliances might need a voltage converter.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Using Universal Power Adapters:</h3>
      <p class="text-base text-gray-700 mb-4">Invest in a universal travel adapter. Europe primarily uses Type C, F, or E plugs, but a universal adapter covers all bases.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Carrying Portable Chargers/Power Banks:</h3>
      <p class="text-base text-gray-700">A power bank is highly recommended for long travel days, sightseeing, or when outlets are scarce. Ensure it complies with airline regulations for carry-on luggage.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Surge Protectors:</h3>
      <p class="text-base text-gray-700">For multiple devices, a travel-friendly surge protector with universal outlets can protect your electronics and manage charging needs.</p>
    `,
    imageUrl: '/assets/images/tech/power_adapters.jpg',
    iconSvg: techIcons.powerPlug,
  },
  {
    id: 'recommended-apps',
    heading: 'Beyond the Basics: Essential Apps for Students',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">A selection of apps that will make your student life in Europe easier and more productive.</p>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Communication:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>WhatsApp:</strong> Widely used across Europe for messaging and calls. Essential for social and group communication.</li>
        <li><strong>Telegram/Viber:</strong> Popular alternatives in some regions.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Productivity:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Google Drive/Docs/Sheets:</strong> For cloud storage and collaborative work.</li>
        <li><strong>Microsoft 365:</strong> Often free for students via university accounts.</li>
        <li><strong>Notion/Todoist:</strong> For organization, note-taking, and task management.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Language Learning:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Duolingo/Babbel:</strong> Great for picking up local phrases or practicing a new language.</li>
      </ul>
      <h3 class="text-xl font-bold text-ga-primary-blue mb-2">Banking:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>N26/Revolut:</strong> Popular mobile-first banks with easy setup for international students.</li>
      </ul>
    `,
    imageUrl: '/assets/images/tech/recommended_apps.jpg',
    iconSvg: techIcons.appStore,
  },
];

// --- FAQs Data (Example: can be expanded) ---
const techFAQs = [
  {
    id: 'faq1',
    question: 'Do I need a VPN in Europe?',
    answer: `
      <p>A VPN (Virtual Private Network) is not strictly necessary for basic internet use, but it can be useful for accessing content from your home country (like streaming services) that might be geo-restricted in Europe, or for enhanced security on public Wi-Fi networks.</p>
    `,
  },
  {
    id: 'faq2',
    question: 'Will my laptop charger work in Europe?',
    answer: `
      <p>Most modern laptop chargers are dual-voltage (100-240V) and will work with just a simple plug adapter. Check the small print on your charger. If it states 100-240V, you only need the adapter. If not, you'd need a voltage converter, but this is rare for current electronics.</p>
    `,
  },
  {
    id: 'faq3',
    question: 'How do I get Wi-Fi in my dorm or apartment?',
    answer: `
      <p>Many dorms provide Wi-Fi automatically. For apartments, the landlord might have a pre-existing internet contract, or you'll need to set up a contract with a local Internet Service Provider (ISP) yourself. This usually involves choosing a plan, signing a contract, and receiving a router.</p>
    `,
  },
];

// --- END: Internal Data and Helper Functions ---


function TechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/tech/tech_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Tech & Connect: Essential Tools for Your European Journey</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            From seamless mobile connectivity to power essentials, get all the tech insights you need for a smooth start in Europe.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Main Content Sections */}
        {mainTechSections.map(section => (
          <section key={section.id} className="mb-12 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">{section.heading}</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img src={section.imageUrl} alt={section.heading} className="w-full h-auto object-cover rounded-lg shadow-md" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E5E7EB/4B5563?text=Tech+Guide'; }} />
              </div>
              <div className="md:w-1/2">
                {/* Render the icon using renderSvg and apply sizing/color to its wrapper */}
                <div className="text-ga-primary-blue mb-4 w-12 h-12 flex-shrink-0"> 
                    {renderSvg(section.iconSvg, "w-full h-full")}
                </div>
                <div dangerouslySetInnerHTML={{ __html: section.contentHtml }} />
              </div>
            </div>
          </section>
        ))}

        {/* FAQs Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Frequently Asked Tech Questions</h2>
          <div className="space-y-4">
            {techFAQs.map(faq => (
              <AccordionItem
                key={faq.id}
                title={faq.question}
                content={faq.answer}
                // Use renderSvg to wrap the info icon string with appropriate sizing and color
                icon={renderSvg(techIcons.info, 'text-ga-primary-blue w-6 h-6')}
              />
            ))}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Got more tech questions?</h2>
          <p className="text-lg mb-6 max-w-2xl">Our team is here to help you get connected and navigate the digital landscape in Europe.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Get Tech Support
          </Link>
        </section>
      </main>
    </div>
  );
}

export default TechnologyPage;
