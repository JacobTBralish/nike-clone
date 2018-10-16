import React, { Component } from 'react'
// import { addToCart } from './../../Redux/reducer';
import { connect } from 'react-redux';


class Cart extends Component {
    render() {
        const {cart} = this.props 
        return (
            <div>
                <h1>Cart Rendered </h1>

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