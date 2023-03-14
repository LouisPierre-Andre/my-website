import React from 'react'
import { Link } from 'react-router-dom'
import "./Detail_page.css"

function Detail_page({ detail_porfolio_page }) {
  const { id, img, title, visite, description1, description2, description3, description4 } = detail_porfolio_page;


  const scrollInToview = () => {
    setTimeout(() => {
      const section = document.getElementById("portfolio");
      if (section) {
        section.scrollIntoView({ behavior: "auto" })
        console.log("you clicked")
      }
    }, [1])
  }

  return (
    <div id="details_page" className='Details_container'>

      <div className='detail_hero_section'>
        <img src={img} />
        <div className='hero_filter'>
          <h1>{title}</h1>
        </div>
      </div>



      <div className='detail_containt'>
        <div className='project_img'>
          <img src={img} />
        </div>

        <div className='detail_section'>
          <h2>{title}</h2>
          <div className='icons_section'>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
          </div>
          <p>{description1}</p>
          <p>{description2}</p>
          {/* <p>{description3}</p> */}
          {/* <p>{description4}</p> */}
          <div className='button_section'>
            <button className='button'>visite</button>
            <Link onClick={() => { scrollInToview() }} to="/Porfolio_page" className='back button Link'> Back</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Detail_page