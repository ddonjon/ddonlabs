import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If react-snap has already pre-rendered the HTML for Googlebot, hydrate it.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  // Otherwise, render normally (like when you are testing locally).
  createRoot(rootElement).render(app);
}