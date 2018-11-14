import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import { setTotal } from '../../Redux/reducer';
import axios from 'axios';

import CartCheckoutView from '../Cart/CartCheckoutView'
import BillingForm from './BillingForm';
import ShippingForm from './ShippingForm';
import APOForm from './APOForm'
import './../Cart/CartCheckoutView.scss'
var moment = require('moment-business-days');

const fromDollarToCent = amount => amount * 100;


class ShippingOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleValue: true,
            shippingCost: 0,
            orderId: '',
            chosenState: '',
            SameShippingAsBilling: false,
            home: false,
            selectedOption: '0',
            shippingOption: '0'
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
        // console.log('data: ', data.data);
        let id = data.data.stripeSuccess.id.split('')
        // console.log('id: ', id);
        id.splice(0, 3)
        let trackingNumber = this.makeId()
        console.log('id: ', id);
        this.setState({orderId: id.join('')})
        console.log(this.props.total, 'this is this.props.shit');
        let userId = (this.props.user ? this.props.user.id : null)
        let bodyCart = this.props.cart[0]
        console.log('this.props.cart: ', this.props.cart[0]);
        axios.post('/api/email', { trackingNumber: trackingNumber ,email: this.props.user.email, name: this.props.user.name, date: today, total: this.props.total, number: this.state.orderId, address: this.props.shippingInfo })
        axios.post('/api/order', { userId: userId , tracking_number: trackingNumber, date: today, cart_total: this.props.total, cart: bodyCart })
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
    handleShippingChange =  (changeEvent) => {
        this.setState({
            shippingOption: changeEvent.target.value,
            shippingCost: changeEvent.target.value
        });
      }
      toggleEdit = () => {
        this.setState((prevState) =>{
        //  console.log('prevstate', prevState)
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }
    //  nth = (d) => {
    //     if(d>3 && d<21) return 'th'; // thanks kennebec
    //     switch (d % 10) {
    //           case 1:  return "st";
    //           case 2:  return "nd";
    //           case 3:  return "rd";
    //           default: return "th";
    //       }
    //   } 

    render() {
        
        let {  total, user, shippingInfo, billingInfo } = this.props;
        // console.log('shippingInfo: ', shippingInfo);
        // console.log('total: ', total);
        let { SameShippingAsBilling, selectedOption, shippingOption, chosenState/* , home */ } = this.state;
        let { taxRate } = this.props;
        // console.log('this.props.location.state: ', this.props.location.state);
        // console.log('taxRate: ', taxRate);

        // let { firstName, lastName, streetAddress, city, chosenState, zipCode, email, phoneNumber } = props;
       
    const today = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let next = moment(today).businessAdd(2)._d
    next = `${months[next.getMonth()]} ${next.getDate()}`;

    let two = moment(today).businessAdd(3)._d
    two = `${months[two.getMonth()]} ${two.getDate()}`;

    let standard = moment(today).businessAdd(4)._d
    standard = `${months[standard.getMonth()]} ${standard.getDate()}`;

        // console.log(this.state.shippingCost)
        return (
            <div className="checkoutParentWrapper">
                <div className="topLinks">
                    <a id="und">Live Chat</a>
                    <p>1-800-806-6453</p>
                </div>

                 <h1>CHECKOUT</h1>
                <div className="checkoutChildWrapper">

                    <div className="cartCheckoutParent">
                    <CartCheckoutView shippingCost={this.state.shippingCost}/>
                    </div>
                    <div  className="shippingAndApoWrapper">                        
                        <h1>1. SHIPPING</h1>
                        <div className="shippingInnerWrapper ">
                        
                        <span id="radioText"><input className="shipRadio" checked={selectedOption === '0'} onChange={this.handleOptionChange} value='0' name="Home/Office" type="radio" required></input>Home/Office</span>
                        <span id="radioText" className="moveOutTheWay buffer"><input className="shipRadio" checked={selectedOption === '1'} onChange={this.handleOptionChange} value='1' name="APO/FPO" type="radio" required></input>APO/FPO</span>
                        <div className="buffer"></div>
                        { selectedOption === '0' ?
                        <>
                            {shippingInfo.length >= 1 &&
                                <div className="displayOuterWrapper">    
                                    { this.state.toggleValue ? 
                                        <div id="displayInputShipping">
                                            <div>
                                                 <div>
                                                    <span>{shippingInfo[0].first_name} </span>
                                                    <span>{shippingInfo[0].last_name}</span>
                                                </div>
                                                <div>
                                                    <p>{shippingInfo[0].address1} {shippingInfo[0].address2 ? shippingInfo[0].address2 : null}</p>
                                                </div>
                                                <div>
                                                    <span>{shippingInfo[0].city}, </span><span>{shippingInfo[0].state}</span><span> {shippingInfo[0].zip_code}</span>
                                                </div>
                                                <div>
                                                    <p>{shippingInfo[0].email}</p>
                                                </div>
                                                <div>
                                                    <p>{ "(" + shippingInfo[0].phone.substring(0, 3) + ") " + shippingInfo[0].phone.substring(3, 6) + "-" + shippingInfo[0].phone.substring(6, 10)}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="editUnderLine" onClick={() => this.toggleEdit()}>Edit</span>
                                            </div>
                                        </div>
                                        :
                                        <>
                                        <ShippingForm toggleEdit={this.toggleEdit}/>
                                        <span id="cancelToggle" className="editUnderLine" onClick={() => this.toggleEdit()}>Cancel</span>
                                        </>
                                    }
                                </div>
                            }
                            </>
                            :
                            <div className="buffer">
                                <APOForm /> 
                            </div>       
                            } 
                                
                                
                            <div className="selectShippingSpeedWrapper">
                                <h3>SELECT YOUR SHIPPING SPEED</h3>
                                {/* <button id="shippingMethodTooltip">PLACEHOLDERRRRRRRR</button> */}
                                {/* <p>Shipping estimates takes into account weekends and holidays. <a>See Details</a>
                                Next day delivery is not available in remote locations.
                                </p> */}
                                <div className="shipSpeedBorder">
                                    <div className="shippingFlex">
                                        <div><input checked={this.state.shippingOption === '0'} onChange={this.handleShippingChange} type="radio" id="STANDARD" value="0"></input>
                                            <label htmlFor="STANDARD">
                                            <span>Standard (Get it by {standard})</span>
                                            </label>
                                        </div>
                                        <span>FREE</span>
                                    </div>
                                    <div className="shippingFlex shipBorderMid">
                                        <div>
                                            <input checked={this.state.shippingOption === '5'} onChange={this.handleShippingChange} type="radio"  id="TWO_DAY" value="5"></input>
                                            <label htmlFor="TWO_DAY">
                                                <span>Two Day (Get it by {two})</span>
                                            </label>
                                        </div>
                                        <span>$5.00</span>
                                    </div>
                                    <div className="shippingFlex">
                                        <div>
                                            <input checked={this.state.shippingOption === '15'} onChange={this.handleShippingChange} type="radio"  id="NEXT_DAY" value="15"></input>
                                            <label htmlFor="NEXT_DAY">
                                                <span>Next Day (Get it by {next})</span>
                                            </label>
                                        </div>
                                        <span>$15.00</span>
                                    </div>
                                </div>
                                <div className="shipSpeedText">
                                    <p>Orders placed after 5PM EST (2PM PST) begin processing the next business day.</p>
                                    <p>Please note that Nike.com does not deliver on Sundays or holidays.</p>
                                </div>
                                <div className="shipOptionsFooter">                                    
                                    <button type='submit'>CONTINUE TO PAYMENT</button>
                                </div>
                            </div>
                            
                     </div>
                </div>

            



                {/* <div><BillingForm /></div> */}
                {/* <StripeCheckout 
                    name='Nike'
                    description='Just do it'
                    amount={(fromDollarToCent(total * (1+parseFloat(taxRate)) + parseInt(this.state.selectedOption))).toFixed(2)}
                    image={'http://content.nike.com/content/dam/one-nike/globalAssets/social_media_images/nike_swoosh_logo_black.png'}
                    panelLabel='Pay'
                    currency='USD'
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
                    email={user.email ? user.email : null}
                    token={this.onToken(total * (1+parseFloat(taxRate)) + parseInt(this.state.selectedOption))}
                /> */}
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state: ', state);
    return {
        user: state.user,
        cart: state.cart,
        total: state.total,
        shippingInfo: state.shippingInfo,
        billingInfo: state.billingInfo,
        taxRate: state.billingInfo
        
    }
}
 

const mapDispatchToProps =  {
    // setTotal
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShippingOptions));