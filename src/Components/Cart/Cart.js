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
            isLoading: false
        }
    }

    getTotal = () => {
        let { cart } = this.props;
        let count = 0;

       if(cart.length > 0) {
           console.log('cart: ', cart);
           cart.forEach(item => {
            let fixedPrice = parseInt(item.price.split('').splice(1, item.price.length - 1).join(''), 10);
            console.log('fixedPrice: ', parseInt(fixedPrice, 10));
                count += fixedPrice 
            })
        }
        this.setState({
            total: count,
        })
    }
    
    // paymentSuccess = data => {
    //     const d = new Date()
    //     const today = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    //     // console.log('------------ today', today)
    //     // console.log('------------ paymentSuccess data', data)
    //     alert('Payment successful!')
    //     let id = data.data.StripeSuccess.id.split('')
    //     id.splice(0, 3)
    //     this.setState({orderid: id.join('')})
    //     console.log('------------ this.props.address', this.props.address)
    //     axios.post('/api/email', { email: this.props.user.email, name: this.props.user.first_name, date: today, total: this.getTotal(), number: this.state.orderid, address: this.props.address})
    //     axios.post('/api/order', {orderId: id.join(''), userId: this.props.user.id, addressId: this.props.address.id, cart: this.props.cart, date: today})
    //     .then(res => {
    //         console.log('------------ POST Order res', res)
    //         sessionStorage.clear()
    //         this.props.clearCart()
    //         this.props.resetAddress()
    //         this.props.props.history.push(`/confirmation/${this.state.orderid}`)
    //     })
    //     .catch(err => console.log('------------ POST order err', err))
    // }

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
            background: "orange"
        }
        const cart = [this.props.location.state]
        let { total, orderComplete } = this.state;
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
                    <Link style={checkoutLinkStlyle} to='/checkout'>CHECKOUT</Link>
                </div>
            }

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