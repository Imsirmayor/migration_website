import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// --- START: Internal Data and Helper Functions ---

// Helper for parsing SVG string to React component
const renderSvg = (svgString, wrapperClassName = '') => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} className={wrapperClassName} />;
};

// SVG Icons for various sections and content
const cultureIcons = {
  // Topics Icons (W-8 H-8 for main sections)
  language: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.033 60.033 0 0018 0M2.25 12a60.033 60.033 0 0118 0M2.25 5.25a60.033 60.033 0 0018 0" /></svg>', // Speech bubble/Language
  etiquette: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5V16.5M15 7.5V16.5M5.5 12L2.5 12M18.5 12L21.5 12M12 2.5V5.5M12 18.5V21.5M7.5 18.5h9M7.5 5.5h9M3.5 10.5h17M3.5 13.5h17" /></svg>', // Handshake/Etiquette
  community: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0z" /></svg>', // Group of people
  localLiving: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5l-6-6a.75.75 0 00-1.06 0l-6 6a.75.75 0 000 1.06l6 6a.75.75 0 001.06 0l6-6a.75.75 0 000-1.06z" /></svg>', // House/Local Life

  // Misc Icons (W-6 H-6 for accordions/small details)
  info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>', // Info circle
  download: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25L12 9.75M12 9.75L15 12.75M12 9.75L9 12.75M2.25 12.75a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z" /></svg>', // Download arrow in circle
};

