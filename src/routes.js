import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import MensShoes from './Components/MensShoe/MensShoeContainer';
import DetailedShoe from './Components/MensShoe/DetailedShoe';
import Checkout from './Components/Checkout/CheckoutForm';
import ShippingOptions from './Components/Checkout/ShippingOptions';
import ShippingForm from './Components/Checkout/ShippingForm';

export default (
    <Switch>
        <Route path='/mensshoes' component={MensShoes} />
        <Route path='/shippingoptions' component={ShippingOptions}/>
        <Route path='/shippingform' component={ShippingForm}/>
        <Route path="/product/:id" component={DetailedShoe} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path='/' component={Home} />
    </Switch>
)