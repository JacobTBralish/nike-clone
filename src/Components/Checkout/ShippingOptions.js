import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import { setTotal } from '../../Redux/reducer';
import axios from 'axios';

import BillingForm from './BillingForm';

const fromDollarToCent = amount => amount * 100;


class ShippingOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingCost: 0,
            orderId: '',
            taxRate: 0,
            chosenState: '',
            SameShippingAsBilling: false,
            home: false,
            selectedOption: '0'
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
        let { cart, total, setTotal } = this.props;
        console.log('cart, total, setTotal: ', cart, total, setTotal);

       if(cart.length > 0) {
           cart.forEach(item => {
            let fixedPrice = parseInt(item.price.split('').splice(1, item.price.length - 1).join(''), 10);
                total += fixedPrice 
                console.log('total: ', total);
            })
        }
        console.log('total: ', total);
        setTotal(total)
    }

    makeId = () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 30; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
      
   

    paymentSuccess = data => {
        const date = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const today = `${months[date.getMonth()]} ${date.getDate()}th, ${date.getFullYear()}`;
        console.log('------------ today', today)
        console.log('------------ paymentSuccess data', data)
        alert('Payment successful!')
        console.log('data: ', data.data);
        let id = data.data.stripeSuccess.id.split('')
        console.log('id: ', id);
        id.splice(0, 3)
        console.log('id: ', id);
        this.setState({orderId: id.join('')})
        console.log(this.props.shippingInfo, 'this is this.props.shit');
        axios.post('/api/email', { trackingNumber: this.makeId() ,email: this.props.user.email, name: this.props.user.name, date: today, total: this.props.total, number: this.state.orderId, address: this.props.shippingInfo })
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


    handleChange = (event) => {
        this.setState({
            shippingCost: event.target.value
        })
    }
    

    handleOptionChange =  (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      }


    render() {
        let {  total, user, shippingInfo } = this.props;
        console.log('shippingInfo: ', shippingInfo);
        console.log('total: ', total);
        let { SameShippingAsBilling, chosenState/* , home */ } = this.state;
        let { taxRate } = this.props.location.state;
        console.log('this.props.location.state: ', this.props.location.state);
        console.log('taxRate: ', taxRate);

        // let { firstName, lastName, streetAddress, city, chosenState, zipCode, email, phoneNumber } = props;

        return (
            <div>
                <div>
                    <div>
                        <Link to='/shippingform'>Edit</Link>
                    </div>
                    {/* <div>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    <div>
                        <p>{streetAddress}</p>
                    </div>
                    <div>
                        <p>{city}</p>
                        <p>{chosenState}</p>
                        <p>{zipCode}</p>
                    </div>
                    <div>
                        <p>{email}</p>
                    </div>
                    <div>
                        <p>{phoneNumber}</p>
                    </div> */}
                </div>


                <div>
                    <h3>SELECT YOUR SHIPPING SPEED</h3>
                    <button id="shippingMethodTooltip">PLACEHOLDERRRRRRRR</button>
                    <p>Shipping estimates takes into account weekends and holidays. <a>See Details</a>
                    Next day delivery is not available in remote locations.
                    </p>
                    <div>
                        <div>
                            <input checked={this.state.selectedOption === '0'} onChange={this.handleOptionChange} type="radio" id="STANDARD" value="0"></input>
                            <label htmlFor="STANDARD">
                                <span>Standard (Get it by (FOUR BUSINESS DAYS ISH) DAY, MONTH DAYNUM)</span>
                                <span>Free</span>
                            </label>
                        </div>
                        <div>
                            <input checked={this.state.selectedOption === '5'} onChange={this.handleOptionChange} type="radio"  id="TWO_DAY" value="5"></input>
                            <label htmlFor="TWO_DAY">
                                <span>Two Day (Get it by DAY, MONTH DAYNUM)</span>
                                <span>$5.00</span>
                            </label>
                        </div>
                        <div>
                            <input checked={this.state.selectedOption === '15'} onChange={this.handleOptionChange} type="radio"  id="NEXT_DAY" value="15"></input>
                            <label htmlFor="NEXT_DAY">
                                <span>Next Day (Get it by DAY, MONTH DAYNUM)</span>
                                <span>$15.00</span>
                            </label>
                        </div>
                    </div>
                <div>
                    <p>Orders placed after 5PM EST (2PM PST) begin processing the next business day.</p>
                    <p>Please note that Nike.com does not deliver on Sundays or holidays.</p>
                </div>

                <div><BillingForm /></div>
                <StripeCheckout 
                    name='Nike'
                    description='Just do it'
                    amount={fromDollarToCent(total * (1+parseFloat(taxRate)) + parseInt(this.state.selectedOption))}
                    image={'http://content.nike.com/content/dam/one-nike/globalAssets/social_media_images/nike_swoosh_logo_black.png'}
                    panelLabel='Pay'
                    currency='USD'
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
                    email={user.email ? user.email : null}
                    token={this.onToken(total * (1+parseFloat(taxRate)) + parseInt(this.state.selectedOption))}
                />
                </div>
            <div>
                <input type='checkbox' value={SameShippingAsBilling} onChange={this.handleChange}></input> Billing address same as shipping

            </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        cart: state.cart,
        total: state.total,
        shippingInfo: state.shippingInfo
        
    }
}
 

const mapDispatchToProps =  {
    // setTotal
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShippingOptions));