import React from 'react';

function RecentArticles() {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Recent Articles</h2>
      <ul className="list-disc list-inside">
        <li>Understanding React Hooks</li>
        <li>CSS Grid Layout: A Comprehensive Guide</li>
        <li>JavaScript ES6 Features You Should Know</li>
        <li>Building Responsive Web Applications</li>
        <li>Introduction to TypeScript</li>
      </ul>
    </div>
  );
}

export default RecentArticles;
// This component can be imported and used in the main application file or any other component where you want to display recent articles.