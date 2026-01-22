import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const logoContainer = logoRef.current;
    const content = contentRef.current;

    if (!section || !logoContainer || !content) return;

    // 1. Setup Lines (Hide them and prepare for draw)
    const logoLines = logoContainer.querySelectorAll('.logo-line');
    logoLines.forEach((line) => {
      const length = line.getTotalLength();
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
        visibility: 'visible',
        opacity: 1
      });
    });

    // 2. Create Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2000", // INCREASED: Makes the animation last longer (slower)
        pin: true,
        scrub: 1,      // Smooth scrubbing linked to scrollbar
      }
    });

    // 3. The Animation Sequence
    tl
    // PAUSE: This empty tween forces the user to scroll a bit before anything happens
    .to({}, { duration: 0.5 }) 
    
    // DRAW: Now start drawing the lines slowly
    .to(logoLines, {
      strokeDashoffset: 0,
      duration: 3,    // Increased duration for a slower draw
      stagger: 0.2,
      ease: "power2.inOut"
    })
    
    // REVEAL: Fade in the content at the end
    .fromTo(content, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return { sectionRef, logoRef, contentRef };
};