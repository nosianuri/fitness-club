import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Gallery from './Pages/Gallery/Gallary.jsx';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  
  return (
    <>
    <div div className='container mx-auto'>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
      </Routes>
      </div>
    </>
    // <div className='overflow-hidden'>
    //   <Hero />
    //   <Cards />
    //   <Facts />
    //   <Features />
    //   <Courses />
    //   <Pricing />
    //   <Newsletter />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}

export default App;
