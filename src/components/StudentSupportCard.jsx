import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function StudentSupportCard({ title, subtitle, imageUrl, tag, tagColor, contentColor, link }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E5E7EB/4B5563?text=Support'; }} // Fallback image
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <span className="inline-block text-white text-xs px-2 py-1 rounded-full mb-2 font-bold" style={{ backgroundColor: tagColor }}>
          {tag}
        </span>
        <h3 className="text-white text-lg font-bold mb-1 line-clamp-1">{title}</h3>
        <p className="text-white text-sm line-clamp-2">{subtitle}</p>
      </div>

      {/* The Link component is crucial for React Router navigation */}
      <Link
        to={link} // Use 'to' prop for React Router path
        className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 text-white text-center text-lg font-bold uppercase no-underline"
        aria-label={`Learn more about ${title}`}
      >
        Explore
      </Link>
    </div>
  );
}

export default StudentSupportCard;
