import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({ title, icon: Icon, children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-slate-600 hover:text-[#051650] transition-colors font-bold text-sm">
            <ArrowLeft size={18} />
            Back to Home
          </a>
          <span className="font-bold text-slate-400 text-sm hidden sm:block">
            Silva Automation Legal
          </span>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 rounded-lg text-[#051650]">
            <Icon size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
            <p className="text-sm text-slate-500">Last Updated: January 15, 2025</p>
          </div>
        </div>
        
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Silva Automation. All rights reserved.
      </footer>
    </div>
  );
}
