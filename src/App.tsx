import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import Now from './sections/Now';
import Contact from './sections/Contact';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

