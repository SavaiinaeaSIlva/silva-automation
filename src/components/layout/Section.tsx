import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Section.module.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'dark';
  padding?: 'small' | 'medium' | 'large';
  /** Disable scroll reveal animation */
  noReveal?: boolean;
  /** Custom reveal animation options */
  revealOptions?: {
    y?: number;
    duration?: number;
    start?: string;
  };
}

export const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'large',
  noReveal = false,
  revealOptions = {},
}: SectionProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || noReveal) return;

    const { y = 30, duration = 0.8, start = 'top 85%' } = revealOptions;

    // Set initial state
    gsap.set(el, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [noReveal, revealOptions]);

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${styles[background]} ${styles[padding]} ${className}`}
    >
      {children}
    </section>
  );
};
