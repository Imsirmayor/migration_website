import React from 'react';

function TopProviderBanner() {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Top Providers</h2>
      <p className="text-lg mb-4">Discover the best providers in the industry.</p>
      <div className="max-w-2xl mx-auto">
        <img
          src="https://via.placeholder.com/600x200"
          alt="Top Providers Banner"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default TopProviderBanner;   
// This component can be imported and used in the main application file or any other component where you want to display the top provider banner.