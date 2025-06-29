
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Assuming AccordionItem.jsx is a separate reusable component in src/components
import AccordionItem from "./AccordionItem"; 

// --- START: Data and Helper Functions (Moved from external file) ---

// Helper for parsing SVG string to React component
const renderSvg = (svgString) => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
};

// --- SVG Icons (for consistency and ease of use) ---
// These are defined here since no other external file is allowed
const icons = {
  language: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0-12a6 6 0 00-6 6v0a6 6 0 006 6m0-12a6 6 0 016 6v0a6 6 0 01-6 6"/></svg>', // Language icon
  application: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.25c-5.32 0-9.663 4.066-9.945 9.394a11.97 11.97 0 000 2.214c.282 5.328 4.625 9.394 9.945 9.394 2.862 0 5.5-1.146 7.419-3.048A11.953 11.953 0 0012 21.75c5.32 0 9.663-4.066 9.945-9.394a11.97 11.97 0 000-2.214C21.618 6.066 17.275 2 12 2z"/></svg>', // Checkmark icon
  exam: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6"/></svg>', // Exam icon
  research: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 8.625v3.375c0 .621.504 1.125 1.125 1.125h.75a1.125 1.125 0 001.125-1.125v-1.5A3.375 3.375 0 0015.375 14.25H16.5m-4.242 0H14.25m-4.242 0a3 3 0 11-4.242-4.242m4.242 4.242L15 15m-4.242-4.242l-.75-.75"/></svg>', // Research icon
  document: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>', // Generic document
  writing: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.415-8.415zM12.5 12.5L16.25 16.25"/></svg>', // Pen/Writing
  letter: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-3 3-3-3m0 6h6m-3-6v9m-4.5-9v4.5a3 3 0 003 3H12V21h3a2 2 0 002-2v-2a2 2 0 00-2-2h-3v-3h3a2 2 0 002-2v-2a2 2 0 00-2-2H12a2 2 0 00-2 2v2a2 2 0 002 2h3m-4.5-9h6"/></svg>', // Letter icon
};

