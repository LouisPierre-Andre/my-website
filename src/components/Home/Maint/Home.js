import React from 'react'
import About from '../About/About'
import Hero_Section from '../Hero/Hero_Section'
import Portfilio from '../Portfolio/Portfilio'
import Skills from '../Skills/Skills'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import "./Home.css"


function Home({set_Detail_Portfolio_page}) {
  return (
    <div className='Home_container'>
      <Hero_Section />
      <About />
      <Skills />
      <Services />
      <Portfilio set_Detail_Portfolio_page={set_Detail_Portfolio_page} />
      <Contact />
      <div className='background_codes'>
        {/* <img src='image/codes.webp' /> */}
      </div>
    </div>
  )
}

export default Home