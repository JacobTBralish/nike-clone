import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Footer extends Component {
    render() {
        return (
            <div> {/* Wrapper */}
                
                <div> {/* Body */}
                    <ul> {/* GIFT CARD LIST */}
                        <li><Link to="/">GIFT CARDS</Link></li> {/* opt */}
                        <li><Link to="/">STUDENT DISCOUNT</Link></li>
                        <li><Link to="/">MILITIARY DISCOUNT</Link></li>
                        <li><Link to="/">FIND A STORE</Link></li>
                        <li><Link to="/">SIGN UP FOR EMAIL</Link></li> {/* opt */}
                    </ul>
                    <ul> {/* GET HELP LIST */}
                        <li><Link to="/">GET HELP</Link></li>
                        <li><Link to="/">Order Status</Link></li>
                        <li><Link to="/">Shipping and Delivery</Link></li>
                        <li><Link to="/">Returns</Link></li>
                        <li><Link to="/">Payment Options</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                    <ul> {/* ABOUT NIKE */}
                        <Link to="/"><li>ABOUT NIKE</li></Link> {/* BUILD IF TIME http://about.nike.com */}
                        <Link to="http://news.nike.com"><li>News</li></Link>
                        <Link to="https://jobs.nike.com"><li>Careers</li></Link>
                        <Link to="https://jobs.converse.com"><li>Converse Culture & Careers</li></Link>
                        <Link to="http://investors.nike.com"><li>Investors</li></Link>
                        <Link to="/"><li>Sustainable Innovation</li></Link> {/* BUILD IF TIME https://www.nike.com/us/en_us/c/sustinability */}
                        <Link to="/"><li>CA Supply Chains Act</li></Link> {/* BUILD IF TIME https://www.nike.com/help/a/supply-chain */}
                    </ul>
                    {/* SOCIAL LINKS NEED ICONS*/}
                    <ul>
                        <li>
                            <span><Link to="https://twitter.com/Nike"><span class="nsg-glyph--twitter">&nbsp;</span></Link></span>
                            <span><Link to="https://www.facebook.com/nike">F<span class="nsg-glyph--facebook">&nbsp;</span></Link></span>
                            <span><Link to="https://www.youtube.com/user/nike"><span class="nsg-glyph--youtube">&nbsp;</span></Link></span>
                            <span><Link to="http://instagram.com/nike"><span class="nsg-glyph--instagram">&nbsp;</span></Link></span>
                        </li>
                    </ul>
                </div>
                <div> {/* Bottom */}
                    <ul>
                        <li><Link to="https://www.nike.com/language_tunnel"><span><img src="https://content.nike.com/content/dam/nike/global/country_flags/us_sml.png" alt="United States" width="14" height="10" /></span></Link></li>
                        <li>©&nbsp;2018&nbsp;Nike, Inc. All Rights Reserved</li>
                    </ul>
                    <div>
                        <div>Guides</div> {/* opt */}
                        <div>
                            <span><Link to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect">Terms of Use</Link></span>
                            <span><Link to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&amp;uxId=com.nike.commerce.nikedotcom.web&amp;country=US&amp;language=en&amp;requestType=redirect">Nike Privacy Policy</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}