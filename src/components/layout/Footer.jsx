// Footer component - Site footer
import { siteInfo } from "../../data";
import logoSvg from "../../assets/logo/logo.svg";

function Footer() {
  const handleLegalClick = (page, path) => {
    if (window.navigateTo) {
      window.navigateTo(page, path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-6">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoSvg} alt="Silva Automation" className="h-8 w-auto" />
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            <button
              onClick={() => handleLegalClick("terms", "/terms")}
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              TERMS
            </button>
            <button
              onClick={() => handleLegalClick("privacy", "/privacy")}
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PRIVACY
            </button>
            <button
              onClick={() => handleLegalClick("refund", "/refund")}
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              REFUND
            </button>
            <button
              onClick={() => handleLegalClick("cookies", "/cookies")}
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              COOKIES
            </button>
          </div>

          {/* Empty space for layout balance */}
          <div className="w-8"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
