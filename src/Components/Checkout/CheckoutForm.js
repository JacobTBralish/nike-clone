import React, { Component } from 'react';

import Cart from '../Cart/Cart';
import ShippingForm from './ShippingForm';
import APOForm from './APOForm';



class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '0',
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
                <Cart />
            </div>
            <span>
                <input checked={selectedOption === '0'} onChange={this.handleOptionChange} value='0' name="firstName" type="radio" required></input>{'Home/Office'}
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
            <div>

            </div>
            </div>
         );
    }
}

 
export default CheckoutForm;