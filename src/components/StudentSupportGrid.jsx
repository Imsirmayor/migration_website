// import React from 'react';
// import StudentSupportCard from './StudentSupportCard'; // Import the new card component

// function StudentSupportGrid() {
//   const supportCategories = [
//     {
//       title: "Frequently Asked Questions",
//       subtitle: "Find quick answers to common questions about studying and migrating abroad.",
//       imageUrl: "/assets/images/faq_banner.jpg", // Placeholder image
//       tag: "ANSWERS!",
//       tagColor: "#e7881d", // Orange from snippet
//       contentColor: "#e7881d", // Orange from snippet
//       link: "/faqs", // <--- CHANGE THIS LINE
//     },
//     // ... other cards
    
//     {
//       title: "Student Benefits & Perks",
//       subtitle: "Explore exclusive discounts, student support services, and unique perks for international students.",
//       imageUrl: "/assets/images/student_benefits_banner.jpg", // Placeholder image
//       tag: "SAVE!",
//       tagColor: "#00aeef", // Blue from snippet
//       contentColor: "#00aeef", // Blue from snippet
//       link: "student-benefits.html",
//     },
//     {
//       title: "Traveling Tips & Guides",
//       subtitle: "Essential tips for safe, smart, and enjoyable travel experiences abroad.",
//       imageUrl: "/assets/images/travel_tips_banner.jpg", // Placeholder image
//       tag: "ADVENTURE!",
//       tagColor: "#7fb839", // Green from snippet
//       contentColor: "#7fb839", // Green from snippet
//       link: "traveling-tips.html",
//     },
//     // You can add more cards here if you want a larger grid,
//     // keeping the col-span-12 lg:col-span-4 to maintain 3 columns.
//     // For example, if you add a 4th, it will wrap to the next row.
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto px-5 font-display"> {/* Adjusted max-width and padding */}
//       <div data-cards="" className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-12">
//         {supportCategories.map((card, index) => (
//           <StudentSupportCard
//             key={index}
//             title={card.title}
//             subtitle={card.subtitle}
//             imageUrl={card.imageUrl}
//             tag={card.tag}
//             tagColor={card.tagColor}
//             link={card.link}
//             contentColor={card.contentColor}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StudentSupportGrid;










import React from 'react';
import StudentSupportCard from './StudentSupportCard'; // Import the card component

// Data for Student Support Categories
const supportCategories = [
  {
    title: "Frequently Asked Questions",
    subtitle: "Find quick answers to common questions about studying and migrating abroad.",
    imageUrl: "/assets/images/faq_banner.png", // Example image for the card
    tag: "ANSWERS!",
    tagColor: "#e7881d", // Orange from snippet
    contentColor: "#e7881d", // Orange from snippet
    link: "/faqs", // <--- CORRECTED LINK PATH
  },
  {
    title: "Financial Resources",
    subtitle: "Guides on scholarships, living expenses, and part-time job options.",
    imageUrl: "/assets/images/financial_banner.png",
    tag: "FUNDING",
    tagColor: "#00aeef",
    contentColor: "#00aeef",
    link: "/financial-resources", // Assuming this is your React route
  },
  {
    title: "Academic Toolkit",
    subtitle: "Documents, templates, and university support for your studies.",
    imageUrl: "/assets/images/academic/academic_banner.jpg",
    tag: "ACADEMICS",
    tagColor: "#7fb839",
    contentColor: "#7fb839",
    link: "/academic-resources", // Assuming this is your React route
  },

  {
  title: "Traveling Tips & Guides",
  subtitle: "Essential tips for safe, smart, and enjoyable travel experiences abroad.",
  imageUrl: "/assets/images/travel_tips_banner.png", // Placeholder image
  tag: "ADVENTURE!",
  tagColor: "#7fb839", // Green from snippet
  contentColor: "#7fb839", // Green from snippet
  link: "/traveling-tips", // <--- Ensure this is updated
  },
  
  {
    title: "Visa and Documentation",
    subtitle: "Everything you need to know about visa applications, requirements, and documentation.",
    imageUrl: "/assets/images/visa_banner.png", // Example image for the card
    tag: "VISA!",
    tagColor: "#e7881d", // Orange from snippet
    contentColor: "#e7881d", // Orange from snippet
    link: "/visa-documents", // <--- CORRECTED LINK PATH
  },
  // If you want a new card directly for Pre-Departure:
  {
      title: "Pre-Departure Checklist",
      subtitle: "Everything you need to do before leaving and in your first days abroad.",
      imageUrl: "/assets/images/predeparture_banner.png",
      tag: "PLAN!",
      tagColor: "#e7881d",
      contentColor: "#e7881d",
      link: "/pre-departure",
  },
  
  // Add more categories as needed, ensuring 'link' points to React Router paths
];


function StudentSupportGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-4 xl:px-0">
      {supportCategories.map((category, index) => (
        <StudentSupportCard
          key={index}
          title={category.title}
          subtitle={category.subtitle}
          imageUrl={category.imageUrl}
          tag={category.tag}
          tagColor={category.tagColor}
          contentColor={category.contentColor}
          link={category.link} // Pass the corrected link
        />
      ))}
    </div>
  );
}

export default StudentSupportGrid;
