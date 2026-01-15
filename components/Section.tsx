
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = true }) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-32 px-5 lg:px-12 ${dark ? 'bg-black' : 'bg-slate-950'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
