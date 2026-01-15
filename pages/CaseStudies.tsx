
import React from 'react';
import Section from '../components/Section';
import { Clock, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  return (
    <div className="pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-radial-main opacity-50 pointer-events-none" />
      
      <Section className="pt-40 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-bold mb-10">
          <Clock size={16} />
          Project Status: Formalizing Review
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight">Coming Soon</h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-16">
          We are currently documenting multiple municipal partnerships and logistics simulations. Our archives will be unlocked soon for verified institutional partners.
        </p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           <div className="card-metallic rounded-3xl p-12 flex flex-col items-center justify-center opacity-40 grayscale group hover:grayscale-0 transition-all cursor-not-allowed">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <Lock className="w-8 h-8 text-slate-600 group-hover:text-purple-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">CityTwin: Metropolis Alpha</h3>
              <p className="text-slate-500 text-sm font-medium">Under Embargo until Q4 2024</p>
           </div>
           
           <div className="card-metallic rounded-3xl p-12 flex flex-col items-center justify-center opacity-40 grayscale group hover:grayscale-0 transition-all cursor-not-allowed">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <Lock className="w-8 h-8 text-slate-600 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Phoenix: Corridor Simulation</h3>
              <p className="text-slate-500 text-sm font-medium">Under Embargo until Q1 2025</p>
           </div>
        </div>
        
        <div className="flex flex-col items-center gap-8">
          <div className="h-px w-24 bg-white/10" />
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
            <ArrowLeft size={16} />
            Back to Hub
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
