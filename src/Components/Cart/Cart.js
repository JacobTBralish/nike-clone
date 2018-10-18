import React, { Component } from 'react'
// import {} from './../../Redux/reducer';
// import MensShoes from '../../Data/nikeMensShoesPg1.json'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            
        }
    }

    getTotal = () => {
        let { cart/* , total */ } = this.props;
        let { total } = this.state;

        if(cart.length > 0) {
            console.log('cart: ', cart);
            cart.forEach(item => {
                let fixedPrice = parseInt(item.price.split('').splice(1, item.price.length - 1).join(''), 10);
                console.log('fixedPrice: ', parseInt(fixedPrice, 10));
                total += fixedPrice 
            })
        }
        this.setState({total}) 
    }
    

componentDidMount() {
    this.getTotal();
}

    // this.setState({
    //     total : total
    // });



    render() {
        let checkoutLinkStlyle = {
            textDecoration: "none",
            color: "white",
            background: "orange",
            fontWeight: "bold",

        }

        const cart = [this.props.location.state]
        let { orderComplete, total } = this.state;
        // let { total } = this.props;
        // const { totalPrice } = this;
        console.log('cart: ', cart);


        let mappedCart = cart.map((item, index) => {
            var { productImg, title, price } = item;
            // console.log('item: ', item);
            return <div key={index}>
                <img src={productImg} alt={title}></img>
                <p>{title}</p>
                <p>{price}</p>
                <button>Remove from Cart</button>
            </div>
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
                    <h3>Total: ${(total *= 1.06).toFixed(2)}</h3>
                    {console.log('total: ', total)}
                    <Link style={checkoutLinkStlyle} to={{pathname:'/checkout', state:{total:total}}}>CHECKOUT</Link>
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
export default connect(mapStateToProps)(Cart)