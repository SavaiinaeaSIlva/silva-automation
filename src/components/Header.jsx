import React from 'react';
import { Menu } from 'lucide-react';
import Button from './ui/Button';

// Proper Vite import: This ensures the path is correct after deployment
import logo from '../assets/images/logo.png'; 

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
          className="cursor-pointer flex items-center gap-2 group"
        >
          <img 
            src={logo} 
            alt="Silva Automation Logo" 
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
          />
          {/* Optional: Add text if your logo is just an icon */}
          <span className={`font-bold text-xl ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>
            Silva Automation
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
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
          className="md:hidden p-2 text-slate-600 hover:text-blue-600"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;