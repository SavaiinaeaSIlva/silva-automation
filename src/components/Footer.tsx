import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';

export default function Footer() {
  const footer = siteContent.footer;

  return (
    <footer className="relative z-10 text-white border-t border-subtle mt-16 pt-8">
      <div className="container pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/icon.png"
              alt={footer.companyName}
              className="h-8 w-auto mb-4"
              loading="lazy"
              width="32"
              height="32"
            />
            <p className="text-muted text-sm">{footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">{footer.quickLinksTitle}</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="footer-heading">{footer.legalTitle}</h4>
            <ul className="space-y-2">
              {footer.legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">{footer.getInTouchTitle}</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li className="text-white font-medium">{footer.companyName}</li>
              <li>
                <a href={`mailto:${footer.email}`} className="hover:text-white transition-colors">
                  {footer.email}
                </a>
              </li>
              <li>
                <a href={footer.phoneHref} className="hover:text-white transition-colors">
                  {footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={footer.bookAssessmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {footer.bookAssessmentText}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-subtle text-center">
          <p className="text-muted text-sm">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
