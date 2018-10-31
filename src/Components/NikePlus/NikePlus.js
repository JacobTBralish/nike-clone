import React, { Component } from 'react'
import './NikePlus.scss'
import { Link } from 'react-router-dom'

export default class NikePlus extends Component {
    render() {
        return (
            <div className="nike_plus_body_wrapper">
                <div>
                    <video loop="true" muted="" id="1535600179485" src="https://www.nike.com/VO/XX_XX/e/content/dam/en_us/member-hub/august18_update/Nike_NEW-CUT_All-Sports_v06.mp4" data-embed="default" class="video-js video-asset"  autoplay="true">
                    </video>
                        <div className="overlay_div">
                            <p className="boldyBold">NikePlus</p>
                            <p className="boldyBold">Membership</p>
                            <p className="noBoldyBold">Everything you</p>
                            <p className="noBoldyBold">need to win.</p>
                            <Link to="/">JOIN NIKEPLUS</Link>
                        </div>
                <div className="greyBigBox">
                    <p>JOIN THE GREATEST TEAM IN SPORTS.</p>
                    <p>ACCESS THE EXCLUSIVE PRODUCTS, MOTIVATION AND PERSONAL REWARDS TO KEEP UPPING YOUR GAME.</p>
                    <div className="outerCont">
                        <div className="innerCont">
                            <div className="veryInner">
                                <div></div>
                                <div className="pBold">Member Exclusive Products</div>
                                <div className="pNah">Early access to our latest drops, exclusives just for you and your favorite products reserved in your size.</div>
                            </div>
                            <div className="veryInner">
                                <div></div>
                                <div className="pBold">Expert Guidance & Advice</div>
                                <div className="pNah">Your Nike Experts are real athletes with real answers. Chat with them to get recommendations on training and products you can trust.</div>
                            </div>
                        </div>
                        <div className="innerCont">
                            <div className="veryInner">
                                <div></div>
                                <div className="pBold">Access to Sport, Anytime, Anywhere</div>
                                <div className="pNah">100+ on-the-go workouts, weekly challenges and personalized training plans that adapt to your goals and schedule.</div>
                            </div>
                            <div className="veryInner">
                                <div></div>
                                <div className="pBold">Inspiring Experiences</div>
                                <div className="pNah">From courtside to race day, get priority access to the events and sessions you don’t want to miss.</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="greyBigBox">

                </div> */}
            </div>
        )
    }
}
