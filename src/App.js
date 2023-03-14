import './components/Others/App.css';
import NavBar from './components/Home/NavBar/NavBar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Maint/Home';
import Detail_page from './components/Project_Detail_page/Detail_page';
import { Portfilio_data } from './components/Data/Data';
import About_page from './components/About_page/About_page';
import Porfolio_page from './components/Portfolio_page/Porfolio_page';
import Contact_page from './components/Contact_page/Contact_page';
import Footer from './components/Home/Footer/Footer';


function App() {
  const [showNav, setShowNav] = React.useState(false)
  const [detail_porfolio_page, set_Detail_Portfolio_page] = React.useState(Portfilio_data[0])



  const toggleNavbar = () => {
    setShowNav(!showNav)
  }



  return (
    <div className="App">
      <NavBar showNav={showNav} toggleNavbar={toggleNavbar} />
      <Routes>
        <Route exact path='/' element={<Home set_Detail_Portfolio_page={set_Detail_Portfolio_page} />} />

        <Route path='/Detail_page' element={
          <Detail_page detail_porfolio_page={detail_porfolio_page} />} />

        {/* <Route path='/About_page' element={<About_page />} /> */}

        <Route path='/Porfolio_page' element={<Porfolio_page set_Detail_Portfolio_page={set_Detail_Portfolio_page} />} />


        <Route path='/Contact_page' element={<Contact_page />} />




      </Routes>
      <Footer />


    </div>
  );
}

export default App;
