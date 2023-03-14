import React from 'react'
import Contact from '../Home/Contact/Contact'
import Footer from '../Home/Footer/Footer'
import Portfolio_hero_page from '../Portfolio_page/Portfolio_hero_page'
import Contact_hero_section from './Contact_hero_section'

function Contact_page() {
  return (
    <div className='contact_Page_conponent'>
      {/* <Portfolio_hero_page /> */}
      <Contact_hero_section />


      <Contact />

      
    </div>
  )
}

export default Contact_page