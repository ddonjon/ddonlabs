import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  src?: string; // Optional prop for the external logo link
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = 40, 
  src = "https://res.cloudinary.com/dextb03l5/image/upload/v1769254556/ddon_xxt2hj.svg" 
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center group ${className}`} 
      style={{ width: size, height: size }}
    >
      <div className="relative z-10 w-full h-full overflow-hidden rounded-xl">
        <img 
          src={src} 
          alt="ddonlabs logo" 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          style={{ 
            // mix-blend-mode: screen makes black transparent, perfect for removing black backgrounds from JPEGs
            mixBlendMode: 'screen',
            // Refined filters to ensure the logo is bright white and the background of the image is pushed to pure black (for transparency)
            filter: 'grayscale(100%) brightness(2.5) contrast(1.2)'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;