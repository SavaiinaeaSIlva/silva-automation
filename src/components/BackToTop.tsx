import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { siteContent } from '@/content/siteContent';
import { useLenis } from '@/core';

const SHOW_AFTER_PX = 200;

export default function BackToTop() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [lenis]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollTop > SHOW_AFTER_PX);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const button = (
    <button
      type="button"
      aria-label={siteContent.header.backToTopAria}
      onClick={scrollToTop}
      className="back-to-top"
      data-visible={visible}
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
