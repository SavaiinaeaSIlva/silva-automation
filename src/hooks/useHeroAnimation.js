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

    // 1. Select ALL elements that should be drawn (lines, rects, paths)
    // We select anything with the class 'logo-line'
    const logoLines = logoContainer.querySelectorAll('.logo-line');
    
    // 2. Prepare them: Calculate length and hide them initially
    logoLines.forEach((line) => {
      const length = line.getTotalLength();
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
        visibility: 'visible', // Make visible now that offset hides the stroke
        opacity: 1
      });
    });

    // 3. Create the Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=100%", // Pin for 100% of viewport height
        pin: true,
        scrub: 1,      // Smooth scrubbing
      }
    });

    // 4. Animation Sequence
    tl.to(logoLines, {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.2, // Draw them one after another slightly
      ease: "power2.inOut"
    })
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