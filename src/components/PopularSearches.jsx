import React from 'react';

function PopularSearches() {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Popular Searches</h2>
      <ul className="list-disc list-inside">
        <li>React Tutorials</li>
        <li>JavaScript Tips</li>
        <li>CSS Tricks</li>
        <li>Web Development Tools</li>
        <li>Frontend Frameworks</li>
      </ul>
    </div>
  );
}

export default PopularSearches;