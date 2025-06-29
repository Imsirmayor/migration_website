import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from './AccordionItem'; // Reusing the AccordionItem component

// --- START: Data and Helper Functions (Moved from old HTML's JS) ---

// Helper for parsing SVG string to React component
const renderSvg = (svgString) => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
};

// SVG Icons for categories and document types (using inline SVGs for convenience)
const categoryIcons = {
  essential: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V7a2 2 0 00-2-2h-3.172a2 2 0 00-1.414.586L11 8.586V13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h3m2 16h4.5a2.25 2.25 0 002.25-2.25V15m0 0l3 3m-3-3l-3 3m-3-3v-4.5a2.25 2.25 0 00-2.25-2.25H6.75m10.5 0H18m0 0l-3 3m3-3l-3-3"/></svg>'),
  background: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.25c-5.32 0-9.663 4.066-9.945 9.394a11.97 11.97 0 000 2.214c.282 5.328 4.625 9.394 9.945 9.394 2.862 0 5.5-1.146 7.419-3.048A11.953 11.953 0 0012 21.75c5.32 0 9.663-4.066 9.945-9.394a11.97 11.97 0 000-2.214C21.618 6.066 17.275 2 12 2z"/></svg>'),
  financial: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>'),
  accommodation: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"/></svg>'),
  insurance: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>'),
  pdf: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'),
  docx: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V7a2 2 0 00-2-2h-3.172a2 2 0 00-1.414.586L11 8.586V13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h3m2 16h4.5a2.25 2.25 0 002.25-2.25V15m0 0l3 3m-3-3l-3 3m-3-3v-4.5a2.25 2.25 0 00-2.25-2.25H6.75m10.5 0H18m0 0l-3 3m3-3l-3-3"/></svg>'),
  search: renderSvg('<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>'), // Info icon for tooltip
};

// Categories data for filter buttons and accordion sections
const categories = [
  {
    key: "essential",
    label: "Essential Documents",
    icon: categoryIcons.essential,
    description: "Core documents required for migration and study applications.",
  },
  {
    key: "background",
    label: "Background & Character Documents",
    icon: categoryIcons.background,
    description: "Proof of good conduct, background checks, and related paperwork.",
  },
  {
    key: "financial",
    label: "Financial Documentation",
    icon: categoryIcons.financial,
    description: "Proof of funds, sponsorship, and financial guarantees.",
  },
  {
    key: "accommodation",
    label: "Accommodation Proof",
    icon: categoryIcons.accommodation,
    description: "Documents showing your housing arrangements.",
  },
  {
    key: "insurance",
    label: "Travel Insurance",
    icon: categoryIcons.insurance,
    description: "Health and travel insurance documents for your stay.",
  },
];

// Documents data
const documents = [
  {
    id: 1,
    category: "essential",
    title: "Passport Copy Sample",
    description: "A sample of a properly scanned passport for visa applications.",
    type: "PDF",
    icon: categoryIcons.pdf, // Using specific PDF icon
    file: "/assets/downloads/legal/passport_sample.pdf",
    preview: "/assets/images/legal/passport_sample.png",
    info: "Required for all visa and university applications. Must be valid for at least 6 months beyond your intended stay.",
    lastUpdated: "2025-06-01",
  },
  {
    id: 2,
    category: "background",
    title: "Police Clearance Certificate (Austria)",
    description: "Template and guide for obtaining a police clearance certificate.",
    type: "PDF",
    icon: categoryIcons.pdf,
    file: "/assets/downloads/legal/police_clearance_austria.pdf",
    preview: "/assets/images/legal/police_clearance.jpg",
    info: "Required for long-term visas. Obtain from your local police authority in your home country.",
    lastUpdated: "2025-05-15",
  },
  {
    id: 3,
    category: "financial",
    title: "Proof of Financial Means Template",
    description: "A fillable template to demonstrate sufficient funds as required by immigration authorities.",
    type: "DOCX",
    icon: categoryIcons.docx, // Using specific DOCX icon
    file: "/assets/downloads/legal/financial_means_template.docx",
    preview: "/assets/images/legal/financial_means.jpg",
    info: "Minimum amount varies by country and type of visa. Attach recent bank statements.",
    lastUpdated: "2025-04-20",
  },
  {
    id: 4,
    category: "accommodation",
    title: "Rental Agreement Checklist",
    description: "A comprehensive checklist for what to include and verify in your rental agreement.",
    type: "PDF",
    icon: categoryIcons.pdf,
    file: "/assets/downloads/legal/rental_agreement_checklist.pdf",
    preview: "/assets/images/legal/rental_agreement.jpg",
    info: "Crucial for residence registration (Meldezettel in Austria) and visa applications. Read carefully!",
    lastUpdated: "2025-03-10",
  },
  {
    id: 5,
    category: "insurance",
    title: "Health Insurance Coverage Guide (EU/Schengen)",
    description: "A guide to understanding and securing acceptable health insurance policies for students in the EU/Schengen Area.",
    type: "PDF",
    icon: categoryIcons.pdf,
    file: "/assets/downloads/legal/health_insurance_guide.pdf",
    preview: "/assets/images/legal/health_insurance.jpg",
    info: "Insurance must be valid for the entire duration of your stay and meet minimum coverage requirements.",
    lastUpdated: "2025-02-28",
  },
  {
    id: 6,
    category: "essential",
    title: "Birth Certificate & Family Register Guide",
    description: "Guidance on providing certified copies of birth certificates and family registers for visa applications.",
    type: "PDF",
    icon: categoryIcons.pdf,
    file: "/assets/downloads/legal/birth_certificate_guide.pdf",
    preview: "/assets/images/legal/birth_certificate.jpg",
    info: "Often required for family reunification visas or for proving relationships. Needs official translation and apostille/legalization.",
    lastUpdated: "2025-01-20",
  },
  {
    id: 7,
    category: "background",
    title: "Medical Certificate Template for Visa",
    description: "A template for the medical certificate often required to prove good health for long-term visas.",
    type: "DOCX",
    icon: categoryIcons.docx,
    file: "/assets/downloads/legal/medical_certificate_template.docx",
    preview: "/assets/images/legal/medical_certificate.jpg",
    info: "Must be issued by a recognized medical practitioner. Check specific country requirements for validity period.",
    lastUpdated: "2024-12-10",
  },
];

