import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postBillingInformation } from '../../Redux/reducer';

import CartCheckoutView from '../Cart/CartCheckoutView';

class BillingForm extends Component {
    constructor(){
        super();
        this.state = {
            taxRate: 0,
            firstName: '',
            lastName: '',
            address1: '',
            address2: null,
            city: '',
            chosenState: '',
            zipCode: '',
            country: '',
            toggleValue: false
        }
    }

    handleStateChange = (event) => {
        this.setState({
            chosenState: event.target.value
        })
    }

    handleChange = (event) => {
        console.log('event: ', event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleToggle = () => {
        this.setState((prevState) =>{
            console.log('prevState: ', prevState);
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }


    render() {
        let { taxRate, firstName, lastName, address1, address2, city, chosenState, zipCode, toggleValue, country } = this.state;
        console.log(firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode);
        let { postBillingInformation, user, shippingInfo, refId } = this.props;
        console.log('refId: ', refId);
        console.log('shippingInfo: ', shippingInfo);




        console.log('shippingInfo: ', shippingInfo);
        return (
        <div>
            <div>
                <h3>Shipping Address</h3>
                <div>
                    <CartCheckoutView />
                </div>
            </div>
            
            <div>
                <button onClick={this.handleToggle} type='checkBox'></button>Billing address same as shipping
            </div>

            {toggleValue
            ?
            <div>
            <div>
                <p>{shippingInfo[0].first_name}
                {shippingInfo[0].last_name}</p>
            </div>
            <div>
                <p>
                {shippingInfo[0].address1} {shippingInfo[0].address2 || null} {shippingInfo[0].zip_code}
                </p>
            </div>
            <div>
                <p>{shippingInfo[0].city} {shippingInfo[0].state}</p>
            </div>
            <div><Link to={{pathname:'/shippingoptions', state:{taxRate}}}><button type='submit' onClick={() => postBillingInformation(refId, shippingInfo[0].first_name, shippingInfo[0].last_name, (user ? user.id : null), shippingInfo[0].address1, (shippingInfo[0].address2 || null), shippingInfo[0].city, shippingInfo[0].state, shippingInfo[0].zip_code )}>SAVE & CONTINUE</button></Link></div>
            </div>
            :
            <form>
                <div>
                    <input required placeholder='First Name' onChange={this.handleChange} name='firstName' value={firstName}></input>
                    <label htmlFor='firstName'>first Name</label>
                    <input required placeholder='Last Name' onChange={this.handleChange} name='lastName' value={lastName}></input>
                    <label htmlFor='lastName'>Last Name</label>
                </div>

                <div>
                    <input required placeholder='Address' onChange={this.handleChange} name='address1' value={address1}></input>
                    <label htmlFor='address1'>Street Address</label>
                </div>
                
                <div>
                    <input required placeholder='Optional - Company, C/O, Apt, Suite, Unit' onChange={this.handleChange} name='address2' value={address2}></input>
                    <label htmlFor='address2' />
                </div>
                    <div>
                        <input required placeholder='City' onChange={this.handleChange} name='city' value={city}></input>
                        <label htmlFor='city'>City</label>
                        <div>
                    <select name={chosenState} onChange={this.handleStateChange}>
                        <option>State</option>
                        <option value='Alabama'>Alabama</option>
                        <option value='Alaska'>Alaska</option>
                        <option value='Arizona'>Arizona</option>
                        <option value='Arkansas'>Arkansas</option>
                        <option value='California'>California</option>
                        <option value='Colorado'>Colorado</option>
                        <option value='Connecticut'>Connecticut</option>
                        <option value='Delaware'>Delaware</option>
                        <option value='Florida'>Florida</option>
                        <option value='Georgia'>Georgia</option>
                        <option value='Hawaii'>Hawaii</option>
                        <option value='Idaho'>Idaho</option>
                        <option value='Illinois'>Illinois</option>
                        <option value='Indiana'>Indiana</option>
                        <option value='Iowa'>Iowa</option>
                        <option value='Kansas'>Kansas</option>
                        <option value='Kentucky'>Kentucky</option>
                        <option value='Louisiana'>Louisiana</option>
                        <option value='Maine'>Maine</option>
                        <option value='Maryland'>Maryland</option>
                        <option value='Massachusetts'>Massachusetts</option>
                        <option value='Michigan'>Michigan</option>
                        <option value='Minnesota'>Minnesota</option>
                        <option value='Mississippi'>Mississippi</option>
                        <option value='Missouri'>Missouri</option>
                        <option value='Montana'>Montana</option>
                        <option value='Nebraska'>Nebraska</option>
                        <option value='Nevada'>Nevada</option>
                        <option value='New Hampshire'>New Hampshire</option>
                        <option value='New Jersey'>New Jersey</option>
                        <option value='New Mexico'>New Mexico</option>
                        <option value='New York'>New York</option>
                        <option value='North Carolina'>North Carolina</option>
                        <option value='North Dakota'>North Dakota</option>
                        <option value='Ohio'>Ohio</option>
                        <option value='Oklahoma'>Oklahoma</option>
                        <option value='Oregon'>Oregon</option>
                        <option value='Pennsylvania'>Pennsylvania</option>
                        <option value='Rhode Island'>Rhode Island</option>
                        <option value='South Carolina'>South Carolina</option>
                        <option value='South Dakota'>South Dakota</option>
                        <option value='Tennessee'>Tennessee</option>
                        <option value='Texas'>Texas</option>
                        <option value='Utah'>Utah</option>
                        <option value='Vermont'>Vermont</option>
                        <option value='Virginia'>Virginia</option>
                        <option value='Washington'>Washington</option>
                        <option value='West Virginia'>West Virginia</option>
                        <option value='Wisconsin'>Wisconsin</option>
                        <option value='Wyoming'>Wyoming</option>
                        <option value='D.C.'>D.C.</option>
                    </select>
                </div>
                    <input required placeholder='Postal Code' onChange={this.handleChange} pattern="[0-9]{5}" type='text' max={5} name='zipCode' value={zipCode}></input>
                    <label htmlFor='zipCode'>Postal Code</label>

                    <input required placeholder='Country' onChange={this.handleChange} type='text' name='country' value={country}></input>
                    <label htmlFor='Country'>Country</label>
                </div>

                <div><Link to={{pathname:'/shippingoptions', state:{taxRate}}}><button type='submit' onClick={() => postBillingInformation(refId, firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode )}>SAVE & CONTINUE</button></Link></div>
            </form>
            }
            
                
        </div>
        );
    }
}
const mapStateToProps = state => { 
    return {
        shippingInfo: state.shippingInfo,
        billingInfo: state.billingInfo,
        user: state.user,
        refId: state.refId
    }
 };

 const mapDispatchToProps = { 
    postBillingInformation
  };

export default connect(mapStateToProps,mapDispatchToProps)(BillingForm)