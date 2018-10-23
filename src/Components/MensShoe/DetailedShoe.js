import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { addToCart, selectedProduct } from './../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DetailedShoe extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }

    componentDidMount() {
        this.props.selectedProduct(this.props.product);
    }
 
    render() {
        let { addToCart, total, product } = this.props;
        console.log('product: ', product);

        let mappedProduct = product.length ? product.map((detail, index) => {
            let { spriteSheet, title, localPrice, subtitle } = detail;
            return <div key={index}>
                <img src={spriteSheet} alt={detail.title}></img>
                <p>{title}</p>
                <p>{localPrice}</p>
                <p>{subtitle}</p>
            </div>
        }) : 'Loading...'

        return ( 
            <div>
                <div><Link to='/mensshoes'>Back to Shoes</Link></div>
                {mappedProduct}
                <button onClick={() => addToCart(product, total)}>Add To Cart</button>
                <Link to={{pathname:`/cart`, state:{product}}}>To Cart</Link>
                </div>
         );
    }
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        item: state.cart,
        user: state.user,
        total: state.total,
        product: state.product
        }
}

const mapDispatchToProps = {
    addToCart,
    selectedProduct
}

 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedShoe));