// Back to Home component - Top left link for legal pages
function BackToHome() {
  const handleBackToHome = () => {
    if (window.navigateTo) {
      window.navigateTo("home", "/");
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      onClick={handleBackToHome}
      className="fixed top-6 left-6 z-40 text-action hover:text-action-hover transition-colors duration-200"
      style={{ fontFamily: "var(--font-heading)" }}
      title="Back to home"
    >
      <span className="font-bold text-sm">← BACK</span>
    </button>
  );
}

export default BackToHome;
