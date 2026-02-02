import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
  y: 48,
  startOpacity: 1,
  start: 'top 88%',
  stagger: 0,
  scale: 0.97,
};

const IO_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);
  const opts = { ...defaultOptions, ...options };
  const playedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, {
      opacity: opts.startOpacity,
      y: opts.y,
      scale: opts.scale,
    });

    const isImmediate = opts.start === 'top top';

    const animation = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: opts.duration,
      delay: opts.delay,
      ease: 'power3.out',
      paused: !isImmediate,
    });

    if (isImmediate) {
      animation.play(0);
      return () => animation.kill();
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (playedRef.current || !entry?.isIntersecting) return;
      playedRef.current = true;
      animation.play();
    }, IO_OPTIONS);

    observer.observe(el);
    return () => {
      observer.disconnect();
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
  const playedRef = useRef(false);

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
      paused: true,
    });

    const observer = new IntersectionObserver(([entry]) => {
      if (playedRef.current || !entry?.isIntersecting) return;
      playedRef.current = true;
      animation.play();
    }, IO_OPTIONS);

    observer.observe(parent);
    return () => {
      observer.disconnect();
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
