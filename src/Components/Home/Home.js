import React, { Component } from 'react';

import Nike1stImage from '../../Images/Nike1stImage.jpg';
import Nike2ndImage from '../../Images/Nike2ndImage.jpg';
import Nike3rdImage from '../../Images/Nike3rdImage.jpg';
import Nike4thImage from '../../Images/Nike4thImage.jpg';
import Nike5thImage from '../../Images/Nike5thImage.jpg';
import Nike6thImage from '../../Images/Nike6thImage.jpg';

import View1 from './View1';
import View2 from './View2';
import View3 from './View3';

class Home extends Component {

    render() { 
        return ( 
            <div className='homeContainer'>
                <div>
                    <View1 info={{image: Nike1stImage, h2Text: "IT'S ONLY A CRAZY DREAM UNTIL YOU DO IT.", pText: 'LeBron is committed to bringing LA another banner.', linkText: 'SHOP NBA'}}/>
                </div>
                <div>
                    <View2 info={{image: Nike2ndImage, h2Text: "NEW WAYS TO SHOW YOUR SWOOSH", pText: 'Proudly showcase your Swoosh-style with these new fall layers.', linkText: 'SHOP WOMEN' , linkText2: 'SHOP MEN'}}/>
                </div>
               <div>
                    <View1 info={{image: Nike3rdImage, h2Text: "FLY PAST YOUR CRAZY DREAMS", pText: "The Nike Zoom Fly Flyknit’s carbon-fiber launchpad propels you toward your race-day dreams.", linkText: "SHOP ZOOMFLY FLYKNIT"}}/>
                </div>
               <div>
                    <View2 info={{image: Nike4thImage, h2Text: "FALL'S WARDROBE STAPLE", pText: "Warm, functional and easy to layer up or down, fleece has become the official fabric of fall.", linkText: "SHOP WOMEN'S FLEECE", linkText2: "SHOP MEN'S FLEECE"}}/>
                </div>
               <div>
                    <View1 info={{image: Nike5thImage, h2Text: "UNLEASH YOUR CRAZY DREAMS", pText: "Nike Soccer’s quickest cleat, the Phantom delivers exceptional speed in every direction.", linkText: "SHOP SOCCER"}}/>
                </div>
               <div>
                    <View3 info={{image: Nike6thImage, h2Text: "ALL FOR ONE", h2Text2: "LEBRON XVI", pText: "The kids’ Air Force 1 NBA are for those who’ve grown up loving their team.", pText2: "Explosive performance with an ultra-strong Battleknit 2.0 Upper gives you the strength to chase your dreams", linkText: "SHOP KIDS", linkText2: "SHOP LEBRON"}}/>
                </div>
                {/* <img src={Nike2ndImage}></img> */}
            </div>
         );
    }
}
 
export default Home;