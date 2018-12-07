import React, { Component } from 'react';

import Nike1stVideo from '../../Images/Nike1stVIdeo.mp4';
import Nike2ndImage from '../../Images/Nike2ndImage.jpg';
import Nike3rdImage from '../../Images/Nike3rdImage.jpg';
import Nike4thImage from '../../Images/Nike4thImage.jpg';

import View1 from './View1';
// import View2 from './View2';
import View3 from './View3';
import VideoView from './VideoView';

class Home extends Component {

    render() { 

        return ( 
            <div className='homeContainer'>
                {/* <div>
                    <View1 info={{image: 'https://content.nike.com/content/dam/one-nike/en_us/season-2018-ho/Home/1101/VaporFly_HP_p1_d.jpg.transform/full-screen/VaporFly_HP_p1_d.jpg', h2Text: "LIKE YOU DREAMED. ONLY FASTER.", pText: "he Vaporfly 4% Flyknit is our fastest race-day shoe made even lighter.", linkText: "SHOP VAPORFLY 4% FLYKNIT"}}/>
                </div>
               <>
                    <View3 id='marginFix' info={{image: 'https://content.nike.com/content/dam/one-nike/en_us/season-2018-ho/Home/1101/AirMax270_VapormaxUlt_HP_P2_d.jpg.transform/full-screen/AirMax270_VapormaxUlt_HP_P2_d.jpg', h2Text: "THE BOLDER THE BETTER", h2Text2: "LEAVE THE GROUND BEHIND", pText: "This is the season to make your biggest statement.", pText2: "That walking on air feel is not just in your head.", linkText: "SHOP AIRMAX 270", linkText2: "SHOP VAPORMAX"}}/>
                </>
                <div>
                    <View1 info={{image: 'https://content.nike.com/content/dam/one-nike/en_us/season-2018-ho/Home/1101/Layers_HP_p3_d.jpg.transform/full-screen/Layers_HP_p3_d.jpg', h2Text: "WIN AT WINTER", pText: "You know the cold's coming, and we've got you covered.", linkText: "SHOP NEW OUTTERWEAR"}}/>
                </div>
               <div>
                    <View3 info={{image: 'https://content.nike.com/content/dam/one-nike/en_us/season-2018-ho/Home/1101/Gifting_Jordan_HP_P4_d.jpg.transform/full-screen/Gifting_Jordan_HP_P4_d.jpg', h2Text: "LEBRON 16 '20_20", h2Text2: "CERTIFIED PLATINUM", pText: "See the dreams other dont in a colorway inspired by Lebron's unmatched court vision.", pText2: "The Air Jordan XI 'Platinum Tint' has arrived in premium fashion", linkText: "SHOP LEBRON 16", linkText2: "SHOP PLATINUM TINT"}}/>
                </div>
                <div>
                    <View1 info={{image: 'https://content.nike.com/content/dam/one-nike/en_us/season-2018-ho/Home/1101/YA_HP_p5_d.jpg.transform/full-screen/YA_HP_p5_d.jpg', h2Text: "HER TIME TO SHINE", pText: "Shiny metallic uppers make the perfect addition to her favorite shoes.", linkText: "SHOP GIRLS'"}}/>
                </div> */}





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