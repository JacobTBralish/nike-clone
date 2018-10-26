import React, { Component } from 'react';

import Nike1stVideo from '../../Images/Nike1stVIdeo.mp4';
import Nike2ndImage from '../../Images/Nike2ndImage.jpg';
import Nike3rdImage from '../../Images/Nike3rdImage.jpg';
import Nike4thImage from '../../Images/Nike4thImage.jpg';

import View1 from './View1';
import View2 from './View2';
import View3 from './View3';
import VideoView from './VideoView';

class Home extends Component {

    render() { 

        return ( 
            <div className='homeContainer'>
                <div>
                    <VideoView info={{video: Nike1stVideo, h2Text: "'PLATINUM TINT': COMING 10.27", pText: 'The latest Air Jordan XI arrives in premium fashion.', linkText: 'LAUNCH DETAILS'}}/>
                </div>
                <div>
                    <View1 info={{image: Nike2ndImage, h2Text: "PUT THE TEAM ON YOUR BACK", pText: "Wear it for your squad. For your city. For a season you’ll never forget.", linkText: "SHOP ZOOMFLY FLYKNIT"}}/>
                </div>
               <div>
                    <View1 info={{image: Nike3rdImage, h2Text: "MAKE CRAZY DREAMS YOUR GOAL", pText: "Nike Soccer’s quickest cleat, the Phantom delivers exceptional speed in every direction.", linkText: "SHOP ZOOMFLY FLYKNIT"}}/>
                </div>
               <div>
                    <View3 info={{image: Nike4thImage, h2Text: "THE WARDROBE STAPLE OF FALL", h2Text2: "TRENDING FOR HER: NORTHERN BRIGHTS", pText: "Warm, functional and easy to layer up or down, fleece has become the official fabric of fall.", pText2: "Magical icy-blue patterns across comfy jackets, tights and tees.", linkText: "SHOP FLEECE", linkText2: "SHOP COLLECTION"}}/>
                </div>
            </div>
         );
    }
}
 
export default Home;