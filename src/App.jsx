// Main App component
import { useState, useEffect } from "react";
import {
  HomePage,
  TermsOfService,
  PrivacyPolicy,
  RefundCancellationPolicy,
  CookiePolicy,
} from "./pages";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Handle browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/terms") setCurrentPage("terms");
      else if (path === "/privacy") setCurrentPage("privacy");
      else if (path === "/refund") setCurrentPage("refund");
      else if (path === "/cookies") setCurrentPage("cookies");
      else setCurrentPage("home");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle navigation and URL updates
  const navigateTo = (page, path) => {
    setCurrentPage(page);
    window.history.pushState(null, "", path);
  };

  // Make navigateTo available globally for links
  window.navigateTo = navigateTo;

  // Render appropriate page
  switch (currentPage) {
    case "terms":
      return <TermsOfService />;
    case "privacy":
      return <PrivacyPolicy />;
    case "refund":
      return <RefundCancellationPolicy />;
    case "cookies":
      return <CookiePolicy />;
    default:
      return <HomePage />;
  }
}

export default App;
