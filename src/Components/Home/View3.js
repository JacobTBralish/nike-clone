import React from 'react';
import { Link } from 'react-router-dom';
import './View.scss';



const View3 = (props) => {
    return ( 
        <div>
            <img className='homeImage' src={`${props.info.image}`} alt=''></img>
            <span>
                <div>
                    <h2>{props.info.h2text}</h2>
                    <p>{props.info.pText}</p>
                    <Link to=''>{props.info.linkText}</Link>
                </div>
                <div>
                    <h2>{props.info.h2text2}</h2>
                    <p>{props.info.pText2}</p>
                    <Link to=''>{props.info.linkText2}</Link>
                </div>
            </span>
            
        </div>
     );
}
 
export default View3;