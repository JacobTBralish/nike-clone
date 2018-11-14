import React from 'react';
import { Link } from 'react-router-dom';
import './View.scss';



const View3 = (props) => {
    return ( 
        <div id='imageContainerFix'>
            <img className='homeImage' src={`${props.info.image}`} alt=''></img>
            <span className='content-row'>
                <div className='imageContent3-1'>
                    <h2 id='h2Text3-1'>{props.info.h2Text}</h2>
                    <p id='pText3-1'>{props.info.pText}</p>
                    <Link id='homeImageLink3-1' to='/'>{props.info.linkText}</Link>
                </div>
                <div className='imageContent3-2'>
                    <h2 id='h2Text3-2'>{props.info.h2Text2}</h2>
                    <p id='pText3-2'>{props.info.pText2}</p>
                    <Link id='homeImageLink3-2' to='/'>{props.info.linkText2}</Link>
                </div>
            </span>
            
        </div>
     );
}
 
export default View3;