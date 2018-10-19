import React from 'react';
import { Link } from 'react-router-dom';


const View2 = (props) => {
    return ( 
        <div>
            <img src={`${props.image}`} alt=''></img>
            <h2>{props.h2text}</h2>
            <p>{props.pText}</p>
            <Link to=''>{props.linkText}</Link>
            <Link to=''>{props.linkText2}</Link>
            
        </div>
     );
}
 
export default View2;