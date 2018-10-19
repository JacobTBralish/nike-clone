import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import MensShoes from './Components/MensShoe/MensShoeContainer';
import DetailedShoe from './Components/MensShoe/DetailedShoe';
import Checkout from './Components/Checkout/CheckoutForm';
import FindStore from './Components/FindStore/FindStore';
import ShippingOptions from './Components/Checkout/ShippingOptions';
import ShippingForm from './Components/Checkout/ShippingForm';
import NikePlus from './Components/NikePlus/NikePlus';

export default (
    <Switch>
        <Route path='/storelocator' component={FindStore} />
        <Route path='/mensshoes' component={MensShoes} />
        <Route path='/shippingoptions' component={ShippingOptions}/>
        <Route path='/shippingform' component={ShippingForm}/>
        <Route path="/product/:id" component={DetailedShoe} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/nike/nike-plus" component={NikePlus} />
        <Route exact path='/' component={Home} />
    </Switch>
)