import React, { useEffect, useRef } from 'react';
import Section from '../components/Section';
import TiltCard from '../components/TiltCard';
import { PLATFORMS } from '../constants';
import { Platform } from '../types';
import { Rocket, ArrowRight } from 'lucide-react';

const Ventures: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="pb-20">
      <Section className="pt-48 pb-32">
        <div className="max-w-4xl reveal">
          <span className="text-metadata mb-8 block">Project Archive</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10">Studio <span className="text-white/30 italic">Output.</span></h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed font-medium">
            A centralized repository of our current ventures and spatial intelligence sprints. We focus on high-fidelity utility and technical durability.
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PLATFORMS.map((platform) => (
            <div key={platform.id} className="reveal">
              <TiltCard className="min-h-[400px]">
                <div className="p-12 h-full flex flex-col group">
                  <div className="flex justify-between items-start mb-16 tilt-parallax-sm">
                    <div className="badge-status">
                      {platform.status}
                    </div>
                    <div className="text-white/20 group-hover:text-blue-400 transition-colors">
                      {React.isValidElement(platform.icon) && React.cloneElement(platform.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1 })}
                    </div>
                  </div>

                  <div className="flex-grow tilt-parallax">
                    <span className="text-metadata mb-4 block text-white/20 group-hover:text-white/40 transition-colors">{platform.category}</span>
                    <h2 className="text-4xl font-black mb-6 tracking-tight">
                      {platform.name}
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed max-w-sm font-medium">
                      {platform.description}
                    </p>
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between text-metadata tilt-parallax-sm">
                    <span className="text-white/20">Launched {platform.year}</span>
                    <div className="flex items-center gap-2 group-hover:text-white transition-colors text-white/30">
                      Explore <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
          
          <div className="reveal">
            <div className="h-full min-h-[400px] rounded-[24px] border-2 border-dashed border-white/5 bg-transparent flex flex-col items-center justify-center text-center p-14 hover:border-white/10 transition-all">
              <Rocket size={32} className="text-white/10 mb-8" strokeWidth={1} />
              <h3 className="text-xl font-bold text-white/30 mb-2">Incubating Ventures</h3>
              <p className="text-metadata opacity-40">Systems in closed review</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Ventures;