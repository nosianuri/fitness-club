import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Newsletter />
      <div className='h-[2000px]'></div>
    </div>
  );
}

export default App;
