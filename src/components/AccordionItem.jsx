import React, { useState } from 'react';

function AccordionItem({ title, content, icon, initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-ga-neutral-800 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ga-primary-blue"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s/g, '-')}`}
      >
        <span className="flex items-center">
          {icon && <span className="mr-3 text-ga-primary-blue">{icon}</span>}
          {title}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div
          id={`accordion-content-${title.replace(/\s/g, '-')}`}
          className="p-4 border-t border-gray-200 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
}

export default AccordionItem;
