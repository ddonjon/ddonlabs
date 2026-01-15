import React, { useEffect, useRef } from 'react';
import Section from '../components/Section';
import { Mail, Monitor, Building2, Send, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
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
      <Section className="pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 reveal">
            <span className="text-metadata text-purple-400 mb-8 block">Engagement</span>
            <h1 className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter">Let's <br /> Connect.</h1>
            <p className="text-xl text-white/50 mb-16 leading-relaxed font-medium max-w-md">
              We focus on long-term stewardship. If you have a high-stakes spatial or engineering challenge, reach out for a technical consultation.
            </p>
            
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <span className="text-metadata mb-3 block group-hover:text-white transition-all">Studio Services</span>
                <p className="text-2xl font-bold flex items-center gap-3 tracking-tighter group-hover:text-purple-400 transition-colors">
                  studio@ddonlabs.com <ArrowUpRight size={18} className="text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </p>
              </div>
              <div className="group cursor-pointer">
                <span className="text-metadata mb-3 block group-hover:text-white transition-all">Strategic Partnerships</span>
                <p className="text-2xl font-bold flex items-center gap-3 tracking-tighter group-hover:text-blue-400 transition-colors">
                  partners@ddonlabs.com <ArrowUpRight size={18} className="text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 reveal">
            <div className="card-premium p-10 md:p-14">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-metadata block">Name</label>
                    <input type="text" className="w-full glass-input rounded-xl py-4 px-6 text-sm font-medium" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-metadata block">Company</label>
                    <input type="text" className="w-full glass-input rounded-xl py-4 px-6 text-sm font-medium" placeholder="Organization" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-metadata block">Direct Email</label>
                  <input type="email" className="w-full glass-input rounded-xl py-4 px-6 text-sm font-medium" placeholder="jane@example.com" />
                </div>

                <div className="space-y-3">
                  <label className="text-metadata block">Technical Context</label>
                  <textarea rows={4} className="w-full glass-input rounded-xl py-4 px-6 text-sm font-medium resize-none" placeholder="Tell us about the scope of your venture..." />
                </div>

                <button type="submit" className="btn-liquid-glass btn-primary-glow w-full py-5">
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;