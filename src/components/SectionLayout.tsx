import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { useLenis } from '@/core';

type SectionLayoutProps = {
  id: string;
  children: ReactNode;
  fullScreen?: boolean;
  compactTop?: boolean; // Reduce top padding to allow overlap with preceding sections
};

export default function SectionLayout({
  id,
  children,
  fullScreen,
  compactTop,
}: SectionLayoutProps) {
  const sectionRef = useRef<HTMLElement>(null);
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

  // Memoize class string to avoid recalculating on every render
  const sectionClasses = useMemo(() => {
    const baseClass = fullScreen
      ? compactTop
        ? 'min-h-screen flex flex-col justify-center py-12 md:py-16'
        : 'min-h-screen flex flex-col justify-center py-16 md:py-24'
      : compactTop
        ? 'pt-12 md:pt-16 pb-16 md:pb-20'
        : 'py-section-py md:py-section-py-lg';

    return `${baseClass} text-text-main`;
  }, [fullScreen, compactTop]);

  return (
    <section ref={sectionRef} id={id} className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}
