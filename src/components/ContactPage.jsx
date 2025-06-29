import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // State for form submission status and message
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Formspree endpoint (from your contact.html)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanjjdgb';

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default browser form submission

    setFormStatus('sending');
    setStatusMessage('Sending your message...');

    // Basic client-side validation
    if (!privacyAccepted) {
      setFormStatus('error');
      setStatusMessage('Please agree to the privacy policy.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      // You can append other hidden fields if Formspree requires them

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json' // Essential for Formspree AJAX response
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        // Clear form fields on success
        setName('');
        setEmail('');
        setMessage('');
        setPrivacyAccepted(false);
      } else {
        setFormStatus('error');
        const errorData = await response.json();
        setStatusMessage(errorData.errors ? errorData.errors.map(err => err.message).join(', ') : 'Oops! There was a problem sending your message.');
        console.error("Formspree submission error:", errorData);
      }
    } catch (error) {
      setFormStatus('error');
      setStatusMessage('Network error. Please check your internet connection.');
      console.error("Network error during form submission:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Page Banner */}
      <section className="relative w-full h-[260px] md:h-[340px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-b-lg shadow-lg"
          style={{ backgroundImage: `url('/assets/images/contact_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <h1 className="relative z-10 text-white font-bold text-3xl md:text-5xl text-center drop-shadow-lg">
          Contact Us
        </h1>
      </section>

      {/* Intro & Value Proposition */}
      <section className="max-w-2xl mx-auto text-center py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-ga-primary-blue mb-4">We're Here to Help You Succeed Abroad</h2>
        <p className="text-lg mb-2">Whether you have questions about studying, migrating, or settling in a new country, our team is ready to provide personalized support and guidance at every step.</p>
        <p className="text-lg">Reach out for expert advice, practical resources, or just a friendly chat about your global journey!</p>
      </section>

      {/* Mission & Vision Snippet */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-ga-primary-blue mb-2">Our Mission</h3>
          <p className="mb-2">To democratize access to international education and migration information by providing clear, accurate, and practical guidance that empowers individuals to make informed decisions about their global journeys.</p>
          <h3 className="text-xl font-bold text-ga-secondary-red mt-4 mb-2">Our Vision</h3>
          <p>To become the most trusted and comprehensive resource for anyone considering studying or moving abroad, creating a global community that supports and learns from each other's international experiences.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-16 flex-grow">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
          <h2 className="text-2xl font-bold text-ga-primary-blue mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-ga-neutral-800 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-ga-primary-blue focus:border-ga-primary-blue transition-all duration-200 shadow-sm"
                placeholder="Full Name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-ga-neutral-800 font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-ga-primary-blue focus:border-ga-primary-blue transition-all duration-200 shadow-sm"
                placeholder="Email address"
                required
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-ga-neutral-800 font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-ga-primary-blue focus:border-ga-primary-blue transition-all duration-200 shadow-sm"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            {/* Privacy Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mr-3 h-5 w-5 text-ga-primary-blue border-gray-300 rounded focus:ring-ga-primary-blue cursor-pointer"
                required
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                By submitting this form, I agree to travellingscholars's <Link to="/privacy" className="text-ga-primary-blue hover:underline font-semibold transition-colors duration-220">Privacy Policy</Link> and <Link to="/terms" className="text-ga-primary-blue hover:underline font-semibold transition-colors duration-220">Terms of Service</Link>.
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className={`w-full py-3 px-6 rounded-full font-bold text-lg transition-all duration-300 shadow-md
                ${formStatus === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-ga-primary-blue text-white hover:bg-ga-secondary-red hover:shadow-lg'}`}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {/* Form Status Message */}
            {statusMessage && (
              <div className={`mt-4 p-3 rounded-lg text-center font-medium
                ${formStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {statusMessage}
              </div>
            )}
          </form>
        </div>
        
        {/* Direct Contact Info & Social */}
        <div className="flex flex-col justify-center space-y-8 p-4">
          <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
            <h3 className="text-xl font-bold text-ga-primary-blue mb-3">Contact Information</h3>
            <p className="mb-2 flex items-center text-gray-700">
              <i className="fas fa-map-marker-alt text-ga-secondary-red mr-3 text-lg"></i>
              Migration & Study Abroad, Graz, 8020, Austria
            </p>
            <p className="mb-2 flex items-center text-gray-700">
              <i className="fas fa-envelope-open-text text-ga-secondary-red mr-3 text-lg"></i>
              Email: <a href="mailto:connect@travellingscholars.com" className="text-ga-primary-blue hover:underline ml-1 font-semibold transition-colors duration-200">connect@travellingscholars.com</a>
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
            <h3 className="text-xl font-bold text-ga-primary-blue mb-3">Connect With Us</h3>
            <div className="flex space-x-5 justify-center md:justify-start">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-ga-secondary-red hover:text-ga-primary-blue transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-twitter-square text-4xl"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ga-secondary-red hover:text-ga-primary-blue transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-facebook-square text-4xl"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-ga-secondary-red hover:text-ga-primary-blue transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-youtube-square text-4xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ga-secondary-red hover:text-ga-primary-blue transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-linkedin text-4xl"></i>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
            <h3 className="text-xl font-bold text-ga-primary-blue mb-3">Let's Talk!</h3>
            <p className="text-lg text-gray-700">Your future starts with a conversation. We look forward to hearing from you! 🌍✈️🎓</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
