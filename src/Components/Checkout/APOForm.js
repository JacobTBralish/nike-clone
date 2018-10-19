import React, { Component } from 'react'

export default class ApoForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            chosenState: '',
            zipCode: 0,
            email: '',
            phoneNumber: '',
        }
    }

    handleChange = (event) => {
        console.log('event: ', event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render() {
        let {firstName, lastName, address1, address2, city, chosenState, zipCode, email, phoneNumber} = this.state;
        return (
            <div>
                <div>

                    <label htmlFor="firstName">First Name</label>
                    <span>Please enter your first name.</span>

                    <input onChange={this.handleChange} value={lastName} name="lastName" type="text" required></input>
                    <label htmlFor="lastName">Last Name</label>
                    <span>Please enter your last name.</span>
                </div>

                <div>
                    <input onChange={this.handleChange} value={address1} name="address1" type="text" required></input>
                    <label htmlFor="address1">Address</label>
                    <span>Please enter a valid address.</span>

                    <small>For Army, Navy, and Marines, enter your unit # and box #</small>
                    <small>For ships, enter the ship name and hull #</small>
                    <small>For Air Force, enter the PSC # and box #</small>
                </div>

                <div>
                    <input onChange={this.handleChange} value={address2} name="address2" type="text"></input>
                    <label htmlFor="address2">Optional</label>
                    <small>Enter the military command or organization name if applicable</small>
                </div>

                <div>
                    <select onChange={this.handleChange} value={city} name="city" required>
                        <option>Select APO/FPO</option>
                        <option value="APO">Army Post Office</option>
                        <option value="FPO">Fleet Post Office</option>
                    </select>
                    <span>This field is required.</span>
                    
                    <select onChange={this.handleChange} value={chosenState} name="chosenState" required>
                        <option>Select Region</option>
                        <option value='AA'>Armed Forces Americas</option>
                        <option value='AE'>Armed Forces Europe</option>
                        <option value='AP'>Armed Forces Pacific</option>
                    </select>
                    <span>This field is required.</span>

                    <input onChange={this.handleChange} value={zipCode} name="zipCode" type="text" required></input>
                    <label htmlFor="zipCode">Postal Code</label>
                    <span>Please enter your postal code.</span>
                </div>

                 <div>
                    <input onChange={this.handleChange} value={email} name='email' type="text" required></input>
                    <p>Please enter a valid email address.</p>
                    <input onChange={this.handleChange} value={phoneNumber} name='phoneNumber' type="text" required></input>
                    <p>This field is required.</p>
                </div>
                <div>
                <p>SHIPPING SPEED</p>
                <p>Military Ground: FREE</p>
                <p>Arrives 30-45 Days</p>
                </div>


            </div>
        )
    }
}