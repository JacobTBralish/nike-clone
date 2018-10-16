import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MensShoes from '../../Data/nikeMensShoesPg1.json';
import axios from 'axios';


class MensShoe extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    
    render() { 
        let mappedShoes = MensShoes.map((shoe, index) => {
            console.log('shoe: ', shoe);
            return <div key={index}>
                <Link to={{pathname:`/${shoe.title}`, state:{title: shoe.title, category: shoe.subtitle, price: shoe.localPrice, productImg: shoe.spriteSheet}}} ><img src={shoe.spriteSheet} alt={shoe.title}></img>
                <p>{shoe.title}</p>
                <p>{shoe.subtitle}</p>
                <p>{shoe.localPrice}</p>
                </Link>
            </div>
        })

        return ( 
            <div>
                {mappedShoes}
            </div>
         );
    }
}
 
export default MensShoe;