import { GlobalErrorBoundary as ErrorBoundary } from '@/features/error-boundary';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { HowItWorks } from '@/features/how-it-works';
import { Calculator } from '@/features/calculator';
import { Pricing } from '@/features/pricing';
import { CTASection } from '@/features/cta-section';
import { FAQ } from '@/features/faq';
import { Footer } from '@/features/footer';
import { CookieBanner } from '@/features/cookie-banner';
import { BackToTop } from '@/components/ui';

import { Terms, Privacy, Cookies, Refunds } from '@/pages';

export const App = () => {
  const rawPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const path = rawPath === '/' ? rawPath : rawPath.replace(/\/$/, '');
  const isLegal = ['/terms', '/privacy', '/cookies', '/refunds'].includes(path);

  return (
    <ErrorBoundary>
      {!isLegal && <Header />}

      <main id="main">
        {isLegal ? (
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
            <HowItWorks />
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
};
