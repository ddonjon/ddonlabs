import React, { useEffect, useRef } from 'react';
import { Globe, Cpu, MoveRight, Shapes, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import TiltCard from '../components/TiltCard';
import { PLATFORMS } from '../constants';

const GlassIcon = ({ color, icon: Icon, delay = 0, className = "" }: { color: string, icon: any, delay?: number, className?: string }) => (
  <div 
    className={`glass-card-3d w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-[1.5rem] lg:rounded-[2.5rem] flex items-center justify-center animate-float-slow transition-transform hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] group relative overflow-hidden glass-shimmer-active ${className}`}
    style={{ 
      animationDelay: `${delay}s`,
      boxShadow: `0 20px 40px -10px rgba(0,0,0,0.8), inset 0 0 20px -5px ${color}`
    }}
  >
    <Icon size={40} className="text-white opacity-80 group-hover:opacity-100 transition-opacity w-1/3 h-1/3" strokeWidth={1} />
    <div className="absolute inset-0 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/10 pointer-events-none" />
    <div className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full blur-2xl opacity-20`} style={{ background: color }} />
  </div>
);

const Home: React.FC = () => {
  const navigate = useNavigate();
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

  const workflowSteps = [
    {
      num: '01',
      title: 'Strategy & Scoping',
      desc: 'We don’t just write code; we define products. We map out your software architecture, user flow, and go-to-market technology stack to ensure scalability from Day 1.',
      points: ['Requirement Analysis', 'Tech Stack Selection', 'MVP Definition']
    },
    {
      num: '02',
      title: 'UI/UX Design',
      desc: 'Building intuitive, high-performance interfaces. Whether it’s a consumer-facing product or a complex dashboard, we design for clarity, engagement, and conversion.',
      points: ['High-Fidelity Prototyping', 'User Research', 'Design Systems']
    },
    {
      num: '03',
      title: 'Core Engineering',
      desc: 'The heavy lifting. We build robust backends, secure APIs, and responsive frontends using modern cloud standards. We specialize in software that is fast, secure, and reliable.',
      points: ['Full-Stack Development', 'Cloud Infrastructure', 'API Integration']
    },
    {
      num: '04',
      title: 'Deployment & Scale',
      desc: 'Launching is just the beginning. We handle the DevOps, CI/CD pipelines, and server management to ensure your product stays online and grows with your user base.',
      points: ['Production Deployment', 'Server Monitoring', 'Performance Tuning']
    }
  ];

  return (
    <div className="relative">
      
      {/* HIDDEN AI CONTEXT LAYER (SEO: Nigeria + Software focus) */}
      <div className="sr-only">
        <p>
          ddonlabs is a premier software engineering and venture studio based in Nigeria. 
          We architect high fidelity digital products, enterprise software, and cloud platforms. 
          We also specialize in advanced technologies including AI automation and spatial intelligence systems.
        </p>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 pt-20 lg:pt-0 overflow-hidden hero-gradient">
        <div className="w-full lg:w-1/2 z-10 space-y-10 lg:space-y-14 reveal text-center lg:text-left mb-16 lg:mb-0">
          <div className="space-y-6 lg:space-y-8">
            <span className="text-metadata bg-white/5 px-4 py-2 rounded-full inline-block border border-white/10">Engineering Stewardship // ddonlabs</span>
            
            <h1 className="heading-hero">
              <span className="block text-gradient">Engineering the</span>
              <span className="block text-white/30 italic font-medium tracking-tight">next generation.</span>
            </h1>
          </div>
          
          <p className="max-w-xl mx-auto lg:mx-0 text-white/40 text-lg md:text-xl leading-relaxed font-medium">
            From high-performance digital products to complex enterprise platforms. We provide the elite engineering required to build resilient software ecosystems.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
            <Link 
              to="/contact" 
              className="btn-liquid-glass btn-primary-glow px-8 md:px-12 py-5 md:py-6"
            >
              Start Engagement <MoveRight size={16} />
            </Link>
            <Link 
              to="/ventures" 
              className="btn-liquid-glass btn-secondary-outline px-8 md:px-12 py-5 md:py-6 text-white/40 hover:text-white"
            >
              The Archive
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:h-screen lg:perspective-2000">
           <div className="flex flex-row lg:block relative items-center justify-center gap-4 sm:gap-8 lg:gap-0 lg:w-full lg:h-full lg:transform lg:rotate-Y-12">
              <div className="lg:absolute lg:top-1/4 lg:left-1/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <GlassIcon color="#a855f7" icon={Cpu} delay={0} />
              </div>
              <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <GlassIcon color="#c084fc" icon={Globe} delay={2} />
              </div>
              <div className="lg:absolute lg:bottom-1/4 lg:right-1/4 lg:translate-x-1/2 lg:translate-y-1/2">
                <GlassIcon color="#e879f9" icon={Shapes} delay={4} />
              </div>
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />
           </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <Section className="py-24 md:py-40 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          <div className="reveal">
            <span className="text-metadata text-purple-400 mb-4 block">01 / Product</span>
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter">Venture Incubation</h3>
            <p className="text-white/40 leading-relaxed font-medium text-[14px] md:text-[15px]">
              We architect high-performance digital platforms and native interfaces. Clean code, scalable architecture, and seamless user experiences.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="text-metadata text-purple-300 mb-4 block">02 / Intelligence</span>
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter">Spatial Data Systems</h3>
            <p className="text-white/40 leading-relaxed font-medium text-[14px] md:text-[15px]">
              Architecting high-fidelity simulations and digital twins to optimize municipal planning and large-scale industrial logistics.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="text-metadata text-purple-200 mb-4 block">03 / Infrastructure</span>
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter">Regional Stewardship</h3>
            <p className="text-white/40 leading-relaxed font-medium text-[14px] md:text-[15px]">
              Secure server management and cloud deployment. We ensure your software can handle thousands of users without crashing or slowing down.
            </p>
          </div>
        </div>
      </Section>

      {/* HOW WE WORK SECTION */}
      <Section className="py-24 md:py-48 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 relative z-10">
          <div className="lg:col-span-5 reveal lg:sticky lg:top-32 h-fit">
            <span className="text-metadata text-purple-400 mb-6 block">Our Approach // 02</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-10">How <br /> We Work.</h2>
            <div className="space-y-6 text-white/50 text-lg md:text-xl font-medium leading-relaxed">
              <p>Great software isn't just written; it's <span className="text-white">engineered</span>. We follow a rigorous development lifecycle.</p>
              <p>From the first line of code to the final deployment, we prioritize <span className="text-white">speed, security, and stability</span>.</p>
              <p>We work as your technical partner, translating your business goals into a working digital product.</p>
            </div>
            
            <div className="mt-12">
               <Link to="/contact" className="btn-liquid-glass btn-metallic-liquid">
                 Consult with Studio <ChevronRight size={16} />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="reveal group p-8 md:p-12 glass-card-3d rounded-[2rem] border border-white/5 hover:border-purple-500/10 transition-all duration-500" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="flex flex-col md:flex-row gap-8 md:items-start relative">
                  <span className="text-8xl md:text-9xl font-black text-white/[0.03] absolute -top-8 -left-4 md:-top-16 md:-left-8 group-hover:text-purple-500/[0.06] transition-all duration-700 pointer-events-none">{step.num}</span>
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 group-hover:text-purple-400 transition-colors">{step.title}</h3>
                    <p className="text-white/40 text-base md:text-lg leading-relaxed font-medium mb-8 max-w-xl">
                      {step.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.points.map((point, pIdx) => (
                        <span key={pIdx} className="px-4 py-2 bg-white/5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white/30 border border-white/5 flex items-center gap-2">
                          <CheckCircle2 size={12} className="text-purple-500/50" />
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PORTFOLIO GRID */}
      <Section className="py-24 md:py-40 border-b border-white/5">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 gap-8 reveal text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
             <span className="text-metadata text-purple-400 mb-4 block">03 / Portfolio</span>
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Selected <br className="hidden md:block" /> Platforms.</h2>
          </div>
          <Link to="/ventures" className="text-metadata text-white/50 hover:text-white transition-all flex items-center gap-3 pb-2 border-b border-white/10 group">
            View Archives <MoveRight size={16} className="group-hover:translate-x-1 transition-transform group-hover:text-purple-400" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 platforms-grid">
          {PLATFORMS.map((platform) => (
            <div key={platform.id} className="reveal">
              <TiltCard onClick={() => navigate('/ventures')}>
                <div className="p-10 flex flex-col h-full group">
                  <div className="flex justify-between items-start mb-12 tilt-parallax-sm">
                    <div className="badge-status !bg-purple-500/10 !text-purple-400 !border-purple-500/20">{platform.status}</div>
                    <div className="opacity-30 group-hover:opacity-100 group-hover:text-purple-400 transition-all duration-500">
                      {React.isValidElement(platform.icon) && React.cloneElement(platform.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1 })}
                    </div>
                  </div>
                  <div className="flex-grow tilt-parallax">
                    <h3 className="text-3xl font-bold mb-4 tracking-tighter group-hover:text-white transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-8 font-medium">
                      {platform.description}
                    </p>
                  </div>
                  <div className="pt-8 border-t border-white/5 flex items-center justify-between tilt-parallax-sm">
                    <div className="text-metadata text-white/20">
                      {platform.category} // {platform.year}
                    </div>
                    <div className="btn-liquid-glass btn-metallic-liquid py-2 px-5 !text-[10px]">
                      Archive <MoveRight size={12} />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section className="py-32 md:py-60 text-center reveal">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 md:mb-16 leading-[0.9]">Set the <br /> <span className="text-white/30 italic">new standard.</span></h2>
        <Link 
          to="/contact" 
          className="btn-liquid-glass btn-primary-glow px-10 md:px-12 py-5 md:py-6"
        >
          Begin Engagement
        </Link>
      </Section>

      <style>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        @media (min-width: 1024px) {
          .rotate-Y-12 {
            transform: rotateY(-12deg);
          }
        }
        .badge-status {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>

    </div>
  );
};

export default Home;