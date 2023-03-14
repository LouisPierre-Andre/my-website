import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar({ showNav, toggleNavbar }) {
    const [navBar, setNavBar] = React.useState(false)




    const scrollInToview = () => {
        setTimeout(() => {
            const section = document.getElementById("home");
            if (section) {
                section.scrollIntoView({ behavior: "auto" })
            }
        }, [1])
    }


    const scrollInToview2 = () => {
        setTimeout(() => {
            const section = document.getElementById("about");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
            }
        }, [10])

    }


    const scrollInToview3 = () => {
        setTimeout(() => {
            const section = document.getElementById("portfolio");
            if (section) {
                section.scrollIntoView({ behavior: "auto" })
            }
        }, [1])
    }

    const scrollInToview4 = () => {
        setTimeout(() => {
            const section = document.getElementById("contact");
            if (section) {
                section.scrollIntoView({ behavior: "auto" })
            }
        }, [1])
    }



    let scrollPos = 0;

    function checkPosition() {
        let windowY = window.scrollY;

        if (windowY < 350) {
            setNavBar(false)
        } else {
            setNavBar(true)
        }
        scrollPos = windowY;
    }

    window.addEventListener('scroll', checkPosition);




    return (
        <div id="NavBar" className={`${showNav && "NavBar_container active"} ${navBar && "color NavBar_container"} NavBar_container not_active not`}>
            <div className='logo_section'>
                <h3>Pierre-<span>Andre</span></h3>
                <i onClick={() => { toggleNavbar() }} class="bi bi-list"></i>
            </div>
            <ul onClick={() => { toggleNavbar() }}>
                <Link className='Link' onClick={() => { scrollInToview() }} to="/"><li>Home</li></Link>
                {/* <Link className='Link' onClick={() => { scrollInToview2() }} to="/"><li >About</li></Link> */}
                <Link className='Link' onClick={() => { scrollInToview3() }} to="/Porfolio_page"><li >Portfolio</li></Link>
                <Link className='Link' onClick={() => { scrollInToview4() }} to="/Contact_page"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default NavBar