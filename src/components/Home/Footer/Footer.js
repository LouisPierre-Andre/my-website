import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='Footer_container'>
      <div className='footer_containt'>
        <div className='footer'>
          <h2>About us</h2>
          <p className='about_desc'>
            I am a front-end web developer. With many skills like javascript,
            react js, bootstrap, Html, CSS, and more I will do my best to satisfy
            your requirements and help you grow your business. All you have to do is contact me.
          </p>

          <div className='single_social_box footer'>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </div>
        <div className='footer'>
          <h2>Contact us</h2>
          <p><span>Address: </span>Jacmel, Haiti  </p>
          <p><span>Phone: </span>(+509) 46 73 17 10</p>
          <p><span>E-mail: </span>pierreandrelouis04 @gmail.com</p>
        </div>
        <div className='footer'>
          <h2>Quick links</h2>
          <p>Home</p>
          <p>About</p>
          <p>Portfilio</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Footer