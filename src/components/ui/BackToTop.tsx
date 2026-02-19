import { useState, useEffect } from 'react';
import { siteContent } from '@/constants';
import styles from './BackToTop.module.css';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInPricing, setIsInPricing] = useState(false);
  const [isInFaq, setIsInFaq] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const pricingSection = document.getElementById('pricing');
    const faqSection = document.getElementById('faq');
    if (!pricingSection || !faqSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === pricingSection) {
            setIsInPricing(entry.isIntersecting);
          }
          if (entry.target === faqSection) {
            setIsInFaq(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(pricingSection);
    observer.observe(faqSection);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${styles.backToTop} ${isVisible ? styles.visible : ''} ${
        isInPricing && !isInFaq ? styles.inverted : ''
      }`}
      onClick={scrollToTop}
      aria-label={siteContent.header.backToTopAria}
    >
      ↑
    </button>
  );
};
