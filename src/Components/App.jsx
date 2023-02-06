import { useState } from 'react'
import NavBar from './NavBar'
import Intro from './Intro';
import About from './About';

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
    </div>
  );
}

export default App