// --- Academic Resources Data (Moved from src/data/academicResourcesData.js) ---
const academicResourcesData = [
  {
    id: 1,
    category: "General Academic Documents",
    title: "English Language Proficiency Reference Letter Sample",
    description: "A comprehensive sample letter demonstrating English proficiency, often required for university admissions.",
    fileUrl: "/assets/downloads/academic/english_proficiency_letter_sample.pdf",
    previewImageUrl: "/assets/images/academic/english_letter_snippet.png",
    documentType: "PDF",
    targetProgram: ["Bachelor", "Master", "PhD", "Exchange"],
    fileSize: "PDF (0.8 MB)",
    iconSvg: icons.writing
  },
  {
    id: 2,
    category: "Proof of Language Proficiency Documents",
    title: "IELTS Academic Test - Past Questions & Answers (Set 1)",
    description: "Practice with a full set of authentic IELTS Academic past questions to prepare for your exam.",
    fileUrl: "/assets/downloads/academic/ielts_past_questions_set1.pdf",
    previewImageUrl: "/assets/images/academic/ielts_cover.png",
    documentType: "PDF",
    targetProgram: ["Bachelor", "Master", "PhD"],
    fileSize: "PDF (5.2 MB)",
    iconSvg: icons.exam
  },
  {
    id: 3,
    category: "Motivation Letters/Statements of Purpose (SOP)",
    title: "Statement of Purpose Writing Guide & Template",
    description: "A comprehensive guide with a customizable template to help you write a compelling SOP for European universities.",
    fileUrl: "/assets/downloads/academic/sop_writing_guide_template.docx",
    previewImageUrl: "/assets/images/academic/sop_sample.png",
    documentType: "DOCX",
    targetProgram: ["Bachelor", "Master", "PhD"],
    fileSize: "DOCX (0.6 MB)",
    iconSvg: icons.writing
  },
  {
    id: 4,
    category: "CV/Resumes (Europass format)",
    title: "Europass CV Template (Latest Version)",
    description: "Download the official Europass CV template, widely recognized and preferred by European institutions and employers.",
    fileUrl: "/assets/downloads/academic/europass_cv_template.docx",
    previewImageUrl: "/assets/images/academic/europass_cv.png",
    documentType: "DOCX",
    targetProgram: ["Bachelor", "Master", "PhD", "All"],
    fileSize: "DOCX (0.5 MB)",
    iconSvg: icons.document
  },
  {
    id: 5,
    category: "Letters of Recommendation (LOR)",
    title: "Reference Letter from Professor - Sample & Guide",
    description: "A guide and customizable sample letter to help your professors write impactful recommendations.",
    fileUrl: "/assets/downloads/academic/professor_lor_sample.pdf",
    previewImageUrl: "/assets/images/academic/reference_letter_snippet.png",
    documentType: "PDF",
    targetProgram: ["Master", "PhD"],
    fileSize: "PDF (0.7 MB)",
    iconSvg: icons.letter
  },
  {
    id: 6,
    category: "Proof of Language Proficiency Documents",
    title: "Goethe-Zertifikat B2 Practice Exam",
    description: "Practice materials for the Goethe-Zertifikat B2 exam, essential for German-taught programs.",
    fileUrl: "/assets/downloads/academic/goethe_b2_practice.pdf",
    previewImageUrl: "/assets/images/academic/goethe_b2_cover.png",
    documentType: "PDF",
    targetProgram: ["Bachelor", "Master", "PhD"],
    fileSize: "PDF (3.1 MB)",
    iconSvg: icons.exam
  },
  {
    id: 7,
    category: "Research Proposals (for PhD and research-based Master’s programs)",
    title: "Research Proposal Sample (Computer Science)",
    description: "A well-structured sample research proposal for a Master's or PhD application in Computer Science.",
    fileUrl: "/assets/downloads/academic/research_proposal_cs_sample.pdf",
    previewImageUrl: "/assets/images/academic/research_proposal.png",
    documentType: "PDF",
    targetProgram: ["Master", "PhD", "Research"],
    fileSize: "PDF (1.1 MB)",
    iconSvg: icons.research
  },
  {
    id: 8,
    category: "Portfolio Templates (for Arts, Design, Architecture programs)",
    title: "Architecture Portfolio Template",
    description: "A clean and professional template for architecture students to showcase their work.",
    fileUrl: "/assets/downloads/academic/architecture_portfolio_template.pptx",
    previewImageUrl: "/assets/images/academic/work_samples.png",
    documentType: "PPTX",
    targetProgram: ["Bachelor", "Master"],
    fileSize: "PPTX (8.5 MB)",
    iconSvg: icons.document
  },
  {
    id: 9,
    category: "General Academic Documents",
    title: "Financial Documentation Checklist for Visa",
    description: "A checklist to ensure you have all necessary financial proofs for your student visa application.",
    fileUrl: "/assets/downloads/academic/financial_docs_checklist.pdf",
    previewImageUrl: "/assets/images/academic/financial_docs.png",
    documentType: "PDF",
    targetProgram: ["All"],
    fileSize: "PDF (0.3 MB)",
    iconSvg: icons.document
  },
  {
    id: 10,
    category: "Proof of Language Proficiency Documents",
    title: "DELF B2 Exam Preparation Guide",
    description: "Comprehensive guide for preparing for the DELF B2 French language proficiency exam.",
    fileUrl: "/assets/downloads/academic/delf_b2_guide.pdf",
    previewImageUrl: "/assets/images/academic/delf_b2_cover.png",
    documentType: "PDF",
    targetProgram: ["Bachelor", "Master"],
    fileSize: "PDF (4.1 MB)",
    iconSvg: icons.exam
  },
];

// Data for filter options
const academicCategories = [
  { key: "all", label: "All Categories", icon: "" },
  { key: "General Academic Documents", label: "General Academic Documents", icon: icons.document },
  { key: "Proof of Language Proficiency Documents", label: "Language Proficiency", icon: icons.language },
  { key: "Motivation Letters/Statements of Purpose (SOP)", label: "Motivation Letters/SOP", icon: icons.writing },
  { key: "CV/Resumes (Europass format)", label: "CV/Resumes", icon: icons.document },
  { key: "Letters of Recommendation (LOR)", label: "Letters of Recommendation", icon: icons.letter },
  { key: "Research Proposals (for PhD and research-based Master’s programs)", label: "Research Proposals", icon: icons.research },
  { key: "Portfolio Templates (for Arts, Design, Architecture programs)", label: "Portfolio Templates", icon: icons.document },
];

