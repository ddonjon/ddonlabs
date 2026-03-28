import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

const NannimNansoh: React.FC = () => {
  return (
    <div className="pb-20">
      
      {/* THE ENTITY PAYLOAD */}
      <Helmet>
        <title>Nannim Nansoh Jonathan | CEO & Cloud Engineer at ddonlabs</title>
        <meta name="description" content="Founder and CEO of ddonlabs. Specializing in AWS Cloud, DevOps engineering, and spatial data systems." />
        <link rel="canonical" href="https://ddonlabs.com/team/nannim-nansoh" />
        
        {/* NEW: Person Schema explicitly linking you to the internet */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nannim Nansoh Jonathan",
              "jobTitle": "CEO, Cloud & DevOps Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "ddonlabs",
                "url": "https://ddonlabs.com"
              },
              "sameAs": [
                "https://linkedin.com/in/nannim-nansoh",
                "https://twitter.com/ddonjon007",
                "https://github.com/ddonjon"
              ]
            }
          `}
        </script>
      </Helmet>

      <Section className="pt-48 pb-20 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
             {/* Use a high-quality, professional headshot here */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <img src="/nannim-nansoh.jpeg" alt="Nannim Nansoh Jonathan" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <span className="text-metadata text-purple-400 mb-6 block">Founder & CEO</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Nannim Nansoh</h1>
            <p className="text-xl text-white/50 leading-relaxed font-medium max-w-2xl mb-10">
              Product Manager and Cloud Specialist with a deep background in Cybersecurity. I lead the technical vision and engineering stewardship at ddonlabs, architecting high-fidelity digital platforms and spatial intelligence systems like CityTwin.
            </p>
            
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/nannim-nansoh" target="_blank" rel="noreferrer" className="text-white/40 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ddonjon" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/ddonjon007" target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              {/* NEW: Facebook Link */}
              <a href="https://www.facebook.com/share/1GWjzXmiSV/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default NannimNansoh;
