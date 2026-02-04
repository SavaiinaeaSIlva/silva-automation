import { useEffect, useRef, useMemo } from 'react';
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
  startOpacity: 0,
  start: 'top 88%',
  stagger: 0,
  scale: 0.97,
};

const IO_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05,
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);
  const playedRef = useRef(false);

  // Memoize options to prevent effect from rerunning on every render
  const opts = useMemo(
    () => ({ ...defaultOptions, ...options }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options.delay, options.duration, options.y, options.startOpacity, options.start, options.scale]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);
    if (prefersReduced) {
      // Immediately set the final state and skip animations for users who prefer reduced motion
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      return;
    }

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
  }, [opts]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions & { childSelector?: string } = {}
) {
  const ref = useRef<T>(null);
  const { childSelector = ':scope > *', ...animOptions } = options;
  const playedRef = useRef(false);

  // Memoize options to prevent effect from rerunning on every render
  const opts = useMemo(
    () => ({ ...defaultOptions, stagger: 0.1, ...animOptions }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      animOptions.delay,
      animOptions.duration,
      animOptions.y,
      animOptions.startOpacity,
      animOptions.stagger,
      animOptions.scale,
    ]
  );

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;

    const children = parent.querySelectorAll(childSelector);
    if (children.length === 0) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);
    if (prefersReduced) {
      // Immediately set final state for children and skip animations
      gsap.set(children, { opacity: 1, y: 0, scale: 1 });
      return;
    }

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
  }, [childSelector, opts]);

  return ref;
}
