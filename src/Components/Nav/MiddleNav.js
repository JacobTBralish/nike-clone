import React from 'react';
import { Link } from 'react-router-dom';

import NikeSwoosh from '../../logos/NikeSwoosh.svg'


const MiddleNav = () => {
    return ( 
        <span className='navTest'>
        <div className='middleNav'>
            <div className='swooshDiv'>
                <Link to='/'><img src={NikeSwoosh} id='nikeSwoosh'></img></Link>
            </div>
            <div>
                <div class="dropdown">
                    <Link to='/mensshoes' class="dropbtn">MEN</Link>
                    <div class="dropdown-content">
                        <Link to='/mensshoes'>SHOES</Link>
                        <Link to='/'>SNKRS Launch Calender</Link>
                            <Link to='/'>Lifestyle</Link>
                            <Link to='/'>Running</Link>
                            <Link to='/'>Training & Gym</Link>
                            <Link to='/'>BasketBall</Link>
                            <Link to='/'>Jordan</Link>
                            <Link to='/'>Football</Link>
                            <Link to='/'>Soccer</Link>
                            <Link to='/'>Baseball</Link>
                            <Link to='/'>Golf</Link>
                            <Link to='/'>Skateboarding</Link>
                            <Link to='/'>Tennis</Link>
                            <Link to='/'>Boots</Link>
                            <Link to='/mensshoes'>All Shoes</Link>
                    </div>
                    <div class="dropdown-content">
                        <Link to='/'>CLOTHING</Link>
                            <Link to='/'>SNKRS Launch Calender</Link>
                            <Link to='/'>Lifestyle</Link>
                            <Link to='/'>Running</Link>
                            <Link to='/'>Training & Gym</Link>
                            <Link to='/'>BasketBall</Link>
                            <Link to='/'>Jordan</Link>
                            <Link to='/'>Football</Link>
                            <Link to='/'>Soccer</Link>
                            <Link to='/'>Baseball</Link>
                            <Link to='/'>Golf</Link>
                            <Link to='/'>Skateboarding</Link>
                            <Link to='/'>Tennis</Link>
                            <Link to='/'>Boots</Link>
                            <Link to='/'>All Shoes</Link>
                        <Link to='/'>ACCESSORIES & EQUIPMENT</Link>
                            <Link to='/'>Bags & Backpacks</Link>
                            <Link to='/'>Hats</Link>

                    </div>
                    <div class="dropdown-content">
                        <Link to='/'>SHOP COLLECTION</Link>
                            <Link to='/'>Tops & T-Shirts</Link>
                            <Link to='/'>Shorts</Link>
                            <Link to='/'>Polos</Link>
                            <Link to='/'>Hoodies & Sweatshirts</Link>
                            <Link to='/'>Jackets & Vests</Link>
                            <Link to='/'>Pants & Tights</Link>
                            <Link to='/'>Surf & Swimwear</Link>
                            <Link to='/'>Nike Pro & Compression</Link>
                            <Link to='/'>Socks & Underwear</Link>
                            <Link to='/'>Big & Tall</Link>
                            <Link to='/'>All Clothing</Link>

                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">WOMEN</button>
                    <div class="dropdown-content">
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">KIDS</button>
                    <div class="dropdown-content">
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">FAVORITES</button>
                    <div class="dropdown-content">
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                        <Link to='/'></Link>
                    </div>
                </div>
            </div>
            <div className='searchInput'>
                <input placeHolder='Search' id='navSearchBar'></input>
            </div>
        </div>
    </span>
     );
}
 
export default MiddleNav;