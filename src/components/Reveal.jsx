import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const Reveal = ({ 
  children, 
  animation = 'reveal-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true 
}) => {
  const { ref, isVisible } = useRevealOnScroll(threshold, once);

  const animationClasses = {
    'reveal-up': 'animate-reveal-up',
    'fade-in': 'animate-fade-in',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
    'scale-in': 'animate-scale-in'
  };

  return (
    <div
      ref={ref}
      className={`
        ${animationClasses[animation] || ''}
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationPlayState: isVisible ? 'running' : 'paused'
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
