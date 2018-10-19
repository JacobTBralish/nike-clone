import React from 'react';
import { Link } from 'react-router-dom';


const View3 = (props) => {
    return ( 
        <div>
            <img src={`${props.image}`} alt=''></img>
            <span>
                <div>
                    <h2>{props.h2text}</h2>
                    <p>{props.pText}</p>
                    <Link to=''>{props.linkText}</Link>
                </div>
                <div>
                    <h2>{props.h2text2}</h2>
                    <p>{props.pText2}</p>
                    <Link to=''>{props.linkText2}</Link>
                </div>
            </span>
            
        </div>
     );
}
 
export default View3;