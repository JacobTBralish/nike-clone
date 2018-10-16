import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class MensShoe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            shoes: [],
         }
    }

    componentDidMount() {
        console.log('hello');
        axios.get('http://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=men-shoes/7puZoneZoi3&pn=1').then(response => {
            console.log(response.data.sections[0].items);
            let shoe = response.data.sections[0].items
            this.setState({
                shoes: shoe
            });
        }).catch(error => {
            console.log(error)
        })
    };
    render() { 
        let { shoes } = this.state;

        let mappedShoes = shoes.map((shoe, index) => {
            return <div key={index}>
                <Link to={{pathname:`/${shoe.pdpUrl}`, state:{geturl: shoe.pdpUrl}}} ><img src={shoe.spriteSheet} alt={shoe.title}></img>
                <p>{shoe.title}</p>
                <p>{shoe.subtitle}</p>
                <p>{shoe.localPrice}</p>
                </Link>
            </div>
        })

        return ( 
            <div>
                {mappedShoes}
                Mens shoe container
            </div>
         );
    }
}
 
export default MensShoe;