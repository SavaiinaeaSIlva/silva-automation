import { useEffect, useRef, useState } from 'react';
import type { NavLink } from '@/types';

interface UseActiveSectionReturn {
  activeId: string;
  updateActiveId: (nextId: string) => void;
  lockObserver: () => void;
}

export const useActiveSection = (navLinks: NavLink[]): UseActiveSectionReturn => {
  const [activeId, setActiveId] = useState<string>('');
  const observerLocked = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateActiveId = (nextId: string) => {
    setActiveId((current) => (current === nextId ? current : nextId));
  };

  const lockObserver = () => {
    observerLocked.current = true;
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      observerLocked.current = false;
      unlockTimer.current = null;
    }, 700);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (observerLocked.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) updateActiveId(`#${visible.target.id}`);
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    };
  }, [navLinks]);

  return { activeId, updateActiveId, lockObserver };
};
