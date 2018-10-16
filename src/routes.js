import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import MensShoes from './Components/MensShoe/MensShoeContainer';
import DetailedShoe from './Components/MensShoe/DetailedShoe';

export default (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/mensshoes' component={MensShoes}></Route>
        <Route path="/:id" component={DetailedShoe}></Route>
        <Route path="/cart/:id" component={Cart}></Route>
    </Switch>
)