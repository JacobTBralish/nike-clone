import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { } from '../../Redux/reducer';
import axios from 'axios';


const fromDollarToCent = amount => amount * 100;

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: '',
         }
    }




    onToken = (amount) => token => {
        axios.post('/api/payment', {
            source: token.id,
            email: token.email,
            currency: 'USD',
            amount: fromDollarToCent(amount)
        })
        .then(res => {
            this.paymentSuccess(res)
            console.log('------------ STRIPE res', res.data)})
        .catch(err => this.paymentError(err))
    }

    getTotal = () => {
        let { cart, total } = this.props;
        console.log('cart: ', cart);

       if(cart.length > 0) {
           console.log('cart: ', cart);
           cart.forEach(item => {
            let fixedPrice = parseInt(item.price.split('').splice(1, item.price.length - 1).join(''), 10);
            console.log('fixedPrice: ', parseInt(fixedPrice, 10));
                total += fixedPrice 
            })
        }
        return total
    }

    paymentSuccess = data => {
        const d = new Date()
        const today = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
        console.log('------------ today', today)
        console.log('------------ paymentSuccess data', data)
        alert('Payment successful!')
        console.log('data: ', data.data);
        let id = data.data.stripeSuccess.id.split('')
        console.log('id: ', id);
        id.splice(0, 3)
        console.log('id: ', id);
        this.setState({orderId: id.join('')})
        axios.post('/api/email', { email: this.props.user.email, name: this.props.user.name, date: today, total: this.props.location.state.total, number: this.state.orderid, address: "this.props.address"})
        // axios.post('/api/order', {orderId: id.join(''), userId: this.props.user.id, addressId: this.props.address.id, cart: this.props.cart, date: today})
        .then(res => {
            console.log('------------ POST Order res', res)
            res.status(200).send('Hey, it worked')
            // sessionStorage.clear()
            // this.props.clearCart()
            // this.props.resetAddress()
            // this.props.props.history.push(`/confirmation/${this.state.orderId}`)
        })
        .catch(err => console.log('------------ POST order err', err))
    }

    paymentError = data => {
        console.log('------------ paymentError data', data)
        alert('Payment Processing Error! No transaction occurred.')
    }


    render() { 
        let { total } = this.props.location.state;
        console.log('this is env', process.env.REACT_APP_STRIPE_PUBLISHABLE);
        let { user } = this.props;
        console.log('user: ', user);
        if ( this.state.comeplete ) {
            return <h1>Purchase Complete</h1>;
        }
        return ( 
            <div>
                    {/* <button onClick={this.submit}>PLACE ORDER</button> */}
                    <StripeCheckout 
                    name='Nike'
                    description='Just do it'
                    amount={fromDollarToCent(total)}
                    image={'http://content.nike.com/content/dam/one-nike/globalAssets/social_media_images/nike_swoosh_logo_black.png'}
                    panelLabel='Pay'
                    currency='USD'
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
                    email={user.email ? user.email : null}
                    token={this.onToken(total)}
                />
                CheckoutForm
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        cart: state.cart,
        total: state.total
        
    }
}
 

const mapDispatchToProps =  {

}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutForm));