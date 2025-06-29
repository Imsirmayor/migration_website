import React from "react";

function FeaturedVideo() {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Featured Video</h2>
      <div className="max-w-2xl mx-auto">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default FeaturedVideo;