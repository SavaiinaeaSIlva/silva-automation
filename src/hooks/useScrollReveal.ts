import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  delay?: number;
  duration?: number;
  y?: number;
  startOpacity?: number;
  start?: string;
  stagger?: number;
  scale?: number;
};

const defaultOptions: RevealOptions = {
  delay: 0,
  duration: 0.8,
  y: 40,
  startOpacity: 0,
  start: 'top 85%',
  stagger: 0,
  scale: 1,
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);
  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, {
      opacity: opts.startOpacity,
      y: opts.y,
      scale: opts.scale,
    });

    const animation = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: opts.duration,
      delay: opts.delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: opts.start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [opts.delay, opts.duration, opts.y, opts.startOpacity, opts.start, opts.scale]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions & { childSelector?: string } = {}
) {
  const ref = useRef<T>(null);
  const { childSelector = ':scope > *', ...animOptions } = options;
  const opts = { ...defaultOptions, stagger: 0.1, ...animOptions };

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;

    const children = parent.querySelectorAll(childSelector);
    if (children.length === 0) return;

    gsap.set(children, {
      opacity: opts.startOpacity,
      y: opts.y,
      scale: opts.scale,
    });

    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: opts.duration,
      delay: opts.delay,
      stagger: opts.stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: parent,
        start: opts.start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [
    childSelector,
    opts.delay,
    opts.duration,
    opts.y,
    opts.startOpacity,
    opts.start,
    opts.stagger,
    opts.scale,
  ]);

  return ref;
}
