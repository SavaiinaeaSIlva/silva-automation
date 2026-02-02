import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLenis } from '../contexts/LenisContext';

const SHOW_AFTER_PX = 200;

function getScrollTop(): number {
  return document.scrollingElement?.scrollTop ?? 0;
}

export default function BackToTop() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const update = () => {
      const scrollTop = getScrollTop();
      setVisible(scrollTop > SHOW_AFTER_PX);
    };
    update();
    const raf = requestAnimationFrame(update);
    const t = setTimeout(update, 150);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const el = document.scrollingElement;
    if (el && el !== document.documentElement) {
      el.addEventListener('scroll', update, { passive: true });
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (el && el !== document.documentElement) {
        el.removeEventListener('scroll', update);
      }
    };
  }, []);

  const button = (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className="back-to-top"
      data-visible={visible}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.2s ease',
        zIndex: 9999,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <path
          d="M10 6.5l-4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 6.5l4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return createPortal(button, document.body);
}
