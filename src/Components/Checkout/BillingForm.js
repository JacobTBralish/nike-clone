import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postBillingInformation } from '../../Redux/reducer';

import CartCheckoutView from '../Cart/CartCheckoutView';
import './fixfix.scss'
import './../Cart/CartCheckoutView'
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
            email: 'austindwc159@gmail.com',
            phone: '2088184693',
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
        let { taxRate, firstName, lastName, address1, address2, city, chosenState, zipCode, email, phone, toggleValue, country } = this.state;
        console.log(firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode);
        let { postBillingInformation, user, shippingInfo, refId } = this.props;
        console.log('refId: ', refId);
        console.log('shippingInfo: ', shippingInfo);




        console.log('shippingInfo: ', shippingInfo);
        return (
        <div className='shippingAndApoWrapper'>
            <h1>2. PAYMENT</h1>
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
            <div className="shippingFormWrapper">
            <form id="shippingForm" >
                <div className="namesWrapper">
                    <input id="shippingInput" className="ShippingName" required onChange={this.handleChange} name='firstName' placeholder="First Name" value={firstName}></input>
                    <input id="shippingInput" className="ShippingName lastname" required onChange={this.handleChange} name='lastName' placeholder="Last Name" value={lastName}></input>
                </div>

                <div className="addressOneBox">
                    <input id="shippingInput" className="addressOne" required onChange={this.handleChange} name='address1' placeholder="Street Address" value={address1}></input>
                </div>
                
                <div className="cityStatePostalWrapper">
                    <input id="shippingInput" className="cityStatePostalInput" required onChange={this.handleChange} name='city' placeholder="City" value={city}></input>
                <select className="stateSelector cityStatePostalInput" required value={JSON.stringify({stateName: chosenState, rate: taxRate})} onChange={this.handleShipping}>
                    <option value>State</option>
                    <option value='{"stateName":"Alabama","rate":"0.04"}'>Alabama</option>
                    <option value='{"stateName":"Alaska","rate":"0"}'>Alaska</option>
                    <option value='{"stateName":"Arizona","rate":"0.056"}'>Arizona</option>
                    <option value='{"stateName":"Arkansas","rate":"0.065"}'>Arkansas</option>
                    <option value='{"stateName":"California","rate":"0.075"}'>California</option>
                    <option value='{"stateName":"Colorado","rate":"0.029"}'>Colorado</option>
                    <option value='{"stateName":"Connecticut","rate":"0.0635"}'>Connecticut</option>
                    <option value='{"stateName":"Delaware","rate":"0"}'>Delaware</option>
                    <option value='{"stateName":"Florida","rate":"0.06"}'>Florida</option>
                    <option value='{"stateName":"Georgia","rate":"0.04"}'>Georgia</option>
                    <option value='{"stateName":"Hawaii","rate":"0.04"}'>Hawaii</option>
                    <option value='{"stateName":"Idaho","rate":"0.06"}'>Idaho</option>
                    <option value='{"stateName":"Illinois","rate":"0.0625"}'>Illinois</option>
                    <option value='{"stateName":"Indiana","rate":"0.07"}'>Indiana</option>
                    <option value='{"stateName":"Iowa","rate":"0.06"}'>Iowa</option>
                    <option value='{"stateName":"Kansas","rate":"0.065"}'>Kansas</option>
                    <option value='{"stateName":"Kentucky","rate":"0.06"}'>Kentucky</option>
                    <option value='{"stateName":"Louisiana","rate":"0.04"}'>Louisiana</option>
                    <option value='{"stateName":"Maine","rate":"0.055"}'>Maine</option>
                    <option value='{"stateName":"Maryland","rate":"0.06"}'>Maryland</option>
                    <option value='{"stateName":"Massachusetts","rate":"0.0625"}'>Massachusetts</option>
                    <option value='{"stateName":"Michigan","rate":"0.06"}'>Michigan</option>
                    <option value='{"stateName":"Minnesota","rate":"0.0688"}'>Minnesota</option>
                    <option value='{"stateName":"Mississippi","rate":"0.07"}'>Mississippi</option>
                    <option value='{"stateName":"Missouri","rate":"0.0423"}'>Missouri</option>
                    <option value='{"stateName":"Montana","rate":"0"}'>Montana</option>
                    <option value='{"stateName":"Nebraska","rate":"0.055"}'>Nebraska</option>
                    <option value='{"stateName":"Nevada","rate":"0.0685"}'>Nevada</option>
                    <option value='{"stateName":"New Hampshire","rate":"0"}'>New Hampshire</option>
                    <option value='{"stateName":"New Jersey","rate":"0.07"}'>New Jersey</option>
                    <option value='{"stateName":"New Mexico","rate":"0.0513"}'>New Mexico</option>
                    <option value='{"stateName":"New York","rate":"0.04"}'>New York</option>
                    <option value='{"stateName":"North Carolina","rate":"0.0475"}'>North Carolina</option>
                    <option value='{"stateName":"North Dakota","rate":"0.05"}'>North Dakota</option>
                    <option value='{"stateName":"Ohio","rate":"0.0575"}'>Ohio</option>
                    <option value='{"stateName":"Oklahoma","rate":"0.045"}'>Oklahoma</option>
                    <option value='{"stateName":"Oregon","rate":"0"}'>Oregon</option>
                    <option value='{"stateName":"Pennsylvania","rate":"0.06"}'>Pennsylvania</option>
                    <option value='{"stateName":"Rhode Island","rate":"0.07"}'>Rhode Island</option>
                    <option value='{"stateName":"South Carolina","rate":"0.06"}'>South Carolina</option>
                    <option value='{"stateName":"South Dakota","rate":"0.04"}'>South Dakota</option>
                    <option value='{"stateName":"Tennessee","rate":"0.07"}'>Tennessee</option>
                    <option value='{"stateName":"Texas","rate":"0.0625"}'>Texas</option>
                    <option value='{"stateName":"Utah","rate":"0.0595"}'>Utah</option>
                    <option value='{"stateName":"Vermont","rate":"0.06"}'>Vermont</option>
                    <option value='{"stateName":"Virginia","rate":"0.053"}'>Virginia</option>
                    <option value='{"stateName":"Washington","rate":"0.065"}'>Washington</option>
                    <option value='{"stateName":"West Virginia","rate":"0.06"}'>West Virginia</option>
                    <option value='{"stateName":"Wisconsin","rate":"0.05"}'>Wisconsin</option>
                    <option value='{"stateName":"Wyoming","rate":"0.04"}'>Wyoming</option>
                    <option value='{"stateName":"D.C.","rate":"0.0575"}'>D.C.</option>
                </select>
                <input id="shippingInput" className="cityStatePostalInput" required onChange={this.handleChange} pattern="[0-9]{5}" type='text' max={5} name='zipCode' placeholder="Postal Code" value={zipCode}></input>
                </div>

                <div className="emailPhoneWrapper">
                    <input id="shippingInput" className="ShippingName" required onChange={this.handleChange} type='email' name='email' placeholder="Email" value={email}></input>
                    <input id="shippingInput" className="lastname ShippingName" required onChange={this.handleChange} type='tel' name='phone' placeholder="Phone" value={phone}></input>
                </div>
                <div className="bottomText"><p><i className="fas fa-lock"></i> Your privacy is important to us. We will only contact you if there is an issue with your order.</p></div>
                <div className="footerButtonWrapper">
                <Link to={{pathname:'/shippingoptions'}}>
                <button type='submit' onClick={() => { this.props.setTaxRate(taxRate)
                this.sendShippingInformation(  firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode , email, phone )
                }}>SAVE & CONTINUE</button></Link>


                {/* { this.props.location.pathname === '/checkout' ?
                <>
                <Link to={{pathname:'/shippingoptions'}}>
                <button type='submit' onClick={() => this.sendShippingInformation(  firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode , email, phone )}>SAVE & CONTINUE</button></Link>
                </>
                :
                <>
                <a><button type='submit' onClick={() => {this.sendShippingInformation(  firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode , email, phone )
                this.props.toggleEdit(this.state.parentToggle)}}>SAVE & CONTINUE</button></a>
                </>
                } */}
                </div>
            </form> 
            </div>
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