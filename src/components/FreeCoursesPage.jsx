import React from 'react';
// No Navbar or Footer import needed, as they are handled by App.jsx at the global level

// --- START: Internal Data for Courses ---
const coursesData = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    description: "Learn the fundamentals of Python programming from scratch. Perfect for beginners interested in data science, web development, or automation.",
    imageUrl: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/a7c5400e51272c78b710ce9b56fd3178.png?auto=format%2Ccompress&dpr=2&w=562&h=221&q=40&fit=crop",
    platform: "Coursera",
    level: "Beginner",
    enrollLink: "https://www.coursera.org/courses?query=free%20python",
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    description: "Master the basics of digital marketing, including SEO, social media, and email marketing. Great for small business owners and aspiring marketers.",
    imageUrl: "/assets/images/Digital_Marketing.png",
    platform: "Google Digital Garage",
    level: "Beginner",
    enrollLink: "https://learndigital.withgoogle.com/digitalgarage/courses",
  },
  {
    id: 3,
    title: "Data Science for Everyone",
    description: "An accessible introduction to data science concepts, tools, and techniques for non-technical individuals.",
    imageUrl: "/assets/images/Data_Science.png",
    platform: "edX",
    level: "Intermediate",
    enrollLink: "https://www.edx.org/learn/data-science",
  },
  {
    id: 4,
    title: "Introduction to Web Development",
    description: "Build your first websites with HTML, CSS, and JavaScript. A foundational course for aspiring web developers.",
    imageUrl: "/assets/images/Web_Development.png",
    platform: "freeCodeCamp",
    level: "Beginner",
    enrollLink: "https://www.freecodecamp.org/learn/responsive-web-design/",
  },
  {
    id: 5,
    title: "Introduction to Computer Science",
    description: "An introduction to the intellectual enterprises of computer science and the art of programming.",
    imageUrl: "/assets/images/Computer_Science.png",
    platform: "HarvardX (edX)",
    level: "Introductory",
    enrollLink: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
  },
  {
    id: 6,
    title: "Excel Skills for Business",
    description: "Master essential Excel functions for business analysis, reporting, and data visualization.",
    imageUrl: "/assets/images/Excel_Skills.png",
    platform: "Macquarie University (Coursera)",
    level: "Beginner to Advanced",
    enrollLink: "https://www.coursera.org/specializations/excel-skills-for-business",
  },
  {
    id: 7,
    title: "Basics of Graphic Design",
    description: "Learn fundamental principles of graphic design, including typography, color theory, and layout.",
    imageUrl: "/assets/images/Graphic_Design.png",
    platform: "Canva Design School",
    level: "Beginner",
    enrollLink: "https://www.canva.com/designschool/",
  },
  {
    id: 8,
    title: "Introduction to Financial Accounting",
    description: "Understand core accounting concepts and how to analyze financial statements. Ideal for business students.",
    imageUrl: "/assets/images/Financial_Accounting.png",
    platform: "University of Pennsylvania (Coursera)",
    level: "Beginner",
    enrollLink: "https://www.coursera.org/learn/financial-accounting",
  },
  {
    id: 9,
    title: "Public Speaking",
    description: "Develop confidence and skills to deliver impactful presentations and communicate effectively.",
    imageUrl: "/assets/images/Public_Speaking.png",
    platform: "University of Washington (Coursera)",
    level: "All Levels",
    enrollLink: "https://www.coursera.org/learn/public-speaking",
  },
  {
    id: 10,
    title: "Getting Started with AI",
    description: "An accessible introduction to Artificial Intelligence concepts, applications, and ethical considerations.",
    imageUrl: "/assets/images/AI.png",
    platform: "IBM (Coursera)",
    level: "Beginner",
    enrollLink: "https://www.coursera.org/learn/introduction-to-ai",
  },
];
// --- END: Internal Data for Courses ---


function FreeCoursesPage() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-fafeff">
      {/* Page Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white rounded-b-lg shadow-lg"
               style={{ backgroundImage: `url('/assets/images/online_course_banner.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div> {/* Subtle overlay */}
        <h1 className="relative z-10 text-white font-bold text-4xl md:text-5xl text-center drop-shadow-lg">
          Free Online Courses
        </h1>
      </section>

      <main className="container mx-auto my-12 px-4 xl:px-0 flex-grow">
        <h2 className="section-title text-ga-neutral-800">Explore Top Free Learning Platforms</h2>
        <p className="text-center mb-8 text-gray-700 max-w-2xl mx-auto">
          Access high-quality courses from world-renowned universities and institutions, completely free.
          Enhance your skills and boost your career prospects.
        </p>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]">
              <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/E5E7EB/4B5563?text=Course'; }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ga-neutral-800 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">Platform: {course.platform}</span>
                  <span>Level: {course.level}</span>
                </div>
                <a 
                  href={course.enrollLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-ga-primary-blue text-white px-4 py-2 text-sm font-bold rounded-full inline-block hover:bg-ga-secondary-red transition-colors duration-200 no-underline shadow-md"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer is rendered by App.jsx, not here */}
    </div>
  );
}

export default FreeCoursesPage;
