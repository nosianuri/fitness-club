import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Gallery from './Pages/Gallery/Gallary.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Footer from './components/Footer.js';

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

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
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
