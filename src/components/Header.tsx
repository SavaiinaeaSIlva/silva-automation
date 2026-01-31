import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Track active section based on scroll position
    // Query sections inside scroll handler to catch lazy-loaded sections
    const onScroll = () => {
      const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];

      if (!sections.length) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the section that contains the scroll position
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
        if (scrollPosition >= lastSection.offsetTop) {
          currentSection = lastSection.id;
        }
      }

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    // Re-check after lazy sections might have loaded
    const timer = setTimeout(onScroll, 500);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

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

  const navLink = (href: string, label: string, onClick?: () => void) => {
    const id = href.replace('#', '');
    const isActive = active === id;
    return (
      <a
        href={href}
        className={`nav-link tracking-wide text-sm ${isActive ? 'active' : ''}`}
        aria-current={isActive ? 'page' : undefined}
        onClick={onClick}
      >
        {label}
      </a>
    );
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4 pointer-events-none">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded pointer-events-auto"
      >
        Skip to main content
      </a>

      {/* Floating Island Navigation */}
      <div className="container flex justify-start lg:justify-center px-4">
        <div className="inline-flex items-center gap-3 px-2 py-2 bg-black/70 backdrop-blur-xl border border-white/[0.08] rounded-full shadow-lg shadow-black/20 pointer-events-auto">
          {/* Logo */}
          <a
            href="#hero"
            aria-label="Back to top"
            className="flex items-center pl-2 pr-1 hover:opacity-80 transition-opacity"
          >
            <img
              src="/icon.png"
              alt="Silva Automation"
              className="h-7 w-auto"
              loading="eager"
              width="28"
              height="28"
            />
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-white/10" />

          {/* Desktop navigation tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLink('#challenge-and-solution', 'Intro')}
            {navLink('#process', 'Process')}
            {navLink('#pricing', 'Pricing')}
            {navLink('#calculator', 'Calculator')}
            {navLink('#contact', 'Schedule')}
            {navLink('#faq', 'FAQ')}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="container flex justify-start mt-2 px-4 pointer-events-auto">
          <div
            id="mobile-menu"
            className="lg:hidden bg-black/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-lg shadow-black/30 overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col p-2">
              {navLink('#challenge-and-solution', 'Intro', closeMobileMenu)}
              {navLink('#process', 'Process', closeMobileMenu)}
              {navLink('#pricing', 'Pricing', closeMobileMenu)}
              {navLink('#calculator', 'Calculator', closeMobileMenu)}
              {navLink('#contact', 'Schedule', closeMobileMenu)}
              {navLink('#faq', 'FAQ', closeMobileMenu)}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
