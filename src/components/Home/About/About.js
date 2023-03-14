import React from 'react'
import "./About.css"

function About() {
    return (
        <div id="about" className='About_container'>
            <div className='image_container'>
                <div className='image_border'>
                    <img src='image/Profile2.png' />
                </div>
            </div>
            <div className='about_info_container'>
                <h2>Why hire me for your next project?</h2>
                <p className='web_dev'>Front-end web developer</p>
                <p className='desc'>
                    I am a junior front-end web developer with the ability to learn and
                    collaborate in rapidly changing environments. I have spent hundreds of
                    hours learning technologies like HTML, CSS, javascript, React js, 
                    and bootstrap... I have a good understanding of APIs, how they work and many more. 
                    <br />
                    <br />

                    I challenge myself every day while staying focused on achieving high-quality
                    results under strict deadlines. I am eager to obtain a challenging position
                    at a  prestigious company like Dream Version that will expand my learning
                    and build upon my developer skills.
                    <br />
                    <br />

                    I am excited to provide my services to a company or agency so I
                    can grow my skills
                    while facilitating their improvements.</p>
                <div className='social_media_link'>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-whatsapp"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                </div>
                <div className='about_button_section'>
                    <button className='read_more'>Contact me</button>
                    <button className='download_cv'>Download CV</button>
                </div>

            </div>
        </div>
    )
}

export default About