import React from 'react';
import { Link } from 'react-router-dom';

import NikeSwoosh from '../../logos/NikeSwoosh.svg'

const MiddleNav = () => {

    return ( <span className='navTest'>
    <div className='middleNav'>
        <div className='swooshDiv'>
            <Link to='/'><img src={NikeSwoosh} id='nikeSwoosh'></img></Link>
        </div>
        <div className='buttonCluster'>
            {/* wraps mens */}
            <div className="dropdown">
            {/* wraps men link */}
            {/* <div></div> */}
            <div className='nav-button' /* onMouseEnter={() => isHovered()} onMouseLeave={() => isHovered()} */>
                <Link to='/all mens shoes' className="nav-link">MEN</Link>
            {/* menu container */}
            <div className={/* ${toggle ? 'showContainer' : 'hideContainer'} */`dropdown-content-container`}>
            <div className='drop-down-content-sub-container'>
            
                <div className="dropdown-content-column">
                <ul className='column-list'>
                    <li className='column-list-item'><Link to='/'>NEW RELEASES</Link></li>
                    <li className='column-list-item'><Link to='/'>FLEECE FAVORITES</Link></li>
                    <li className='column-list-item'><Link to='/'>NIKE X NBA</Link></li>
                    <li className='column-list-item'><Link to='/'>BASKETBALL GEAR UP</Link></li>
                    <li className='column-list-item'><Link to='/'>THE BLACK AND WHITE TREND</Link></li>
                    <li className='column-list-item'><Link to='/'>BEST SELLERS</Link></li>
                    <li className='column-list-item'><Link to='/'>SALE</Link></li>
                </ul>
                </div>

                <div className="dropdown-content-column-left-line">
                    <Link className='column-list-item' to='/all mens shoes'>SHOES</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>SNKRS Launch Calender</Link></li>
                        <li className='column-list-link'><Link to='/mens lifestyle shoes'>Lifestyle</Link></li>
                        <li className='column-list-link'><Link to='/mens running shoes'>Running</Link></li>
                        <li className='column-list-link'><Link to='/mens training & gym shoes'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/mens basketball shoes'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/mens jordans'>Jordan</Link></li>
                        <li className='column-list-link'><Link to='/mens football cleat'>Football</Link></li>
                        <li className='column-list-link'><Link to='/mens soccer cleat'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/mens baseball cleats'>Baseball</Link></li>
                        <li className='column-list-link'><Link to='/mens golf shoes'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/mens skateboarding shoes'>Skateboarding</Link></li>
                        <li className='column-list-link'><Link to='/mens tennis shoes'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/mens boots'>Boots</Link></li>
                        <li className='column-list-link'><Link to='/all mens shoes'>All Shoes</Link></li>
                    </ul>
                </div>
                <div class="dropdown-content-column-no-line">
                    <Link className='column-list-item' className='column-list-item' to='/all mens clothes'>CLOTHING</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/mens tops & t-shirts'>Tops & T-Shirts</Link></li>
                        <li className='column-list-link'><Link to='/mens shorts'>Shorts</Link></li>
                        <li className='column-list-link'><Link to='/mens polos'>Polos</Link></li>
                        <li className='column-list-link'><Link to='/mens hoodies & sweatshirts'>Hoodies & Sweatshirts</Link></li>
                        <li className='column-list-link'><Link to='/mens jackets & vests'>Jackets & Vests</Link></li>
                        <li className='column-list-link'><Link to='/mens pants & tights'>Pants & Tights</Link></li>
                        <li className='column-list-link'><Link to='/menssurf & swimwear'>Surf & Swimwear</Link></li>
                        <li className='column-list-link'><Link to='/mens nike pro & compression'>Nike Pro & Compression</Link></li>
                        <li className='column-list-link'><Link to='/'>Socks & Underwear</Link></li>
                        <li className='column-list-link'><Link to='/'>Big & Tall</Link></li>
                        <li className='column-list-link'><Link to='/'>All Clothing</Link></li>
                        <li className='column-list-item'><Link to='/'>ACCESSORIES & EQUIPMENT</Link></li>
                        <li className='column-list-link'><Link to='/'>Bags & Backpacks</Link></li>
                        <li className='column-list-link'><Link to='/'>Hats</Link></li>
                    </ul>

                </div>
                <div class="dropdown-content-column-left-line-end">
                    <Link className='column-list-item' to='/'>SHOP COLLECTION</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/mensgolfshoes'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/mensjordans'>Jordan</Link></li>
                        <li className='column-list-link'><Link to='/menssoccercleat'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/mensrunningshoes'>Running</Link></li>
                        <li className='column-list-link'><Link to='/mensbasketballshoes'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/'>NikeLab</Link></li>
                        <li className='column-list-link'><Link to='/menstrainingshoes'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/mensboots'>Special Field Boot</Link></li>
                        <li className='column-list-link'><Link to='/mensfootballcleat'>Football</Link></li>
                        <li className='column-list-link'><Link to='/mensbaseballcleats'>Baseball</Link></li>
                        <li className='column-list-link'><Link to='/menstennisshoes'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/'>Nike Sportswear</Link></li>
                        <li className='column-list-link'><Link to='/'>ACG</Link></li>
                        <li className='column-list-link'><Link to='/mensskateboardingshoes'>Skateboarding</Link></li>
                        <li className='column-list-link'><Link to='/'>Fan Gear</Link></li>
                    </ul>

                </div>
                </div>
            </div>
            </div>
            
            </div>
            <div className="dropdown">
            {/* wraps men link */}
            {/* <div></div> */}
            <div className='nav-button' /* onMouseEnter={() => isHovered()} onMouseLeave={() => isHovered()} */>
                <Link to='/all womens shoes' className="nav-link">WOMEN</Link>
            {/* menu container */}
            <div className={/* ${toggle ? 'showContainer' : 'hideContainer'} */`dropdown-content-container`}>
            <div className='drop-down-content-sub-container'>
            
                <div className="dropdown-content-column">
                <ul className='column-list'>
                    <li className='column-list-item'><Link to='/'>NEW RELEASES</Link></li>
                    <li className='column-list-item'><Link to='/'>BEST SELLERS</Link></li>
                    <li className='column-list-item'><Link to='/'>FLEECE FAVORITES</Link></li>
                    <li className='column-list-item'><Link to='/'>FALL ESSENTIALS</Link></li>
                    <li className='column-list-item'><Link to='/'>TRENDING: DUSTY BRIGHTS</Link></li>
                    <li className='column-list-item'><Link to='/'>SALE</Link></li>
                </ul>
                </div>

                <div className="dropdown-content-column-left-line">
                    <Link className='column-list-item' to='/all womens shoes'>SHOES</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>SNKRS Launch Calender</Link></li>
                        <li className='column-list-link'><Link to='/'>Lifestyle</Link></li>
                        <li className='column-list-link'><Link to='/'>Running</Link></li>
                        <li className='column-list-link'><Link to='/'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/'>Jordan</Link></li>
                        <li className='column-list-link'><Link to='/'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/'>Skateboarding</Link></li>
                        <li className='column-list-link'><Link to='/'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/'>Boots</Link></li>
                        <li className='column-list-link'><Link to='/'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/allwomensshoes'>All Shoes</Link></li>
                    </ul>
                </div>
                <div class="dropdown-content-column-no-line">
                    <Link className='column-list-item' className='column-list-item' to='/'>CLOTHING</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>Plus Size</Link></li>
                        <li className='column-list-link'><Link to='/'>Tops & T-Shirts</Link></li>
                        <li className='column-list-link'><Link to='/'>Shorts</Link></li>
                        <li className='column-list-link'><Link to='/'>Hoodies & Pullovers</Link></li>
                        <li className='column-list-link'><Link to='/'>Pants & Tights</Link></li>
                        <li className='column-list-link'><Link to='/'>Crops & Capris</Link></li>
                        <li className='column-list-link'><Link to='/'>Jackets & Vests</Link></li>
                        <li className='column-list-link'><Link to='/'>Sports Bras</Link></li>
                        <li className='column-list-link'><Link to='/'>Compression & Nike Pro</Link></li>
                        <li className='column-list-link'><Link to='/'>Skirts & Dresses</Link></li>
                        <li className='column-list-link'><Link to='/'>Surf & Swimwear</Link></li>
                        <li className='column-list-link'><Link to='/'>Socks</Link></li>
                        <li className='column-list-link'><Link to='/'>All Clothing</Link></li>
                        <li className='column-list-item'><Link to='/'>ACCESSORIES & EQUIPMENT</Link></li>
                        <li className='column-list-link'><Link to='/'>Bags & Backpacks</Link></li>
                        <li className='column-list-link'><Link to='/'>Apple Watch Nike+</Link></li>
                    </ul>

                </div>
                <div class="dropdown-content-column-left-line-end">
                    <Link className='column-list-item' to='/'>SHOP COLLECTION</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>SNKRS Launch Calender</Link></li>
                        <li className='column-list-link'><Link to='/'>Running</Link></li>
                        <li className='column-list-link'><Link to='/'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/'>Fan Gear</Link></li>
                        <li className='column-list-link'><Link to='/'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/'>Nike Sportswear</Link></li>
                        <li className='column-list-link'><Link to='/'>ACG</Link></li>
                        <li className='column-list-link'><Link to='/'>NikeLab</Link></li>
                        <li className='column-list-link'><Link to='/'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/'>Volleyball</Link></li>
                        <li className='column-list-link'><Link to='/'>Yoga</Link></li>
                    </ul>

                </div>
                </div>
            </div>
            </div>
            
            </div>
            <div className="dropdown">
            {/* wraps men link */}
            {/* <div></div> */}
            <div className='nav-button' /* onMouseEnter={() => isHovered()} onMouseLeave={() => isHovered()} */>
                <Link to='/mensshoes' className="nav-link">KIDS</Link>
            {/* menu container */}
            <div className={/* ${toggle ? 'showContainer' : 'hideContainer'} */`dropdown-content-container`}>
            <div className='drop-down-content-sub-container'>
            
                <div className="dropdown-content-column">
                <ul className='column-list'>
                    <li className='column-list-item'><Link to='/'>NEW RELEASES</Link></li>
                    <li className='column-list-item'><Link to='/'>FLEECE FAVORITES</Link></li>
                    <li className='column-list-item'><Link to='/'>NIKE X NBA</Link></li>
                    <li className='column-list-item'><Link to='/'>BASKETBALL GEAR UP</Link></li>
                    <li className='column-list-item'><Link to='/'>THE BLACK AND WHITE TREND</Link></li>
                    <li className='column-list-item'><Link to='/'>BEST SELLERS</Link></li>
                    <li className='column-list-item'><Link to='/'>SALE</Link></li>
                </ul>
                </div>

                <div className="dropdown-content-column-left-line">
                    <Link className='column-list-item' to='/mensshoes'>SHOES</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>SNKRS Launch Calender</Link></li>
                        <li className='column-list-link'><Link to='/'>Lifestyle</Link></li>
                        <li className='column-list-link'><Link to='/'>Running</Link></li>
                        <li className='column-list-link'><Link to='/'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/'>Jordan</Link></li>
                        <li className='column-list-link'><Link to='/'>Football</Link></li>
                        <li className='column-list-link'><Link to='/'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/'>Baseball</Link></li>
                        <li className='column-list-link'><Link to='/'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/'>Skateboarding</Link></li>
                        <li className='column-list-link'><Link to='/'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/'>Boots</Link></li>
                        <li className='column-list-link'><Link to='/mensshoes'>All Shoes</Link></li>
                    </ul>
                </div>
                <div class="dropdown-content-column-no-line">
                    <Link className='column-list-item' className='column-list-item' to='/'>CLOTHING</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>Tops & T-Shirts</Link></li>
                        <li className='column-list-link'><Link to='/'>Shorts</Link></li>
                        <li className='column-list-link'><Link to='/'>Polos</Link></li>
                        <li className='column-list-link'><Link to='/'>Hoodies & Sweatshirts</Link></li>
                        <li className='column-list-link'><Link to='/'>Jackets & Vests</Link></li>
                        <li className='column-list-link'><Link to='/'>Pants & Tights</Link></li>
                        <li className='column-list-link'><Link to='/'>Surf & Swimwear</Link></li>
                        <li className='column-list-link'><Link to='/'>Nike Pro & Compression</Link></li>
                        <li className='column-list-link'><Link to='/'>Socks & Underwear</Link></li>
                        <li className='column-list-link'><Link to='/'>Big & Tall</Link></li>
                        <li className='column-list-link'><Link to='/'>All Clothing</Link></li>
                        <li className='column-list-link'><Link to='/'>ACCESSORIES & EQUIPMENT</Link></li>
                        <li className='column-list-link'><Link to='/'>Bags & Backpacks</Link></li>
                        <li className='column-list-link'><Link to='/'>Hats</Link></li>
                    </ul>

                </div>
                <div class="dropdown-content-column-left-line-end">
                    <Link className='column-list-item' to='/'>SHOP COLLECTION</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>SNKRS Launch Calender</Link></li>
                        <li className='column-list-link'><Link to='/'>Lifestyle</Link></li>
                        <li className='column-list-link'><Link to='/'>Running</Link></li>
                        <li className='column-list-link'><Link to='/'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/'>Jordan</Link></li>
                        <li className='column-list-link'><Link to='/'>Football</Link></li>
                        <li className='column-list-link'><Link to='/'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/'>Baseball</Link></li>
                        <li className='column-list-link'><Link to='/'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/'>Skateboarding</Link></li>
                        <li className='column-list-link'><Link to='/'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/'>Boots</Link></li>
                        <li className='column-list-link'><Link to='/'>All Shoes</Link></li>
                    </ul>

                </div>
                </div>
            </div>
            </div>
            
            </div>
            <div className="dropdown">
            {/* wraps men link */}
            {/* <div></div> */}
            <div className='nav-button' /* onMouseEnter={() => isHovered()} onMouseLeave={() => isHovered()} */>
                <Link to='/mensshoes' className="nav-link">FAVORITES</Link>
            {/* menu container */}
            <div className={/* ${toggle ? 'showContainer' : 'hideContainer'} */`dropdown-content-container`}>
            <div className='drop-down-content-sub-container'>
            
                <div className="dropdown-content-column">
                <ul className='column-list'>
                    <li className='column-list-item'><Link to='/'>NEW RELEASES</Link></li>
                    <li className='column-list-item'><Link to='/'>FLEECE FAVORITES</Link></li>
                    <li className='column-list-item'><Link to='/'>NIKE X NBA</Link></li>
                    <li className='column-list-item'><Link to='/'>BASKETBALL GEAR UP</Link></li>
                    <li className='column-list-item'><Link to='/'>THE BLACK AND WHITE TREND</Link></li>
                    <li className='column-list-item'><Link to='/'>BEST SELLERS</Link></li>
                    <li className='column-list-item'><Link to='/'>SALE</Link></li>
                </ul>
                </div>

                <div className="dropdown-content-column-left-line">
                    <Link className='column-list-item' to='/mensshoes'>SHOES</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>SNKRS Launch Calender</Link></li>
                        <li className='column-list-link'><Link to='/'>Lifestyle</Link></li>
                        <li className='column-list-link'><Link to='/'>Running</Link></li>
                        <li className='column-list-link'><Link to='/'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/'>Jordan</Link></li>
                        <li className='column-list-link'><Link to='/'>Football</Link></li>
                        <li className='column-list-link'><Link to='/'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/'>Baseball</Link></li>
                        <li className='column-list-link'><Link to='/'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/'>Skateboarding</Link></li>
                        <li className='column-list-link'><Link to='/'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/'>Boots</Link></li>
                        <li className='column-list-link'><Link to='/mensshoes'>All Shoes</Link></li>
                    </ul>
                </div>
                <div class="dropdown-content-column-no-line">
                    <Link className='column-list-item' className='column-list-item' to='/'>CLOTHING</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>Tops & T-Shirts</Link></li>
                        <li className='column-list-link'><Link to='/'>Shorts</Link></li>
                        <li className='column-list-link'><Link to='/'>Polos</Link></li>
                        <li className='column-list-link'><Link to='/'>Hoodies & Sweatshirts</Link></li>
                        <li className='column-list-link'><Link to='/'>Jackets & Vests</Link></li>
                        <li className='column-list-link'><Link to='/'>Pants & Tights</Link></li>
                        <li className='column-list-link'><Link to='/'>Surf & Swimwear</Link></li>
                        <li className='column-list-link'><Link to='/'>Nike Pro & Compression</Link></li>
                        <li className='column-list-link'><Link to='/'>Socks & Underwear</Link></li>
                        <li className='column-list-link'><Link to='/'>Big & Tall</Link></li>
                        <li className='column-list-link'><Link to='/'>All Clothing</Link></li>
                        <li className='column-list-link'><Link to='/'>ACCESSORIES & EQUIPMENT</Link></li>
                        <li className='column-list-link'><Link to='/'>Bags & Backpacks</Link></li>
                        <li className='column-list-link'><Link to='/'>Hats</Link></li>
                    </ul>

                </div>
                <div class="dropdown-content-column-left-line-end">
                    <Link className='column-list-item' to='/'>SHOP COLLECTION</Link>
                    <ul>
                        <li className='column-list-link'><Link to='/'>SNKRS Launch Calender</Link></li>
                        <li className='column-list-link'><Link to='/'>Lifestyle</Link></li>
                        <li className='column-list-link'><Link to='/'>Running</Link></li>
                        <li className='column-list-link'><Link to='/'>Training & Gym</Link></li>
                        <li className='column-list-link'><Link to='/'>BasketBall</Link></li>
                        <li className='column-list-link'><Link to='/'>Jordan</Link></li>
                        <li className='column-list-link'><Link to='/'>Football</Link></li>
                        <li className='column-list-link'><Link to='/'>Soccer</Link></li>
                        <li className='column-list-link'><Link to='/'>Baseball</Link></li>
                        <li className='column-list-link'><Link to='/'>Golf</Link></li>
                        <li className='column-list-link'><Link to='/'>Skateboarding</Link></li>
                        <li className='column-list-link'><Link to='/'>Tennis</Link></li>
                        <li className='column-list-link'><Link to='/'>Boots</Link></li>
                        <li className='column-list-link'><Link to='/'>All Shoes</Link></li>
                    </ul>

                </div>
                </div>
            </div>
            </div>
            
            </div>
        </div>
        <div className='searchInput'>
            <input placeholder='Search' id='navSearchBar'></input>
        </div>
    </div>
</span> );

}
 export default MiddleNav;
