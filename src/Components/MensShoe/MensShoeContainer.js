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
    

    componentDidMount() {
        this.props.getProduct(MensShoes)
    }

    
    render() { 
        console.log('product: ', this.props.products);
        let mappedShoes = this.props.products.map((item, index) => {
            // console.log('shoe: ', shoe);
            return <div key={index}>
                <Link to={{pathname:`/product/${item.title}`, state:{title: item.title, category: item.subtitle, price: item.localPrice, productImg: item.spriteSheet}}} ><img src={item.spriteSheet} alt={item.title}></img>
                <p>{item.title}</p>
                <p>{item.subtitle}</p>
                <p>{item.localPrice}</p>
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