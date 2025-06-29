import React from 'react';
import Slider from 'react-slick'; // Already installed
import { Link } from 'react-router-dom'; // Import Link

// Reusing Custom Arrow components (if you have them defined elsewhere, ensure they are imported or defined above this component)
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-prev`}
      style={{ ...style, display: "block", left: "-60px", zIndex: 10 }}
      onClick={onClick}
    >
      <div className="w-10 h-10 shadow-sm shadow-slate-500 bg-white hover:bg-slate-100 rounded-full flex items-center justify-center">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-next`}
      style={{ ...style, display: "block", right: "-60px", zIndex: 10 }}
      onClick={onClick}
    >
      <div className="w-10 h-10 shadow-sm shadow-slate-500 bg-white hover:bg-slate-100 rounded-full flex items-center justify-center">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  );
};


function FeaturedResourcesCarousel() {
  const resources = [
    {
      name: "Academic Resources",
      image: "/assets/images/academic_banner.jpg", // Corrected image path to be absolute from public
      link: "/academic-resources", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Documents, materials, and university support for your studies abroad."
    },
    {
      name: "Financial Resources",
      image: "/assets/images/financial_banner.png", // Corrected image path
      link: "/financial-resources", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Scholarships, living expenses, emergency funds, and part-time job options."
    },
    {
      name: "Legal & Docs",
      image: "/assets/images/legal_banner.png", // Corrected image path
      link: "/legal-docs", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Visa processes, insurance, and personal documents made easy."
    },
    {
      name: "Accommodation",
      image: "/assets/images/accommodation_banner.png", // Corrected image path
      link: "/accommodation", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Housing, transport, and packing tips for your new home overseas."
    },
    {
      name: "Health & Wellbeing",
      image: "/assets/images/health/health_banner.png", // Corrected image path
      link: "/health", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Healthcare access, mental wellness, and local registration guidance."
    },
    {
      name: "Social & Cultural Integration",
      image: "/assets/images/culture/cultural_banner.png", // Corrected image path
      link: "/culture", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Language tools, student clubs, and cultural adaptation tips."
    },
    {
      name: "Technology",
      image: "/assets/images/tech/tech_banner.png", // Corrected image path
      link: "/technology", // <--- CORRECTED TO REACT ROUTER PATH
      description: "SIM cards, VPNs, and essential apps for staying connected abroad."
    },
    {
      name: "Career",
      image: "/assets/images/career/career_banner.png", // Corrected image path
      link: "/career", // <--- CORRECTED TO REACT ROUTER PATH
      description: "Internship portals, CV adaptation, and alumni networking opportunities."
    },
  ];

  // Helper for rendering SVG icons (used for the small icons on cards if needed, not directly in this carousel)
  // For this component, assuming image is main visual.
  // If you want SVG icons *on these carousel cards*, you'd need to add `resource.icon` to data.
  const renderSvg = (svgString) => {
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 cards for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />, // Use custom arrow component
    nextArrow: <NextArrow />, // Use custom arrow component
    responsive: [
      {
        breakpoint: 1200, // xl breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full relative px-4 xl:px-0">
      <Slider {...settings} className="slick-slider relative h-full w-full">
        {resources.map((resource) => (
          <div key={resource.id} className="px-3 py-4"> {/* Padding for spacing between cards */}
            {/* IMPORTANT: Changed <a> to <Link> and href to to */}
            <Link to={resource.link} className="block relative h-[295px] w-full rounded-xl bg-white shadow-md no-underline overflow-hidden group hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]">
              <div className="absolute inset-x-0 bottom-0 z-10 h-full w-full rounded-lg bg-black opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={resource.image}
                alt={resource.name}
                width="390" // Placeholder width
                height="295" // Placeholder height
                loading="lazy"
                className="absolute h-full w-full object-cover rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/390x295/E5E7EB/4B5563?text=Resource+Image'; }} // Fallback
              />
              <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 text-left lg:p-8">
                <div className="space-y-2 lg:space-y-4">
                  <h4 className="text-2xl font-bold leading-tight text-white line-clamp-2">
                    {resource.name}
                  </h4>
                  <p className="text-base font-normal text-white line-clamp-3">
                    {resource.description}
                  </p>
                </div>
                <span className="w-fit rounded-md bg-white px-5 py-2.5 text-base font-bold text-slate-900 no-underline hover:bg-gray-200 transition-colors duration-200">
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

export default FeaturedResourcesCarousel;