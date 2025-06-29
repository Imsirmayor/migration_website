// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // "./index.html",
//     // "./blog.html",
//     // "./resources.html",
//     // "./about.html",
//     // "./contact.html",
//     // "financial-resources.html",
//     "academic-resources.html",
//     "legal-docs.html",
//     "confrences-training.html",
//     "./src/**/*.{js,jsx,ts,tsx}", // Crucially, this line tells Tailwind to scan your React components
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primary': '#003348',
//         'secondary': '#60d4e9',
//         'accent': '#ffd447',
//         'ga-primary-blue': 'rgb(31,179,212)',
//         'ga-secondary-red': 'rgb(221,98,90)',
//         'ga-neutral-800': 'rgb(38,38,38)',
//         'ga-neutral-50': 'rgb(250,250,250)',
//         'ga-amber-500': 'rgb(245,158,11)',
//         // New custom colors from Career Advancement snippet
//         'spotlight-green': '#7fb839', // From background-color: #7fb839;
//         'spotlight-blue': '#00aeef',  // From background-color: #00aeef;
//         'spotlight-orange': '#e7881d', // From background-color: #e7881d;
//         'cis-dark-blue': '#425771', // From color: #425771; (renamed to avoid conflict if any)
//         'btn-gold': '#ffb81c', // A common gold color, assuming btn-gold needs definition
//         'gray-1-bg': '#F8F8F8', // Background color for the section from snippet
//       },
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'],
//       },
//       fontSize: {
//         // New custom font sizes from the snippet
//         '12px': '0.75rem',  // 12px
//         '14px': '0.875rem', // 14px
//         '16px': '1rem',     // 16px
//         '18px': '1.125rem', // 18px
//         '24px': '1.5rem',   // 24px
//       },
//       aspectRatio: {
//         'portrait': '3 / 4', // Custom aspect ratio for lg:aspect-portrait
//       },
//       backgroundSize: {
//         'percent-100': '100% 100%', // From bg-percent-100
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/line-clamp'),
//   ],
// }


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure Tailwind scans your React components
    "./src/**/*.{js,jsx,ts,tsx}",
    // Remove references to old HTML files here as they are now React components
    // "academic-resources.html", // Remove if it's a JSX component
    // "legal-docs.html",        // Remove if it's a JSX component
    // "confrences-training.html", // Remove if it's a JSX component
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003348',
        'secondary': '#60d4e9',
        'accent': '#ffd447',
        'ga-primary-blue': 'rgb(31,179,212)',
        'ga-secondary-red': 'rgb(221,98,90)',
        'ga-neutral-800': 'rgb(38,38,38)',
        'ga-neutral-50': 'rgb(250,250,250)',
        'ga-amber-500': 'rgb(245,158,11)',
        'spotlight-green': '#7fb839',
        'spotlight-blue': '#00aeef',
        'spotlight-orange': '#e7881d',
        'cis-dark-blue': '#425771',
        'btn-gold': '#ffb81c',
        'gray-1-bg': '#F8F8F8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '12px': '0.75rem',
        '14px': '0.875rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '24px': '1.5rem',
      },
      aspectRatio: {
        'portrait': '3 / 4',
      },
      backgroundSize: {
        'percent-100': '100% 100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
