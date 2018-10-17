import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { addToCart } from './../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DetailedShoe extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }
 
    render() {
        let {price, title, category, productImg} = this.props.location.state;
        console.log('this.props.location.state: ', this.props);

        let {user, cart, addToCart } = this.props;
        console.log('cart: ', cart);

        return ( 
            <div>
                <img src={productImg} alt={title}></img>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>

                <button onClick={() => addToCart(title)}>Add To Cart</button>
                <Link to={{pathname:`/cart`, state:{title: title, category: category, price: price, productImg: productImg}}}>To Cart</Link>
                </div>
         );
    }
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        user: state.user
        }
}

 
export default withRouter(connect(mapStateToProps, {addToCart})(DetailedShoe));