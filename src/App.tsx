import { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import GitHubActivity from './sections/GitHubActivity';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export type ProjectCategory = 'All' | 'React' | 'Node' | 'Laravel';

function App() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  return (
    <div className="relative text-text-light-primary dark:text-text-dark-primary min-h-screen">
      {/* Dynamic Cursor & Background */}
      <CustomCursor />
      <InteractiveBackground />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Portfolio Page Flow */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Skills onSelectCategory={(cat) => setActiveFilter(cat)} />
        <Projects activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Certifications />
        <Experience />
        <GitHubActivity />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer statistics counter */}
      <Footer />
    </div>
  );
}

export default App;

