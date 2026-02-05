import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type Lenis from 'lenis';
import { siteContent } from '@/content/siteContent';
import { useLenis } from '@/core';
import silvaIcon from '@/assets/icons/silva-icon.png';

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  lenis: Lenis | null;
  onClick?: () => void;
  innerRef?: React.Ref<HTMLAnchorElement>;
};

const NavLink = memo(function NavLink({
  href,
  label,
  isActive,
  lenis,
  onClick,
  innerRef,
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, { offset: 0 });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <a
      ref={innerRef}
      href={href}
      className={`nav-link tracking-wide text-sm ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      onClick={handleClick}
    >
      {label}
    </a>
  );
});

export default function Header() {
  const {
    skipToMainContent,
    logoAlt,
    backToTopAria,
    navLinks,
    openMenu,
    closeMenu,
    mobileNavAria,
  } = siteContent.header;
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionsCache = useRef<HTMLElement[]>([]);
  const lenis = useLenis();

  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileFirstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      const t = setTimeout(() => mobileFirstLinkRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }

    // When menu closes, return focus to the toggle button
    mobileMenuButtonRef.current?.focus();
  }, [mobileMenuOpen]);

  const updateSectionsCache = useCallback(() => {
    sectionsCache.current = Array.from(document.querySelectorAll('section[id]'));
  }, []);

  useEffect(() => {
    // Use IntersectionObserver for robust, performant active-link detection.
    // Falls back to a one-time cache update if IntersectionObserver is unavailable.
    updateSectionsCache();
    const sections = sectionsCache.current;

    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the entry with largest intersectionRatio that's intersecting
          let best: IntersectionObserverEntry | null = null;
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
          }

          if (best && best.target && (best.target as HTMLElement).id) {
            setActive((best.target as HTMLElement).id);
            return;
          }

          // Fallback: when no entries are intersecting (gap between sections),
          // pick the section closest to the top of the viewport so the nav stays highlighted.
          let closest: IntersectionObserverEntry | null = null;
          for (const entry of entries) {
            if (!closest) {
              closest = entry;
              continue;
            }
            const currentTop = Math.abs((entry.boundingClientRect as DOMRect).top);
            const closestTop = Math.abs((closest.boundingClientRect as DOMRect).top);
            if (currentTop < closestTop) closest = entry;
          }
          if (closest && (closest.target as HTMLElement).id) {
            setActive((closest.target as HTMLElement).id);
          }
        },
        {
          root: null,
          rootMargin: '0px 0px -40% 0px', // consider a section active when its top is in the upper ~60% of the viewport
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      sections.forEach((s) => observer.observe(s));

      // Add a robust scroll fallback for environments where IntersectionObserver
      // may be unreliable (or when transforms affect intersection computations).
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const secs = sectionsCache.current;
          if (!secs || !secs.length) {
            ticking = false;
            return;
          }
          // choose the section whose top is closest to the top of the viewport
          let closestEl: HTMLElement | null = null;
          let closestDistance = Infinity;
          for (const el of secs) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestEl = el;
            }
          }
          if (closestEl && closestEl.id) setActive(closestEl.id);
          ticking = false;
        });
      };

      window.addEventListener('scroll', onScroll, { passive: true });

      // re-cache after lazy content loads
      const timer = setTimeout(() => {
        updateSectionsCache();
      }, 500);

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
        clearTimeout(timer);
      };
    }

    // Fallback: simple cache refresh
    const timer = setTimeout(() => updateSectionsCache(), 500);
    return () => clearTimeout(timer);
  }, [updateSectionsCache]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo('#hero', { offset: 0 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [lenis]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 pointer-events-none">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded pointer-events-auto"
      >
        {skipToMainContent}
      </a>

      {/* Floating Island Navigation */}
      <div className="container flex justify-start lg:justify-center px-4">
        <div className="inline-flex items-center gap-3 px-2 py-2 bg-nav-bg backdrop-blur-xl border border-medium rounded-full shadow-nav pointer-events-auto">
          {/* Logo */}
          <a
            href="#hero"
            aria-label={backToTopAria}
            className="flex items-center pl-2 pr-1 hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <img
              src={silvaIcon}
              alt={logoAlt}
              className="h-7 w-auto"
              loading="eager"
              width="28"
              height="28"
            />
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-glass-strong" />

          {/* Desktop navigation tabs */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={active === link.href.replace('#', '')}
                lenis={lenis}
              />
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            ref={mobileMenuButtonRef}
            type="button"
            className="lg:hidden p-2 text-white hover:bg-glass-light rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? closeMenu : openMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`container flex justify-start mt-2 px-4 transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav
          id="mobile-menu"
          className="lg:hidden bg-nav-mobile backdrop-blur-xl border border-medium rounded-2xl shadow-nav overflow-hidden flex flex-col p-2"
          aria-label={mobileNavAria}
        >
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={active === link.href.replace('#', '')}
              lenis={lenis}
              onClick={closeMobileMenu}
              innerRef={idx === 0 ? mobileFirstLinkRef : undefined}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
