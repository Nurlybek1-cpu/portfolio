import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import Now from './sections/Now';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Now />
      </main>
    </>
  );
}
