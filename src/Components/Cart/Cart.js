import React, { Component } from 'react'
// import { addToCart } from './../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cart extends Component {

    render() {
        const cart = [this.props.location.state]
        console.log('cart: ', cart);

        const mappedCart = cart.map((item, index) => {
            console.log('item: ', item);
            return <div key={index}>
                <img src={item.productImg}></img>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button>Remove from Cart</button>
            </div>
        })
        return (
            <div>
                <h1>Cart Rendered </h1>
                {mappedCart}
                <Link to='/checkout'>Purchase</Link>


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
        }
}
export default connect(mapStateToProps)(Cart)