import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures navigation starts at the top of the page.
 * If a hash is present (e.g. /#pricing), scrolls to that element instead.
 */
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Hash navigation: scroll to the element after the route renders.
    if (location.hash) {
      const id = location.hash.replace("#", "");
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

