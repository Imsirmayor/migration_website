import React from 'react';
import Slider from 'react-slick'; // Already installed
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function CareerAdvancementCarousel() {
  // Data for your career advancement opportunities
  // Ensure these images exist in your public/assets/images/ directory
  const opportunities = [
    {
      name: "Free Online Courses",
      image: "/assets/images/online_course_banner.png", // Corrected path from public/
      link: "/free-online-courses", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Upskill and reskill with free online courses from top platforms and universities.",
    },
    {
      name: "Scholarships Information",
      image: "/assets/images/financial_banner.png", // Corrected path from public/
      link: "/financial-resources", // <--- ASSUMED REACT ROUTER PATH for scholarships
      description: "Discover a wide range of scholarships to fund your international education.",
    },
    {
      name: "Conferences & Training",
      image: "/assets/images/conference_banner.jpg",
      link: "/conferences-training", // <--- Ensure this is updated
      description: "Attend global conferences and professional training programs to boost your career.",
    },
    {
      name: "CV & Resume Building", // Example additional card
      image: "/assets/images/career/career_banner.png", // Corrected path from public/
      link: "/academic-resources", // <--- ASSUMED REACT ROUTER PATH for CV/Resume (often under Academic)
      description: "Tools and tips to create an impactful CV for international job markets.",
    },
    {
      name: "Interview Preparation", // Example additional card
      image: "/assets/images/health/health_banner.png", // Corrected path from public/
      link: "/career", // <--- ASSUMED REACT ROUTER PATH, perhaps a section on Career page
      description: "Master your interview skills with expert advice and mock sessions.",
    },
    {
      name: "Student Benefits & Perks", // Example additional card
      image: "/assets/images/student_benefits_banner.jpg", // Corrected path from public/
      link: "/student-benefits", // <--- ASSUMED REACT ROUTER PATH
      description: "Explore various benefits available to international students, from discounts to support services.",
    },
    
  ];

  // React-Slick settings (similar to previous carousels)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Slightly different speed
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="slick-slider relative h-full w-full">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="p-4">
            {/* IMPORTANT: Changed <a> to <Link> and href to to */}
            <Link to={opportunity.link} className="relative block h-[220px] rounded-lg bg-black no-underline overflow-hidden group">
              <div className="absolute inset-x-0 bottom-0 z-10 h-full w-full rounded-lg bg-black opacity-50 hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={opportunity.image} // Image path is relative to public/
                alt={opportunity.name}
                width="390"
                height="295"
                loading="lazy"
                className="absolute h-full w-full object-cover rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/390x295/E5E7EB/4B5563?text=Image+Missing'; }} // Fallback
              />
              <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 text-left lg:p-8">
                <div className="space-y-1.5 lg:space-y-3.5">
                  <h4 className="text-xl font-bold leading-tight text-white line-clamp-2">
                    {opportunity.name}
                  </h4>
                  <p className="text-base font-normal text-white line-clamp-3">
                    {opportunity.description}
                  </p>
                </div>
                <span className="w-fit rounded-md bg-white px-4 py-2 text-sm font-bold text-slate-900 no-underline hover:bg-gray-200 transition-colors duration-200">
                  Explore
                </span>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CareerAdvancementCarousel;
