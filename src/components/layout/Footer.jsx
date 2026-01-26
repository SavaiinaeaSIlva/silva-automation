// Footer component - Site footer
import { Link } from "react-router-dom";
import logoPng from "../../assets/logo/logo.png";

function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 py-6">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <img src={logoPng} alt="Silva Automation" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              to="/terms"
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              TERMS
            </Link>
            <Link
              to="/privacy"
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PRIVACY
            </Link>
            <Link
              to="/refund"
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              REFUND
            </Link>
            <Link
              to="/cookies"
              className="text-xs font-bold text-action hover:text-action-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              COOKIES
            </Link>
          </div>

          {/* Empty space for layout balance */}
          <div className="w-8"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
