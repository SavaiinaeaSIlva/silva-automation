import { useEffect, useRef, useState } from 'react';
import { useLenis } from '../contexts/LenisContext';

type LightLeakVariant = 'v1' | 'v2' | 'v3';

type SectionLayoutProps = {
  id: string;
  children: React.ReactNode;
  lightLeaks?: LightLeakVariant;
  fullScreen?: boolean;
};

export default function SectionLayout({
  id,
  children,
  lightLeaks,
  fullScreen,
}: SectionLayoutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  // When a section mounts (including lazy-loaded ones), let Lenis
  // recalculate scroll metrics so the page remains fully scrollable.
  useEffect(() => {
    if (!lenis) return;
    // Safely tell Lenis that layout/content may have changed.
    // This helps avoid cases where new sections extend the page
    // but Lenis' internal height doesn't update, which can prevent
    // scrolling all the way to the bottom.
    lenis.resize();
  }, [lenis]);

  useEffect(() => {
    if (!lightLeaks || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [lightLeaks]);

  const sectionClasses = [
    fullScreen ? 'min-h-screen flex flex-col justify-center py-16 md:py-20' : 'py-24 md:py-32',
    'text-text-main',
    lightLeaks && 'section-light-leaks',
    lightLeaks && `light-leak-${lightLeaks}`,
    lightLeaks && isVisible && 'is-visible',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section ref={sectionRef} id={id} className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}
