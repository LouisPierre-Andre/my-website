import React from 'react'
import Footer from '../Home/Footer/Footer'
import Portfilio from '../Home/Portfolio/Portfilio'
import "./Porfolio_page.css"
import Portfolio_hero_page from './Portfolio_hero_page'

function Porfolio_page({ set_Detail_Portfolio_page }) {
  return (
    <div className='Profolio_component'>
      <Portfolio_hero_page set_Detail_Portfolio_page={set_Detail_Portfolio_page} />
      {/* <div className='Test_img'>
        <div className='test_img_containt'>
          <img src='image/youtube.png'/>
          <div className='detailssss'>
            <h2>youtube clone</h2>
            <h2>youtube clone</h2>
            <p>Louis Pierre andre</p>


          </div>
        </div>
      </div> */}
      <Portfilio set_Detail_Portfolio_page={set_Detail_Portfolio_page} />


    </div>
  )
}

export default Porfolio_page