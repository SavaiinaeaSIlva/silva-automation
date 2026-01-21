import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 z-50 pointer-events-none">
      <span className="text-[10px] uppercase tracking-[0.2em] text-yellow-400">
        Scroll
      </span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down blur-[1px]"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;