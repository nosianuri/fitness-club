import React from 'react';
import Header from '../Header/Header';
import './Banner.css';
import banner_image from "../../assets/hero_image.png";
import banner_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Banner = () => {
    return (
        <div className='banner'>
            <div className='left-h'>
                <Header />
                {/* the best ad */}
                <div className='the-best-ad'>
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* Banner Heading */}
                <div className='banner-text'>
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span> Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div className=''>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* Banner btn */}
                <div className='banner-buttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>

                <div className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                {/* banner images */}
                <img className='banner-image' src={banner_image} alt="" />
                <img className='banner-image-back' src={banner_image_back} alt="" />
                {/* calories */}
                <div className='calories'>
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;