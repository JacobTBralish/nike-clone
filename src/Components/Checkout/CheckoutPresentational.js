import React, { Component } from 'react';

import CartCheckoutView from '../Cart/CartCheckoutView';
import ShippingForm from './ShippingForm';
import APOForm from './APOForm';
import BillingForm from './BillingForm';
import ShippingOptions from './ShippingOptions';



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
            <div>
                <div>
                <CartCheckoutView />
                </div>
                <span>
                    <input checked={selectedOption === '0'} onChange={this.handleOptionChange} value='0' name="Home/Office" type="radio" required></input>{'Home/Office'}
                    <input checked={selectedOption === '1'} onChange={this.handleOptionChange} value='1' name="APO/FPO" type="radio" required></input>{'APO/FPO'}
                 </span>
                { selectedOption === '0' ?
                <div>
                    <ShippingForm />
                </div>
                :
                <div>
                    <APOForm /> 
                </div>       
            } 

            {/* <ShippingOptions /> */}
            </div>
         );
    }
}
 
export default CheckoutPresentational;