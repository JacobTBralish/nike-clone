import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';
import { } from '../../Redux/reducer';
import axios from 'axios';


const fromUSDtoCent = amount => amount * 100

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false }
    }



    fromDollarToCent = amount => amount * 100;

    onToken = amount => token => {
        axios.post('/save-stripe-token', {
            source: token.id,
            email: token.email,
            currency: 'USD',
            amount: fromUSDtoCent(amount)
        })
        .then(response => {
            this.props.setCart();
            this.setState({
                orderComplete: true,
                order: response.data
            })
        }).catch(error => {
            console.log(error, "There was an error with onToken in cart");
        })
    }

    getTotal = () => {
        console.log('------------ this.props', this.props)
        const { cart } = this.props
        let allTotal = 0
        if(cart) {
            for(let i=0; i<cart.length; i++){
                allTotal += cart[i].total
            }
            return allTotal.toFixed(2)
        }
    }

    render() { 
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
                    amount={fromUSDtoCent(this.getTotal())}
                    image={'http://content.nike.com/content/dam/one-nike/globalAssets/social_media_images/nike_swoosh_logo_black.png'}
                    panelLabel='Pay'
                    currency='USD'
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
                    email={user.email ? user.email : null}
                    token={this.onToken(this.getTotal())}
                />
                CheckoutForm
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
        
    }
}
 

const mapDispatchToProps =  {

}
 
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);