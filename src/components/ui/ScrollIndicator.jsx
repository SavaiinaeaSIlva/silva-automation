import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity: 1 at top, 0 after scrolling 100px
      const currentScroll = window.scrollY;
      const newOpacity = Math.max(0, 1 - currentScroll / 100);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If opacity is 0, don't render anything to save performance
  if (opacity === 0) return null;

  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-50 pointer-events-none transition-opacity duration-300"
      style={{ opacity: opacity }}
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">
        Scroll
      </span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down blur-[1px]"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;