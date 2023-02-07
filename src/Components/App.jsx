import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div
      className='App'
      data-bs-spy='scroll'
      data-bs-target='#toggleMobileMenu'
      data-bs-offset='0'
      tabindex='0'
    >
      <NavBar />
      <Intro />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
