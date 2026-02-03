import { useEffect, useState, useCallback, useRef, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { useLenis } from '../contexts/LenisContext';
import type Lenis from 'lenis';

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  lenis: Lenis | null;
  onClick?: () => void;
};

const NavLink = memo(function NavLink({ href, label, isActive, lenis, onClick }: NavLinkProps) {
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

  const updateSectionsCache = useCallback(() => {
    sectionsCache.current = Array.from(document.querySelectorAll('section[id]'));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = sectionsCache.current;
      if (!sections.length) {
        updateSectionsCache();
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection: string | null = null;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }
      }

      // If we're past the last section, keep it active
      if (!currentSection && sections.length > 0) {
        const lastSection = sections[sections.length - 1];
        if (lastSection && scrollPosition >= lastSection.offsetTop) {
          currentSection = lastSection.id;
        }
      }

      if (currentSection) {
        setActive(currentSection);
      }
    };

    // Initial cache and check
    updateSectionsCache();
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    // Re-cache after lazy sections load
    const timer = setTimeout(() => {
      updateSectionsCache();
      onScroll();
    }, 500);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
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
        <div className="inline-flex items-center gap-3 px-2 py-2 bg-black/70 backdrop-blur-xl border border-white/[0.08] rounded-full shadow-lg shadow-black/20 pointer-events-auto">
          {/* Logo */}
          <a
            href="#hero"
            aria-label={backToTopAria}
            className="flex items-center pl-2 pr-1 hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <img
              src="/icon.png"
              alt={logoAlt}
              className="h-7 w-auto"
              loading="eager"
              width="28"
              height="28"
            />
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-white/10" />

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
            type="button"
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
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
          className="lg:hidden bg-black/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-lg shadow-black/30 overflow-hidden flex flex-col p-2"
          aria-label={mobileNavAria}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={active === link.href.replace('#', '')}
              lenis={lenis}
              onClick={closeMobileMenu}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
