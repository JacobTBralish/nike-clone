import React from 'react';
import { Link } from 'react-router-dom';
import './View.scss';


const VideoView = (props) => {
    return ( 
    <div className='imageContainer'>
            <video id='homeVideo' src={`${props.info.video}`} autoPlay='true' loop='true'></video>
            <div className='videoContent1'>
                <h2 id='h2Text1'>{props.info.h2Text}</h2>
                <p id='pText1'>{props.info.pText}</p>
                <Link id='homeVideoLink1' to=''>{props.info.linkText}</Link>
            </div>
        </div>
     );
}
 
export default VideoView;