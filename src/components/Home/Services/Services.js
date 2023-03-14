import React from 'react'
import "./Services.css"

function Services() {
    return (
        <div className='Services_container'>
            <div className='portfolio_tilte_box service'>
                <h2>My Services</h2>
                <div className="title_style1"></div>
                <div className="title_style2"></div>
            </div>
            <div className='services_containt'>
                <div className='single_service_container'>
                    <i class="bi bi-brush"></i>
                    <h2>Static Website</h2>
                    <p>
                        I will design and develop your static website in a record time. With
                        a strong understanding of CSS and libraries like Bootstrap, I can
                        provide you with a fully responsive and attractive website.
                        I will be very happy to help you with your project. Just contact me.
                    </p>
                </div>

                <div className='single_service_container'>
                    <i class="bi bi-globe"></i>
                    <h2>Dynamic Website</h2>
                    <p>
                        If you need someone to build your dynamic website, I am who
                        you are looking for. I will satisfy every single one of your
                        requirements. By adding future functionality to your website,
                        I will provide your visitors
                     with a better user experience and help your business to grow. 
                    </p>
                </div>

                <div className='single_service_container'>
                    <i class="bi bi-code-slash"></i>
                    <h2>Web App</h2>
                    <p>Are you looking for a developer to build your web app?
                        You are in the right place. I have built so many web app
                        projects during my learning period, I trust that I can develop
                        any kind of web app, all I have to do is
                        to think about it. Your project will be in good hands, trust me.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services