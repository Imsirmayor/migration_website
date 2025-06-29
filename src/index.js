// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // The main App component
import './index.css'; // Import Tailwind CSS (which will be processed)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);