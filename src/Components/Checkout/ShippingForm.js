import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postShippingInformation, createRefId, setTaxRate } from '../../Redux/reducer';
import axios from 'axios';
import './ShippingForm.scss'

class ShippingForm extends Component {
    constructor(){
        super();
        this.state = {
            taxRate: 0,
            refId: '',
            firstName: 'Jacob',
            lastName: 'Bralish',
            address1: '12345 street',
            address2: null,
            city: 'nope',
            chosenState: 'Alabama',
            zipCode: '12345',
            email: 'hopperjtb@aol.com',
            phone: '1234567890',
            toggleValue: false
        }
    }

    // makeId = () => {
    //     var refId = "";
    //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //     for (var i = 0; i < 30; i++)
    //     refId += possible.charAt(Math.floor(Math.random() * possible.length));
    // return refId
    // }
    
    sendShippingInformation=(firstName, lastName, userId, address1, address2, city, chosenState, zipCode ,email ,phone)=>{
        var refId = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 30; i++)
        refId += possible.charAt(Math.floor(Math.random() * possible.length));
        this.setState({refId: refId})
    axios.post('/api/shippingInfo', {refId, firstName, lastName, userId, address1, address2, city, chosenState, zipCode ,email ,phone}).then(response => {
        console.log('response.data: ', response.data);
        console.log('response: ', response.data[0].ref_id);
        this.props.createRefId(response.data[0].ref_id)
        this.props.postShippingInformation(response.data)
  }).catch(error => {
      console.log(error, 'Error in the reducer with post shipping info');
  })
}

    handleShipping = (event) => {
        const value = JSON.parse(event.target.value)
        console.log('value: ', value);
        this.setState({
            taxRate: value.rate,
            chosenState: value.stateName
        })
    }

    handleChange = (event) => {
        console.log('event: ', event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
//  Nike Factory Stores, Nikes Stores, Nike Partner Store, Converse, Hurley
    handleToggle = () => {
        this.setState({
            toggleValue: true
        })
    }
    render() {
        let { taxRate, firstName, lastName, address1, address2, city, chosenState, zipCode, email, phone, toggleValue } = this.state;
        let { postShippingInformation, user, shippingInfo, refId } = this.props;
        console.log('shippingInfo: ', shippingInfo);
        return (
        <div className="shippingFormWrapper">
            <form id="shippingForm" >
                <div className="namesWrapper">
                    {/* <label htmlFor='firstName'>First Name</label> */}
                    <input id="shippingInput" className="ShippingName" required onChange={this.handleChange} name='firstName' placeholder="First Name" value={firstName}></input>
                    {/* <label htmlFor='lastName'>Last Name</label> */}
                    <input id="shippingInput" className="ShippingName lastname" required onChange={this.handleChange} name='lastName' placeholder="Last Name" value={lastName}></input>
                </div>

                <div className="addressOneBox">
                    {/* <label htmlFor='address1'>Street Address</label> */}
                    <input id="shippingInput" className="addressOne" required onChange={this.handleChange} name='address1' placeholder="Street Address" value={address1}></input>
                </div>
                { !toggleValue ?
                    <button id="addressTwoText" style={{background: "none", border: "none", color: 'darkGrey'}} onClick={this.handleToggle}><i class="fas fa-plus"></i> Add Company, C/O, Apt, Suite, Unit</button>
                :
                <div>
                    <label htmlFor='address2' />
                    <input id="shippingInput" className="addressOneBox" required onChange={this.handleChange} name='address2'  value={address2}></input>
                </div>
                }
                <div className="cityStatePostalWrapper">
                    {/* <label htmlFor='city'>City</label> */}
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
                {/* <label htmlFor='zipCode'>Postal Code</label> */}
                </div>

                <div className="emailPhoneWrapper">
                    <input id="shippingInput" className="ShippingName" required onChange={this.handleChange} type='email' name='email' placeholder="Email" value={email}></input>
                    {/* <label htmlFor='email'>Email</label> */}
                    <input id="shippingInput" className="lastname ShippingName" required onChange={this.handleChange} type='tel' name='phone' placeholder="Phone" value={phone}></input>
                    {/* <label htmlFor='phone'>Phone Number</label> */}
                </div>
                <div className="bottomText"><p><i className="fas fa-lock"></i> Your privacy is important to us. We will only contact you if there is an issue with your order.</p></div>
                <div className="footerButtonWrapper"><Link to={{pathname:'/shippingoptions', state:{taxRate}}}><button type='submit' onClick={() => this.sendShippingInformation(  firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode , email, phone )}>SAVE & CONTINUE</button></Link></div>

            </form>    
        </div>
        );
    }
}
const mapStateToProps = state => { 
    return {
        shippingInfo: state.shippingInfo,
        user: state.user,
        refId: state.refId

    }
 };

 const mapDispatchToProps = { 
    postShippingInformation,
    createRefId,
    setTaxRate
  };

export default connect(mapStateToProps,mapDispatchToProps)(ShippingForm)