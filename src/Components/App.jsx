import { useState } from 'react'
import NavBar from './NavBar'

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
    </div>
  );
}

export default App
