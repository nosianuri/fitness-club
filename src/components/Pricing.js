import React, { useState } from 'react';
import { pricing } from '../data';

const Pricing = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className='section-sm lg:section-lg bg-section'>
      <div className='container mx-auto'>
        <div className='text-center mb-7 lg:mb-[70px]'>
          <h2 className='h2 mb-3 lg:mb-[18px]'>Pick a Pricing Plan</h2>
          <p className='max-w-[398px] mx-auto'>Pick a pricing plan and get started your journey with us for build your body and mind</p>
        </div>
        <div className='flex flex-col mx-auto items-center gap-y-5 lg:flex-row lg:gap-x-[33px]'>
          {pricing.map((card, currentIndex) => {
            const { title, price, list, buttonIcon, buttonText, delay } = card;

            return (
              <div onClick={() => setIndex(currentIndex)} className='bg-white w-full max-w-[368px] min-h-[668px] h-full cursor-pointer relative' key={currentIndex}>
                <div className={`${index === currentIndex
                  ? 'bg-orange text-white'
                  : 'bg-white text-heading'
                  } text-center pt-[70px] pb-[34px] border-b border-stroke-3 transition`}>
                    <div className='text-[24px] font-medium mb-[10px]'>{title}</div>
                  </div>
                <div>
                  <p>Discover your favourite class!</p>
                  <ul className='flex flex-col gap-3 mb-10'>
                    {list.map((item, index) => {
                      const { icon, name } = item;

                      return (
                        <li className='border border-stroke-3 p-4 rounded-md flex items-center gap-4' key={index}>
                          <div className='flex justify-center items-center bg-green-100 w-7 h-7 text-2xl text-green-300 rounded-full'>{icon}</div>
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                  <button>button</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
