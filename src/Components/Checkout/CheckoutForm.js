import React, { Component } from 'react';

import CartCheckoutView from '../Cart/CartCheckoutView';
import ShippingForm from './ShippingForm';
import APOForm from './APOForm';



class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '0',
         }
    }


    render() { 
    
        let { selectedOption } = this.state;
        return (
        <div>

            <div>

            </div>
            </div>
         );
    }
}

 
export default CheckoutForm;