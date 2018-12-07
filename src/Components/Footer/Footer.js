import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer-size">


            <div className='footerContainer'> {/* Wrapper */}
                
                <div className='linkContainer'> {/* Body */}
                    <ul> {/* GIFT CARD LIST */}
                        <li><Link className='linkTitle' to="/">GIFT CARDS</Link></li> {/* opt */}
                        <li><Link className='linkTitle' to="/">STUDENT DISCOUNT</Link></li>
                        <li><Link className='linkTitle' to="/">MILITIARY DISCOUNT</Link></li>
                        <li><Link className='linkTitle' to="/storelocator">FIND A STORE</Link></li>
                        <li><Link className='linkTitle' to="/">SIGN UP FOR EMAIL</Link></li> {/* opt */}
                    </ul>
                    <ul> {/* GET HELP LIST */}
                        <li><Link className='linkTitle' to="/">GET HELP</Link></li>
                        <li><Link className='link' to="/">Order Status</Link></li>
                        <li><Link className='link' to="/">Shipping and Delivery</Link></li>
                        <li><Link className='link' to="/">Returns</Link></li>
                        <li><Link className='link' to="/">Payment Options</Link></li>
                        <li><Link className='link' to="/">Contact Us</Link></li>
                    </ul>
                    <ul> {/* ABOUT NIKE */}
                        <li><Link className='linkTitle' to="/">ABOUT NIKE</Link></li> {/* BUILD IF TIME http://about.nike.com */}
                        <li><Link className='link' to="http://news.nike.com">News</Link></li>
                        <li><Link className='link' to="https://jobs.nike.com">Careers</Link></li>
                        <li><Link className='link' to="https://jobs.converse.com">Converse Culture & Careers</Link></li>
                        <li><Link className='link' to="http://investors.nike.com">Investors</Link></li>
                        <li><Link className='link' to="/">Sustainable Innovation</Link></li> {/* BUILD IF TIME https://www.nike.com/us/en_us/c/sustinability */}
                        <li><Link className='link' to="/">CA Supply Chains Act</Link></li> {/* BUILD IF TIME https://www.nike.com/help/a/supply-chain */}
                    </ul>
                    {/* SOCIAL LINKS NEED ICONS*/}
                    <ul>
                        <li /* className='socialList' */>
                            <span><Link className='socialLink' to="https://twitter.com/Nike"><i className="fab fa-twitter"></i></Link></span>
                            <span><Link className='socialLink' to="https://www.facebook.com/nike"><i className="fab fa-facebook-f"></i></Link></span>
                            <span><Link className='socialLink' to="https://www.youtube.com/user/nike"><i className="fab fa-youtube"></i></Link></span>
                            <span><Link className='socialLink' to="http://instagram.com/nike"><i className="fab fa-instagram"></i></Link></span>
                        </li>
                    </ul>
                </div>

                <div className='bottomLinks'> {/* Bottom */}
                    <ul id="ftshi">
                        <img src="https://content.nike.com/content/dam/nike/global/country_flags/us_sml.png" alt="United States" width="14" height="10" />
                        <li> <span id="workwork">United States</span> ©&nbsp;2018&nbsp;Nike, Inc. All Rights Reserved</li>
                    </ul>
                        <div id="lame">
                       
                            <span><Link  to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect">Nike Privacy Policy</Link></span>
                            <span><Link  to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect">Terms of Use</Link></span>
                            <span><a>Guides</a></span> {/* opt */}
                        </div>
              

                </div>

            </div>


        </div>
        )
    }
}