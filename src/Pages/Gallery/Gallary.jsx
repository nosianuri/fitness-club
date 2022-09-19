import React, { useState } from 'react';
import './Gallery.css';
import CloseIcon from '@material-ui/icons/Close';
                                                                                          
const Gallary = () => {

    let data = [
        {
            id: 1,
            imgSrc: 'https://i.ibb.co/mXJt2ZG/image1.png',
        },
        {
            id: 2,
            imgSrc: 'https://i.ibb.co/cLmkvz3/image2.png',
        },
        {
            id: 3,
            imgSrc: 'https://i.ibb.co/3r0DxHB/image3.png',
        },
        {
            id: 3,
            imgSrc: 'https://i.ibb.co/BZMMynv/image4.png',
        },
        {
            id: 3,
            imgSrc: 'https://i.ibb.co/zSmDnnP/hero-image.png',
        },
        {
            id: 3,
            imgSrc: 'https://i.ibb.co/nPqycgb/banner.png',
        },
    ];

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>

            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} alt="" />
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Gallary