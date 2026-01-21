// Navbar component - Sticky top navigation
import { useState, useEffect } from "react";
import { navigationLinks } from "../../data";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is about 1 viewport height
      
      // Show navbar only after passing the hero section
      const shouldShow = currentScrollY > heroHeight;
      
      // Check if near bottom (within 300px of bottom)
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const distanceFromBottom = scrollHeight - (scrollTop + viewportHeight);
      
      setIsNearBottom(distanceFromBottom < 300);
      setShowNavbar(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navigationLinks.map(link => link.href.replace("#", ""));
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Back to Top Button */}
      {showNavbar && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-6 bottom-6 z-40 bg-[var(--color-action)] hover:bg-[var(--color-action-hover)] text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          title="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Navigation Bar */}
      <nav 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showNavbar && !isNearBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="nav-island">
          <ul className="flex items-center !p-0 !m-0">
            {navigationLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <li key={link.id}>
                  <a 
                    href={link.href}
                    className={`nav-link block px-3 py-1.5 text-sm rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive 
                        ? "text-white bg-[var(--color-accent-dark)]" 
                        : "text-white/70 hover:text-white hover:bg-[var(--color-accent-dark)]/20"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
