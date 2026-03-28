import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Ventures from './pages/Ventures';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Entity Pages
import NannimNansoh from './pages/team/NannimNansoh';
import MagitIsrael from './pages/team/MagitIsrael'; 
import SimonSunday from './pages/team/SimonSunday'; 

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
        
        {/* GLOBAL SEO CONFIG */}
        {/* We remove the titleTemplate here to prevent it from fighting with the 
            explicit titles we just wrote in your team pages. */}
        <Helmet>
          <title>ddonlabs | Premier Software Engineering & Venture Lab</title>
          <meta name="description" content="A premier software engineering and venture studio. We architect high-fidelity digital products, cloud ecosystems, and spatial intelligence systems for the global frontier." />
          <meta property="og:site_name" content="ddonlabs" />
        </Helmet>

        <Navbar />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Founder Entity Routes */}
            <Route path="/team/nannim-nansoh" element={<NannimNansoh />} />
            <Route path="/team/magit-israel" element={<MagitIsrael />} />
            <Route path="/team/simon-sunday" element={<SimonSunday />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;