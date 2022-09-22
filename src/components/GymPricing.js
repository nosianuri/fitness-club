import React from 'react';
import { gympricing } from '../data';
import PlanList from './PlanList';

function GymPricing() {
  const { icon, title, plans } = gympricing;
  return (
    <section className='section'>
      <div className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'>
        <img src={icon} alt="" />
        <h2 className='h2'>{title} <span className='text-primary-200'>.</span></h2>
      </div>
      <PlanList plans={plans} />
    </section>
  )
}

export default GymPricing