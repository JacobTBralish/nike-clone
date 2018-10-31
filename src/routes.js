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
import Account from './Components/AccountSettings/Account'
// Product Imports
import ProductGridwall from './Components/Products/ProductGridwall';
import AllMensShoes from './Data/AllMensShoesPg1-6.json';
import AllMensClothes from './Data/AllMensClothesPg1-15.json';
import AllWomensShoes from './Data/AllWomensShoesPg1-6.json';

export default (
    <Switch>
        <Route path='/storelocator' component={FindStore} />
        {/* <Route path='/mensshoes' component={MensShoes} /> */}
                {/* Product Routes */}
        <Route path='/allmensshoes' render={() => (
        <ProductGridwall name='AllMensShoes' fetch={ AllMensShoes } />
        )} />
        <Route path='/allmensclothes' render={() => (
        <ProductGridwall name='AllMensClothes' fetch={ AllMensClothes } />
        )} />
        <Route path='/allwomensshoes' render={() => (
        <ProductGridwall name='AllWomensShoes' fetch={ AllWomensShoes } />
        )} />
        <Route path='/shippingoptions' component={ShippingOptions}/>
        <Route path='/shippingform' component={ShippingForm}/>
        <Route path="/product/:id" component={DetailedShoe} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckoutPresentational} />
        <Route path="/nike/nike-plus" component={NikePlus} />
        <Route path="/orders" component={Orders} />
        <Route path="/settings" component={Account} />
        <Route path="/wishlist" component={Wishlist} />
        <Route exact path='/' component={Home} />
    </Switch>
)