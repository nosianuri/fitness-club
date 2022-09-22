import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cards from './Cards';
import Contact from './Contact';
import Courses from './Courses';
import Facts from './Facts';
import Features from './Features';
import Hero from './Hero';
import Newsletter from './Newsletter';
import Pricing from './Pricing';
    

function Home() {
    Aos.init({
        duration: 1800,
        offset: 100,
      });
    return (
        <>
            <div className='overflow-hidden'>
                <Hero />
                <Cards />
                <Facts />
                <Features />
                <Courses />
                <Pricing />
                <Newsletter />
                <Contact />
                
            </div>
        </>
    )
}

export default Home;