// Core Integration Topics Content
const mainIntegrationTopics = [
  {
    id: 'language-comm',
    heading: 'Bridging Gaps: Learning Local Language Phrases',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Even a few basic phrases in the local language can significantly enhance your daily life and show respect for the local culture. It opens doors to new experiences and connections.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Essential Phrases:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li>Greetings (Hello, Good morning/evening, Goodbye)</li>
        <li>Thanks & Apologies (Thank you, Please, Excuse me, Sorry)</li>
        <li>Basic Interactions (How much?, I don't understand, Can you help me?)</li>
        <li>Ordering Food/Drinks</li>
      </ul>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2 mt-4">Language Learning Apps & Resources:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Duolingo, Babbel, Memrise:</strong> Popular apps for daily practice.</li>
        <li><strong>Local Language Schools:</strong> Offer immersive courses.</li>
        <li><strong>University Language Centers:</strong> Often provide free or discounted classes for students.</li>
      </ul>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2 mt-4">Practice Opportunities:</h4>
      <p class="text-base text-gray-700">Join university conversation groups, attend local meetups, or simply try speaking at shops and cafes. Locals appreciate the effort!</p>
    `,
    imageUrl: '/assets/images/culture/language_learning.jpg',
    iconSvg: cultureIcons.language,
  },
  {
    id: 'social-etiquette',
    heading: 'Navigating Social Cues: Punctuality & Greetings',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Understanding local social etiquette will help you build stronger relationships and avoid misunderstandings in your new environment.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Punctuality:</h4>
      <p class="text-base text-gray-700 mb-4">In many European countries (especially German-speaking ones like Austria), punctuality is highly valued for appointments, social gatherings, and even public transport schedules. Aim to be on time or even a few minutes early.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Greeting Customs:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Handshakes:</strong> Common for initial introductions and formal settings.</li>
        <li><strong>Kiss on Cheek:</strong> Varies by country; often 1, 2, or 3 kisses. Observe locals or ask friends.</li>
        <li><strong>Formal vs. Informal Address:</strong> Learn 'Sie' (German) / 'vous' (French) for formal address and 'du' / 'tu' for informal. Use formal until invited to use informal.</li>
      </ul>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2 mt-4">Small Talk:</h4>
      <p class="text-base text-gray-700">Avoid overly personal questions initially. General topics like weather, travel, or current events are usually safe. Politics and religion can be sensitive.</p>
    `,
    imageUrl: '/assets/images/culture/social_etiquette.jpg',
    iconSvg: cultureIcons.etiquette,
  },
  {
    id: 'community-building',
    heading: 'Beyond the Classroom: Joining Student Life & Clubs',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Building a social network is vital for your wellbeing. Universities and local communities offer numerous opportunities to connect.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Student Organizations:</h4>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>ESN (Erasmus Student Network):</strong> Active in most European universities, organizing events and trips.</li>
        <li><strong>AIESEC:</strong> Focuses on leadership development through internships and volunteer experiences.</li>
        <li><strong>University-specific Clubs:</strong> Join academic, sports, arts, or hobby clubs offered by your institution.</li>
      </ul>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2 mt-4">Sports & Hobbies:</h4>
      <p class="text-base text-gray-700 mb-4">Join local sports teams, fitness classes, hiking groups, or hobby clubs. It's a great way to meet like-minded people outside your academic bubble.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Cultural Events:</h4>
      <p class="text-base text-gray-700">Attend local festivals, markets, concerts, and community events. Immerse yourself in the local culture.</p>
    `,
    imageUrl: '/assets/images/culture/student_clubs.jpg',
    iconSvg: cultureIcons.community,
  },
  {
    id: 'local-living',
    heading: 'Daily Life Essentials: Recycling & Quiet Hours',
    contentHtml: `
      <p class="text-base text-gray-700 mb-4">Adapting to daily living rules will make your integration smoother and show respect for your new community.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Recycling Rules:</h4>
      <p class="text-base text-gray-700 mb-4">Waste separation is common in Europe. Learn about local recycling categories (paper, plastic, glass, organic waste) and designated bins.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Quiet Hours (Ruhezeiten):</h4>
      <p class="text-base text-gray-700 mb-4">Respect designated quiet times, often during evenings, nights, and all day on Sundays and public holidays. Avoid loud activities during these hours.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Sunday Closures:</h4>
      <p class="text-base text-gray-700 mb-4">Most shops are closed on Sundays and public holidays. Plan your grocery shopping accordingly.</p>
      <h4 class="text-lg font-bold text-ga-primary-blue mb-2">Public Transport Etiquette:</h4>
      <p class="text-base text-gray-700">Validate your tickets, keep noise levels down, and offer seats to elderly or pregnant individuals.</p>
    `,
    imageUrl: '/assets/images/culture/recycling_bins.jpg',
    iconSvg: cultureIcons.localLiving,
  },
];

// Language Phrasebook Data (Simplified for example)
const languagePhrases = {
  greetings: {
    de: { hello: "Hallo", good_morning: "Guten Morgen", good_evening: "Guten Abend", goodbye: "Auf Wiedersehen" },
    fr: { hello: "Bonjour", good_morning: "Bonjour", good_evening: "Bonsoir", goodbye: "Au revoir" },
  },
  food: {
    de: { order: "Ich hätte gerne...", thank_you: "Danke schön", please: "Bitte" },
    fr: { order: "Je voudrais...", thank_you: "Merci", please: "S'il vous plaît" },
  },
  emergency: {
    de: { help: "Hilfe!", emergency: "Notfall!", hospital: "Krankenhaus" },
    fr: { help: "Au secours!", emergency: "Urgence!", hospital: "Hôpital" },
  },
};

// FAQs Data
const culturalFAQs = [
  {
    id: 'faq1',
    question: 'How do I make friends and integrate socially?',
    answer: `
      <p>Join university clubs and societies, participate in orientation events, attend local festivals, use language exchange apps, and be open to new experiences. Learning some local phrases can also help break the ice.</p>
    `,
  },
  {
    id: 'faq2',
    question: 'What is the tipping etiquette in European cafes/restaurants?',
    answer: `
      <p>Tipping etiquette varies. In many European countries, a service charge might be included. If not, rounding up the bill or leaving 5-10% is common for good service, but it's less obligatory than in some other cultures.</p>
    `,
  },
  {
    id: 'faq3',
    question: 'Is it rude to be direct in communication?',
    answer: `
      <p>Directness varies by culture. German-speaking cultures (like Austria) tend to be more direct and factual in communication, which might feel blunt if you're not used to it. It's usually not intended as rude. Other cultures (e.g., French) might value more politeness and indirectness. Observe and adapt.</p>
    `,
  },
  {
    id: 'faq4',
    question: 'Can I drink tap water in Europe?',
    answer: `
      <p>In most of Western and Central Europe (including Austria), tap water is generally safe and of high quality. You can confidently drink water directly from the tap unless explicitly stated otherwise (e.g., on trains or at certain public fountains).</p>
    `,
  },
];

// --- END: Internal Data and Helper Functions ---


function CulturePage() {
  const [selectedLanguage, setSelectedLanguage] = useState('de'); // 'de' for German, 'fr' for French
  const [selectedPhraseCategory, setSelectedPhraseCategory] = useState('greetings');

  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/culture/cultural_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-lg"></div> {/* Subtle overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Cultural Compass: Navigating Life & Connection in Europe</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Embrace new traditions, build lasting friendships, and adapt seamlessly to your new European home.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Core Integration Topics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-8 text-center">Core Integration Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted to 4 columns for these blocks */}
            {mainIntegrationTopics.map(topic => (
              <div key={topic.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-[1.02] flex flex-col items-center text-center">
                <div className="text-ga-primary-blue mb-4">
                  {renderSvg(topic.iconSvg, "w-16 h-16")} {/* Larger icons for main topics */}
                </div>
                <h3 className="text-xl font-bold text-ga-neutral-800 mb-3">{topic.heading}</h3>
                <img src={topic.imageUrl} alt={topic.heading} className="w-full h-40 object-cover rounded-md mb-4 shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x160/E5E7EB/4B5563?text=Topic'; }} />
                <div className="text-sm text-gray-700 flex-grow" dangerouslySetInnerHTML={{ __html: topic.contentHtml }} />
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Elements & Resources Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Interactive Tools & Resources</h2>
          
          {/* Local Language Phrasebook Tool */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl shadow-inner">
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">Local Language Phrasebook</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              {/* Language Selection */}
              <div>
                <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-1">Select Language</label>
                <select
                  id="language-select"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="de">German</option>
                  <option value="fr">French</option>
                  {/* Add more languages as needed */}
                </select>
              </div>
              {/* Category Selection */}
              <div>
                <label htmlFor="phrase-category-select" className="block text-sm font-medium text-gray-700 mb-1">Select Category</label>
                <select
                  id="phrase-category-select"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                  value={selectedPhraseCategory}
                  onChange={(e) => setSelectedPhraseCategory(e.target.value)}
                >
                  <option value="greetings">Greetings</option>
                  <option value="food">Ordering Food</option>
                  <option value="emergency">Emergencies</option>
                  {/* Add more categories as needed */}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languagePhrases[selectedPhraseCategory] && Object.entries(languagePhrases[selectedPhraseCategory][selectedLanguage] || {}).map(([key, phrase]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="font-semibold text-ga-neutral-800 capitalize">{key.replace(/_/g, ' ')}:</p>
                  <p className="text-lg text-ga-primary-blue">{phrase}</p>
                  {/* Optional: Add audio playback if you have audio files */}
                </div>
              ))}
              {(!languagePhrases[selectedPhraseCategory] || !languagePhrases[selectedPhraseCategory][selectedLanguage] || Object.keys(languagePhrases[selectedPhraseCategory][selectedLanguage]).length === 0) && (
                  <p className="text-gray-500 col-span-full">No phrases available for this selection.</p>
              )}
            </div>
          </div>

          {/* Student Clubs & Societies Directory (Placeholder) */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl shadow-inner text-center">
            <h3 className="text-2xl font-bold text-ga-primary-blue mb-4">Student Clubs & Societies Directory</h3>
            <p className="text-gray-700 mb-4">Find and connect with student organizations at your university or in your city.</p>
            <a href="#" className="bg-ga-secondary-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200 no-underline shadow-md">
              Explore Clubs & Societies
            </a>
            {/* Implement search/filterable list or map integration here */}
          </div>

          {/* "Cultural Do's & Don'ts" Downloadable Guide */}
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 text-ga-primary-blue">
              {renderSvg(cultureIcons.download, "w-20 h-20")}
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-ga-neutral-800 mb-2">Cultural Do's & Don'ts Guide</h3>
              <p className="text-gray-700 mb-4">Download our essential guide to navigate social customs and avoid common cultural faux pas in Europe.</p>
              <a href="/assets/downloads/culture/cultural_dos_donts_guide.pdf" download className="bg-ga-primary-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-md">
                Download Guide (PDF)
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Common Questions on Cultural Integration</h2>
          <div className="space-y-4">
            {culturalFAQs.map(faq => (
              <AccordionItem
                key={faq.id}
                title={faq.question}
                content={faq.answer}
                icon={renderSvg(cultureIcons.info, 'text-ga-primary-blue')} // Using info icon
              />
            ))}
          </div>
        </section>

        {/* Testimonials / Success Stories (Placeholder) */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Success Stories: Embracing New Cultures</h2>
          <div className="mt-8 text-center bg-gray-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-2xl font-bold text-ga-neutral-800 mb-4">Hear From Our Globally Integrated Scholars</h3>
            <div className="italic text-gray-600">
              <p>"Learning basic German phrases made a huge difference in my daily life in Austria. I felt so much more comfortable!" - Lena M., Student in Graz</p>
              <p className="mt-2">"Joining a university sports club was the best decision. I made friends from all over the world." - Kenji R., Student in Berlin</p>
            </div>
            {/* Integrate react-slick here for a carousel if needed */}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to connect and thrive?</h2>
          <p className="text-lg mb-6 max-w-2xl">Let us help you integrate seamlessly into your new European home. Get personalized support and resources.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Get Integration Support
          </Link>
        </section>
      </main>
    </div>
  );
}

export default CulturePage;
