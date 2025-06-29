import React from 'react';

function ScholarshipBanner() {
  return (
    <div className="bg-blue-100 p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Scholarship Opportunities</h2>
      <p className="mb-4">
        Explore various scholarship opportunities available for students across different fields.
      </p>
      <a
        href="/scholarships"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Scholarships
      </a>
    </div>
  );
}

export default ScholarshipBanner;
// This component can be imported and used in the main application file or any other component where you want to display the scholarship banner.