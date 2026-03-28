import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import { Twitter, Linkedin } from 'lucide-react';

const SimonSunday: React.FC = () => {
  return (
    <div className="pb-20">
      
      {/* THE ENTITY PAYLOAD */}
      <Helmet>
        <title>Simon Sunday Chigozie | Product Designer at ddonlabs</title>
        <meta name="description" content="High-fidelity UI/UX specialist and web developer at ddonlabs, focused on architecting seamless digital experiences." />
        <link rel="canonical" href="https://ddonlabs.com/team/simon-sunday" />
        
        {/* Person Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Simon Sunday Chigozie",
              "jobTitle": "Product Designer & Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "ddonlabs",
                "url": "https://ddonlabs.com"
              },
              "sameAs": [
                "https://linkedin.com/in/simon-sunday",
                "https://twitter.com/simonsunday"
              ]
            }
          `}
        </script>
      </Helmet>

      <Section className="pt-48 pb-20 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <img src="/simon-sunday.png" alt="Simon Sunday Chigozie" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <span className="text-metadata text-purple-400 mb-6 block">Founding Team</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Simon Sunday Chigozie</h1>
            <p className="text-xl text-white/50 leading-relaxed font-medium max-w-2xl mb-10">
              High-fidelity UI/UX specialist and web developer. I focus on architecting seamless digital experiences and intuitive spatial interfaces for the modern web.
            </p>
            
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/simon-sunday" target="_blank" rel="noreferrer" className="text-white/40 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/simonsunday" target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SimonSunday;
