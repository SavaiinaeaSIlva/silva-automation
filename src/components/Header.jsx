import React from 'react';
import { Menu } from 'lucide-react';
import Button from './ui/Button';

const Header = ({ scrolled, setMobileMenuOpen, NAV_LINKS, scrollToSection }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="cursor-pointer flex items-center gap-2"
        >
            {/* Make sure your logo is in src/assets/images/logo.png */}
            <img 
                src="/src/assets/images/logo.png" 
                alt="Silva Automation" 
                className="h-10 w-auto object-contain" 
            />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button href="https://calendly.com/silvaautomation/consultation">
            Book Consultation
          </Button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;