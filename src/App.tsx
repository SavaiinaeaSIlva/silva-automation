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

function App() {
  return (
    <ErrorBoundary>
      <Header />

      <main id="main">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Calculator />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <CookieBanner />
      <BackToTop />
    </ErrorBoundary>
  );
}

export default App;
