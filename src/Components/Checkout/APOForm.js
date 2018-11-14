import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postShippingInformation, createRefId, setTaxRate } from '../../Redux/reducer';
import axios from 'axios';

import './ShippingForm.scss'


class APOForm extends Component {
    constructor() {
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

    handleChange = (event) => {
        console.log('event: ', event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render() {
        let {taxRate, phone, firstName, lastName, address1, address2, city, chosenState, zipCode, email, phoneNumber} = this.state;
        let { postShippingInformation, user, shippingInfo, refId } = this.props;

        return (
            <div className="shippingFormWrapper">
                <div id="shippingForm">
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
                    
                <div className="smallTags">    
                    <small>For Army, Navy, and Marines, enter your unit # and box #</small>
                    <small>For ships, enter the ship name and hull #</small>
                    <small>For Air Force, enter the PSC # and box #</small>
                </div>


                <div className="addressOneBox optionalBox">
                    <input id="shippingInput" className="addressOne lightGreyFont" required onChange={this.handleChange} placeholder="Optional" name='address2' value={address2}></input>
                    <small>Enter the military command or organization name if applicable</small>
                </div>




                <div className="cityStatePostalWrapper">
                    <select id="marginCancel" className="stateSelector cityStatePostalInput" onChange={this.handleChange} value={city} name="city" required>
                        <option>Select APO/FPO</option>
                        <option value="APO">Army Post Office</option>
                        <option value="FPO">Fleet Post Office</option>
                    </select>
                    
                    <select className="stateSelector cityStatePostalInput" onChange={this.handleChange} value={chosenState} name="chosenState" required>
                        <option>Select Region</option>
                        <option value='AA'>Armed Forces Americas</option>
                        <option value='AE'>Armed Forces Europe</option>
                        <option value='AP'>Armed Forces Pacific</option>
                    </select>

                    <input id="shippingInput" className="cityStatePostalInput" onChange={this.handleChange} value={zipCode} name="zipCode" placeholder="Postal Code" type="text" required></input>
                </div>

                <div className="emailPhoneWrapper">
                    <input id="shippingInput" className="ShippingName" required onChange={this.handleChange} type='email' name='email' placeholder="Email" value={email}></input>
                    <input id="shippingInput" className="lastname ShippingName" required onChange={this.handleChange} type='tel' name='phone' placeholder="Phone" value={phone}></input>
                </div>
                <div className="bufferDiv"></div>
                <div className="footerButtonWrapper"><Link to={{pathname:'/shippingoptions', state:{taxRate}}}><button type='submit' onClick={() => this.sendShippingInformation(  firstName, lastName, (user ? user.id : null), address1, address2, city, chosenState, zipCode , email, phone )}>SAVE & CONTINUE</button></Link></div>

            </div>
            </div>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(APOForm)