import { useEffect, useRef, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP Scroll Reveal Hook
 * Animates elements into view when they enter the viewport
 */
export interface ScrollRevealOptions {
  /** Animation duration in seconds */
  duration?: number;
  /** Start position: 'top 80%' means animation starts when top of element hits 80% of viewport */
  start?: string;
  /** Initial Y offset in pixels */
  y?: number;
  /** Initial X offset in pixels */
  x?: number;
  /** Initial opacity */
  opacity?: number;
  /** Initial scale */
  scale?: number;
  /** Easing function */
  ease?: string;
  /** Delay before animation starts */
  delay?: number;
  /** Whether to toggle on scroll up/down */
  toggleActions?: string;
  /** Stagger children elements */
  stagger?: number;
  /** Selector for staggered children */
  staggerSelector?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);

  const {
    duration = 0.8,
    start = 'top 85%',
    y = 40,
    x = 0,
    opacity = 0,
    scale = 1,
    ease = 'power2.out',
    delay = 0,
    toggleActions = 'play none none none',
    stagger = 0,
    staggerSelector,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // If staggering children
      if (stagger > 0 && staggerSelector) {
        const children = el.querySelectorAll(staggerSelector);
        if (children.length > 0) {
          gsap.fromTo(
            children,
            { y, x, opacity, scale },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              duration,
              ease,
              delay,
              stagger,
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions,
              },
            }
          );
          return;
        }
      }

      // Single element animation
      gsap.fromTo(
        el,
        { y, x, opacity, scale },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [duration, start, y, x, opacity, scale, ease, delay, toggleActions, stagger, staggerSelector]);

  return ref;
}

/**
 * GSAP Parallax Hook
 * Creates smooth parallax scrolling effect on an element
 */
export interface ParallaxOptions {
  /** Speed multiplier: positive = slower than scroll, negative = faster */
  speed?: number;
  /** Start position for the parallax effect */
  start?: string;
  /** End position for the parallax effect */
  end?: string;
  /** Apply to a child selector instead of the element itself */
  childSelector?: string;
  /** Whether to scrub smoothly (true) or snap (number for scrub duration) */
  scrub?: boolean | number;
}

export function useParallaxGSAP<T extends HTMLElement>(
  options: ParallaxOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);

  const {
    speed = 0.3,
    start = 'top bottom',
    end = 'bottom top',
    childSelector,
    scrub = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target = childSelector ? el.querySelector(childSelector) : el;
    if (!target) return;

    const ctx = gsap.context(() => {
      // Calculate the Y movement based on speed
      // Positive speed = element moves slower (appears to go up relative to scroll)
      // Negative speed = element moves faster (appears to go down)
      const yMovement = speed * 100;

      gsap.fromTo(
        target,
        { y: -yMovement },
        {
          y: yMovement,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [speed, start, end, childSelector, scrub]);

  return ref;
}

/**
 * GSAP Background Parallax Hook
 * Creates parallax effect on background elements (like dots overlay)
 */
export function useBackgroundParallax<T extends HTMLElement>(
  options: { speed?: number; scrub?: boolean | number } = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { speed = 0.15, scrub = 1.5 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Move the background position for parallax effect
      gsap.to(el, {
        backgroundPositionY: `${speed * 100}%`,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed, scrub]);

  return ref;
}

/**
 * Batch scroll reveal for multiple elements
 * Use this to animate a grid of cards or list items
 */
export function useScrollRevealBatch<T extends HTMLElement>(
  selector: string,
  options: Omit<ScrollRevealOptions, 'staggerSelector'> = {}
): RefObject<T | null> {
  const containerRef = useRef<T>(null);

  const {
    duration = 0.6,
    start = 'top 85%',
    y = 30,
    x = 0,
    opacity = 0,
    scale = 0.98,
    ease = 'power2.out',
    stagger = 0.1,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { y, x, opacity, scale },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          duration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [selector, duration, start, y, x, opacity, scale, ease, stagger]);

  return containerRef;
}

// Re-export gsap and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
