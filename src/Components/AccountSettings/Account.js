import React, { Component } from 'react'
import Settings from './Settings'; 
import Social from './Social';
import './nikeAccountSass.scss'


export default class Account extends Component {
    constructor() {
        super(); 
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
            <div className="profile">
                <div className="profile-nav">
                    <h2 className="edf-font-size--xlarge nsg-text--dark-grey">SETTINGS</h2>
                    <ul className="edf-title-font-size--xsmall">
                        <li className="tab basic-info active" data-content=".basic-info-content" data-tab-name="account settings">
                            <input checked={selectedOption === '0'} onChange={this.handleOptionChange} value='0' name="account" type="radio" required></input>{'ACCOUNT'}
                        </li>
                        <li className="tab privacy" data-content=".privacy-content" data-tab-name="privacy settings">
                          <div className="profile-divider"></div>
                          <input checked={selectedOption === '1'} onChange={this.handleOptionChange} value='1' name="privacy" type="radio" required></input>{'PRIVACY'}
                        </li>
                        <li className="tab addresses" data-content=".addresses-content" data-tab-name="manage addresses">
                          <div className="profile-divider"></div>
                          <input checked={selectedOption === '2'} onChange={this.handleOptionChange} value='2' name="addresses" type="radio" required></input>{'ADDRESSES'}
                        </li>
                        <li className="tab payment-options" data-content=".payment-options-content" data-tab-name="payment options">
                          <div className="profile-divider"></div>
                          <input checked={selectedOption === '3'} onChange={this.handleOptionChange} value='3' name="privacy" type="radio" required></input>{'PAYMENT OPTIONS'}
                        </li>
                          <li className="tab sharing" data-content=".sharing-content" data-tab-name="share settings">
                          <div className="profile-divider"></div>
                          <input checked={selectedOption === '4'} onChange={this.handleOptionChange} value='4' name="sharing" type="radio" required></input>{'SHARING'}
                        </li>
                        <li className="tab notifications" data-content=".notifications-content" data-tab-name="communication preferences">
                          <div className="profile-divider"></div>
                          <input checked={selectedOption === '5'} onChange={this.handleOptionChange} value='5' name="notification" type="radio" required></input>{'NOTIFICATION'}
                        </li>
                        <li className="tab connected-apps" data-content=".connected-apps-content" data-tab-name="connected apps settings">
                          <div className="profile-divider"></div>
                          <input checked={selectedOption === '6'} onChange={this.handleOptionChange} value='6' name="connected" type="radio" required></input>{'CONNECTED APPS'}
                        </li>
                    </ul>
                </div>              
                <div className="content">
                    { 

                    selectedOption === '0' 
                    ?
                        <>
                        <Settings />
                        </>
                    :
                    selectedOption ==='1'
                    ?
                        <>
                        <h1>PRIVACY</h1>
                        </>
                    :
                    selectedOption ==='2' 
                    ?
                        <>
                        <h1>ADDRESSES</h1>
                        </>
                    :
                    selectedOption ==='3' 
                    ?
                        <>
                        <h1>PAYMENT OPTIONS</h1>
                        </>
                    :
                    selectedOption ==='4' 
                    ?
                        <div>
                            <h1>SHARE SETTINGS</h1>
                            <div>
                                <p>ICON HERE</p>
                                <h3>Connect your Nike+ account with Facebook</h3>
                                <p>Share your activity with your friends on your Facebook Timeline.</p>
                            </div>
                        </div>
                    :
                    selectedOption ==='5' 
                    ?
                    <div>
                        <h1>NOTIFICATION</h1>
                        <p>To unsubscribe, uncheck the box located to the right of the notification you wish to turn off.</p>
                        <div>
                            <h2>NIKE:</h2>
                            <p>MAIL ICOM</p>
                            <p></p>
                        </div>

                    </div>
                    :
                    selectedOption ==='6' 
                    ?
                    <div>
                        <h1>CONNECTED APPS</h1>
                        <p>Disconnect from Nike+ connected apps that are currently authorized to access your Nike+ account.</p>
                        <div>You don’t have any connected apps.</div>
                    </div> 
                    :
                    <>
                        <Settings />
                    </>
                    } 
                  
                </div>
            </div>
        )
    }
}
