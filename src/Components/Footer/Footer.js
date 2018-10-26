import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
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
                        <Link className='linkTitle' to="/"><li>ABOUT NIKE</li></Link> {/* BUILD IF TIME http://about.nike.com */}
                        <Link className='link' to="http://news.nike.com"><li>News</li></Link>
                        <Link className='link' to="https://jobs.nike.com"><li>Careers</li></Link>
                        <Link className='link' to="https://jobs.converse.com"><li>Converse Culture & Careers</li></Link>
                        <Link className='link' to="http://investors.nike.com"><li>Investors</li></Link>
                        <Link className='link' to="/"><li>Sustainable Innovation</li></Link> {/* BUILD IF TIME https://www.nike.com/us/en_us/c/sustinability */}
                        <Link className='link' to="/"><li>CA Supply Chains Act</li></Link> {/* BUILD IF TIME https://www.nike.com/help/a/supply-chain */}
                    </ul>
                    {/* SOCIAL LINKS NEED ICONS*/}
                    <ul>
                        <li /* className='socialList' */>
                            <span><Link className='socialLink' to="https://twitter.com/Nike"><i class="fab fa-twitter"></i></Link></span>
                            <span><Link className='socialLink' to="https://www.facebook.com/nike"><i class="fab fa-facebook-f"></i></Link></span>
                            <span><Link className='socialLink' to="https://www.youtube.com/user/nike"><i class="fab fa-youtube"></i></Link></span>
                            <span><Link className='socialLink' to="http://instagram.com/nike"><i class="fab fa-instagram"></i></Link></span>
                        </li>
                    </ul>
                </div>
                <div className='bottomLinks'> {/* Bottom */}
                    <ul>
                        <li><Link to="https://www.nike.com/language_tunnel"><span><img src="https://content.nike.com/content/dam/nike/global/country_flags/us_sml.png" alt="United States" width="14" height="10" /></span></Link></li>
                        <li>©&nbsp;2018&nbsp;Nike, Inc. All Rights Reserved</li>
                    </ul>
                    <div>
                        <div>Guides</div> {/* opt */}
                        <div>
                            <span><Link className='link' to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect">Terms of Use</Link></span>
                            <span><Link className='link' to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect">Nike Privacy Policy</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}