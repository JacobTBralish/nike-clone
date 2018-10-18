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
            taxRate: 0,
            chosenState: '',
            SameShippingAsBilling: false,

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

    handleSelector = (event) => {
        console.log('Please work', event.target.value.rate, event.target.value.stateName);
        this.setState({
            taxRate: event.target.value.rate,
            chosenState: event.target.value.stateName
        })
    }


    render() { 
        let { total, user } = this.props;
        let { SameShippingAsBilling, taxRate, chosenState } = this.state;

        if ( this.state.comeplete ) {
            return <h1>Purchase Complete</h1>;
        }
        return (
        <div>
            <div>
                <select onChange={this.handleSelector}>
                    <option>Select your state</option>
                    <option value={{stateName: "Alabama",rate:0.04}}>Alabama</option>
                    <option value={{stateName: 'Alaska',rate:0}}>Alaska</option>
                    <option value={{stateName:'Arizona', rate: 0.056}}>Arizona</option>
                    <option value={{stateName: 'Arkansas', rate: 0.065}}>Arkansas</option>
                    <option value={{stateName: 'California', rate: 0.075}}>California</option>
                    <option value={{stateName: 'Colorado', rate: 0.029}}>Colorado</option>
                    <option value={{stateName: 'Connecticut', rate: 0.0635}}>Connecticut</option>
                    <option value={{stateName: 'Delaware', rate: 0}}>Delaware</option>
                    <option value={{stateName: 'Florida', rate: 0.06}}>Florida</option>
                    <option value={{stateName: 'Georgia', rate: 0.04}}>Georgia</option>
                    <option value={{stateName: 'Hawaii', rate: 0.04}}>Hawaii</option>
                    <option value={{stateName: 'Idaho', rate: 0.06}}>Idaho</option>
                    <option value={{stateName: 'Illinois', rate: 0.0625}}>Illinois</option>
                    <option value={{stateName: 'Indiana', rate: 0.07}}>Indiana</option>
                    <option value={{stateName: 'Iowa', rate: 0.06}}>Iowa</option>
                    <option value={{stateName: 'Kansas', rate: 0.065}}>Kansas</option>
                    <option value={{stateName: 'Kentucky', rate: 0.06}}>Kentucky</option>
                    <option value={{stateName: 'Louisiana', rate: 0.04}}>Louisiana</option>
                    <option value={{stateName: 'Maine', rate: 0.055}}>Maine</option>
                    <option value={{stateName: 'Maryland', rate: 0.06}}>Maryland</option>
                    <option value={{stateName: 'Massachusetts', rate: 0.0625}}>Massachusetts</option>
                    <option value={{stateName: 'Michigan', rate: 0.06}}>Michigan</option>
                    <option value={{stateName: 'Minnesota', rate: 0.0688}}>Minnesota</option>
                    <option value={{stateName: 'Mississippi', rate: 0.07}}>Mississippi</option>
                    <option value={{stateName: 'Missouri', rate: 0.0423}}>Missouri</option>
                    <option value={{stateName: 'Montana', rate: 0}}>Montana</option>
                    <option value={{stateName: 'Nebraska', rate: 0.055}}>Nebraska</option>
                    <option name='Nevada' value={0.0685}>Nevada</option>
                    <option name='New Hampshire' value={0}>New Hampshire</option>
                    <option name='New Jersey' value={0.07}>New Jersey</option>
                    <option name='New Mexico' value={0.0513}>New Mexico</option>
                    <option name='New York' value={0.04}>New York</option>
                    <option name='North Carolina' value={0.0475}>North Carolina</option>
                    <option name='North Dakota' value={0.05}>North Dakota</option>
                    <option name='Ohio' value={0.0575}>Ohio</option>
                    <option name='Oklahoma' value={0.045}>Oklahoma</option>
                    <option name='Oregon' value={0}>Oregon</option>
                    <option name='Pennsylvania' value={0.06}>Pennsylvania</option>
                    <option name='Rhode Island' value={0.07}>Rhode Island</option>
                    <option name='South Carolina' value={0.06}>South Carolina</option>
                    <option name='South Dakota' value={0.04}>South Dakota</option>
                    <option name='Tennessee' value={0.07}>Tennessee</option>
                    <option name='Texas' value={0.0625}>Texas</option>
                    <option name='Utah' value={0.0595}>Utah</option>
                    <option name='Vermont' value={0.06}>Vermont</option>
                    <option name='Virginia' value={0.053}>Virginia</option>
                    <option name='Washington' value={0.065}>Washington</option>
                    <option name='West Virginia' value={0.06}>West Virginia</option>
                    <option name='Wisconsin' value={0.05}>Wisconsin</option>
                    <option name='Wyoming' value={0.04}>Wyoming</option>
                    <option name='D.C.' value={0.0575}>D.C.</option>
                </select>
                
            </div>

            <div>
                <select name='taxRate' onChange={this.handleSelector}>
                    <option>Select your state</option>
                    <option name='Alabama' value={0.04}>Alabama</option>
                    <option name='Alaska' value={0}>Alaska</option>
                    <option name='Arizona' value={0.056}>Arizona</option>
                    <option name='Arkansas' value={0.065}>Arkansas</option>
                    <option name='California' value={0.075}>California</option>
                    <option name='Colorado' value={0.029}>Colorado</option>
                    <option name='Connecticut' value={0.0635}>Connecticut</option>
                    <option name='Delaware' value={0}>Delaware</option>
                    <option name='Florida' value={0.06}>Florida</option>
                    <option name='Georgia' value={0.04}>Georgia</option>
                    <option name='Hawaii' value={0.04}>Hawaii</option>
                    <option name='Idaho' value={0.06}>Idaho</option>
                    <option name='Illinois' value={0.0625}>Illinois</option>
                    <option name='Indiana' value={0.07}>Indiana</option>
                    <option name='Iowa' value={0.06}>Iowa</option>
                    <option name='Kansas' value={0.065}>Kansas</option>
                    <option name='Kentucky' value={0.06}>Kentucky</option>
                    <option name='Louisiana' value={0.04}>Louisiana</option>
                    <option name='Maine' value={0.055}>Maine</option>
                    <option name='Maryland' value={0.06}>Maryland</option>
                    <option name='Massachusetts' value={0.0625}>Massachusetts</option>
                    <option name='Michigan' value={0.06}>Michigan</option>
                    <option name='Minnesota' value={0.0688}>Minnesota</option>
                    <option name='Mississippi' value={0.07}>Mississippi</option>
                    <option name='Missouri' value={0.0423}>Missouri</option>
                    <option name='Montana' value={0}>Montana</option>
                    <option name='Nebraska' value={0.055}>Nebraska</option>
                    <option name='Nevada' value={0.0685}>Nevada</option>
                    <option name='New Hampshire' value={0}>New Hampshire</option>
                    <option name='New Jersey' value={0.07}>New Jersey</option>
                    <option name='New Mexico' value={0.0513}>New Mexico</option>
                    <option name='New York' value={0.04}>New York</option>
                    <option name='North Carolina' value={0.0475}>North Carolina</option>
                    <option name='North Dakota' value={0.05}>North Dakota</option>
                    <option name='Ohio' value={0.0575}>Ohio</option>
                    <option name='Oklahoma' value={0.045}>Oklahoma</option>
                    <option name='Oregon' value={0}>Oregon</option>
                    <option name='Pennsylvania' value={0.06}>Pennsylvania</option>
                    <option name='Rhode Island' value={0.07}>Rhode Island</option>
                    <option name='South Carolina' value={0.06}>South Carolina</option>
                    <option name='South Dakota' value={0.04}>South Dakota</option>
                    <option name='Tennessee' value={0.07}>Tennessee</option>
                    <option name='Texas' value={0.0625}>Texas</option>
                    <option name='Utah' value={0.0595}>Utah</option>
                    <option name='Vermont' value={0.06}>Vermont</option>
                    <option name='Virginia' value={0.053}>Virginia</option>
                    <option name='Washington' value={0.065}>Washington</option>
                    <option name='West Virginia' value={0.06}>West Virginia</option>
                    <option name='Wisconsin' value={0.05}>Wisconsin</option>
                    <option name='Wyoming' value={0.04}>Wyoming</option>
                    <option name='D.C.' value={0.0575}>D.C.</option>
                </select>
            </div>
            <div>
                <input type='checkbox' value={SameShippingAsBilling} onChange={this.handleChange}></input> Billing address same as shipping

            </div>

            
            <div>
                    {/* <button onClick={this.submit}>PLACE ORDER</button> */}
                    <StripeCheckout 
                    name='Nike'
                    description='Just do it'
                    amount={fromDollarToCent(total * taxRate)}
                    image={'http://content.nike.com/content/dam/one-nike/globalAssets/social_media_images/nike_swoosh_logo_black.png'}
                    panelLabel='Pay'
                    currency='USD'
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
                    email={user.email ? user.email : null}
                    token={this.onToken(total * taxRate)}
                />
                CheckoutForm
            </div>
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