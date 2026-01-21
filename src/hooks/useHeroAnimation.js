// useHeroAnimation - GSAP ScrollTrigger stroke draw animation for hero logo
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for hero section scroll-triggered stroke draw animation
 * Animates logo text and line drawing on scroll, then fades in content
 * 
 * @returns {Object} refs - Object containing refs for animated elements
 */
function useHeroAnimation() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Ensure refs are available
    if (!sectionRef.current || !logoRef.current || !contentRef.current) return;

    // Get all stroke elements from the logo SVG
    const silvaText = logoRef.current.querySelector(".silva-text");
    const automationText = logoRef.current.querySelector(".automation-text");
    const logoLine = logoRef.current.querySelector(".logo-line");

    if (!silvaText || !automationText || !logoLine) return;

    // Create GSAP context for automatic cleanup
    const ctx = gsap.context(() => {
      // Calculate stroke lengths for dasharray animation
      // For text elements, we estimate based on font size and character count
      const silvaLength = 800; // Approximate stroke length for "SILVA"
      const automationLength = 600; // Approximate stroke length for "AUTOMATION"
      const lineLength = 200; // Line length (x2 - x1 = 300 - 100 = 200)

      // Set initial stroke-dasharray and stroke-dashoffset
      gsap.set(silvaText, {
        strokeDasharray: silvaLength,
        strokeDashoffset: silvaLength,
        opacity: 1,
      });

      // AUTOMATION text has no stroke, just fade it in
      gsap.set(automationText, {
        opacity: 0,
      });

      gsap.set(logoLine, {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
        opacity: 1,
      });

      // Set content initially hidden
      gsap.set(contentRef.current, {
        autoAlpha: 0,
        y: 30,
      });

      // Create the main timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          // Disable on mobile for better performance
          // matchMedia handled separately below
        },
      });

      // Animation sequence
      tl
        // Phase 1: Draw "SILVA" text
        .to(silvaText, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        // Phase 2: Fade in "AUTOMATION" text (overlapping slightly)
        .to(
          automationText,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.3"
        )
        // Phase 3: Draw the underline
        .to(
          logoLine,
          {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        // Phase 4: Zoom in the logo
        .to(logoRef.current, {
          scale: 2.5,
          duration: 0.6,
          ease: "power2.in",
        })
        // Phase 5: Fade out logo while still zooming
        .to(logoRef.current, {
          autoAlpha: 0,
          scale: 4,
          duration: 0.4,
          ease: "power2.in",
        })
        .to(
          contentRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Hold for a moment
        .to({}, { duration: 0.2 });

      // Mobile optimization: simpler animation on small screens
      ScrollTrigger.matchMedia({
        "(max-width: 767px)": function () {
          // Kill the complex animation on mobile
          tl.scrollTrigger?.kill();
          
          // Simple fade in for mobile
          gsap.set(silvaText, {
            strokeDashoffset: 0,
            opacity: 1,
          });
          
          gsap.set([automationText, logoLine], {
            opacity: 1,
          });
          
          gsap.set(contentRef.current, {
            autoAlpha: 1,
            y: 0,
          });

          // Simple scroll-triggered fade
          gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          })
            .from(logoRef.current, {
              autoAlpha: 0,
              y: 20,
            })
            .from(
              contentRef.current,
              {
                autoAlpha: 0,
                y: 20,
              },
              "-=0.5"
            );
        },
      });
    }, sectionRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return {
    sectionRef,
    logoRef,
    contentRef,
  };
}

export default useHeroAnimation;
