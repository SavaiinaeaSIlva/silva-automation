import { useEffect, useRef, useState } from 'react';

type LightLeakVariant = 'v1' | 'v2' | 'v3';

type SectionLayoutProps = {
  id: string;
  children: React.ReactNode;
  lightLeaks?: LightLeakVariant;
};

export default function SectionLayout({ id, children, lightLeaks }: SectionLayoutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!lightLeaks || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [lightLeaks]);

  const sectionClasses = [
    'py-24 md:py-32 text-text-main',
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
