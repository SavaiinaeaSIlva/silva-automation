import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, NAV_LINKS, scrollToSection }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Dark Overlay (Click to close) */}
      <div 
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* The Menu Panel */}
      <div className="absolute right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl p-6 flex flex-col">
        <div className="flex justify-end mb-8">
          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-xl font-semibold text-slate-700 hover:text-primary text-left transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;