import React from 'react';
import { Link } from 'react-router-dom';
// This import must match your tree: src/assets/images/logo.png
import logo from '../assets/images/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#051650] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* COLUMN 1: BRAND */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            {/* LOGO AREA */}
            <div className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Silva Automation Logo" 
                className="h-10 w-auto object-contain block"
                style={{ minWidth: '40px' }} 
              />
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
            Business automation you own. Built for clarity, efficiency, and independence.
          </p>
        </div>

        {/* COLUMN 2: LEGAL - UPDATED LINKS */}
        <div>
          <h3 className="text-sm font-bold mb-6 tracking-widest uppercase text-slate-400">Legal</h3>
          <ul className="space-y-3 text-slate-300">
            {/* These now link to specific IDs in your Legal.jsx file */}
            <li><Link to="/legal#terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/legal#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/legal#refunds" className="hover:text-white transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT */}
        <div>
          <h3 className="text-sm font-bold mb-6 tracking-widest uppercase text-slate-400">Contact</h3>
          <ul className="space-y-4 text-slate-300">
            <li>
              <a href="mailto:naea@silvaautomation.com" className="hover:text-white transition-colors">
                naea@silvaautomation.com
              </a>
            </li>
            <li>
              <a href="tel:8087266422" className="hover:text-white transition-colors">
                808-726-6422
              </a>
            </li>
            <li className="pt-2">
              <button className="bg-white text-[#051650] px-6 py-2 rounded-full font-bold hover:bg-slate-100 transition-all text-sm">
                Schedule a Call
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
        <p>© {new Date().getFullYear()} Silva Automation — Based in Hawaii</p>
      </div>
    </footer>
  );
};

export default Footer;