import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
// import MensShoes from './Components/MensShoe/MensShoeContainer';
import DetailedShoe from './Components/Products/DetailedShoe';
import CheckoutPresentational from './Components/Checkout/CheckoutPresentational';
import FindStore from './Components/FindStore/FindStore';
import ShippingOptions from './Components/Checkout/ShippingOptions';
import ShippingForm from './Components/Checkout/ShippingForm';
import NikePlus from './Components/NikePlus/NikePlus';
import Orders from './Components/Orders/Orders';
// import NikeSettings from './Components/AccountSettings/Settings';
import Wishlist from './Components/Wishlist/Wishlist';
import FemaleSideBarSort from './Components/ProductSort/FemaleSideBarSort';
import Account from './Components/AccountSettings/Account'
// Product Imports
import ProductGridwall from './Components/Products/ProductGridwall';
// import AllMensShoes from './Data/AllMensShoesPg1-6.json';
// import AllNikeStores from './Components/FindStore/AllNikeStores';
// import AllMensClothes from './Data/AllMensClothesPg1-15.json';
// import AllWomensShoes from './Data/AllWomensShoesPg1-6.json';
// import NikeStores from './Components/FindStore/NikeStores';

import {AllMensShoes, AllNikeStores, AllMensClothes, AllWomensShoes} from './APICalls';

export default (
    <Switch>
        <Route path='/test' component={FemaleSideBarSort} />
        <Route path='/storelocator' component={FindStore} />
        {/* <Route path='/mensshoes' component={MensShoes} /> */}
                {/* Product Routes */}
        <Route path='/all mens shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} fetch={ AllMensShoes } />
        )} />
        <Route path='/mens lifestyle shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's Shoe" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens running shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's Running Shoe" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens training & gym shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's Training Shoe" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens basketball shoes' render={() => (
        <ProductGridwall nfl={false} nba={true} name="Basketball Shoe" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens baseball cleats' render={() => (
        <ProductGridwall nfl={false} nba={true} name="Men's Baseball Cleat" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens lacrosse cleat' render={() => (
        <ProductGridwall nfl={false} nba={true} name="Lacrosse Cleat" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens soccer cleat' render={() => (
        <ProductGridwall nfl={false} nba={true} name="Men's Soccer Cleat" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens boots' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's Boot" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens skateboarding shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's Skateboarding Shoe" fetch={ AllMensShoes } />
        )} />
        <Route path='/mens gameday shoes' render={() => (
        <ProductGridwall nfl={true} nfl={true} nba={false} name="Men's Gym/Gameday Shoe" fetch={ AllMensShoes } />
        )} />
        <Route path='/unisex shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Unisex Shoe" fetch={ AllMensShoes } />
        )} />
        <Route path='/all mens clothes' render={() => (
        <ProductGridwall nfl={false} nba={false} /* name='AllMensClothes' */ fetch={ AllMensClothes } />
        )} />
        <Route path='/mens tops & t-shirts' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's T-Shirt" fetch={ AllMensClothes } />
        )} />
        <Route path='/mens polos' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's Polo" fetch={ AllMensClothes } />
        )} />
        <Route path='/mens shorts' render={() => (
        <ProductGridwall nfl={false} nba={false} name="Men's Shorts" fetch={ AllMensClothes } />
        )} />
        {/* <Route path='/all womens shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} name='AllWomensShoes' fetch={ AllWomensShoes } />
        )} /> */}
        <Route path='/all womens shoes' render={() => (
        <ProductGridwall nfl={false} nba={false} /* name="Women's Shoes" */ fetch={ AllWomensShoes } />
        )} />
        <Route path='/shippingoptions' component={ShippingOptions}/>
        <Route path='/shippingform' component={ShippingForm}/>
        <Route path='/product/:id' component={DetailedShoe} />
        <Route path='/allstores' component={AllNikeStores} />
        {/* <Route path='/nikestores' component={NikeStores} /> */}
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={CheckoutPresentational} />
        <Route path='/nike/nike-plus' component={NikePlus} />
        <Route path='/orders' component={Orders} />
        <Route path='/settings' component={Account} />
        {/* <Route path="/settin" component={Accountss} /> */}
        <Route path='/wishlist' component={Wishlist} />
        <Route exact path='/' component={Home} />
    </Switch>
)