import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div>
                {/* body wrapper */}
                <div>
                    {/* video wrapper */}
                    {/* <video loop="true" muted src="" autoplay></video> */}
                    <div>
                        {/* vid overlay text */}
                        <div>
                            <h1>NikePlus</h1>
                            <h1>Membership</h1>
                        </div>
                        <div>
                            <h1>Everything you</h1>
                            <h1>needed to win.</h1>
                        </div>
                        <Link to='/'>DOWNLOAD THIE NIKE APP</Link>
                    </div>
                </div>
                <div>
                    <h1>YOU HAVE ACCESS TO THE EXCLUSIVE PRODUCTS, MOTIVATION AND PERSONAL REWARDS TO KEEP UPPING YOUR GAME.</h1>
                    <div>
                    <div> {/* icon */}
                        <h1>Member Exclusive Products</h1>
                        <p>Early access to our latest drops, exclusives just for you and your favorite products reserved in your size.</p>
                    </div>
                    <div> {/* icon */}
                        <h1>Expert Guidance & Advice</h1>
                        <p>Your Nike Experts are real athletes with real answers. Chat with them to get recommendations on training and products you can trust.</p>
                    </div>
                    <div> {/* icon */}
                        <h1>Access to Sport, Anytime, Anywhere</h1>
                        <p>100+ on-the-go workouts, weekly challenges and personalized training plans that adapt to your goals and schedule.</p>
                    </div>
                    <div> {/* icon */}
                        <h1>Inspiring Experiences</h1>
                        <p>From courtside to race day, get priority access to the events and sessions you don’t want to miss.</p>
                    </div>
                    </div>
                </div>
                <div>
                    <div> {/* icon */}
                        <h1>Fast, Free Shipping</h1>
                        <p>Free shipping always. Plus Member-Only pricing on expedited orders.</p>
                    </div>
                    <div> {/* icon */}
                        <h1>30-Day Wear Tests</h1>
                        <p>Wear it, test it, keep what you like.</p>
                    </div>
                    <div> {/* icon */}
                        <h1>In-Store All Star Treatment</h1>
                        <p>Get express checkout, store-to-door delivery in select North America stores.</p>
                    </div>
                    <div> {/* icon */}
                        <h1>Birthday Reward</h1>
                        <p>We’ll help you celebrate your big day with a special NikePlus Unlock.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <h1>GET REWARDED</h1>
                            <h1>FOR BEING ACTIVE.</h1>
                        </div>
                        <div>
                            <p>NikePlus Unlocks are how we inspire and reward you on the journey to being your best. Find them in your profile in the Nike App.</p>
                        </div>
                        <Link to='/'>Only in the Nike App</Link>
                    </div>
                </div>
                <div>
                    <h1>ACCESS OUR FAMILY OF APPS TO GET THE MOST OUT OF NIKEPLUS.</h1>
                    <div>
                        <div> {/* icon */}
                            <h1>Nike</h1>
                            <p>Shop: Explore everything Nike has to offer, tailored to you.</p>
                            <Link to="/">LEARN MORE</Link>
                        </div>
                        <div> {/* icon */}
                            <h1>Nike Run Club</h1>
                            <p>Run: Find the motivation you need to run better and more often.</p>
                            <Link to="/">LEARN MORE</Link>
                        </div>
                    </div>
                    <div>
                        <div> {/* icon */}
                            <h1>Nike Training Club</h1>
                            <p>Train: Break a sweat to over 160 guided workouts.</p>
                            <Link to="/">LEARN MORE</Link>
                        </div>
                        <div> {/* icon */}
                            <h1>SNKRS</h1>
                            <p>Collect: Get hooked up with the latest sneaker drops.</p>
                            <Link to="/">LEARN MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
