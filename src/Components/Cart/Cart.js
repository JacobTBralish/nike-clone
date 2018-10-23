import React, { Component } from 'react'
// import {} from './../../Redux/reducer';
// import MensShoes from '../../Data/nikeMensShoesPg1.json'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromCart } from '../../Redux/reducer';
// import Axios from 'axios';


class Cart extends Component {
    constructor() {
        super();
        this.state = {
            orderComplete: false,
            order: [],
            qty: 0,
            total: 0,
            orderid: '',
            qty: 0
            
        }
    }


    handleQuantity = (event) => {
        console.log('event.target.value: ', event.target.value);
        this.setState({
            qty: event.target.value
        })
    }


    render() {
        let checkoutLinkStlyle = {
            textDecoration: "none",
            color: "white",
            background: "tomato",
            fontWeight: "bold",

        }

        let disclaimerText = {
            fontSize: "10px"
        }

        let { cart, total, deleteFromCart } = this.props
        console.log('total: ', total);
        let { orderComplete } = this.state;
        // const { totalPrice } = this;
        console.log('cart: ', cart);

        
        let mappedCart = cart.map((item, index) => {
            if (item !== undefined)
           { var { productImg, title, price, category } = item;
            // console.log('item: ', item);
            return <div key={index}>
                <img src={productImg} alt={title}></img>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
                <select onChange={this.handleQuantity}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
                <button onClick={() => deleteFromCart(cart, title, total)}>Remove from Cart</button>
            </div>
            }
        })
        return (
            <div>
                { orderComplete ?
                <div>
                    <h2>Order Completed</h2>
                    <h3>Order Summary</h3>
                    <ul>
                        {/* <li><img src={productImg}></img></li>
                        <li>{title}</li>
                        <li>{price}</li> */}
                    </ul>
                </div>
            :
                <div>
                    <h1>Cart Rendered </h1>
                    {mappedCart}
                    <h2>*Total: ${total ? (total).toFixed(2) : (0).toFixed(2)}</h2>
                    <p style={disclaimerText}>*Tax will be included after shipping details are input</p>
                    {console.log('total: ', total)}
                    <Link style={checkoutLinkStlyle} to='/checkout'>CHECKOUT</Link>
                </div>
            }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        total: state.total
        }
}

const mapDispatchToProps =  {
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)