import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProduct } from '../../Redux/reducer';
import MensShoes from '../../Data/nikeMensShoesPg1.json';


class MensShoe extends Component {
    constructor() {
        super();
        this.state = {
            product: []
        }
    }
    

    // componentDidMount() {
    //     axios.get('/api/mensshoes').then(response => {
    //         console.log('response: ', response.data);
    //         return this.props.getProduct(response.data)
    //     })
    // }

    
    render() { 
        let mappedShoes = MensShoes.map((shoe, index) => {
            // console.log('shoe: ', shoe);
            return <div key={index}>
                <Link to={{pathname:`/product/${shoe.title}`, state:{title: shoe.title, category: shoe.subtitle, price: shoe.localPrice, productImg: shoe.spriteSheet}}} ><img src={shoe.spriteSheet} alt={shoe.title}></img>
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

const mapStateToProps = state => {
    return {
        products: state.products,


    }
}

const mapDispatchToProps = {
    getProduct
}
 
export default connect(mapStateToProps,mapDispatchToProps)(MensShoe);