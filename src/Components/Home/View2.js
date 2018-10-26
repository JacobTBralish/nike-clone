import React from 'react';
import { Link } from 'react-router-dom';
import './View.scss';


const View2 = (props) => {
    return ( 

        <div className='imageContainer'>
            <img className='homeImage' src={`${props.info.image}`} alt=''></img>
            <div className='imageContent2'>
                <h2 id='h2Text2'>{props.info.h2Text}</h2>
                <p id='pText2'>{props.info.pText}</p>
                <div className='linkRow'>
                    <Link id='homeImageLink2-1' to=''>{props.info.linkText}</Link>
                    <Link id='homeImageLink2-2' to=''>{props.info.linkText2}</Link>
                </div>
            </div>
        </div>
     );
}
 
export default View2;