// --- Legal Document Card Component ---
const LegalDocumentCard = ({ doc, onPreviewClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Determine icon based on file type if no specific icon is set in data
  const fileTypeIcon = doc.type === 'PDF' ? categoryIcons.pdf :
                       doc.type === 'DOCX' ? categoryIcons.docx :
                       categoryIcons.document; // Generic document icon fallback

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-5 relative group">
      <div className="flex items-center mb-2">
        {doc.icon ? doc.icon : fileTypeIcon} {/* Use explicit icon or fallback */}
        <span className="font-semibold text-ga-neutral-800 ml-2">{doc.title}</span>
        
        {/* Tooltip Trigger */}
        {doc.info && (
          <span
            className="ml-1 text-ga-primary-blue hover:text-ga-secondary-red cursor-pointer relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            tabIndex="0" // Make focusable
          >
            {categoryIcons.search} {/* Using the info/search icon for tooltip trigger */}
            {showTooltip && (
              <span className="tooltip absolute left-1/2 -translate-x-1/2 mt-2 w-auto min-w-[12rem] max-w-xs bg-white text-ga-neutral-800 text-sm p-3 rounded-md shadow-lg border border-gray-200 z-50 whitespace-normal text-left">
                {doc.info}
              </span>
            )}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-3 flex-grow">{doc.description}</p>
      <div className="flex items-center gap-2 mt-auto">
        <a
          href={doc.file}
          download
          className="inline-flex items-center px-3 py-1.5 rounded-full bg-ga-primary-blue text-white font-semibold text-xs shadow hover:bg-ga-secondary-red transition-all duration-200 focus:outline-none"
          aria-label={`Download ${doc.title}`}
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download
        </a>
        <button
          onClick={() => onPreviewClick(doc)}
          className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-ga-primary-blue font-semibold text-xs shadow hover:bg-ga-primary-blue hover:text-white transition-all duration-200 focus:outline-none preview-btn"
          aria-label={`Preview ${doc.title}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Preview
        </button>
      </div>
      <div className="absolute bottom-2 right-4 text-xs text-gray-400">
        Last Updated: {doc.lastUpdated}
      </div>
    </div>
  );
};

// LegalDocumentPreviewModal Component
const LegalDocumentPreviewModal = ({ document, onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4"> {/* Adjusted opacity from 80 to 60 */}
      <div className="modal-content bg-white rounded-lg shadow-xl w-full max-w-4xl h-5/6 flex flex-col relative overflow-hidden">
        <button
          onClick={onClose}
          className="modal-close absolute top-3 right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-black transition-colors duration-200 z-[101]"
        >
          &times;
        </button>
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-ga-neutral-800 line-clamp-1">{document.title}</h2>
          <p className="text-sm text-gray-600 mt-1">Category: {document.category} | Type: {document.type} | Last Updated: {document.lastUpdated}</p>
        </div>
        <div className="flex-grow overflow-hidden relative">
          {/* Embed PDF or image preview */}
          {document.type === 'PDF' ? (
            <iframe
              src={document.file + '#toolbar=0&navpanes=0&scrollbar=0'} // Hide toolbar for cleaner look
              title={`${document.title} Preview`}
              className="w-full h-full border-0"
              frameBorder="0"
            ></iframe>
          ) : (
            <img
              src={document.preview || 'https://placehold.co/800x600/E5E7EB/4B5563?text=Preview+Not+Available'}
              alt={`${document.title} Preview`}
              className="w-full h-full object-contain p-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};


// Main LegalDocsPage Component
function LegalDocsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredDocuments, setFilteredDocuments] = useState(documents);
  const [selectedDocument, setSelectedDocument] = useState(null); // For preview modal

  // Filter logic
  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFiltered = documents.filter(doc => {
      const matchesSearch = lowercasedSearchTerm === '' ||
                            doc.title.toLowerCase().includes(lowercasedSearchTerm) ||
                            doc.description.toLowerCase().includes(lowercasedSearchTerm);

      const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
    setFilteredDocuments(newFiltered);
  }, [searchTerm, activeCategory]);

  const openPreviewModal = (doc) => {
    setSelectedDocument(doc);
  };

  const closePreviewModal = () => {
    setSelectedDocument(null);
  };

  const clearSearchAndFilters = () => {
    setSearchTerm('');
    setActiveCategory('all');
  };


  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/legal_banner.png')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-ga-primary-blue/80 to-ga-neutral-800/70 rounded-b-lg"></div> {/* Gradient overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
            Navigate Legalities: Essential Documents for Your Journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Your trusted source for all legal documents required for studying and migrating to Austria & Europe.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-4 mb-8 text-center">
          <p className="text-base md:text-lg text-ga-neutral-800">
            Proper documentation is the foundation of a smooth migration or study experience. Here, you'll find up-to-date, accurate legal templates, guides, and checklists—organized for clarity and ease of use.
            Whether you need essential documents, background checks, financial proofs, or accommodation agreements, we have you covered. Our resources are designed to help you understand requirements, avoid common pitfalls, and ensure compliance with local laws.
            <br /><br />
            
          </p>
        </section>

        {/* Search & Filters */}
        <section className="max-w-5xl mx-auto px-4 mb-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-ga-neutral-800 mb-4">Find Legal Documents</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search Input */}
            <input
              id="searchInput"
              type="text"
              placeholder="Search for a document (e.g., police, insurance, rental)..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-ga-primary-blue focus:outline-none text-base"
              aria-label="Search legal documents"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 border border-ga-primary-blue
                  ${activeCategory === 'all' ? 'bg-ga-primary-blue text-white' : 'bg-white text-ga-primary-blue hover:bg-ga-primary-blue hover:text-white'}`}
              >
                All Categories
              </button>
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-200 border border-ga-primary-blue
                    ${activeCategory === cat.key ? 'bg-ga-primary-blue text-white' : 'bg-white text-ga-primary-blue hover:bg-ga-primary-blue hover:text-white'}`}
                >
                  {cat.icon && <span className="w-5 h-5">{cat.icon}</span>}
                  {cat.label}
                </button>
              ))}
            </div>
            {/* Clear All Filters Button */}
            <button
              onClick={clearSearchAndFilters}
              className="w-full md:w-auto bg-ga-secondary-red text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md md:ml-auto"
            >
              Clear Filters
            </button>
          </div>
        </section>

        {/* Document Categories (Accordions) */}
        <section className="max-w-5xl mx-auto px-4 pb-12 w-full">
          {categories.map(cat => {
            const docsInThisCategory = filteredDocuments.filter(doc => doc.category === cat.key);
            if (docsInThisCategory.length === 0 && activeCategory !== cat.key && activeCategory !== 'all') return null; // Don't show empty categories unless filtered to them

            return (
              <div key={cat.key} className="mb-8">
                <AccordionItem
                  title={cat.label}
                  content={`<p class="text-sm text-gray-600 mb-4">${cat.description}</p>`}
                  icon={cat.icon}
                  initiallyOpen={activeCategory === cat.key || activeCategory === 'all'} // Open if active category or all
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    {docsInThisCategory.length > 0 ? (
                      docsInThisCategory.map(doc => (
                        <LegalDocumentCard key={doc.id} doc={doc} onPreviewClick={openPreviewModal} />
                      ))
                    ) : (
                      <p className="text-center text-gray-500 py-4 col-span-full">No documents found in this category matching your search.</p>
                    )}
                  </div>
                </AccordionItem>
              </div>
            );
          })}
          {filteredDocuments.length === 0 && (searchTerm !== '' || activeCategory !== 'all') && (
              <p className="text-center text-gray-500 text-lg py-10">No documents found matching your search and filters across all categories.</p>
          )}
        </section>

        {/* Call to Action */}
        <section className="max-w-2xl mx-auto px-4 mb-12 text-center">
          <div className="bg-white rounded-xl shadow p-6 transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
            <h3 className="text-lg font-bold mb-2 text-ga-primary-blue">Still have questions about legal documents?</h3>
            <p className="text-base text-ga-neutral-800 mb-4">
              Contact our experts for personalized guidance on your specific situation.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-ga-secondary-red text-white px-6 py-2 rounded-full font-semibold text-base shadow hover:bg-ga-primary-blue transition-all duration-200 no-underline"
            >
              Get Personalized Help
            </Link>
          </div>
        </section>
      </main>

      {/* Preview Modal */}
      {selectedDocument && (
        <LegalDocumentPreviewModal document={selectedDocument} onClose={closePreviewModal} />
      )}
    </div>
  );
}

export default LegalDocsPage;
