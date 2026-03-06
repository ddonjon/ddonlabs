import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Ventures from './pages/Ventures';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// NEW: Component to update the browser tab title
const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // UPDATED: High-end SEO titles to replace the generic ones
    const titles: { [key: string]: string } = {
      '/': 'ddonlabs | Premier Software Engineering & Venture Lab',
      '/about': 'Company Narrative | ddonlabs',
      '/ventures': 'Project Archive | ddonlabs',
      '/case-studies': 'Archived Studies | ddonlabs',
      '/contact': 'Start Engagement | ddonlabs',
      '/blog': 'Insights & Strategy | ddonlabs'
    };

    // UPDATED: A stronger fallback title
    const title = titles[pathname] || 'ddonlabs | Engineering Stewardship';
    document.title = title;
  }, [pathname]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-purple-500/30">
        <ScrollToTop />
        <PageTitle />
        <Navbar />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;