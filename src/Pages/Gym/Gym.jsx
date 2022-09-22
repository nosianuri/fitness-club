import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Workouts from '../../components/Workouts';
import GymPricing from '../../components/GymPricing';
import Community from '../../components/Community';
import Faq from '../../components/Faq';
import Join from '../../components/Join';
import './Gym.css';

function Gym() {
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      
      <Banner />
      <About />
      <Workouts />
      <GymPricing />
      <Community />
      <Faq />
      <Join />
      
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default Gym