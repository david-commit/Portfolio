import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Skills from './Skills'
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <main
      className='App'
      data-bs-spy='scroll'
      data-bs-target='#toggleMobileMenu'
      data-bs-offset='0'
      tabindex='0'
    >
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
