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
                <Link to='/allmensshoes' className="nav-link">MEN</Link>
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
                    <Link className='column-list-item' to='/allmensshoes'>SHOES</Link>
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
                <Link to='/allwomensshoes' className="nav-link">WOMEN</Link>
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
                    <Link className='column-list-item' to='/allwomensshoes'>SHOES</Link>
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
