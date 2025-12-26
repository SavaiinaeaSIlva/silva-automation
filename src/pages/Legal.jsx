import React from 'react';
import { ArrowLeft, Shield, FileText, Cookie, DollarSign } from 'lucide-react';
import Terms from './legal/Terms';
import Privacy from './legal/Privacy';
import Refunds from './legal/Refunds';
import Cookies from './legal/Cookies';

export default function Legal() {
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
        
        {/* 1. TERMS AND CONDITIONS */}
        <div id="terms" className="scroll-mt-32 mb-16 border-b border-slate-200 pb-16 last:border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-[#051650]">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Terms and Conditions</h2>
              <p className="text-sm text-slate-500">Last Updated: January 15, 2025</p>
            </div>
          </div>
          <Terms />
        </div>

        {/* 2. PRIVACY POLICY */}
        <div id="privacy" className="scroll-mt-32 mb-16 border-b border-slate-200 pb-16 last:border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-[#051650]">
              <Shield size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
              <p className="text-sm text-slate-500">Last Updated: January 15, 2025</p>
            </div>
          </div>
          <Privacy />
        </div>

        {/* 3. REFUND & CANCELLATION POLICY */}
        <div id="refunds" className="scroll-mt-32 mb-16 border-b border-slate-200 pb-16 last:border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-[#051650]">
              <DollarSign size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Refund & Cancellation Policy</h2>
              <p className="text-sm text-slate-500">Last Updated: January 15, 2025</p>
            </div>
          </div>
          <Refunds />
        </div>

        {/* 4. COOKIE POLICY */}
        <div id="cookies" className="scroll-mt-32 mb-16 border-b border-slate-200 pb-16 last:border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-[#051650]">
              <Cookie size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Cookie Policy</h2>
              <p className="text-sm text-slate-500">Last Updated: January 15, 2025</p>
            </div>
          </div>
          <Cookies />
        </div>

      </main>

      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Silva Automation. All rights reserved.
      </footer>
    </div>
  );
}