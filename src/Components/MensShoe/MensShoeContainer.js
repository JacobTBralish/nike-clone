import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, selectedProduct } from '../../Redux/reducer';
import MensShoes from '../../Data/nikeMensShoesPg1.json';


class MensShoe extends Component {
    constructor() {
        super();
        this.state = {
            product: []
        }
    }
    

    componentDidMount() {
        this.props.getProducts(MensShoes)
    }

    
    render() { 
        let { products, selectedProduct } = this.props;
        console.log('products: ', products);
        let mappedShoes = products.map((item, index) => {
            // console.log('shoe: ', shoe);
            return <div key={index}>
                <Link onClick={() => { selectedProduct([item])}} to={`/product/${item.title}`} ><img src={item.spriteSheet} alt={item.title}></img>
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
    getProducts,
    selectedProduct
}
 
export default connect(mapStateToProps,mapDispatchToProps)(MensShoe);