import { ErrorBoundary } from '@/features/error-boundary';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { WhyChooseUs } from '@/features/why-choose-us';
import { Services } from '@/features/services';
import { Calculator } from '@/features/calculator';
import { Pricing } from '@/features/pricing';
import { Contact } from '@/features/contact';
import { Footer } from '@/features/footer';
import { CookieBanner } from '@/features/cookie-banner';
import { BackToTop } from '@/components/ui';

// Lightweight page components (no router dependency)
import { Terms, Privacy, Cookies, Refunds, Logo } from '@/pages';

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isLegal = ['/terms', '/privacy', '/cookies', '/refunds'].includes(path);
  const isLogoPage = path === '/logo';
  const showHeader = !isLegal && !isLogoPage;

  return (
    <ErrorBoundary>
      {showHeader && <Header />}

      <main id="main">
        {isLogoPage ? (
          <Logo />
        ) : isLegal ? (
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
            <WhyChooseUs />
            <Services />
            <Calculator />
            <Pricing />
            <Contact />
          </>
        )}
      </main>

      <Footer />
      <CookieBanner />
      <BackToTop />
    </ErrorBoundary>
  );
}

export default App;
