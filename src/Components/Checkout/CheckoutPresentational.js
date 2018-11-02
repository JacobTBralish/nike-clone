import React, { Component } from 'react';

import CartCheckoutView from '../Cart/CartCheckoutView';
import ShippingForm from './ShippingForm';
import APOForm from './APOForm';
import BillingForm from './BillingForm';
import ShippingOptions from './ShippingOptions';

import './../Cart/CartCheckoutView.scss'


class CheckoutPresentational extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedOption: '0',
            toggleValue: false,
         }
    }

     
    handleOptionChange =  (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      }


    render() { 
        let { selectedOption } = this.state;
        return ( 
            <div className="checkoutParentWrapper">
                <div className="topLinks">
                    <a id="und">Live Chat</a>
                    <p>1-800-806-6453</p>
                </div>

                    <h1>CHECKOUT</h1>
                <div className="checkoutChildWrapper">

                    <div className="cartCheckoutParent">
                    <CartCheckoutView />
                    </div>
                    <div  className="shippingAndApoWrapper">                        
                        <h1>1. SHIPPING</h1>
                        <div className="shippingInnerWrapper">
                        
                        <span id="radioText"><input className="shipRadio" checked={selectedOption === '0'} onChange={this.handleOptionChange} value='0' name="Home/Office" type="radio" required></input>Home/Office</span>
                        <span id="radioText" className="moveOutTheWay"><input className="shipRadio" checked={selectedOption === '1'} onChange={this.handleOptionChange} value='1' name="APO/FPO" type="radio" required></input>APO/FPO</span>
                        <div className="shippingPadding">
                            { selectedOption === '0' ?
                            <>
                                <ShippingForm />
                            </>
                            :
                            <>
                                <APOForm /> 
                            </>       
                            } 
                            </div>
                        </div>
                            
                    </div>
                </div>
                
            {/* <ShippingOptions /> */}
            </div>
         );
    }
}
 
export default CheckoutPresentational;