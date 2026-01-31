import React, { useEffect, useRef } from 'react';
import { Award, Code, Zap, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import TiltCard from '../components/TiltCard';

// Define the shape of a team member to prevent TypeScript errors
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const About: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Enhanced observer to trigger color reveal on scroll
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.2, // Trigger when 20% of the card is visible
      rootMargin: '0px 0px -50px 0px' 
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Nannim Nansoh",
      role: "CEO, Cloud & DevOps Engineer",
      image: "https://res.cloudinary.com/dextb03l5/image/upload/v1769885080/WhatsApp_Image_2026-01-31_at_7.28.10_PM_j3ba0j.jpg",
      bio: "Product Manager and Cloud Specialist with a deep background in Cybersecurity, leading ddonlabs' technical vision.",
      linkedin: "https://linkedin.com/in/nannim-nansoh",
      twitter: "https://twitter.com/ddonjon007"
    },
    {
      name: "Magit Israel Bamshak",
      role: "Project Manager",
      image: "https://res.cloudinary.com/dextb03l5/image/upload/v1769885029/6ba70f1e-c18a-4267-ba52-b04532483032_sqbggb.jpg",
      bio: "Expert project manager with a robust background in Cybersecurity, ensuring structural integrity and operational excellence.",
      linkedin: "https://linkedin.com/in/magit-israel",
      github: "https://github.com/magitisrael"
    },
    {
      name: "Simon Sunday Chigozie",
      role: "Product Designer & Web Developer",
      image: "https://res.cloudinary.com/dextb03l5/image/upload/v1769885013/ChatGPT_Image_Jan_31_2026_07_42_34_PM_yp40zt.png",
      bio: "High-fidelity UI/UX specialist and web developer focused on architecting seamless digital experiences and spatial interfaces.",
      linkedin: "https://linkedin.com/in/simon-sunday",
      twitter: "https://twitter.com/simonsunday"
    }
  ];

  // Automatically generate Schema for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ddonlabs",
    "url": "https://ddonlabs.com",
    "logo": "https://res.cloudinary.com/dextb03l5/image/upload/v1769254556/ddon_xxt2hj.svg",
    "founders": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "image": member.image,
      "description": member.bio,
      "sameAs": [
        member.linkedin, 
        member.twitter, 
        member.github
      ].filter(Boolean)
    }))
  };

  return (
    <div className="pb-20">
      {/* Styles for the reveal animation */}
      <style>{`
        .team-image {
          filter: grayscale(100%);
          transition: filter 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s ease;
        }
        .reveal.active .team-image {
          filter: grayscale(0%);
        }
        @media (min-width: 1024px) {
          .group:hover .team-image {
            filter: grayscale(0%) !important;
            transform: scale(1.05);
          }
        }
      `}</style>

      {/* Inject SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

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

      {/* Team Section */}
      <Section className="py-24 md:py-40">
        <div className="text-center mb-24 reveal">
          <span className="text-metadata mb-4 block">Founding Team</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">The Architects.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
              <TiltCard>
                <div className="p-8 h-full flex flex-col group">
                  <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role} at ddonlabs`}
                      className="w-full h-full object-cover team-image"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-purple-400 transition-colors">{member.name}</h3>
                    <p className="text-metadata text-white/30 mb-6 lowercase">{member.role}</p>
                    <p className="text-white/40 text-sm leading-relaxed font-medium">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Icons Row */}
                  <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter size={20} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
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