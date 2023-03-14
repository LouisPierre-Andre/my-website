import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className='Contact_container Contact_page'>
            <div className='portfolio_tilte_box'>
                <h2>Contact Me </h2>
                <div className="title_style1"></div>
                <div className="title_style2"></div>
            </div>
            <div className='contact_containt'>
                <div className='contact_info_section'>
                    <h3 className='contact_title'>Get in touch</h3>
                    <p className='description'>
                        I am always available and open to my clients. Write me a
                        message to tell me how can i help you. Even if it is not for business,
                        don't hesitate to contact me.  I will be glad to respond.
                    </p>
                    <div className='conntact_personal_info'>

                        <div className='single_contact_info'>
                            <i class="bi bi-person-fill"></i>
                            <div>
                                <h5>Name</h5>
                                <p>Louis Pierre-Andre</p>
                            </div>

                        </div>

                        <div className='single_contact_info'>
                            <i class="bi bi-geo-alt-fill"></i>
                            <div>
                                <h5>Adress</h5>
                                <p>Haiti, Jacmel</p>
                            </div>
                        </div>

                        <div className='single_contact_info'>
                            <i class="bi bi-envelope-at-fill"></i>
                            <div>
                                <h5>E-mail</h5>
                                <p>pierreandrelouis04 @gamil.com</p>
                            </div>
                        </div>


                        <div className='single_contact_info'>
                            <i class="bi bi-telephone-fill"></i>
                            <div>
                                <h5>E-mail</h5>
                                <p>(+509) 46 73 17 10</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='contact_input_section'>
                    <h3 className='contact_title'>Message me</h3>
                    <form>
                        <label htmlFor='name'>
                            Name
                            <input type="text" placeholder='Name' id='name' />
                        </label>

                        <label htmlFor='E-mail'>
                            E-mail
                            <input type="text" placeholder='E-mail' id='E-mail' />
                        </label>

                        <label htmlFor='Object'>
                            Object
                            <input type="text" placeholder='Object' id='Object' />
                        </label>


                        <textarea placeholder='Message' />

                        <button type='sumbit'>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact