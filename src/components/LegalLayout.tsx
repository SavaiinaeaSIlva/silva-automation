import { Link } from 'react-router-dom';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import { siteContent } from '../content/siteContent';

type LegalLayoutProps = {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
};

export default function LegalLayout({ title, icon: Icon, children }: LegalLayoutProps) {
  const { backToHome, logoAlt, lastUpdated, footerText } = siteContent.legalLayout;

  return (
    <div className="min-h-screen font-sans text-white legal-page-bg">
      <div className="bg-black/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-bold text-sm"
          >
            <ArrowLeft size={18} />
            {backToHome}
          </Link>
          <img src="/icon.png" alt={logoAlt} className="h-8 w-auto" />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-white/10 rounded-lg text-white">
            <Icon size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="text-sm text-white/50">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {children}
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        &copy; {new Date().getFullYear()} {footerText}
      </footer>
    </div>
  );
}
