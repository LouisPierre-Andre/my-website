import React from 'react'
import "./hero.css"

function Hero_Section() {
    return (
        <div id="home" className='hero_container'>
            <div className='image_background_container'>
                <div className='image_background'>
                </div>
            </div>
            <div className='hero_img_container'>
                <div className='hero_img_border'>
                    <img src='image/Profile1.png' />
                </div>
            </div>
            <div className='hero_containt'>
                <div className='hero_right_section'>
                    <h2>Pierre-Andre Louis</h2>
                    <h4><span>Front-end Web developer</span> </h4>
                    <p className='hero_description'>I'm a web designer width extensive experience for
                        over 2 years. My expertise is to creat and develloppe web site, app...
                        <span> and doing a lot of thing related to web develloppement</span>
                    </p>
                    <div className='button_section'>
                        <button className='hire_me'>Hire me</button>
                        <button className='download_cv'>Download CV</button>
                    </div>
                </div>
            </div>
            <div className='social_media'>
                <div className='social_media_containt'>
                    <div className='single_social_box del'>
                        <i class="bi bi-envelope-at"></i>
                        <div>
                            <h5>E-mail</h5>
                            <p>pierreandrelouis04@gmail.com</p>
                        </div>
                    </div>
                    <div className='single_social_box del'>
                        <i class="bi bi-telephone"></i>
                        <div>
                            <h5>Phone </h5>
                            <p>+509 46 73 17 10</p>
                        </div>
                    </div>
                    <div className='single_social_box'>
                        <i class="bi bi-linkedin"></i>
                        <i class="bi bi-whatsapp"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                    </div>
                </div>
            </div>
            <div className='white_bg'></div>



            


        </div>
    )
}

export default Hero_Section