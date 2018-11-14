import React from 'react';
import { Link } from 'react-router-dom';
import './View.scss';


const View1 = (props) => {
    return ( 
    <div className='imageContainer'>
            <img className='homeImage' src={`${props.info.image}`} alt='' />
            <div className='imageContent1'>
                <h2 id='h2Text1'>{props.info.h2Text}</h2>
                <p id='pText1'>{props.info.pText}</p>
                <Link id='homeImageLink1' to=''>{props.info.linkText}</Link>
            </div>
        </div>
     );
}
 
export default View1;