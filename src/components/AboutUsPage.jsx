import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Page Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-b-lg shadow-lg"
          style={{ backgroundImage: `url('/assets/images/about_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          About Us
        </h1>
      </section>

      {/* Hero Section: Your Trusted Guide */}
      <section className="relative w-full bg-white overflow-hidden py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-ga-primary-blue mb-4">Your Trusted Guide for International Education and Migration</h1>
            <p className="text-lg text-ga-neutral-800 mb-2">Welcome to Migration & Study Abroad. We are a community-driven platform focused on simplifying the journey for students and migrants planning to relocate abroad.</p>
            <div className="text-ga-secondary-red font-bold text-xl mb-6">Empowering Your Global Journey with Accurate Information & Authentic Support.</div>
            <Link to="/contact" className="inline-block bg-ga-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-lg">Quick Enquiry</Link>
          </div>
          <div className="flex-1 mt-8 md:mt-0 flex justify-center">
            <img src="/assets/images/about_hero.jpg" alt="Diverse students abroad" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>
        </div>
      </section>

      {/* Our Story / Founder's Message */}
      <section className="w-full bg-gray-1-bg py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-ga-primary-blue mb-4">Our Journey: Born from Experience, Built for You</h2>
            <p className="mb-4">Migration & Study Abroad was born from my own challenging experience navigating the complex world of international education and migration. I understand firsthand how overwhelming the process can be – from choosing the right country and institution to understanding visa requirements and cultural adaptation.</p>
            <p className="mb-4">Our platform was created to simplify this journey for others. We're committed to providing <span className="font-semibold text-ga-primary-blue">accurate</span>, <span className="font-semibold text-ga-primary-blue">up-to-date information</span> presented in a way that's <span className="font-semibold text-ga-primary-blue">easy to understand</span>. Beyond just information, we aim to build a <span className="font-semibold text-ga-primary-blue">supportive community</span> where individuals can share experiences and learn from each other.</p>
            <p className="mb-4">What sets us apart is our focus on <span className="font-semibold text-ga-primary-blue">real, practical advice</span>. All our core resources are <span className="font-semibold text-ga-primary-blue">completely free</span> and created by people who've been through the process themselves.</p>
            <div className="mt-6 font-bold text-ga-neutral-800">Founder, Migration & Study Abroad</div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/assets/images/founder.jpg" alt="Founder" className="rounded-full shadow-lg w-56 h-56 object-cover border-4 border-ga-primary-blue" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-ga-primary-blue mb-10">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border-t-4 border-ga-primary-blue">
              <span className="mb-4">
                {/* Compass Icon */}
                <svg className="w-12 h-12 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-4 8-4-4 8-4z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p>To democratize access to international education and migration information by providing clear, accurate, and practical guidance that empowers individuals to make informed decisions about their global journeys.</p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border-t-4 border-ga-secondary-red">
              <span className="mb-4">
                {/* Globe Icon */}
                <svg className="w-12 h-12 text-ga-secondary-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
              </span>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p>To become the most trusted and comprehensive resource for anyone considering studying or moving abroad, creating a global community that supports and learns from each other's international experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-ga-primary-blue mb-10">How We Empower Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Comprehensive Resources */}
            <div className="bg-gray-1-bg rounded-xl shadow p-8 flex flex-col items-center text-center">
              <span className="mb-4">
                {/* Book Icon */}
                <svg className="w-12 h-12 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0-12c-2.5 0-4.5 2-4.5 4.5v7.5m4.5-12c2.5 0 4.5 2 4.5 4.5v7.5" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Comprehensive Resources</h3>
              <p>We provide carefully curated information about studying in popular destinations like the USA, Canada, UK, Australia, and Europe. Our resources cover everything from university applications to visa processes and cultural adaptation.</p>
            </div>
            {/* Community Support */}
            <div className="bg-gray-1-bg rounded-xl shadow p-8 flex flex-col items-center text-center">
              <span className="mb-4">
                {/* Users/Community Icon */}
                <svg className="w-12 h-12 text-ga-secondary-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Community Support</h3>
              <p>We connect you with a network of individuals who have gone through similar journeys. Through our platform, you can access firsthand experiences, ask questions, and get support from peers and experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full py-12 px-4 bg-gray-1-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-ga-primary-blue mb-10">Our Services: Guiding You Every Step of the Way</h2>
          <p className="text-center mb-8 text-lg">Our services are designed to address the key challenges faced by students and migrants at every stage of their journey, from initial research to successful settlement in a new country.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards (repeated from original HTML) */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
              <span className="mb-4">
                <svg className="w-10 h-10 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.946l5.447-1.362a2 2 0 01.894 0l5.447 1.362A2 2 0 0121 5.618v9.764a2 2 0 01-1.553 1.946L15 20" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Destination Guidance</h3>
              <p>Comprehensive comparisons of popular study destinations, covering education quality, cost of living, visa policies, and cultural factors.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
              <span className="mb-4">
                <svg className="w-10 h-10 text-ga-secondary-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Visa Process Assistance</h3>
              <p>Break down complex visa applications into simple steps, with checklists, timelines, and interview preparation tips for various visa types.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
              <span className="mb-4">
                <svg className="w-10 h-10 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0c-2.5 0-4.5-2-4.5-4.5S9.5 7 12 7s4.5 2 4.5 4.5S14.5 16 12 16z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Scholarship & Funding</h3>
              <p>Curated scholarship opportunities, guides on eligibility, application processes, and budgeting strategies for international education.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
              <span className="mb-4">
                <svg className="w-10 h-10 text-ga-secondary-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Test Preparation</h3>
              <p>Guidance and resources for standardized tests like IELTS, TOEFL, GRE, GMAT, and PTE, including strategies and practice materials.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
              <span className="mb-4">
                <svg className="w-10 h-10 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Settlement Support</h3>
              <p>Practical advice on finding accommodation, opening bank accounts, healthcare, cultural adaptation, and navigating life in a new country.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200">
              <span className="mb-4">
                <svg className="w-10 h-10 text-ga-secondary-red" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <h3 className="text-lg font-bold mb-2">Community Connection</h3>
              <p>Connect with peers, ask questions, share experiences, and get support through our platform, webinars, and expert Q&A sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-ga-primary-blue mb-10">What You'll Find On Our Platform</h2>
          <p className="text-center mb-8 text-lg">Beyond our core services, we provide a wealth of practical tools and resources designed to simplify every aspect of your journey:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg></span>Comprehensive country guides covering education systems, living costs, and cultural aspects</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 12l2 2 4-4"/></svg></span>Step-by-step visa application walkthroughs with document checklists</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v12m0-12c-2.5 0-4.5 2-4.5 4.5v7.5m4.5-12c2.5 0 4.5 2 4.5 4.5v7.5"/></svg></span>University comparison tools and application timeline planners</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0c-2.5 0-4.5-2-4.5-4.5S9.5 7 12 7s4.5 2 4.5 4.5S14.5 16 12 16z"/></svg></span>Scholarship databases with application tips and deadlines</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6"/></svg></span>Test preparation resources and strategy guides</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"/></svg></span>Pre-departure checklists and packing guides</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0z"/></svg></span>Cultural adaptation resources and language learning tips</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg></span>First-hand experiences and interviews with international students and migrants</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 12l2 2 4-4"/></svg></span>Regularly updated information on immigration policy changes</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0c-2.5 0-4.5-2-4.5-4.5S9.5 7 12 7s4.5 2 4.5 4.5S14.5 16 12 16z"/></svg></span>Budget calculators and financial planning tools</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"/></svg></span>Accommodation finding guides and safety tips</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 12l2 2 4-4"/></svg></span>Job search strategies and work permit information</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0z"/></svg></span>Community forums for peer support and advice</li>
              <li className="flex items-start gap-3"><span><svg className="w-6 h-6 text-ga-primary-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 12l2 2 4-4"/></svg></span>Expert webinars and Q&A sessions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Expertise & Commitment */}
      <section className="w-full py-12 px-4 bg-gray-1-bg">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ga-primary-blue mb-6">Our Expertise & Unwavering Commitment</h2>
          <p className="mb-4">With our dedicated team of migration experts and educators, we've built solid relationships with educational consultants and migration specialists worldwide. We regularly update our content to reflect the latest changes in immigration policies and educational opportunities, ensuring you always have accurate, up-to-date guidance.</p>
          <p className="mb-4">We've helped thousands of students and professionals navigate the complex processes of studying and living abroad.</p>
          <div className="flex justify-center mt-8">
            <img src="/assets/images/team.jpg" alt="Our Team" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ga-primary-blue mb-6">Ready to Begin Your Global Adventure?</h2>
          <p className="mb-8 text-lg">Explore our resources, connect with our community, or reach out for personalized support. We're here to guide you every step of the way.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resources" className="bg-ga-primary-blue text-white px-6 py-3 rounded-full font-bold hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow">Explore Our Resources</Link>
            <Link to="/contact" className="bg-ga-secondary-red text-white px-6 py-3 rounded-full font-bold hover:bg-ga-primary-blue transition-colors duration-200 no-underline shadow">Contact Us for More Info</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
