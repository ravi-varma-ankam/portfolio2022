import React, { useEffect, useState } from 'react';
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs'



function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {

    Aos.init({
      once: true,
    })

  })


  return (
    <div className={darkTheme ? 'dark' : ''}>

      <div className="min-h-screen dark:bg-gray-900 dark:text-white py-10 px-10 sm:px-5  bg-gray-100 ">

        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-md dark:bg-black border-2 dark:hover:bg-gray-800 m-4 dark:text-white bg-white  border-gray-400 rounded-full px-2 py-1 hover:shadow "
        >
          {darkTheme ? 'Light ☀️' : 'Dark 🌛'}
        </button>

        <div data-aos='fade-down' data-aos-duration='1800' data-aos-delay='400'>

          <Card />
        </div>

        <div data-aos='fade-up' data-aos-duration='1500' data-aos-delay='400'>

          <About />
        </div>

        <div data-aos='zoom-in-right' data-aos-duration='1500' data-aos-delay='400'>

          <Skills />
        </div>

        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='400'>

          <Contact />
        </div>
        <div data-aos='zoom-out-right' data-aos-duration='500' data-aos-delay='400'>
          <Footer />

        </div>
      </div>
    </div>
  )
}

export default App;
