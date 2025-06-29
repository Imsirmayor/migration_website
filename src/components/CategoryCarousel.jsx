import React from 'react';
import Slider from 'react-slick'; // Import the Slider component

function CategoryCarousel() {
  // Dummy data for categories - you can replace this with data fetched from an API later
  const categories = [
    { name: "Study Abroad", image: "/assets/images/study-abroad.webp", link: "blog.html?category=Study" }, //
    { name: "Volunteer Abroad", image: "/assets/images/volunteer-abroad.webp", link: "blog.html?category=Volunteer" }, //
    { name: "Intern Abroad", image: "/assets/images/intern-abroad.webp", link: "blog.html?category=Internships" }, //
    { name: "Teach Abroad", image: "/assets/images/teach-abroad.webp", link: "blog.html?category=Teach" }, //
    { name: "TEFL Courses", image: "/assets/images/tefl-courses.webp", link: "blog.html?category=TEFL" }, //
    { name: "Gap Year", image: "/assets/images/gap-year.webp", link: "blog.html?category=GapYear" }, //
    { name: "Degrees Abroad", image: "/assets/images/degrees-abroad.webp", link: "blog.html?category=Degrees" }, //
    { name: "High School Programs Abroad", image: "/assets/images/high-school-abroad.webp", link: "blog.html?category=HighSchool" }, //
    { name: "Language Schools", image: "/assets/images/language-schools.webp", link: "blog.html?category=Language" }, //
    { name: "Adventure Travel", image: "/assets/images/adventure-travel.webp", link: "blog.html?category=Adventure" }, //
    { name: "Jobs Abroad", image: "/assets/images/jobs-abroad.webp", link: "blog.html?category=Jobs" }, //
  ];

  // React-Slick settings
  const settings = {
    dots: false, // GoAbroad.com doesn't use dots for this carousel
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of slides visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust as needed
    arrows: true, // GoAbroad.com uses arrows
    responsive: [ // Responsive settings for different screen sizes
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // xs breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="mx-auto !hidden h-fit w-full lg:!block lg:px-12"> {/* From GoAbroad, ensuring it's hidden on small for now */}
      <div className="flex">
        <Slider {...settings} className="slick-slider relative h-full w-full"> {/* Applied slick-slider class to integrate with React-Slick */}
          {categories.map((category, index) => (
            <div key={index} className="pr-4"> {/* Added pr-4 for spacing between items */}
              <a href={category.link} className="gtm-directory-link group relative block h-[128px] w-[128px] shrink-0 overflow-hidden rounded-[1em] bg-neutral-600 bg-opacity-60 text-white lg:h-[10em]"> {/* From GoAbroad */}
                <img
                  src={category.image}
                  alt={category.name}
                  width="128"
                  height="128"
                  className="absolute bottom-0 left-0 right-0 top-0 z-underground h-full w-full object-cover mix-blend-darken"
                /> {/* From GoAbroad */}
                <span className="absolute inset-x-0 bottom-0 flex h-full w-full flex-col items-center justify-center text-center text-xl font-bold leading-none text-white transition-all ease-linear group-hover:-top-[2px]"> {/* From GoAbroad */}
                  {category.name.split(' ').map((word, idx) => ( // Split name for line breaks
                    <React.Fragment key={idx}>{word}<br/></React.Fragment>
                  ))}
                </span>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Manual mobile scroll version from GoAbroad (if you want to keep this as fallback for very small screens or custom mobile behavior) */}
      <div className="w-full overflow-scroll lg:hidden">
        <div className="flex w-max pl-4 lg:pl-0">
          {categories.map((category, index) => (
            <div key={index} className="pr-4">
              <a href={category.link} className="gtm-directory-link group relative block h-[128px] w-[128px] shrink-0 overflow-hidden rounded-[1em] bg-neutral-600 bg-opacity-60 text-white lg:h-[10em]">
                <img
                  src={category.image}
                  alt={category.name}
                  width="128"
                  height="128"
                  className="absolute bottom-0 left-0 right-0 top-0 z-underground h-full w-full object-cover mix-blend-darken"
                />
                <span className="absolute inset-x-0 bottom-0 flex h-full w-full flex-col items-center justify-center text-center text-xl font-bold leading-none text-white transition-all ease-linear group-hover:-top-[2px]">
                  {category.name.split(' ').map((word, idx) => (
                    <React.Fragment key={idx}>{word}<br/></React.Fragment>
                  ))}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCarousel;