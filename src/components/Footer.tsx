import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';

export default function Footer() {
  const quickLinks = [
    { label: 'Intro', href: '#challenge-and-solution' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  const legalLinks = [
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Refunds', to: '/refunds' },
  ];

  return (
    <footer className="relative z-10 text-white border-t border-white/10 mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/icon.png"
              alt="Silva Automation"
              className="h-8 w-auto mb-4"
              loading="lazy"
              width="32"
              height="32"
            />
            <p className="text-muted text-sm">
              Workflow automation for Hawaii service businesses. Fixed-price projects, no recurring
              fees.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
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
            <h4 className="footer-heading">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
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
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li className="text-white font-medium">Silva Automation LLC</li>
              <li>
                <a
                  href="mailto:contact@silvaautomation.com"
                  className="hover:text-white transition-colors"
                >
                  contact@silvaautomation.com
                </a>
              </li>
              <li>
                <a href="tel:+18087266422" className="hover:text-white transition-colors">
                  (808) 726-6422
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/silvaautomation/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Book Free Assessment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-muted text-sm">{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
