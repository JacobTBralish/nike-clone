import React from 'react';
import { Link } from 'react-router-dom';
import './View.scss';


const View2 = (props) => {
    return ( 
        <div className='imageContent'>
            <img className='homeImage' src={`${props.info.image}`} alt=''></img>
            <h2>{props.info.h2text}</h2>
            <p id='pText'>{props.info.pText}</p>
            <Link id='homeImageLink' to=''>{props.info.linkText}</Link>
            <Link id='homeImageLink' to=''>{props.info.linkText2}</Link>
            
        </div>
     );
}
 
export default View2;