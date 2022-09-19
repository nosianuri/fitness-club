import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import '../video.scss';
import { BsPlayCircleFill } from 'react-icons/bs';

const Features = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='bg-video h-[310px] bg-cover'>
          <div>
            <BsPlayCircleFill />
          </div>
        </div>
        <div>
          <div>
            <h2>
              The Better Way to <br /> Start Yoga
            </h2>
            <div>
              <p>
                Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself. We are providing the best.
              </p>
              <button>Get started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
