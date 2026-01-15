
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '/ventures' },
    { name: 'Projects', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation Pill */}
      <div className="fixed top-6 left-0 w-full z-[200] px-4 pointer-events-none">
        <nav className="max-w-fit mx-auto glass-pill rounded-full px-4 md:px-8 py-3 flex items-center gap-8 pointer-events-auto">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <Logo size={22} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold tracking-tight transition-all ${
                  location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden text-white/70 p-1 hover:text-white transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay - Moved out of the pointer-events-none parent */}
      <div 
        className={`fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
           <button 
             onClick={() => setIsOpen(false)} 
             className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
             aria-label="Close Menu"
           >
             <X size={32} />
           </button>

           <div className="mb-8">
             <Logo size={48} />
           </div>

           {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black tracking-tighter transition-all duration-300 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </Link>
           ))}

           <div className={`mt-12 h-px w-12 bg-white/10 transition-all duration-700 ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
           
           <div className={`mt-4 text-detail opacity-40 transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-40' : 'translate-y-4 opacity-0'}`}>
             ddonlabs // engineering stewardship
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
