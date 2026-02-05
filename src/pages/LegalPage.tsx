import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, DollarSign, FileText, Shield, LucideIcon } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { legalContent } from '../content/legalContent';
import LegalSection from '../components/LegalSection';
import silvaIcon from '../assets/icons/silva-icon.png';

type LegalPageType = 'terms' | 'privacy' | 'cookies' | 'refunds';

interface LegalPageProps {
  type: LegalPageType;
}

const pageConfig: Record<
  LegalPageType,
  { icon: LucideIcon; contentKey: keyof typeof legalContent }
> = {
  terms: { icon: FileText, contentKey: 'terms' },
  privacy: { icon: Shield, contentKey: 'privacy' },
  cookies: { icon: Cookie, contentKey: 'cookies' },
  refunds: { icon: DollarSign, contentKey: 'refunds' },
};

export default function LegalPage({ type }: LegalPageProps) {
  const { backToHome, logoAlt, lastUpdated, footerText } = siteContent.legalLayout;
  const { effectiveDate } = siteContent.legal;
  const title = siteContent.legal.pages[type];
  const { icon: Icon, contentKey } = pageConfig[type];
  const { sections } = legalContent[contentKey];

  return (
    <div className="min-h-screen font-sans text-white legal-page-bg">
      <div className="bg-nav-bg backdrop-blur-sm border-b border-subtle sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white-70 hover:text-white transition-colors font-bold text-sm"
          >
            <ArrowLeft size={18} />
            {backToHome}
          </Link>
          <img src={silvaIcon} alt={logoAlt} className="h-8 w-auto" />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-glass-strong rounded-lg text-white">
            <Icon size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="text-sm text-white-50">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="legal-content">
          <p className="text-sm text-white-50 italic mb-4">Effective Date: {effectiveDate}</p>
          {sections.map((section, idx) => (
            <LegalSection key={idx} section={section} />
          ))}
        </div>
      </main>

      <footer className="border-t border-subtle py-8 text-center text-white-40 text-sm">
        &copy; {new Date().getFullYear()} {footerText}
      </footer>
    </div>
  );
}
