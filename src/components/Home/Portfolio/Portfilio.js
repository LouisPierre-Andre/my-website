import React from 'react'
import { Link } from 'react-router-dom';
import "./Protolio.css"
import { Portfilio_data } from '../../Data/Data';

function Portfilio({ set_Detail_Portfolio_page }) {
    const scrollInToview = () => {
        setTimeout(() => {
            const section = document.getElementById("details_page");
            if (section) {
                section.scrollIntoView({ behavior: "auto" })
                console.log("you clicked")
            }
        }, [1])
    }






    return (
        <div className='Protolio_container profolio_page'>
            <div className='portfolio_tilte_box'>
                <h2>My Projects</h2>
                <div className="title_style1"></div>
                <div className="title_style2"></div>
            </div>

            <div className='portfolio_containt'>
                {Portfilio_data.map((porfolio) => {
                    const { id, img, title, visite, description } = porfolio;
                    return <div className='single_project'>
                        <Link onClick={() => { set_Detail_Portfolio_page(porfolio); scrollInToview() }} style={{ textDecoration: "none" }} to="/Detail_page">  <img src={img} /></Link>
                        <div className='single_project_description'>
                            <p>{title}</p>
                            <div className='single_project_button'>
                                <Link onClick={() => { set_Detail_Portfolio_page(porfolio); scrollInToview() }} style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                                <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                            </div>
                        </div>
                    </div>



                })}




                {/* 
                <div className='single_project'>
                    <img src="image/ecommerce.png" />
                    <div className='single_project_description'>
                        <p>E-Commerce app</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div>


                <div className='single_project'>
                    <img src="image/movieApp.png" />
                    <div className='single_project_description'>
                        <p>Movie trailer</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div>


                <div className='single_project'>
                    <img src="image/tiktok.png" />
                    <div className='single_project_description'>
                        <p>TikTok clone</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div>


                <div className='single_project'>
                    <img src="image/music.png" />
                    <div className='single_project_description'>
                        <p>Music app</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div>


                <div className='single_project'>
                    <img src="image/quizeApp1.png" />
                    <div className='single_project_description'>
                        <p>Quiz app</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div>




                <div className='single_project'>
                    <img src="image/whatsapp.png" />
                    <div className='single_project_description'>
                        <p>Whatsapp clone</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div>


                <div className='single_project'>
                    <img src="image/instagram.png" />
                    <div className='single_project_description'>
                        <p>Instagram clone</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div>


                <div className='single_project'>
                    <img src="image/project1.jpg" />
                    <div className='single_project_description'>
                        <p>YouTube clone</p>
                        <div className='single_project_button'>
                            <Link style={{ textDecoration: "none" }} to="/Detail_page" className='details button'>Details</Link>
                            <Link style={{ textDecoration: "none" }} className='visite button'> Visite</Link>
                        </div>
                    </div>
                </div> */}

















            </div>
        </div>
    )
}

export default Portfilio