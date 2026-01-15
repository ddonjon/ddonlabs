
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-10">
              <Logo size={32} />
              <span className="text-xl font-black tracking-tighter uppercase">ddonlabs</span>
            </Link>
            <h3 className="text-3xl font-black mb-8 leading-tight tracking-tighter">
              Engineering autonomous <br /> ecosystems for the <br /> global frontier.
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"><Twitter size={14} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"><Linkedin size={14} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"><Github size={14} /></a>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <span className="text-detail mb-8 block opacity-30">Venture Hub</span>
            <ul className="space-y-4 text-sm font-bold tracking-tight">
              <li><Link to="/ventures" className="hover:text-purple-400 transition-colors">Phoenix Exports</Link></li>
              <li><Link to="/ventures" className="hover:text-purple-400 transition-colors">CityTwin</Link></li>
              <li><Link to="/ventures" className="hover:text-purple-400 transition-colors">Studio Arm</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="text-detail mb-8 block opacity-30">Company</span>
            <ul className="space-y-4 text-sm font-bold tracking-tight">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Hub</Link></li>
              <li><Link to="/case-studies" className="hover:text-purple-400 transition-colors">Archives</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-detail opacity-20">© 2025 ddonlabs Engineering. High Fidelity Output.</p>
          <div className="flex gap-10">
            <a href="#" className="text-detail opacity-20 hover:opacity-100">Privacy</a>
            <a href="#" className="text-detail opacity-20 hover:opacity-100">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