const academicDocumentTypes = [
    { key: "all", label: "All Types" },
    { key: "PDF", label: "PDF" },
    { key: "DOCX", label: "DOCX" },
    { key: "Template", label: "Template" },
    { key: "Guide", label: "Guide" },
    { key: "Sample", label: "Sample" },
    { key: "Video", label: "Video" }, 
    { key: "PPTX", label: "PPTX" }, // Added for portfolio
    { key: "ZIP", label: "ZIP" },   // Added for work samples
];

export const academicTargetPrograms = [
    { key: "all", label: "All Programs" },
    { key: "Bachelor", label: "Bachelor" },
    { key: "Master", label: "Master" },
    { key: "PhD", label: "PhD" },
    { key: "Exchange", label: "Exchange" },
    { key: "Research", label: "Research" },
    { key: "All", label: "Any Program" }, 
];

// --- END: Data and Helper Functions ---


// AcademicResourceCard Component: Displays a single resource card
const AcademicResourceCard = ({ resource, onPreviewClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden">
        {/* Resource Image/Thumbnail */}
        <img
          src={resource.previewImageUrl || 'https://placehold.co/400x300/E5E7EB/4B5563?text=Resource'} // Fallback
          alt={resource.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E5E7EB/4B5563?text=Resource'; }}
        />
        {/* Document Type Tag/Icon */}
        <span className="absolute top-3 right-3 bg-ga-primary-blue text-white text-xs px-3 py-1 rounded-full shadow font-bold">
          {resource.documentType}
        </span>
      </div>
      <div className="flex-1 flex flex-col p-5">
        <h3 className="text-lg font-bold text-ga-neutral-800 mb-2 line-clamp-2">{resource.title}</h3>
        <p className="text-sm text-gray-600 mb-2">Category: {resource.category}</p>
        <p className="text-sm text-gray-600 mb-2">Recommended For: {Array.isArray(resource.targetProgram) ? resource.targetProgram.join(', ') : resource.targetProgram}</p>
        <p className="text-sm text-gray-700 mb-4 flex-1 line-clamp-3">{resource.description}</p>
        
        <div className="mt-auto flex flex-wrap gap-2 justify-between">
          {/* Preview Button */}
          <button
            onClick={() => onPreviewClick(resource)}
            className="flex-1 min-w-[120px] bg-ga-secondary-red text-white px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ga-secondary-red focus:ring-offset-2"
          >
            Preview
          </button>
          {/* Download Button */}
          <a
            href={resource.fileUrl}
            download
            className="flex-1 min-w-[120px] text-center bg-ga-primary-blue text-white px-4 py-2 rounded-full font-semibold text-sm shadow hover:bg-ga-secondary-red transition-all duration-200 no-underline focus:outline-none focus:ring-2 focus:ring-ga-primary-blue focus:ring-offset-2"
          >
            Download {resource.fileType}
          </a>
        </div>
      </div>
    </div>
  );
};

// AcademicResourcePreviewModal Component: Displays a preview in a modal overlay
const AcademicResourcePreviewModal = ({ resource, onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll'); // Prevent body scrolling when modal is open
    return () => {
      document.body.classList.remove('no-scroll'); // Re-enable scrolling when modal closes
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-5/6 flex flex-col relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-black transition-colors duration-200 z-[101]"
        >
          &times;
        </button>
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-ga-neutral-800 line-clamp-1">{resource.title}</h2>
          <p className="text-sm text-gray-600 mt-1">Category: {resource.category} | Type: {resource.documentType} | Size: {resource.fileSize}</p>
        </div>
        <div className="flex-grow overflow-hidden relative">
          {/* Embed PDF or image preview */}
          {resource.documentType === 'PDF' ? (
            <iframe
              src={resource.fileUrl + '#toolbar=0&navpanes=0&scrollbar=0'} // Hide toolbar for cleaner look
              title={`${resource.title} Preview`}
              className="w-full h-full border-0"
              frameBorder="0"
            ></iframe>
          ) : (
            <img
              src={resource.previewImageUrl || 'https://placehold.co/800x600/E5E7EB/4B5563?text=Preview+Not+Available'}
              alt={`${resource.title} Preview`}
              className="w-full h-full object-contain p-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Main AcademicResources Page Component
function AcademicResources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    documentType: 'all',
    targetProgram: 'all',
  });
  const [filteredResources, setFilteredResources] = useState(academicResourcesData);
  const [selectedResource, setSelectedResource] = useState(null); // State for preview modal

  // Effect to filter resources based on search and selected filters
  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFiltered = academicResourcesData.filter(resource => {
      // Check if resource matches search term
      const matchesSearch = lowercasedSearchTerm === '' ||
                            resource.title.toLowerCase().includes(lowercasedSearchTerm) ||
                            resource.description.toLowerCase().includes(lowercasedSearchTerm);

      // Check if resource matches selected category filter
      const matchesCategory = filters.category === 'all' || resource.category === filters.category;
      
      // Check if resource matches selected document type filter
      const matchesDocType = filters.documentType === 'all' || resource.documentType === filters.documentType;
      
      // Check if resource matches selected target program filter
      const matchesTargetProgram = filters.targetProgram === 'all' || 
                                   (Array.isArray(resource.targetProgram) && resource.targetProgram.includes(filters.targetProgram)) ||
                                   (resource.targetProgram === 'All' && filters.targetProgram === 'All'); // Handle 'All' in resource data matching filter 'All'
                                   
      return matchesSearch && matchesCategory && matchesDocType && matchesTargetProgram;
    });
    setFilteredResources(newFiltered);
  }, [searchTerm, filters]); // Re-run filter when searchTerm or filters change

  // Handler for filter dropdowns/selects
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  // Handler for clearing all filters
  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      category: 'all',
      documentType: 'all',
      targetProgram: 'all',
    });
  };

  // Handlers for preview modal
  const openPreviewModal = (resource) => {
    setSelectedResource(resource);
  };

  const closePreviewModal = () => {
    setSelectedResource(null);
  };


  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/academic/academic_banner.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-lg"></div> {/* Subtle overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Academic Excellence: Your Toolkit for European Studies</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Access essential documents, templates, and guides to master your applications and thrive in European academia.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Resource Search & Filter Section */}
        <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-ga-neutral-800 mb-4">Find Academic Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Keywords</label>
              <input
                type="text"
                id="search"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue transition-all duration-200 shadow-sm"
                placeholder="e.g., SOP, CV, IELTS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">Document Category</label>
              <select
                id="category-filter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                {academicCategories.map(cat => (
                  <option key={cat.key} value={cat.key}>{cat.label}</option>
                ))}
              </select>
            </div>

            {/* Document Type Filter */}
            <div>
              <label htmlFor="doctype-filter" className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
              <select
                id="doctype-filter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                value={filters.documentType}
                onChange={(e) => handleFilterChange('documentType', e.target.value)}
              >
                {academicDocumentTypes.map(type => (
                  <option key={type.key} value={type.key}>{type.label}</option>
                ))}
              </select>
            </div>
            
            {/* Target Program Filter */}
            <div>
              <label htmlFor="program-filter" className="block text-sm font-medium text-gray-700 mb-1">Target Program</label>
              <select
                id="program-filter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-ga-primary-blue focus:border-ga-primary-blue"
                value={filters.targetProgram}
                onChange={(e) => handleFilterChange('targetProgram', e.target.value)}
              >
                {academicTargetPrograms.map(program => (
                  <option key={program.key} value={program.key}>{program.label}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end lg:col-span-1"> {/* Adjusted column span for positioning */}
              <button
                onClick={clearFilters}
                className="w-full bg-ga-secondary-red text-white py-2 px-4 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Resource Listings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6">Available Academic Resources ({filteredResources.length})</h2>
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(resource => (
                <AcademicResourceCard key={resource.id} resource={resource} onPreviewClick={openPreviewModal} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg py-10">No academic resources found matching your criteria.</p>
          )}
        </section>

        {/* Guidance & Best Practices Section */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Academic Success Guides</h2>
          <div className="space-y-4">
            {/* Using reusable AccordionItem component */}
            <AccordionItem
              title="Crafting a Strong Motivation Letter/SOP"
              content={`
                <p>Your Motivation Letter (Statement of Purpose) is your chance to tell your story and impress the admissions committee.</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Be Specific:</strong> Tailor it to each university and program.</li>
                  <li><strong>Show, Don't Just Tell:</strong> Provide concrete examples of your experiences and achievements.</li>
                  <li><strong>Highlight Fit:</strong> Explain why this specific program and university are perfect for your goals.</li>
                  <li><strong>Proofread:</strong> Errors can be very costly. Get multiple eyes on it.</li>
                </ul>
              `}
              icon={renderSvg('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.415-8.415zM12.5 12.5L16.25 16.25"/></svg>')}
            />
            <AccordionItem
              title="Effective CV/Resume Writing (Europass Focus)"
              content={`
                <p>The Europass CV is a standard format in Europe. Ensure yours is well-structured and impactful.</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Clarity:</strong> Use clear, concise language.</li>
                  <li><strong>Quantify Achievements:</strong> Use numbers and data where possible.</li>
                  <li><strong>Keywords:</strong> Include keywords from the program description.</li>
                  <li><strong>Professional Photo:</strong> Often required for Europass CVs.</li>
                </ul>
              `}
              icon={renderSvg('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2zM5 11h14M12 2v2m0 16v2m7-9H5m14-4V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2M7 5v2m10-2v2"/></svg>')}
            />
             <AccordionItem
              title="Getting the Best Letters of Recommendation"
              content={`
                <p>Strong Letters of Recommendation (LORs) can significantly boost your application.</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Choose Wisely:</strong> Select professors who know you well and can speak to your academic abilities.</li>
                  <li><strong>Provide Information:</strong> Give them your CV, SOP, and details about the program.</li>
                  <li><strong>Follow Up Politely:</b> Remind them well in advance of deadlines.</li>
                  <li><strong>Waiver of Rights:</strong> Most applications require you to waive your right to see the LOR.</li>
                </ul>
              `}
              icon={renderSvg('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-3 3-3-3m0 6h6m-3-6v9m-4.5-9v4.5a3 3 0 003 3H12V21h3a2 2 0 002-2v-2a2 2 0 00-2-2h-3v-3h3a2 2 0 002-2v-2a2 2 0 00-2-2H12a2 2 0 00-2 2v2a2 2 0 002 2h3m-4.5-9h6"/></svg>')}
            />
            <AccordionItem
              title="Understanding Language Proficiency Requirements"
              content={`
                <p>Most English-taught programs require proof of English proficiency (IELTS, TOEFL).</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Check Requirements:</strong> Scores vary by university and program.</li>
                  <li><strong>Preparation:</b> Utilize past questions, online courses, and mock tests.</li>
                  <li><strong>Registration:</strong> Book your test slot well in advance.</li>
                  <li><strong>Other Languages:</strong> If applying for German, French, etc. taught programs, ensure you meet those specific language certificates (e.g., Goethe, DELF).</li>
                </ul>
              `}
              icon={renderSvg('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0-12a6 6 0 00-6 6v0a6 6 0 006 6m0-12a6 6 0 016 6v0a6 6 0 01-6 6"/></svg>')}
            />
          </div>
        </section>

        {/* Testimonials / Success Stories (Placeholder) */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-ga-neutral-800 mb-6 text-center">Success Stories: Our Scholars' Achievements</h2>
          <div className="mt-8 text-center bg-gray-50 p-6 rounded-xl shadow-inner">
            <h3 className="text-2xl font-bold text-ga-neutral-800 mb-4">Hear From Our Successful Students</h3>
            <div className="italic text-gray-600">
              <p>"The SOP guide was incredibly helpful. I got into my top choice university in Germany!" - Anya S., Master's Student</p>
              <p className="mt-2">"Thanks to the Europass CV template, my application stood out. Got my internship in Austria!" - Ben T., Exchange Student</p>
            </div>
            {/* Integrate react-slick here for a carousel if needed */}
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-ga-primary-blue p-8 rounded-xl shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Personalized Academic Application Support?</h2>
          <p className="text-lg mb-6 max-w-2xl">Our expert advisors are here to help you craft an outstanding application and achieve your academic dreams in Europe.</p>
          <Link to="/contact" className="bg-ga-secondary-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 no-underline shadow-lg">
            Connect with an Academic Advisor
          </Link>
        </section>
      </main>
    </div>
  );
}

export default AcademicResources;
