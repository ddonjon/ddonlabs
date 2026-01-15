
import React, { useEffect, useRef } from 'react';
import Section from '../components/Section';
import { Target, Eye, Award, Code, Database, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
        <div className="max-w-5xl">
          <span className="text-metadata text-purple-400 mb-8 block reveal">Company Narrative</span>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-12 leading-[0.95] tracking-tighter reveal">
            Technical <br /> Stewardship <br /> <span className="text-white/30">& Innovation.</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed mb-16 max-w-3xl font-medium reveal">
            ddonlabs acts as the parent entity for specialized tech ventures. We provide the elite engineering, spatial intelligence, and strategic vision required to build resilient digital ecosystems.
          </p>
          <Link to="/contact" className="btn-primary-glow px-12 py-5 rounded-full text-[13px] font-bold tracking-widest uppercase inline-flex items-center gap-3 reveal">
            Inquire for Partnership <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section className="bg-white/[0.01] border-y border-white/5 py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Code className="w-7 h-7" />, 
              title: "Engineering", 
              desc: "We maintain a high bar for technical excellence, building software that is as beautiful as it is robust and scalable.",
              color: "text-purple-400"
            },
            { 
              icon: <Zap className="w-7 h-7" />, 
              title: "Venture Growth", 
              desc: "As a mother company, we provide the resources and core IP that allow our sub-brands to dominate their niches.",
              color: "text-blue-400"
            },
            { 
              icon: <Award className="w-7 h-7" />, 
              title: "Integrity", 
              desc: "We focus on long-term authority and quality. We don't chase trends; we build digital assets with generational value.",
              color: "text-indigo-400"
            }
          ].map((item, i) => (
            <div key={i} className="p-12 card-premium reveal h-full">
              <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">{item.title}</h3>
              <p className="text-white/40 leading-relaxed font-medium text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 reveal">
            <span className="text-metadata mb-4 block">Operational Model</span>
            <h2 className="text-5xl font-extrabold tracking-tighter">How we operate.</h2>
          </div>
          <div className="space-y-10">
            <div className="card-premium p-12 reveal border-l-2 border-l-purple-500/50">
              <h4 className="text-2xl font-bold mb-6 tracking-tighter">The Studio Model</h4>
              <p className="text-white/50 leading-relaxed font-medium">
                Through ddonlabs Studio, we take on high-stakes external projects, applying our internal venture-building standards to client work. We don't just build sites; we architect platforms that serve as long-term assets.
              </p>
            </div>
            <div className="card-premium p-12 reveal border-l-2 border-l-blue-500/50">
              <h4 className="text-2xl font-bold mb-6 tracking-tighter">Strategic Cycles</h4>
              <p className="text-white/50 leading-relaxed font-medium">
                Every project under the ddonlabs umbrella benefits from our shared technical core. Insights and innovations from Phoenix or CityTwin are cycled back to improve the stability and feature set of all our offerings.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
