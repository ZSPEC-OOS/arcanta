import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import FeaturedApps from './components/FeaturedApps';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(17,168,255,0.22),transparent_28%),radial-gradient(circle_at_68%_30%,rgba(245,163,59,0.12),transparent_26%)]" />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <section id="process">
          <ProcessSection />
        </section>
        <section id="apps">
          <FeaturedApps />
        </section>
      </main>
      <section id="about" className="hidden" aria-hidden="true" />
      <section id="careers" className="hidden" aria-hidden="true" />
      <Footer />
    </div>
  );
}

export default App;
