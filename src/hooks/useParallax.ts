import { useEffect } from 'react';

/**
 * Simple parallax hook that updates a CSS variable (`--overlay-offset`) on the
 * target element according to window scroll. Intended for subtle background
 * movement (non-essential decorative effect).
 *
 * Usage: useParallax('#hero', { strength: 0.15 });
 */
export function useParallax(selector: string, options?: { strength?: number }) {
  const strength = options?.strength ?? 0.12; // proportion of scroll (small)

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el || typeof window === 'undefined') return;

    let running = false;

    function onFrame() {
      running = false;
      const element = el;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      // offset relative to viewport center
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const offset = Math.round(distanceFromCenter * strength);
      element.style.setProperty('--overlay-offset', `${offset}px`);
    }

    function onScroll() {
      if (running) return;
      running = true;
      requestAnimationFrame(onFrame);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      el.style.removeProperty('--overlay-offset');
    };
  }, [selector, strength]);
}
