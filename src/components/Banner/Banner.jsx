import React from 'react';
import Header from '../Header/Header';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='left-h'>
                <Header />
                <div className='the-best-ad'></div>
            </div>
            <div className='right-h'>right side</div>
        </div>
    );
};

export default Banner;