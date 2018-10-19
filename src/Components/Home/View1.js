import React from 'react';
import { Link } from 'react-router-dom';
import './View.scss';


const View1 = (props) => {
    return ( 
        <div>
            <img className='homeImage' src={`${props.info.image}`} alt=''></img>
            <h2>{props.info.h2text}</h2>
            <p>{props.info.pText}</p>
            <Link to=''>{props.info.linkText}</Link>
            
        </div>
     );
}
 
export default View1;