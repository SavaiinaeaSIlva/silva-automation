import { ErrorBoundary } from '@/features/error-boundary';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { Workflow } from '@/features/workflow';
import { Integrations } from '@/features/integrations';
import { Calculator } from '@/features/calculator';
import { Pricing } from '@/features/pricing';
import { CTASection } from '@/features/cta-section';
import { FAQ } from '@/features/faq';
import { Footer } from '@/features/footer';
import { CookieBanner } from '@/features/cookie-banner';
import { BackToTop } from '@/components/ui';

// Lightweight page components (no router dependency)
import { Terms, Privacy, Cookies, Refunds } from '@/pages';

function App() {
  const rawPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  // normalize trailing slash (so "/terms/" === "/terms")
  const path = rawPath === '/' ? rawPath : rawPath.replace(/\/$/, '');
  const isLegal = ['/terms', '/privacy', '/cookies', '/refunds'].includes(path);
  const showHeader = !isLegal;

  return (
    <ErrorBoundary>
      {showHeader && <Header />}

      <main id="main">
        {isLegal ? (
          // lightweight client-side routing for static legal pages
          path === '/terms' ? (
            <Terms />
          ) : path === '/privacy' ? (
            <Privacy />
          ) : path === '/cookies' ? (
            <Cookies />
          ) : (
            <Refunds />
          )
        ) : (
          <>
            <Hero />
            <Integrations />
            <Workflow />
            <Calculator />
            <Pricing />
            <CTASection />
            <FAQ />
          </>
        )}
      </main>

      {!isLegal && <Footer />}
      {!isLegal && <BackToTop />}
      <CookieBanner />
    </ErrorBoundary>
  );
}

export default App;
