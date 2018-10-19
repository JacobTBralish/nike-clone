import React, { Component } from 'react';

import ShippingForm from './ShippingForm';
// import APOForm from './APOForm';



class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleValue: false,
         }
    }

    render() { 
        return (
        <div>
                {/* {home ? */}
                <ShippingForm />
            {/*          :
                     <APOForm />
            } */}
                
            {/* <div>
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
            </div> */}

            
            <div>
                    {/* <button onClick={this.submit}>PLACE ORDER</button> */}

            </div>
            </div>
         );
    }
}

 
export default CheckoutForm;