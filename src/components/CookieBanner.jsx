import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-200 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-primary shrink-0">
            <Cookie size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Cookie Consent</h3>
            <p className="text-sm text-slate-600 mt-1">
              We use cookies to ensure you get the best experience on our website.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={() => setShowBanner(false)}
            className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 bg-transparent"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/10"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;