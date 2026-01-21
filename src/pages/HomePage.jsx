// HomePage - Main landing page
import { Navbar, Footer } from "../components/layout";
import {
  Hero,
  Problem,
  Solution,
  Pricing,
  Calculator,
  FAQ,
} from "../components/sections";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Pricing />
        <Calculator />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
