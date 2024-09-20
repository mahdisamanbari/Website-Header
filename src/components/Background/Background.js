import React from 'react';
import './Background.css';
import video1 from '../../image/video1.mp4';
import image1 from '../../image/image1.png';
import image2 from '../../image/image2.png';
import image3 from '../../image/image3.png';

const Background = ({heroCount,playStatus}) => {
    if(playStatus){
        return (
        <video className='background' autoPlay loop muted>
            <source src={video1} type='video/mp4'/>
        </video>
    );
    }
    else if(heroCount === 0){
        return(
            <img className='background' src={image1}/>
        )
    }
    else if(heroCount === 1){
        return(
            <img className='background' src={image2}/>
        )
    }
    else if(heroCount === 2){
        return(
            <img className='background' src={image3}/>
        )
    }
    
};

export default Background;